//===========================================================================
// Trigger: createLists
//
// Fix numSheep, numWolf, numSpirit and leaderboard.
//===========================================================================
const Trig_createLists_Func006Func002C = () => {
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
  if ((!(GetForLoopIndexA() > udg_lastPlayer))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func006Func003Func001Func003C = () => {
  if ((udg_AFK[GetForLoopIndexA()] > 2)) {
    return true;
  }
  if (
    (GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) !==
      PLAYER_SLOT_STATE_PLAYING)
  ) {
    return true;
  }
  if (
    (GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) ===
      PLAYER_SLOT_STATE_LEFT)
  ) {
    return true;
  }
  if (
    (GetPlayerController(ConvertedPlayer(GetForLoopIndexA())!) ===
      MAP_CONTROL_COMPUTER)
  ) {
    return true;
  }
  return false;
};

const Trig_createLists_Func006Func003Func001C = () => {
  if ((!Trig_createLists_Func006Func003Func001Func003C())) {
    return false;
  }
  return true;
};

const Trig_createLists_Func006Func003C = () => {
  if ((!(ConvertedPlayer(GetForLoopIndexA()) === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func007C = () => {
  if ((!(udg_Custom === Player(PLAYER_NEUTRAL_AGGRESSIVE)!))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func008C = () => {
  if ((!(udg_transfer !== 0))) {
    return false;
  }
  if (
    (!(GetPlayerController(ConvertedPlayer(udg_transfer)!) ===
      MAP_CONTROL_USER))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(udg_transfer)!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(udg_transfer)!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(udg_AFK[udg_transfer] < 3))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func011Func001Func003C = () => {
  if ((udg_AFK[GetForLoopIndexA()] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexA()] === AFK_AFK_DURING_ROUND)) {
    return true;
  }
  return false;
};

const sheepedLastGame = () => {
  if ((!(udg_sheepLastGame[GetForLoopIndexA()] === true))) {
    return false;
  }
  return true;
};

const loopAPlaying = () => {
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
  if ((!Trig_createLists_Func011Func001Func003C())) {
    return false;
  }
  return true;
};

const Trig_createLists_Func012Func001Func001Func007C = () => {
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING)) {
    return true;
  }
  if (
    (udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_AFK_DURING_ROUND)
  ) {
    return true;
  }
  return false;
};

const Trig_createLists_Func012Func001Func001C = () => {
  if (
    (!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))
  ) {
    return false;
  }
  if ((!Trig_createLists_Func012Func001Func001Func007C())) {
    return false;
  }
  return true;
};

const Trig_createLists_Func012Func001A = () => {
  if ((Trig_createLists_Func012Func001Func001C())) {
    udg_numPick = udg_numPick + 1;
    udg_playerCount = udg_playerCount + 1;
    udg_playerList[udg_numPick] = GetEnumPlayer()!;
  }
};

const Trig_createLists_Func012Func002Func001Func002C = () => {
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING)) {
    return true;
  }
  if (
    (udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_AFK_DURING_ROUND)
  ) {
    return true;
  }
  return false;
};

const Trig_createLists_Func012Func002Func001C = () => {
  if ((!Trig_createLists_Func012Func002Func001Func002C())) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
  ) {
    return false;
  }
  return true;
};

const Trig_createLists_Func012Func002A = () => {
  if ((Trig_createLists_Func012Func002Func001C())) {
    udg_numPick = udg_numPick + 1;
    udg_playerCount = udg_playerCount + 1;
    udg_playerList[udg_numPick] = GetEnumPlayer()!;
  }
};

const Trig_createLists_Func012Func003Func001Func005C = () => {
  if ((udg_AFK[GetForLoopIndexA()] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexA()] === AFK_AFK_DURING_ROUND)) {
    return true;
  }
  return false;
};

const Trig_createLists_Func012Func003Func001C = () => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if ((!Trig_createLists_Func012Func003Func001Func005C())) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  return true;
};

