import { Group, MapPlayer, Rectangle } from "w3ts";
import { UnitEx } from "./UnitEx";
import { MapPlayerEx } from "./MapPlayerEx";

export class GroupEx extends Group {
  public static create(): GroupEx {
    const handle = CreateGroup();

    const obj = this.getObject(handle) as GroupEx;
    obj.handle = handle;

    return obj;
  }

  public forEach(fn: (unit: UnitEx) => void) {
    this.for(() => fn(UnitEx.fromEnum()!));
    return this;
  }

  public map<T>(fn: (unit: UnitEx) => T) {
    const ret: T[] = [];
    this.for(() => ret.push(fn(UnitEx.fromEnum()!)));
    return ret;
  }

  public some(fn: (unit: UnitEx) => boolean) {
    let pass = false;
    this.forEach((u) => {
      if (!pass && fn(u)) pass = true;
    });
    return pass;
  }

  public toArray() {
    const units: UnitEx[] = [];
    this.forEach((u) => units.push(u));
    return units;
  }

  public enumUnitsInRect(r: Rectangle | rect, filter?: boolexpr | ((unit: UnitEx) => boolean)) {
    GroupEnumUnitsInRect(
      this.handle,
      r instanceof Rectangle ? r.handle : r,
      typeof filter === "function" ? Filter(() => filter(UnitEx.fromFilter()!)) : filter,
    );
    return this;
  }

  public enumUnitsOfPlayer(p: MapPlayer, filter?: boolexpr | ((unit: UnitEx) => boolean)) {
    GroupEnumUnitsOfPlayer(
      this.handle,
      p.handle,
      typeof filter === "function" ? Condition(() => filter(UnitEx.fromFilter()!)) : filter,
    );
    return this;
  }

  get first() {
    return UnitEx.fromHandle(FirstOfGroup(this.handle));
  }

  public static fromSelectedUnits(selector: MapPlayerEx, filter?: (u: UnitEx) => boolean) {
    const g = this.create();
    g.enumUnitsSelected(selector, filter ? () => filter(UnitEx.fromFilter()!) : null);
    return g;
  }

  public static fromHandle(handle: group | undefined): GroupEx | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
