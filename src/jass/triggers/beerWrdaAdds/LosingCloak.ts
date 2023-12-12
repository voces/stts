//===========================================================================
// Trigger: Losing Cloak
//===========================================================================
const Trig_Losing_Cloak_Conditions = () => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I001")))) {
    return false;
  }
  return true;
};

const Trig_Losing_Cloak_Func002Func001C = () => {
  if ((!(GetManipulatedItem()! != null))) {
    return false;
  }
  if (
    (!(GetItemTypeId(GetManipulatedItem()!) ===
      GetItemTypeId(UnitItemInSlotBJ(GetTriggerUnit()!, udg_IntLoop)!)))
  ) {
    return false;
  }
  return true;
};

const Trig_Losing_Cloak_Func003Func001Func003Func003Func003Func003C = () => {
  if ((!(udg_IntCloakCount === 1))) {
    return false;
  }
  return true;
};

const Trig_Losing_Cloak_Func003Func001Func003Func003Func003C = () => {
  if ((!(udg_IntCloakCount === 2))) {
    return false;
  }
  return true;
};

const Trig_Losing_Cloak_Func003Func001Func003Func003C = () => {
  if ((!(udg_IntCloakCount === 3))) {
    return false;
  }
  return true;
};

const Trig_Losing_Cloak_Func003Func001Func003C = () => {
  if ((!(udg_IntCloakCount === 4))) {
    return false;
  }
  return true;
};

const Trig_Losing_Cloak_Func003Func001C = () => {
  if ((!(udg_IntCloakCount === 5))) {
    return false;
  }
  return true;
};

const Trig_Losing_Cloak_Func003C = () => {
  if ((!(udg_IntCloakCount === 6))) {
    return false;
  }
  return true;
};

const Trig_Losing_Cloak_Actions = () => {
  udg_IntCloakCount = 0;
  udg_IntLoop = 1;
  while (true) {
    if (udg_IntLoop > 6) break;
    if ((Trig_Losing_Cloak_Func002Func001C())) {
      udg_IntCloakCount = udg_IntCloakCount + 1;
    }
    udg_IntLoop = udg_IntLoop + 1;
  }
  if ((Trig_Losing_Cloak_Func003C())) {
    UnitRemoveAbilityBJ(FourCC("A01N"), GetTriggerUnit()!);
    UnitAddAbilityBJ(FourCC("A01M"), GetTriggerUnit()!);
  } else {
    if ((Trig_Losing_Cloak_Func003Func001C())) {
      UnitRemoveAbilityBJ(FourCC("A01M"), GetTriggerUnit()!);
      UnitAddAbilityBJ(FourCC("A01C"), GetTriggerUnit()!);
    } else {
      if ((Trig_Losing_Cloak_Func003Func001Func003C())) {
        UnitRemoveAbilityBJ(FourCC("A01C"), GetTriggerUnit()!);
        UnitAddAbilityBJ(FourCC("A017"), GetTriggerUnit()!);
      } else {
        if ((Trig_Losing_Cloak_Func003Func001Func003Func003C())) {
          UnitRemoveAbilityBJ(FourCC("A017"), GetTriggerUnit()!);
          UnitAddAbilityBJ(FourCC("A014"), GetTriggerUnit()!);
        } else {
          if ((Trig_Losing_Cloak_Func003Func001Func003Func003Func003C())) {
            UnitRemoveAbilityBJ(FourCC("A014"), GetTriggerUnit()!);
            UnitAddAbilityBJ(FourCC("A013"), GetTriggerUnit()!);
          } else {
            if (
              (Trig_Losing_Cloak_Func003Func001Func003Func003Func003Func003C())
            ) {
              UnitRemoveAbilityBJ(FourCC("A013"), GetTriggerUnit()!);
            }
          }
        }
      }
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Losing_Cloak: () => void;
}
InitTrig_Losing_Cloak = () => {
  gg_trg_Losing_Cloak = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_Losing_Cloak,
    EVENT_PLAYER_UNIT_DROP_ITEM,
  );
  TriggerAddCondition(
    gg_trg_Losing_Cloak,
    Condition(Trig_Losing_Cloak_Conditions),
  );
  TriggerAddAction(gg_trg_Losing_Cloak, Trig_Losing_Cloak_Actions);
};
