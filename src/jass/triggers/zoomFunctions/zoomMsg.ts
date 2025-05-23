import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_zoomMsg_Actions = () => {
  const p = MapPlayerEx.fromEvent()!;

  const current = GetCameraField(CAMERA_FIELD_TARGET_DISTANCE);
  let atCurrent = false;

  const format = (arr: number[]) => {
    const val = arr[p.cid];
    if (val === current) atCurrent = true;
    return `${val.toFixed(0)}${val === current ? "|r (current)" : ""}`;
  };

  p.displayTimedText(`Your |CFF00AEEFsheep|r zoom is |CFFED1C24${format(udg_sheepZoom)}|r.`, 10);
  p.displayTimedText(`Your |CFF00AEEFwolf|r zoom is |CFFED1C24${format(udg_wolfZoom)}|r.`, 10);
  p.displayTimedText(`Your |CFF00AEEFwisp|r zoom is |CFFED1C24${format(udg_wispZoom)}|r.`, 10);

  if (!atCurrent) p.displayTimedText(`Your current zoom is |CFFED1C24${current.toFixed(0)}|r.`, 10);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_zoomMsg: () => void;
}
InitTrig_zoomMsg = () => {
  gg_trg_zoomMsg = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_zoomMsg, "-z");
  registerAnyPlayerChatEvent(gg_trg_zoomMsg, "-zoom");
  TriggerAddAction(gg_trg_zoomMsg, Trig_zoomMsg_Actions);
};
