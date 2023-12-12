//===========================================================================
// Trigger: reset
//===========================================================================
const Trig_reset_Conditions = () => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_reset_Actions = () => {
  DisableTrigger(GetTriggeringTrigger()!);
  ClearTextMessagesBJ(GetPlayersAll()!);
  PauseTimerBJ(true, udg_massTimer);
  TimerDialogDisplayBJ(false, udg_massTimerWindow);
  PauseTimerBJ(false, udg_Timer);
  TimerDialogDisplayBJ(true, udg_TimerWindow);
  EnableTrigger(gg_trg_mass);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_reset: () => void;
}
InitTrig_reset = () => {
  gg_trg_reset = CreateTrigger();
  DisableTrigger(gg_trg_reset);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(0)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(1)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(2)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(3)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(4)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(5)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(6)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(7)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(8)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(9)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(10)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(11)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(12)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(13)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(14)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(15)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(16)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(17)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(18)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(19)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(20)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(21)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(22)!, "-stop", true);
  TriggerRegisterPlayerChatEvent(gg_trg_reset, Player(23)!, "-stop", true);
  TriggerAddCondition(gg_trg_reset, Condition(Trig_reset_Conditions));
  TriggerAddAction(gg_trg_reset, Trig_reset_Actions);
};
