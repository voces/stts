import { Trigger } from "w3ts";
import { MapPlayerEx } from "handles/MapPlayerEx";

const map = new WeakMap<trigger, [message: string, exact: boolean][]>();

export const registerAnyPlayerChatEvent = (
  trigger: Trigger | trigger,
  chatMessageToDetect: string,
  exactMatchOnly = true,
) => {
  const t = trigger instanceof Trigger ? trigger : Trigger.fromHandle(trigger)!;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    t.registerPlayerChatEvent(
      MapPlayerEx.fromIndex(i)!,
      chatMessageToDetect,
      exactMatchOnly,
    );
  }
  const conditions = map.get(t.handle) ?? [];
  if (!map.has(t.handle)) map.set(t.handle, conditions);
  conditions.push([chatMessageToDetect, exactMatchOnly]);

  if (!exactMatchOnly) {
    t.addCondition(() => {
      const m = GetEventPlayerChatString()!.toLowerCase();
      return conditions.some(([m2, exact]) => exact ? m === m2 : m.startsWith(m2));
    });
  }
};
