//===========================================================================
// Trigger: wispControl
//===========================================================================
const Trig_wispControl_Conditions = (): boolean => {
  if ((!(GetUnitTypeId(GetTriggerUnit()!) === FourCC("e000")))) {
    return false;
  }
  return true;
};

const Trig_wispControl_Actions = (): void => {
  SetUnitPosition(
    GetTriggerUnit()!,
    GetRectCenterX(wispArea),
    GetRectCenterY(wispArea),
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_wispControl: () => void;
}
InitTrig_wispControl = (): void => {
  gg_trg_wispControl = CreateTrigger();
  TriggerRegisterLeaveRectSimple(gg_trg_wispControl, gg_rct_Fence_Zone);
  TriggerRegisterLeaveRectSimple(gg_trg_wispControl, gg_rct_Glory_Hill_Fence);
  TriggerAddCondition(
    gg_trg_wispControl,
    Condition(Trig_wispControl_Conditions),
  );
  TriggerAddAction(gg_trg_wispControl, Trig_wispControl_Actions);
};
