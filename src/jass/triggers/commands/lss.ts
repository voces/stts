import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_lss_Actions = () => {
  let count = 0;
  const triggerer = MapPlayerEx.fromEvent()!;
  triggerer.displayTimedText("|CFFFFCC00Last Sheep Standing|r", 15);
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p || p.slotState === PLAYER_SLOT_STATE_EMPTY) continue;
    if (count > 0 && (count % 15 === 0)) {
      TriggerSleepAction(9);
      count = 0;
      triggerer.displayTimedText("|CFFFFCC00Last Sheep Standing (cont.)|r", 15);
    }
    triggerer.displayTimedText(`${p.coloredName_} : ${I2S(udg_lssCounter[i + 1])}`, 15);
    count++;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_lss: () => void;
}
InitTrig_lss = () => {
  gg_trg_lss = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_lss, "-lss");
  TriggerAddAction(gg_trg_lss, Trig_lss_Actions);
};
