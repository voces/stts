import { UnitEx } from "handles/UnitEx";
import { setTimeout } from "util/setTimeout";
import { Effect } from "w3ts";

const Trig_Nuke_Recipe_Actions = () => {
  const u = GetTriggerUnit()!;
  let stock = 0;
  for (let i = 0; i < bj_MAX_INVENTORY; i++) {
    const itm = UnitItemInSlot(u, i);
    if (itm && GetItemTypeId(itm) === FourCC("I002")) {
      stock += GetItemCharges(itm);
    }
  }

  if (stock < 3) return;

  let remainingToRemove = 3;
  for (let i = 0; i < bj_MAX_INVENTORY; i++) {
    const itm = UnitItemInSlot(u, i);
    if (itm && GetItemTypeId(itm) === FourCC("I002")) {
      const current = GetItemCharges(itm);
      if (current > remainingToRemove) SetItemCharges(itm, current - remainingToRemove);
      else RemoveItem(itm);
      remainingToRemove -= current;
    }
  }

  UnitAddItemById(u, FourCC("I00R"));
  const e = Effect.createAttachment(
    "Abilities\\Spells\\Human\\HolyBolt\\HolyBoltSpecialArt.mdl",
    UnitEx.fromHandle(u),
    "overhead",
  );
  setTimeout(1, () => e?.destroy());
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Nuke_Recipe: () => void;
}
InitTrig_Nuke_Recipe = () => {
  gg_trg_Nuke_Recipe = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_Nuke_Recipe, EVENT_PLAYER_UNIT_PICKUP_ITEM);
  TriggerAddCondition(
    gg_trg_Nuke_Recipe,
    Condition(() => GetItemTypeId(GetManipulatedItem()!) === FourCC("I002") && CountPlayersInForceBJ(udg_Sheep) > 1),
  );
  TriggerAddAction(gg_trg_Nuke_Recipe, Trig_Nuke_Recipe_Actions);
};
