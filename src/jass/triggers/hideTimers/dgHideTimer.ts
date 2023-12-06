//===========================================================================
// Trigger: dgHideTimer
//===========================================================================
const Trig_dgHideTimer_Actions = (): void => {
  udg_hideEsc[11] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_dgHideTimer: () => void;
}
InitTrig_dgHideTimer = (): void => {
  gg_trg_dgHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_dgHideTimer, udg_dgHideTimer);
  TriggerAddAction(gg_trg_dgHideTimer, Trig_dgHideTimer_Actions);
};
