//===========================================================================
// Trigger: timeBrown
//===========================================================================
const Trig_timeBrown_Actions = (): void => {
  udg_multiKillNum[12] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeBrown: () => void;
}
InitTrig_timeBrown = (): void => {
  gg_trg_timeBrown = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeBrown, udg_multiKillTimer[12]);
  TriggerAddAction(gg_trg_timeBrown, Trig_timeBrown_Actions);
};
