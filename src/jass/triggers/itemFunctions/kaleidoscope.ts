//===========================================================================
// Trigger: kaleidoscope
//===========================================================================

const Trig_kaleidoscope_Actions = (): void => {
  const u = GetEventDamageSource()!;
  let i = 0;
  let baseDamage = -1;
  let multiplier = 1;
  if (IsUnitIllusion(u)) {
    while (true) {
      if (i === 6) break;
      if (GetItemTypeId(UnitItemInSlot(u, i)!) === kaleidoscope) {
        if (baseDamage === -1) {
          baseDamage = GetEventDamage();
        }
        multiplier = multiplier + 1;
      }
      i = i + 1;
    }
    if (multiplier > 1) {
      BlzSetEventDamage(baseDamage * multiplier);
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_kaleidoscope: () => void;
}
InitTrig_kaleidoscope = (): void => {
  const t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_DAMAGING);
  TriggerAddAction(t, Trig_kaleidoscope_Actions);
};
