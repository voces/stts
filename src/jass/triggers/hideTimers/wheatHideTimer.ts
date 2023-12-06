//===========================================================================
// Trigger: wheatHideTimer
//===========================================================================
const Trig_wheatHideTimer_Actions = (): void => {
  udg_hideEsc[17] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_wheatHideTimer: () => void;
}
InitTrig_wheatHideTimer = (): void => {
  gg_trg_wheatHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_wheatHideTimer, udg_wheatHideTimer);
  TriggerAddAction(gg_trg_wheatHideTimer, Trig_wheatHideTimer_Actions);
};
