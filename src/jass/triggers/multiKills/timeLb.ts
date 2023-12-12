//===========================================================================
// Trigger: timeLb
//===========================================================================
const Trig_timeLb_Actions = () => {
  udg_multiKillNum[10] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeLb: () => void;
}
InitTrig_timeLb = () => {
  gg_trg_timeLb = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeLb, udg_multiKillTimer[10]);
  TriggerAddAction(gg_trg_timeLb, Trig_timeLb_Actions);
};
