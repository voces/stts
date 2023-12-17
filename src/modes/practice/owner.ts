import { MapPlayerEx } from "handles/MapPlayerEx";
import { removeEnumUnit } from "util/removeEnumUnit";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_owner = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_owner, "-owner", true);
  TriggerAddAction(gg_trg_owner, () => {
    const p = MapPlayerEx.fromEvent()!;
    const u2 = udg_unit2[p.cid];
    if (
      GetOwningPlayer(u2) === Player(PLAYER_NEUTRAL_AGGRESSIVE) ||
      GetOwningPlayer(u2) === Player(bj_PLAYER_NEUTRAL_VICTIM)
    ) {
      SetUnitOwner(u2, p.handle, false);
      UnitAddAbility(u2, FourCC("A01V"));
    } else {
      SetUnitOwner(u2, Player(bj_PLAYER_NEUTRAL_VICTIM)!, false);
      UnitRemoveAbility(u2, FourCC("A01V"));
    }

    IssueImmediateOrder(u2, "holdposition");

    const g = GetUnitsOfPlayerMatching(GetTriggerPlayer()!, Condition(() => IsUnitIllusion(GetFilterUnit()!)))!;
    ForGroup(g, removeEnumUnit);
    DestroyGroup(g);
  });
});
