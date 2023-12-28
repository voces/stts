const Trig_destroyFarm_Actions = () => {
  udg_atempint = GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!));
  if (udg_farmCount[udg_atempint] > 0) udg_farmCount[udg_atempint]--;
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
    if (!udg_switchOn) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_farmCount[udg_atempint],
      );
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_destroyFarm: () => void;
}
InitTrig_destroyFarm = () => {
  gg_trg_destroyFarm = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_destroyFarm, EVENT_PLAYER_UNIT_TRAIN_START);
  TriggerAddCondition(gg_trg_destroyFarm, Condition(() => GetTrainedUnitType() === FourCC("nC13")));
  TriggerAddAction(gg_trg_destroyFarm, Trig_destroyFarm_Actions);
};
