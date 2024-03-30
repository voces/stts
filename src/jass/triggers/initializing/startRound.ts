import { disableIncome, resetBankedGold } from "functions/farms/savingFarms";
import { stopRuneTimers } from "functions/runes";
import { switchSheepTimers } from "modes/switch/switch";
import { terrain } from "settings/terrain";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { setTimeout, Timeout } from "util/setTimeout";

let hostFarmTimeout: Timeout | undefined = undefined;

export const cancelHostFarmSpawn = () => {
  if (hostFarmTimeout) hostFarmTimeout.cancel();
};

const reviveEnumDestructable = () => {
  DestructableRestoreLife(
    GetEnumDestructable()!,
    GetDestructableMaxLife(GetEnumDestructable()!),
    true,
  );
};

const resetEnumRoundStats = (i: number): void => {
  udg_apr[i] = 0;
  udg_switch[i] = 0;
  udg_kills[i] = 0;
  udg_farmCount[i] = 0;
  udg_saves[i] = 0;

  if (udg_AFKOn[i] === 1) udg_AFKOn[i] = 2;
  else if (udg_AFKOn[i] === 2) udg_AFKOn[i] = 0;
};

const destroyEnumPlayerView = () => {
  const i = GetConvertedPlayerId(GetEnumPlayer()!);
  if (udg_view[i]) DestroyFogModifier(udg_view[i]!);
  udg_view[i] = undefined;
};

const removeDraft = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft);
};

const Update_Versus_Wins = () => {
  udg_vwins[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_vwins[GetConvertedPlayerId(GetEnumPlayer()!)] + 1;
};

const startRoundToggledTriggers = () => {
  EnableTrigger(gg_trg_gold);
  EnableTrigger(gg_trg_createSheep);
  EnableTrigger(gg_trg_pick);
  EnableTrigger(gg_trg_pickwolf);
  EnableTrigger(gg_trg_end);
  EnableTrigger(gg_trg_view);
  EnableTrigger(gg_trg_fair);
  EnableTrigger(gg_trg_start);
  EnableTrigger(gg_trg_smart);
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

const pauseTimers = () => {
  PauseTimer(udg_Timer);
  PauseTimer(udg_wolfTimer);
  PauseTimer(udg_massTimer);
  PauseTimer(udg_mapSizeChangeTimer);
  stopRuneTimers();
  PauseTimer(createSheepTimer);
};

const clearBlight = () => {
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Bot_1);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Left_1);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Right_1);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Top_1);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Bot_2);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Left_2);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Right_2);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Top_2);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Bot_3);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Left_3);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Right_3);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Top_3);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Bot_4);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Left_4);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Right_4);
  SetBlightRectBJ(false, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Top_4);
};

