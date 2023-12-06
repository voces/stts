//===========================================================================
// Trigger: peachHideTimer
//===========================================================================
const Trig_peachHideTimer_Actions = (): void => {
  udg_hideEsc[18] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_peachHideTimer: () => void;
}
InitTrig_peachHideTimer = (): void => {
  gg_trg_peachHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_peachHideTimer, udg_peachHideTimer);
  TriggerAddAction(gg_trg_peachHideTimer, Trig_peachHideTimer_Actions);
};
