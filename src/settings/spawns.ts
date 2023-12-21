import { MapPlayerEx } from "handles/MapPlayerEx";
import { TriggerEx } from "handles/TriggerEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { addScriptHook, W3TS_HOOK } from "w3ts";

export const spawnSetting = { mode: "static" as "static" | "free" | "random" };

export const spawns = new Map<player, { x: number; y: number }>();

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  let t = TriggerEx.create();
  t.registerAnyPlayerChatEvent("-freespawn", false); // allow -freespawns
  t.addAction(() => {
    if (udg_gameStarted || !MapPlayerEx.fromEvent()!.isHost) return;
    spawnSetting.mode = spawnSetting.mode === "free" ? "static" : "free";
    displayTimedTextToAll(
      `                              |CFF00AEEFFree spawns |CFFED1C24${
        spawnSetting.mode === "free" ? "enabled" : "disabled"
      }|r`,
    );
  });

  t = TriggerEx.create();
  t.registerAnyPlayerChatEvent("-randomspawn", false);
  t.addAction(() => {
    if (udg_gameStarted || !MapPlayerEx.fromEvent()!.isHost) return;
    spawnSetting.mode = spawnSetting.mode === "random" ? "static" : "random";
    displayTimedTextToAll(
      `                              |CFF00AEEFRandom spawns |CFFED1C24${
        spawnSetting.mode === "random" ? "enabled" : "disabled"
      }|r`,
    );
  });
});
