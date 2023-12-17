//===========================================================================
// Trigger: qds
//===========================================================================
const Trig_qds_Actions_time = (playerId: number): string => {
  if (udg_QDeathTime[playerId + 1] > 9000) {
    return "N/A";
  } else {
    return formatTime(udg_QDeathTime[playerId + 1]);
  }
};

const Trig_qds_Actions = () => {
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
            GetPlayerName(Player(i)!) + " : " + Trig_qds_Actions_time(i),
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

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_qds: () => void;
}
InitTrig_qds = () => {
  let i = 0;
  gg_trg_qds = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(gg_trg_qds, Player(i)!, "-qds", true);
    i = i + 1;
  }
  TriggerAddAction(gg_trg_qds, Trig_qds_Actions);
};
