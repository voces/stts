import { MapPlayerEx } from "handles/MapPlayerEx";

const Trig_sc_printSheepCounts = () => {
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
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + " : " + I2S(udg_sheepCount[i + 1]),
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

export const setSc = (pId: number, newSC: number) => {
  udg_sheepCount[pId] = newSC;
  LeaderboardSetPlayerItemValueBJ(
    ConvertedPlayer(pId)!,
    GetLastCreatedLeaderboard()!,
    udg_sheepCount[pId],
  );
};

const Trig_sc_setSheepCount = () => {
  // Host variant
  if (udg_Custom === GetTriggerPlayer()) {
    // Set specific player
    if (myArgCount === 3) {
      const pId = S2I(myArg[1]);
      const newSC = S2I(myArg[2]);
      setSc(pId, newSC);
      return;
    }

    // Set all players
    const newSC = S2I(myArg[1]);
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      if (GetPlayerSlotState(Player(i - 1)!) === PLAYER_SLOT_STATE_PLAYING) setSc(i, newSC);
    }

    return;
  }

  // Self variant
  const pId = GetPlayerId(GetTriggerPlayer()!) + 1;
  const newSC = S2I(myArg[1]);

  if (newSC < udg_sheepCount[pId]) {
    let max = -Infinity;
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      if (udg_sheepCount[i] > max && i !== pId) max = udg_sheepCount[i];
    }
    if (newSC <= max) return;
  }
  setSc(pId, newSC);
};

const Trig_sc_Actions = () => {
  const str = StringCase(GetEventPlayerChatString()!, false)!;

  if (str === "-sc") {
    Trig_sc_printSheepCounts();
    return;
  }

  Split(str, " ", false);

  if (myArg[0] === "-sc" && myArgCount > 1) Trig_sc_setSheepCount();
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sc: () => void;
}
InitTrig_sc = () => {
  let i = 0;
  gg_trg_sc = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(gg_trg_sc, Player(i)!, "-sc", false);
    i = i + 1;
  }
  TriggerAddAction(gg_trg_sc, Trig_sc_Actions);
};
