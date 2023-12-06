//===========================================================================
// Trigger: zoomMsg
//===========================================================================
const Trig_zoomMsg_Actions = (): void => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    10,
    "Max |CFF00AEEFSheep|r Zoom: |CFFED1C242400",
  );
  DisplayTimedTextToForce(
    udg_atempplayer,
    10,
    "Max |CFF00AEEFWolf|r Zoom: |CFFED1C242700",
  );
  DisplayTimedTextToForce(
    udg_atempplayer,
    10,
    "Max |CFF00AEEFWisp|r Zoom: |CFFED1C243350",
  );
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_zoomMsg: () => void;
}
InitTrig_zoomMsg = (): void => {
  gg_trg_zoomMsg = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(0)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(1)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(2)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(3)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(4)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(5)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(6)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(7)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(8)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(9)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(10)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(11)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(12)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(13)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(14)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(15)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(16)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(17)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(18)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(19)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(20)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(21)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(22)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(23)!, "-z", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(0)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(1)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(2)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(3)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(4)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(5)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(6)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(7)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(8)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(9)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(10)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(11)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(12)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(13)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(14)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(15)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(16)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(17)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(18)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(19)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(20)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(21)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(22)!, "-zoom", true);
  TriggerRegisterPlayerChatEvent(gg_trg_zoomMsg, Player(23)!, "-zoom", true);
  TriggerAddAction(gg_trg_zoomMsg, Trig_zoomMsg_Actions);
};
