//===========================================================================
// Trigger: orangeHideTimer
//===========================================================================
const Trig_orangeHideTimer_Actions = (): void => {
  udg_hideEsc[6] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_orangeHideTimer: () => void;
}
InitTrig_orangeHideTimer = (): void => {
  gg_trg_orangeHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_orangeHideTimer,
    udg_orangeHideTimer,
  );
  TriggerAddAction(gg_trg_orangeHideTimer, Trig_orangeHideTimer_Actions);
};
