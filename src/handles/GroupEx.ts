import { Group, Unit } from "w3ts";

export class GroupEx extends Group {
  public static create(): GroupEx | undefined {
    const handle = CreateGroup();
    if (handle) {
      const obj = this.getObject(handle) as GroupEx;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
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

  public static fromHandle(handle: group | undefined): GroupEx | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