const resetRoundStats = () => {
  udg_numPick = 0;
  udg_numWolf = 0;
  udg_numSheep = 0;
  udg_Teams = TEAMS_OPEN;
  udg_captainTurn = 0;
  udg_gameStarted = false;
  udg_dummyWisps = 0;
  udg_wispPoints = 0;
  udg_blightCounter = 0;
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

const Trig_startRound_Actions = () => {
  let p: player;

  perfectRound = false;
  pauseTimers();
  DestroyMultiboardBJ(GetLastCreatedMultiboard()!);
  EnumDestructablesInRectAll(GetPlayableMapRect()!, reviveEnumDestructable);
  clearBlight();
  const init = udg_Teams === TEAMS_INIT;
  resetRoundStats();
  ForForce(udg_Draft, removeDraft);

  if (TimerGetElapsed(udg_Timer) >= 60 && udg_gameStarted) TriggerExecute(gg_trg_setafk);

  // Unstuck
  ForceUICancel();

  removeAllUnits();

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    switchSheepTimers[i].start(0.01, false, () => {}); // clear elapsed
    DestroyLeaderboardBJ(PlayerGetLeaderboardBJ(Player(i)!)!);
    udg_switch[i + 1] = 0;

    for (let n = 0; n < bj_MAX_PLAYERS; n++) {
      SetPlayerAllianceStateBJ(
        Player(i)!,
        Player(n)!,
        udg_sheepLastGame[i + 1] === udg_sheepLastGame[n + 1] ? bj_ALLIANCE_ALLIED_VISION : bj_ALLIANCE_UNALLIED,
      );
    }

    if (udg_AFK[i + 1] === AFK_AFK_DURING_ROUND) udg_AFK[i + 1] = AFK_AFK;
    else if (udg_AFK[i + 1] === AFK_RETURNED_DURING_ROUND || udg_AFK[i + 1] === AFK_PLAYING_PICK) {
      udg_AFK[i + 1] = AFK_PLAYING;
    }

    if (udg_viewOn === false && !udg_view[i + 1]) {
      udg_view[i + 1] = CreateFogModifierRectBJ(true, Player(i)!, FOG_OF_WAR_VISIBLE, GetPlayableMapRect()!);
    }
  }

  TriggerExecute(gg_trg_createLists);
  DisableTrigger(gg_trg_sheepSwitch);
  DisableTrigger(gg_trg_sheepVamp);
  disableIncome();
  DisableTrigger(gg_trg_dummyWisps);
  DisableTrigger(gg_trg_attack);
  DisableTrigger(gg_trg_stop);
  DisableTrigger(gg_trg_mass);
  DisableTrigger(gg_trg_reset);
  DisableTrigger(gg_trg_owner);
  DisableTrigger(gg_trg_speed);

  EnumItemsInRect(GetEntireMapRect()!, Filter(() => true), () => RemoveItem(GetEnumItem()!));
  EnumDestructablesInRect(
    GetEntireMapRect()!,
    Filter(() => true),
    () => DestructableRestoreLife(GetEnumDestructable()!, GetDestructableMaxLife(GetEnumDestructable()!), true),
  );

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    p = Player(i)!;
    DestroyLeaderboardBJ(PlayerGetLeaderboardBJ(p)!);
    PauseTimer(udg_sheepTimer[i + 1]);
    SetPlayerStateBJ(p, PLAYER_STATE_RESOURCE_GOLD, 0);
    SetPlayerStateBJ(p, PLAYER_STATE_RESOURCE_LUMBER, 0);
    resetEnumRoundStats(i + 1);
  }

  resetBankedGold();

  TriggerExecute(gg_trg_setupLeaderboard);

  EnableTrigger(gg_trg_createTimer);
  TimerStart(udg_wolfTimer, 18.01, false, null);
  PauseTimer(udg_wolfTimer);

  TimerDialogDisplayBJ(false, udg_createTimerWindow);
  TimerDialogDisplayBJ(false, udg_mapSizeChangeTimerWindow);
  TimerDialogDisplayBJ(false, udg_wolfTimerWindow);
  TimerDialogDisplayBJ(false, udg_TimerWindow);
  TimerDialogDisplayBJ(false, udg_massTimerWindow);

  ForForce(udg_Spirit, moveEnumPlayerFromSpiritToSheep);
  ForForce(GetPlayersAll()!, destroyEnumPlayerView);

  if (udg_versus === 1 && udg_versusOff === false && udg_someVersusBoolean === false) {
    udg_versus = 2;
    udg_Teams = TEAMS_LOCK_IE_PLAYING;
    ForceClear(udg_Sheep);
    ForceClear(udg_Wolf);
    ForceClear(udg_Spirit);
    TriggerExecute(gg_trg_versusCountDown);
  } else if (udg_versus === 2 && udg_versusOff === false && udg_someVersusBoolean === false) {
    udg_time = 0;
    udg_versus = 0;

    displayTimedTextToAll("                              |cff00aeefTeam 1 lasted " + formatTime(udg_gameTime[1]), 60);
    displayTimedTextToAll("                              |cffed1c24Team 2 lasted " + formatTime(udg_gameTime[2]), 60);

    if (udg_gameTime[1] > udg_gameTime[2]) {
      displayTimedTextToAll("                              |cff00aeefTeam 1 wins!", 60);
      ForForce(udg_Wolf, Update_Versus_Wins);
    } else if (udg_gameTime[2] > udg_gameTime[1]) {
      displayTimedTextToAll("                              |cffed1c24Team 2 wins!", 60);
      ForForce(udg_Sheep, Update_Versus_Wins);
    } else displayTimedTextToAll("                              |cffed1c24Tie game!", 60);

    startRoundToggledTriggers();
  } else {
    if (init) {
      displayTimedTextToAll(
        `Join our Discord |CFF00AEEFhttps://dsc.gg/sheeptag|r for more Sheep Tag!

See |cff00aeefGame Info|r (|cffed1c24F9|r) for commands, Hall of Fame, and more information.

New? Type |CFF00AEEF-smart|r.`,
        60,
      );
    }
    EnableTrigger(gg_trg_position);
    startRoundToggledTriggers();
  }

  TriggerSleepAction(0);

  if (udg_versus === 0) {
    hostFarmTimeout = setTimeout(0.25, () => {
      const u = CreateUnit(udg_Custom, hostFarmType, GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf), 270)!;
      SelectUnitForPlayerSingle(u, udg_Custom);
      ForceUICancelBJ(udg_Custom);
    });
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_startRound: () => void;
}
InitTrig_startRound = () => {
  gg_trg_startRound = CreateTrigger();
  TriggerAddAction(gg_trg_startRound, Trig_startRound_Actions);
};
