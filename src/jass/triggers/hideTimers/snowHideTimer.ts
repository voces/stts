//===========================================================================
// Trigger: snowHideTimer
//===========================================================================
const Trig_snowHideTimer_Actions = (): void => {
  udg_hideEsc[22] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_snowHideTimer: () => void;
}
InitTrig_snowHideTimer = (): void => {
  gg_trg_snowHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_snowHideTimer, udg_snowHideTimer);
  TriggerAddAction(gg_trg_snowHideTimer, Trig_snowHideTimer_Actions);
};
