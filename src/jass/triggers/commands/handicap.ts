import { MapPlayerEx } from "handles/MapPlayerEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_handicap_Actions = () => {
  const triggerPlayer = MapPlayerEx.fromEvent()!;
  const parts = GetEventPlayerChatString()?.split(" ") ?? [];
  BJDebugMsg(`${parts.length}`);
  const adjustedPlayer = parts.length === 3 && triggerPlayer.isHost
    ? MapPlayerEx.fromIndex(S2I(parts[1]) - 1)
    : triggerPlayer;
  if (!adjustedPlayer) return;
  const handicap = S2R(parts[parts.length === 3 && triggerPlayer.isHost ? 2 : 1]);

  if (handicap >= 23 && handicap <= 500) {
    displayTimedTextToAll(`${adjustedPlayer}'s handicap set to ${R2S(handicap)}%.`, 5);
    adjustedPlayer.handicap = handicap / 100;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_handicap: () => void;
}
InitTrig_handicap = () => {
  gg_trg_handicap = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_handicap, "-handicap ", false);
  TriggerAddCondition(gg_trg_handicap, Condition(() => !udg_gameStarted));
  TriggerAddAction(gg_trg_handicap, Trig_handicap_Actions);
};
