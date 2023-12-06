//===========================================================================
// Trigger: wins
//===========================================================================
const Trig_wins_Func003Func001Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  return true;
};

const Trig_wins_Func003Func001A = (): void => {
  if ((Trig_wins_Func003Func001Func001C())) {
    udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      ("                              " + udg_colorString[udg_atempint]) +
        (GetPlayerName(GetEnumPlayer()!) +
          (" : " + I2S(udg_wins[udg_atempint]))),
    );
  }
};

const Trig_wins_Func003Func002Func001C = (): boolean => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[GetConvertedPlayerId(ConvertedPlayer(GetForLoopIndexA())!)] ===
      0))
  ) {
    return false;
  }
  return true;
};

const Trig_wins_Func003Func006Func001C = (): boolean => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[GetConvertedPlayerId(ConvertedPlayer(GetForLoopIndexA())!)] ===
      0))
  ) {
    return false;
  }
  return true;
};

const Trig_wins_Func003C = (): boolean => {
  if ((!(CountPlayersInForceBJ(GetPlayersAll()!) > 14))) {
    return false;
  }
  return true;
};

const Trig_wins_Actions = (): void => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    15,
    "                              |CFFFFCC00Round Wins|r",
  );
  if ((Trig_wins_Func003C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 12;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_wins_Func003Func002Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_wins[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    TriggerSleepAction(9);
    ClearTextMessagesBJ(udg_atempplayer);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      "                              |CFFFFCC00Round Wins|r",
    );
    bj_forLoopAIndex = 13;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_wins_Func003Func006Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_wins[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    ForForce(GetPlayersAll()!, Trig_wins_Func003Func001A);
  }
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_wins: () => void;
}
InitTrig_wins = (): void => {
  gg_trg_wins = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(0)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(1)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(2)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(3)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(4)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(5)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(6)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(7)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(8)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(9)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(10)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(11)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(12)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(13)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(14)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(15)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(16)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(17)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(18)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(19)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(20)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(21)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(22)!, "-wins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_wins, Player(23)!, "-wins", true);
  TriggerAddAction(gg_trg_wins, Trig_wins_Actions);
};
