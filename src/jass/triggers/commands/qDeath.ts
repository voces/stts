import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_qDeath_Func002C = () => {
  if ((!(udg_qDeath === 9999))) {
    return false;
  }
  return true;
};

const Trig_qDeath_Actions = () => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  if ((Trig_qDeath_Func002C())) {
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      "                              No Sheep have died yet.",
    );
  } else {
    DisplayTimedTextToForce(
      udg_atempplayer,
      15,
      "                              Quickest Death: " +
        (udg_qDeathString + ("|r with a time of " + (R2S(udg_qDeath) + "."))),
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
