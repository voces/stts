//===========================================================================
// Trigger: Create Timers
//===========================================================================
const Trig_Create_Timers_Actions = () => {
  CreateTimerDialogBJ(udg_paddingTimer, "Mass Time Left");
  udg_paddingTimerWindow = GetLastCreatedTimerDialogBJ()!;

  CreateTimerDialogBJ(udg_massTimer, "Mass Time Left");
  udg_massTimerWindow = GetLastCreatedTimerDialogBJ()!;
  TimerDialogDisplayBJ(false, udg_massTimerWindow);

  CreateTimerDialogBJ(udg_Timer, "Time Remaining: ");
  udg_TimerWindow = GetLastCreatedTimerDialogBJ()!;
  TimerDialogDisplayBJ(false, udg_TimerWindow);

  CreateTimerDialogBJ(udg_wolfTimer, "Wolves Spawning In:");
  udg_wolfTimerWindow = GetLastCreatedTimerDialogBJ()!;
  TimerDialogDisplayBJ(false, udg_wolfTimerWindow);

  CreateTimerDialogBJ(udg_mapSizeChangeTimer, "Blight Alters In:");
  udg_mapSizeChangeTimerWindow = GetLastCreatedTimerDialogBJ()!;
  TimerDialogDisplayBJ(false, udg_mapSizeChangeTimerWindow);

  CreateTimerDialogBJ(udg_Createtimer, "Pick Game Mode:");
  udg_createTimerWindow = GetLastCreatedTimerDialogBJ()!;
  StartTimerBJ(udg_Createtimer, false, 90);

  TimerDialogDisplayBJ(false, udg_paddingTimerWindow);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Create_Timers: () => void;
}
InitTrig_Create_Timers = () => {
  gg_trg_Create_Timers = CreateTrigger();
  TriggerAddAction(gg_trg_Create_Timers, Trig_Create_Timers_Actions);
};
