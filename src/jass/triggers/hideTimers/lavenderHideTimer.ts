//===========================================================================
// Trigger: lavenderHideTimer
//===========================================================================
const Trig_lavenderHideTimer_Actions = (): void => {
  udg_hideEsc[20] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_lavenderHideTimer: () => void;
}
InitTrig_lavenderHideTimer = (): void => {
  gg_trg_lavenderHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_lavenderHideTimer,
    udg_lavenderHideTimer,
  );
  TriggerAddAction(gg_trg_lavenderHideTimer, Trig_lavenderHideTimer_Actions);
};
