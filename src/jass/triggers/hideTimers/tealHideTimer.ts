//===========================================================================
// Trigger: tealHideTimer
//===========================================================================
const Trig_tealHideTimer_Actions = (): void => {
  udg_hideEsc[3] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_tealHideTimer: () => void;
}
InitTrig_tealHideTimer = (): void => {
  gg_trg_tealHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_tealHideTimer, udg_tealHideTimer);
  TriggerAddAction(gg_trg_tealHideTimer, Trig_tealHideTimer_Actions);
};
