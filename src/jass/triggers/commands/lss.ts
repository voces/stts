//===========================================================================
// Trigger: lss
//===========================================================================
const Trig_lss_Func003Func001Func001C = () => {
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

const Trig_lss_Func003Func001A = () => {
  if ((Trig_lss_Func003Func001Func001C())) {
    udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      ("                              " + udg_colorString[udg_atempint]) +
        (GetPlayerName(GetEnumPlayer()!) +
          (" : " + I2S(udg_lssCounter[udg_atempint]))),
    );
  }
};

const Trig_lss_Func003Func002Func001C = () => {
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

const Trig_lss_Func003Func006Func001C = () => {
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

const Trig_lss_Func003C = () => {
  if ((!(CountPlayersInForceBJ(GetPlayersAll()!) > 14))) {
    return false;
  }
  return true;
};

const Trig_lss_Actions = () => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    15,
    "                              |CFFFFCC00Last Sheep Standing|r",
  );
  if ((Trig_lss_Func003C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 12;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_lss_Func003Func002Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_lssCounter[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    TriggerSleepAction(9);
    ClearTextMessagesBJ(udg_atempplayer);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      "                              |CFFFFCC00Last Sheep Standing|r",
    );
    bj_forLoopAIndex = 13;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_lss_Func003Func006Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " + I2S(udg_lssCounter[GetForLoopIndexA()]))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    ForForce(GetPlayersAll()!, Trig_lss_Func003Func001A);
  }
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_lss: () => void;
}
InitTrig_lss = () => {
  gg_trg_lss = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(0)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(1)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(2)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(3)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(4)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(5)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(6)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(7)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(8)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(9)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(10)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(11)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(12)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(13)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(14)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(15)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(16)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(17)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(18)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(19)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(20)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(21)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(22)!, "-lss", true);
  TriggerRegisterPlayerChatEvent(gg_trg_lss, Player(23)!, "-lss", true);
  TriggerAddAction(gg_trg_lss, Trig_lss_Actions);
};
