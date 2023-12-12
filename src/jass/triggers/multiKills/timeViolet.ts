//===========================================================================
// Trigger: timeViolet
//===========================================================================
const Trig_timeViolet_Actions = () => {
  udg_multiKillNum[16] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeViolet: () => void;
}
InitTrig_timeViolet = () => {
  gg_trg_timeViolet = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeViolet, udg_multiKillTimer[16]);
  TriggerAddAction(gg_trg_timeViolet, Trig_timeViolet_Actions);
};
