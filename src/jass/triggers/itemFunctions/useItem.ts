import { UnitEx } from "handles/UnitEx";
import { setTimeout } from "util/setTimeout";
import { Effect, Trigger } from "w3ts";

const sheepLocaterPing = () => {
  if (IsUnitIllusion(GetEnumUnit()!) || BlzGetUnitAbility(GetEnumUnit()!, FourCC("Aloc"))) {
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

const kaleidoscope = (usedItem: item) => {
  const image = FirstOfGroup(
    GetUnitsOfPlayerMatching(
      GetOwningPlayer(GetTriggerUnit()!),
      Filter(() => {
        const u = GetFilterUnit()!;
        return IsUnitIllusion(u) && GetUnitTypeId(u) === shepType && UnitAlive(u);
      }),
    )!,
  );

  SetItemCharges(usedItem, GetItemCharges(usedItem) + 1);

  if (!image) return;

  const real = GetTriggerUnit()!;
  BlzUnitDisableAbility(image, FourCC("Amov"), true, false);
  BlzUnitDisableAbility(image, FourCC("Aatk"), true, false);
  SetUnitAcquireRange(real, 1);
  SetUnitPropWindow(real, 0);
  SetUnitAnimation(real, "spell");

  const xReal = GetUnitX(real);
  const yReal = GetUnitY(real);
  const xImage = GetUnitX(image);
  const yImage = GetUnitY(image);
  const e1 = Effect.create("Abilities\\Spells\\Human\\MassTeleport\\MassTeleportTo", xReal, yReal);
  const e2 = Effect.create("Abilities\\Spells\\Human\\MassTeleport\\MassTeleportTo", xImage, yImage);

  const t1 = setTimeout(1.5, () => {
    if (!UnitAlive(real) || !UnitAlive(image)) return;
    BlzUnitDisableAbility(real, FourCC("Amov"), true, false);
    BlzUnitDisableAbility(real, FourCC("Aatk"), true, false);
    SetUnitAcquireRange(real, GetUnitDefaultAcquireRange(real));
    SetUnitPropWindow(real, GetUnitDefaultPropWindow(real));
    t.destroy();
  });

  const t2 = setTimeout(2, () => {
    e1?.destroy();
    e2?.destroy();

    if (!UnitAlive(real)) return;

    BlzUnitDisableAbility(real, FourCC("Amov"), false, false);
    BlzUnitDisableAbility(real, FourCC("Aatk"), false, false);
    if (GetItemCharges(usedItem) === 1) RemoveItem(usedItem);
    else SetItemCharges(usedItem, GetItemCharges(usedItem) - 1);

    if (UnitAlive(real)) {
      SetUnitX(real, xImage);
      SetUnitY(real, yImage);
      if (UnitAlive(image)) {
        SetUnitX(image, xReal);
        SetUnitY(image, yReal);
        BlzUnitDisableAbility(image, FourCC("Amov"), false, false);
        BlzUnitDisableAbility(image, FourCC("Aatk"), false, false);
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
    t1.cancel();
    t2.cancel();
    t.destroy();
    if (UnitAlive(real)) {
      SetUnitAcquireRange(real, GetUnitDefaultAcquireRange(real));
      SetUnitPropWindow(real, GetUnitDefaultPropWindow(real));
    }
    if (!UnitAlive(image)) return;
    BlzUnitDisableAbility(image, FourCC("Amov"), false, false);
    BlzUnitDisableAbility(image, FourCC("Aatk"), false, false);
  });
};

const Trig_useItem_Actions = () => {
  const usedItem = GetManipulatedItem()!;
  const usedItemType = GetItemTypeId(usedItem);

  if (usedItemType === FourCC("I00G")) sheepLocater();
  else if (usedItemType === FourCC("I007")) UnitAddAbility(GetTriggerUnit()!, FourCC("A00E"));
  else if (usedItemType === FourCC("I000")) UnitAddAbility(GetTriggerUnit()!, FourCC("A00W"));
  else if (usedItemType === FourCC("I00X")) kaleidoscope(usedItem);
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
