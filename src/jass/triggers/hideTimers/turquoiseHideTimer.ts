//===========================================================================
// Trigger: turquoiseHideTimer
//===========================================================================
const Trig_turquoiseHideTimer_Actions = (): void => {
  udg_hideEsc[15] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_turquoiseHideTimer: () => void;
}
InitTrig_turquoiseHideTimer = (): void => {
  gg_trg_turquoiseHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_turquoiseHideTimer, udg_tealTimer);
  TriggerAddAction(gg_trg_turquoiseHideTimer, Trig_turquoiseHideTimer_Actions);
};
