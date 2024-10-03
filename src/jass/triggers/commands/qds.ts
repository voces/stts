import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const formatedQDTime = (playerId: number): string => {
  if (Number.isFinite(udg_QDeathTime[playerId + 1])) return formatTime(udg_QDeathTime[playerId + 1]);
  return "N/A";
};

const Trig_qds_Actions = () => {
  let count = 0;
  const triggerer = MapPlayerEx.fromEvent()!;
  triggerer.displayTimedText("|CFFFFCC00Quick Deaths|r", 15);
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p || p.slotState === PLAYER_SLOT_STATE_EMPTY) continue;
    if (count > 0 && (count % 15 === 0)) {
      TriggerSleepAction(9);
      count = 0;
      triggerer.displayTimedText("|CFFFFCC00Quick Deaths (cont.)|r", 15);
    }
    triggerer.displayTimedText(`${p.coloredName_} : ${formatedQDTime(i)}`, 15);
    count++;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_qds: () => void;
}
InitTrig_qds = () => {
  gg_trg_qds = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_qds, "-qds");
  TriggerAddAction(gg_trg_qds, Trig_qds_Actions);
};
