//===========================================================================
// Trigger: Claws of Velocity Recipe
//===========================================================================
const Trig_Claws_of_Velocity_Recipe_Func001Func001C = (): boolean => {
  if ((GetItemTypeId(GetManipulatedItem()!) === FourCC("I00T"))) {
    return true;
  }
  if ((GetItemTypeId(GetManipulatedItem()!) === FourCC("I004"))) {
    return true;
  }
  if ((GetItemTypeId(GetManipulatedItem()!) === FourCC("I005"))) {
    return true;
  }
  return false;
};

const Trig_Claws_of_Velocity_Recipe_Func001Func002C = (): boolean => {
  if ((!(UnitHasItemOfTypeBJ(GetTriggerUnit()!, FourCC("I00T")) === true))) {
    return false;
  }
  if ((!(UnitHasItemOfTypeBJ(GetTriggerUnit()!, FourCC("I004")) === true))) {
    return false;
  }
  if ((!(UnitHasItemOfTypeBJ(GetTriggerUnit()!, FourCC("I005")) === true))) {
    return false;
  }
  return true;
};

const Trig_Claws_of_Velocity_Recipe_Func001C = (): boolean => {
  if ((!Trig_Claws_of_Velocity_Recipe_Func001Func001C())) {
    return false;
  }
  if ((!Trig_Claws_of_Velocity_Recipe_Func001Func002C())) {
    return false;
  }
  return true;
};

const Trig_Claws_of_Velocity_Recipe_Actions = (): void => {
  if ((Trig_Claws_of_Velocity_Recipe_Func001C())) {
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I00T"))!);
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I004"))!);
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I005"))!);
    UnitAddItemByIdSwapped(FourCC("I00S"), GetTriggerUnit()!);
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
  let InitTrig_Claws_of_Velocity_Recipe: () => void;
}
InitTrig_Claws_of_Velocity_Recipe = (): void => {
  gg_trg_Claws_of_Velocity_Recipe = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_Claws_of_Velocity_Recipe,
    EVENT_PLAYER_UNIT_PICKUP_ITEM,
  );
  TriggerAddAction(
    gg_trg_Claws_of_Velocity_Recipe,
    Trig_Claws_of_Velocity_Recipe_Actions,
  );
};
