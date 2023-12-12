//===========================================================================
// Trigger: increaseGoldWolf
//===========================================================================
const Trig_increaseGoldWolf_Func002002 = () => {
  AdjustPlayerStateBJ(1, GetEnumPlayer()!, PLAYER_STATE_RESOURCE_GOLD);
};

const Trig_increaseGoldWolf_Actions = () => {
  ForForce(udg_Wolf, Trig_increaseGoldWolf_Func002002);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_increaseGoldWolf: () => void;
}
InitTrig_increaseGoldWolf = () => {
  gg_trg_increaseGoldWolf = CreateTrigger();
  DisableTrigger(gg_trg_increaseGoldWolf);
  TriggerRegisterTimerEventPeriodic(gg_trg_increaseGoldWolf, 1.75);
  TriggerAddAction(gg_trg_increaseGoldWolf, Trig_increaseGoldWolf_Actions);
};
