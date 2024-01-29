import { MapPlayerEx } from "handles/MapPlayerEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Alert_Sheep_Death: () => void;
}
InitTrig_Alert_Sheep_Death = () => {
  gg_trg_Alert_Sheep_Death = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Alert_Sheep_Death, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_Alert_Sheep_Death,
    Condition(() => {
      const u = GetDyingUnit()!;
      return GetUnitTypeId(u) === sheepType && !IsUnitIllusion(u) && !udg_switchOn && !vampOn &&
        !udg_humiliationCheck[GetConvertedPlayerId(GetOwningPlayer(u))] && udg_firstBlood;
    }),
  );
  TriggerAddAction(gg_trg_Alert_Sheep_Death, () =>
    displayTimedTextToAll(
      `                              ${MapPlayerEx.fromKillingUnit()} has captured ${MapPlayerEx.fromDyingUnit()}`,
    ));
};
