import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_qds_Actions_time = (playerId: number): string => {
  if (Number.isFinite(udg_QDeathTime[playerId + 1])) return formatTime(udg_QDeathTime[playerId + 1]);
  return "N/A";
};

const Trig_qds_Actions = () => {
  let i = 0;
  let count = 0;
  const p = MapPlayerEx.fromEvent()!;
  p.displayTimedText(" ", 15);
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    count = 0;
    while (true) {
      if (i === bj_MAX_PLAYERS || count === 12) break;
      if (
        GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[i + 1] === AFK_PLAYING
      ) {
        p.displayTimedText(
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + " : " + Trig_qds_Actions_time(i),
          15,
        );
        count = count + 1;
      }
      i = i + 1;
    }
    if (count === 12) {
      TriggerSleepAction(9);
      if (p.isLocal()) ClearTextMessages();
    }
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
