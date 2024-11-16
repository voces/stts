import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";
import { farmVision, income, president, spawnSetting, switchSetting } from "./settings";
import { triggerIntermissionUpdate } from "ui/hooks";
import { FrameEx } from "handles/FrameEx";

export const getDefaultTime = () => {
  const i = CountPlayersInForceBJ(udg_Sheep);
  const n = CountPlayersInForceBJ(udg_Wolf);

  if (i === 1 && n === 3) return 180;
  else if (i === 2 && n === 4) return 360;
  else if (i === 3 && n === 4) return 720;
  else if (i === 3 && n === 5) return 480;
  else if (i === 4 && n === 6) return 600;
  else if (i === 5 && n === 5) return 900;
  else if (i === 5 && n === 6) return 720;
  else if (i === 6 && n === 6) return 1200;
  else if (i + n >= 12) return 1200;
  else if (i + n >= 10) return 900;
  else if (i + n >= 8) return 480;
  return 360;
};

export const checkAutoTimeFlag = (skipIntermission = false) => {
  const oldTime = udg_time;
  udg_autoTime = true;
  defaultTime(skipIntermission);
  if (oldTime !== udg_time) {
    udg_autoTime = false;
    udg_time = oldTime;
  } else udg_autoTime = true;
};

export const updateLeaderboardSettingsDisplay = (skipIntermission = false) => {
  if (!skipIntermission) triggerIntermissionUpdate();

  let s = "";
  if (!udg_autoTime) s += ` ${simpleformatTime(udg_time)}`;
  if (udg_switchOn) {
    s += " switch";
    if (udg_wispPoints > 0) {
      s += ` to ${udg_wispPoints}`;
      if (Number.isFinite(switchSetting.goalTime)) s += ` or ${simpleformatTime(switchSetting.goalTime)}`;
    } else if (Number.isFinite(switchSetting.goalTime)) s += ` to ${simpleformatTime(switchSetting.goalTime)}`;
  }
  if (vampOn) s += " vamp";
  if (president.enabled) s += " pres";
  if (udg_viewOn) s += " view";
  if (farmVision.vision !== -1) s += ` v${farmVision.vision.toFixed(0)}`;
  if (udg_mapExpand) s += " expand";
  if (udg_mapShrink) s += " shrink";
  if (udg_sheepGold > 0 || udg_wolfGold > 0) {
    if (udg_sheepGold === udg_wolfGold) s += ` g${udg_sheepGold}`;
    else s += ` g${udg_sheepGold},${udg_wolfGold}`;
  }
  if (income.sheep !== 1 || income.wolves !== 1 || income.savings !== 1) {
    if (income.sheep === income.wolves && income.sheep === income.savings) s += ` i${income.sheep}`;
    else if (income.sheep === income.savings) s += ` i${income.sheep},${income.wolves}`;
    else s += ` i${income.sheep},${income.wolves},${income.savings}`;
  }
  if (spawnSetting.mode !== "free") s += spawnSetting.mode === "static" ? " ss" : " rs";

  if (s === "") s = " Standard";

  FrameEx.fromName("ResourceBarUpkeepText").setText(string.gsub(s.slice(1), ":00", "m")[0]);
};

const Trig_time_Actions = () => {
  const timeString = GetEventPlayerChatString()!.split(" ")[1];
  if (!timeString) return;

  const parts = timeString.split(":");
  let time = 0;
  let mult = parts.length === 1 ? 60 : 1;
  for (let i = parts.length - 1; i >= 0; i--) {
    time += parseFloat(parts[i] === "" ? "0" : parts[i]) * mult;
    mult *= 60;
  }

  if (time < 15 || time > 7200) return; // Less than 15 second or more than two hours probably an accident

  udg_time = time;

  checkAutoTimeFlag(); // Disable auto time if manually adjusted away from correct time

  updateLeaderboardSettingsDisplay();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_time = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_time, "-time ", false);
  TriggerAddCondition(gg_trg_time, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_time, Trig_time_Actions);

  {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_START);
    t.addCondition(() => GetTrainedUnitType() === FourCC("h00G"));
    t.addAction(() => {
      const u = GetTriggerUnit()!;
      udg_autoTime = true;
      defaultTime();
      TriggerSleepAction(0);
      IssueImmediateOrderById(u, 851976);
    });
  }
});
