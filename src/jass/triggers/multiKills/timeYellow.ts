//===========================================================================
// Trigger: timeYellow
//===========================================================================
const Trig_timeYellow_Actions = (): void => {
  udg_multiKillNum[5] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeYellow: () => void;
}
InitTrig_timeYellow = (): void => {
  gg_trg_timeYellow = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeYellow, udg_multiKillTimer[5]);
  TriggerAddAction(gg_trg_timeYellow, Trig_timeYellow_Actions);
};
