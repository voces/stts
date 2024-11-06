import { MapPlayerEx } from "handles/MapPlayerEx";
import { updateIntermission } from "ui/api/updateIntermission";
import { toStringWithPrecision } from "ui/util";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

let pubHandicap = 150;
export const getPubHandicap = () => pubHandicap;

let allHandicap = 100;
export const getAllHandicap = () => allHandicap;

const Trig_handicap_Actions = () => {
  const triggerPlayer = MapPlayerEx.fromEvent()!;
  const parts = GetEventPlayerChatString()?.split(" ") ?? [];

  const handicap = S2R(parts[parts.length === 3 && triggerPlayer.isHost ? 2 : 1]);
  if (handicap < 23 || handicap > 500) return;

  if (parts[1] === "all" || parts.length === 2) {
    allHandicap = handicap;
    const appliesToPubs = handicap > pubHandicap;
    if (appliesToPubs) pubHandicap = handicap;
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      const p = MapPlayerEx.fromIndex(i)!;
      if (appliesToPubs || !p.isPub) p.handicap = handicap / 100;
    }
    displayTimedTextToAll(`All players' handicap set to ${toStringWithPrecision(handicap)}%.`, 5);
    updateIntermission();
    return;
  } else if (parts[1] === "pub") {
    pubHandicap = handicap;
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      const p = MapPlayerEx.fromIndex(i)!;
      if (p.isPub) p.handicap = pubHandicap / 100;
    }
    displayTimedTextToAll(`Pubs' handicap set to ${toStringWithPrecision(handicap)}%.`, 5);
    updateIntermission();
    return;
  }

  const adjustedPlayer = MapPlayerEx.fromIndex(S2I(parts[1]) - 1);
  if (!adjustedPlayer) return;

  displayTimedTextToAll(`${adjustedPlayer}'s handicap set to ${toStringWithPrecision(handicap)}%.`, 5);
  adjustedPlayer.handicap = handicap / 100;
  updateIntermission();
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_handicap: () => void;
}
InitTrig_handicap = () => {
  gg_trg_handicap = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_handicap, "-handicap ", false);
  TriggerAddCondition(gg_trg_handicap, Condition(() => !udg_gameStarted && MapPlayerEx.fromEvent()?.isHost));
  TriggerAddAction(gg_trg_handicap, Trig_handicap_Actions);
};
