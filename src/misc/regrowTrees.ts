import { setTimeout } from "util/setTimeout";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const d = GetDyingDestructable();
  if (d) setTimeout(45, () => DestructableRestoreLife(d, GetDestructableMaxLife(d), true));
});
