import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-disable");
  TriggerAddAction(t, () => {
    const cid = MapPlayerEx.fromEvent()!.cid;
    udg_disable[cid] = !udg_disable[cid];
    if (udg_disable[cid]) {
      UnitRemoveAbility(udg_unit[cid], FourCC("A00U"));
      DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "|CFFFFCC00D|restroy All Farms |CFFED1C24Disabled|r");
    } else {
      UnitAddAbility(udg_unit[cid], FourCC("A00U"));
      DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "|CFFFFCC00D|restroy All Farms |CFF00AEEFEnabled|r");
    }
  });
});
