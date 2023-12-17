import { terrain } from "settings/terrain";
import { president } from "modes/president";

const Trig_spiritDies_Conditions = () => {
  return GetUnitTypeId(GetTriggerUnit()!) === wispType;
};

const Trig_spiritDies_Actions = () => {
  const dyingUnit = GetDyingUnit()!;
  const dyingPlayer = GetOwningPlayer(dyingUnit);
  const dyingPlayerId = GetConvertedPlayerId(dyingPlayer);
  const killingPlayer = GetOwningPlayer(GetKillingUnit()!);
  const killingPlayerId = GetConvertedPlayerId(killingPlayer);

  if (udg_practiceOn) {
    CreateUnit(
      dyingPlayer,
      wispType,
      RandomX(terrain.wisp),
      RandomY(terrain.wisp),
      270,
    );
    return;
  }

  ResumeTimer(udg_sheepTimer[dyingPlayerId]);

  if (udg_sheepZoom[dyingPlayerId] > 0) {
    SetCameraFieldForPlayer(
      dyingPlayer,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_sheepZoom[dyingPlayerId],
      0,
    );
  }

  const { x, y } = (() => {
    if (president.enabled) {
      return { x: GetUnitX(dyingUnit), y: GetUnitY(dyingUnit) };
    }

    const spawnIndex = GetRandomInt(1, 24);
    return {
      x: GetRectCenterX(udg_startLocation[spawnIndex]),
      y: GetRectCenterY(udg_startLocation[spawnIndex]),
    };
  })();
  const facing = GetUnitFacing(dyingUnit);

  const u = CreateUnit(dyingPlayer, sheepType, x, y, facing)!;
  PanCameraToTimedForPlayer(dyingPlayer, x, y, 0);
  udg_unit[dyingPlayerId] = u;
  SelectUnitForPlayerSingle(u, dyingPlayer);

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
