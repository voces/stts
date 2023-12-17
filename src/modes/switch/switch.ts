import { updateLeaderboardSettingsDisplay } from "settings/time";
import { president } from "modes/president";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

const Trig_switch_Actions = () => {
  const s = GetEventPlayerChatString()!.toLowerCase();
  if (udg_switchOn && s === "-switch") { // disabling
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
    DisableTrigger(gg_trg_sheepSwitch);
    udg_switchOn = false;
    udg_dummyWisps = 0;
    udg_wispPoints = 0;
    updateLeaderboardSettingsDisplay();
    return;
  }

  DisableTrigger(gg_trg_sheepDies);
  DisableTrigger(gg_trg_spiritDies);
  DisableTrigger(gg_trg_sheepVamp);
  EnableTrigger(gg_trg_sheepSwitch);
  vampOn = false;
  president.enabled = false;
  udg_switchOn = true;

  if (s === "-switch") {
    udg_sheepInvul = 5;
    udg_wolfSpawn = 10;
    udg_dummyWisps = 0;
    udg_wispPoints = 0;
  } else {
    const args = s.split(" ").slice(1).map((a) => S2I(a === "" ? "0" : a));
    udg_sheepInvul = args.length > 0 && args[0] >= 0 && args[0] <= 5 ? args[0] === 0 ? 0.01 : args[0] : 5;
    udg_wolfSpawn = args.length > 1 && args[1] >= 0 && args[1] <= 10 ? args[1] === 0 ? 0.01 : args[1] : 10;
    udg_dummyWisps = args.length > 2 && args[2] >= 0 && args[2] <= 5 ? args[2] : 0;
    udg_wispPoints = args.length > 3 && args[3] >= 0 && args[3] <= 10 ? args[3] : 0;
  }
  updateLeaderboardSettingsDisplay();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_switch = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_switch, "-switch", false);
  TriggerAddCondition(gg_trg_switch, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_switch, Trig_switch_Actions);
});
