import { Trigger } from "w3ts";
import { MapPlayerEx } from "../handles/MapPlayerEx";

export const registerAnyPlayerMouseEvent = (
  trigger: Trigger,
  whichMouseEvent: number,
) => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    trigger.registerPlayerMouseEvent(
      MapPlayerEx.fromIndex(i)!,
      whichMouseEvent,
    );
  }
};
