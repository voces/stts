//===========================================================================
// Trigger: castAbilityIssueOrder
//===========================================================================
// castAbilityIssueOrder

import {
  Trig_destroyAllFarms_Func002002002,
  Trig_destroyAllFarms_Func005002,
} from "../farmFunctions/destroyAllFarms";

const Trig_castAbility2_Actions = (): void => {
  let i = 1;
  let x: number;
  let y: number;
  let u: unit;
  let p: player;
  if (IsUnitIllusionBJ(GetTriggerUnit()!) || udg_Teams !== TEAMS_LOCK) {
    return;
  }
  if (
    OrderId2StringBJ(GetIssuedOrderId()) === "defend" ||
    OrderId2StringBJ(GetIssuedOrderId()) === "undefend"
  ) {
    if (udg_switchOn === true || udg_practiceOn === true) {
      udg_atempint = GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!));
      if (udg_disable[udg_atempint] === false) {
        udg_atempgroup = GetUnitsOfPlayerMatching(
          ConvertedPlayer(udg_atempint)!,
          Condition(Trig_destroyAllFarms_Func002002002),
        )!;
        udg_farmCount[udg_atempint] = 0;
        SetPlayerStateBJ(
          ConvertedPlayer(udg_atempint)!,
          PLAYER_STATE_RESOURCE_LUMBER,
          udg_farmCount[udg_atempint],
        );
        ForGroupBJ(udg_atempgroup, Trig_destroyAllFarms_Func005002);
        DestroyGroup(udg_atempgroup);
        if (udg_dummyWisps > 0) {
          LeaderboardSetPlayerItemValueBJ(
            ConvertedPlayer(udg_atempint)!,
            GetLastCreatedLeaderboard()!,
            udg_saves[udg_atempint],
          );
        } else {
          LeaderboardSetPlayerItemValueBJ(
            ConvertedPlayer(udg_atempint)!,
            GetLastCreatedLeaderboard()!,
            udg_farmCount[udg_atempint],
          );
        }
      }
    } else {
      while (true) {
        if (i === 25) break;
        if (
          GetUnitTypeId(udg_unit[i]) === FourCC("uC04") &&
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
    udg_atempint = GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!));
    RemoveUnit(GetBuilding(GetOwningPlayer(GetTriggerUnit()!))!);
    if (udg_farmCount[udg_atempint] > 0) {
      udg_farmCount[udg_atempint] = udg_farmCount[udg_atempint] - 1;
    }
    SetPlayerStateBJ(
      ConvertedPlayer(udg_atempint)!,
      PLAYER_STATE_RESOURCE_LUMBER,
      udg_farmCount[udg_atempint],
    );
    if (udg_wispPoints > 0) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        GetLastCreatedLeaderboard()!,
        udg_saves[udg_atempint],
      );
    } else {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        GetLastCreatedLeaderboard()!,
        udg_farmCount[udg_atempint],
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
    TriggerSleepAction(0.25);
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
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_castAbilityIssueOrder: () => void;
}
InitTrig_castAbilityIssueOrder = (): void => {
  gg_trg_castAbilityIssueOrder = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_castAbilityIssueOrder,
    EVENT_PLAYER_UNIT_ISSUED_ORDER,
  );
  TriggerAddAction(gg_trg_castAbilityIssueOrder, Trig_castAbility2_Actions);
};
