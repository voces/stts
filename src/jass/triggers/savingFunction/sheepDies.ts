import { president, terrain } from "settings/settings";
import { withPlayerUnits, withUnitsOfType } from "util/withGroup";
import { maybeApplySecondWind } from "functions/secondWind";
import { gsDistributeGold } from "functions/gs";
import { MapPlayerEx } from "handles/MapPlayerEx";

const Trig_sheepDies_Actions = () => {
  const dyingPlayer = GetOwningPlayer(GetTriggerUnit()!);
  const dyingPlayerId = GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!));
  const killingPlayer = GetOwningPlayer(GetKillingUnit()!);
  const killingPlayerId = GetConvertedPlayerId(killingPlayer);
  const x = GetUnitX(GetDyingUnit()!);
  const y = GetUnitY(GetDyingUnit()!);
  const f = GetUnitFacing(GetDyingUnit()!);

  if (!president.enabled) MapPlayerEx.fromHandle(dyingPlayer).died();

  PauseTimer(udg_sheepTimer[dyingPlayerId]);

  if (udg_wispZoom[dyingPlayerId] > 0) {
    SetCameraFieldForPlayer(dyingPlayer, CAMERA_FIELD_TARGET_DISTANCE, udg_wispZoom[dyingPlayerId], 0);
  }

  ForceUICancelBJ(dyingPlayer);

  udg_hideEsc[dyingPlayerId] = true;
  udg_kills[killingPlayerId]++;
  udg_totalKills[killingPlayerId] = (udg_totalKills[killingPlayerId] ?? 0) + 1;
  udg_farmCount[dyingPlayerId] = 0;

  const sheepCount = CountPlayersInForceBJ(udg_Sheep);

  if (sheepCount > 0) {
    const wolfCount = CountPlayersInForceBJ(udg_Wolf);
    const sheepAndSpiritCount = sheepCount + CountPlayersInForceBJ(udg_Spirit);

    // double division because this baked logic was broken; in 2v4, all wolves get 6 gold
    const teamIncome = Math.floor(100 / wolfCount / wolfCount);
    const killerIncome = teamIncome + 10 * sheepAndSpiritCount;

    withUnitsOfType(shepType, (g) =>
      g.forEach((u) => {
        const p = u.owner.handle;
        const income = p === killingPlayer ? killerIncome : teamIncome;
        if (!u.isIllusion()) AdjustPlayerStateBJ(income, p!, PLAYER_STATE_RESOURCE_GOLD);
        GoldText(income, u.handle);
      }));
  }

  withPlayerUnits(dyingPlayer, (g) => g.forEach((u) => u.destroy()));

  ForceRemovePlayerSimple(dyingPlayer, udg_Sheep);
  ForceAddPlayerSimple(dyingPlayer, udg_Spirit);

  if (sheepCount === 1) TriggerExecute(gg_trg_wolvesWin);
  else if (president.enabled) {
    if (president.president!.handle === dyingPlayer) {
      ForForce(udg_Sheep, () => {
        const p = GetEnumPlayer()!;
        ForceRemovePlayer(udg_Sheep, p);
        ForceAddPlayer(udg_Spirit, p);
      });
      TriggerExecute(gg_trg_wolvesWin);
    } else {
      const u = CreateUnit(dyingPlayer, wispType, x, y, f)!;
      PanCameraToTimedForPlayer(dyingPlayer, GetUnitX(u)!, GetUnitY(u)!, 0);
      SelectUnitForPlayerSingle(u, dyingPlayer);
      transferGold(
        dyingPlayer,
        president.president!.handle,
        GetPlayerState(dyingPlayer, PLAYER_STATE_RESOURCE_GOLD),
        TRANSFER_DISPLAY_INVOLVED,
      );
    }
  } else {
    const u = CreateUnit(dyingPlayer, wispType, RandomX(terrain.wisp), RandomY(terrain.wisp), 270)!;
    PanCameraToTimedForPlayer(dyingPlayer, GetUnitX(u)!, GetUnitY(u)!, 0);
    SelectUnitForPlayerSingle(u, dyingPlayer);
    gsDistributeGold(dyingPlayer, true, TRANSFER_DISPLAY_INVOLVED);
    SetUnitAnimation(
      CreateUnit(killingPlayer, FourCC(GetRandomInt(0, 1) === 0 ? "nska" : "nske"), x, y, f)!,
      "birth",
    );
  }

  TriggerExecute(gg_trg_setupLeaderboard);

  withUnitsOfType(shepType, (wolves) => wolves.forEach((wolf) => maybeApplySecondWind(wolf.handle)));

  const timers = [
    udg_redHideTimer,
    udg_blueHideTimer,
    udg_tealHideTimer,
    udg_purpleHideTimer,
    udg_yellowHideTimer,
    udg_orangeHideTimer,
    udg_greenHideTimer,
    udg_pinkHideTimer,
    udg_greyHideTimer,
    udg_lbHideTimer,
    udg_dgHideTimer,
    udg_brownHideTimer,
    udg_maroonHideTimer,
    udg_navyHideTimer,
    udg_turquoiseHideTimer,
    udg_violetHideTimer,
    udg_wheatHideTimer,
    udg_peachHideTimer,
    udg_mintHideTimer,
    udg_lavenderHideTimer,
    udg_coalHideTimer,
    udg_snowHideTimer,
    udg_emeraldHideTimer,
    udg_peanutHideTimer,
  ];

  TimerStart(timers[GetPlayerId(dyingPlayer)], 5, false, null);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sheepDies: () => void;
}
InitTrig_sheepDies = () => {
  gg_trg_sheepDies = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_sheepDies, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_sheepDies,
    Condition(() =>
      GetUnitTypeId(GetDyingUnit()!) === sheepType &&
      !IsUnitIllusion(GetDyingUnit()!)
    ),
  );
  TriggerAddAction(gg_trg_sheepDies, Trig_sheepDies_Actions);
};
