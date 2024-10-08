import { president, settings, spawnSetting, terrain } from "settings/settings";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { clearForces } from "util/clearForces";
import { spawns } from "settings/spawns";
import { createCritter } from "misc/critter";
import { ABILITY_TYPE_ID_RESET_START_POSITION, UNIT_TYPE_ID_START_POSITION } from "constants";
import { switchSheepTimers } from "modes/switch/switch";
import { startUpdatingLeaderboard } from "modes/switch/updateLeaderboard";
import { enableIncome } from "functions/farms/savingFarms";
import { ForceEx } from "handles/ForceEx";
import { applyPresidentBuff } from "modes/president";
import { triggerOnRoundStart } from "util/onRoundStart";
import { hideIntermission } from "ui/api";

let firstRound = true;

const setTeamOneSheep = () => {
  if (GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING) {
    if (GetConvertedPlayerId(GetEnumPlayer()!) < 13) ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    else ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  }
};

const Trig_createSheep_sheepActionsA = () => {
  const enumPlayerId = GetConvertedPlayerId(GetEnumPlayer()!);
  let i = 1;
  let p: player;

  if (!udg_switchOn && !vampOn && !udg_practiceOn) {
    udg_sheepCount[enumPlayerId] = udg_sheepCount[enumPlayerId] + 1;
    udg_sheepLastGame[enumPlayerId] = true;
    while (true) {
      if (i > bj_MAX_PLAYERS) break;
      if (IsPlayerInForce(ConvertedPlayer(i)!, udg_Sheep)) {
        udg_accumPartner[(enumPlayerId - 1) * 24 + i] = udg_accumPartner[(enumPlayerId - 1) * 24 + i] + 1;
      }
      i = i + 1;
    }
  }

  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    p = ConvertedPlayer(i)!;
    if (IsPlayerInForce(p, udg_Sheep) && udg_AFK[i] === AFK_PLAYING && !udg_practiceOn) {
      if (
        IsPlayerInForce(p, udg_Sheep) &&
        GetPlayerController(p) === MAP_CONTROL_USER &&
        (udg_shareOn && udg_autocontrol[GetPlayerId(GetEnumPlayer()!)] &&
            !(pub[i - 1]) && !udg_practiceOn && !udg_switchOn &&
            !(noAutoControl[i - 1]) ||
          GetPlayerController(GetEnumPlayer()!) === MAP_CONTROL_COMPUTER)
      ) SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_ALLIED_ADVUNITS);
      else SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_ALLIED_VISION);
    } else SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_UNALLIED);
  }

  createSheepSpawnIndex = terrain.spawnType === "playerColor" ? enumPlayerId : createSheepSpawnIndex + 1;
  const spawn = {
    x: GetRectCenterX(udg_startLocation[createSheepSpawnIndex]),
    y: GetRectCenterY(udg_startLocation[createSheepSpawnIndex]),
  };
  if (spawnSetting.mode === "random") {
    const xOuterMax = GetRectMaxX(terrain.spawnBounds);
    const yOuterMax = GetRectMaxY(terrain.spawnBounds);
    const xOuterMin = GetRectMinX(terrain.spawnBounds);
    const yOuterMin = GetRectMinY(terrain.spawnBounds);
    const xInnerMin = GetRectMinX(terrain.wisp) - 128;
    const xInnerMax = GetRectMaxX(terrain.wisp) + 160;
    const yInnerMin = GetRectMinY(terrain.wisp) - 128;
    const yInnerMax = GetRectMaxY(terrain.wisp) + 160;
    spawn.x = GetRandomReal(xOuterMin, xOuterMax);
    spawn.y = GetRandomReal(yOuterMin, yOuterMax);
    // Try 100 times before giving up
    for (
      let i = 0;
      i < 100 && spawn.x < xInnerMax && spawn.x > xInnerMin && spawn.y < yInnerMax && spawn.y > yInnerMin;
      i++
    ) {
      spawn.x = GetRandomReal(xOuterMin, xOuterMax);
      spawn.y = GetRandomReal(yOuterMin, yOuterMax);
    }
  } else if (spawnSetting.mode === "free") {
    const prev = spawns.get(GetEnumPlayer()!)!;
    spawn.x = prev.x;
    spawn.y = prev.y;
  }
  spawns.set(GetEnumPlayer()!, spawn);

  if (udg_sheepZoom[enumPlayerId] > 0) {
    SetCameraFieldForPlayer(GetEnumPlayer()!, CAMERA_FIELD_TARGET_DISTANCE, udg_sheepZoom[enumPlayerId], 0);
  }
  PanCameraToTimedForPlayer(GetEnumPlayer()!, spawn.x, spawn.y, 0);

  if (!udg_practiceOn) {
    const u = CreateUnit(GetEnumPlayer()!, UNIT_TYPE_ID_START_POSITION, spawn.x, spawn.y, 270)!;
    SelectUnitForPlayerSingle(u, GetEnumPlayer()!);
    if (spawnSetting.mode !== "free") UnitRemoveAbility(u, FourCC("Amov"));
    else UnitAddAbility(u, ABILITY_TYPE_ID_RESET_START_POSITION);
    if (IsPlayerInForce(GetLocalPlayer(), udg_Wolf)) SetUnitVertexColor(u, 255, 255, 255, 0);
  }
};

