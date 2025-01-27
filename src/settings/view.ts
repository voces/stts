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

export const toggleView = (enabled?: boolean) => {
  const passed = typeof enabled === "boolean";
  if (!passed) enabled = !udg_viewOn;
  udg_viewOn = enabled as boolean;
  if (udg_viewOn) createFogModifiers();
  else destroyFogModifiers();
  updateLeaderboardSettingsDisplay(passed);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-view");
  TriggerAddCondition(t, Condition(() => GetTriggerPlayer() === udg_Custom && (!udg_gameStarted || udg_practiceOn)));
  TriggerAddAction(t, toggleView);

  // Flash map
  toggleView();
  toggleView();
});
