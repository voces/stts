import { Frame, Handle } from "w3ts";
import { MapPlayerEx } from "./MapPlayerEx";
import { TriggerEx } from "./TriggerEx";

const isOriginFrameType = (value: unknown): value is originframetype => `${value}`.startsWith("originframetype: ");

const map = new Map<framehandle, FrameEx>();

export class FrameEx extends Frame {
  onClick(fn: (event: { player: MapPlayerEx }) => void, autoBlur = true) {
    const t = CreateTrigger();
    BlzTriggerRegisterFrameEvent(t, this.handle, FRAMEEVENT_CONTROL_CLICK);
    TriggerAddAction(t, () => {
      if (autoBlur) this.setEnabled(false).setEnabled(true);
      fn({ player: MapPlayerEx.fromEvent()! });
    });
    return this;
  }

  /** For edit box */
  onChange(fn: (event: { player: MapPlayerEx; value: string }) => void, synced?: boolean) {
    const t = TriggerEx.create();
    t.triggerRegisterFrameEvent(this, FRAMEEVENT_EDITBOX_TEXT_CHANGED);
    t.addAction(() => {
      const player = MapPlayerEx.fromEvent()!;
      if (synced && !player.isHost) return;
      const text = BlzGetTriggerFrameText()!;
      if (synced && !player.isLocal()) this.text = text;
      fn({ player, value: text });
    });
    return t;
  }

  /** For checkboxes and radios */
  onToggle(fn: (event: { player: MapPlayerEx; checked: boolean }) => void) {
    let t = CreateTrigger();
    BlzTriggerRegisterFrameEvent(t, this.handle, FRAMEEVENT_CHECKBOX_CHECKED);
    TriggerAddAction(t, () => fn({ player: MapPlayerEx.fromEvent()!, checked: true }));
    t = CreateTrigger();
    BlzTriggerRegisterFrameEvent(t, this.handle, FRAMEEVENT_CHECKBOX_UNCHECKED);
    TriggerAddAction(t, () => fn({ player: MapPlayerEx.fromEvent()!, checked: false }));
    return this;
  }

  /** For popup menus */
  onItemChanged(fn: (event: { player: MapPlayerEx; value: number }) => void, synced?: boolean) {
    const t = CreateTrigger();
    BlzTriggerRegisterFrameEvent(t, this.handle, FRAMEEVENT_POPUPMENU_ITEM_CHANGED);
    TriggerAddAction(t, () => {
      const player = MapPlayerEx.fromEvent()!;
      if (synced && !player.isHost) return;
      const value = BlzGetTriggerFrameValue();
      if (synced && !player.isLocal()) this.value = value;
      fn({ player, value });
    });
    return this;
  }

  /** For sliders */
  onSliderChange(fn: (event: { player: MapPlayerEx; value: number }) => void, synced?: boolean) {
    const t = CreateTrigger();
    BlzTriggerRegisterFrameEvent(t, this.handle, FRAMEEVENT_SLIDER_VALUE_CHANGED);
    TriggerAddAction(t, () => {
      const player = MapPlayerEx.fromEvent()!;
      if (synced && !player.isHost) return;
      const value = BlzGetTriggerFrameValue();
      if (synced && !player.isLocal()) this.value = value;
      fn({ player, value });
    });
    return this;
  }

  setTexture(texFile: string, flag = 0, blend = true) {
    return super.setTexture(texFile, flag, blend);
  }

  getChild(index: number) {
    const child = FrameEx.fromHandle(BlzFrameGetChild(this.handle, index));
    if (!child) throw `Error getting child ${index}`;
    return child;
  }

  get children() {
    const count = this.childrenCount;
    const output: FrameEx[] = [];
    for (let i = 0; i < count; i++) {
      const child = this.getChild(i);
      if (child !== null) output.push(child);
    }
    return output;
  }

  getParent() {
    const parent = FrameEx.fromHandle(BlzFrameGetParent(this.handle));
    if (!parent) throw `Error getting parent`;
    return parent;
  }

  static create(
    name: string,
    owner: FrameEx | Frame | framehandle | string | originframetype,
    priority = 0,
    createContext = 0,
  ): FrameEx {
    const frame = BlzCreateFrame(name, FrameEx.resolve(owner).handle, priority, createContext);
    if (!frame) throw `Error calling BlzCreateFrame(${name}, ${owner}, ${priority}, ${createContext})`;
    return FrameEx.fromHandle(frame);
  }

  static createType(
    name: string,
    owner: FrameEx | Frame | framehandle | string | originframetype,
    createContext: number,
    typeName: string,
    inherits: string,
  ) {
    const frame = BlzCreateFrameByType(typeName, name, FrameEx.resolve(owner).handle, inherits, createContext);
    if (!frame) {
      throw `Error calling BlzCreateFrameByType(${typeName}, ${name}, ${owner}, ${inherits}, ${createContext})`;
    }
    return FrameEx.fromHandle(frame);
  }

  static resolve(frame: FrameEx | Frame | framehandle | string | originframetype): FrameEx {
    if (typeof frame === "string") return this.fromName(frame);
    if (isOriginFrameType(frame)) return this.fromOrigin(frame, 0)!;
    if (frame instanceof FrameEx) return frame;
    if (frame instanceof Frame) return this.fromHandle(frame.handle);
    return this.fromHandle(frame);
  }

  static fromName(name: string, createContext = 0) {
    const frame = BlzGetFrameByName(name, createContext);
    if (!frame) throw `Could not find frame by name ${name} context ${createContext}`;
    return FrameEx.fromHandle(frame);
  }

  static fromOrigin(frameType: originframetype, createContext = 0) {
    const frame = BlzGetOriginFrame(frameType, createContext);
    if (!frame) throw `Could not find frame by origin ${frameType} context ${createContext}`;
    return FrameEx.fromHandle(frame);
  }

  static fromHandle<T extends framehandle | Frame | undefined>(
    handle: T,
  ): T extends framehandle ? FrameEx : FrameEx | undefined {
    if (handle && handle instanceof Frame) return this.getObject(handle.handle);
    return (handle ? this.getObject(handle) : undefined) as T extends framehandle ? FrameEx : FrameEx | undefined;
  }

  protected static getObject(frame: framehandle) {
    const obj = map.get(frame);
    if (obj !== undefined) return obj;
    Handle.initHandle = frame;
    // @ts-expect-error We set initHandle; should be good!
    const next = new FrameEx();
    map.set(frame, next);
    return next;
  }
}
