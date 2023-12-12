//===========================================================================
// Trigger: timeEmerald
//===========================================================================
const Trig_timeEmerald_Actions = () => {
  udg_multiKillNum[23] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeEmerald: () => void;
}
InitTrig_timeEmerald = () => {
  gg_trg_timeEmerald = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeEmerald, udg_multiKillTimer[23]);
  TriggerAddAction(gg_trg_timeEmerald, Trig_timeEmerald_Actions);
};
