//===========================================================================
// Trigger: Alert Sheep Death
//===========================================================================
const Trig_Alert_Sheep_Death_Conditions = (): boolean => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === FourCC("uC04")))) {
    return false;
  }
  if ((!(IsUnitIllusionBJ(GetDyingUnit()!) === false))) {
    return false;
  }
  if ((!(udg_switchOn === false))) {
    return false;
  }
  if (
    (!(udg_humiliationCheck[
      GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))
    ] === false))
  ) {
    return false;
  }
  if ((!(udg_firstBlood === true))) {
    return false;
  }
  return true;
};

const Trig_Alert_Sheep_Death_Actions = (): void => {
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    ("                              " +
      udg_colorString[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
      ]) +
      (GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!)) +
        ("|r has captured " +
          (udg_colorString[
            GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))
          ] + GetPlayerName(GetOwningPlayer(GetDyingUnit()!))))),
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Alert_Sheep_Death: () => void;
}
InitTrig_Alert_Sheep_Death = (): void => {
  gg_trg_Alert_Sheep_Death = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_Alert_Sheep_Death,
    EVENT_PLAYER_UNIT_DEATH,
  );
  TriggerAddCondition(
    gg_trg_Alert_Sheep_Death,
    Condition(Trig_Alert_Sheep_Death_Conditions),
  );
  TriggerAddAction(gg_trg_Alert_Sheep_Death, Trig_Alert_Sheep_Death_Actions);
};
