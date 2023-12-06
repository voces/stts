//===========================================================================
// Trigger: ts
//===========================================================================
const Trig_ts_Func003Func001Func001C = (): boolean => {
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

const Trig_ts_Func003Func001A = (): void => {
  if ((Trig_ts_Func003Func001Func001C())) {
    udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      ("                              " + udg_colorString[udg_atempint]) +
        (GetPlayerName(GetEnumPlayer()!) +
          (" : " + I2S(udg_totalSaves[udg_atempint]))),
    );
  }
};

const Trig_ts_Func003Func002Func001C = (): boolean => {
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

const Trig_ts_Func003Func006Func001C = (): boolean => {
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

const Trig_ts_Func003C = (): boolean => {
  if ((!(CountPlayersInForceBJ(GetPlayersAll()!) > 14))) {
    return false;
  }
  return true;
};

const Trig_ts_Actions = (): void => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    15,
    "                              |CFFFFCC00Total Saves|r",
  );
  if ((Trig_ts_Func003C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 12;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_ts_Func003Func002Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_totalSaves[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    TriggerSleepAction(9);
    ClearTextMessagesBJ(udg_atempplayer);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      "                              |CFFFFCC00Total Saves|r",
    );
    bj_forLoopAIndex = 13;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_ts_Func003Func006Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_totalSaves[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    ForForce(GetPlayersAll()!, Trig_ts_Func003Func001A);
  }
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_ts: () => void;
}
InitTrig_ts = (): void => {
  gg_trg_ts = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(0)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(1)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(2)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(3)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(4)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(5)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(6)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(7)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(8)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(9)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(10)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(11)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(12)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(13)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(14)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(15)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(16)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(17)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(18)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(19)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(20)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(21)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(22)!, "-ts", true);
  TriggerRegisterPlayerChatEvent(gg_trg_ts, Player(23)!, "-ts", true);
  TriggerAddAction(gg_trg_ts, Trig_ts_Actions);
};
