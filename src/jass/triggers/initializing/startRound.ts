import { disableIncome, resetBankedGold } from "functions/farms/savingFarms";
import { stopRuneTimers } from "functions/runes";
import { ForceEx } from "handles/ForceEx";
import { deathOrder, MapPlayerEx } from "handles/MapPlayerEx";
import { restoreSettings } from "modes/practice/mode";
import { switchSheepTimers } from "modes/switch/switch";
import { president } from "settings/settings";
import { delayHotkeyButtons, showIntermission } from "ui/api";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { triggerRoundInitHooks } from "util/gameHooks";

const reviveEnumDestructable = () => {
  DestructableRestoreLife(
    GetEnumDestructable()!,
    GetDestructableMaxLife(GetEnumDestructable()!),
    true,
  );
};

const resetEnumRoundStats = (i: number): void => {
  udg_switch[i] = 0;
  udg_kills[i] = 0;
  udg_farmCount[i] = 0;
  udg_saves[i] = 0;
};

const removeDraft = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft);
};

const Update_Versus_Wins = () => {
  udg_vwins[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_vwins[GetConvertedPlayerId(GetEnumPlayer()!)] + 1;
};

const startRoundToggledTriggers = () => {
  EnableTrigger(gg_trg_gold);
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
  wolvesCreated = false;
  udg_blightCounter = 0;
  bj_forLoopAIndex = 0;
  lastSheepReceiver = null;
  lastWolfReceiver = null;
  if (udg_practiceOn) {
    udg_practiceOn = false;
    restoreSettings();
  }
  if (someoneLeft) {
    ForceEx.sheep.for((p) => p.cancel());
    ForceEx.wisps.for((p) => p.cancel());
  }
  someoneLeft = false;
  udg_pickIndex = 1;
  goldRaces = 0;
  deathOrder.deaths = 0;
};

const Trig_startRound_Actions = () => {
  let p: player;

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
    DestroyLeaderboardBJ(PlayerGetLeaderboard(Player(i)!)!);
    udg_switch[i + 1] = 0;
    const p = MapPlayerEx.fromIndex(i)!;
    p.diedThisRound = false;
    p.setState(PLAYER_STATE_GOLD_UPKEEP_RATE, 0);
    if (president.enabled) p.handicap = 1;

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
  }

  TriggerExecute(gg_trg_createLists);
  disableIncome();
  DisableTrigger(gg_trg_reset);

  EnumItemsInRect(GetEntireMapRect()!, Filter(() => true), () => RemoveItem(GetEnumItem()!));
  EnumDestructablesInRect(
    GetEntireMapRect()!,
    Filter(() => true),
    () => DestructableRestoreLife(GetEnumDestructable()!, GetDestructableMaxLife(GetEnumDestructable()!), true),
  );
  triggerRoundInitHooks();

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    p = Player(i)!;
    DestroyLeaderboardBJ(PlayerGetLeaderboard(p)!);
    PauseTimer(udg_sheepTimer[i + 1]);
    SetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD, 0);
    SetPlayerState(p, PLAYER_STATE_RESOURCE_LUMBER, 0);
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

  if (udg_versus === 1 && !udg_versusOff && !udg_someVersusBoolean) {
    udg_versus = 2;
    udg_Teams = TEAMS_LOCK_IE_PLAYING;
    ForceClear(udg_Sheep);
    ForceClear(udg_Wolf);
    ForceClear(udg_Spirit);
    TriggerExecute(gg_trg_versusCountDown);
  } else if (udg_versus === 2 && !udg_versusOff && !udg_someVersusBoolean) {
    udg_versus = 0;

    displayTimedTextToAll("|cff00aeefTeam 1 lasted " + formatTime(udg_gameTime[1]), 60);
    displayTimedTextToAll("|cffed1c24Team 2 lasted " + formatTime(udg_gameTime[2]), 60);

    if (udg_gameTime[1] > udg_gameTime[2]) {
      displayTimedTextToAll("|cff00aeefTeam 1 wins!", 60);
      ForForce(udg_Wolf, Update_Versus_Wins);
    } else if (udg_gameTime[2] > udg_gameTime[1]) {
      displayTimedTextToAll("|cffed1c24Team 2 wins!", 60);
      ForForce(udg_Sheep, Update_Versus_Wins);
    } else displayTimedTextToAll("|cffed1c24Tie game!", 60);

    startRoundToggledTriggers();
  } else {
    if (init) {
      for (let i = 0; i < bj_MAX_PLAYERS; i++) {
        const p = MapPlayerEx.fromIndex(i);
        if (!p?.isActiveHuman) continue;
        p.displayTimedText(`\nJoin our Discord |CFF00AEEFhttps://dsc.gg/sheeptag|r for more Sheep Tag!

See |cff00aeefGame Info|r (|cffed1c24F9|r) for commands, Hall of Fame, and more information.

${p.isHost ? "New? Type |CFF00AEEF-smart|r." : `Please wait until ${MapPlayerEx.host} starts the game.`}`);
      }
    }
    EnableTrigger(gg_trg_position);
    startRoundToggledTriggers();
  }

  TriggerSleepAction(0);

  if (udg_versus === 0 || udg_versusOff) {
    showIntermission();
    delayHotkeyButtons();
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
