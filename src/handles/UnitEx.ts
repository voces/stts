import { Handle, MapPlayer, Unit } from "w3ts";
import { MapPlayerEx } from "./MapPlayerEx";
import { TriggerEx } from "./TriggerEx";

const map = new WeakMap<unit, UnitEx>();

export class UnitEx extends Unit {
  private triggers: TriggerEx[] = [];

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

  isIllusion(): boolean {
    return super.isIllusion() || !!this.getAbility(FourCC("Aloc"));
  }

  hasItemOfType(itemType: number) {
    for (let i = 0; i < this.inventorySize; i++) {
      const item = this.getItemInSlot(i);
      if (item?.typeId === itemType) return true;
    }
    return false;
  }

  hasBuff(buffId: number) {
    return GetUnitAbilityLevel(this.handle, buffId) > 0;
  }

  onDamaged(fn: () => void) {
    const t = TriggerEx.create();
    this.triggers.push(t);
    t.registerUnitEvent(this, EVENT_UNIT_DAMAGED);
    t.addAction(fn);
  }

  onDeath(fn: (event: { killingUnit?: UnitEx }) => void) {
    const t = TriggerEx.create();
    this.triggers.push(t);
    t.registerUnitEvent(this, EVENT_UNIT_DEATH);
    t.addAction(() => {
      try {
        const event = {
          killingUnit: UnitEx.fromKilling(),
        };
        fn(event);
      } finally {
        t.destroy();
      }
    });
  }

  destroy(): void {
    for (const t of this.triggers) t.destroy();
    super.destroy();
  }

  static create(
    owner: MapPlayer | player,
    unitId: number | string,
    x: number,
    y: number,
    face?: number,
    skinId?: number,
  ) {
    face ??= bj_UNIT_FACING;
    const player = owner instanceof MapPlayer ? owner.handle : owner;
    const uid = typeof unitId === "number" ? unitId : FourCC(unitId);
    const handle = skinId === undefined
      ? CreateUnit(player, uid, x, y, face)
      : BlzCreateUnitWithSkin(player, uid, x, y, face, skinId);
    if (!handle) throw `Unable to create unit of type ${unitId} for ${owner} at (${x}, ${y})`;
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
