//===========================================================================
// Trigger: useItem
//===========================================================================

import { UnitEx } from "handles/UnitEx";
import { disableUnit, enableUnit } from "util/disableUnit";
import { setTimeout } from "util/setTimeout";
import { Effect, Trigger } from "w3ts";

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

  if (usedItemType === FourCC("I00G")) sheepLocater();
  else if (usedItemType === FourCC("I007")) UnitAddAbility(GetTriggerUnit()!, FourCC("A00E"));
  else if (usedItemType === FourCC("I000")) UnitAddAbility(GetTriggerUnit()!, FourCC("A00W"));
  else if (usedItemType === FourCC("I00X")) {
    const image = FirstOfGroup(
      GetUnitsOfPlayerMatching(
        GetOwningPlayer(GetTriggerUnit()!),
        Filter(() => {
          const u = GetFilterUnit()!;
          return IsUnitIllusion(u) && GetUnitTypeId(u) === shepType;
        }),
      )!,
    );

    SetItemCharges(GetManipulatedItem()!, 1);

    if (!image) return;

    const real = GetTriggerUnit()!;
    disableUnit(image);
    SetUnitAnimation(real, "spell");

    const xReal = GetUnitX(real);
    const yReal = GetUnitY(real);
    const xImage = GetUnitX(image);
    const yImage = GetUnitY(image);
    const e1 = Effect.create("Abilities\\Spells\\Human\\MassTeleport\\MassTeleportTo", xReal, yReal);
    const e2 = Effect.create("Abilities\\Spells\\Human\\MassTeleport\\MassTeleportTo", xImage, yImage);
    const timeout = setTimeout(2, () => {
      RemoveItem(GetManipulatedItem()!);
      SetItemCharges(GetManipulatedItem()!, 0);
      t.destroy();
      e1?.destroy();
      e2?.destroy();

      if (UnitAlive(real)) {
        SetUnitX(real, xImage);
        SetUnitY(real, yImage);
        if (UnitAlive(image)) {
          SetUnitX(image, xReal);
          SetUnitY(image, yReal);
          enableUnit(image);
        }
        const e3 = Effect.create("Abilities\\Spells\\Human\\MassTeleport\\MassTeleportTarget", xReal, yReal);
        const e4 = Effect.create("Abilities\\Spells\\Human\\MassTeleport\\MassTeleportTarget", xImage, yImage);
        setTimeout(5, () => {
          e3?.destroy();
          e4?.destroy();
        });
      }
    });

    const t = Trigger.create();
    t.registerUnitEvent(UnitEx.fromHandle(real), EVENT_UNIT_ISSUED_ORDER);
    t.registerUnitEvent(UnitEx.fromHandle(real), EVENT_UNIT_ISSUED_POINT_ORDER);
    t.registerUnitEvent(UnitEx.fromHandle(real), EVENT_UNIT_ISSUED_TARGET_ORDER);
    t.addAction(() => {
      e1?.destroy();
      e2?.destroy();
      timeout.cancel();
      t.destroy();
    });
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
