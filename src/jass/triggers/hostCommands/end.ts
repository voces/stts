//===========================================================================
// Trigger: end
//===========================================================================
const Trig_end_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_end_Func011A = (): void => {
  CustomDefeatBJ(
    GetEnumPlayer()!,
    `Join our Discord at
https://dsc.gg/sheeptag`,
  );
};

const Trig_end_Actions = (): void => {
  PauseTimerBJ(true, udg_Createtimer);
  StartTimerBJ(udg_Createtimer, false, 180);
  TimerDialogSetTitleBJ(udg_createTimerWindow, "Game ending...");
  TimerDialogDisplayBJ(true, udg_createTimerWindow);
  TriggerExecute(gg_trg_ScoreboardMultiboard);
  MultiboardMinimizeBJ(false, udg_scoreMultiboard);
  udg_Custom = udg_noplayer;
  udg_transfer = -1;
  TriggerExecute(gg_trg_UpdateStats);
  PolledWait(180);
  ForForce(GetPlayersAll()!, Trig_end_Func011A);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_end: () => void;
}
InitTrig_end = (): void => {
  gg_trg_end = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(0)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(1)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(2)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(3)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(4)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(5)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(6)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(7)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(8)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(9)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(10)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(11)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(12)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(13)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(14)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(15)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(16)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(17)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(18)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(19)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(20)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(21)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(22)!, "-end", true);
  TriggerRegisterPlayerChatEvent(gg_trg_end, Player(23)!, "-end", true);
  TriggerAddCondition(gg_trg_end, Condition(Trig_end_Conditions));
  TriggerAddAction(gg_trg_end, Trig_end_Actions);
};
