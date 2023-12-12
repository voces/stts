//===========================================================================
// Trigger: redo
//===========================================================================
const Trig_redo_Conditions = () => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_redo_Actions = () => {
  TriggerExecute(gg_trg_reset);
  TriggerExecute(gg_trg_initMassTest);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_redo: () => void;
}
InitTrig_redo = () => {
  gg_trg_redo = CreateTrigger();
  DisableTrigger(gg_trg_redo);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(0)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(1)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(2)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(3)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(4)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(5)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(6)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(7)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(8)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(9)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(10)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(11)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(12)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(13)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(14)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(15)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(16)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(17)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(18)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(19)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(20)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(21)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(22)!, "-redo", true);
  TriggerRegisterPlayerChatEvent(gg_trg_redo, Player(23)!, "-redo", true);
  TriggerAddCondition(gg_trg_redo, Condition(Trig_redo_Conditions));
  TriggerAddAction(gg_trg_redo, Trig_redo_Actions);
};