const Trig_createSheep_wolfActionsA = () => {
  const enumPlayerId = GetConvertedPlayerId(GetEnumPlayer()!);
  let i = 1;
  let p: player;

  if (!udg_switchOn && !vampOn && !udg_practiceOn) udg_sheepLastGame[enumPlayerId] = false;

  while (true) {
    if (i > bj_MAX_PLAYERS) break;
    p = ConvertedPlayer(i)!;
    if (
      GetPlayerController(GetEnumPlayer()!) === MAP_CONTROL_COMPUTER &&
      IsPlayerInForce(p, udg_Wolf) &&
      GetPlayerController(p) === MAP_CONTROL_USER
    ) SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_ALLIED_ADVUNITS);
    else if (udg_practiceOn || udg_AFK[i] === AFK_AFK || IsPlayerInForce(p, udg_Wolf)) {
      SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_ALLIED_VISION);
    } else SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_UNALLIED);
    i = i + 1;
  }

  if (!udg_practiceOn && udg_wolfZoom[enumPlayerId] > 0) {
    SetCameraFieldForPlayer(GetEnumPlayer()!, CAMERA_FIELD_TARGET_DISTANCE, udg_wolfZoom[enumPlayerId], 0);
  }
};

const Trig_createSheep_addToSheepAndWolf = () => {
  const p = GetEnumPlayer()!;
  if (GetPlayerSlotState(p) === PLAYER_SLOT_STATE_PLAYING && udg_AFK[GetConvertedPlayerId(p)] === AFK_PLAYING) {
    ForceAddPlayerSimple(p, udg_Sheep);
    ForceAddPlayerSimple(p, udg_Wolf);
  }
};

