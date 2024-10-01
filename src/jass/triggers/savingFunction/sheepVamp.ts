import { terrain } from "settings/settings";
import { setTimeout } from "util/setTimeout";

const Trig_sheepVamp_Conditions = () => {
  return GetUnitTypeId(GetTriggerUnit()!) === sheepType &&
    !IsUnitIllusion(GetTriggerUnit()!);
};

const Trig_sheepVamp_Actions = () => {
  const g = CreateGroup()!;
  let u: unit | undefined;
  const p = GetOwningPlayer(GetTriggerUnit()!);
  const l = GetOwningPlayer(GetKillingUnit()!);
  let i = 0;
  GroupEnumUnitsOfPlayer(g, p, null);
  while (true) {
    u = FirstOfGroup(g);
    if (u == null) break;
    RemoveUnit(u);
    GroupRemoveUnit(g, u);
  }
  DestroyGroup(g);
  udg_hideEsc[GetPlayerId(p) + 1] = true;
  SetPlayerState(p, PLAYER_STATE_RESOURCE_LUMBER, 0);
  udg_farmCount[GetPlayerId(p) + 1] = 0;
  ForceRemovePlayer(udg_Sheep, p);
  ForceAddPlayer(udg_Wolf, p);
  if (udg_wolfZoom[GetPlayerId(p) + 1] > 1350) {
    SetCameraFieldForPlayer(
      p,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_wolfZoom[GetPlayerId(p) + 1],
      0,
    );
  }
  PanCameraToTimedForPlayer(
    p,
    GetRectCenterX(terrain.wolf),
    GetRectCenterY(terrain.wolf),
    0,
  );
  const roundOver = CountPlayersInForceBJ(udg_Sheep) === 0;
  if (!roundOver) {
    udg_unit[GetPlayerId(p) + 1] = udg_unit2[GetPlayerId(p) + 1] = CreateUnit(
      p,
      shepType,
      GetRectCenterX(terrain.wolf),
      GetRectCenterY(terrain.wolf),
      270,
    )!;
  }
  while (true) {
    if (i === 24) break;
    if (IsPlayerInForce(Player(i)!, udg_Sheep)) {
      SetPlayerAllianceStateBJ(Player(i)!, p, bj_ALLIANCE_UNALLIED);
      SetPlayerAllianceStateBJ(p, Player(i)!, bj_ALLIANCE_UNALLIED);
    } else if (IsPlayerInForce(Player(i)!, udg_Wolf)) {
      SetPlayerAllianceStateBJ(Player(i)!, p, bj_ALLIANCE_ALLIED_VISION);
      SetPlayerAllianceStateBJ(p, Player(i)!, bj_ALLIANCE_ALLIED_VISION);
    }
    i = i + 1;
  }
  SuspendHeroXP(udg_unit[GetPlayerId(p) + 1], false);
  SelectUnitForPlayerSingle(udg_unit[GetPlayerId(p) + 1], p);
  udg_sheepLastGame[GetPlayerId(p) + 1] = false;
  udg_kills[GetPlayerId(l) + 1] = udg_kills[GetPlayerId(l) + 1] + 1;
  if (roundOver) setTimeout(0.5, () => TriggerExecute(gg_trg_wolvesWin));
  TriggerExecute(gg_trg_setupLeaderboard);
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    "                              " + udg_colorString[GetPlayerId(l) + 1] +
      GetPlayerName(l) + "|r turned " + udg_colorString[GetPlayerId(p) + 1] +
      GetPlayerName(p) + "|r.",
  );
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sheepVamp: () => void;
}
InitTrig_sheepVamp = () => {
  gg_trg_sheepVamp = CreateTrigger();
  DisableTrigger(gg_trg_sheepVamp);
  TriggerRegisterAnyUnitEventBJ(gg_trg_sheepVamp, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_sheepVamp, Condition(Trig_sheepVamp_Conditions));
  TriggerAddAction(gg_trg_sheepVamp, Trig_sheepVamp_Actions);
};
