//===========================================================================
// Trigger: suppressionField
//===========================================================================

import { UNIT_TYPE_ID_STRONG_FARM, UNIT_TYPE_ID_UPGRADED_FARM } from "constants";

let disabled = false;

const Trig_suppressionField_Actions = () => {
  if (disabled) return;
  disabled = true;
  let u = GetTriggerUnit()!;
  const p = GetOwningPlayer(u);
  const cx = GetUnitX(u);
  const cy = GetUnitY(u);

  // Doesn't seem to work if I don't do this?
  RemoveUnit(u);
  u = CreateUnit(p, FourCC("o000"), cx, cy, 270)!;

  UnitAddAbility(u, FourCC("A026"));
  UnitApplyTimedLife(u, FourCC("BTFL"), 45);

  for (let a = 0; a < 360; a += 30) {
    u = CreateUnit(p, FourCC("o000"), cx + 768 * Cos(a * bj_DEGTORAD), cy + 768 * Sin(a * bj_DEGTORAD), 270)!;
    UnitApplyTimedLife(u, FourCC("BTFL"), 45);

    a += 15;
    u = CreateUnit(p, FourCC("o000"), cx + 384 * Cos(a * bj_DEGTORAD), cy + 384 * Sin(a * bj_DEGTORAD), 270)!;
    UnitApplyTimedLife(u, FourCC("BTFL"), 45);

    a += 15;
    u = CreateUnit(p, FourCC("o000"), cx + 768 * Cos(a * bj_DEGTORAD), cy + 768 * Sin(a * bj_DEGTORAD), 270)!;
    UnitApplyTimedLife(u, FourCC("BTFL"), 45);
  }

  disabled = false;
};

const Trig_suppressionField_Damage = () => {
  const u = BlzGetEventDamageTarget()!;
  if (
    UnitHasBuffBJ(u, FourCC("B009")) &&
    (GetUnitTypeId(u) === UNIT_TYPE_ID_UPGRADED_FARM || GetUnitTypeId(u) === UNIT_TYPE_ID_STRONG_FARM)
  ) BlzSetEventDamage(GetEventDamage() * 2);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_suppressionField: () => void;
}
InitTrig_suppressionField = () => {
  let t = CreateTrigger();
  TriggerRegisterEnterRectSimple(t, GetEntireMapRect()!);
  TriggerAddCondition(t, Condition(() => GetUnitTypeId(GetTriggerUnit()!) === FourCC("o000")));
  TriggerAddAction(t, Trig_suppressionField_Actions);

  t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_DAMAGING);
  TriggerAddCondition(t, Condition(Trig_suppressionField_Damage));
};
