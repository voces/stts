//===========================================================================
// Trigger: position
//===========================================================================
const Trig_position_Conditions = () => {
  if ((!(udg_practiceOn === true))) {
    return false;
  }
  return true;
};

const Trig_position_Func003C = () => {
  if ((!(udg_atempint > 0))) {
    return false;
  }
  if ((!(udg_atempint < 25))) {
    return false;
  }
  return true;
};

const Trig_position_Actions = () => {
  udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!);
  if ((Trig_position_Func003C())) {
    udg_startLocation[GetConvertedPlayerId(GetTriggerPlayer()!)] = udg_masterStartLocation[udg_atempint];
    DisplayTimedTextToForce(
      GetForceOfPlayer(GetTriggerPlayer()!)!,
      8,
      udg_masterColorString[udg_atempint] +
        ("                              Set spawn position to: " +
          I2S(udg_atempint)),
    );
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_position: () => void;
}
InitTrig_position = () => {
  gg_trg_position = CreateTrigger();
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(0)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(1)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(2)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(3)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(4)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(5)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(6)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(7)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(8)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(9)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(10)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(11)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(12)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(13)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(14)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(15)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(16)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(17)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(18)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(19)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(20)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(21)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(22)!,
    "-position",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_position,
    Player(23)!,
    "-position",
    false,
  );
  TriggerAddCondition(gg_trg_position, Condition(Trig_position_Conditions));
  TriggerAddAction(gg_trg_position, Trig_position_Actions);
};
