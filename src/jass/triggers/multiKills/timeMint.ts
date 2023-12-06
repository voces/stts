//===========================================================================
// Trigger: timeMint
//===========================================================================
const Trig_timeMint_Actions = (): void => {
  udg_multiKillNum[19] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeMint: () => void;
}
InitTrig_timeMint = (): void => {
  gg_trg_timeMint = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeMint, udg_multiKillTimer[19]);
  TriggerAddAction(gg_trg_timeMint, Trig_timeMint_Actions);
};
