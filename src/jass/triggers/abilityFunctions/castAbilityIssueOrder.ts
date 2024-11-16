import { removeEnumUnit } from "util/removeEnumUnit";
import { isFilterUnitStructure } from "../farmFunctions/destroyAllFarms";
import { gsDistributeGold } from "functions/gs";
import { giveAllGold } from "../commands/g";
import { president, terrain } from "settings/settings";
import { spawns } from "settings/spawns";
import { UNIT_TYPE_ID_START_POSITION } from "constants";
import { ForceEx } from "handles/ForceEx";

const handleSpawnActions = (orderString: string | undefined) => {
  // Free spawn
  if (orderString === "smart" || orderString === "move" || orderString === "patrol") {
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
    const u = GetTriggerUnit()!;
    SetUnitPosition(u, x, y);
    x = GetUnitX(u);
    y = GetUnitY(u);
    spawns.set(GetOwningPlayer(u), { x, y });
    PanCameraToTimedForPlayer(GetOwningPlayer(u), x, y, 0);
  }
};

const Trig_castAbility2_Actions = () => {
  let i = 1;
  let x: number;
  let y: number;
  let u: unit;
  let p: player;
  const orderString = OrderId2StringBJ(GetIssuedOrderId());
  if (IsUnitIllusion(GetTriggerUnit()!) || udg_Teams !== TEAMS_LOCK_IE_PLAYING) return;

  if (GetUnitTypeId(GetTriggerUnit()!) === UNIT_TYPE_ID_START_POSITION) return handleSpawnActions(orderString);

  if (orderString === "defend" || orderString === "undefend") {
    // Destroy all farms
    if (
      udg_switchOn ||
      udg_practiceOn && GetUnitTypeId(GetTriggerUnit()!) === sheepType
    ) {
      if (!UnitAlive(GetTriggerUnit()!)) return;
      i = GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!));
      if (!udg_disable[i]) {
        udg_atempgroup = GetUnitsOfPlayerMatching(ConvertedPlayer(i)!, Condition(isFilterUnitStructure))!;
        udg_farmCount[i] = 0;
        SetPlayerState(ConvertedPlayer(i)!, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[i]);
        ForGroupBJ(udg_atempgroup, removeEnumUnit);
        DestroyGroup(udg_atempgroup);
        if (!udg_switchOn) {
          LeaderboardSetPlayerItemValueBJ(ConvertedPlayer(i)!, GetLastCreatedLeaderboard()!, udg_farmCount[i]);
        }
      }
      return;
    }

    // Ping allies
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      if (
        GetUnitTypeId(udg_unit[i]) === sheepType && udg_unit[i] !== GetTriggerUnit()! &&
        GetLocalPlayer() === GetOwningPlayer(GetTriggerUnit()!)
      ) {
        if (president.enabled && president.president?.id === i - 1) {
          PingMinimapEx(GetUnitX(udg_unit[i]), GetUnitY(udg_unit[i]), 2, 255, 204, 0, false);
        } else PingMinimap(GetUnitX(udg_unit[i]), GetUnitY(udg_unit[i]), 2);
      }
    }
    return;
  }

  // Destroy last farm
  if (orderString === "immolation" || orderString === "unimmolation") {
    i = GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!));
    RemoveUnit(GetBuilding(GetOwningPlayer(GetTriggerUnit()!))!);
    if (udg_farmCount[i] > 0) udg_farmCount[i]--;
    SetPlayerState(ConvertedPlayer(i)!, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[i]);
    if (!udg_switchOn) {
      LeaderboardSetPlayerItemValueBJ(ConvertedPlayer(i)!, GetLastCreatedLeaderboard()!, udg_farmCount[i]);
    }
    return;
  }

  // Upgrade golem (dead?)
  if (orderString === "custom_n000") {
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
    return;
  }

  // g once (sheep)
  if (orderString === "manashieldon") {
    i = GetRandomInt(0, 10000);
    gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = i;
    const u = GetTriggerUnit()!;
    TriggerSleepAction(0.25);
    if (!UnitAlive(u)) return;
    p = GetOwningPlayer(u);
    if (gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(u))] === i) {
      gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(u))] = -1;
      if (president.enabled && president.president) {
        if (president.president.handle === p) gsDistributeGold(GetOwningPlayer(u), 100);
        else {
          transferGold(
            p,
            president.president.handle,
            Math.ceil(GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) * 0.5),
            TRANSFER_DISPLAY_TEAM,
          );
        }
      } else gsDistributeGold(GetOwningPlayer(u), false);
    }
    return;
  }

  // g twice (sheep)
  if (orderString === "manashieldoff") {
    p = GetOwningPlayer(GetTriggerUnit()!);
    gSheepAbilityFlag[GetPlayerId(p)] = -1;
    if (president.enabled && president.president) {
      if (president.president.handle === p) {
        ForceEx.sheep.for((p) => {
          if (p === president.president || !president.president) return;
          const current = p.gold;
          if (current > 12) transferGold(p.handle, president.president.handle, current - 12, TRANSFER_DISPLAY_INVOLVED);
        });
      } else {
        transferGold(
          p,
          president.president.handle,
          GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD),
          TRANSFER_DISPLAY_TEAM,
        );
      }
    } else giveAllGold(p);
    return;
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
