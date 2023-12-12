//===========================================================================
// Trigger: timeMaroon
//===========================================================================
const Trig_timeMaroon_Actions = () => {
  udg_multiKillNum[13] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeMaroon: () => void;
}
InitTrig_timeMaroon = () => {
  gg_trg_timeMaroon = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeMaroon, udg_multiKillTimer[13]);
  TriggerAddAction(gg_trg_timeMaroon, Trig_timeMaroon_Actions);
};
