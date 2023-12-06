//===========================================================================
// Trigger: timeGreen
//===========================================================================
const Trig_timeGreen_Actions = (): void => {
  udg_multiKillNum[7] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeGreen: () => void;
}
InitTrig_timeGreen = (): void => {
  gg_trg_timeGreen = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeGreen, udg_multiKillTimer[7]);
  TriggerAddAction(gg_trg_timeGreen, Trig_timeGreen_Actions);
};
