import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";
import { terrain } from "settings/terrain";
import { maybeApplySecondWind } from "functions/secondWind";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = Trigger.create();

  const timers = [
    udg_redTimer,
    udg_blueTimer,
    udg_tealTimer,
    udg_purpleTimer,
    udg_yellowTimer,
    udg_orangeTimer,
    udg_greenTimer,
    udg_pinkTimer,
    udg_greyTimer,
    udg_lbTimer,
    udg_dgTimer,
    udg_brownTimer,
    udg_maroonTimer,
    udg_navyTimer,
    udg_turquoiseTimer,
    udg_violetTimer,
    udg_wheatTimer,
    udg_peachTimer,
    udg_mintTimer,
    udg_lavenderTimer,
    udg_coalTimer,
    udg_snowTimer,
    udg_emeraldTimer,
    udg_peanutTimer,
  ];
  for (let i = 0; i < timers.length; i++) t.registerTimerExpireEvent(timers[i]);

  t.addAction(() => {
    const pid = timers.indexOf(GetExpiredTimer()!);
    const switchStatus = udg_switch[pid + 1];
    udg_switch[pid + 1] = 0;

    if (switchStatus === 2) {
      SetUnitInvulnerable(udg_unit[pid + 1], false);
      DestroyEffectBJ(udg_switchEffect[pid + 1]);
      return;
    }

    if (switchStatus !== 1) return;

    DisplayTextToForce(
      GetPlayersAll()!,
      `                              ${udg_colorString[pid + 1]}${GetPlayerName(Player(pid)!)}'s|r wolf has spawned!`,
    );
    const wolf = udg_unit[pid + 1] = CreateUnit(
      Player(pid)!,
      shepType,
      GetRectCenterX(terrain.wolf),
      GetRectCenterY(terrain.wolf),
      270,
    )!;
    PanCameraToTimedForPlayer(
      Player(pid)!,
      GetUnitX(wolf),
      GetUnitY(wolf),
      0,
    );
    SuspendHeroXP(wolf, true);
    SelectUnitForPlayerSingle(wolf, Player(pid)!);
    maybeApplySecondWind(wolf);

    ForForce(udg_Wolf, () => {
      if (
        udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] ===
          AFK_AFK_DURING_ROUND
      ) {
        SetPlayerAllianceStateBJ(
          GetEnumPlayer()!,
          Player(pid)!,
          bj_ALLIANCE_ALLIED_ADVUNITS,
        );
      }
    });
  });
});
