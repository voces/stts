//===========================================================================
// Trigger: practice
//===========================================================================
const Trig_practice_Func001C = (): boolean => {
  if ((GetTriggerPlayer()! === udg_Custom)) {
    return true;
  }
  if ((GetUnitTypeId(GetTriggerUnit()!) === FourCC("h00D"))) {
    return true;
  }
  return false;
};

const Trig_practice_Conditions = (): boolean => {
  if ((!Trig_practice_Func001C())) {
    return false;
  }
  return true;
};

const Trig_practice_Func016C = (): boolean => {
  if ((!(udg_viewOn === false))) {
    return false;
  }
  return true;
};

const Trig_practice_Actions = (): void => {
  udg_lastGameString = GetEventPlayerChatString()!;
  udg_practiceOn = true;
  udg_dummyWisps = 0;
  udg_wispPoints = 0;
  udg_time = 120 * 60;
  udg_sheepGold = 1000000;
  udg_wolfGold = 1000000;
  udg_Teams = 2;
  EnableTrigger(gg_trg_attack);
  EnableTrigger(gg_trg_stop);
  EnableTrigger(gg_trg_mass);
  EnableTrigger(gg_trg_owner);
  EnableTrigger(gg_trg_speed);
  autoCancelEnabled = false;
  if ((Trig_practice_Func016C())) {
    TriggerExecute(gg_trg_view);
  }
  TriggerExecute(gg_trg_createSheep);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_practice: () => void;
}
InitTrig_practice = (): void => {
  gg_trg_practice = CreateTrigger();
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(0)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(1)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(2)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(3)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(4)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(5)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(6)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(7)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(8)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(9)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(10)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(11)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(12)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(13)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(14)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(15)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(16)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(17)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(18)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(19)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(20)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(21)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(22)!,
    "-practice",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_practice,
    Player(23)!,
    "-practice",
    true,
  );
  TriggerRegisterTrainCommandEventBJ(gg_trg_practice, FourCC("h00H"));
  TriggerAddCondition(gg_trg_practice, Condition(Trig_practice_Conditions));
  TriggerAddAction(gg_trg_practice, Trig_practice_Actions);
};
