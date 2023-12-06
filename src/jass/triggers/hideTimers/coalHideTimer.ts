//===========================================================================
// Trigger: coalHideTimer
//===========================================================================
const Trig_coalHideTimer_Actions = (): void => {
  udg_hideEsc[21] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_coalHideTimer: () => void;
}
InitTrig_coalHideTimer = (): void => {
  gg_trg_coalHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_coalHideTimer, udg_coalHideTimer);
  TriggerAddAction(gg_trg_coalHideTimer, Trig_coalHideTimer_Actions);
};
