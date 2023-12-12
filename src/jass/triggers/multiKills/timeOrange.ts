//===========================================================================
// Trigger: timeOrange
//===========================================================================
const Trig_timeOrange_Actions = () => {
  udg_multiKillNum[6] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeOrange: () => void;
}
InitTrig_timeOrange = () => {
  gg_trg_timeOrange = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeOrange, udg_multiKillTimer[6]);
  TriggerAddAction(gg_trg_timeOrange, Trig_timeOrange_Actions);
};
