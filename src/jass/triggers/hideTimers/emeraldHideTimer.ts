//===========================================================================
// Trigger: emeraldHideTimer
//===========================================================================
const Trig_emeraldHideTimer_Actions = (): void => {
  udg_hideEsc[23] = false;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_emeraldHideTimer: () => void;
}
InitTrig_emeraldHideTimer = (): void => {
  gg_trg_emeraldHideTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_emeraldHideTimer,
    udg_emeraldHideTimer,
  );
  TriggerAddAction(gg_trg_emeraldHideTimer, Trig_emeraldHideTimer_Actions);
};
