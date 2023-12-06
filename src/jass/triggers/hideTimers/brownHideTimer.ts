//===========================================================================
// Trigger: brownHideTimer
//===========================================================================
const Trig_brownHideTimer_Actions = (): void => {
  udg_hideEsc[12] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_brownHideTimer: () => void;
}
InitTrig_brownHideTimer = (): void => {
  gg_trg_brownHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_brownHideTimer, udg_brownHideTimer);
  TriggerAddAction(gg_trg_brownHideTimer, Trig_brownHideTimer_Actions);
};
