//===========================================================================
// Trigger: redHideTimer
//===========================================================================
const Trig_redHideTimer_Actions = (): void => {
  udg_hideEsc[1] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_redHideTimer: () => void;
}
InitTrig_redHideTimer = (): void => {
  gg_trg_redHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_redHideTimer, udg_redHideTimer);
  TriggerAddAction(gg_trg_redHideTimer, Trig_redHideTimer_Actions);
};
