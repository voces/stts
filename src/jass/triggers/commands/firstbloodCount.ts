import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_firstbloodCount_Actions = () => {
  const triggerer = MapPlayerEx.fromEvent()!;
  let count = 0;
  triggerer.displayTimedText("|CFFFFCC00First Blood Kills | Deaths|r", 15);
  for (let cid = 1; cid <= bj_MAX_PLAYERS; cid++) {
    const p = MapPlayerEx.fromIndex(cid - 1);
    if (!p || p.slotState === PLAYER_SLOT_STATE_EMPTY) continue;
    if (count > 0 && (count % 15 === 0)) {
      TriggerSleepAction(9);
      count = 0;
      triggerer.displayTimedText("|CFFFFCC00First Blood Kills | Deaths (cont.)|r", 15);
    }
    const fbk = I2S(udg_firstbloodKillCounter[cid]);
    const fbd = I2S(udg_firstbloodDeathCounter[cid]);
    triggerer.displayTimedText(`${p.coloredName_} : ${fbk} | ${fbd}`, 15);
    count++;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_firstbloodCount: () => void;
}
InitTrig_firstbloodCount = () => {
  gg_trg_firstbloodCount = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_firstbloodCount, "-fbc");
  TriggerAddAction(gg_trg_firstbloodCount, Trig_firstbloodCount_Actions);
};
