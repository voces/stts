//===========================================================================
// Trigger: suppressionField
//===========================================================================

const Trig_suppressionField_Actions = () => {
  let u = GetTriggerUnit()!;
  const p = GetOwningPlayer(u);
  const cx = GetUnitX(u);
  const cy = GetUnitY(u);

  DisableTrigger(GetTriggeringTrigger()!);

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

  EnableTrigger(GetTriggeringTrigger()!);
};

const Trig_suppressionField_Damage = () => {
  const u = BlzGetEventDamageTarget()!;
  if (
    UnitHasBuffBJ(u, FourCC("B009")) && (GetUnitTypeId(u) === FourCC("hC07") || GetUnitTypeId(u) === FourCC("h002"))
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
