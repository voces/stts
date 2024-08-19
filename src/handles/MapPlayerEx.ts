import { MapPlayer, Unit } from "w3ts";

const map = new Map<player, MapPlayerEx>();

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

  get sheepLastGame() {
    return udg_sheepLastGame[this.cid];
  }

  set sheepLastGame(value: boolean) {
    udg_sheepLastGame[this.cid] = value;
  }

  get gold() {
    return GetPlayerState(this.handle, PLAYER_STATE_RESOURCE_GOLD);
  }

  set gold(value: number) {
    value = Math.floor(value);
    const prev = GetPlayerState(this.handle, PLAYER_STATE_RESOURCE_GOLD);
    if (prev < value) SetPlayerState(this.handle, PLAYER_STATE_GOLD_GATHERED, value);
    SetPlayerState(this.handle, PLAYER_STATE_RESOURCE_GOLD, value);
  }

  displayTimedText(message: string, duration = 5) {
    DisplayTimedTextToPlayer(this.handle, 0, 0, duration, message);
  }

  getSelection() {
    const units: unit[] = [];
    const condition = Condition(() => {
      const u = GetFilterUnit();
      if (u && UnitAlive(u)) units.push(u);
      return false;
    });
    const g = CreateGroup();
    GroupEnumUnitsSelected(g, this.handle, condition);
    DestroyCondition(condition);
    DestroyGroup(g);
    return units;
  }

  get isHost() {
    return this.handle === udg_Custom;
  }

  get hex() {
    return udg_colorString[this.cid] ?? "";
  }

  get coloredName() {
    return `${udg_colorString[this.cid] ?? ""}${this.name}|r`;
  }

  get coloredName_() {
    return `${udg_colorString[this.cid] ?? ""}${this.name}`;
  }

  get isHere() {
    return this.slotState === PLAYER_SLOT_STATE_PLAYING;
  }

  get isActive() {
    return this.isHere && this.afk === AFK_PLAYING;
  }

  get isActiveHuman() {
    return this.isActive && this.controller === MAP_CONTROL_USER;
  }

  get isSheep() {
    return IsPlayerInForce(this.handle, udg_Sheep);
  }

  get isWolf() {
    return IsPlayerInForce(this.handle, udg_Wolf);
  }

  get isWisp() {
    return IsPlayerInForce(this.handle, udg_Spirit);
  }

  get afk() {
    return udg_AFK[this.cid];
  }

  get isPub() {
    return pub[this.id];
  }

  colorize(msg: string, includePlayerName = false) {
    return `${this.hex}${includePlayerName ? this.name : ""}${msg}`;
  }

  toString() {
    return this.coloredName;
  }

  public static get host() {
    return MapPlayerEx.fromHandle(udg_Custom);
  }

  public static set host(player: player | MapPlayer) {
    udg_Custom = player instanceof MapPlayer ? player.handle : player;
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

  public static fromOwner(unit: Unit | unit) {
    const u = unit instanceof Unit ? unit.handle : unit;
    return this.fromHandle(GetOwningPlayer(u)!);
  }

  public static fromFilterUnit() {
    const u = GetFilterUnit();
    if (u) return this.fromHandle(GetOwningPlayer(u));
  }

  public static fromKillingUnit() {
    const u = GetKillingUnit();
    if (u) return this.fromHandle(GetOwningPlayer(u));
  }

  public static fromDyingUnit() {
    const u = GetDyingUnit();
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

  public static get neutralPassive() {
    return MapPlayerEx.fromIndex(PLAYER_NEUTRAL_PASSIVE)!;
  }
}
