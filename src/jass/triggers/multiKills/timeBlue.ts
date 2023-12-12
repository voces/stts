//===========================================================================
// Trigger: timeBlue
//===========================================================================
const Trig_timeBlue_Actions = () => {
  udg_multiKillNum[2] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeBlue: () => void;
}
InitTrig_timeBlue = () => {
  gg_trg_timeBlue = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeBlue, udg_multiKillTimer[2]);
  TriggerAddAction(gg_trg_timeBlue, Trig_timeBlue_Actions);
};
