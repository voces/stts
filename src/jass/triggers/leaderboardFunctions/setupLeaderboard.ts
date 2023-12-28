import { switchSheepTimers } from "modes/switch/switch";
import { updateLeaderboardSettingsDisplay } from "settings/time";

//===========================================================================
// Trigger: setupLeaderboard
//
// afk == 0 here
// afk == 1 came back during pick, was not picked
// afk == 2 back, watching game
// afk == 3 went afk before the game started
// afk == 4, went afk during game or after being picked
//===========================================================================

const filterPlayerPlayingAndNotAfk = () => {
  return (
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING &&
    GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT &&
    udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING
  );
};

const enumPlayerSheepedLastGame = () => {
  return udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)];
};

const addEnumPlayerToLeaderboardIfSheeped = () => {
  if (enumPlayerSheepedLastGame()) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      GetLastCreatedLeaderboard()!,
      GetPlayerName(GetEnumPlayer()!)!,
      udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)],
    );
  }
};

const addEnumPlayerToLeaderboardIfNotSheeped = () => {
  if (!enumPlayerSheepedLastGame()) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      GetLastCreatedLeaderboard()!,
      GetPlayerName(GetEnumPlayer()!)!,
      udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)],
    );
  }
};

const setLeaderboardStyle = () => {
  LeaderboardSetPlayerItemStyleBJ(
    GetEnumPlayer()!,
    GetLastCreatedLeaderboard()!,
    true,
    true,
    false,
  );
};

const filterPlayerPlayingAndAfk = () => {
  return (
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING &&
    GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT &&
    udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_AFK
  );
};

const addAfkEnumPlayerToLeaderboard = () => {
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

const setEnumPlayerLeaderboardSheepCount = () => {
  LeaderboardSetPlayerItemValueBJ(
    GetEnumPlayer()!,
    GetLastCreatedLeaderboard()!,
    udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)],
  );
};

const indexAPlayerPlayingAndNotAfk = () => {
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
    (!(udg_AFK[GetConvertedPlayerId(udg_playerList[GetForLoopIndexA()])] ===
      AFK_PLAYING))
  ) {
    return false;
  }
  return true;
};

const indexAPlayerPlayingAndReturnedFromAfkDuringPick = () => {
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
    (!(udg_AFK[GetConvertedPlayerId(udg_playerList[GetForLoopIndexA()])] ===
      AFK_PLAYING_PICK))
  ) {
    return false;
  }
  return true;
};

const indexAPlayerAfkOrReturnedDuringRound = () => {
  if ((udg_AFK[GetForLoopIndexA()] === AFK_RETURNED_DURING_ROUND)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexA()] === AFK_AFK)) {
    return true;
  }
  return false;
};

const playingSheepRows = () => {
  udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
  if (udg_wispPoints > 0) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      udg_saves[udg_atempint],
    );
  } else if (udg_switchOn) {
    switchSheepTimers[udg_atempint - 1].pause();
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      Math.round(switchSheepTimers[udg_atempint - 1].elapsed),
    );
    switchSheepTimers[udg_atempint - 1].resume();
  } else {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      udg_farmCount[udg_atempint],
    );
  }
  if (udg_AFK[udg_atempint] === AFK_AFK_DURING_ROUND) {
    LeaderboardSetPlayerItemLabelBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      GetPlayerName(GetEnumPlayer()!) + " (AFK)",
    );
  }
};

const Trig_setupLeaderboard_Func002Func023Func006Func004Func010Func004C = () => {
  if ((!(udg_AFK[udg_atempint] === AFK_AFK_DURING_ROUND))) {
    return false;
  }
  return true;
};

const playingSpiritRows = () => {
  udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
  if (udg_wispPoints > 0) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      udg_saves[udg_atempint],
    );
  } else if (udg_switchOn) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      Math.round(switchSheepTimers[udg_atempint - 1].elapsed),
    );
  } else {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      0,
    );
  }
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

const Trig_setupLeaderboard_Func002Func023Func006Func004Func014Func003C = () => {
  if ((!(udg_AFK[udg_atempint] === AFK_AFK_DURING_ROUND))) {
    return false;
  }
  return true;
};

