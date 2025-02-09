import { UNIT_TYPE_ID_DOLLY } from "constants";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { UnitEx } from "handles/UnitEx";
import { switchSheepTimers } from "modes/switch/switch";
import { terrain } from "settings/settings";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { removeEnumUnit } from "util/removeEnumUnit";

const adjustAlliances1 = () => {
  SetPlayerAllianceStateBJ(GetEnumPlayer()!, GetOwningPlayer(GetKillingUnit()!), bj_ALLIANCE_UNALLIED);
  SetPlayerAllianceStateBJ(GetEnumPlayer()!, GetOwningPlayer(GetKillingUnit()!), bj_ALLIANCE_ALLIED_VISION);
  SetPlayerAllianceStateBJ(GetOwningPlayer(GetKillingUnit()!), GetEnumPlayer()!, bj_ALLIANCE_UNALLIED);
  SetPlayerAllianceStateBJ(GetOwningPlayer(GetKillingUnit()!), GetEnumPlayer()!, bj_ALLIANCE_ALLIED_VISION);
  SetPlayerAllianceStateBJ(GetOwningPlayer(GetTriggerUnit()!), GetEnumPlayer()!, bj_ALLIANCE_UNALLIED);
  SetPlayerAllianceStateBJ(GetEnumPlayer()!, GetOwningPlayer(GetTriggerUnit()!), bj_ALLIANCE_UNALLIED);
};

const adjustAlliances2 = () => {
  SetPlayerAllianceStateBJ(GetEnumPlayer()!, GetOwningPlayer(GetTriggerUnit()!), bj_ALLIANCE_UNALLIED);
  SetPlayerAllianceStateBJ(GetEnumPlayer()!, GetOwningPlayer(GetTriggerUnit()!), bj_ALLIANCE_ALLIED_VISION);
  SetPlayerAllianceStateBJ(GetOwningPlayer(GetTriggerUnit()!), GetEnumPlayer()!, bj_ALLIANCE_UNALLIED);
  SetPlayerAllianceStateBJ(GetOwningPlayer(GetTriggerUnit()!), GetEnumPlayer()!, bj_ALLIANCE_ALLIED_VISION);
  SetPlayerAllianceStateBJ(GetOwningPlayer(GetKillingUnit()!), GetEnumPlayer()!, bj_ALLIANCE_UNALLIED);
  SetPlayerAllianceStateBJ(GetEnumPlayer()!, GetOwningPlayer(GetKillingUnit()!), bj_ALLIANCE_UNALLIED);
};

