//===========================================================================
// Trigger: createWolves
//===========================================================================
const Trig_createWolves_Func004Func001C = () => {
  if ((!(udg_practiceOn === false))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_createWolves_Func004A = () => {
  if ((Trig_createWolves_Func004Func001C())) {
    PanCameraToTimedForPlayer(
      GetEnumPlayer()!,
      GetRectCenterX(wolfSpawn),
      GetRectCenterY(wolfSpawn),
      0,
    );
  }
  bj_lastCreatedUnit = CreateUnit(
    GetEnumPlayer()!,
    shepType,
    GetRectCenterX(wolfSpawn),
    GetRectCenterY(wolfSpawn),
    270,
  );
  if (udg_freakHotkeys[GetConvertedPlayerId(GetEnumPlayer()!)]) {
    UnitRemoveAbilityBJ(FourCC("A00S"), GetLastCreatedUnit()!);
    UnitRemoveAbilityBJ(FourCC("A018"), GetLastCreatedUnit()!);
    UnitAddAbilityBJ(FourCC("A01H"), GetLastCreatedUnit()!);
    UnitAddAbilityBJ(FourCC("A01F"), GetLastCreatedUnit()!);
  }
  if (udg_practiceOn) {
    UnitRemoveAbilityBJ(FourCC("A00V"), GetLastCreatedUnit()!);
    SetUnitOwner(
      GetLastCreatedUnit()!,
      Player(bj_PLAYER_NEUTRAL_VICTIM)!,
      false,
    );
    IssueImmediateOrderBJ(GetLastCreatedUnit()!, "holdposition");
  } else {
    SelectUnitForPlayerSingle(GetLastCreatedUnit()!, GetEnumPlayer()!);
    ForceUICancelBJ(GetEnumPlayer()!);
  }
  SuspendHeroXPBJ(false, GetLastCreatedUnit()!);
  udg_unit2[GetConvertedPlayerId(GetEnumPlayer()!)] = GetLastCreatedUnit()!;
};

const Trig_createWolves_Func005A = () => {
  udg_totalFarmCountBeforeWolves[GetConvertedPlayerId(GetEnumPlayer()!)] =
    udg_totalFarmCountBeforeWolves[GetConvertedPlayerId(GetEnumPlayer()!)] +
    udg_farmCount[GetConvertedPlayerId(GetEnumPlayer()!)];
};

const Trig_createWolves_Func010Func003A = () => {
  if (udg_firstRound[GetConvertedPlayerId(GetEnumPlayer()!)]) {
    StartTimerBJ(
      udg_sheepTimer[GetConvertedPlayerId(GetEnumPlayer()!)],
      false,
      99999,
    );
    udg_firstRound[GetConvertedPlayerId(GetEnumPlayer()!)] = false;
  } else {
    PauseTimerBJ(
      false,
      udg_sheepTimer[GetConvertedPlayerId(GetEnumPlayer()!)],
    );
  }
};

const Trig_createWolves_Func010C = () => {
  if ((!(udg_switchOn === false))) {
    return false;
  }
  if ((!(udg_practiceOn === false))) {
    return false;
  }
  return true;
};

const Trig_createWolves_Func011Func001Func003A = () => {
  SetPlayerAllianceStateBJ(
    Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    GetEnumPlayer()!,
    bj_ALLIANCE_NEUTRAL_VISION,
  );
};

const Trig_createWolves_Func011Func001Func004A = () => {
  SetPlayerAllianceStateBJ(
    Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    GetEnumPlayer()!,
    bj_ALLIANCE_NEUTRAL,
  );
};

const Trig_createWolves_Func011C = () => {
  if ((!(udg_dummyWisps > 0))) {
    return false;
  }
  return true;
};

const Trig_createWolves_Func012C = () => {
  if ((!GetBooleanOr(udg_mapShrink === true, udg_mapExpand === true))) {
    return false;
  }
  return true;
};

const Trig_createWolves_Actions = () => {
  if (autoCancel()) {
    return;
  }
  ForForce(udg_Wolf, Trig_createWolves_Func004A);
  ForForce(udg_Sheep, Trig_createWolves_Func005A);
  DisplayTimedTextToForce(
    udg_Sheep,
    5,
    "                              The wolves have been set free!",
  );
  TimerDialogDisplayBJ(false, udg_wolfTimerWindow);
  PauseTimerBJ(false, udg_Timer);
  TimerDialogDisplayBJ(true, udg_TimerWindow);
  if ((Trig_createWolves_Func010C())) {
    udg_runeSpawn = 0;
    StartTimerBJ(udg_RuneTimer[0], false, 90);
    ForForce(udg_Sheep, Trig_createWolves_Func010Func003A);
  }
  if ((Trig_createWolves_Func011C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = udg_dummyWisps;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      EnableTrigger(gg_trg_dummyWisps);
      bj_lastCreatedUnit = CreateUnit(
        Player(bj_PLAYER_NEUTRAL_VICTIM)!,
        wispType,
        RandomX(wispArea),
        RandomY(wispArea),
        270,
      );
      ForForce(udg_Sheep, Trig_createWolves_Func011Func001Func003A);
      ForForce(udg_Wolf, Trig_createWolves_Func011Func001Func004A);
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  }
  if ((Trig_createWolves_Func012C())) {
    udg_blightAlterationTime = (udg_time - (udg_time / udg_blightAlterations)) /
      udg_blightAlterations;
    StartTimerBJ(udg_mapSizeChangeTimer, false, udg_blightAlterationTime);
    TimerDialogDisplayBJ(true, udg_mapSizeChangeTimerWindow);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_createWolves: () => void;
}
InitTrig_createWolves = () => {
  gg_trg_createWolves = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_createWolves, udg_wolfTimer);
  TriggerAddAction(gg_trg_createWolves, Trig_createWolves_Actions);
};
