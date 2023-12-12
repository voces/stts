//===========================================================================
// Trigger: partnerCount
//===========================================================================

const Trig_partnerCount_Actions = () => {
  let i = 0;
  let count = 0;
  let pid: number;
  Split(GetEventPlayerChatString()!, " ", false);

  if (myArg[0] !== "-pc") {
    return;
  }

  if (myArgCount === 2) {
    pid = S2I(myArg[1]) - 1;
  } else {
    pid = GetPlayerId(GetTriggerPlayer()!);
  }

  DisplayTimedTextToPlayer(
    GetTriggerPlayer()!,
    0,
    0,
    15,
    "                              " + udg_colorString[pid + 1] +
      GetPlayerName(Player(pid)!) + "|r|CFFFFCC00's Partner Count|r",
  );
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    count = 0;
    while (true) {
      if (i === bj_MAX_PLAYERS || count === 12) break;
      if (
        GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[i + 1] === AFK_PLAYING && i !== pid
      ) {
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + " : " +
            I2S(udg_accumPartner[pid * 24 + i + 1]),
        );
        count = count + 1;
      }
      i = i + 1;
    }
    if (count === 12) {
      TriggerSleepAction(9);
      if (GetLocalPlayer() === GetTriggerPlayer()!) {
        ClearTextMessages();
      }
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_partnerCount: () => void;
}
InitTrig_partnerCount = () => {
  let i = 0;
  gg_trg_partnerCount = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(
      gg_trg_partnerCount,
      Player(i)!,
      "-pc",
      false,
    );
    i = i + 1;
  }
  TriggerAddAction(gg_trg_partnerCount, Trig_partnerCount_Actions);
};
