//===========================================================================
// Trigger: timeSnow
//===========================================================================
const Trig_timeSnow_Actions = () => {
  udg_multiKillNum[22] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeSnow: () => void;
}
InitTrig_timeSnow = () => {
  gg_trg_timeSnow = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeSnow, udg_multiKillTimer[22]);
  TriggerAddAction(gg_trg_timeSnow, Trig_timeSnow_Actions);
};
