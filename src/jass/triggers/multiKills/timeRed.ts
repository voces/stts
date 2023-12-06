//===========================================================================
// Trigger: timeRed
//===========================================================================
const Trig_timeRed_Actions = (): void => {
  udg_multiKillNum[1] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeRed: () => void;
}
InitTrig_timeRed = (): void => {
  gg_trg_timeRed = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeRed, udg_multiKillTimer[1]);
  TriggerAddAction(gg_trg_timeRed, Trig_timeRed_Actions);
};
