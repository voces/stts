//===========================================================================
// Trigger: timePurple
//===========================================================================
const Trig_timePurple_Actions = (): void => {
  udg_multiKillNum[4] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timePurple: () => void;
}
InitTrig_timePurple = (): void => {
  gg_trg_timePurple = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timePurple, udg_multiKillTimer[4]);
  TriggerAddAction(gg_trg_timePurple, Trig_timePurple_Actions);
};
