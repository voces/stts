//===========================================================================
// Trigger: attackFarmBeamPot
//===========================================================================
const Trig_attackFarmBeamPot_Actions = () => {
  let u: unit;
  if (GetUnitAbilityLevel(GetAttacker()!, FourCC("B008")) > 0) {
    UnitRemoveAbility(GetAttacker()!, FourCC("A00W"));
    UnitRemoveAbility(GetAttacker()!, FourCC("B008"));
    u = CreateUnit(
      GetOwningPlayer(GetAttacker()!),
      FourCC("hfoo"),
      GetUnitX(GetAttacker()!),
      GetUnitY(GetAttacker()!),
      GetUnitFacing(GetAttacker()!),
    )!;
    IssuePointOrder(
      u,
      "shockwave",
      GetUnitX(GetTriggerUnit()!),
      GetUnitY(GetTriggerUnit()!),
    );
    TriggerSleepAction(0.5);
    RemoveUnit(u);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_attackFarmBeamPot: () => void;
}
InitTrig_attackFarmBeamPot = () => {
  gg_trg_attackFarmBeamPot = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_attackFarmBeamPot,
    EVENT_PLAYER_UNIT_ATTACKED,
  );
  TriggerAddAction(gg_trg_attackFarmBeamPot, Trig_attackFarmBeamPot_Actions);
};
