//===========================================================================
// Trigger: zoom
//
// afk == 0 here
// afk == 1 came back during pick, was not picked
// afk == 2 back, watching game
// afk == 3 went afk before the game started
// afk == 4, went afk during game or after being picked
//===========================================================================

import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const saveZooms = (p: player): void => {
  if (p !== GetLocalPlayer()) return;

  s__File_close(
    s__File_write(
      s__File_open("revo/zooms.txt"),
      R2S(udg_sheepZoom[GetConvertedPlayerId(GetTriggerPlayer()!)]) + " " +
        R2S(udg_wolfZoom[GetConvertedPlayerId(GetTriggerPlayer()!)]) + " " +
        R2S(udg_wispZoom[GetConvertedPlayerId(GetTriggerPlayer()!)]),
    ),
  );
};

const smolNumbers = (val: number): number => {
  if (val < 1) return val;
  let i = 0;
  while (true) {
    if (++i === 100) break; // Infinite loop!
    if (val > 400) break;
    val = val * 10;
  }
  return val;
};

const setZooms = (
  p: player,
  values: number,
  val1: number,
  val2: number,
  val3: number,
): void => {
  const pId = GetConvertedPlayerId(p);
  if (values === 1) {
    udg_sheepZoom[pId] = Math.max(Math.min(val1, 2400), 1350);
    udg_wolfZoom[pId] = Math.max(Math.min(val1, 2700), 1350);
    udg_wispZoom[pId] = Math.max(Math.min(val1, 3350), 1350);
  } else if (values === 2) {
    udg_sheepZoom[pId] = Math.max(Math.min(val1, 2400), 1350);
    udg_wolfZoom[pId] = Math.max(Math.min(val2, 2700), 1350);
    udg_wispZoom[pId] = Math.max(Math.min(val1, 3350), 1350);
  } else if (values === 3) {
    udg_sheepZoom[pId] = Math.max(Math.min(val1, 2400), 1350);
    udg_wolfZoom[pId] = Math.max(Math.min(val2, 2700), 1350);
    udg_wispZoom[pId] = Math.max(Math.min(val3, 3350), 1350);
  }

  if (udg_sheepLastGame[pId]) {
    if (udg_AFK[pId] > 0) SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_wispZoom[pId], 0);
    else if (IsPlayerInForce(p, udg_Spirit)) {
      SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_wispZoom[pId], 0);
    } else SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_sheepZoom[pId], 0);
  } else if (udg_sheepLastGame[pId] === false) {
    if (udg_AFK[pId] > 0) SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_wispZoom[pId], 0);
    else SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_wolfZoom[pId], 0);
  }
};

const loadZooms = () => {
  let val1 = 0;
  let val2 = 0;
  let val3 = 0;

  const s = s__File_readEx(s__File_open("revo/zooms.txt"), true);

  if (!s || s.length === 0) {
    val1 = 1650;
    val2 = 1650;
    val3 = 1650;
  } else {
    [val1, val2, val3] = s.split(" ").map((v) => S2R(v));
    DisplayTextToPlayer(
      GetLocalPlayer(),
      0,
      0,
      `Loaded zooms. Sheep: |CFFED1C24${val1.toFixed(0)}|r, Wolf: |CFFED1C24${val2.toFixed(0)}|r, Spirit: |CFFED1C24${
        val3.toFixed(0)
      }|r.`,
    );
    DisplayTextToPlayer(GetLocalPlayer(), 0, 0, " ");
  }

  setZooms(GetLocalPlayer(), 3, val1, val2, val3);
};

const Trig_zoom_Actions = () => {
  const [command, ...vals] = GetEventPlayerChatString()!.toLowerCase().split(" ");

  if (command !== "-zoom" && command !== "-z" && command !== "-cam") return;

  if (vals.length > 3) vals.length = 3;

  setZooms(
    GetTriggerPlayer()!,
    vals.length,
    ...(vals.map((v) => smolNumbers(S2R(v))) as [number, number, number]),
  );
  saveZooms(GetTriggerPlayer()!);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_zoom: () => void;
}
InitTrig_zoom = () => {
  gg_trg_zoom = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_zoom, "-zoom ", false);
  registerAnyPlayerChatEvent(gg_trg_zoom, "-z ", false);
  registerAnyPlayerChatEvent(gg_trg_zoom, "-cam ", false);
  TriggerAddAction(gg_trg_zoom, Trig_zoom_Actions);

  const t = CreateTrigger();
  TriggerRegisterTimerEventSingle(t, 0.01);
  TriggerAddAction(t, loadZooms);
};
