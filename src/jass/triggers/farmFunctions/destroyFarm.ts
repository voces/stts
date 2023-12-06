//===========================================================================
// Trigger: destroyFarm
//===========================================================================
const Trig_destroyFarm_Conditions = (): boolean => {
  if ((!(GetTrainedUnitType() === FourCC("nC13")))) {
    return false;
  }
  return true;
};

const Trig_destroyFarm_Func002C = (): boolean => {
  if ((!(udg_farmCount[udg_atempint] > 0))) {
    return false;
  }
  return true;
};

const Trig_destroyFarm_Func005Func001C = (): boolean => {
  if ((!(udg_dummyWisps > 0))) {
    return false;
  }
  return true;
};

const Trig_destroyFarm_Actions = (): void => {
  udg_atempint = GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!));
  if ((Trig_destroyFarm_Func002C())) {
    udg_farmCount[udg_atempint] = udg_farmCount[udg_atempint] - 1;
  }
  SetPlayerStateBJ(
    ConvertedPlayer(udg_atempint)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[udg_atempint],
  );
  RemoveUnit(GetTriggerUnit()!);
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_destroyFarm_Func005Func001C())) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_saves[udg_atempint],
      );
    } else {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_farmCount[udg_atempint],
      );
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_destroyFarm: () => void;
}
InitTrig_destroyFarm = (): void => {
  gg_trg_destroyFarm = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_destroyFarm,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerAddCondition(
    gg_trg_destroyFarm,
    Condition(Trig_destroyFarm_Conditions),
  );
  TriggerAddAction(gg_trg_destroyFarm, Trig_destroyFarm_Actions);
};
