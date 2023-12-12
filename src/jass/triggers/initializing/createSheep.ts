//===========================================================================
// Trigger: createSheep
//===========================================================================
// createSheep

import { MapPlayer, Unit } from "w3ts";
import { president } from "../../../modes/president";
import { withDummy } from "../../../util/withDummy";

const removeEnumFromSheep = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const removeEnumFromSpirit = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const removeEnumFromWolf = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const setTeamOneSheep = () => {
  if (GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING) {
    if (GetConvertedPlayerId(GetEnumPlayer()!) < 13) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_createSheep_sheepActionsA = () => {
  const enumPlayerId = GetConvertedPlayerId(GetEnumPlayer()!);
  let i = 1;
  let p: player;

  if (udg_switchOn === false && vampOn === false && udg_practiceOn === false) {
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

  i = 1;
  while (true) {
    if (i > bj_MAX_PLAYERS) break;
    p = ConvertedPlayer(i)!;
    if (
      IsPlayerInForce(p, udg_Sheep) || udg_AFK[i] === AFK_AFK || udg_practiceOn
    ) {
      if (
        IsPlayerInForce(p, udg_Sheep) &&
        ((udg_shareOn && udg_autocontrol[GetPlayerId(GetEnumPlayer()!)] &&
          !(pub[i - 1]) && !udg_practiceOn && !udg_switchOn &&
          !(noAutoControl[i - 1])) ||
          GetPlayerController(GetEnumPlayer()!) === MAP_CONTROL_COMPUTER)
      ) {
        SetPlayerAllianceStateBJ(
          GetEnumPlayer()!,
          p,
          bj_ALLIANCE_ALLIED_ADVUNITS,
        );
      } else {
        SetPlayerAllianceStateBJ(
          GetEnumPlayer()!,
          p,
          bj_ALLIANCE_ALLIED_VISION,
        );
      }
    } else {
      SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_UNALLIED);
    }
    i = i + 1;
  }

  if (spawnType === PLAYER_COLOR_BASED) {
    createSheepSpawnIndex = enumPlayerId;
  } else {
    createSheepSpawnIndex = createSheepSpawnIndex + 1;
  }

  if (udg_sheepZoom[enumPlayerId] > 0) {
    SetCameraFieldForPlayer(
      GetEnumPlayer()!,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_sheepZoom[enumPlayerId],
      0,
    );
  }
  PanCameraToTimedForPlayer(
    GetEnumPlayer()!,
    GetRectCenterX(udg_startLocation[createSheepSpawnIndex]),
    GetRectCenterY(udg_startLocation[createSheepSpawnIndex]),
    0,
  );
};

const Trig_createSheep_wolfActionsA = () => {
  const enumPlayerId = GetConvertedPlayerId(GetEnumPlayer()!);
  let i = 1;
  let p: player;

  if (udg_switchOn === false && vampOn === false && udg_practiceOn === false) {
    udg_sheepLastGame[enumPlayerId] = false;
  }

  while (true) {
    if (i > bj_MAX_PLAYERS) break;
    p = ConvertedPlayer(i)!;
    if (
      GetPlayerController(GetEnumPlayer()!) === MAP_CONTROL_COMPUTER &&
      IsPlayerInForce(p, udg_Wolf)
    ) {
      SetPlayerAllianceStateBJ(
        GetEnumPlayer()!,
        p,
        bj_ALLIANCE_ALLIED_ADVUNITS,
      );
    } else if (
      udg_practiceOn || udg_AFK[i] === AFK_AFK || IsPlayerInForce(p, udg_Wolf)
    ) {
      SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_ALLIED_VISION);
    } else {
      SetPlayerAllianceStateBJ(GetEnumPlayer()!, p, bj_ALLIANCE_UNALLIED);
    }
    i = i + 1;
  }

  if (udg_practiceOn === false && udg_wolfZoom[enumPlayerId] > 0) {
    SetCameraFieldForPlayer(
      GetEnumPlayer()!,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_wolfZoom[enumPlayerId],
      0,
    );
  }
};

const Trig_createSheep_addToSheepAndWolf = () => {
  const p = GetEnumPlayer()!;
  if (
    GetPlayerSlotState(p) === PLAYER_SLOT_STATE_PLAYING &&
    udg_AFK[GetConvertedPlayerId(p)] === AFK_PLAYING &&
    GetPlayerSlotState(p) !== PLAYER_SLOT_STATE_LEFT
  ) {
    ForceAddPlayerSimple(p, udg_Sheep);
    ForceAddPlayerSimple(p, udg_Wolf);
  }
};

const Trig_createSheep_sheepActionsB = () => {
  let i = 1;
  const enumPlayerId = GetConvertedPlayerId(GetEnumPlayer()!);

  SetPlayerStateBJ(
    GetEnumPlayer()!,
    PLAYER_STATE_RESOURCE_GOLD,
    udg_sheepGold,
  );

  if (udg_AFK[enumPlayerId] === AFK_AFK_DURING_ROUND) {
    while (true) {
      if (i > udg_lastPlayer) break;
      SetPlayerAllianceStateBJ(
        GetEnumPlayer()!,
        ConvertedPlayer(i)!,
        bj_ALLIANCE_ALLIED_ADVUNITS,
      );
      i = i + 1;
    }
  }

  udg_sheepLastGame[enumPlayerId] = true;

  if (spawnType === PLAYER_COLOR_BASED) {
    createSheepSpawnIndex = enumPlayerId;
  } else {
    createSheepSpawnIndex = createSheepSpawnIndex + 1;
  }
  if (udg_AFK[enumPlayerId] === AFK_PLAYING) {
    PanCameraToTimedForPlayer(
      GetEnumPlayer()!,
      GetRectCenterX(udg_startLocation[createSheepSpawnIndex]),
      GetRectCenterY(udg_startLocation[createSheepSpawnIndex]),
      0,
    );
  }

  const u = CreateUnit(
    GetEnumPlayer()!,
    sheepType,
    GetRectCenterX(udg_startLocation[createSheepSpawnIndex]),
    GetRectCenterY(udg_startLocation[createSheepSpawnIndex]),
    270,
  )!;
  if (
    president.enabled &&
    president.president.id === GetPlayerId(GetEnumPlayer()!)
  ) {
    withDummy(
      (dummy) => {
        dummy.addAbility(FourCC("A028"));
        dummy.issueTargetOrder("innerfire", Unit.fromHandle(u)!);
      },
      GetUnitX(u),
      GetUnitY(u),
      MapPlayer.fromEnum(),
    );
  }

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
      UnitAddItemByIdSwapped(FourCC("I00Q"), u);
      if (!udg_disable[enumPlayerId]) UnitAddAbility(u, destroyAllFarms);

      CreateUnit(
        GetEnumPlayer()!,
        wispType,
        RandomX(wispArea),
        RandomY(wispArea),
        270,
      );
    } else UnitAddAbility(u, destroyAllFarms);
  }

  if (udg_sheepZoom[enumPlayerId] > 0) {
    SetCameraFieldForPlayer(
      GetEnumPlayer()!,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_sheepZoom[enumPlayerId],
      0,
    );
  }
};

