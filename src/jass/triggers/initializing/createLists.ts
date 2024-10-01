//===========================================================================
// Trigger: createLists
//
// Fix numSheep, numWolf, numSpirit and leaderboard.
//===========================================================================

const isAfk = (cid: number) => !(udg_AFK[cid] === AFK_PLAYING || udg_AFK[cid] === AFK_AFK_DURING_ROUND);

const isPlaying = (cid: number) => GetPlayerSlotState(ConvertedPlayer(cid)!) === PLAYER_SLOT_STATE_PLAYING;

const isPlayingAndNotAfk = (cid: number) => isPlaying(cid) && !isAfk(cid);

const Trig_createLists_Func013Func001Func001Func001Func001Func002Func001Func001C = () => {
  if ((!(udg_multiboardRow[GetForLoopIndexB()] === bj_forLoopAIndex))) {
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
  if (udg_atempboolean) {
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
  return true;
};

const doCaptainsStuff = () => {
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
        udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = bj_forLoopAIndex;
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

const Trig_createLists_Actions = () => {
  udg_numPick = 0;
  udg_playerCount = 0;
  udg_lastPlayer = 0;
  udg_Custom = Player(0)!;
  udg_originalCustom = Player(0)!;
  udg_playerList = [];

  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    if (GetPlayerSlotState(ConvertedPlayer(i)!) === PLAYER_SLOT_STATE_PLAYING) udg_lastPlayer = i;
    if (
      ConvertedPlayer(i) === udg_Custom && (
        udg_AFK[i] > 2 ||
        GetPlayerSlotState(ConvertedPlayer(i)!) !== PLAYER_SLOT_STATE_PLAYING ||
        GetPlayerController(ConvertedPlayer(i)!) === MAP_CONTROL_COMPUTER
      )
    ) {
      udg_Custom = ConvertedPlayer(i + 1)!;
      udg_originalCustom = ConvertedPlayer(i + 1)!;
    }
  }

  if (udg_Custom === Player(PLAYER_NEUTRAL_AGGRESSIVE)) {
    udg_Custom = Player(0)!;
    udg_originalCustom = Player(0)!;
  }

  if (
    udg_transfer !== 0 &&
    GetPlayerController(ConvertedPlayer(udg_transfer)!) === MAP_CONTROL_USER &&
    GetPlayerSlotState(ConvertedPlayer(udg_transfer)!) === PLAYER_SLOT_STATE_PLAYING &&
    udg_AFK[udg_transfer] < 3
  ) {
    udg_Custom = ConvertedPlayer(udg_transfer)!;
  }

  udg_numSheep = 0;
  udg_numWolf = 0;
  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    if (isPlayingAndNotAfk(i)) {
      if (udg_sheepLastGame[i]) udg_numSheep++;
      else udg_numWolf++;
    }
  }

  if (!udg_round2) {
    // Players will be in natural order
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      if (isPlayingAndNotAfk(i)) {
        udg_numPick++;
        udg_playerCount++;
        udg_playerList[udg_numPick] = ConvertedPlayer(i)!;
      }
    }
  } else {
    // Sheep and wolves swapped
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      if (isPlayingAndNotAfk(i) && udg_sheepLastGame[i]) {
        udg_numPick++;
        udg_playerCount++;
        udg_playerList[udg_numPick] = ConvertedPlayer(i)!;
      }
    }
    // Sheep and wolves swapped
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      if (isPlayingAndNotAfk(i) && !udg_sheepLastGame[i]) {
        udg_numPick++;
        udg_playerCount++;
        udg_playerList[udg_numPick] = ConvertedPlayer(i)!;
      }
    }
  }

  if (udg_Teams === TEAMS_PICK) {
    // Add players yet to be picked
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      if (isPlaying(i) && udg_AFK[i] === AFK_PLAYING_PICK) {
        udg_numPick++;
        udg_playerCount++;
        udg_playerList[udg_numPick] = ConvertedPlayer(i)!;
      }
    }
    SetUnitOwner(udg_farm, udg_Custom, false);
    TriggerExecute(gg_trg_setupPick);
  } else if (udg_Teams === TEAMS_CAPTAINS) {
    ForForce(GetPlayersAll()!, doCaptainsStuff);
  }

  if (udg_Teams === TEAMS_LOCK_IE_PLAYING) {
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      LeaderboardSetPlayerItemLabelBJ(
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!,
        "Sheep: " + I2S(CountPlayersInForceBJ(udg_Sheep)) + "                    (Farms)",
      );
      LeaderboardSetPlayerItemLabelBJ(
        Player(bj_PLAYER_NEUTRAL_VICTIM)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!,
        "Spirits: " + I2S(CountPlayersInForceBJ(udg_Spirit)),
      );
      LeaderboardSetPlayerItemLabelBJ(
        Player(bj_PLAYER_NEUTRAL_EXTRA)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!,
        "Wolves: " + I2S(CountPlayersInForceBJ(udg_Sheep)) + "                    (Kills)",
      );
    }
  } else if (udg_Teams !== TEAMS_PICK && udg_AFK[GetConvertedPlayerId(udg_Custom)] === AFK_AFK) {
    LeaderboardSetPlayerItemLabelBJ(
      udg_Custom,
      GetLastCreatedLeaderboard()!,
      "|CFFFFFFFF$" + udg_colorString[GetConvertedPlayerId(udg_Custom)] + (GetPlayerName(udg_Custom) + " (AFK)"),
    );
  } else {
    LeaderboardSetPlayerItemLabelBJ(
      udg_Custom,
      GetLastCreatedLeaderboard()!,
      "|CFFFFFFFF$" + udg_colorString[GetConvertedPlayerId(udg_Custom)] + GetPlayerName(udg_Custom),
    );
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
