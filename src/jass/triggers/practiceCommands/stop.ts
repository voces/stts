//===========================================================================
// Trigger: stop
//===========================================================================
const Trig_isHostile = () => {
  if (
    (!(GetOwningPlayer(udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)]) ===
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!))
  ) {
    return false;
  }
  return true;
};

const Trig_stop_Actions = () => {
  if ((Trig_isHostile())) {
    SetUnitOwner(
      udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
      Player(bj_PLAYER_NEUTRAL_VICTIM)!,
      false,
    );
  }

  IssueImmediateOrderBJ(
    udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
    "holdposition",
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_stop: () => void;
}
InitTrig_stop = () => {
  gg_trg_stop = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_stop, "-s", true);
  TriggerAddAction(gg_trg_stop, Trig_stop_Actions);
};
