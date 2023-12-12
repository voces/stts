//===========================================================================
// Trigger: timeWheat
//===========================================================================
const Trig_timeWheat_Actions = () => {
  udg_multiKillNum[17] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeWheat: () => void;
}
InitTrig_timeWheat = () => {
  gg_trg_timeWheat = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeWheat, udg_multiKillTimer[17]);
  TriggerAddAction(gg_trg_timeWheat, Trig_timeWheat_Actions);
};
