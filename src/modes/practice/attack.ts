import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_attack = CreateTrigger();
  DisableTrigger(gg_trg_attack);
  registerAnyPlayerChatEvent(gg_trg_attack, "-a");
  TriggerAddAction(gg_trg_attack, () => {
    const p = MapPlayerEx.fromEvent()!;
    if (GetOwningPlayer(udg_unit2[p.cid]) !== Player(PLAYER_NEUTRAL_AGGRESSIVE)) {
      SetUnitOwner(udg_unit2[p.cid], Player(PLAYER_NEUTRAL_AGGRESSIVE)!, false);
    }

    IssueTargetOrder(udg_unit2[p.cid], "attack", udg_unit[p.cid]);
  });
});
