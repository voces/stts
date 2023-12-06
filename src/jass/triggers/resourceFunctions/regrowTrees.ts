//===========================================================================
// Trigger: regrowTrees
//===========================================================================
const Trig_regrowTrees_Actions = (): void => {
  TriggerSleepAction(45);
  DestructableRestoreLife(
    GetDyingDestructable()!,
    GetDestructableMaxLife(GetDyingDestructable()!),
    true,
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_regrowTrees: () => void;
}
InitTrig_regrowTrees = (): void => {
  gg_trg_regrowTrees = CreateTrigger();
  TriggerRegisterDestDeathInRegionEvent(
    gg_trg_regrowTrees,
    gg_rct_Revo_Camera_Bounds,
  );
  TriggerAddAction(gg_trg_regrowTrees, Trig_regrowTrees_Actions);
};
