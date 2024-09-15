import { UnitEx } from "handles/UnitEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

const Trig_Str_Pot_Kill_Conditions = () => {
  if (GetUnitTypeId(GetDyingUnit()!) !== sheepType) return false;
  if (IsUnitIllusion(GetDyingUnit()!)) return false;
  if (!UnitHasBuffBJ(GetKillingUnit()!, FourCC("B001")) && !UnitHasBuffBJ(GetKillingUnit()!, FourCC("B008"))) {
    return false;
  }
  return true;
};

const Trig_Str_Pot_Kill_Actions = () => {
  const u = UnitEx.fromDying()!;
  ExplodeUnitBJ(CreateUnit(Player(PLAYER_NEUTRAL_PASSIVE)!, FourCC("hfoo"), u.x, u.y, 0)!);
  displayTimedTextToAll(`                              ${UnitEx.fromKilling()?.owner} headshot ${u.owner}`, 5);
  PlaySoundBJ(gg_snd_headshot);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Str_Pot_Kill: () => void;
}
InitTrig_Str_Pot_Kill = () => {
  gg_trg_Str_Pot_Kill = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Str_Pot_Kill, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_Str_Pot_Kill, Condition(Trig_Str_Pot_Kill_Conditions));
  TriggerAddAction(gg_trg_Str_Pot_Kill, Trig_Str_Pot_Kill_Actions);
};
