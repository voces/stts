//===========================================================================
// Trigger: firstbloodCount
//===========================================================================
const Trig_firstbloodCount_Func003Func001Func001C = () => {
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

const Trig_firstbloodCount_Func003Func001A = () => {
  if ((Trig_firstbloodCount_Func003Func001Func001C())) {
    udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      ("                              " + udg_colorString[udg_atempint]) +
        (GetPlayerName(GetEnumPlayer()!) +
          (" : " +
            (I2S(udg_firstbloodKillCounter[udg_atempint]) +
              (" | " + I2S(udg_firstbloodDeathCounter[udg_atempint]))))),
    );
  }
};

const Trig_firstbloodCount_Func003Func002Func001C = () => {
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

const Trig_firstbloodCount_Func003Func006Func001C = () => {
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

const Trig_firstbloodCount_Func003C = () => {
  if ((!(CountPlayersInForceBJ(GetPlayersAll()!) > 14))) {
    return false;
  }
  return true;
};

const Trig_firstbloodCount_Actions = () => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    15,
    "                              |CFFFFCC00First Blood Kills | Deaths|r",
  );
  if ((Trig_firstbloodCount_Func003C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 12;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_firstbloodCount_Func003Func002Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " +
                (I2S(udg_firstbloodKillCounter[GetForLoopIndexA()]) +
                  (" | " +
                    I2S(udg_firstbloodDeathCounter[GetForLoopIndexA()]))))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    TriggerSleepAction(9);
    ClearTextMessagesBJ(udg_atempplayer);
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      "                              |CFFFFCC00First Blood Kills | Deaths|r",
    );
    bj_forLoopAIndex = 13;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_firstbloodCount_Func003Func006Func001C())) {
        DisplayTimedTextToForce(
          udg_atempplayer,
          15,
          ("                              " +
            udg_colorString[GetForLoopIndexA()]) +
            (GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
              (" : " +
                (I2S(udg_firstbloodKillCounter[GetForLoopIndexA()]) +
                  (" | " +
                    I2S(udg_firstbloodDeathCounter[GetForLoopIndexA()]))))),
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    ForForce(GetPlayersAll()!, Trig_firstbloodCount_Func003Func001A);
  }
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_firstbloodCount: () => void;
}
InitTrig_firstbloodCount = () => {
  gg_trg_firstbloodCount = CreateTrigger();
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(0)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(1)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(2)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(3)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(4)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(5)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(6)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(7)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(8)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(9)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(10)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(11)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(12)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(13)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(14)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(15)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(16)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(17)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(18)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(19)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(20)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(21)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(22)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(23)!,
    "-firstbloodcounter",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(0)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(1)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(2)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(3)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(4)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(5)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(6)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(7)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(8)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(9)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(10)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(11)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(12)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(13)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(14)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(15)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(16)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(17)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(18)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(19)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(20)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(21)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(22)!,
    "-fbc",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_firstbloodCount,
    Player(23)!,
    "-fbc",
    true,
  );
  TriggerAddAction(gg_trg_firstbloodCount, Trig_firstbloodCount_Actions);
};
