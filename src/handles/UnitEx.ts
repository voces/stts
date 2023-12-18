import { Handle, Unit } from "w3ts";
import { MapPlayerEx } from "./MapPlayerEx";

const map = new WeakMap<unit, UnitEx>();

export class UnitEx extends Unit {
  get owner() {
    return MapPlayerEx.fromHandle(GetOwningPlayer(this.handle));
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

  public static fromHandle<T extends unit | undefined>(handle: T): T extends unit ? UnitEx : UnitEx | undefined {
    if (!handle) return undefined as T extends unit ? UnitEx : UnitEx | undefined;
    const obj = map.get(handle);
    if (obj) return obj;
    Handle.initHandle = handle;
    // @ts-expect-error
    const next = new UnitEx(); // TODO: wire this up?
    map.set(handle, next);
    return next;
  }
}
