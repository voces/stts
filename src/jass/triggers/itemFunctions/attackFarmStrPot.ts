//===========================================================================
// Trigger: attackFarmStrPot
//===========================================================================
const Trig_attackFarmStrPot_Actions = () => {
  if (GetUnitAbilityLevel(GetKillingUnit()!, FourCC("B001")) > 0) {
    if (GetUnitTypeId(GetDyingUnit()!) === sheepType) {
      TriggerSleepAction(0.5);
    }
    UnitRemoveAbility(GetKillingUnit()!, FourCC("A00E"));
    UnitRemoveAbility(GetKillingUnit()!, FourCC("B001"));
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_attackFarmStrPot: () => void;
}
InitTrig_attackFarmStrPot = () => {
  gg_trg_attackFarmStrPot = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_attackFarmStrPot,
    EVENT_PLAYER_UNIT_DEATH,
  );
  TriggerAddAction(gg_trg_attackFarmStrPot, Trig_attackFarmStrPot_Actions);
};
