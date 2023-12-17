import { Group, Rectangle, Unit } from "w3ts";

export class GroupEx extends Group {
  public static create(): GroupEx {
    const handle = CreateGroup();
    const obj = this.getObject(handle) as GroupEx;

    const values: Record<string, unknown> = {};
    values.handle = handle;

    return Object.assign(obj, values);
  }

  public forEach(fn: (unit: Unit) => void) {
    this.for(() => fn(Unit.fromEnum()!));
    return this;
  }

  public map<T>(fn: (unit: Unit) => T) {
    const ret: T[] = [];
    this.for(() => ret.push(fn(Unit.fromEnum()!)));
    return ret;
  }

  public enumUnitsInRect(r: Rectangle | rect, filter?: boolexpr | ((unit: Unit) => boolean)) {
    GroupEnumUnitsInRect(
      this.handle,
      r instanceof Rectangle ? r.handle : r,
      typeof filter === "function" ? Filter(() => filter(Unit.fromFilter()!)) : filter,
    );
    return this;
  }

  public static fromHandle(handle: group | undefined): GroupEx | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
