//===========================================================================
// Trigger: sheepDies
//===========================================================================
const Trig_sheepDies_Conditions = (): boolean => {
  return GetUnitTypeId(GetTriggerUnit()!) === sheep &&
    IsUnitIllusionBJ(GetTriggerUnit()!) === false;
};

const Trig_sheepDies_grantWolfGold = (): void => {
  // double division because this baked logic was broken; in 2v4, all wolves get 6 gold
  AdjustPlayerStateBJ(
    100 / udg_atempint / udg_atempint,
    GetEnumPlayer()!,
    PLAYER_STATE_RESOURCE_GOLD,
  );
};

const Trig_sheepDies_displayWolfGold = (): void => {
  if (GetOwningPlayer(GetKillingUnit()!) !== GetOwningPlayer(GetEnumUnit()!)) {
    GoldText(100 / udg_atempint / udg_atempint, GetEnumUnit()!);
  } else {
    GoldText(
      100 / udg_atempint / udg_atempint +
        10 *
          (CountPlayersInForceBJ(udg_Sheep) +
            CountPlayersInForceBJ(udg_Spirit)),
      GetKillingUnit()!,
    );
  }
};

const Trig_sheepDies_removeUnit = (): void => {
  RemoveUnit(GetEnumUnit()!);
};

const Trig_sheepDies_Actions = (): void => {
  const dyingPlayer = GetOwningPlayer(GetTriggerUnit()!);
  PauseTimerBJ(true, udg_sheepTimer[GetConvertedPlayerId(dyingPlayer)]);
  if (
    udg_wispZoom[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))] > 0
  ) {
    SetCameraFieldForPlayer(
      dyingPlayer,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_wispZoom[GetConvertedPlayerId(dyingPlayer)],
      0,
    );
  }
  ForceUICancelBJ(dyingPlayer);
  udg_hideEsc[GetConvertedPlayerId(dyingPlayer)] = true;
  udg_kills[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] =
    udg_kills[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] + 1;
  udg_totalKills[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] =
    udg_totalKills[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] +
    1;
  udg_farmCount[GetConvertedPlayerId(dyingPlayer)] = 0;

  udg_atempint = CountPlayersInForceBJ(udg_Wolf);
  ForForce(udg_Wolf, Trig_sheepDies_grantWolfGold);
  bj_wantDestroyGroup = true;
  ForGroupBJ(
    GetUnitsOfTypeIdAll(FourCC("EC03"))!,
    Trig_sheepDies_displayWolfGold,
  );
  AdjustPlayerStateBJ(
    10 * (CountPlayersInForceBJ(udg_Sheep) + CountPlayersInForceBJ(udg_Spirit)),
    GetOwningPlayer(GetKillingUnit()!),
    PLAYER_STATE_RESOURCE_GOLD,
  );

  bj_wantDestroyGroup = true;
  ForGroupBJ(GetUnitsOfPlayerAll(dyingPlayer)!, Trig_sheepDies_removeUnit);
  ForceRemovePlayerSimple(dyingPlayer, udg_Sheep);
  ForceAddPlayerSimple(dyingPlayer, udg_Spirit);
  if (CountPlayersInForceBJ(udg_Sheep) === 0) {
    TriggerExecute(gg_trg_wolvesWin);
  } else {
    bj_lastCreatedUnit = CreateUnit(
      dyingPlayer,
      wisp,
      RandomX(wispArea),
      RandomY(wispArea),
      270,
    )!;
    PanCameraToTimedForPlayer(
      dyingPlayer,
      GetUnitX(bj_lastCreatedUnit)!,
      GetUnitY(bj_lastCreatedUnit)!,
      0,
    );
    SelectUnitForPlayerSingle(bj_lastCreatedUnit, dyingPlayer);
  }

  TriggerExecute(gg_trg_setupLeaderboard);

  if (dyingPlayer === Player(0)!) {
    StartTimerBJ(udg_redHideTimer, false, 5);
  } else if (dyingPlayer === Player(1)!) {
    StartTimerBJ(udg_blueHideTimer, false, 5);
  } else if (dyingPlayer === Player(2)!) {
    StartTimerBJ(udg_tealHideTimer, false, 5);
  } else if (dyingPlayer === Player(3)!) {
    StartTimerBJ(udg_purpleHideTimer, false, 5);
  } else if (dyingPlayer === Player(4)!) {
    StartTimerBJ(udg_yellowHideTimer, false, 5);
  } else if (dyingPlayer === Player(5)!) {
    StartTimerBJ(udg_orangeHideTimer, false, 5);
  } else if (dyingPlayer === Player(6)!) {
    StartTimerBJ(udg_greenHideTimer, false, 5);
  } else if (dyingPlayer === Player(7)!) {
    StartTimerBJ(udg_pinkHideTimer, false, 5);
  } else if (dyingPlayer === Player(8)!) {
    StartTimerBJ(udg_greyHideTimer, false, 5);
  } else if (dyingPlayer === Player(9)!) {
    StartTimerBJ(udg_lbHideTimer, false, 5);
  } else if (dyingPlayer === Player(10)!) {
    StartTimerBJ(udg_dgHideTimer, false, 5);
  } else if (dyingPlayer === Player(11)!) {
    StartTimerBJ(udg_brownHideTimer, false, 5);
  } else if (dyingPlayer === Player(12)!) {
    StartTimerBJ(udg_maroonHideTimer, false, 5);
  } else if (dyingPlayer === Player(13)!) {
    StartTimerBJ(udg_navyHideTimer, false, 5);
  } else if (dyingPlayer === Player(14)!) {
    StartTimerBJ(udg_turquoiseHideTimer, false, 5);
  } else if (dyingPlayer === Player(15)!) {
    StartTimerBJ(udg_violetHideTimer, false, 5);
  } else if (dyingPlayer === Player(16)!) {
    StartTimerBJ(udg_wheatHideTimer, false, 5);
  } else if (dyingPlayer === Player(17)!) {
    StartTimerBJ(udg_peachHideTimer, false, 5);
  } else if (dyingPlayer === Player(18)!) {
    StartTimerBJ(udg_mintHideTimer, false, 5);
  } else if (dyingPlayer === Player(19)!) {
    StartTimerBJ(udg_lavenderHideTimer, false, 5);
  } else if (dyingPlayer === Player(20)!) {
    StartTimerBJ(udg_coalHideTimer, false, 5);
  } else if (dyingPlayer === Player(21)!) {
    StartTimerBJ(udg_snowHideTimer, false, 5);
  } else if (dyingPlayer === Player(22)!) {
    StartTimerBJ(udg_emeraldHideTimer, false, 5);
  } else if (dyingPlayer === Player(23)!) {
    StartTimerBJ(udg_peanutHideTimer, false, 5);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sheepDies: () => void;
}
InitTrig_sheepDies = (): void => {
  gg_trg_sheepDies = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_sheepDies, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_sheepDies, Condition(Trig_sheepDies_Conditions));
  TriggerAddAction(gg_trg_sheepDies, Trig_sheepDies_Actions);
};
