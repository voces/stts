//===========================================================================
// Trigger: vwins
//===========================================================================
const Trig_vwins_Func003Func001Func001C = (): boolean => {
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

const Trig_vwins_Func003Func001A = (): void => {
  if ((Trig_vwins_Func003Func001Func001C())) {
    udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      ("                              " + udg_colorString[udg_atempint]) +
        (GetPlayerName(GetEnumPlayer()!) +
          (" : " + I2S(udg_vwins[udg_atempint]))),
    );
  }
};

const Trig_vwins_Func003Func002Func001C = (): boolean => {
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

const Trig_vwins_Func003Func006Func001C = (): boolean => {
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

const Trig_vwins_Func003C = (): boolean => {
  if ((!(CountPlayersInForceBJ(GetPlayersAll()!) > 14))) {
    return false;
  }
  return true;
};

const Trig_vwins_Actions = (): void => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    15,
    "                              |CFFFFCC00Versus Wins|r",
  );
  if ((Trig_vwins_Func003C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 12;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_vwins_Func003Func002Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_vwins[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    TriggerSleepAction(9);
    ClearTextMessagesBJ(udg_atempplayer);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      "                              |CFFFFCC00Versus Wins|r",
    );
    bj_forLoopAIndex = 13;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_vwins_Func003Func006Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_vwins[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    ForForce(GetPlayersAll()!, Trig_vwins_Func003Func001A);
  }
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_vwins: () => void;
}
InitTrig_vwins = (): void => {
  gg_trg_vwins = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(0)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(1)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(2)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(3)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(4)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(5)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(6)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(7)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(8)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(9)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(10)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(11)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(12)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(13)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(14)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(15)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(16)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(17)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(18)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(19)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(20)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(21)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(22)!, "-vwins", true);
  TriggerRegisterPlayerChatEvent(gg_trg_vwins, Player(23)!, "-vwins", true);
  TriggerAddAction(gg_trg_vwins, Trig_vwins_Actions);
};
