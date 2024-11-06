import { UnitEx } from "handles/UnitEx";

const sheepLocaterPing = () => {
  const u = UnitEx.fromEnum();
  if (!u || u.isIllusion()) return;

  PingMinimapForForce(udg_Wolf, u.x, u.y, 2);
};

const sheepLocater = () => {
  const g = GetUnitsOfTypeIdAll(sheepType)!;
  ForGroup(g, sheepLocaterPing);
  DestroyGroup(g);
};

const Trig_useItem_Actions = () => {
  const usedItem = GetManipulatedItem()!;
  const usedItemType = GetItemTypeId(usedItem);

  if (usedItemType === FourCC("I00G")) sheepLocater();
  else if (usedItemType === FourCC("I007")) UnitAddAbility(GetTriggerUnit()!, FourCC("A00E"));
  else if (usedItemType === FourCC("I000")) UnitAddAbility(GetTriggerUnit()!, FourCC("A00W"));
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_useItem: () => void;
}
InitTrig_useItem = () => {
  gg_trg_useItem = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_useItem, EVENT_PLAYER_UNIT_USE_ITEM);
  TriggerAddAction(gg_trg_useItem, Trig_useItem_Actions);
};
