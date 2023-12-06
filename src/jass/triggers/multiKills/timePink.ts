//===========================================================================
// Trigger: timePink
//===========================================================================
const Trig_timePink_Actions = (): void => {
  udg_multiKillNum[8] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timePink: () => void;
}
InitTrig_timePink = (): void => {
  gg_trg_timePink = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timePink, udg_multiKillTimer[8]);
  TriggerAddAction(gg_trg_timePink, Trig_timePink_Actions);
};
