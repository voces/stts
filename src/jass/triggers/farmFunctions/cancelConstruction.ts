const Trig_cancelConstruction_Actions = () => {
  const p = GetOwningPlayer(GetCancelledStructure()!)!;
  const cid = GetConvertedPlayerId(p);
  if (udg_farmCount[cid] > 0) udg_farmCount[cid]--;
  SetPlayerStateBJ(p, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[cid]);
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  if (!udg_switchOn) {
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      LeaderboardSetPlayerItemValueBJ(p, PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!, udg_farmCount[cid]);
    }
  }
};

export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_cancelConstruction: () => void;
}
InitTrig_cancelConstruction = () => {
  gg_trg_cancelConstruction = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_cancelConstruction, EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL);
  TriggerAddCondition(
    gg_trg_cancelConstruction,
    Condition(() => IsUnitType(GetCancelledStructure()!, UNIT_TYPE_STRUCTURE)),
  );
  TriggerAddAction(gg_trg_cancelConstruction, Trig_cancelConstruction_Actions);
};
