//===========================================================================
// Trigger: timeTurquoise
//===========================================================================
const Trig_timeTurquoise_Actions = () => {
  udg_multiKillNum[15] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeTurquoise: () => void;
}
InitTrig_timeTurquoise = () => {
  gg_trg_timeTurquoise = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(
    gg_trg_timeTurquoise,
    udg_multiKillTimer[15],
  );
  TriggerAddAction(gg_trg_timeTurquoise, Trig_timeTurquoise_Actions);
};
