//===========================================================================
// Trigger: sc
//===========================================================================
const Trig_sc_printSheepCounts = () => {
  let i = 0;
  let count = 0;

  DisplayTimedTextToPlayer(GetTriggerPlayer()!, 0, 0, 15, " ");
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    count = 0;
    while (true) {
      if (i === bj_MAX_PLAYERS || count === 12) break;
      if (
        GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[i + 1] === AFK_PLAYING
      ) {
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + " : " + I2S(udg_sheepCount[i + 1]),
        );
        count = count + 1;
      }
      i = i + 1;
    }
    if (count === 12) {
      TriggerSleepAction(9);
      if (GetLocalPlayer() === GetTriggerPlayer()!) ClearTextMessages();
    }
  }
};

const Trig_sc_setSheepCount = () => {
  const pId = S2I(myArg[1]);
  const newSC = S2I(myArg[2]);

  udg_sheepCount[pId] = newSC;
  LeaderboardSetPlayerItemValueBJ(
    ConvertedPlayer(pId)!,
    GetLastCreatedLeaderboard()!,
    udg_sheepCount[pId],
  );
};

const Trig_sc_Actions = () => {
  const str = StringCase(GetEventPlayerChatString()!, false)!;

  if (str === "-sc") {
    Trig_sc_printSheepCounts();
    return;
  }

  Split(str, " ", false);

  if (
    myArg[0] === "-sc" && myArgCount === 3 && udg_Custom === GetTriggerPlayer()!
  ) {
    Trig_sc_setSheepCount();
  }
};

//===========================================================================
export {};
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