const Trig_createSheep_sheepActionsB = () => {
  let i = 1;
  const enumPlayerId = GetConvertedPlayerId(GetEnumPlayer()!);

  SetPlayerState(GetEnumPlayer()!, PLAYER_STATE_RESOURCE_GOLD, udg_practiceOn ? 1000000 : udg_sheepGold);

  if (udg_AFK[enumPlayerId] === AFK_AFK_DURING_ROUND) {
    while (true) {
      if (i > udg_lastPlayer) break;
      SetPlayerAllianceStateBJ(GetEnumPlayer()!, ConvertedPlayer(i)!, bj_ALLIANCE_ALLIED_ADVUNITS);
      i = i + 1;
    }
  }

  udg_sheepLastGame[enumPlayerId] = true;

  const spawn = spawns.get(GetEnumPlayer()!) ?? { x: 0, y: 0 };

  PanCameraToTimedForPlayer(GetEnumPlayer()!, spawn.x, spawn.y, 0);
  const u = CreateUnit(GetEnumPlayer()!, sheepType, spawn.x, spawn.y, 270)!;
  if (
    president.enabled &&
    president.president?.id === GetPlayerId(GetEnumPlayer()!)
  ) applyPresidentBuff(u);

  SelectUnitForPlayerSingle(u, GetEnumPlayer()!);
  ForceUICancelBJ(GetEnumPlayer()!);
  udg_unit[enumPlayerId] = u;

  if (udg_switchOn || udg_practiceOn) {
    UnitRemoveAbility(u, shareControlAbility);
    UnitRemoveAbility(u, giveAlliesGoldSheepAbility);
    if (udg_practiceOn) {
      UnitRemoveAbility(u, locateAlliesAbility);
      UnitAddAbility(u, blinkAbility);
      UnitAddAbility(u, sheepInventoryAbility);
      UnitAddItemById(u, FourCC("I00Q"));
      if (!udg_disable[enumPlayerId]) UnitAddAbility(u, destroyAllFarms);

      CreateUnit(GetEnumPlayer()!, wispType, RandomX(terrain.wisp), RandomY(terrain.wisp), 270);
    } else {
      UnitAddAbility(u, destroyAllFarms);
      switchSheepTimers[GetPlayerId(GetEnumPlayer()!)].resume();
    }
  } else if (!udg_shareOn) UnitRemoveAbility(u, shareControlAbility);

  if (udg_sheepZoom[enumPlayerId] > 0) {
    SetCameraFieldForPlayer(GetEnumPlayer()!, CAMERA_FIELD_TARGET_DISTANCE, udg_sheepZoom[enumPlayerId], 0);
  }
};

const Trig_createSheep_wolfActionsB = () => {
  const enumPlayerId = GetConvertedPlayerId(GetEnumPlayer()!);

  SetPlayerState(GetEnumPlayer()!, PLAYER_STATE_RESOURCE_GOLD, udg_practiceOn ? 1000000 : udg_wolfGold);

  udg_sheepLastGame[enumPlayerId] = false;

  if (!udg_practiceOn && udg_wolfZoom[enumPlayerId] > 0) {
    SetCameraFieldForPlayer(GetEnumPlayer()!, CAMERA_FIELD_TARGET_DISTANCE, udg_wolfZoom[enumPlayerId], 0);
  }
};

const Trig_createSheep_disableTrigs = () => {
  DisableTrigger(GetTriggeringTrigger()!);
  DisableTrigger(gg_trg_switch);
  DisableTrigger(gg_trg_vamp);
  DisableTrigger(gg_trg_reverse);
  DisableTrigger(gg_trg_time);
  DisableTrigger(gg_trg_gold);
  DisableTrigger(gg_trg_smart);
  DisableTrigger(gg_trg_captains);
  DisableTrigger(gg_trg_versus);
  DisableTrigger(gg_trg_pick);
  DisableTrigger(gg_trg_start);
  DisableTrigger(gg_trg_view);
  DisableTrigger(gg_trg_fair);
  DisableTrigger(gg_trg_end);
  DisableTrigger(gg_trg_controloff);
  DisableTrigger(gg_trg_continue);
  DisableTrigger(gg_trg_picksheep);
  DisableTrigger(gg_trg_pickwolf);
  DisableTrigger(gg_trg_createTimer);
  DisableTrigger(gg_trg_practice);
  DisableTrigger(gg_trg_mapShrink);
  DisableTrigger(gg_trg_mapExpand);
  DisableTrigger(gg_trg_Anonymous);

  // President uses same triggers as survival
  const mode = udg_switchOn ? "switch" : vampOn ? "vamp" : "survival";

  if (mode === "switch") {
    EnableTrigger(gg_trg_dummyWisps);
    EnableTrigger(gg_trg_sheepSwitch);
  } else {
    DisableTrigger(gg_trg_dummyWisps);
    DisableTrigger(gg_trg_sheepSwitch);
  }

  if (mode === "vamp") EnableTrigger(gg_trg_sheepVamp);
  else DisableTrigger(gg_trg_sheepVamp);

  if (mode === "survival") {
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
  } else {
    DisableTrigger(gg_trg_sheepDies);
    DisableTrigger(gg_trg_spiritDies);
  }

  if (udg_practiceOn) {
    EnableTrigger(gg_trg_attack);
    EnableTrigger(gg_trg_stop);
    EnableTrigger(gg_trg_mass);
    EnableTrigger(gg_trg_owner);
    EnableTrigger(gg_trg_speed);
  } else {
    DisableTrigger(gg_trg_attack);
    DisableTrigger(gg_trg_stop);
    DisableTrigger(gg_trg_mass);
    DisableTrigger(gg_trg_owner);
    DisableTrigger(gg_trg_speed);
  }
};

