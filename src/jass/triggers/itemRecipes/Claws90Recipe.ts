//===========================================================================
// Trigger: Claws 90 Recipe
//===========================================================================
const Trig_Claws_240_Recipe_Func001Func002Func002Func001Func002Func002C = (
  tempint: number,
): boolean => {
  if ((!(tempint === 2))) {
    return false;
  }
  return true;
};

const Trig_Claws_240_Recipe_Func001Func002Func002Func001Func002C = (
  k: number,
): boolean => {
  if (
    (!(GetItemTypeId(UnitItemInSlotBJ(GetTriggerUnit()!, k)!) ===
      FourCC("I005")))
  ) {
    return false;
  }
  return true;
};

const Trig_Claws_240_Recipe_Func001Func002Func002C = (i: number): boolean => {
  if (
    (!(GetItemTypeId(UnitItemInSlotBJ(GetTriggerUnit()!, i)!) ===
      FourCC("I00M")))
  ) {
    return false;
  }
  return true;
};

const Trig_Claws_240_Recipe_Func001Func003C = (): boolean => {
  if ((GetItemTypeId(GetManipulatedItem()!) === FourCC("I005"))) {
    return true;
  }
  if ((GetItemTypeId(GetManipulatedItem()!) === FourCC("I00M"))) {
    return true;
  }
  return false;
};

const Trig_Claws_240_Recipe_Func001C = (): boolean => {
  if ((!Trig_Claws_240_Recipe_Func001Func003C())) {
    return false;
  }
  return true;
};

const Trig_Claws_240_Recipe_Actions = (): void => {
  let tempint = 0;
  let i = 0;
  let k = 0;

  if ((Trig_Claws_240_Recipe_Func001C())) {
    i = 1;
    while (true) {
      if (i > 6) break;
      if ((Trig_Claws_240_Recipe_Func001Func002Func002C(i))) {
        k = 1;
        while (true) {
          if (k > 6) break;
          if ((Trig_Claws_240_Recipe_Func001Func002Func002Func001Func002C(k))) {
            tempint = tempint + 1;
            if (
              (Trig_Claws_240_Recipe_Func001Func002Func002Func001Func002Func002C(
                tempint,
              ))
            ) {
              RemoveItem(
                GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I00M"))!,
              );
              RemoveItem(
                GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I005"))!,
              );
              RemoveItem(
                GetItemOfTypeFromUnitBJ(GetTriggerUnit()!, FourCC("I005"))!,
              );
              UnitAddItemByIdSwapped(FourCC("I00L"), GetTriggerUnit()!);
              AddSpecialEffectTargetUnitBJ(
                "overhead",
                GetTriggerUnit()!,
                "Abilities\\Spells\\Human\\HolyBolt\\HolyBoltSpecialArt.mdl",
              );
              TriggerSleepAction(0.01);
              DestroyEffectBJ(GetLastCreatedEffectBJ()!);
            }
          }
          k = k + 1;
        }
      }
      i = i + 1;
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Claws_90_Recipe: () => void;
}
InitTrig_Claws_90_Recipe = (): void => {
  gg_trg_Claws_90_Recipe = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_Claws_90_Recipe,
    EVENT_PLAYER_UNIT_PICKUP_ITEM,
  );
  TriggerAddAction(gg_trg_Claws_90_Recipe, Trig_Claws_240_Recipe_Actions);
};
