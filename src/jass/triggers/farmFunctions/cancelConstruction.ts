const Trig_cancelConstruction_Actions = () => {
  cid = GetConvertedPlayerId(
    GetOwningPlayer(GetCancelledStructure()!),
  );
  if (udg_farmCount[cid] > 0) udg_farmCount[cid]--;
  SetPlayerStateBJ(
    ConvertedPlayer(cid)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[cid],
  );
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if (!udg_switchOn) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(cid)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_farmCount[cid],
      );
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
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
