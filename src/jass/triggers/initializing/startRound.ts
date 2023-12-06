//===========================================================================
// Trigger: startRound
//===========================================================================
// startRound

const reviveEnumDestructable = (): void => {
  DestructableRestoreLife(
    GetEnumDestructable()!,
    GetDestructableMaxLife(GetEnumDestructable()!),
    true,
  );
};

const removeEnumItem = (): void => {
  RemoveItem(GetEnumItem()!);
};

const resetEnumRoundStats = (i: number): void => {
  udg_apr[i] = 0;
  udg_switch[i] = 0;
  udg_kills[i] = 0;
  udg_farmCount[i] = 0;
  udg_saves[i] = 0;

  if (udg_AFKOn[i] === 1) {
    udg_AFKOn[i] = 2;
  } else if (udg_AFKOn[i] === 2) {
    udg_AFKOn[i] = 0;
  }
};

const destroyEnumPlayerView = (): void => {
  const i = GetConvertedPlayerId(GetEnumPlayer()!);
  DestroyFogModifier(udg_view[i]);
  udg_view[i] = null as unknown as fogmodifier;
};

const removeDraft = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft);
};

const Update_Versus_Wins = (): void => {
  udg_vwins[GetConvertedPlayerId(GetEnumPlayer()!)] =
    udg_vwins[GetConvertedPlayerId(GetEnumPlayer()!)] + 1;
};

const startRoundToggledTriggers = (): void => {
  EnableTrigger(gg_trg_random);
  EnableTrigger(gg_trg_gold);
  EnableTrigger(gg_trg_createSheep);
  EnableTrigger(gg_trg_pick);
  EnableTrigger(gg_trg_pickwolf);
  EnableTrigger(gg_trg_end);
  EnableTrigger(gg_trg_view);
  EnableTrigger(gg_trg_fair);
  EnableTrigger(gg_trg_start);
  EnableTrigger(gg_trg_picksheep);
  EnableTrigger(gg_trg_switch);
  EnableTrigger(gg_trg_vamp);
  EnableTrigger(gg_trg_sheepDies);
  EnableTrigger(gg_trg_spiritDies);
  EnableTrigger(gg_trg_reverse);
  EnableTrigger(gg_trg_time);
  EnableTrigger(gg_trg_captains);
  EnableTrigger(gg_trg_versus);
  EnableTrigger(gg_trg_controloff);
  EnableTrigger(gg_trg_continue);
  EnableTrigger(gg_trg_practice);
  EnableTrigger(gg_trg_mapShrink);
  EnableTrigger(gg_trg_mapExpand);
  EnableTrigger(gg_trg_Anonymous);
};

const pauseTimers = (): void => {
  PauseTimer(udg_Timer);
  PauseTimer(udg_wolfTimer);
  PauseTimer(udg_massTimer);
  PauseTimer(udg_mapSizeChangeTimer);
  PauseTimer(udg_RuneTimer[0]);
  PauseTimer(udg_RuneTimer[1]);
  PauseTimer(udg_RuneTimer[2]);
  PauseTimer(udg_RuneTimer[3]);
  PauseTimer(udg_RuneTimer[4]);
  PauseTimer(createSheepTimer);
};

const clearBlight = (): void => {
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Bot_1,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Left_1,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Right_1,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Top_1,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Bot_2,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Left_2,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Right_2,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Top_2,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Bot_3,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Left_3,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Right_3,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Top_3,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Bot_4,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Left_4,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Right_4,
  );
  SetBlightRectBJ(
    false,
    Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    gg_rct_Blight_Top_4,
  );
};

const resetRoundStats = (): void => {
  udg_numPick = 0;
  udg_numWolf = 0;
  udg_numSheep = 0;
  udg_Teams = TEAMS_OPEN;
  udg_captainTurn = 0;
  udg_gameStarted = false;
  udg_dummyWisps = 0;
  udg_wispPoints = 0;
  udg_blightCounter = 0;
  udg_runSmart = false;
  bj_forLoopAIndex = 0;
  lastSheepReceiver = null as unknown as player;
  lastWolfReceiver = null as unknown as player;
  if (udg_practiceOn) {
    autoCancelEnabled = true;
    udg_practiceOn = false;
  }
  someoneLeft = false;
  udg_switchOn = false;
  vampOn = false;
  udg_viewOn = false;
  udg_shareOn = true;
  udg_pickIndex = 1;
  goldRaces = 0;
};

