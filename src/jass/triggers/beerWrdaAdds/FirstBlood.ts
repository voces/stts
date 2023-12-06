//===========================================================================
// Trigger: First Blood
//===========================================================================
const Trig_First_Blood_Conditions = (): boolean => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === FourCC("uC04")))) {
    return false;
  }
  if ((!(IsUnitIllusionBJ(GetDyingUnit()!) === false))) {
    return false;
  }
  if ((!(udg_firstBlood === false))) {
    return false;
  }
  return true;
};

const Trig_First_Blood_Func005Func002C = (): boolean => {
  if ((!(TimerGetElapsed(udg_Timer) <= udg_qDeath))) {
    return false;
  }
  return true;
};

const Trig_First_Blood_Func005C = (): boolean => {
  if (
    (!(TimerGetElapsed(udg_Timer) <
      udg_QDeathTime[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))]))
  ) {
    return false;
  }
  return true;
};

const Trig_First_Blood_Actions = (): void => {
  udg_firstBlood = true;
  udg_firstbloodDeathCounter[
    GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))
  ] = udg_firstbloodDeathCounter[
    GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))
  ] + 1;
  udg_firstbloodKillCounter[
    GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
  ] = udg_firstbloodKillCounter[
    GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
  ] + 1;
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    ("                              " +
      udg_colorString[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
      ]) +
      (GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!)) +
        ("|r scored firstblood on " +
          (udg_colorString[
            GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))
          ] + GetPlayerName(GetOwningPlayer(GetDyingUnit()!))))),
  );
  if ((Trig_First_Blood_Func005C())) {
    udg_QDeathTime[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))] =
      TimerGetElapsed(udg_Timer);
    if ((Trig_First_Blood_Func005Func002C())) {
      udg_qDeath = TimerGetElapsed(udg_Timer);
      udg_qDeathString = udg_colorString[
        GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))
      ] + GetPlayerName(GetOwningPlayer(GetDyingUnit()!));
    }
  }
  PlaySoundBJ(gg_snd_firstblood);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_First_Blood: () => void;
}
InitTrig_First_Blood = (): void => {
  gg_trg_First_Blood = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_First_Blood, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_First_Blood,
    Condition(Trig_First_Blood_Conditions),
  );
  TriggerAddAction(gg_trg_First_Blood, Trig_First_Blood_Actions);
};
