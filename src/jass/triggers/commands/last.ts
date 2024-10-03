import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_last_Actions = () => {
  if (udg_timeString === "") DisplayTimedTextToPlayer(GetTriggerPlayer()!, 0, 0, 15, "No rounds have been played yet.");
  else DisplayTimedTextToPlayer(GetTriggerPlayer()!, 0, 0, 15, "Last: " + fullTimeString + ".");
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_last: () => void;
}
InitTrig_last = () => {
  gg_trg_last = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_last, "-last");
  registerAnyPlayerChatEvent(gg_trg_last, "-l");
  TriggerAddAction(gg_trg_last, Trig_last_Actions);
};
