//===========================================================================
// Trigger: qDeath
//===========================================================================
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

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_qDeath: () => void;
}
InitTrig_qDeath = () => {
  gg_trg_qDeath = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(0)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(1)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(2)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(3)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(4)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(5)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(6)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(7)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(8)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(9)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(10)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(11)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(12)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(13)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(14)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(15)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(16)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(17)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(18)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(19)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(20)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(21)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(22)!, "-qd", true);
  TriggerRegisterPlayerChatEvent(gg_trg_qDeath, Player(23)!, "-qd", true);
  TriggerAddAction(gg_trg_qDeath, Trig_qDeath_Actions);
};
