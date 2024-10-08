import { setTimeout } from "util/setTimeout";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { initIntermission } from "./init/intermission";
import { initPreferences } from "./init/preferences";
import { FrameEx } from "handles/FrameEx";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  setTimeout(0.01, () => {
    BlzLoadTOCFile("customui/main.toc");
    initIntermission();
    initPreferences();
    FrameEx.fromOrigin(ORIGIN_FRAME_TOP_MSG).clearPoints().setAlpha(0);
  });
});
