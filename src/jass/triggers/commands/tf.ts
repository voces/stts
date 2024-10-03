import { MapPlayerEx } from "handles/MapPlayerEx";

const Trig_tf_Actions = () => {
  const p = MapPlayerEx.fromEvent()!;
  let i = 0;
  let count = 0;
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
          udg_colorString[i + 1] + GetPlayerName(Player(i)!) + " : " + I2S(udg_totalFarmsBuilt[i + 1]),
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
  let InitTrig_tf: () => void;
}
InitTrig_tf = () => {
  let i = 0;
  gg_trg_tf = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(gg_trg_tf, Player(i)!, "-tf", true);
    i = i + 1;
  }
  TriggerAddAction(gg_trg_tf, Trig_tf_Actions);
};
