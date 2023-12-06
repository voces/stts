//===========================================================================
// Trigger: timeViolet
//===========================================================================
const Trig_timeViolet_Actions = (): void => {
  udg_multiKillNum[16] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeViolet: () => void;
}
InitTrig_timeViolet = (): void => {
  gg_trg_timeViolet = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeViolet, udg_multiKillTimer[16]);
  TriggerAddAction(gg_trg_timeViolet, Trig_timeViolet_Actions);
};
