import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_zoomMsg_Actions = () => {
  const p = MapPlayerEx.fromEvent()!;

  const current = GetCameraField(CAMERA_FIELD_TARGET_DISTANCE);
  let atCurrent = false;

  const format = (arr: number[]) => {
    const val = arr[p.cid];
    if (val === current) atCurrent = true;
    return `${I2S(val)}${val === current ? "|r (current)" : ""}`;
  };

  p.displayTimedText(
    `Max |CFF00AEEFsheep|r zoom is |CFFED1C242400|r, yours is |CFFED1C24${format(udg_sheepZoom)}|r.`,
    10,
  );
  p.displayTimedText(
    `Max |CFF00AEEFwolf|r zoom is |CFFED1C242700|r, yours is |CFFED1C24${format(udg_wolfZoom)}|r.`,
    10,
  );
  p.displayTimedText(
    `Max |CFF00AEEFwisp|r zoom is |CFFED1C243350|r, yours is |CFFED1C24${format(udg_wispZoom)}|r.`,
    10,
  );

  if (!atCurrent) p.displayTimedText(`Your current zoom is |CFFED1C24${I2S(R2I(current))}|r.`, 10);
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
