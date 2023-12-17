import { terrain } from "settings/terrain";

const Trig_escFix_Actions = () => {
  const p = GetTriggerPlayer()!;
  const pId = GetConvertedPlayerId(p);
  SetCameraFieldForPlayer(p, CAMERA_FIELD_ANGLE_OF_ATTACK, 304, 0);
  if (IsPlayerInForce(p, udg_Sheep)) {
    SetCameraFieldForPlayer(
      p,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_sheepZoom[pId],
      0,
    );

    if (
      udg_Teams === TEAMS_LOCK_IE_PLAYING && terrain.spawnType === "playerColor" &&
      GetPlayerUnitTypeCount(p, sheepType) === 0
    ) {
      PanCameraToTimedForPlayer(
        p,
        GetRectCenterX(udg_startLocation[pId]),
        GetRectCenterY(udg_startLocation[pId]),
        0,
      );
    }
  } else if (IsPlayerInForce(p, udg_Wolf)) {
    SetCameraFieldForPlayer(
      p,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_wolfZoom[pId],
      0,
    );
  } else {
    SetCameraFieldForPlayer(
      p,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_wispZoom[pId],
      0,
    );
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_escFix: () => void;
}
InitTrig_escFix = () => {
  let i = 0;
  gg_trg_escFix = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerEventEndCinematic(gg_trg_escFix, Player(i)!);
    i = i + 1;
  }
  TriggerAddAction(gg_trg_escFix, Trig_escFix_Actions);
};
