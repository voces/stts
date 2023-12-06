//===========================================================================
// Trigger: sheepDamage
//===========================================================================
const Trig_sheepDamage_Actions = (): void => {
  const target = BlzGetEventDamageTarget()!;
  const source = GetEventDamageSource()!;
  if (GetUnitTypeId(target) === sheep) {
    if (IsUnitIllusion(source)) {
      BlzSetEventDamage(0);
    }
    if (GetWidgetLife(target) - GetEventDamage() < 0.405) {
      ForceUICancelBJ(GetOwningPlayer(target));
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sheepDamage: () => void;
}
InitTrig_sheepDamage = (): void => {
  gg_trg_sheepDamage = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_sheepDamage, EVENT_PLAYER_UNIT_DAMAGED);
  TriggerAddAction(gg_trg_sheepDamage, Trig_sheepDamage_Actions);
};
