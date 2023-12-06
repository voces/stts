//===========================================================================
// Trigger: show
//===========================================================================
const Trig_show_Func001Func001C = (): boolean => {
  if ((!(udg_Teams === 2))) {
    return false;
  }
  return true;
};

const Trig_show_Func001C = (): boolean => {
  if ((!(GetEventPlayerChatString()! === "-s"))) {
    return false;
  }
  if ((!(udg_practiceOn === true))) {
    return false;
  }
  return true;
};

const Trig_show_Actions = (): void => {
  if (!(Trig_show_Func001C())) {
    if ((Trig_show_Func001Func001C())) {
      LeaderboardDisplayBJ(true, PlayerGetLeaderboardBJ(GetTriggerPlayer()!)!);
    }
    udg_permanentHide[GetConvertedPlayerId(GetTriggerPlayer()!)] = false;
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_show: () => void;
}
InitTrig_show = (): void => {
  gg_trg_show = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(0)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(1)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(2)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(3)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(4)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(5)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(6)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(7)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(8)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(9)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(10)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(11)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(12)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(13)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(14)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(15)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(16)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(17)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(18)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(19)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(20)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(21)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(22)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(23)!, "-show", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(0)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(1)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(2)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(3)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(4)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(5)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(6)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(7)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(8)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(9)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(10)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(11)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(12)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(13)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(14)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(15)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(16)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(17)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(18)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(19)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(20)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(21)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(22)!, "-s", true);
  TriggerRegisterPlayerChatEvent(gg_trg_show, Player(23)!, "-s", true);
  TriggerAddAction(gg_trg_show, Trig_show_Actions);
};
