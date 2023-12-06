//===========================================================================
// Trigger: farmDies
//
// GetUnitPointValue(GetDyingUnit()!)
//===========================================================================
const Trig_farmDies_Conditions = (): boolean => {
  if ((!(IsUnitType(GetDyingUnit()!, UNIT_TYPE_STRUCTURE) === true))) {
    return false;
  }
  return true;
};

const Trig_farmDies_Func002Func002C = (): boolean => {
  if (
    (!(IsItemOwned(
      GetItemOfTypeFromUnitBJ(GetKillingUnitBJ()!, FourCC("scyt"))!,
    ) === true))
  ) {
    return false;
  }
  if ((!(IsUnitIllusionBJ(GetKillingUnitBJ()!) === false))) {
    return false;
  }
  return true;
};

const Trig_farmDies_Func002C = (): boolean => {
  if (
    (!(IsPlayerInForce(GetOwningPlayer(GetKillingUnitBJ()!), udg_Wolf) ===
      true))
  ) {
    return false;
  }
  return true;
};

const Trig_farmDies_Func003C = (): boolean => {
  if ((!(udg_farmCount[udg_atempint] > 0))) {
    return false;
  }
  return true;
};

const Trig_farmDies_Func006Func001C = (): boolean => {
  if ((!(udg_dummyWisps > 0))) {
    return false;
  }
  return true;
};

const Trig_farmDies_Actions = (): void => {
  udg_atempint = GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!));
  if ((Trig_farmDies_Func002C())) {
    if ((Trig_farmDies_Func002Func002C())) {
      AdjustPlayerStateBJ(
        (GetUnitPointValue(GetDyingUnit()!) * 2) + 1,
        GetOwningPlayer(GetKillingUnitBJ()!),
        PLAYER_STATE_RESOURCE_GOLD,
      );
      GoldText(GetUnitPointValue(GetDyingUnit()!) * 2 + 1, GetKillingUnit()!);
    } else {
      AdjustPlayerStateBJ(
        GetUnitPointValue(GetDyingUnit()!),
        GetOwningPlayer(GetKillingUnitBJ()!),
        PLAYER_STATE_RESOURCE_GOLD,
      );
      GoldText(GetUnitPointValue(GetDyingUnit()!), GetKillingUnit()!);
    }
  }
  if ((Trig_farmDies_Func003C())) {
    udg_farmCount[udg_atempint] = udg_farmCount[udg_atempint] - 1;
  }
  SetPlayerStateBJ(
    ConvertedPlayer(udg_atempint)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[udg_atempint],
  );
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_farmDies_Func006Func001C())) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_saves[udg_atempint],
      );
    } else {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_farmCount[udg_atempint],
      );
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_farmDies: () => void;
}
InitTrig_farmDies = (): void => {
  gg_trg_farmDies = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_farmDies, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_farmDies, Condition(Trig_farmDies_Conditions));
  TriggerAddAction(gg_trg_farmDies, Trig_farmDies_Actions);
};
