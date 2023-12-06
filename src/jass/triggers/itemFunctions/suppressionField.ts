//===========================================================================
// Trigger: suppressionField
//===========================================================================
const Trig_suppressionField_Conditions = (): boolean => {
  return GetUnitTypeId(GetTriggerUnit()!) === FourCC("o000");
};

const Trig_suppressionField_Actions = (): void => {
  let u = GetTriggerUnit()!;
  const p = GetOwningPlayer(u);
  const cx = GetUnitX(u);
  const cy = GetUnitY(u);
  let a: number;

  DisableTrigger(GetTriggeringTrigger()!);

  RemoveUnit(u);
  u = CreateUnit(p, FourCC("o000"), cx, cy, 270)!;
  UnitAddAbility(u, FourCC("A026"));
  UnitApplyTimedLife(u, FourCC("BTFL"), 45);

  a = 0;
  while (true) {
    u = CreateUnit(
      p,
      FourCC("o000"),
      cx + 384 * Cos(a * bj_DEGTORAD),
      cy + 384 * Sin(a * bj_DEGTORAD),
      270,
    )!;
    UnitApplyTimedLife(u, FourCC("BTFL"), 45);

    u = CreateUnit(
      p,
      FourCC("o000"),
      cx + 768 * Cos(a * bj_DEGTORAD),
      cy + 768 * Sin(a * bj_DEGTORAD),
      270,
    )!;
    UnitApplyTimedLife(u, FourCC("BTFL"), 45);

    a = a + 30;
    u = CreateUnit(
      p,
      FourCC("o000"),
      cx + 768 * Cos(a * bj_DEGTORAD),
      cy + 768 * Sin(a * bj_DEGTORAD),
      270,
    )!;
    UnitApplyTimedLife(u, FourCC("BTFL"), 45);

    a = a + 30;
    if (a >= 360) break;
  }

  EnableTrigger(GetTriggeringTrigger()!);
};

const Trig_suppressionField_Damage = (): void => {
  const u = BlzGetEventDamageTarget()!;
  if (
    UnitHasBuffBJ(u, FourCC("B009")) &&
    (GetUnitTypeId(u) === FourCC("hC07") || GetUnitTypeId(u) === FourCC("h002"))
  ) {
    BlzSetEventDamage(GetEventDamage() * 2);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_suppressionField: () => void;
}
InitTrig_suppressionField = (): void => {
  let t = CreateTrigger();
  TriggerRegisterEnterRectSimple(t, GetEntireMapRect()!);
  TriggerAddCondition(t, Condition(Trig_suppressionField_Conditions));
  TriggerAddAction(t, Trig_suppressionField_Actions);

  t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_DAMAGING);
  TriggerAddCondition(t, Condition(Trig_suppressionField_Damage));
};
