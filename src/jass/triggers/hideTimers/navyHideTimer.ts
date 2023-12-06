//===========================================================================
// Trigger: navyHideTimer
//===========================================================================
const Trig_navyHideTimer_Actions = (): void => {
  udg_hideEsc[14] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_navyHideTimer: () => void;
}
InitTrig_navyHideTimer = (): void => {
  gg_trg_navyHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_navyHideTimer, udg_navyHideTimer);
  TriggerAddAction(gg_trg_navyHideTimer, Trig_navyHideTimer_Actions);
};
