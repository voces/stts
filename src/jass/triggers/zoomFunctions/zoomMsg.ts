import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_zoomMsg_Actions = () => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  DisplayTimedTextToForce(udg_atempplayer, 10, "Max |CFF00AEEFSheep|r Zoom: |CFFED1C242400");
  DisplayTimedTextToForce(udg_atempplayer, 10, "Max |CFF00AEEFWolf|r Zoom: |CFFED1C242700");
  DisplayTimedTextToForce(udg_atempplayer, 10, "Max |CFF00AEEFWisp|r Zoom: |CFFED1C243350");
  DestroyForce(udg_atempplayer);
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
