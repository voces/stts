//===========================================================================
// Trigger: timeLb
//===========================================================================
const Trig_timeLb_Actions = (): void => {
  udg_multiKillNum[10] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeLb: () => void;
}
InitTrig_timeLb = (): void => {
  gg_trg_timeLb = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeLb, udg_multiKillTimer[10]);
  TriggerAddAction(gg_trg_timeLb, Trig_timeLb_Actions);
};
