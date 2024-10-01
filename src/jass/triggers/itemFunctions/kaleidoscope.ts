//===========================================================================
// Trigger: kaleidoscope
//===========================================================================

import { game } from "util/game";

const Trig_kaleidoscope_Actions = () => {
  const u = GetEventDamageSource()!;
  let i = 0;
  let baseDamage = -1;
  let charges = 0;
  if (IsUnitIllusion(u)) {
    while (true) {
      if (i === 6) break;
      const itm = UnitItemInSlot(u, i);
      if (itm && GetItemTypeId(itm) === kaleidoscope) {
        if (baseDamage === -1) baseDamage = GetEventDamage();
        charges += GetItemCharges(itm);
      }
      i = i + 1;
    }
    if (charges > 0) BlzSetEventDamage(baseDamage * (1 + charges * 0.36));
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_kaleidoscope: () => void;
}
InitTrig_kaleidoscope = () => {
  const t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_DAMAGING);
  TriggerAddAction(t, Trig_kaleidoscope_Actions);
};

game.onSummon((e) => {
  if (e.summon.hasItemOfType(kaleidoscope)) e.summon.pauseTimedLife(true);
});
