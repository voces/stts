//===========================================================================
// Trigger: setupLeaderboard
//
// afk == 0 here
// afk == 1 came back during pick, was not picked
// afk == 2 back, watching game
// afk == 3 went afk before the game started
// afk == 4, went afk during game or after being picked
//===========================================================================

const Trig_setupLeaderboard_Func002Func008001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
    ),
  );
};

const Trig_setupLeaderboard_Func002Func008Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func008A = (): void => {
  if ((Trig_setupLeaderboard_Func002Func008Func001C())) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      GetLastCreatedLeaderboard()!,
      GetPlayerName(GetEnumPlayer()!)!,
      udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)],
    );
  }
};

const Trig_setupLeaderboard_Func002Func013001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
    ),
  );
};

const Trig_setupLeaderboard_Func002Func013Func001C = (): boolean => {
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
  ) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func013A = (): void => {
  if ((Trig_setupLeaderboard_Func002Func013Func001C())) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      GetLastCreatedLeaderboard()!,
      GetPlayerName(GetEnumPlayer()!)!,
      udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)],
    );
  }
};

const Trig_setupLeaderboard_Func002Func014002 = (): void => {
  LeaderboardSetPlayerItemStyleBJ(
    GetEnumPlayer()!,
    GetLastCreatedLeaderboard()!,
    true,
    true,
    false,
  );
};

const Trig_setupLeaderboard_Func002Func015C = (): boolean => {
  if ((!(udg_round2 === true))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func019001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 3,
    ),
  );
};

const Trig_setupLeaderboard_Func002Func019A = (): void => {
  LeaderboardAddItemBJ(
    GetEnumPlayer()!,
    GetLastCreatedLeaderboard()!,
    GetPlayerName(GetEnumPlayer()!) + " (AFK)",
    udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)],
  );
  LeaderboardSetPlayerItemStyleBJ(
    GetEnumPlayer()!,
    GetLastCreatedLeaderboard()!,
    true,
    true,
    false,
  );
};

const Trig_setupLeaderboard_Func002Func020A = (): void => {
  LeaderboardSetPlayerItemValueBJ(
    GetEnumPlayer()!,
    GetLastCreatedLeaderboard()!,
    udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)],
  );
};

