import { Trigger } from "w3ts";
import { MapPlayerEx } from "./MapPlayerEx";

export class TriggerEx extends Trigger {
  private startsWith: string[] = [];
  registerAnyPlayerChatEvent(message: string, exact = true) {
    message = message.toLowerCase();
    for (let i = 0; i < bj_MAX_PLAYERS; i++) this.registerPlayerChatEvent(MapPlayerEx.fromIndex(i)!, message, exact);
    if (this.startsWith.push(message) === 1) {
      this.addCondition(() => {
        const s = GetEventPlayerChatString()?.toLowerCase() ?? "";
        return this.startsWith.some((s2) => s.startsWith(s2));
      });
    }

    return this;
  }

  registerAnyPlayerKeyEvent(whichKey: oskeytype, metaKey: number, fireOnKeyDown: boolean) {
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      this.registerPlayerKeyEvent(MapPlayerEx.fromIndex(i)!, whichKey, metaKey, fireOnKeyDown);
    }

    return this;
  }

  registerAnyPlayerEvent(whichPlayerEvent: playerevent) {
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      this.registerPlayerEvent(MapPlayerEx.fromIndex(i)!, whichPlayerEvent);
    }

    return this;
  }

  static create(): TriggerEx {
    const handle = CreateTrigger();

    const obj = this.getObject(handle) as TriggerEx;
    obj.handle = handle;

    return obj;
  }

  public static fromHandle(handle: trigger | undefined): TriggerEx | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
