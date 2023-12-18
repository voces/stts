import { Group, Rectangle } from "w3ts";
import { UnitEx } from "./UnitEx";

export class GroupEx extends Group {
  public static create(): GroupEx {
    const handle = CreateGroup();
    const obj = this.getObject(handle) as GroupEx;

    const values: Record<string, unknown> = {};
    values.handle = handle;

    return Object.assign(obj, values);
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

  public enumUnitsInRect(r: Rectangle | rect, filter?: boolexpr | ((unit: UnitEx) => boolean)) {
    GroupEnumUnitsInRect(
      this.handle,
      r instanceof Rectangle ? r.handle : r,
      typeof filter === "function" ? Filter(() => filter(UnitEx.fromFilter()!)) : filter,
    );
    return this;
  }

  public static fromHandle(handle: group | undefined): GroupEx | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
