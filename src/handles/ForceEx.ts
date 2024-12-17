import { Force, MapPlayer } from "w3ts";
import { MapPlayerEx } from "./MapPlayerEx";

const map = new WeakMap<force, ForceEx>();

export class ForceEx extends Force {
  public static create(): ForceEx {
    const handle = CreateForce();

    const obj = this.getObject(handle) as ForceEx;
    obj.handle = handle;

    return obj;
  }

  public enumPlayers(filter: boolexpr | ((player: MapPlayerEx) => boolean)) {
    ForceEnumPlayers(
      this.handle,
      typeof filter === "function"
        ? Filter(typeof filter === "function" ? () => filter(MapPlayerEx.fromFilter()!) : filter)
        : filter,
    );
  }

  public for(callback: (player: MapPlayerEx) => void) {
    ForForce(this.handle, () => callback(MapPlayerEx.fromEnum()!));
  }

  /** Returns all player handles belonging to this force */
  public getPlayers() {
    const players: MapPlayerEx[] = [];

    ForForce(this.handle, () => {
      const p = MapPlayerEx.fromEnum();
      if (p) players.push(p);
    });

    return players;
  }

  hasPlayer(whichPlayer: MapPlayer | player): boolean {
    return IsPlayerInForce(whichPlayer instanceof MapPlayer ? whichPlayer.handle : whichPlayer, this.handle);
  }

  toArray() {
    const arr: MapPlayerEx[] = [];
    this.for((p) => arr.push(p));
    return arr;
  }

  *[Symbol.iterator]() {
    for (const p of this.toArray()) yield p;
  }

  public size() {
    let size = 0;
    ForForce(this.handle, () => size++);
    return size;
  }

  public static with<T>(fn: (force: ForceEx) => T): T;
  public static with<T>(filter: (player: MapPlayerEx) => boolean, fn: (force: ForceEx) => T): T;

  // Implementation
  public static with<T>(a: ((force: ForceEx) => T) | ((player: MapPlayerEx) => boolean), b?: (force: ForceEx) => T): T {
    // const fn = typeof b === "function" ? b : a;
    const force = ForceEx.create();
    if (typeof b === "function") force.enumPlayers(a as (player: MapPlayerEx) => boolean);
    const ret = ((typeof b === "function" ? b : a) as (force: ForceEx) => T)(force);
    force.destroy();
    return ret;
  }

  public static fromHandle(handle: force | undefined): ForceEx | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static get all() {
    return this.fromHandle(GetPlayersAll())!;
  }

  public static get sheep() {
    return this.fromHandle(udg_Sheep)!;
  }

  public static get wolves() {
    return this.fromHandle(udg_Wolf)!;
  }

  public static get wisps() {
    return this.fromHandle(udg_Spirit)!;
  }

  public static get draft() {
    return this.fromHandle(udg_Draft)!;
  }

  protected static getObject(force: force) {
    const obj = map.get(force);
    if (obj !== undefined) return obj;
    const next = new ForceEx();
    next.handle = force;
    map.set(force, next);
    return next;
  }
}
