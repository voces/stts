import { MapPlayer } from "w3ts";

const map = new WeakMap<player, MapPlayerEx>();

export class MapPlayerEx extends MapPlayer {
  bankedGold = 0;

  get cid() {
    return this.id + 1;
  }

  get sheepCount() {
    return udg_sheepCount[this.cid] ?? 0;
  }

  set sheepCount(newSheepCount: number) {
    udg_sheepCount[this.cid] = newSheepCount;
  }

  get gold() {
    return GetPlayerState(this.handle, PLAYER_STATE_RESOURCE_GOLD);
  }

  set gold(value: number) {
    const prev = GetPlayerState(this.handle, PLAYER_STATE_RESOURCE_GOLD);
    if (prev < value) SetPlayerState(this.handle, PLAYER_STATE_GOLD_GATHERED, value);
    SetPlayerState(this.handle, PLAYER_STATE_RESOURCE_GOLD, value);
  }

  public static fromEnum() {
    return this.fromHandle(GetEnumPlayer());
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggerPlayer());
  }

  public static fromFilter() {
    return this.fromHandle(GetFilterPlayer());
  }

  public static fromIndex(index: number) {
    return this.fromHandle(Player(index));
  }

  public static fromFilterUnit() {
    const u = GetFilterUnit();
    if (u) return this.fromHandle(GetOwningPlayer(u));
  }

  public static fromHandle<T extends player | MapPlayer | undefined>(
    handle: T,
  ): T extends player ? MapPlayerEx : MapPlayerEx | undefined {
    if (handle && handle instanceof MapPlayer) return this.getObject(handle.handle);
    return (handle ? this.getObject(handle) : undefined) as T extends player ? MapPlayerEx : MapPlayerEx | undefined;
  }

  protected static getObject(player: player) {
    const obj = map.get(player);
    if (obj !== undefined) return obj;
    const next = new MapPlayerEx(GetPlayerId(player));
    next.handle = player;
    map.set(player, next);
    return next;
  }

  /**
   * @async
   */
  public static fromLocal() {
    return this.fromHandle(GetLocalPlayer()) as MapPlayerEx;
  }
}
