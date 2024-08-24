import { setTimeout } from "util/setTimeout";

const cloakAbilityMap = [
  0,
  FourCC("A013"),
  FourCC("A014"),
  FourCC("A017"),
  FourCC("A01C"),
  FourCC("A01M"),
  FourCC("A01N"),
];

const Trig_Getting_Cloak_Actions = () => {
  const u = GetTriggerUnit()!;
  let itm = GetManipulatedItem();
  setTimeout(0.01, () => {
    let cloaks = 0;
    for (let i = 0; i < bj_MAX_INVENTORY; i++) {
      if (itm && GetItemTypeId(UnitItemInSlot(u, i)!) === FourCC("I001")) cloaks++;
    }
    if (cloaks > 1) UnitRemoveAbility(u, cloakAbilityMap[cloaks - 1]);
    if (cloaks > 0) UnitAddAbility(u, cloakAbilityMap[cloaks]);
    if (cloaks < 6) UnitRemoveAbility(u, cloakAbilityMap[cloaks + 1]);
  });
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Getting_Cloak: () => void;
}
InitTrig_Getting_Cloak = () => {
  gg_trg_Getting_Cloak = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Getting_Cloak, EVENT_PLAYER_UNIT_PICKUP_ITEM);
  TriggerRegisterAnyUnitEventBJ(gg_trg_Getting_Cloak, EVENT_PLAYER_UNIT_DROP_ITEM);
  TriggerAddCondition(gg_trg_Getting_Cloak, Condition(() => GetItemTypeId(GetManipulatedItem()!) === FourCC("I001")));
  TriggerAddAction(gg_trg_Getting_Cloak, Trig_Getting_Cloak_Actions);
};
