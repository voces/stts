import { Trigger } from "w3ts";
import { MapPlayerEx } from "../handles/MapPlayerEx";

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
  if (!exactMatchOnly) {
    t.addCondition(() => GetEventPlayerChatString()!.startsWith(chatMessageToDetect));
  }
};
