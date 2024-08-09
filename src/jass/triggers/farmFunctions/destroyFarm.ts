const Trig_destroyFarm_Actions = () => {
  const u = GetTriggerUnit()!;
  const owner = GetOwningPlayer(u);
  const ownerId = GetConvertedPlayerId(owner);

  if (udg_farmCount[ownerId] > 0) udg_farmCount[ownerId]--;
  SetPlayerStateBJ(owner, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[ownerId]);

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = Player(i)!;
    if (IsUnitSelected(u, p)) SelectUnitAddForPlayer(udg_unit[i + 1], p);
  }
  RemoveUnit(u);

  if (udg_switchOn) return;
  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    LeaderboardSetPlayerItemValueBJ(owner, PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!, udg_farmCount[ownerId]);
  }
};

export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_destroyFarm: () => void;
}
InitTrig_destroyFarm = () => {
  gg_trg_destroyFarm = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_destroyFarm, EVENT_PLAYER_UNIT_TRAIN_START);
  TriggerAddCondition(gg_trg_destroyFarm, Condition(() => GetTrainedUnitType() === FourCC("nC13")));
  TriggerAddAction(gg_trg_destroyFarm, Trig_destroyFarm_Actions);
};
