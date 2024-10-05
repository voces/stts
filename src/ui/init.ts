import { setTimeout } from "util/setTimeout";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { initIntermission } from "./init/intermission";
import { initPreferences } from "./init/preferences";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  setTimeout(0.01, () => {
    BlzLoadTOCFile("customui/main.toc");
    initIntermission();
    initPreferences();
  });
});
