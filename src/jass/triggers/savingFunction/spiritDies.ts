import { ABILITY_TYPE_ID_BITE, UNIT_TYPE_ID_DOLLY } from "constants";
import { president, terrain } from "settings/settings";

const Trig_spiritDies_Conditions = () => {
  return GetUnitTypeId(GetTriggerUnit()!) === wispType;
};

const Trig_spiritDies_Actions = () => {
  const dyingUnit = GetDyingUnit()!;
  const dyingPlayer = GetOwningPlayer(dyingUnit);
  const dyingPlayerCid = GetConvertedPlayerId(dyingPlayer);
  const killingPlayer = GetOwningPlayer(GetKillingUnit()!);
  const killingPlayerCid = GetConvertedPlayerId(killingPlayer);

  if (udg_practiceOn) {
    CreateUnit(dyingPlayer, wispType, RandomX(terrain.wisp), RandomY(terrain.wisp), 270);
    return;
  }

  ResumeTimer(udg_sheepTimer[dyingPlayerCid]);

  if ((udg_sheepZoom[dyingPlayerCid] ?? 0) > 0) {
    SetCameraFieldForPlayer(dyingPlayer, CAMERA_FIELD_TARGET_DISTANCE, udg_sheepZoom[dyingPlayerCid], 0);
  }

  const { x, y } = (() => {
    if (president.enabled) return { x: GetUnitX(dyingUnit), y: GetUnitY(dyingUnit) };

    const spawnIndex = GetRandomInt(1, 24);
    return {
      x: GetRectCenterX(udg_startLocation[spawnIndex]),
      y: GetRectCenterY(udg_startLocation[spawnIndex]),
    };
  })();
  const facing = GetUnitFacing(dyingUnit);

  const u = CreateUnit(dyingPlayer, sheepType, x, y, facing)!;
  if (!pub[dyingPlayerCid - 1]) {
    CreateUnit(
      dyingPlayer,
      UNIT_TYPE_ID_DOLLY,
      GetRandomReal(GetRectMinX(terrain.cameraBounds), GetRectMaxX(terrain.cameraBounds)),
      GetRandomReal(GetRectMinY(terrain.cameraBounds), GetRectMaxY(terrain.cameraBounds)),
      270,
    );
  }
  PanCameraToTimedForPlayer(dyingPlayer, x, y, 0);
  udg_unit[dyingPlayerCid] = u;
  SelectUnitForPlayerSingle(u, dyingPlayer);
  if (president.enabled) UnitAddAbility(u, ABILITY_TYPE_ID_BITE);
  if (GetPlayerController(dyingPlayer) === MAP_CONTROL_COMPUTER) UnitRemoveAbility(u, shareControlAbility);

  AdjustPlayerStateBJ(100, killingPlayer, PLAYER_STATE_RESOURCE_GOLD);
  AdjustPlayerStateBJ(20, dyingPlayer, PLAYER_STATE_RESOURCE_GOLD);

  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    udg_colorString[killingPlayerCid] +
      GetPlayerName(killingPlayer) + "|r has freed " +
      udg_colorString[dyingPlayerCid] + GetPlayerName(dyingPlayer),
  );

  udg_farmCount[dyingPlayerCid] = 0;
  udg_totalSaves[killingPlayerCid] = udg_totalSaves[killingPlayerCid] + 1;

  ForceRemovePlayer(udg_Spirit, dyingPlayer);
  ForceAddPlayer(udg_Sheep, dyingPlayer);
  TriggerExecute(gg_trg_setupLeaderboard);

  udg_humiliationCheck[dyingPlayerCid] = true;
  TriggerSleepAction(2.5);
  udg_humiliationCheck[dyingPlayerCid] = false;
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_spiritDies: () => void;
}
InitTrig_spiritDies = () => {
  gg_trg_spiritDies = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_spiritDies, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_spiritDies, Condition(Trig_spiritDies_Conditions));
  TriggerAddAction(gg_trg_spiritDies, Trig_spiritDies_Actions);
};
