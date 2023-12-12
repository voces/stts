//===========================================================================
// Trigger: dummyWisps
//===========================================================================
const Trig_dummyWisps_Conditions = () => {
  if ((!(GetUnitTypeId(GetTriggerUnit()!) === FourCC("e000")))) {
    return false;
  }
  return true;
};

const Trig_dummyWisps_Func006C = () => {
  if ((!(udg_saves[udg_atempint] >= udg_wispPoints))) {
    return false;
  }
  if ((!(udg_wispPoints > 0))) {
    return false;
  }
  return true;
};

const Trig_dummyWisps_Func007Func001C = () => {
  if ((!(udg_dummyWisps > 0))) {
    return false;
  }
  return true;
};

const Trig_dummyWisps_Actions = () => {
  udg_atempint = GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!));
  udg_saves[udg_atempint] = udg_saves[udg_atempint] + 1;
  DisplayTextToForce(
    GetPlayersAll()!,
    (("                              " +
      udg_colorString[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
      ]) + GetPlayerName(GetOwningPlayer(GetKillingUnit()!))) +
      "|r killed a spirit for 100 gold!",
  );
  AdjustPlayerStateBJ(
    100,
    GetOwningPlayer(GetKillingUnit()!),
    PLAYER_STATE_RESOURCE_GOLD,
  );
  bj_lastCreatedUnit = CreateUnit(
    Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    wispType,
    RandomX(wispArea),
    RandomY(wispArea),
    0,
  );
  if ((Trig_dummyWisps_Func006C())) {
    TriggerExecute(gg_trg_cancel);
  }
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_dummyWisps_Func007Func001C())) {
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
  let InitTrig_dummyWisps: () => void;
}
InitTrig_dummyWisps = () => {
  gg_trg_dummyWisps = CreateTrigger();
  DisableTrigger(gg_trg_dummyWisps);
  TriggerRegisterAnyUnitEventBJ(gg_trg_dummyWisps, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_dummyWisps, Condition(Trig_dummyWisps_Conditions));
  TriggerAddAction(gg_trg_dummyWisps, Trig_dummyWisps_Actions);
};