const Trig_sheepSwitch_Actions = () => {
  udg_hideEsc[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = true;
  udg_hideEsc[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] = true;
  if (udg_sheepZoom[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] > 0) {
    SetCameraFieldForPlayer(
      GetOwningPlayer(GetKillingUnit()!),
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_sheepZoom[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))],
      0,
    );
  }
  if (udg_wolfZoom[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))] > 0) {
    SetCameraFieldForPlayer(
      GetOwningPlayer(GetDyingUnit()!),
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_wolfZoom[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))],
      0,
    );
  }
  SetPlayerState(GetOwningPlayer(GetTriggerUnit()!), PLAYER_STATE_RESOURCE_LUMBER, 0);
  SetPlayerState(GetOwningPlayer(GetKillingUnit()!), PLAYER_STATE_RESOURCE_LUMBER, 0);
  if (udg_sheepGold > 0 || udg_wolfGold > 0) {
    SetPlayerState(GetOwningPlayer(GetKillingUnit()!), PLAYER_STATE_RESOURCE_GOLD, udg_sheepGold);
  }
  if (udg_sheepGold > 0 || udg_wolfGold > 0) {
    SetPlayerState(GetOwningPlayer(GetDyingUnit()!), PLAYER_STATE_RESOURCE_GOLD, udg_wolfGold);
  }
  udg_kills[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] =
    udg_kills[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] + 1;
  udg_farmCount[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))] = 0;
  ForceRemovePlayerSimple(GetOwningPlayer(GetKillingUnit()!), udg_Wolf);
  ForceAddPlayerSimple(GetOwningPlayer(GetKillingUnit()!), udg_Sheep);
  udg_atempgroup = GetUnitsOfPlayerAll(GetOwningPlayer(GetKillingUnit()!))!;
  ForGroupBJ(udg_atempgroup, removeEnumUnit);
  DestroyGroup(udg_atempgroup);
  bj_lastCreatedUnit = CreateUnit(
    GetOwningPlayer(GetKillingUnit()!),
    unstuckType,
    RandomX(gg_rct_unstuckZone),
    RandomY(gg_rct_unstuckZone),
    0,
  );
  SelectUnitForPlayerSingle(GetLastCreatedUnit()!, GetOwningPlayer(GetKillingUnit()!));
  ForceUICancelBJ(GetOwningPlayer(GetKillingUnit()!));
  RemoveUnit(GetLastCreatedUnit()!);
  const sheep = CreateUnit(
    GetOwningPlayer(GetKillingUnit()!),
    sheepType,
    GetUnitX(GetTriggerUnit()!),
    GetUnitY(GetTriggerUnit()!),
    GetUnitFacing(GetTriggerUnit()!),
  )!;
  const p = MapPlayerEx.fromOwner(GetKillingUnit()!);
  if (!p.isPub) {
    CreateUnit(
      p.handle,
      UNIT_TYPE_ID_DOLLY,
      GetRandomReal(GetRectMinX(terrain.cameraBounds), GetRectMaxX(terrain.cameraBounds)),
      GetRandomReal(GetRectMinY(terrain.cameraBounds), GetRectMaxY(terrain.cameraBounds)),
      270,
    );
  }
  switchSheepTimers[GetPlayerId(GetOwningPlayer(GetKillingUnit()!))].resume();
  switchSheepTimers[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))].pause();
  udg_unit[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] = sheep;
  UnitRemoveAbility(sheep, shareControlAbility);
  UnitRemoveAbility(sheep, giveAlliesGoldSheepAbility);
  UnitAddAbility(sheep, destroyAllFarms);

  SetPlayerUnitAvailableBJ(FourCC("n002"), true, GetOwningPlayer(sheep));
  SelectUnitForPlayerSingle(sheep, GetOwningPlayer(GetKillingUnit()!));
  SetUnitInvulnerable(sheep, true);
  AddSpecialEffectTargetUnitBJ(
    "origin",
    sheep,
    "Abilities\\Spells\\Human\\DivineShield\\DivineShieldTarget.mdl",
  );
  udg_switchEffect[GetConvertedPlayerId(GetOwningPlayer(GetLastCreatedUnit()!))] = GetLastCreatedEffectBJ()!;
  cid = GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!));
  const timers = [
    [udg_redTimer, udg_redHideTimer],
    [udg_blueTimer, udg_blueHideTimer],
    [udg_tealTimer, udg_tealHideTimer],
    [udg_purpleTimer, udg_purpleHideTimer],
    [udg_yellowTimer, udg_yellowHideTimer],
    [udg_orangeTimer, udg_orangeHideTimer],
    [udg_greenTimer, udg_greenHideTimer],
    [udg_pinkTimer, udg_pinkHideTimer],
    [udg_greyTimer, udg_greyHideTimer],
    [udg_lbTimer, udg_lbHideTimer],
    [udg_dgTimer, udg_dgHideTimer],
    [udg_brownTimer, udg_brownHideTimer],
    [udg_maroonTimer, udg_maroonHideTimer],
    [udg_navyTimer, udg_navyHideTimer],
    [udg_turquoiseTimer, udg_turquoiseHideTimer],
    [udg_violetTimer, udg_violetHideTimer],
    [udg_wheatTimer, udg_wheatHideTimer],
    [udg_peachTimer, udg_peachHideTimer],
    [udg_mintTimer, udg_mintHideTimer],
    [udg_lavenderTimer, udg_lavenderHideTimer],
    [udg_coalTimer, udg_coalHideTimer],
    [udg_snowTimer, udg_snowHideTimer],
    [udg_emeraldTimer, udg_emeraldHideTimer],
    [udg_peanutTimer, udg_peanutHideTimer],
  ];
  TimerStart(
    timers[GetPlayerId(GetOwningPlayer(GetKillingUnit()!))][0],
    udg_sheepInvul,
    false,
    null,
  );
  TimerStart(
    timers[GetPlayerId(GetOwningPlayer(GetKillingUnit()!))][1],
    udg_sheepInvul,
    false,
    null,
  );
  udg_switch[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] = 2;
  PanCameraToTimedForPlayer(
    GetOwningPlayer(GetTriggerUnit()!),
    GetUnitX(GetTriggerUnit()!),
    GetUnitY(GetTriggerUnit()!),
    0,
  );
  udg_atempgroup = GetUnitsOfPlayerAll(GetOwningPlayer(GetTriggerUnit()!))!;
  ForGroupBJ(udg_atempgroup, removeEnumUnit);
  DestroyGroup(udg_atempgroup);
  bj_lastCreatedUnit = CreateUnit(
    GetOwningPlayer(GetTriggerUnit()!),
    unstuckType,
    RandomX(gg_rct_unstuckZone),
    RandomY(gg_rct_unstuckZone),
    0,
  );
  SelectUnitForPlayerSingle(
    GetLastCreatedUnit()!,
    GetOwningPlayer(GetTriggerUnit()!),
  );
  ForceUICancelBJ(GetOwningPlayer(GetTriggerUnit()!));
  RemoveUnit(GetLastCreatedUnit()!);
  ForceRemovePlayerSimple(GetOwningPlayer(GetTriggerUnit()!), udg_Sheep);
  ForceAddPlayerSimple(GetOwningPlayer(GetTriggerUnit()!), udg_Wolf);
  SetPlayerAllianceStateBJ(
    Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    GetOwningPlayer(GetKillingUnit()!),
    bj_ALLIANCE_NEUTRAL_VISION,
  );
  SetPlayerAllianceStateBJ(
    Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    GetOwningPlayer(GetDyingUnit()!),
    bj_ALLIANCE_NEUTRAL,
  );
  ForForce(udg_Sheep, adjustAlliances1);
  ForForce(udg_Wolf, adjustAlliances2);
  udg_switch[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = 1;
  udg_sheepLastGame[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = false;
  udg_sheepLastGame[
    GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
  ] = true;
  TriggerExecute(gg_trg_setupLeaderboard);
  if (
    udg_AFK[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] ===
      AFK_AFK_DURING_ROUND
  ) {
    ForForce(udg_Sheep, () =>
      SetPlayerAllianceStateBJ(
        GetOwningPlayer(GetKillingUnit()!),
        GetEnumPlayer()!,
        bj_ALLIANCE_ALLIED_ADVUNITS,
      ));
  }
  if (CountPlayersInForceBJ(udg_Sheep) === 0) TriggerExecute(gg_trg_wolvesWin);
  TimerStart(
    timers[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))][0],
    udg_wolfSpawn,
    false,
    null,
  );
  TimerStart(
    timers[GetPlayerId(GetOwningPlayer(GetTriggerUnit()!))][1],
    5,
    false,
    null,
  );
  displayTimedTextToAll(`${UnitEx.fromKilling()!.owner} has taken ${UnitEx.fromEvent()!.owner}'s sheep.`);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sheepSwitch: () => void;
}
InitTrig_sheepSwitch = () => {
  gg_trg_sheepSwitch = CreateTrigger();
  DisableTrigger(gg_trg_sheepSwitch);
  TriggerRegisterAnyUnitEventBJ(gg_trg_sheepSwitch, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_sheepSwitch,
    Condition(() =>
      GetUnitTypeId(GetTriggerUnit()!) === sheepType &&
      !IsUnitIllusion(GetDyingUnit()!)
    ),
  );
  TriggerAddAction(gg_trg_sheepSwitch, Trig_sheepSwitch_Actions);
};