const Trig_setupLeaderboard_Func002Func021C = (): boolean => {
  if ((!(udg_AFK[GetConvertedPlayerId(udg_Custom)] === 3))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func023Func003Func001C = (): boolean => {
  if (
    (!(GetPlayerSlotState(udg_playerList[GetForLoopIndexA()]) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(udg_playerList[GetForLoopIndexA()]) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[GetConvertedPlayerId(udg_playerList[GetForLoopIndexA()])] === 0))
  ) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func023Func004Func001C = (): boolean => {
  if (
    (!(GetPlayerSlotState(udg_playerList[GetForLoopIndexA()]) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(udg_playerList[GetForLoopIndexA()]) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[GetConvertedPlayerId(udg_playerList[GetForLoopIndexA()])] === 1))
  ) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func023Func006Func002Func001Func002C =
  (): boolean => {
    if ((udg_AFK[GetForLoopIndexA()] === 2)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexA()] === 3)) {
      return true;
    }
    return false;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func002Func001C =
  (): boolean => {
    if (
      (!Trig_setupLeaderboard_Func002Func023Func006Func002Func001Func002C())
    ) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func003C =
  (): boolean => {
    if ((!(udg_dummyWisps > 0))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func006Func002C =
  (): boolean => {
    if ((!(udg_dummyWisps > 0))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func006Func003C =
  (): boolean => {
    if ((!(udg_AFK[udg_atempint] === 4))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func006A = (): void => {
  udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
  if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func006Func002C())) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      udg_saves[udg_atempint],
    );
  } else {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      udg_farmCount[udg_atempint],
    );
  }
  if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func006Func003C())) {
    LeaderboardSetPlayerItemLabelBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      GetPlayerName(GetEnumPlayer()!) + " (AFK)",
    );
  }
};

const Trig_setupLeaderboard_Func002Func023Func006Func004Func007C =
  (): boolean => {
    if ((!(udg_dummyWisps > 0))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func010Func004C =
  (): boolean => {
    if ((!(udg_AFK[udg_atempint] === 4))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func010A = (): void => {
  udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
  LeaderboardAddItemBJ(
    GetEnumPlayer()!,
    PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
    udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
    0,
  );
  LeaderboardSetPlayerItemStyleBJ(
    GetEnumPlayer()!,
    PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
    true,
    false,
    false,
  );
  if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func010Func004C())) {
    LeaderboardSetPlayerItemLabelBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      GetPlayerName(GetEnumPlayer()!) + " (AFK)",
    );
  }
};

const Trig_setupLeaderboard_Func002Func023Func006Func004Func011C =
  (): boolean => {
    if ((!(udg_dummyWisps > 0))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func014Func002C =
  (): boolean => {
    if ((!(udg_dummyWisps > 0))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func014Func003C =
  (): boolean => {
    if ((!(udg_AFK[udg_atempint] === 4))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func014A = (): void => {
  udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
  if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func014Func002C())) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      udg_saves[udg_atempint],
    );
  } else {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      udg_kills[udg_atempint],
    );
  }
  if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func014Func003C())) {
    LeaderboardSetPlayerItemLabelBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      GetPlayerName(GetEnumPlayer()!) + " (AFK)",
    );
  }
};

const Trig_setupLeaderboard_Func002Func023Func006Func004Func015Func004Func001Func001C =
  (): boolean => {
    if ((!(udg_AFK[GetForLoopIndexB()] === 3))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func015Func004Func001C =
  (): boolean => {
    if ((!(udg_AFK[GetForLoopIndexB()] === 2))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func004Func015C =
  (): boolean => {
    if ((!(udg_atempint2 === 1))) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func005Func001Func001C =
  (): boolean => {
    if ((udg_hideshow[GetConvertedPlayerId(GetEnumPlayer()!)] === true)) {
      return true;
    }
    if ((udg_permanentHide[GetConvertedPlayerId(GetEnumPlayer()!)] === true)) {
      return true;
    }
    return false;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func005Func001C =
  (): boolean => {
    if (
      (!Trig_setupLeaderboard_Func002Func023Func006Func005Func001Func001C())
    ) {
      return false;
    }
    return true;
  };

const Trig_setupLeaderboard_Func002Func023Func006Func005A = (): void => {
  if ((Trig_setupLeaderboard_Func002Func023Func006Func005Func001C())) {
    LeaderboardDisplayBJ(false, PlayerGetLeaderboardBJ(GetEnumPlayer()!)!);
  } else {
    LeaderboardDisplayBJ(true, PlayerGetLeaderboardBJ(GetEnumPlayer()!)!);
  }
};

const Trig_setupLeaderboard_Func002Func023Func006C = (): boolean => {
  if ((!(udg_Teams === 2))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func023C = (): boolean => {
  if ((!(udg_Teams === 3))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002C = (): boolean => {
  if ((!(udg_Teams < 2))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func003Func001Func001C = (): boolean => {
  if ((!(GetEnumPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func003Func001A = (): void => {
  if ((Trig_setupLeaderboard_Func003Func001Func001C())) {
    LeaderboardSetPlayerItemLabelBJ(
      GetEnumPlayer()!,
      GetLastCreatedLeaderboard()!,
      "|CFFFFFFFF$|r" + I2S(GetRandomInt(1000, 9999)),
    );
  } else {
    LeaderboardSetPlayerItemLabelBJ(
      GetEnumPlayer()!,
      GetLastCreatedLeaderboard()!,
      I2S(GetRandomInt(1000, 9999))!,
    );
  }
  LeaderboardSortItemsBJ(
    PlayerGetLeaderboardBJ(GetEnumPlayer()!)!,
    bj_SORTTYPE_SORTBYLABEL,
    true,
  );
};

const Trig_setupLeaderboard_Func003C = (): boolean => {
  if ((!(udg_isAnon === true))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Actions = (): void => {
  // BEFORE GAME
  if ((Trig_setupLeaderboard_Func002C())) {
    DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
    CreateLeaderboardBJ(GetPlayersAll()!, udg_mapName);
    LeaderboardDisplayBJ(true, GetLastCreatedLeaderboard()!);
    LeaderboardAddItemBJ(
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      GetLastCreatedLeaderboard()!,
      "             " +
        (I2S(udg_numSheep) + (" " + ("Sheep              (sc)"))),
      0,
    );
    LeaderboardSetPlayerItemStyleBJ(
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      GetLastCreatedLeaderboard()!,
      true,
      false,
      false,
    );
    LeaderboardSetPlayerItemLabelColorBJ(
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      GetLastCreatedLeaderboard()!,
      100,
      100,
      100,
      0,
    );
    LeaderboardSetPlayerItemValueColorBJ(
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      GetLastCreatedLeaderboard()!,
      100,
      100,
      100,
      0,
    );
    ForForce(
      GetPlayersMatching(
        Condition(Trig_setupLeaderboard_Func002Func008001001),
      )!,
      Trig_setupLeaderboard_Func002Func008A,
    );
    LeaderboardAddItemBJ(
      Player(bj_PLAYER_NEUTRAL_VICTIM)!,
      GetLastCreatedLeaderboard()!,
      "             " + (I2S(udg_numWolf) + (" " + ("Wolves            (sc)"))),
      0,
    );
    LeaderboardSetPlayerItemStyleBJ(
      Player(bj_PLAYER_NEUTRAL_VICTIM)!,
      GetLastCreatedLeaderboard()!,
      true,
      false,
      false,
    );
    LeaderboardSetPlayerItemLabelColorBJ(
      Player(bj_PLAYER_NEUTRAL_VICTIM)!,
      GetLastCreatedLeaderboard()!,
      100,
      100,
      100,
      0,
    );
    LeaderboardSetPlayerItemValueColorBJ(
      Player(bj_PLAYER_NEUTRAL_VICTIM)!,
      GetLastCreatedLeaderboard()!,
      100,
      100,
      100,
      0,
    );
    ForForce(
      GetPlayersMatching(
        Condition(Trig_setupLeaderboard_Func002Func013001001),
      )!,
      Trig_setupLeaderboard_Func002Func013A,
    );
    ForForce(GetPlayersAll()!, Trig_setupLeaderboard_Func002Func014002);
    if ((Trig_setupLeaderboard_Func002Func015C())) {
      LeaderboardAddItemBJ(
        Player(bj_PLAYER_NEUTRAL_EXTRA)!,
        GetLastCreatedLeaderboard()!,
        "|CFF00AEEFLast: " + (udg_timeString + (" " + udg_lastGameString)),
        0,
      );
      LeaderboardSetPlayerItemStyleBJ(
        Player(bj_PLAYER_NEUTRAL_EXTRA)!,
        GetLastCreatedLeaderboard()!,
        true,
        false,
        false,
      );
      LeaderboardSetPlayerItemLabelColorBJ(
        Player(bj_PLAYER_NEUTRAL_EXTRA)!,
        GetLastCreatedLeaderboard()!,
        100,
        100,
        100,
        0,
      );
    }
    LeaderboardAddItemBJ(
      Player(PLAYER_NEUTRAL_PASSIVE)!,
      GetLastCreatedLeaderboard()!,
      "|CFFED1C24Next: " + (I2S(R2I(udg_time / 60)) + ":00"),
      0,
    );
    LeaderboardSetPlayerItemStyleBJ(
      Player(PLAYER_NEUTRAL_PASSIVE)!,
      GetLastCreatedLeaderboard()!,
      true,
      false,
      false,
    );
    LeaderboardSetPlayerItemLabelColorBJ(
      Player(PLAYER_NEUTRAL_PASSIVE)!,
      GetLastCreatedLeaderboard()!,
      100,
      100,
      100,
      0,
    );
    ForForce(
      GetPlayersMatching(
        Condition(Trig_setupLeaderboard_Func002Func019001001),
      )!,
      Trig_setupLeaderboard_Func002Func019A,
    );
    ForForce(GetPlayersAll()!, Trig_setupLeaderboard_Func002Func020A);
    if ((Trig_setupLeaderboard_Func002Func021C())) {
      LeaderboardSetPlayerItemLabelBJ(
        udg_Custom,
        GetLastCreatedLeaderboard()!,
        "|CFFFFFFFF$" +
          (udg_colorString[GetConvertedPlayerId(udg_Custom)] +
            (GetPlayerName(udg_Custom) + " (AFK)")),
      );
    } else {
      LeaderboardSetPlayerItemLabelBJ(
        udg_Custom,
        GetLastCreatedLeaderboard()!,
        "|CFFFFFFFF$" +
          (udg_colorString[GetConvertedPlayerId(udg_Custom)] +
            GetPlayerName(udg_Custom)),
      );
    }
  } else {
    // DURING PICK
    if ((Trig_setupLeaderboard_Func002Func023C())) {
      DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
      CreateLeaderboardBJ(GetPlayersAll()!, "Pick Teams");
      bj_forLoopAIndex = 1;
      bj_forLoopAIndexEnd = udg_playerCount;
      while (true) {
        if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
        if ((Trig_setupLeaderboard_Func002Func023Func003Func001C())) {
          LeaderboardAddItemBJ(
            udg_playerList[GetForLoopIndexA()],
            GetLastCreatedLeaderboard()!,
            udg_colorString[
              GetConvertedPlayerId(udg_playerList[GetForLoopIndexA()])
            ] + GetPlayerName(udg_playerList[GetForLoopIndexA()]),
            0,
          );
          LeaderboardSetPlayerItemStyleBJ(
            udg_playerList[GetForLoopIndexA()],
            GetLastCreatedLeaderboard()!,
            true,
            false,
            false,
          );
        }
        bj_forLoopAIndex = bj_forLoopAIndex + 1;
      }
      bj_forLoopAIndex = 1;
      bj_forLoopAIndexEnd = udg_playerCount;
      while (true) {
        if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
        if ((Trig_setupLeaderboard_Func002Func023Func004Func001C())) {
          LeaderboardAddItemBJ(
            udg_playerList[GetForLoopIndexA()],
            GetLastCreatedLeaderboard()!,
            udg_colorString[
              GetConvertedPlayerId(udg_playerList[GetForLoopIndexA()])
            ] + GetPlayerName(udg_playerList[GetForLoopIndexA()]),
            0,
          );
          LeaderboardSetPlayerItemStyleBJ(
            udg_playerList[GetForLoopIndexA()],
            GetLastCreatedLeaderboard()!,
            true,
            false,
            false,
          );
        }
        bj_forLoopAIndex = bj_forLoopAIndex + 1;
      }
    } else {
      // IN GAME
      if ((Trig_setupLeaderboard_Func002Func023Func006C())) {
        udg_atempint2 = 0;
        bj_forLoopAIndex = 1;
        bj_forLoopAIndexEnd = udg_lastPlayer;
        while (true) {
          if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
          if ((Trig_setupLeaderboard_Func002Func023Func006Func002Func001C())) {
            udg_atempint2 = udg_atempint2 + 1;
          }
          bj_forLoopAIndex = bj_forLoopAIndex + 1;
        }
        DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
        bj_forLoopAIndex = 1;
        bj_forLoopAIndexEnd = udg_lastPlayer;
        while (true) {
          if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
          DestroyLeaderboardBJ(
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          );
          CreateLeaderboardBJ(
            GetForceOfPlayer(ConvertedPlayer(GetForLoopIndexA())!)!,
            udg_mapName,
          );
          if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func003C())) {
            LeaderboardAddItemBJ(
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              "Sheep: " +
                (I2S(CountPlayersInForceBJ(udg_Sheep)) +
                  "                    (Saves)"),
              0,
            );
          } else {
            LeaderboardAddItemBJ(
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              "Sheep: " +
                (I2S(CountPlayersInForceBJ(udg_Sheep)) +
                  "                    (Farms)"),
              0,
            );
          }
          LeaderboardSetPlayerItemLabelColorBJ(
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
            100,
            100,
            100,
            0,
          );
          LeaderboardSetPlayerItemStyleBJ(
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
            true,
            false,
            false,
          );
          ForForce(
            udg_Sheep,
            Trig_setupLeaderboard_Func002Func023Func006Func004Func006A,
          );
          if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func007C())) {
            LeaderboardAddItemBJ(
              Player(bj_PLAYER_NEUTRAL_VICTIM)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              "Spirit: " + I2S(udg_dummyWisps),
              0,
            );
          } else {
            LeaderboardAddItemBJ(
              Player(bj_PLAYER_NEUTRAL_VICTIM)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              "Spirit: " + I2S(CountPlayersInForceBJ(udg_Spirit)),
              0,
            );
          }
          LeaderboardSetPlayerItemLabelColorBJ(
            Player(bj_PLAYER_NEUTRAL_VICTIM)!,
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
            100,
            100,
            100,
            0,
          );
          LeaderboardSetPlayerItemStyleBJ(
            Player(bj_PLAYER_NEUTRAL_VICTIM)!,
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
            true,
            false,
            false,
          );
          ForForce(
            udg_Spirit,
            Trig_setupLeaderboard_Func002Func023Func006Func004Func010A,
          );
          if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func011C())) {
            LeaderboardAddItemBJ(
              Player(PLAYER_NEUTRAL_PASSIVE)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              "Wolves: " +
                (I2S(CountPlayersInForceBJ(udg_Wolf)) +
                  "                    (Saves)"),
              0,
            );
          } else {
            LeaderboardAddItemBJ(
              Player(PLAYER_NEUTRAL_PASSIVE)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              "Wolves: " +
                (I2S(CountPlayersInForceBJ(udg_Wolf)) +
                  "                    (Kills)"),
              0,
            );
          }
          LeaderboardSetPlayerItemLabelColorBJ(
            Player(PLAYER_NEUTRAL_PASSIVE)!,
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
            100,
            100,
            100,
            0,
          );
          LeaderboardSetPlayerItemStyleBJ(
            Player(PLAYER_NEUTRAL_PASSIVE)!,
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
            true,
            false,
            false,
          );
          ForForce(
            udg_Wolf,
            Trig_setupLeaderboard_Func002Func023Func006Func004Func014A,
          );
          if ((Trig_setupLeaderboard_Func002Func023Func006Func004Func015C())) {
            LeaderboardAddItemBJ(
              Player(bj_PLAYER_NEUTRAL_EXTRA)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              "AFK Players: " + I2S(udg_atempint2),
              0,
            );
            LeaderboardSetPlayerItemLabelColorBJ(
              Player(bj_PLAYER_NEUTRAL_EXTRA)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              100,
              100,
              100,
              0,
            );
            LeaderboardSetPlayerItemStyleBJ(
              Player(bj_PLAYER_NEUTRAL_EXTRA)!,
              PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
              true,
              false,
              false,
            );
            bj_forLoopBIndex = 1;
            bj_forLoopBIndexEnd = udg_lastPlayer;
            while (true) {
              if (bj_forLoopBIndex > bj_forLoopBIndexEnd) break;
              if (
                (Trig_setupLeaderboard_Func002Func023Func006Func004Func015Func004Func001C())
              ) {
                LeaderboardAddItemBJ(
                  ConvertedPlayer(GetForLoopIndexB())!,
                  PlayerGetLeaderboardBJ(
                    ConvertedPlayer(GetForLoopIndexA())!,
                  )!,
                  GetPlayerName(ConvertedPlayer(GetForLoopIndexB())!) +
                    " (back)",
                  0,
                );
                LeaderboardSetPlayerItemStyleBJ(
                  ConvertedPlayer(GetForLoopIndexB())!,
                  GetLastCreatedLeaderboard()!,
                  true,
                  false,
                  false,
                );
              } else {
                if (
                  (Trig_setupLeaderboard_Func002Func023Func006Func004Func015Func004Func001Func001C())
                ) {
                  LeaderboardAddItemBJ(
                    ConvertedPlayer(GetForLoopIndexB())!,
                    PlayerGetLeaderboardBJ(
                      ConvertedPlayer(GetForLoopIndexA())!,
                    )!,
                    GetPlayerName(ConvertedPlayer(GetForLoopIndexB())!)!,
                    0,
                  );
                  LeaderboardSetPlayerItemStyleBJ(
                    ConvertedPlayer(GetForLoopIndexB())!,
                    GetLastCreatedLeaderboard()!,
                    true,
                    false,
                    false,
                  );
                }
              }
              bj_forLoopBIndex = bj_forLoopBIndex + 1;
            }
          }
          bj_forLoopAIndex = bj_forLoopAIndex + 1;
        }
        ForForce(
          GetPlayersAll()!,
          Trig_setupLeaderboard_Func002Func023Func006Func005A,
        );
      }
    }
  }
  if ((Trig_setupLeaderboard_Func003C())) {
    ForForce(GetPlayersAll()!, Trig_setupLeaderboard_Func003Func001A);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_setupLeaderboard: () => void;
}
InitTrig_setupLeaderboard = (): void => {
  gg_trg_setupLeaderboard = CreateTrigger();
  TriggerAddAction(gg_trg_setupLeaderboard, Trig_setupLeaderboard_Actions);
};
