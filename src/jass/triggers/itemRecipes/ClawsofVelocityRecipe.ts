export {};

const Trig_Claws_of_Velocity_Recipe_Func001Func001C = () => {
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

const Trig_Claws_of_Velocity_Recipe_Func001Func002C = () => {
  if (!UnitHasItemOfTypeBJ(GetTriggerUnit()!, FourCC("I00T"))) return false;
  if (!UnitHasItemOfTypeBJ(GetTriggerUnit()!, FourCC("I004"))) return false;
  if (!UnitHasItemOfTypeBJ(GetTriggerUnit()!, FourCC("I005"))) return false;
  return true;
};

const Trig_Claws_of_Velocity_Recipe_Func001C = () => {
  if ((!Trig_Claws_of_Velocity_Recipe_Func001Func001C())) {
    return false;
  }
  if ((!Trig_Claws_of_Velocity_Recipe_Func001Func002C())) {
    return false;
  }
  return true;
};

const Trig_Claws_of_Velocity_Recipe_Actions = () => {
  if ((Trig_Claws_of_Velocity_Recipe_Func001C())) {
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I00T"))!);
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I004"))!);
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I005"))!);
    UnitAddItemByIdSwapped(FourCC("I00S"), GetTriggerUnit()!);
    const e = AddSpecialEffectTarget(
      "Abilities\\Spells\\Human\\HolyBolt\\HolyBoltSpecialArt.mdl",
      GetTriggerUnit()!,
      "overhead",
    );
    TriggerSleepAction(0.01);
    if (e) DestroyEffect(e);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Claws_of_Velocity_Recipe: () => void;
}
InitTrig_Claws_of_Velocity_Recipe = () => {
  gg_trg_Claws_of_Velocity_Recipe = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Claws_of_Velocity_Recipe, EVENT_PLAYER_UNIT_PICKUP_ITEM);
  TriggerAddAction(gg_trg_Claws_of_Velocity_Recipe, Trig_Claws_of_Velocity_Recipe_Actions);
};
