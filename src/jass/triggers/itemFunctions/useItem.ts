//===========================================================================
// Trigger: useItem
//===========================================================================

const sheepLocaterPing = () => {
  if (IsUnitIllusion(GetEnumUnit()!)) {
    return;
  }

  PingMinimapForForce(
    udg_Wolf,
    GetUnitX(GetEnumUnit()!),
    GetUnitY(GetEnumUnit()!),
    2,
  );
};

const sheepLocater = () => {
  const g = GetUnitsOfTypeIdAll(sheepType)!;
  ForGroup(g, sheepLocaterPing);
  DestroyGroup(g);
};

const Trig_useItem_Actions = () => {
  const usedItemType = GetItemTypeId(GetManipulatedItem()!);

  if (usedItemType === FourCC("I00G")) {
    sheepLocater();
  } else if (usedItemType === FourCC("I007")) {
    UnitAddAbility(GetTriggerUnit()!, FourCC("A00E"));
  } else if (usedItemType === FourCC("I000")) {
    UnitAddAbility(GetTriggerUnit()!, FourCC("A00W"));
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_useItem: () => void;
}
InitTrig_useItem = () => {
  gg_trg_useItem = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_useItem, EVENT_PLAYER_UNIT_USE_ITEM);
  TriggerAddAction(gg_trg_useItem, Trig_useItem_Actions);
};
