import { addScriptHook, W3TS_HOOK } from "w3ts";
import { updateLeaderboardSettingsDisplay } from "settings/time";
import { president } from "settings/settings";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { bulldog } from "bulldog/settings";

const Trig_vamp_Actions = () => {
  vampOn = !vampOn;
  if (vampOn) {
    udg_switchOn = false;
    president.enabled = false;
    bulldog.enabled = false;
  }
  updateLeaderboardSettingsDisplay();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_vamp = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_vamp, "-vamp");
  TriggerAddCondition(gg_trg_vamp, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_vamp, Trig_vamp_Actions);
});
