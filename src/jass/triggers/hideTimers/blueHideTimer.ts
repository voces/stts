//===========================================================================
// Trigger: blueHideTimer
//===========================================================================
const Trig_blueHideTimer_Actions = (): void => {
  udg_hideEsc[2] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_blueHideTimer: () => void;
}
InitTrig_blueHideTimer = (): void => {
  gg_trg_blueHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_blueHideTimer, udg_blueHideTimer);
  TriggerAddAction(gg_trg_blueHideTimer, Trig_blueHideTimer_Actions);
};