const Trig_createSheep_wolfActionsB = () => {
  const enumPlayerId = GetConvertedPlayerId(GetEnumPlayer()!);

  SetPlayerStateBJ(GetEnumPlayer()!, PLAYER_STATE_RESOURCE_GOLD, udg_wolfGold);

  udg_sheepLastGame[enumPlayerId] = false;

  if (!udg_practiceOn && udg_wolfZoom[enumPlayerId] > 0) {
    SetCameraFieldForPlayer(
      GetEnumPlayer()!,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_wolfZoom[enumPlayerId],
      0,
    );
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
};

const Trig_createSheep_Actions_part4 = () => {
  if (
    CountPlayersInForceBJ(udg_Sheep) === 0 ||
    CountPlayersInForceBJ(udg_Wolf) === 0
  ) {
    TriggerExecute(gg_trg_cancel);
    return;
  }

  ClearTextMessagesBJ(GetPlayersAll()!);

  if (udg_switchOn === false && vampOn === false && udg_practiceOn === false) {
    defaultTime();
  }

  createSheepSpawnIndex = 0;
  ForForce(udg_Sheep, Trig_createSheep_sheepActionsB);
  ForForce(udg_Wolf, Trig_createSheep_wolfActionsB);

  StartTimerBJ(udg_Timer, false, udg_time);

  if (udg_switchOn || udg_practiceOn) {
    TriggerExecute(gg_trg_createWolves);
  } else {
    PauseTimerBJ(false, udg_wolfTimer);
    TimerDialogDisplayBJ(true, udg_wolfTimerWindow);
    PauseTimerBJ(true, udg_Timer);
  }

  if (udg_mapExpand) {
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Bot_1,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Left_1,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Right_1,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Top_1,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Bot_2,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Left_2,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Right_2,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Top_2,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Bot_3,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Left_3,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Right_3,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Top_3,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Bot_4,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Left_4,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Right_4,
    );
    SetBlightRectBJ(
      true,
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      gg_rct_Blight_Top_4,
    );
  }

  TimerDialogDisplayBJ(false, udg_createTimerWindow);
  StartTimerBJ(udg_Createtimer, false, 90);
  PauseTimerBJ(true, udg_Createtimer);

  EnableTrigger(gg_trg_increaseGoldSheep);
  EnableTrigger(gg_trg_increaseGoldWolf);
  TriggerExecute(gg_trg_setupLeaderboard);

  if (udg_practiceOn === false) {
    if (CountPlayersInForceBJ(udg_Wolf) === 0) {
      TriggerExecute(gg_trg_sheepWin);
    }
    if (CountPlayersInForceBJ(udg_Sheep) === 0) {
      TriggerExecute(gg_trg_wolvesWin);
    }
  }
};

