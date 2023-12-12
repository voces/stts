import { president } from "../../../modes/president";

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_wispControl: () => void;
}
InitTrig_wispControl = () => {
  gg_trg_wispControl = CreateTrigger();
  TriggerRegisterLeaveRectSimple(gg_trg_wispControl, gg_rct_Fence_Zone);
  TriggerRegisterLeaveRectSimple(gg_trg_wispControl, gg_rct_Glory_Hill_Fence);
  TriggerAddCondition(
    gg_trg_wispControl,
    Condition(() =>
      GetUnitTypeId(GetTriggerUnit()!) === wispType &&
      !president.enabled
    ),
  );
  TriggerAddAction(
    gg_trg_wispControl,
    () =>
      SetUnitPosition(
        GetTriggerUnit()!,
        GetRectCenterX(wispArea),
        GetRectCenterY(wispArea),
      ),
  );
};
