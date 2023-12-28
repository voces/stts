import { removeEnumUnit } from "util/removeEnumUnit";
import { Trig_destroyAllFarms_Func002002002 } from "../farmFunctions/destroyAllFarms";
import { gsDistributeGold } from "functions/gs";
import { giveAllGold } from "../commands/g";
import { terrain } from "settings/terrain";
import { spawns } from "settings/spawns";
import { FogModifier, sleep } from "w3ts";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { setTimeout } from "util/setTimeout";
import { UNIT_TYPE_ID_START_POSITION } from "constants";

const Trig_castAbility2_Actions = async () => {
  let i = 1;
  let x: number;
  let y: number;
  let u: unit;
  let p: player;
  const orderString = OrderId2StringBJ(GetIssuedOrderId());
  if (
    IsUnitIllusionBJ(GetTriggerUnit()!) || udg_Teams !== TEAMS_LOCK_IE_PLAYING
  ) return;
  if (
    orderString === "defend" ||
    orderString === "undefend"
  ) {
    if (
      udg_switchOn === true ||
      udg_practiceOn === true && GetUnitTypeId(GetTriggerUnit()!) === sheepType
    ) {
      if (!UnitAlive(GetTriggerUnit()!)) return;
      i = GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!));
      if (udg_disable[i] === false) {
        udg_atempgroup = GetUnitsOfPlayerMatching(
          ConvertedPlayer(i)!,
          Condition(Trig_destroyAllFarms_Func002002002),
        )!;
        udg_farmCount[i] = 0;
        SetPlayerStateBJ(
          ConvertedPlayer(i)!,
          PLAYER_STATE_RESOURCE_LUMBER,
          udg_farmCount[i],
        );
        ForGroupBJ(udg_atempgroup, removeEnumUnit);
        DestroyGroup(udg_atempgroup);
        if (!udg_switchOn) {
          LeaderboardSetPlayerItemValueBJ(ConvertedPlayer(i)!, GetLastCreatedLeaderboard()!, udg_farmCount[i]);
        }
      }
    } else {
      while (true) {
        if (i === 25) break;
        if (
          GetUnitTypeId(udg_unit[i]) === sheepType &&
          udg_unit[i] !== GetTriggerUnit()!
        ) {
          PingMinimapForForce(
            GetForceOfPlayer(GetOwningPlayer(GetTriggerUnit()!))!,
            GetUnitX(udg_unit[i]),
            GetUnitY(udg_unit[i]),
            2,
          );
        }
        i = i + 1;
      }
    }
  } else if (
    orderString === "immolation" ||
    orderString === "unimmolation"
  ) {
    i = GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!));
    RemoveUnit(GetBuilding(GetOwningPlayer(GetTriggerUnit()!))!);
    if (udg_farmCount[i] > 0) {
      udg_farmCount[i] = udg_farmCount[i] - 1;
    }
    SetPlayerStateBJ(
      ConvertedPlayer(i)!,
      PLAYER_STATE_RESOURCE_LUMBER,
      udg_farmCount[i],
    );
    if (!udg_switchOn) {
      LeaderboardSetPlayerItemValueBJ(ConvertedPlayer(i)!, GetLastCreatedLeaderboard()!, udg_farmCount[i]);
    }
  } else if (orderString === "custom_n000") {
    x = GetUnitX(GetTriggerUnit()!);
    y = GetUnitY(GetTriggerUnit()!);
    p = GetOwningPlayer(GetTriggerUnit()!);
    u = CreateUnit(p, permgolem, 0, 0, GetUnitFacing(GetTriggerUnit()!))!;
    RemoveUnit(GetTriggerUnit()!);
    SetUnitX(u, x);
    SetUnitY(u, y);
    SelectUnitForPlayerSingle(u, p);
    SetPlayerState(
      p,
      PLAYER_STATE_RESOURCE_GOLD,
      GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) - 120,
    );
  } else if (orderString === "manashieldon") {
    i = GetRandomInt(0, 10000);
    gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = i;
    const u = GetTriggerUnit()!;
    await sleep(0.25);
    if (gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(u))] === i) {
      gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(u))] = -1;
      gsDistributeGold(GetOwningPlayer(u), false);
    }
  } else if (orderString === "manashieldoff") {
    gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = -1;
    giveAllGold(GetOwningPlayer(GetTriggerUnit()!));
  } else if (
    (orderString === "smart" || orderString === "move" || orderString === "patrol") &&
    GetUnitTypeId(GetTriggerUnit()!) === UNIT_TYPE_ID_START_POSITION
  ) {
    let x = Math.max(Math.min(GetOrderPointX(), GetRectMaxX(terrain.spawnBounds)), GetRectMinX(terrain.spawnBounds));
    let y = Math.max(Math.min(GetOrderPointY(), GetRectMaxY(terrain.spawnBounds)), GetRectMinY(terrain.spawnBounds));
    const xMin = GetRectMinX(terrain.wisp) - 96;
    const xCenter = GetRectCenterX(terrain.wisp);
    const xMax = GetRectMaxX(terrain.wisp) + 128;
    const yMin = GetRectMinY(terrain.wisp) - 96;
    const yCenter = GetRectCenterY(terrain.wisp);
    const yMax = GetRectMaxY(terrain.wisp) + 128;
    if (x < xMax && x > xMin && y < yMax && y > yMin) {
      const xDist = Math.min(Math.abs(x - xMax), Math.abs(x - xMin));
      const yDist = Math.min(Math.abs(y - yMax), Math.abs(y - yMin));
      if (xDist < yDist) x = x < xCenter ? xMin : xMax;
      else y = y < yCenter ? yMin : yMax;
    }
    u = GetTriggerUnit()!;
    SetUnitPosition(u, x, y);
    x = GetUnitX(u);
    y = GetUnitY(u);
    spawns.set(GetOwningPlayer(u), { x, y });
    PanCameraToTimedForPlayer(GetOwningPlayer(u), x, y, 0);
    const modifier = FogModifier.create(MapPlayerEx.fromEvent()!, FOG_OF_WAR_VISIBLE, x, y, 128, true, true)!;
    modifier.start();
    setTimeout(1, () => modifier.destroy());
  }
};

//===========================================================================
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_castAbilityIssueOrder: () => void;
}
InitTrig_castAbilityIssueOrder = () => {
  gg_trg_castAbilityIssueOrder = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_castAbilityIssueOrder, EVENT_PLAYER_UNIT_ISSUED_ORDER);
  TriggerRegisterAnyUnitEventBJ(gg_trg_castAbilityIssueOrder, EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER);
  TriggerAddAction(gg_trg_castAbilityIssueOrder, Trig_castAbility2_Actions);
};
