//===========================================================================
// Trigger: tk
//===========================================================================
const Trig_tk_Func003Func001Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_tk_Func003Func001A = () => {
  if ((Trig_tk_Func003Func001Func001C())) {
    udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      ("                              " + udg_colorString[udg_atempint]) +
        (GetPlayerName(GetEnumPlayer()!) +
          (" : " + I2S(udg_totalKills[udg_atempint]))),
    );
  }
};

const Trig_tk_Func003Func002Func001C = () => {
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

const Trig_tk_Func003Func006Func001C = () => {
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

const Trig_tk_Func003C = () => {
  if ((!(CountPlayersInForceBJ(GetPlayersAll()!) > 14))) {
    return false;
  }
  return true;
};

const Trig_tk_Actions = () => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    15,
    "                              |CFFFFCC00Total Kills|r",
  );
  if ((Trig_tk_Func003C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 12;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_tk_Func003Func002Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_totalKills[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    TriggerSleepAction(9);
    ClearTextMessagesBJ(udg_atempplayer);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      "                              |CFFFFCC00Total Kills|r",
    );
    bj_forLoopAIndex = 13;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_tk_Func003Func006Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_totalKills[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    ForForce(GetPlayersAll()!, Trig_tk_Func003Func001A);
  }
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_tk: () => void;
}
InitTrig_tk = () => {
  gg_trg_tk = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(0)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(1)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(2)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(3)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(4)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(5)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(6)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(7)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(8)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(9)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(10)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(11)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(12)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(13)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(14)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(15)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(16)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(17)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(18)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(19)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(20)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(21)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(22)!, "-tk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_tk, Player(23)!, "-tk", true);
  TriggerAddAction(gg_trg_tk, Trig_tk_Actions);
};
