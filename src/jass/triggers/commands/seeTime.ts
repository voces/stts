import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_seeTime_Actions = () => {
  const p = MapPlayerEx.fromEvent()!;
  p.displayTimedText(`|CFFFFCC00Game time elapsed is ${simpleformatTime(TimerGetElapsed(udg_gameTimer))}.`, 15);
  p.displayTimedText(`|CFFFFCC00Round time elapsed is ${simpleformatTime(TimerGetElapsed(udg_Timer))}.`, 15);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_seeTime: () => void;
}
InitTrig_seeTime = () => {
  gg_trg_seeTime = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_seeTime, "-time");
  TriggerAddAction(gg_trg_seeTime, Trig_seeTime_Actions);
};