const playingWolfRows = () => {
  udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
  if (udg_wispPoints > 0) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      udg_saves[udg_atempint],
    );
  } else if (udg_switchOn) {
    LeaderboardAddItemBJ(
      GetEnumPlayer()!,
      PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
      udg_colorString[udg_atempint] + GetPlayerName(GetEnumPlayer()!),
      Math.round(switchSheepTimers[udg_atempint - 1].elapsed),
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

const Trig_setupLeaderboard_Func002Func023Func006Func004Func015Func004Func001Func001C = () => {
  if ((!(udg_AFK[GetForLoopIndexB()] === AFK_AFK))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func023Func006Func004Func015Func004Func001C = () => {
  if ((!(udg_AFK[GetForLoopIndexB()] === 2))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func023Func006Func004Func015C = () => {
  if ((!(udg_atempint2 === 1))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func023Func006Func005Func001Func001C = () => {
  if ((udg_hideshow[GetConvertedPlayerId(GetEnumPlayer()!)] === true)) {
    return true;
  }
  if ((udg_permanentHide[GetConvertedPlayerId(GetEnumPlayer()!)] === true)) {
    return true;
  }
  return false;
};

const Trig_setupLeaderboard_Func002Func023Func006Func005Func001C = () => {
  if (
    (!Trig_setupLeaderboard_Func002Func023Func006Func005Func001Func001C())
  ) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func002Func023Func006Func005A = () => {
  if ((Trig_setupLeaderboard_Func002Func023Func006Func005Func001C())) {
    LeaderboardDisplayBJ(false, PlayerGetLeaderboardBJ(GetEnumPlayer()!)!);
  } else {
    LeaderboardDisplayBJ(true, PlayerGetLeaderboardBJ(GetEnumPlayer()!)!);
  }
};

const Trig_setupLeaderboard_Func003Func001Func001C = () => {
  if ((!(GetEnumPlayer() === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Func003Func001A = () => {
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

const Trig_setupLeaderboard_Func003C = () => {
  if ((!(udg_isAnon === true))) {
    return false;
  }
  return true;
};

const Trig_setupLeaderboard_Actions = () => {
  if (udg_Teams < TEAMS_LOCK_IE_PLAYING) { // BEFORE GAME
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
        Condition(filterPlayerPlayingAndNotAfk),
      )!,
      addEnumPlayerToLeaderboardIfSheeped,
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
        Condition(filterPlayerPlayingAndNotAfk),
      )!,
      addEnumPlayerToLeaderboardIfNotSheeped,
    );
    ForForce(GetPlayersAll()!, setLeaderboardStyle);
    if (udg_round2) {
      LeaderboardAddItemBJ(
        Player(bj_PLAYER_NEUTRAL_EXTRA)!,
        GetLastCreatedLeaderboard()!,
        "|CFF00AEEFLast: " + udg_timeString + " " + udg_lastGameString,
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
    LeaderboardAddItemBJ(Player(PLAYER_NEUTRAL_PASSIVE)!, GetLastCreatedLeaderboard()!, "", 0);
    updateLeaderboardSettingsDisplay();
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
        Condition(filterPlayerPlayingAndAfk),
      )!,
      addAfkEnumPlayerToLeaderboard,
    );
    ForForce(GetPlayersAll()!, setEnumPlayerLeaderboardSheepCount);
    if (udg_AFK[GetConvertedPlayerId(udg_Custom)] === AFK_AFK) {
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
  } else if (udg_Teams === TEAMS_PICK) { // DURING PICK
    DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
    CreateLeaderboardBJ(GetPlayersAll()!, "Pick Teams");
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = udg_playerCount;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((indexAPlayerPlayingAndNotAfk())) {
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
      if ((indexAPlayerPlayingAndReturnedFromAfkDuringPick())) {
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
  } else if (udg_Teams === TEAMS_LOCK_IE_PLAYING) { // IN GAME
    udg_atempint2 = 0;
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = udg_lastPlayer;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((indexAPlayerAfkOrReturnedDuringRound())) {
        udg_atempint2 = udg_atempint2 + 1;
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = udg_lastPlayer;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      DestroyLeaderboardBJ(PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!);
      CreateLeaderboardBJ(
        GetForceOfPlayer(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_mapName,
      );
      if (udg_wispPoints > 0) {
        LeaderboardAddItemBJ(
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          "Sheep: " +
            I2S(CountPlayersInForceBJ(udg_Sheep)) +
            "                    (Saves)",
          0,
        );
      } else if (udg_switchOn) {
        LeaderboardAddItemBJ(
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          "Sheep: " +
            I2S(CountPlayersInForceBJ(udg_Sheep)) +
            "                    (Time)",
          0,
        );
      } else {
        LeaderboardAddItemBJ(
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          "Sheep: " +
            I2S(CountPlayersInForceBJ(udg_Sheep)) +
            "                    (Farms)",
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
      ForForce(udg_Sheep, playingSheepRows);
      if (udg_wispPoints > 0) {
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
      ForForce(udg_Spirit, playingSpiritRows);
      if (udg_wispPoints > 0) {
        LeaderboardAddItemBJ(
          Player(PLAYER_NEUTRAL_PASSIVE)!,
          PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          "Wolves: " +
            I2S(CountPlayersInForceBJ(udg_Wolf)) +
            "                    (Saves)",
          0,
        );
      } else if (udg_switchOn) {
        LeaderboardAddItemBJ(
          Player(PLAYER_NEUTRAL_PASSIVE)!,
          PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          "Wolves: " +
            I2S(CountPlayersInForceBJ(udg_Wolf)) +
            "                    (Time)",
          0,
        );
      } else {
        LeaderboardAddItemBJ(
          Player(PLAYER_NEUTRAL_PASSIVE)!,
          PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          "Wolves: " +
            I2S(CountPlayersInForceBJ(udg_Wolf)) +
            "                    (Kills)",
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
      ForForce(udg_Wolf, playingWolfRows);
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
  if ((Trig_setupLeaderboard_Func003C())) {
    ForForce(GetPlayersAll()!, Trig_setupLeaderboard_Func003Func001A);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_setupLeaderboard: () => void;
}
InitTrig_setupLeaderboard = () => {
  gg_trg_setupLeaderboard = CreateTrigger();
  TriggerAddAction(gg_trg_setupLeaderboard, Trig_setupLeaderboard_Actions);
};
