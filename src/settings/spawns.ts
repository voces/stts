import { ABILITY_TYPE_ID_RESET_START_POSITION } from "constants";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { TriggerEx } from "handles/TriggerEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { game } from "util/game";
import { setTimeout } from "util/setTimeout";
import { addScriptHook, FogModifier, W3TS_HOOK } from "w3ts";
import { spawnSetting } from "./settings";
import { updateLeaderboardSettingsDisplay } from "./time";

export const spawns = new Map<player, { x: number; y: number }>();

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  let t = TriggerEx.create();
  t.registerAnyPlayerChatEvent("-freespawn", false); // allow -freespawns
  t.addAction(() => {
    if (!MapPlayerEx.fromEvent()!.isHost) return;
    spawnSetting.mode = spawnSetting.mode === "free" ? "static" : "free";
    displayTimedTextToAll(`|CFF00AEEFFree spawns |CFFED1C24${spawnSetting.mode === "free" ? "enabled" : "disabled"}|r`);
    updateLeaderboardSettingsDisplay();
  });

  t = TriggerEx.create();
  t.registerAnyPlayerChatEvent("-randomspawn", false);
  t.addAction(() => {
    if (udg_gameStarted || !MapPlayerEx.fromEvent()!.isHost) return;
    spawnSetting.mode = spawnSetting.mode === "random" ? "static" : "random";
    displayTimedTextToAll(
      `|CFF00AEEFRandom spawns |CFFED1C24${spawnSetting.mode === "random" ? "enabled" : "disabled"}|r`,
    );
    updateLeaderboardSettingsDisplay();
  });
});

game.onSpellEnd((e) => {
  if (e.spellId !== ABILITY_TYPE_ID_RESET_START_POSITION) return;

  const u = e.unit;
  const p = u.owner;
  const x = GetRectCenterX(udg_startLocation[p.cid]);
  const y = GetRectCenterY(udg_startLocation[p.cid]);

  u.setPosition(x, y);
  spawns.set(p.handle, { x, y });
  PanCameraToTimedForPlayer(p.handle, x, y, 0);
  const modifier = FogModifier.create(MapPlayerEx.fromEvent()!, FOG_OF_WAR_VISIBLE, x, y, 128, true, true)!;
  modifier.start();
  setTimeout(1, () => modifier.destroy());
});
