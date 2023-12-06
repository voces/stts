//===========================================================================
// Trigger: Last Sheep Standing
//===========================================================================
const Trig_Last_Sheep_Standing_Conditions = (): boolean => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === FourCC("uC04")))) {
    return false;
  }
  if ((!(IsUnitIllusionBJ(GetDyingUnit()!) === false))) {
    return false;
  }
  if ((!(CountPlayersInForceBJ(udg_Sheep) === 1))) {
    return false;
  }
  if ((!(udg_switchOn === false))) {
    return false;
  }
  return true;
};

const Trig_Last_Sheep_Standing_Func001Func002C = (): boolean => {
  if ((!(CountPlayersInForceBJ(udg_Spirit) >= 1))) {
    return false;
  }
  return true;
};

const Trig_Last_Sheep_Standing_Func001A = (): void => {
  udg_lssCounter[GetConvertedPlayerId(GetEnumPlayer()!)] =
    udg_lssCounter[GetConvertedPlayerId(GetEnumPlayer()!)] + 1;
  if ((Trig_Last_Sheep_Standing_Func001Func002C())) {
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      ("                              " +
        udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)]) +
        ("It really is " + (GetPlayerName(GetEnumPlayer()!) + "!")),
    );
  }
};

const Trig_Last_Sheep_Standing_Actions = (): void => {
  ForForce(udg_Sheep, Trig_Last_Sheep_Standing_Func001A);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Last_Sheep_Standing: () => void;
}
InitTrig_Last_Sheep_Standing = (): void => {
  gg_trg_Last_Sheep_Standing = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_Last_Sheep_Standing,
    EVENT_PLAYER_UNIT_DEATH,
  );
  TriggerAddCondition(
    gg_trg_Last_Sheep_Standing,
    Condition(Trig_Last_Sheep_Standing_Conditions),
  );
  TriggerAddAction(
    gg_trg_Last_Sheep_Standing,
    Trig_Last_Sheep_Standing_Actions,
  );
};
