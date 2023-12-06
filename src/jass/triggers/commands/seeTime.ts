//===========================================================================
// Trigger: seeTime
//===========================================================================
const Trig_seeTime_Func003C = (): boolean => {
  if (
    (!(SubStringBJ(
      udg_gameTimeString,
      StringLength(udg_gameTimeString),
      StringLength(udg_gameTimeString),
    ) === "."))
  ) {
    return false;
  }
  return true;
};

const Trig_seeTime_Actions = (): void => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  udg_gameTimeString = (I2S(R2I(TimerGetElapsed(udg_gameTimer) / 60)) + ":") +
    SubStringBJ(R2S(ModuloReal(TimerGetElapsed(udg_gameTimer), 60))!, 1, 2);
  if ((Trig_seeTime_Func003C())) {
    udg_gameTimeString =
      SubStringBJ(udg_gameTimeString, 1, StringLength(udg_gameTimeString) - 2) +
      ("0" +
        SubStringBJ(
          udg_gameTimeString,
          StringLength(udg_gameTimeString),
          StringLength(udg_gameTimeString),
        ));
  }
  DisplayTimedTextToForce(
    udg_atempplayer,
    15,
    "                              |CFFFFCC00Game time elapsed is " +
      (udg_gameTimeString + "."),
  );
  DisplayTimedTextToForce(
    udg_atempplayer,
    15,
    "                               |CFFFFCC00Round time elapsed is " +
      formatTime(TimerGetElapsed(udg_Timer)) + ".",
  );
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_seeTime: () => void;
}
InitTrig_seeTime = (): void => {
  gg_trg_seeTime = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(0)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(1)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(2)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(3)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(4)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(5)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(6)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(7)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(8)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(9)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(10)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(11)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(12)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(13)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(14)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(15)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(16)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(17)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(18)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(19)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(20)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(21)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(22)!, "-time", true);
  TriggerRegisterPlayerChatEvent(gg_trg_seeTime, Player(23)!, "-time", true);
  TriggerAddAction(gg_trg_seeTime, Trig_seeTime_Actions);
};
