//===========================================================================
// Trigger: mapShrink
//===========================================================================
const Trig_mapShrink_Conditions = () => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_mapShrink_Func001C = () => {
  if ((!(udg_mapShrink === false))) {
    return false;
  }
  return true;
};

const Trig_mapShrink_Actions = () => {
  if ((Trig_mapShrink_Func001C())) {
    udg_mapShrink = true;
    udg_mapExpand = false;
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              |cffffcc00Shrink mode enabled.",
    );
  } else {
    udg_mapShrink = false;
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              |cffffcc00Shrink mode disabled.",
    );
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_mapShrink: () => void;
}
InitTrig_mapShrink = () => {
  gg_trg_mapShrink = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(0)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(1)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(2)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(3)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(4)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(5)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(6)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(7)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(8)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(gg_trg_mapShrink, Player(9)!, "-shrink", true);
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(10)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(11)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(12)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(13)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(14)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(15)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(16)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(17)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(18)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(19)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(20)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(21)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(22)!,
    "-shrink",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_mapShrink,
    Player(23)!,
    "-shrink",
    true,
  );
  TriggerAddCondition(gg_trg_mapShrink, Condition(Trig_mapShrink_Conditions));
  TriggerAddAction(gg_trg_mapShrink, Trig_mapShrink_Actions);
};
