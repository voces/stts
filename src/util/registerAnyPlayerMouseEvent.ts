import { MapPlayer, Trigger } from "w3ts";

export const registerAnyPlayerMouseEvent = (
  trigger: Trigger,
  whichMouseEvent: number,
) => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    trigger.registerPlayerMouseEvent(
      MapPlayer.fromIndex(i)!,
      whichMouseEvent,
    );
  }
};
