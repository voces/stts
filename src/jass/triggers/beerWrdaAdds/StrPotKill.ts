//===========================================================================
// Trigger: Str Pot Kill
//===========================================================================
const Trig_Str_Pot_Kill_Func003C = () => {
  if ((UnitHasBuffBJ(GetKillingUnit()!, FourCC("B001")) === true)) {
    return true;
  }
  if ((UnitHasBuffBJ(GetKillingUnit()!, FourCC("B008")) === true)) {
    return true;
  }
  return false;
};

const Trig_Str_Pot_Kill_Conditions = () => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === sheepType))) {
    return false;
  }
  if ((!(IsUnitIllusionBJ(GetDyingUnit()!) === false))) {
    return false;
  }
  if ((!Trig_Str_Pot_Kill_Func003C())) {
    return false;
  }
  return true;
};

const Trig_Str_Pot_Kill_Actions = () => {
  udg_atemploc = GetUnitLoc(GetDyingUnit()!);
  CreateNUnitsAtLoc(
    1,
    FourCC("hfoo"),
    Player(PLAYER_NEUTRAL_PASSIVE)!,
    GetUnitLoc(GetDyingUnit()!),
    bj_UNIT_FACING,
  );
  RemoveLocation(udg_atemploc);
  ExplodeUnitBJ(GetLastCreatedUnit()!);
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    ("                              " +
      udg_colorString[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
      ]) +
      (GetPlayerName(GetOwningPlayer(GetKillingUnit()!)) +
        ("|r headshot " +
          (udg_colorString[
            GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))
          ] + GetPlayerName(GetOwningPlayer(GetDyingUnit()!))))),
  );
  PlaySoundBJ(gg_snd_headshot);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Str_Pot_Kill: () => void;
}
InitTrig_Str_Pot_Kill = () => {
  gg_trg_Str_Pot_Kill = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Str_Pot_Kill, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_Str_Pot_Kill,
    Condition(Trig_Str_Pot_Kill_Conditions),
  );
  TriggerAddAction(gg_trg_Str_Pot_Kill, Trig_Str_Pot_Kill_Actions);
};