const Trig_createSheep_Actions_part4 = () => {
  removeAllUnits(false);

  if (
    CountPlayersInForceBJ(udg_Sheep) === 0 ||
    CountPlayersInForceBJ(udg_Wolf) === 0
  ) {
    TriggerExecute(gg_trg_cancel);
    return;
  }

  if (!udg_practiceOn) ClearTextMessagesBJ(udg_Sheep);

  if (!udg_switchOn && !vampOn && !udg_practiceOn) defaultTime();

  createSheepSpawnIndex = 0;
  ForForce(udg_Sheep, Trig_createSheep_sheepActionsB);
  ForForce(udg_Wolf, Trig_createSheep_wolfActionsB);

  if (udg_practiceOn || MapPlayerEx.fromLocal().isSheep) StartSound(gg_snd_SheepWhat1);

  TimerStart(udg_Timer, udg_practiceOn ? 120 * 60 : udg_time, false, null);

  if (udg_switchOn || udg_practiceOn) TriggerExecute(gg_trg_createWolves);
  else {
    PauseTimerBJ(false, udg_wolfTimer);
    TimerDialogDisplayBJ(true, udg_wolfTimerWindow);
    PauseTimerBJ(true, udg_Timer);
  }

  if (udg_mapExpand) {
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Bot_1);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Left_1);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Right_1);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Top_1);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Bot_2);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Left_2);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Right_2);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Top_2);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Bot_3);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Left_3);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Right_3);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Top_3);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Bot_4);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Left_4);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Right_4);
    SetBlightRectBJ(true, Player(PLAYER_NEUTRAL_AGGRESSIVE)!, gg_rct_Blight_Top_4);
  }

  TimerDialogDisplayBJ(false, udg_createTimerWindow);
  TimerStart(udg_Createtimer, 90, false, null);
  PauseTimerBJ(true, udg_Createtimer);

  enableIncome();
  triggerOnRoundStart();
  TriggerExecute(gg_trg_setupLeaderboard);

  if (!udg_practiceOn) {
    if (CountPlayersInForceBJ(udg_Wolf) === 0) TriggerExecute(gg_trg_sheepWin);
    if (CountPlayersInForceBJ(udg_Sheep) === 0) TriggerExecute(gg_trg_wolvesWin);
  }

  if (udg_switchOn && udg_wispPoints === 0) startUpdatingLeaderboard();
};

const Trig_createSheep_Actions_part3 = () => {
  StartSound(gg_snd_BattleNetTick);
  displayTimedTextToAll("|cffffcc00Game starting in 1...", 1);
  TimerStart(createSheepTimer, 1, false, Trig_createSheep_Actions_part4);
};

const Trig_createSheep_Actions_part2 = () => {
  StartSound(gg_snd_BattleNetTick);
  displayTimedTextToAll("|cffffcc00Game starting in 2...", 1);
  TimerStart(createSheepTimer, 1, false, Trig_createSheep_Actions_part3);
};

