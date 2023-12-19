import { setTimeout } from "util/setTimeout";
import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = Trigger.create();
  EnumDestructablesInRect(
    GetEntireMapRect()!,
    Filter(() => true),
    () => TriggerRegisterDeathEvent(t.handle, GetEnumDestructable()!),
  );
  t.addAction(() => {
    const d = GetDyingDestructable();
    if (d) setTimeout(45, () => DestructableRestoreLife(d, GetDestructableMaxLife(d), true));
  });
});
