//===========================================================================
// Trigger: greyHideTimer
//===========================================================================
const Trig_greyHideTimer_Actions = (): void => {
  udg_hideEsc[9] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_greyHideTimer: () => void;
}
InitTrig_greyHideTimer = (): void => {
  gg_trg_greyHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_greyHideTimer, udg_greyHideTimer);
  TriggerAddAction(gg_trg_greyHideTimer, Trig_greyHideTimer_Actions);
};