const Trig_createSheep_Actions_part3 = () => {
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    1,
    "                              |cffffcc00Game starting in 1...",
  );
  TimerStart(createSheepTimer, 1, false, Trig_createSheep_Actions_part4);
};

const Trig_createSheep_Actions_part2 = () => {
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    1,
    "                              |cffffcc00Game starting in 2...",
  );
  TimerStart(createSheepTimer, 1, false, Trig_createSheep_Actions_part3);
};

const Trig_createSheep_Actions = () => {
  let i: number;
  let n: number;

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

  i = 1;
  while (true) {
    if (i > bj_MAX_PLAYERS) break;
    if (udg_AFK[GetForLoopIndexA()] === AFK_PLAYING_PICK) {
      udg_AFK[GetForLoopIndexA()] = AFK_PLAYING;
    }
    n = 1;
    while (true) {
      if (n > bj_MAX_PLAYERS) break;
      SetPlayerAllianceStateBJ(
        ConvertedPlayer(i)!,
        ConvertedPlayer(n)!,
        bj_ALLIANCE_UNALLIED,
      );
      n = n + 1;
    }
    i = i + 1;
  }

  ForForce(udg_Spirit, moveEnumPlayerFromSpiritToSheep);

  if (udg_practiceOn === false) {
    if (CountPlayersInForceBJ(udg_Wolf) === 0) {
      TriggerExecute(gg_trg_sheepWin);
      return;
    }
    if (CountPlayersInForceBJ(udg_Sheep) === 0) {
      TriggerExecute(gg_trg_wolvesWin);
      return;
    }
  }

  i = shopStart;
  while (true) {
    if (i === shopEnd) break;
    CreateUnit(
      Player(25)!,
      shopTypes[i],
      GetRectCenterX(shopLocations[i]),
      GetRectCenterY(shopLocations[i]),
      270,
    );
    i = i + 1;
  }

  if (currentTerrain === 0) {
    Critter_createCritter();
    CreateUnit(
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      FourCC("o001"),
      GetRectCenterX(gg_rct_snowman),
      GetRectCenterY(gg_rct_snowman),
      270,
    );
  }

  if (udg_Teams === TEAMS_OPEN || udg_Teams === TEAMS_PICK) {
    udg_Teams = TEAMS_INIT;
  }

  ClearTextMessagesBJ(GetPlayersAll()!);

  if (udg_round2 === false && udg_Teams === TEAMS_INIT) {
    ForForce(udg_Sheep, removeEnumFromSheep);
    ForForce(udg_Spirit, removeEnumFromSpirit);
    ForForce(udg_Wolf, removeEnumFromWolf);
    ForForce(GetPlayersAll()!, setTeamOneSheep);
  }

  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  udg_round2 = true;
  createSheepSpawnIndex = 0;

  ForForce(udg_Sheep, Trig_createSheep_sheepActionsA);
  ForForce(udg_Wolf, Trig_createSheep_wolfActionsA);

  TriggerExecute(gg_trg_setupLeaderboard);
  LeaderboardDisplay(PlayerGetLeaderboard(GetLocalPlayer())!, true);

  if (president.enabled) {
    president.president = MapPlayer.fromHandle(
      ForcePickRandomPlayer(udg_Sheep),
    )!;

    ForForce(udg_Sheep, () => {
      const p = MapPlayer.fromEnum()!;
      p.handicap = p === president.president ? 1 : president.handicap;
    });

    ForForce(udg_Wolf, () => MapPlayer.fromEnum()!.handicap = 1);
  }

  if (udg_practiceOn) {
    ForForce(GetPlayersAll()!, Trig_createSheep_addToSheepAndWolf);
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              |cff00aeefWelcome to practice mode!",
    );
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              Commands: |cffed1c24-a -s -owner -disable -mass -speed 1-5",
    );
    Trig_createSheep_Actions_part4();
  } else {
    DisplayTimedTextToForce(
      udg_Sheep,
      5,
      "                              |cff00aeefYou are |cffed1c24Sheep|cff00aeef this round.",
    );
    DisplayTimedTextToForce(
      udg_Wolf,
      5,
      "                              |cff00aeefYou are |cffed1c24Wolf|cff00aeef this round.",
    );

    DisplayTimedTextToForce(
      GetPlayersAll()!,
      1,
      "                              |cffffcc00Game starting in 3...",
    );
    TimerStart(createSheepTimer, 1, false, Trig_createSheep_Actions_part2);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_createSheep: () => void;
}
InitTrig_createSheep = () => {
  gg_trg_createSheep = CreateTrigger();
  TriggerAddAction(gg_trg_createSheep, Trig_createSheep_Actions);
  createSheepTimer = CreateTimer();
};
