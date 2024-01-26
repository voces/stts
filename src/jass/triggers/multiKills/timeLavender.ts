//===========================================================================
// Trigger: timeLavender
//===========================================================================
const Trig_timeLavender_Actions = () => {
  udg_multiKillNum[20] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeLavender: () => void;
}
InitTrig_timeLavender = () => {
  gg_trg_timeLavender = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeLavender, udg_multiKillTimer[20]);
  TriggerAddAction(gg_trg_timeLavender, Trig_timeLavender_Actions);
};
