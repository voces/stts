import { MapPlayer, Trigger } from "w3ts";

export const registerAnyPlayerChatEvent = (
  trigger: Trigger | trigger,
  chatMessageToDetect: string,
  exactMatchOnly = true,
) => {
  const t = trigger instanceof Trigger ? trigger : Trigger.fromHandle(trigger)!;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    t.registerPlayerChatEvent(
      MapPlayer.fromIndex(i)!,
      chatMessageToDetect,
      exactMatchOnly,
    );
  }
  if (!exactMatchOnly) {
    t.addCondition(() => GetEventPlayerChatString()!.startsWith(chatMessageToDetect));
  }
};
