//===========================================================================
// Trigger: controloff
//===========================================================================
const Trig_controloff_Conditions = () => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_controloff_Func002C = () => {
  if ((!(udg_shareOn === true))) {
    return false;
  }
  return true;
};

const Trig_controloff_Actions = () => {
  if ((Trig_controloff_Func002C())) {
    udg_shareOn = false;
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              |cffffcc00Sharing Control has been disabled.",
    );
  } else {
    udg_shareOn = true;
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              |cffffcc00Sharing Control has been enabled.",
    );
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_controloff: () => void;
}
InitTrig_controloff = () => {
  gg_trg_controloff = CreateTrigger();
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(0)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(1)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(2)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(3)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(4)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(5)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(6)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(7)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(8)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(9)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(10)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(11)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(12)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(13)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(14)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(15)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(16)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(17)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(18)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(19)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(20)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(21)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(22)!,
    "-control",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_controloff,
    Player(23)!,
    "-control",
    true,
  );
  TriggerAddCondition(gg_trg_controloff, Condition(Trig_controloff_Conditions));
  TriggerAddAction(gg_trg_controloff, Trig_controloff_Actions);
};
