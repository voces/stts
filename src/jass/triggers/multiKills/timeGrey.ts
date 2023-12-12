//===========================================================================
// Trigger: timeGrey
//===========================================================================
const Trig_timeGrey_Actions = () => {
  udg_multiKillNum[9] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeGrey: () => void;
}
InitTrig_timeGrey = () => {
  gg_trg_timeGrey = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeGrey, udg_multiKillTimer[9]);
  TriggerAddAction(gg_trg_timeGrey, Trig_timeGrey_Actions);
};
