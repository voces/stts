//===========================================================================
// Trigger: Runes Reset
//===========================================================================
const Trig_Runes_Reset_Func001Func002Func001Func001C = (): boolean => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I00K")))) {
    return false;
  }
  return true;
};

const Trig_Runes_Reset_Func001Func002Func001C = (): boolean => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I00J")))) {
    return false;
  }
  return true;
};

const Trig_Runes_Reset_Func001Func002C = (): boolean => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I00P")))) {
    return false;
  }
  return true;
};

const Trig_Runes_Reset_Func001C = (): boolean => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I00O")))) {
    return false;
  }
  return true;
};

const Trig_Runes_Reset_Actions = (): void => {
  if ((Trig_Runes_Reset_Func001C())) {
    StartTimerBJ(udg_RuneTimer[1], false, 240);
  } else {
    if ((Trig_Runes_Reset_Func001Func002C())) {
      StartTimerBJ(udg_RuneTimer[2], false, 240);
    } else {
      if ((Trig_Runes_Reset_Func001Func002Func001C())) {
        StartTimerBJ(udg_RuneTimer[3], false, 240);
      } else {
        if ((Trig_Runes_Reset_Func001Func002Func001Func001C())) {
          StartTimerBJ(udg_RuneTimer[4], false, 240);
        }
      }
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Runes_Reset: () => void;
}
InitTrig_Runes_Reset = (): void => {
  gg_trg_Runes_Reset = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_Runes_Reset,
    EVENT_PLAYER_UNIT_PICKUP_ITEM,
  );
  TriggerAddAction(gg_trg_Runes_Reset, Trig_Runes_Reset_Actions);
};
