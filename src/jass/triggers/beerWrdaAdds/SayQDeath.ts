import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_Say_Q_Death_Actions = () => {
  const s = GetEventPlayerChatString() ?? "";
  const parts = s.split(" ");
  const pid = S2I(parts[1]) - 1;
  if (pid < 0 || pid > 23) return;
  const p = MapPlayerEx.fromIndex(pid);
  if (!p || p.slotState !== PLAYER_SLOT_STATE_PLAYING) return;
  const time = Number.isFinite(udg_QDeathTime[pid + 1]) ? `a time of ${R2S(udg_QDeathTime[pid + 1])}` : "N/A";
  MapPlayerEx.fromEvent()!.displayTimedText(`The quickest death for ${p} is ${time}`);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Say_Q_Death: () => void;
}
InitTrig_Say_Q_Death = () => {
  gg_trg_Say_Q_Death = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_Say_Q_Death, "-qd ", false);
  TriggerAddAction(gg_trg_Say_Q_Death, Trig_Say_Q_Death_Actions);
};
