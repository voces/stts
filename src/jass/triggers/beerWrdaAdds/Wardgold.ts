//===========================================================================
// Trigger: Ward gold
//===========================================================================
const Trig_Ward_gold_Func009C = (): boolean => {
  if ((GetUnitTypeId(GetKillingUnitBJ()!) === FourCC("uC04"))) {
    return true;
  }
  if ((GetUnitTypeId(GetKillingUnitBJ()!) === FourCC("h001"))) {
    return true;
  }
  return false;
};

const Trig_Ward_gold_Conditions = (): boolean => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === FourCC("oeye")))) {
    return false;
  }
  if ((!Trig_Ward_gold_Func009C())) {
    return false;
  }
  return true;
};

const Trig_Ward_gold_Func004002003 = (): boolean => {
  return (GetUnitTypeId(GetFilterUnit()!) === FourCC("oeye"));
};

const Trig_Ward_gold_Func005A = (): void => {
  udg_atemploc2 = GetUnitLoc(GetEnumUnit()!);
  UnitDamageTargetBJ(
    GetKillingUnitBJ()!,
    GetEnumUnit()!,
    Pow(257 - DistanceBetweenPoints(udg_atemploc, udg_atemploc2), 0.4),
    ATTACK_TYPE_MELEE,
    DAMAGE_TYPE_NORMAL,
  );
  RemoveLocation(udg_atemploc2);
};

const Trig_Ward_gold_Actions = (): void => {
  AdjustPlayerStateBJ(
    4,
    GetOwningPlayer(GetKillingUnitBJ()!),
    PLAYER_STATE_RESOURCE_GOLD,
  );
  GoldText(4, GetKillingUnit()!);
  udg_atemploc = GetUnitLoc(GetDyingUnit()!);
  udg_atempgroup = GetUnitsInRangeOfLocMatching(
    256,
    udg_atemploc,
    Condition(Trig_Ward_gold_Func004002003),
  )!;
  ForGroupBJ(udg_atempgroup, Trig_Ward_gold_Func005A);
  DestroyGroup(udg_atempgroup);
  RemoveLocation(udg_atemploc);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Ward_gold: () => void;
}
InitTrig_Ward_gold = (): void => {
  gg_trg_Ward_gold = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Ward_gold, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_Ward_gold, Condition(Trig_Ward_gold_Conditions));
  TriggerAddAction(gg_trg_Ward_gold, Trig_Ward_gold_Actions);
};
