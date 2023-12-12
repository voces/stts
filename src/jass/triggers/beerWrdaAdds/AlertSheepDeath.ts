//===========================================================================
// Trigger: Alert Sheep Death
//===========================================================================
const Trig_Alert_Sheep_Death_Conditions = () => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === sheepType))) {
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

const Trig_Alert_Sheep_Death_Actions = () => {
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    ("                              " +
      udg_colorString[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
      ]) +
      (GetPlayerName(GetOwningPlayer(GetKillingUnit()!)) +
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
InitTrig_Alert_Sheep_Death = () => {
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
