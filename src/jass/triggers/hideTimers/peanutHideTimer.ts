//===========================================================================
// Trigger: peanutHideTimer
//===========================================================================
const Trig_peanutHideTimer_Actions = (): void => {
  udg_hideEsc[24] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_peanutHideTimer: () => void;
}
InitTrig_peanutHideTimer = (): void => {
  gg_trg_peanutHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_peanutHideTimer,
    udg_peanutHideTimer,
  );
  TriggerAddAction(gg_trg_peanutHideTimer, Trig_peanutHideTimer_Actions);
};