const Trig_createLists_Func012C = () => {
  if ((!(udg_round2 === false))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func013Func001Func001Func001Func001Func002Func001Func001C = () => {
  if ((!(udg_multiboardRow[GetForLoopIndexB()] === GetForLoopIndexA()))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func013Func001Func001Func001Func001Func002Func001C = () => {
  if (
    (!(IsPlayerInForce(ConvertedPlayer(GetForLoopIndexB()!)!, udg_Draft) ===
      true))
  ) {
    return false;
  }
  return true;
};

const Trig_createLists_Func013Func001Func001Func001Func001Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func013Func001Func001Func001C = () => {
  if (
    (!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING_PICK))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func013Func001Func001A = () => {
  if ((Trig_createLists_Func013Func001Func001Func001C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      udg_atempboolean = false;
      bj_forLoopBIndex = 1;
      bj_forLoopBIndexEnd = 24;
      while (true) {
        if (bj_forLoopBIndex > bj_forLoopBIndexEnd) break;
        if (
          (Trig_createLists_Func013Func001Func001Func001Func001Func002Func001C())
        ) {
          if (
            (Trig_createLists_Func013Func001Func001Func001Func001Func002Func001Func001C())
          ) {
            udg_atempboolean = true;
          }
        }
        bj_forLoopBIndex = bj_forLoopBIndex + 1;
      }
      if ((Trig_createLists_Func013Func001Func001Func001Func001Func003C())) {
        udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = GetForLoopIndexA();
        break;
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      2,
      udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)],
      udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
        (GetPlayerName(GetEnumPlayer()!) +
          ("(" + (I2S(GetConvertedPlayerId(GetEnumPlayer()!)) + ")"))),
    );
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Draft);
    udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] = AFK_PLAYING;
  }
};

const Trig_createLists_Func013Func001C = () => {
  if ((!(udg_Teams === TEAMS_CAPTAINS))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func013Func002Func001C = () => {
  if (
    (!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING_PICK))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func013Func002A = () => {
  if ((Trig_createLists_Func013Func002Func001C())) {
    udg_numPick = udg_numPick + 1;
    udg_playerCount = udg_playerCount + 1;
    udg_playerList[udg_numPick] = GetEnumPlayer()!;
  }
};

const Trig_createLists_Func013C = () => {
  if ((!(udg_Teams === TEAMS_PICK))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func014Func001Func001C = () => {
  if ((!(udg_AFK[GetConvertedPlayerId(udg_Custom)] === AFK_AFK))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func014Func001C = () => {
  if ((!(udg_Teams !== 3))) {
    return false;
  }
  return true;
};

const Trig_createLists_Func014C = () => {
  if ((!(udg_Teams === TEAMS_LOCK_IE_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_createLists_Actions = () => {
  udg_numPick = 0;
  udg_playerCount = 0;
  udg_lastPlayer = 0;
  udg_Custom = Player(0)!;
  udg_originalCustom = Player(0)!;
  udg_playerList = [];
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_createLists_Func006Func002C())) {
      udg_lastPlayer = GetForLoopIndexA();
    }
    if ((Trig_createLists_Func006Func003C())) {
      if ((Trig_createLists_Func006Func003Func001C())) {
        udg_Custom = ConvertedPlayer(GetForLoopIndexA() + 1)!;
        udg_originalCustom = ConvertedPlayer(GetForLoopIndexA() + 1)!;
      }
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  if ((Trig_createLists_Func007C())) {
    udg_Custom = Player(0)!;
    udg_originalCustom = Player(0)!;
  }
  if ((Trig_createLists_Func008C())) {
    udg_Custom = ConvertedPlayer(udg_transfer)!;
  }
  udg_numSheep = 0;
  udg_numWolf = 0;
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if (loopAPlaying()) {
      if (sheepedLastGame()) {
        udg_numSheep = udg_numSheep + 1;
      } else {
        udg_numWolf = udg_numWolf + 1;
      }
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  if ((Trig_createLists_Func012C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_createLists_Func012Func003Func001C())) {
        udg_numPick = udg_numPick + 1;
        udg_playerCount = udg_playerCount + 1;
        udg_playerList[udg_numPick] = ConvertedPlayer(GetForLoopIndexA())!;
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    ForForce(GetPlayersAll()!, Trig_createLists_Func012Func001A);
    ForForce(GetPlayersAll()!, Trig_createLists_Func012Func002A);
  }
  if ((Trig_createLists_Func013C())) {
    ForForce(GetPlayersAll()!, Trig_createLists_Func013Func002A);
    SetUnitOwner(udg_farm, udg_Custom, false);
    TriggerExecute(gg_trg_setupPick);
  } else {
    if ((Trig_createLists_Func013Func001C())) {
      ForForce(GetPlayersAll()!, Trig_createLists_Func013Func001Func001A);
    }
  }
  if ((Trig_createLists_Func014C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      LeaderboardSetPlayerItemLabelBJ(
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        "Sheep: " +
          (I2S(CountPlayersInForceBJ(udg_Sheep)) +
            "                    (Farms)"),
      );
      LeaderboardSetPlayerItemLabelBJ(
        Player(bj_PLAYER_NEUTRAL_VICTIM)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        "Spirits: " + I2S(CountPlayersInForceBJ(udg_Spirit)),
      );
      LeaderboardSetPlayerItemLabelBJ(
        Player(bj_PLAYER_NEUTRAL_EXTRA)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        "Wolves: " +
          (I2S(CountPlayersInForceBJ(udg_Sheep)) +
            "                    (Kills)"),
      );
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    if ((Trig_createLists_Func014Func001C())) {
      if ((Trig_createLists_Func014Func001Func001C())) {
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
      LeaderboardSetPlayerItemLabelBJ(
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        "Sheep: " + (I2S(udg_numSheep) + "                    (Farms)"),
      );
      LeaderboardSetPlayerItemLabelBJ(
        Player(bj_PLAYER_NEUTRAL_EXTRA)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        "Wolves: " + (I2S(udg_numWolf) + "                    (Kills)"),
      );
    }
  }
  transferOwnershipOfHostFarm();
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_createLists: () => void;
}
InitTrig_createLists = () => {
  gg_trg_createLists = CreateTrigger();
  TriggerAddAction(gg_trg_createLists, Trig_createLists_Actions);
};
