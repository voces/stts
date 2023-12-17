import { MapPlayerEx } from "handles/MapPlayerEx";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_stop = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_stop, "-s", true);
  TriggerAddAction(gg_trg_stop, () => {
    const p = MapPlayerEx.fromEvent()!;
    if (GetOwningPlayer(udg_unit2[p.cid]) !== Player(bj_PLAYER_NEUTRAL_VICTIM)) {
      SetUnitOwner(udg_unit2[p.cid], Player(bj_PLAYER_NEUTRAL_VICTIM)!, false);
    }

    IssueImmediateOrder(udg_unit2[p.cid], "holdposition");
  });
});
