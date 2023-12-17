import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_mapShrink = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_mapShrink, "-shrink");
  TriggerAddCondition(gg_trg_mapShrink, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_mapShrink, () => {
    udg_mapShrink = !udg_mapShrink;
    if (udg_mapShrink) udg_mapExpand = false;
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      `                              |cffffcc00Shrink mode ${udg_mapShrink ? "enabled" : "disabled"}.`,
    );
  });
});
