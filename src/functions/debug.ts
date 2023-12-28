import { MapPlayerEx } from "handles/MapPlayerEx";
import { TriggerEx } from "handles/TriggerEx";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = TriggerEx.create();
  t.registerPlayerEvent(MapPlayerEx.fromIndex(0)!, EVENT_PLAYER_MOUSE_MOVE);
  let x = 0;
  let y = 0;
  t.addAction(() => {
    x = BlzGetTriggerPlayerMouseX();
    y = BlzGetTriggerPlayerMouseY();
  });

  TriggerEx.create().registerAnyPlayerChatEvent("-farm", false).addAction(() => {
    const parts = GetEventPlayerChatString()!.split(" ");
    CreateUnit(Player(1)!, FourCC(parts.length > 1 && parts[1].length === 4 ? parts[1] : "hhou"), x, y, 270);
  });
});
