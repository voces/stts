//===========================================================================
// Trigger: pinkHideTimer
//===========================================================================
const Trig_pinkHideTimer_Actions = (): void => {
  udg_hideEsc[8] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_pinkHideTimer: () => void;
}
InitTrig_pinkHideTimer = (): void => {
  gg_trg_pinkHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_pinkHideTimer, udg_pinkHideTimer);
  TriggerAddAction(gg_trg_pinkHideTimer, Trig_pinkHideTimer_Actions);
};
