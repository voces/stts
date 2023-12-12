//===========================================================================
// Trigger: timePeanut
//===========================================================================
const Trig_timePeanut_Actions = () => {
  udg_multiKillNum[24] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timePeanut: () => void;
}
InitTrig_timePeanut = () => {
  gg_trg_timePeanut = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timePeanut, udg_multiKillTimer[24]);
  TriggerAddAction(gg_trg_timePeanut, Trig_timePeanut_Actions);
};
