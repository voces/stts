import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { updateLeaderboardSettingsDisplay } from "./time";

const createFogModifiers = () => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const modifier = udg_view[i + 1];
    if (!modifier) udg_view[i + 1] = CreateFogModifierRectBJ(true, Player(i)!, FOG_OF_WAR_VISIBLE, GetWorldBounds()!);
  }
};

const destroyFogModifiers = () => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const modifier = udg_view[i + 1];
    if (modifier) {
      DestroyFogModifier(modifier);
      udg_view[i + 1] = undefined;
    }
  }
};

export const toggleView = (enabled = !udg_viewOn) => {
  udg_viewOn = enabled;
  if (udg_viewOn) createFogModifiers();
  else destroyFogModifiers();
};

const Trig_view_Actions = () => {
  toggleView();
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
