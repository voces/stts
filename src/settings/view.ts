import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { updateLeaderboardSettingsDisplay } from "./time";

const Trig_view_Actions = () => {
  udg_viewOn = !udg_viewOn;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (udg_viewOn) {
      if (!udg_view[i + 1]) {
        udg_view[i + 1] = CreateFogModifierRectBJ(true, Player(i)!, FOG_OF_WAR_VISIBLE, GetWorldBounds()!);
      }
    } else {
      if (udg_view[i + 1]) udg_view[i] = (DestroyFogModifier(udg_view[i + 1]!), undefined);
    }
  }
  updateLeaderboardSettingsDisplay();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_view = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_view, "-view");
  TriggerAddCondition(gg_trg_view, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_view, Trig_view_Actions);

  // Flash map
  Trig_view_Actions();
  Trig_view_Actions();
});
