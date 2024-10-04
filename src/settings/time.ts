import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";
import { farmVision, income, president, spawnSetting, switchSetting } from "./settings";
import { triggerIntermissionUpdate } from "ui/hooks";

export const checkAutoTimeFlag = (skipIntermission = false) => {
  const oldTime = udg_time;
  defaultTime(skipIntermission);
  if (oldTime !== udg_time) {
    udg_autoTime = false;
    udg_time = oldTime;
  } else udg_autoTime = true;
};

export const updateLeaderboardSettingsDisplay = (skipIntermission = false) => {
  if (!skipIntermission) triggerIntermissionUpdate();

  let s = "|CFFED1C24Next: " + simpleformatTime(udg_time);
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
  if (farmVision.vision !== -1) s += ` v${farmVision.vision}`;
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
  if (spawnSetting.mode !== "static") s += spawnSetting.mode === "free" ? " fs" : " rs";

  LeaderboardSetPlayerItemLabelBJ(Player(PLAYER_NEUTRAL_PASSIVE)!, GetLastCreatedLeaderboard()!, s);
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
