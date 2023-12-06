//===========================================================================
// Trigger: countturquoise
//===========================================================================
const Trig_countturquoise_Func002Func001Func007Func001A = (): void => {
  SetPlayerAllianceStateBJ(
    ConvertedPlayer(udg_atempint)!,
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_ADVUNITS,
  );
};

const Trig_countturquoise_Func002Func001Func007C = (): boolean => {
  if ((!(udg_AFK[udg_atempint] === 4))) {
    return false;
  }
  return true;
};

const Trig_countturquoise_Func002Func001Func008Func001C = (): boolean => {
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 4))) {
    return false;
  }
  return true;
};

const Trig_countturquoise_Func002Func001Func008A = (): void => {
  if ((Trig_countturquoise_Func002Func001Func008Func001C())) {
    SetPlayerAllianceStateBJ(
      GetEnumPlayer()!,
      ConvertedPlayer(udg_atempint)!,
      bj_ALLIANCE_ALLIED_ADVUNITS,
    );
  }
};

const Trig_countturquoise_Func002Func001C = (): boolean => {
  if ((!(udg_switch[udg_atempint] === 1))) {
    return false;
  }
  return true;
};

const Trig_countturquoise_Func002C = (): boolean => {
  if ((!(udg_switch[udg_atempint] === 2))) {
    return false;
  }
  return true;
};

const Trig_countturquoise_Actions = (): void => {
  udg_atempint = 15;
  if ((Trig_countturquoise_Func002C())) {
    SetUnitInvulnerable(udg_unit[udg_atempint], false);
    DestroyEffectBJ(udg_switchEffect[udg_atempint]);
  } else {
    if ((Trig_countturquoise_Func002Func001C())) {
      DisplayTextToForce(
        GetPlayersAll()!,
        "                              " +
          ((udg_colorString[udg_atempint] +
            GetPlayerName(ConvertedPlayer(udg_atempint)!)) +
            "'s|r wolf has spawned!"),
      );
      bj_lastCreatedUnit = CreateUnit(
        Player(14)!,
        shep,
        GetRectCenterX(wolfSpawn),
        GetRectCenterY(wolfSpawn),
        270,
      );
      PanCameraToTimedForPlayer(
        Player(14)!,
        GetUnitX(GetLastCreatedUnit()!),
        GetUnitY(GetLastCreatedUnit()!),
        0,
      );
      SuspendHeroXPBJ(false, GetLastCreatedUnit()!);
      udg_unit[udg_atempint] = GetLastCreatedUnit()!;
      SelectUnitForPlayerSingle(
        GetLastCreatedUnit()!,
        ConvertedPlayer(udg_atempint)!,
      );
      if ((Trig_countturquoise_Func002Func001Func007C())) {
        ForForce(udg_Wolf, Trig_countturquoise_Func002Func001Func007Func001A);
      }
      ForForce(udg_Wolf, Trig_countturquoise_Func002Func001Func008A);
    }
  }
  udg_switch[udg_atempint] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_countturquoise: () => void;
}
InitTrig_countturquoise = (): void => {
  gg_trg_countturquoise = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_countturquoise, udg_turquoiseTimer);
  TriggerAddAction(gg_trg_countturquoise, Trig_countturquoise_Actions);
};