const Trig_createSheep_Actions = () => {
  udg_gameStarted = true;
  PauseTimerBJ(true, udg_Createtimer);

  Trig_createSheep_disableTrigs();
  removeAllUnits();

  if (perfectRoundCanceled) {
    perfectRoundCanceled = false;
    perfectSmartIndex = perfectSmartIndex + 1;
  }

  udg_firstBlood = udg_switchOn;

  if (udg_versusOff) {
    udg_versus = 0;
    udg_versusOff = false;
  }

  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    if (udg_AFK[GetForLoopIndexA()] === AFK_PLAYING_PICK) udg_AFK[GetForLoopIndexA()] = AFK_PLAYING;
    for (let n = 1; n <= bj_MAX_PLAYERS; n++) {
      SetPlayerAllianceStateBJ(ConvertedPlayer(i)!, ConvertedPlayer(n)!, bj_ALLIANCE_UNALLIED);
    }
  }

  ForForce(udg_Spirit, moveEnumPlayerFromSpiritToSheep);

  if (!udg_practiceOn) {
    if (CountPlayersInForceBJ(udg_Wolf) === 0) {
      TriggerExecute(gg_trg_sheepWin);
      return;
    }
    if (CountPlayersInForceBJ(udg_Sheep) === 0) {
      TriggerExecute(gg_trg_wolvesWin);
      return;
    }
  }

  for (const [rect, type] of terrain.shops) {
    CreateUnit(Player(PLAYER_NEUTRAL_PASSIVE)!, type, GetRectCenterX(rect), GetRectCenterY(rect), 270);
  }

  if (terrain.name === "Classic") {
    createCritter();
    // CreateUnit(
    //   Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
    //   FourCC("o001"),
    //   GetRectCenterX(gg_rct_snowman),
    //   GetRectCenterY(gg_rct_snowman),
    //   270,
    // );
  }

  if (udg_Teams === TEAMS_OPEN || udg_Teams === TEAMS_PICK) udg_Teams = TEAMS_INIT;

  if (firstRound) {
    firstRound = false;
    ClearTextMessages();
  } else ClearTextMessagesBJ(udg_Sheep);

  if (!udg_round2 && udg_Teams === TEAMS_INIT) {
    clearForces();
    ForForce(GetPlayersAll()!, setTeamOneSheep);
  }

  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  udg_round2 = true;
  createSheepSpawnIndex = 0;

  ForForce(udg_Sheep, Trig_createSheep_sheepActionsA);
  ForForce(udg_Wolf, Trig_createSheep_wolfActionsA);

  if (udg_switchOn) {
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      switchSheepTimers[i].start(udg_time, false, () => {});
      switchSheepTimers[i].pause();
    }
  }

  TriggerExecute(gg_trg_setupLeaderboard);
  LeaderboardDisplay(PlayerGetLeaderboard(GetLocalPlayer())!, true);

  if (president.enabled) {
    if (udg_versus === 1) president.president = MapPlayerEx.fromHandle(udg_captains[1]);
    else if (udg_versus === 2) president.president = MapPlayerEx.fromHandle(udg_captains[3]);
    else {
      const all = ForceEx.sheep.toArray();
      const nonPubs = all.filter((p) => !p.isPub);
      if (nonPubs.length > 0) president.president = nonPubs[Math.floor(nonPubs.length * Math.random())];
      else president.president = all[Math.floor(all.length * Math.random())];
    }

    ForForce(udg_Sheep, () => {
      const p = MapPlayerEx.fromEnum()!;
      p.handicap = p === president.president ? 1 : president.handicap;
    });

    ForForce(udg_Wolf, () => MapPlayerEx.fromEnum()!.handicap = 1);
  }

  settings.teamConfiguration = { sheep: ForceEx.sheep.size(), wolves: ForceEx.wolves.size() };
  hideIntermission();

  if (udg_practiceOn) {
    clearForces();
    ForForce(GetPlayersAll()!, Trig_createSheep_addToSheepAndWolf);
    displayTimedTextToAll("|cff00aeefWelcome to practice mode!", 5);
    displayTimedTextToAll("Commands: |cffed1c24-a -s -owner -disable -mass -speed 1-5", 5);
    Trig_createSheep_Actions_part4();
  } else {
    DisplayTimedTextToForce(udg_Sheep, 4, "|cff00aeefYou are |cffed1c24Sheep|cff00aeef this round.");
    DisplayTimedTextToForce(udg_Wolf, 4, "|cff00aeefYou are |cffed1c24Wolf|cff00aeef this round.");

    StartSound(gg_snd_BattleNetTick);
    displayTimedTextToAll("|cffffcc00Game starting in 3...", 1);
    TimerStart(createSheepTimer, 1, false, Trig_createSheep_Actions_part2);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_createSheep: () => void;
}
InitTrig_createSheep = () => {
  gg_trg_createSheep = CreateTrigger();
  TriggerAddAction(gg_trg_createSheep, Trig_createSheep_Actions);
  createSheepTimer = CreateTimer();
};
