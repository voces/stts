//===========================================================================
// Trigger: mintHideTimer
//===========================================================================
const Trig_mintHideTimer_Actions = (): void => {
  udg_hideEsc[19] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_mintHideTimer: () => void;
}
InitTrig_mintHideTimer = (): void => {
  gg_trg_mintHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_mintHideTimer, udg_mintHideTimer);
  TriggerAddAction(gg_trg_mintHideTimer, Trig_mintHideTimer_Actions);
};
