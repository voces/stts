import { MapPlayerEx } from "handles/MapPlayerEx";
import { toStringWithPrecision } from "ui/util";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-do");
  TriggerAddAction(t, () => {
    const self = MapPlayerEx.fromEvent()!;
    self.displayTimedText("|CFFFFCC00Death Order|r");
    let count = 0;
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      if (!wasHere[i]) continue;
      if (count > 0 && count % 15 === 0) {
        TriggerSleepAction(4);
        self.displayTimedText("|CFFFFCC00Death Order (cont.)|r");
      }
      const p = MapPlayerEx.fromIndex(i)!;
      const keys = Object.keys(p.deathOrder).sort();
      self.displayTimedText(
        `${MapPlayerEx.fromIndex(i)}: ${
          keys.length === 0
            ? "N/A"
            : keys.map((k) =>
              `${toStringWithPrecision(p.deathOrder[k]!.total / p.deathOrder[k]!.count, 1)}${
                keys.length > 1 ? ` (${k})` : ""
              }`
            ).join(", ")
        }`,
      );
      count++;
    }
  });
});
