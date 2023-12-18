import { MapPlayerEx } from "handles/MapPlayerEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

const Trig_Last_Sheep_Standing_Conditions = () => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === sheepType))) {
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

const Trig_Last_Sheep_Standing_Func001Func002C = () => {
  if ((!(CountPlayersInForceBJ(udg_Spirit) >= 1))) {
    return false;
  }
  return true;
};

const Trig_Last_Sheep_Standing_Func001A = () => {
  udg_lssCounter[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_lssCounter[GetConvertedPlayerId(GetEnumPlayer()!)] + 1;
  if ((Trig_Last_Sheep_Standing_Func001Func002C())) {
    const p = MapPlayerEx.fromEnum();
    displayTimedTextToAll(`                              ${p?.hex}It really is ${p?.name}!`, 5);
  }
};

const Trig_Last_Sheep_Standing_Actions = () => {
  ForForce(udg_Sheep, Trig_Last_Sheep_Standing_Func001A);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Last_Sheep_Standing: () => void;
}
InitTrig_Last_Sheep_Standing = () => {
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
