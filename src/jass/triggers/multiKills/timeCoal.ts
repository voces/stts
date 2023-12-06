//===========================================================================
// Trigger: timeCoal
//===========================================================================
const Trig_timeCoal_Actions = (): void => {
  udg_multiKillNum[21] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeCoal: () => void;
}
InitTrig_timeCoal = (): void => {
  gg_trg_timeCoal = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeCoal, udg_multiKillTimer[21]);
  TriggerAddAction(gg_trg_timeCoal, Trig_timeCoal_Actions);
};
