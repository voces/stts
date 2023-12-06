//===========================================================================
// Trigger: lbHideTimer
//===========================================================================
const Trig_lbHideTimer_Actions = (): void => {
  udg_hideEsc[10] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_lbHideTimer: () => void;
}
InitTrig_lbHideTimer = (): void => {
  gg_trg_lbHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_lbHideTimer, udg_lbHideTimer);
  TriggerAddAction(gg_trg_lbHideTimer, Trig_lbHideTimer_Actions);
};
