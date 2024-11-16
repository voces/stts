import { MapPlayerEx } from "handles/MapPlayerEx";
import { TriggerEx } from "handles/TriggerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { setTimeout } from "util/setTimeout";
import { addScriptHook, File, W3TS_HOOK } from "w3ts";

let guideFarms = true;

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = TriggerEx.create();
  registerAnyPlayerChatEvent(t, "-farmguide", false);
  registerAnyPlayerChatEvent(t, "-guidefarm", false);
  t.addAction(() => {
    if (GetTriggerPlayer() !== GetLocalPlayer()) return;
    setShowGuideFarms(!guideFarms);
    MapPlayerEx.fromLocal().displayTimedText(
      `|CFF00AEEFGuide farms |CFFED1C24${guideFarms ? "enabled" : "disabled"}|r`,
    );
  });

  setTimeout(0.02, () => {
    const s = File.read("revo/guidefarms.txt");
    if (s != null && s === "false") guideFarms = false;
  });
});

/** Async setting on whether to show guide farms */
export const showGuideFarms = () => guideFarms;

export const setShowGuideFarms = (value: boolean) => {
  guideFarms = value;
  File.write("revo/guidefarms.txt", B2S(guideFarms));
};
