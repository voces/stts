import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { setTimeout } from "util/setTimeout";
import { File } from "w3ts";

const saveZooms = (p: player): void => {
  if (p !== GetLocalPlayer()) return;
  const cid = GetConvertedPlayerId(GetTriggerPlayer()!);
  File.write("revo/zooms.txt", `${R2S(udg_sheepZoom[cid])} ${R2S(udg_wolfZoom[cid])} ${R2S(udg_wispZoom[cid])}`);
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
  if (values === 1) udg_sheepZoom[pId] = udg_wolfZoom[pId] = udg_wispZoom[pId] = val1;
  else if (values === 2) {
    udg_sheepZoom[pId] = val1;
    udg_wolfZoom[pId] = val2;
    udg_wispZoom[pId] = Math.max(val1, val2);
  } else if (values === 3) {
    udg_sheepZoom[pId] = val1;
    udg_wolfZoom[pId] = val2;
    udg_wispZoom[pId] = val3;
  }

  if (udg_AFK[pId] > 0) SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_wispZoom[pId], 0);
  else if (udg_sheepLastGame[pId]) {
    if (IsPlayerInForce(p, udg_Spirit)) SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_wispZoom[pId], 0);
    else SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_sheepZoom[pId], 0);
  } else SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_wolfZoom[pId], 0);
};

const loadZooms = () => {
  let val1 = 0;
  let val2 = 0;
  let val3 = 0;

  const s = File.read("revo/zooms.txt");

  if (!s || s.length === 0) {
    val1 = 1650;
    val2 = 1650;
    val3 = 1650;
  } else {
    [val1, val2, val3] = s.split(" ").map((v) => S2R(v));
    setTimeout(0.1, () =>
      DisplayTextToPlayer(
        GetLocalPlayer(),
        0,
        0,
        `\nLoaded zooms. Sheep: |CFFED1C24${val1.toFixed(0)}|r, Wolf: |CFFED1C24${
          val2.toFixed(0)
        }|r, Spirit: |CFFED1C24${val3.toFixed(0)}|r.`,
      ));
    DisplayTextToPlayer(GetLocalPlayer(), 0, 0, "");
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
