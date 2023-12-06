//===========================================================================
// Trigger: spiritDies
//===========================================================================
const Trig_spiritDies_Conditions = (): boolean => {
  return GetUnitTypeId(GetTriggerUnit()!) === wisp;
};

const Trig_spiritDies_Actions = (): void => {
  const dyingPlayer = GetOwningPlayer(GetDyingUnit()!);
  const dyingPlayerId = GetConvertedPlayerId(dyingPlayer);
  const killingPlayer = GetOwningPlayer(GetKillingUnit()!);
  const killingPlayerId = GetConvertedPlayerId(killingPlayer);
  const spawnIndex = GetRandomInt(1, 24);

  ResumeTimer(udg_sheepTimer[dyingPlayerId]);

  if (udg_sheepZoom[dyingPlayerId] > 0) {
    SetCameraFieldForPlayer(
      dyingPlayer,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_sheepZoom[dyingPlayerId],
      0,
    );
  }

  udg_atempint = GetRandomInt(1, 24);
  const u = CreateUnit(
    dyingPlayer,
    sheep,
    GetRectCenterX(udg_startLocation[spawnIndex]),
    GetRectCenterY(udg_startLocation[spawnIndex]),
    270,
  )!;
  PanCameraToTimedForPlayer(
    dyingPlayer,
    GetRectCenterX(udg_startLocation[spawnIndex]),
    GetRectCenterY(udg_startLocation[spawnIndex]),
    0,
  );
  udg_unit[dyingPlayerId] = u;
  SelectUnitForPlayerSingle(u, dyingPlayer);
  SetUnitVertexColorBJ(
    u,
    udg_SheepColorR[dyingPlayerId],
    udg_SheepColorG[dyingPlayerId],
    udg_SheepColorB[dyingPlayerId],
    0,
  );

  AdjustPlayerStateBJ(100, killingPlayer, PLAYER_STATE_RESOURCE_GOLD);
  AdjustPlayerStateBJ(20, dyingPlayer, PLAYER_STATE_RESOURCE_GOLD);

  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    "                              " + udg_colorString[killingPlayerId] +
      GetPlayerName(killingPlayer) + "|r has freed " +
      udg_colorString[dyingPlayerId] + GetPlayerName(dyingPlayer),
  );

  udg_farmCount[dyingPlayerId] = 0;
  udg_totalSaves[killingPlayerId] = udg_totalSaves[killingPlayerId] + 1;

  ForceRemovePlayer(udg_Spirit, dyingPlayer);
  ForceAddPlayer(udg_Sheep, dyingPlayer);
  TriggerExecute(gg_trg_setupLeaderboard);

  udg_humiliationCheck[dyingPlayerId] = true;
  TriggerSleepAction(2.5);
  udg_humiliationCheck[dyingPlayerId] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_spiritDies: () => void;
}
InitTrig_spiritDies = (): void => {
  gg_trg_spiritDies = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_spiritDies, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_spiritDies, Condition(Trig_spiritDies_Conditions));
  TriggerAddAction(gg_trg_spiritDies, Trig_spiritDies_Actions);
};
