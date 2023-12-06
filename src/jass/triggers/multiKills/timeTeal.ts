//===========================================================================
// Trigger: timeTeal
//===========================================================================
const Trig_timeTeal_Actions = (): void => {
  udg_multiKillNum[3] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeTeal: () => void;
}
InitTrig_timeTeal = (): void => {
  gg_trg_timeTeal = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeTeal, udg_multiKillTimer[3]);
  TriggerAddAction(gg_trg_timeTeal, Trig_timeTeal_Actions);
};
