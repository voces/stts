//===========================================================================
// Trigger: timeDg
//===========================================================================
const Trig_timeDg_Actions = (): void => {
  udg_multiKillNum[11] = 0;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeDg: () => void;
}
InitTrig_timeDg = (): void => {
  gg_trg_timeDg = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_timeDg, udg_multiKillTimer[11]);
  TriggerAddAction(gg_trg_timeDg, Trig_timeDg_Actions);
};
