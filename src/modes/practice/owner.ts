import { GroupEx } from "handles/GroupEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { UnitEx } from "handles/UnitEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

const ownNeutrals = new WeakMap<MapPlayerEx, WeakSet<UnitEx>>();

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_owner = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_owner, "-owner");
  registerAnyPlayerChatEvent(gg_trg_owner, "-o");
  TriggerAddAction(gg_trg_owner, () => {
    const p = MapPlayerEx.fromEvent()!;
    let ownUnitsSelected = false;
    const g = GroupEx.fromSelectedUnits(p, (u) => {
      if (u.owner === p) {
        if (u.typeId === sheepType || u.typeId === wispType) return false;
        ownUnitsSelected = true;
        return true;
      }
      return ownNeutrals.get(p)?.has(u) || false;
    });

    if (g.size === 0) g.addUnit(UnitEx.fromHandle(udg_unit2[p.cid]));

    const newOwner = ownUnitsSelected ? MapPlayerEx.fromIndex(PLAYER_NEUTRAL_AGGRESSIVE)! : p;
    const addOrRemove = ownUnitsSelected ? "remove" : "add";
    let set = ownNeutrals.get(p);
    if (!set) {
      set = new Set();
      ownNeutrals.set(p, set);
    }
    g.forEach((u) => {
      if (ownUnitsSelected && u.owner !== p) return;
      u.setOwner(newOwner, false);
      u[`${addOrRemove}Ability`](FourCC("A01V"));
      if (ownUnitsSelected) set!.add(u);
    });

    ClearSelectionForPlayer(p.handle);
    g.forEach((u) => p.isLocal() ? u.select(true) : null); // This will only select up to two enemies, but w/e

    g.destroy();
  });
});
