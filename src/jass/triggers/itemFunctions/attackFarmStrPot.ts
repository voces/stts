import { UnitEx } from "handles/UnitEx";

const Trig_attackFarmStrPot_Actions = () => {
  const killingUnit = UnitEx.fromKilling();
  if (!killingUnit) return;
  if (killingUnit.getAbilityLevel(FourCC("B001")) > 0) {
    if (GetUnitTypeId(GetDyingUnit()!) === sheepType) TriggerSleepAction(0.5);
    killingUnit.removeAbility(FourCC("A00E"));
    killingUnit.removeAbility(FourCC("B001"));
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_attackFarmStrPot: () => void;
}
InitTrig_attackFarmStrPot = () => {
  gg_trg_attackFarmStrPot = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_attackFarmStrPot, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddAction(gg_trg_attackFarmStrPot, Trig_attackFarmStrPot_Actions);
};
