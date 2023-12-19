import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_qDeath_Actions = () => {
  const p = MapPlayerEx.fromEvent()!;
  if (udg_qDeath === Infinity) p.displayTimedText("                              No Sheep have died yet.");
  else {
    p.displayTimedText(
      `                              Quickest Death: ${udg_qDeathString}|r with a time of ${R2S(udg_qDeath)}.`,
    );
  }
  DestroyForce(udg_atempplayer);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_qDeath: () => void;
}
InitTrig_qDeath = () => {
  gg_trg_qDeath = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_qDeath, "-qd");
  TriggerAddAction(gg_trg_qDeath, Trig_qDeath_Actions);
};
