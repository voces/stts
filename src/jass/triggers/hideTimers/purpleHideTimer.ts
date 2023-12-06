//===========================================================================
// Trigger: purpleHideTimer
//===========================================================================
const Trig_purpleHideTimer_Actions = (): void => {
  udg_hideEsc[4] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_purpleHideTimer: () => void;
}
InitTrig_purpleHideTimer = (): void => {
  gg_trg_purpleHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_purpleHideTimer,
    udg_purpleHideTimer,
  );
  TriggerAddAction(gg_trg_purpleHideTimer, Trig_purpleHideTimer_Actions);
};
