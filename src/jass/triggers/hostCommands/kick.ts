//===========================================================================
// Trigger: kick
//===========================================================================

const Trig_kick_Actions = () => {
  Split(GetEventPlayerChatString()!, " ", true);
  CustomDefeatBJ(Player(S2I(myArg[0]) - 1)!, "You were disconnected.");
};

const Trig_kick_Conditions = () => {
  return !udg_gameStarted && GetTriggerPlayer()! === udg_Custom;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_kick: () => void;
}
InitTrig_kick = () => {
  let i = 0;
  gg_trg_kick = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(gg_trg_kick, Player(i)!, "-kick", false);
    i = i + 1;
  }
  TriggerAddCondition(gg_trg_kick, Condition(Trig_kick_Conditions));
  TriggerAddAction(gg_trg_kick, Trig_kick_Actions);
};
