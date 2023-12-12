//===========================================================================
// Trigger: timeNavy
//===========================================================================
const Trig_timeNavy_Actions = () => {
  udg_multiKillNum[14] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeNavy: () => void;
}
InitTrig_timeNavy = () => {
  gg_trg_timeNavy = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeNavy, udg_multiKillTimer[14]);
  TriggerAddAction(gg_trg_timeNavy, Trig_timeNavy_Actions);
};
