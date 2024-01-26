import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";

const checkAutoTimeFlag = () => {
  const oldTime = udg_time;
  defaultTime();
  if (oldTime !== udg_time) {
    udg_autoTime = false;
    udg_time = oldTime;
  } else udg_autoTime = true;
};

export const updateLeaderboardSettingsDisplay = () => {
  let s = "|CFFED1C24Next: " + simpleformatTime(udg_time);
  if (udg_switchOn) s += " switch";
  if (vampOn) s += " vamp";

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
