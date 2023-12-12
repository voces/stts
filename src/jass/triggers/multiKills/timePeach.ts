//===========================================================================
// Trigger: timePeach
//===========================================================================
const Trig_timePeach_Actions = () => {
  udg_multiKillNum[18] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timePeach: () => void;
}
InitTrig_timePeach = () => {
  gg_trg_timePeach = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timePeach, udg_multiKillTimer[18]);
  TriggerAddAction(gg_trg_timePeach, Trig_timePeach_Actions);
};
