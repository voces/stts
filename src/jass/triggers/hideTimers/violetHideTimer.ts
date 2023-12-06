//===========================================================================
// Trigger: violetHideTimer
//===========================================================================
const Trig_violetHideTimer_Actions = (): void => {
  udg_hideEsc[16] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_violetHideTimer: () => void;
}
InitTrig_violetHideTimer = (): void => {
  gg_trg_violetHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_violetHideTimer,
    udg_violetHideTimer,
  );
  TriggerAddAction(gg_trg_violetHideTimer, Trig_violetHideTimer_Actions);
};