const Trig_startRound_Actions = (): void => {
  let i: number;
  let n: number;
  let s: string;
  let p: player;
  let u: unit;

  perfectRound = false;
  pauseTimers();
  ClearTextMessagesBJ(GetPlayersAll()!);
  DestroyMultiboardBJ(GetLastCreatedMultiboard()!);
  EnumDestructablesInRectAll(GetPlayableMapRect()!, reviveEnumDestructable);
  clearBlight();
  resetRoundStats();
  ForForce(udg_Draft, removeDraft);

  if (TimerGetElapsed(udg_Timer) >= 60 && udg_gameStarted) {
    TriggerExecute(gg_trg_setafk);
  }

  // Unstuck
  ForceUICancel();

  removeAllUnits();

  i = 1;
  while (true) {
    if (i > bj_MAX_PLAYERS) break;
    DestroyLeaderboardBJ(PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!);
    udg_switch[i] = 0;

    n = 1;
    while (true) {
      if (n > bj_MAX_PLAYERS) break;

      if (udg_sheepLastGame[i] === udg_sheepLastGame[n]) {
        SetPlayerAllianceStateBJ(
          ConvertedPlayer(i)!,
          ConvertedPlayer(n)!,
          bj_ALLIANCE_ALLIED_VISION,
        );
      } else {
        SetPlayerAllianceStateBJ(
          ConvertedPlayer(i)!,
          ConvertedPlayer(n)!,
          bj_ALLIANCE_UNALLIED,
        );
      }

      n = n + 1;
    }

    if (udg_positionOn) {
      udg_startLocation[i] = udg_startLocation[i + 24];
    } else {
      udg_positionOn = false;
    }

    if (udg_AFK[i] === 4) {
      udg_AFK[i] = 3;
    } else if (udg_AFK[i] === 2 || udg_AFK[i] === 1) {
      udg_AFK[i] = 0;
    }

    if (udg_viewOn === false && udg_view[i] == null) {
      udg_view[i] = CreateFogModifierRectBJ(
        true,
        ConvertedPlayer(i)!,
        FOG_OF_WAR_VISIBLE,
        GetPlayableMapRect()!,
      )!;
    }

    i = i + 1;
  }

  TriggerExecute(gg_trg_createLists);
  DisableTrigger(gg_trg_sheepSwitch);
  DisableTrigger(gg_trg_sheepVamp);
  DisableTrigger(gg_trg_increaseGoldSheep);
  DisableTrigger(gg_trg_increaseGoldWolf);
  DisableTrigger(gg_trg_dummyWisps);
  DisableTrigger(gg_trg_attack);
  DisableTrigger(gg_trg_stop);
  DisableTrigger(gg_trg_mass);
  DisableTrigger(gg_trg_reset);
  DisableTrigger(gg_trg_owner);
  DisableTrigger(gg_trg_speed);

  EnumItemsInRect(GetEntireMapRect()!, null, removeEnumItem);

  i = 1;
  while (true) {
    if (i > bj_MAX_PLAYERS) break;
    p = ConvertedPlayer(i)!;
    DestroyLeaderboardBJ(PlayerGetLeaderboardBJ(p)!);
    PauseTimer(udg_sheepTimer[i]);
    SetPlayerStateBJ(p, PLAYER_STATE_RESOURCE_GOLD, 0);
    SetPlayerStateBJ(p, PLAYER_STATE_RESOURCE_LUMBER, 0);
    resetEnumRoundStats(i);
    i = i + 1;
  }

  SavingFarms_resetSavings();

  TriggerExecute(gg_trg_setupLeaderboard);

  EnableTrigger(gg_trg_createTimer);
  StartTimerBJ(udg_wolfTimer, false, 18.01);
  PauseTimer(udg_wolfTimer);

  TimerDialogDisplayBJ(false, udg_createTimerWindow);
  TimerDialogDisplayBJ(false, udg_mapSizeChangeTimerWindow);
  TimerDialogDisplayBJ(false, udg_wolfTimerWindow);
  TimerDialogDisplayBJ(false, udg_TimerWindow);
  TimerDialogDisplayBJ(false, udg_massTimerWindow);

  ForForce(udg_Spirit, moveEnumPlayerFromSpiritToSheep);
  ForForce(GetPlayersAll()!, destroyEnumPlayerView);

  if (
    udg_versus === 1 && udg_versusOff === false &&
    udg_someVersusBoolean === false
  ) {
    udg_versus = 2;
    udg_Teams = TEAMS_LOCK;
    ForceClear(udg_Sheep);
    ForceClear(udg_Wolf);
    ForceClear(udg_Spirit);
    TriggerExecute(gg_trg_versusCountDown);
  } else if (
    udg_versus === 2 && udg_versusOff === false &&
    udg_someVersusBoolean === false
  ) {
    udg_time = 0;
    udg_versus = 0;

    s = formatTime(udg_gameTime[1]);
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      60,
      "                              |cff00aeefTeam 1 lasted " + s,
    );

    s = formatTime(udg_gameTime[2]);
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      60,
      "                              |cffed1c24Team 2 lasted " + s,
    );

    if (udg_gameTime[1] > udg_gameTime[2]) {
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        60,
        "                              |cff00aeefTeam 1 wins!",
      );
      ForForce(udg_Wolf, Update_Versus_Wins);
    } else if (udg_gameTime[2] > udg_gameTime[1]) {
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        60,
        "                              |cffed1c24Team 2 wins!",
      );
      ForForce(udg_Sheep, Update_Versus_Wins);
    } else {
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        60,
        "                              |cffed1c24Tie game!",
      );
    }

    DisplayTimedTextToForce(
      GetPlayersAll()!,
      60,
      `Join our Discord |CFF00AEEFhttps://dsc.gg/sheeptag|r for more Sheep Tag!

See |cff00aeefGame Info|r (|cffed1c24F9|r) for commands, Hall of Fame, and more information.

New? Type |CFF00AEEF-smart|r.`,
    );
    startRoundToggledTriggers();
  } else {
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      60,
      `Join our Discord |CFF00AEEFhttps://dsc.gg/sheeptag|r for more Sheep Tag!

See |cff00aeefGame Info|r (|cffed1c24F9|r) for commands, Hall of Fame, and more information.

New? Type |CFF00AEEF-smart|r.`,
    );
    EnableTrigger(gg_trg_position);
    startRoundToggledTriggers();
  }

  TriggerSleepAction(0);

  if (udg_versus === 0) {
    u = CreateUnit(
      udg_Custom,
      hostFarm,
      GetRectCenterX(wolfSpawn),
      GetRectCenterY(wolfSpawn),
      270,
    )!;
    SelectUnitForPlayerSingle(u, udg_Custom);
    ForceUICancelBJ(udg_Custom);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_startRound: () => void;
}
InitTrig_startRound = (): void => {
  gg_trg_startRound = CreateTrigger();
  TriggerAddAction(gg_trg_startRound, Trig_startRound_Actions);
};
