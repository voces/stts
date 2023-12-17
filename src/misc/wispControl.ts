import { terrain } from "settings/terrain";
import { president } from "modes/president";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
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
    () => SetUnitPosition(GetTriggerUnit()!, GetRectCenterX(terrain.wisp), GetRectCenterY(terrain.wisp)),
  );
});
