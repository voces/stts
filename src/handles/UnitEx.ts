import { Handle, MapPlayer, Unit } from "w3ts";
import { MapPlayerEx } from "./MapPlayerEx";

const map = new WeakMap<unit, UnitEx>();

export class UnitEx extends Unit {
  get owner() {
    return MapPlayerEx.fromHandle(GetOwningPlayer(this.handle));
  }

  inventory() {
    const items = [];
    for (let i = 0; i < this.inventorySize; i++) {
      const item = this.getItemInSlot(i);
      if (item) items.push(item);
    }
    return items;
  }

  addAbility(abilityId: string | number) {
    return super.addAbility(typeof abilityId === "number" ? abilityId : FourCC(abilityId));
  }

  static create(owner: MapPlayer | player, unitId: number | string, x: number, y: number, face?: number) {
    face ??= bj_UNIT_FACING;
    const player = owner instanceof MapPlayer ? owner.handle : owner;
    const handle = CreateUnit(player, typeof unitId === "number" ? unitId : FourCC(unitId), x, y, face)!;
    return this.fromHandle(handle);
  }

  static fromKilling() {
    return this.fromHandle(GetKillingUnit());
  }

  static fromDying() {
    return this.fromHandle(GetDyingUnit());
  }

  static fromEnum() {
    return this.fromHandle(GetEnumUnit());
  }

  static fromFilter() {
    return this.fromHandle(GetFilterUnit());
  }

  static fromEvent() {
    return this.fromHandle(GetTriggerUnit());
  }

  public static fromHandle<T extends unit | undefined>(handle: T): T extends unit ? UnitEx : UnitEx | undefined {
    if (!handle) return undefined as T extends unit ? UnitEx : UnitEx | undefined;
    const obj = map.get(handle);
    if (obj) return obj;
    Handle.initHandle = handle;
    // @ts-expect-error We set initHandle; should be good!
    const next = new UnitEx();
    map.set(handle, next);
    return next;
  }
}
