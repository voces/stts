import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-u");
  TriggerAddAction(t, () => {
    const p = GetTriggerPlayer()!;

    const g = CreateGroup();
    GroupEnumUnitsSelected(g, p);

    const u = CreateUnit(p, unstuckType, 0, 0, 270)!;
    SelectUnitForPlayerSingle(u, p);

    ForceUICancelBJ(p);
    RemoveUnit(u);

    ForGroup(g, () => SelectUnitAddForPlayer(GetEnumUnit()!, p));
    DestroyGroup(g);
  });
});
