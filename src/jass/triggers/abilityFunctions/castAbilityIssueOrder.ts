import { removeEnumUnit } from "util/removeEnumUnit";
import { Trig_destroyAllFarms_Func002002002 } from "../farmFunctions/destroyAllFarms";
import { sleep } from "w3ts";

const Trig_castAbility2_Actions = async () => {
  let i = 1;
  let x: number;
  let y: number;
  let u: unit;
  let p: player;
  if (
    IsUnitIllusionBJ(GetTriggerUnit()!) || udg_Teams !== TEAMS_LOCK_IE_PLAYING
  ) return;
  if (
    OrderId2StringBJ(GetIssuedOrderId()) === "defend" ||
    OrderId2StringBJ(GetIssuedOrderId()) === "undefend"
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
        if (udg_dummyWisps > 0) {
          LeaderboardSetPlayerItemValueBJ(
            ConvertedPlayer(i)!,
            GetLastCreatedLeaderboard()!,
            udg_saves[i],
          );
        } else {
          LeaderboardSetPlayerItemValueBJ(
            ConvertedPlayer(i)!,
            GetLastCreatedLeaderboard()!,
            udg_farmCount[i],
          );
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
    OrderId2StringBJ(GetIssuedOrderId()) === "immolation" ||
    OrderId2StringBJ(GetIssuedOrderId()) === "unimmolation"
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
    if (udg_wispPoints > 0) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(i)!,
        GetLastCreatedLeaderboard()!,
        udg_saves[i],
      );
    } else {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(i)!,
        GetLastCreatedLeaderboard()!,
        udg_farmCount[i],
      );
    }
  } else if (OrderId2StringBJ(GetIssuedOrderId()) === "custom_n000") {
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
  } else if (OrderId2StringBJ(GetIssuedOrderId()) === "manashieldon") {
    i = GetRandomInt(0, 10000);
    gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = i;
    await sleep(0.25);
    if (
      gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))] === i
    ) {
      gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = -1;
      gsDistributeGold(GetOwningPlayer(GetTriggerUnit()!), false);
    }
  } else if (OrderId2StringBJ(GetIssuedOrderId()) === "manashieldoff") {
    gSheepAbilityFlag[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = -1;
    gsDistributeGold(GetOwningPlayer(GetTriggerUnit()!), true);
  }
};

//===========================================================================
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_castAbilityIssueOrder: () => void;
}
InitTrig_castAbilityIssueOrder = () => {
  gg_trg_castAbilityIssueOrder = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_castAbilityIssueOrder,
    EVENT_PLAYER_UNIT_ISSUED_ORDER,
  );
  TriggerAddAction(gg_trg_castAbilityIssueOrder, Trig_castAbility2_Actions);
};
