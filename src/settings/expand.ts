import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { updateLeaderboardSettingsDisplay } from "./time";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_mapExpand = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_mapExpand, "-expand");
  TriggerAddCondition(gg_trg_mapExpand, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_mapExpand, () => {
    udg_mapExpand = !udg_mapExpand;
    if (udg_mapExpand) udg_mapShrink = false;
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      `                              |cffffcc00Expand mode ${udg_mapExpand ? "enabled" : "disabled"}.`,
    );
    updateLeaderboardSettingsDisplay();
  });
});
