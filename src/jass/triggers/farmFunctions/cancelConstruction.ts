//===========================================================================
// Trigger: cancelConstruction
//===========================================================================
const Trig_cancelConstruction_Conditions = (): boolean => {
  if ((!(IsUnitType(GetCancelledStructure()!, UNIT_TYPE_STRUCTURE) === true))) {
    return false;
  }
  return true;
};

const Trig_cancelConstruction_Func003C = (): boolean => {
  if ((!(udg_farmCount[udg_atempint] > 0))) {
    return false;
  }
  return true;
};

const Trig_cancelConstruction_Func005Func001C = (): boolean => {
  if ((!(udg_dummyWisps > 0))) {
    return false;
  }
  return true;
};

const Trig_cancelConstruction_Actions = (): void => {
  udg_atempint = GetConvertedPlayerId(
    GetOwningPlayer(GetCancelledStructure()!),
  );
  if ((Trig_cancelConstruction_Func003C())) {
    udg_farmCount[udg_atempint] = udg_farmCount[udg_atempint] - 1;
  }
  SetPlayerStateBJ(
    ConvertedPlayer(udg_atempint)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[udg_atempint],
  );
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_cancelConstruction_Func005Func001C())) {
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
  let InitTrig_cancelConstruction: () => void;
}
InitTrig_cancelConstruction = (): void => {
  gg_trg_cancelConstruction = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_cancelConstruction,
    EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL,
  );
  TriggerAddCondition(
    gg_trg_cancelConstruction,
    Condition(Trig_cancelConstruction_Conditions),
  );
  TriggerAddAction(gg_trg_cancelConstruction, Trig_cancelConstruction_Actions);
};
