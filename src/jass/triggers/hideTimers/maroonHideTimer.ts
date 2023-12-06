//===========================================================================
// Trigger: maroonHideTimer
//===========================================================================
const Trig_maroonHideTimer_Actions = (): void => {
  udg_hideEsc[13] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_maroonHideTimer: () => void;
}
InitTrig_maroonHideTimer = (): void => {
  gg_trg_maroonHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_maroonHideTimer,
    udg_maroonHideTimer,
  );
  TriggerAddAction(gg_trg_maroonHideTimer, Trig_maroonHideTimer_Actions);
};
