//===========================================================================
// Trigger: yellowHideTimer
//===========================================================================
const Trig_yellowHideTimer_Actions = (): void => {
  udg_hideEsc[5] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_yellowHideTimer: () => void;
}
InitTrig_yellowHideTimer = (): void => {
  gg_trg_yellowHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_yellowHideTimer,
    udg_yellowHideTimer,
  );
  TriggerAddAction(gg_trg_yellowHideTimer, Trig_yellowHideTimer_Actions);
};
