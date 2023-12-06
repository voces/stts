//===========================================================================
// Trigger: increaseGoldSheep
//===========================================================================
const Trig_increaseGoldSheep_Func002002 = (): void => {
  AdjustPlayerStateBJ(1, GetEnumPlayer()!, PLAYER_STATE_RESOURCE_GOLD);
};

const Trig_increaseGoldSheep_Actions = (): void => {
  ForForce(udg_Sheep, Trig_increaseGoldSheep_Func002002);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_increaseGoldSheep: () => void;
}
InitTrig_increaseGoldSheep = (): void => {
  gg_trg_increaseGoldSheep = CreateTrigger();
  DisableTrigger(gg_trg_increaseGoldSheep);
  TriggerRegisterTimerEventPeriodic(gg_trg_increaseGoldSheep, 1.3);
  TriggerAddAction(gg_trg_increaseGoldSheep, Trig_increaseGoldSheep_Actions);
};
