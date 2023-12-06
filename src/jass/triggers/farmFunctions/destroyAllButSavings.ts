//===========================================================================
// Trigger: destroyAllButSavings
//===========================================================================

const Trig_destroyAllButSavings_Func002002002 = (): boolean => {
  return GetBooleanAnd(
    IsUnitType(GetFilterUnit()!, UNIT_TYPE_STRUCTURE) === true,
    GetUnitTypeId(GetFilterUnit()!) !== FourCC("h005"),
  );
};

const Trig_destroyAllButSavings_Func003002 = (): void => {
  RemoveUnit(GetEnumUnit()!);
};

const Trig_destroyAllButSavings_Func007Func001C = (): boolean => {
  if ((!(udg_dummyWisps > 0))) {
    return false;
  }
  return true;
};

const Trig_destroyAllButSavings_Actions = (): void => {
  udg_atempint = GetConvertedPlayerId(GetTriggerPlayer()!);
  udg_atempgroup = GetUnitsOfPlayerMatching(
    ConvertedPlayer(udg_atempint)!,
    Condition(Trig_destroyAllButSavings_Func002002002),
  )!;
  ForGroupBJ(udg_atempgroup, Trig_destroyAllButSavings_Func003002);
  udg_farmCount[udg_atempint] = CountLivingPlayerUnitsOfTypeId(
    FourCC("h005"),
    ConvertedPlayer(udg_atempint)!,
  );
  SetPlayerStateBJ(
    ConvertedPlayer(udg_atempint)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[udg_atempint],
  );
  DestroyGroup(udg_atempgroup);
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_destroyAllButSavings_Func007Func001C())) {
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
  let InitTrig_destroyAllButSavings: () => void;
}
InitTrig_destroyAllButSavings = (): void => {
  gg_trg_destroyAllButSavings = CreateTrigger();
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(0)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(1)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(2)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(3)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(4)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(5)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(6)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(7)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(8)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(9)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(10)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(11)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(12)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(13)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(14)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(15)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(16)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(17)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(18)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(19)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(20)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(21)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(22)!,
    "-ds",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_destroyAllButSavings,
    Player(23)!,
    "-ds",
    true,
  );
  TriggerAddAction(
    gg_trg_destroyAllButSavings,
    Trig_destroyAllButSavings_Actions,
  );
};
