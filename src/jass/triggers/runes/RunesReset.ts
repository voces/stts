//===========================================================================
// Trigger: Runes Reset
//===========================================================================
const Trig_Runes_Reset_Func001Func002Func001Func001C = () => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I00K")))) {
    return false;
  }
  return true;
};

const Trig_Runes_Reset_Func001Func002Func001C = () => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I00J")))) {
    return false;
  }
  return true;
};

const Trig_Runes_Reset_Func001Func002C = () => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I00P")))) {
    return false;
  }
  return true;
};

const Trig_Runes_Reset_Func001C = () => {
  if ((!(GetItemTypeId(GetManipulatedItem()!) === FourCC("I00O")))) {
    return false;
  }
  return true;
};

const Trig_Runes_Reset_Actions = () => {
  if ((Trig_Runes_Reset_Func001C())) {
    TimerStart(udg_RuneTimer[1], 240, false, null);
  } else {
    if ((Trig_Runes_Reset_Func001Func002C())) {
      TimerStart(udg_RuneTimer[2], 240, false, null);
    } else {
      if ((Trig_Runes_Reset_Func001Func002Func001C())) {
        TimerStart(udg_RuneTimer[3], 240, false, null);
      } else {
        if ((Trig_Runes_Reset_Func001Func002Func001Func001C())) {
          TimerStart(udg_RuneTimer[4], 240, false, null);
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
InitTrig_Runes_Reset = () => {
  gg_trg_Runes_Reset = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_Runes_Reset,
    EVENT_PLAYER_UNIT_PICKUP_ITEM,
  );
  TriggerAddAction(gg_trg_Runes_Reset, Trig_Runes_Reset_Actions);
};
