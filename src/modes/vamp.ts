import { addScriptHook, W3TS_HOOK } from "w3ts";
import { updateLeaderboardSettingsDisplay } from "settings/time";
import { president } from "./president";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_vamp_Actions = () => {
  vampOn = !vampOn;
  if (vampOn) {
    udg_switchOn = false;
    president.enabled = false;
    DisableTrigger(gg_trg_sheepDies);
    DisableTrigger(gg_trg_spiritDies);
    DisableTrigger(gg_trg_sheepSwitch);
    EnableTrigger(gg_trg_sheepVamp);
  } else {
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
    DisableTrigger(gg_trg_sheepVamp);
  }
  updateLeaderboardSettingsDisplay();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_vamp = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_vamp, "-vamp");
  TriggerAddCondition(gg_trg_vamp, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_vamp, Trig_vamp_Actions);
});
