const Trig_farmDies_Actions = () => {
  const dyingPlayer = GetOwningPlayer(GetDyingUnit()!);
  const pid = GetConvertedPlayerId(dyingPlayer);
  const killingPlayer = GetOwningPlayer(GetKillingUnit()!);

  if (IsPlayerInForce(killingPlayer, udg_Wolf)) {
    if (
      IsItemOwned(
        GetItemOfTypeFromUnitBJ(GetKillingUnit()!, FourCC("scyt"))!,
      )
    ) {
      AdjustPlayerStateBJ(
        (GetUnitPointValue(GetDyingUnit()!) * 2) + 1,
        killingPlayer,
        PLAYER_STATE_RESOURCE_GOLD,
      );
      GoldText(GetUnitPointValue(GetDyingUnit()!) * 2 + 1, GetKillingUnit()!);
    } else {
      AdjustPlayerStateBJ(
        GetUnitPointValue(GetDyingUnit()!),
        killingPlayer,
        PLAYER_STATE_RESOURCE_GOLD,
      );
      GoldText(GetUnitPointValue(GetDyingUnit()!), GetKillingUnit()!);
    }
  }
  if (udg_farmCount[pid] > 0) udg_farmCount[pid]--;
  SetPlayerState(dyingPlayer, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[pid]);

  if (!udg_switchOn) {
    LeaderboardSetPlayerItemValueBJ(
      dyingPlayer,
      PlayerGetLeaderboardBJ(dyingPlayer)!,
      udg_farmCount[pid],
    );
  }
};

export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_farmDies: () => void;
}
InitTrig_farmDies = () => {
  gg_trg_farmDies = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_farmDies, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_farmDies,
    Condition(() => IsUnitType(GetDyingUnit()!, UNIT_TYPE_STRUCTURE)),
  );
  TriggerAddAction(gg_trg_farmDies, Trig_farmDies_Actions);
};
