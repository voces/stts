import { UNIT_TYPE_ID_FROST_FARM } from "constants";

const Trig_sheepDamage_Actions = () => {
  const target = BlzGetEventDamageTarget()!;
  const source = GetEventDamageSource()!;
  if (GetUnitTypeId(target) === sheepType) {
    if (IsUnitIllusion(source)) BlzSetEventDamage(0);
    if (GetUnitTypeId(source) === UNIT_TYPE_ID_FROST_FARM) BlzSetEventDamage(1);
    if (GetWidgetLife(target) - GetEventDamage() < 0.405) {
      ForceUICancelBJ(GetOwningPlayer(target));
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sheepDamage: () => void;
}
InitTrig_sheepDamage = () => {
  gg_trg_sheepDamage = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_sheepDamage, EVENT_PLAYER_UNIT_DAMAGED);
  TriggerAddAction(gg_trg_sheepDamage, Trig_sheepDamage_Actions);
};
