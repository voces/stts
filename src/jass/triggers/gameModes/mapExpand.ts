//===========================================================================
// Trigger: mapExpand
//===========================================================================
const Trig_mapExpand_Conditions = () => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_mapExpand_Func001C = () => {
  if ((!(udg_mapExpand === false))) {
    return false;
  }
  return true;
};

const Trig_mapExpand_Actions = () => {
  if ((Trig_mapExpand_Func001C())) {
    udg_mapExpand = true;
    udg_mapShrink = false;
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              |cffffcc00Expand mode enabled.",
    );
  } else {
    udg_mapExpand = false;
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              |cffffcc00Expand mode disabled.",
    );
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_mapExpand: () => void;
}
InitTrig_mapExpand = () => {
  gg_trg_mapExpand = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(0)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(1)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(2)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(3)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(4)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(5)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(6)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(7)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(8)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapExpand, Player(9)!, "-expand", true);
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(10)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(11)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(12)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(13)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(14)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(15)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(16)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(17)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(18)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(19)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(20)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(21)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(22)!,
    "-expand",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapExpand,
    Player(23)!,
    "-expand",
    true,
  );
  TriggerAddCondition(gg_trg_mapExpand, Condition(Trig_mapExpand_Conditions));
  TriggerAddAction(gg_trg_mapExpand, Trig_mapExpand_Actions);
};
