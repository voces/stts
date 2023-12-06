//===========================================================================
// Trigger: hide
//===========================================================================
const Trig_hide_Func001C = (): boolean => {
  if ((!(udg_Teams === 2))) {
    return false;
  }
  return true;
};

const Trig_hide_Actions = (): void => {
  if ((Trig_hide_Func001C())) {
    LeaderboardDisplayBJ(false, PlayerGetLeaderboardBJ(GetTriggerPlayer()!)!);
  }
  udg_permanentHide[GetConvertedPlayerId(GetTriggerPlayer()!)] = true;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_hide: () => void;
}
InitTrig_hide = (): void => {
  gg_trg_hide = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(0)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(1)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(2)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(3)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(4)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(5)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(6)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(7)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(8)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(9)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(10)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(11)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(12)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(13)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(14)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(15)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(16)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(17)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(18)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(19)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(20)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(21)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(22)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(23)!, "-hide", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(0)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(1)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(2)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(3)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(4)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(5)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(6)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(7)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(8)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(9)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(10)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(11)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(12)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(13)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(14)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(15)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(16)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(17)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(18)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(19)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(20)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(21)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(22)!, "-h", true);
  TriggerRegisterPlayerChatEvent(gg_trg_hide, Player(23)!, "-h", true);
  TriggerAddAction(gg_trg_hide, Trig_hide_Actions);
};
