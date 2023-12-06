//===========================================================================
// Trigger: Nuke Recipe
//===========================================================================
const Trig_Nuke_Recipe_Conditions = (): boolean => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I002")))) {
    return false;
  }
  if ((!(CountPlayersInForceBJ(udg_Sheep) > 1))) {
    return false;
  }
  return true;
};

const Trig_Nuke_Recipe_Func004Func001C = (): boolean => {
  if (
    (!(GetItemTypeId(
      UnitItemInSlotBJ(GetTriggerUnit()!, GetForLoopIndexA())!,
    ) === FourCC("I002")))
  ) {
    return false;
  }
  return true;
};

const Trig_Nuke_Recipe_Func005C = (): boolean => {
  if ((!(udg_atempint >= 3))) {
    return false;
  }
  return true;
};

const Trig_Nuke_Recipe_Actions = (): void => {
  udg_atempint = 0;
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 6;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_Nuke_Recipe_Func004Func001C())) {
      udg_atempint = udg_atempint + 1;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  if ((Trig_Nuke_Recipe_Func005C())) {
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I002"))!);
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I002"))!);
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I002"))!);
    UnitAddItemByIdSwapped(FourCC("I00R"), GetTriggerUnit()!);
    AddSpecialEffectTargetUnitBJ(
      "overhead",
      GetTriggerUnit()!,
      "Abilities\\Spells\\Human\\HolyBolt\\HolyBoltSpecialArt.mdl",
    );
    TriggerSleepAction(0.01);
    DestroyEffectBJ(GetLastCreatedEffectBJ()!);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Nuke_Recipe: () => void;
}
InitTrig_Nuke_Recipe = (): void => {
  gg_trg_Nuke_Recipe = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_Nuke_Recipe,
    EVENT_PLAYER_UNIT_PICKUP_ITEM,
  );
  TriggerAddCondition(
    gg_trg_Nuke_Recipe,
    Condition(Trig_Nuke_Recipe_Conditions),
  );
  TriggerAddAction(gg_trg_Nuke_Recipe, Trig_Nuke_Recipe_Actions);
};
