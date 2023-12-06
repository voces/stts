//===========================================================================
// Trigger: gold
//===========================================================================
const Trig_gold_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_gold_Func002Func001C = (): boolean => {
  if (
    (!(SubStringBJ(
      GetEventPlayerChatString()!,
      GetForLoopIndexA(),
      GetForLoopIndexA(),
    ) === " "))
  ) {
    return false;
  }
  return true;
};

const Trig_gold_Func003Func001Func001C = (): boolean => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint)!) >
      1000000))
  ) {
    return false;
  }
  return true;
};

const Trig_gold_Func003Func001C = (): boolean => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint)!) >= 0))
  ) {
    return false;
  }
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint)!) <=
      1000000))
  ) {
    return false;
  }
  return true;
};

const Trig_gold_Func003Func002Func001C = (): boolean => {
  if (
    (!(S2I(
      SubStringBJ(
        GetEventPlayerChatString()!,
        udg_atempint + 1,
        udg_atempint + 7,
      )!,
    ) > 1000000))
  ) {
    return false;
  }
  return true;
};

const Trig_gold_Func003Func002C = (): boolean => {
  if (
    (!(S2I(
      SubStringBJ(
        GetEventPlayerChatString()!,
        udg_atempint + 1,
        udg_atempint + 7,
      )!,
    ) >= 0))
  ) {
    return false;
  }
  if (
    (!(S2I(
      SubStringBJ(
        GetEventPlayerChatString()!,
        udg_atempint + 1,
        udg_atempint + 7,
      )!,
    ) <= 1000000))
  ) {
    return false;
  }
  return true;
};

const Trig_gold_Func003Func003Func001C = (): boolean => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint)!) >
      1000000))
  ) {
    return false;
  }
  return true;
};

const Trig_gold_Func003Func003C = (): boolean => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint)!) >= 0))
  ) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 13)!) <= 1000000))) {
    return false;
  }
  return true;
};

const Trig_gold_Func003C = (): boolean => {
  if ((!(udg_atempint === 0))) {
    return false;
  }
  return true;
};

const Trig_gold_Actions = (): void => {
  udg_atempint = 0;
  bj_forLoopAIndex = 7;
  bj_forLoopAIndexEnd = StringLength(GetEventPlayerChatString()!);
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_gold_Func002Func001C())) {
      udg_atempint = GetForLoopIndexA();
      break;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  if ((Trig_gold_Func003C())) {
    if ((Trig_gold_Func003Func003C())) {
      udg_sheepGold = S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 13)!);
      udg_wolfGold = S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 13)!);
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        "                              |cffffcc00Set gold to " +
          I2S(udg_sheepGold),
      );
    } else {
      if ((Trig_gold_Func003Func003Func001C())) {
        udg_sheepGold = 1000000;
        udg_wolfGold = 1000000;
        DisplayTimedTextToForce(
          GetPlayersAll()!,
          5,
          "                              |cffffcc00Set gold to " +
            I2S(udg_sheepGold),
        );
      }
    }
  } else {
    if ((Trig_gold_Func003Func001C())) {
      udg_sheepGold = S2I(
        SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint)!,
      );
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        "                              |cffffcc00Set |cff00aeefsheep|cffffcc00 gold to " +
          I2S(udg_sheepGold),
      );
    } else {
      if ((Trig_gold_Func003Func001Func001C())) {
        udg_sheepGold = 1000000;
        DisplayTimedTextToForce(
          GetPlayersAll()!,
          5,
          "                              |cffffcc00Set |cff00aeefsheep|cffffcc00 gold to " +
            I2S(udg_sheepGold),
        );
      }
    }
    if ((Trig_gold_Func003Func002C())) {
      udg_wolfGold = S2I(
        SubStringBJ(
          GetEventPlayerChatString()!,
          udg_atempint + 1,
          udg_atempint + 7,
        )!,
      );
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        "                              |cffffcc00Set |cffed1c24wolf|cffffcc00 gold to " +
          I2S(udg_wolfGold),
      );
    } else {
      if ((Trig_gold_Func003Func002Func001C())) {
        udg_wolfGold = 1000000;
        DisplayTimedTextToForce(
          GetPlayersAll()!,
          5,
          "                              |cffffcc00Set |cffed1c24wolf|cffffcc00 gold to " +
            I2S(udg_wolfGold),
        );
      }
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_gold: () => void;
}
InitTrig_gold = (): void => {
  gg_trg_gold = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(0)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(1)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(2)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(3)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(4)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(5)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(6)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(7)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(8)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(9)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(10)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(11)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(12)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(13)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(14)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(15)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(16)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(17)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(18)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(19)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(20)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(21)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(22)!, "-gold", false);
  TriggerRegisterPlayerChatEvent(gg_trg_gold, Player(23)!, "-gold", false);
  TriggerAddCondition(gg_trg_gold, Condition(Trig_gold_Conditions));
  TriggerAddAction(gg_trg_gold, Trig_gold_Actions);
};
