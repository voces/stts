import { UnitEx } from "handles/UnitEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

const Trig_Humil_Check_Conditions = () => {
  if (GetUnitTypeId(GetDyingUnit()!) !== sheepType) return false;
  if (IsUnitIllusion(GetDyingUnit()!)) return false;
  if (!udg_humiliationCheck[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))]) return false;
  return true;
};

const Trig_Humil_Check_Actions = () => {
  displayTimedTextToAll(
    `                              ${UnitEx.fromDying()?.owner} got humiliated by ${UnitEx.fromKilling()?.owner}`,
    5,
  );
  PlaySoundBJ(gg_snd_humiliation);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Humil_Check: () => void;
}
InitTrig_Humil_Check = () => {
  gg_trg_Humil_Check = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Humil_Check, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_Humil_Check, Condition(Trig_Humil_Check_Conditions));
  TriggerAddAction(gg_trg_Humil_Check, Trig_Humil_Check_Actions);
};
