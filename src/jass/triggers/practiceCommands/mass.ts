//===========================================================================
// Trigger: mass
//===========================================================================
const Trig_mass_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 11)!) > 0))) {
    return false;
  }
  return true;
};

const Trig_mass_Func005Func001C = (): boolean => {
  if ((!(ModuloInteger(R2I(udg_massTime), 60) <= 9))) {
    return false;
  }
  return true;
};

const Trig_mass_Func005C = (): boolean => {
  if ((!(ModuloInteger(R2I(udg_massTime), 60) === 0))) {
    return false;
  }
  return true;
};

const Trig_mass_Actions = (): void => {
  udg_massTime = I2R(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 9)!)) * 1;
  udg_massTimeString = (I2S(R2I(udg_massTime / 60)) + ":") +
    I2S(R2I(ModuloReal(udg_massTime, 60)));
  if ((Trig_mass_Func005C())) {
    udg_massTimeString = udg_massTimeString + "0";
  } else {
    if ((Trig_mass_Func005Func001C())) {
      udg_massTimeString = (I2S(R2I(udg_massTime / 60)) + ":0") +
        I2S(R2I(ModuloReal(udg_massTime, 60)));
    }
  }
  TriggerExecute(gg_trg_initMassTest);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_mass: () => void;
}
InitTrig_mass = (): void => {
  gg_trg_mass = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(0)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(1)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(2)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(3)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(4)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(5)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(6)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(7)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(8)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(9)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(10)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(11)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(12)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(13)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(14)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(15)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(16)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(17)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(18)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(19)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(20)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(21)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(22)!, "-mass ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_mass, Player(23)!, "-mass ", false);
  TriggerAddCondition(gg_trg_mass, Condition(Trig_mass_Conditions));
  TriggerAddAction(gg_trg_mass, Trig_mass_Actions);
};
