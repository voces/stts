//===========================================================================
// Trigger: Humil Check
//===========================================================================
const Trig_Humil_Check_Conditions = (): boolean => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === FourCC("uC04")))) {
    return false;
  }
  if ((!(IsUnitIllusionBJ(GetDyingUnit()!) === false))) {
    return false;
  }
  if (
    (!(udg_humiliationCheck[
      GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))
    ] === true))
  ) {
    return false;
  }
  return true;
};

const Trig_Humil_Check_Actions = (): void => {
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    ("                              " +
      udg_colorString[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))]) +
      (GetPlayerName(GetOwningPlayer(GetDyingUnit()!)) +
        ("|r  got humiliated by " +
          (udg_colorString[
            GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
          ] + GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!))))),
  );
  PlaySoundBJ(gg_snd_humiliation);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Humil_Check: () => void;
}
InitTrig_Humil_Check = (): void => {
  gg_trg_Humil_Check = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Humil_Check, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_Humil_Check,
    Condition(Trig_Humil_Check_Conditions),
  );
  TriggerAddAction(gg_trg_Humil_Check, Trig_Humil_Check_Actions);
};
