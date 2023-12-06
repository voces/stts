//===========================================================================
// Trigger: greenHideTimer
//===========================================================================
const Trig_greenHideTimer_Actions = (): void => {
  udg_hideEsc[7] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_greenHideTimer: () => void;
}
InitTrig_greenHideTimer = (): void => {
  gg_trg_greenHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_greenHideTimer, udg_greenHideTimer);
  TriggerAddAction(gg_trg_greenHideTimer, Trig_greenHideTimer_Actions);
};
