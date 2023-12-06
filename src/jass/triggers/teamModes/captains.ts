//===========================================================================
// Trigger: captains
//===========================================================================
const Trig_captains_Func004Func002C = (): boolean => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!) < 25))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 15)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 15)!) < 25))) {
    return false;
  }
  return true;
};

const Trig_captains_Func004C = (): boolean => {
  if ((GetEventPlayerChatString()! === "-captains")) {
    return true;
  }
  if ((Trig_captains_Func004Func002C())) {
    return true;
  }
  return false;
};

const Trig_captains_Func005001001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
    ),
  );
};

const Trig_captains_Conditions = (): boolean => {
  if ((!(udg_Custom === GetTriggerPlayer()!))) {
    return false;
  }
  if (
    (!(CountPlayersInForceBJ(GetPlayersByMapControl(MAP_CONTROL_USER)!) >= 1))
  ) {
    return false;
  }
  if ((!Trig_captains_Func004C())) {
    return false;
  }
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(Condition(Trig_captains_Func005001001001))!,
    ) > 2))
  ) {
    return false;
  }
  return true;
};

const Trig_captains_Func006Func001Func014002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_captains_Func006Func001Func015002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_captains_Func006Func001Func016002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func001Func017002 = (): void => {
  SetPlayerAllianceStateBJ(
    udg_Custom,
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
};

const Trig_captains_Func006Func001Func020Func003Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  return true;
};

const Trig_captains_Func006Func001Func020Func003A = (): void => {
  if ((Trig_captains_Func006Func001Func020Func003Func001C())) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
  }
};

const Trig_captains_Func006Func001Func020Func004A = (): void => {
  udg_captains[1] = GetEnumPlayer()!;
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func001Func020Func005A = (): void => {
  udg_captains[3] = GetEnumPlayer()!;
};

const Trig_captains_Func006Func001Func020Func006A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func001Func020C = (): boolean => {
  if ((!(GetEventPlayerChatString()! === "-captains"))) {
    return false;
  }
  return true;
};

const Trig_captains_Func006Func001Func031Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(GetEnumPlayer()! !== udg_captains[1]))) {
    return false;
  }
  if ((!(GetEnumPlayer()! !== udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_captains_Func006Func001Func031A = (): void => {
  if ((Trig_captains_Func006Func001Func031Func001C())) {
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      2,
      udg_atempint,
      udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
        GetPlayerName(GetEnumPlayer()!),
    );
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Draft);
    udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_atempint;
    udg_atempint = udg_atempint + 1;
  }
};

const Trig_captains_Func006Func001C = (): boolean => {
  if (
    (!(GetPlayerController(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!))!,
    ) === MAP_CONTROL_USER))
  ) {
    return false;
  }
  if (
    (!(GetPlayerController(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 15)!))!,
    ) === MAP_CONTROL_USER))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[
      GetConvertedPlayerId(
        ConvertedPlayer(
          S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!),
        )!,
      )
    ] === 0))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[
      GetConvertedPlayerId(
        ConvertedPlayer(
          S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 15)!),
        )!,
      )
    ] === 0))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 15)!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 15)!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  return true;
};

const Trig_captains_Func006Func017002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_captains_Func006Func018002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_captains_Func006Func019002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func020002 = (): void => {
  SetPlayerAllianceStateBJ(
    udg_Custom,
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
};

const Trig_captains_Func006Func023Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  return true;
};

const Trig_captains_Func006Func023A = (): void => {
  if ((Trig_captains_Func006Func023Func001C())) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
  }
};

const Trig_captains_Func006Func024A = (): void => {
  udg_captains[1] = GetEnumPlayer()!;
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func025A = (): void => {
  udg_captains[3] = GetEnumPlayer()!;
};

const Trig_captains_Func006Func026A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func037Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(GetEnumPlayer()! !== udg_captains[1]))) {
    return false;
  }
  if ((!(GetEnumPlayer()! !== udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_captains_Func006Func037A = (): void => {
  if ((Trig_captains_Func006Func037Func001C())) {
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      2,
      udg_atempint,
      udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
        GetPlayerName(GetEnumPlayer()!),
    );
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Draft);
    udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_atempint;
    udg_atempint = udg_atempint + 1;
  }
};

const Trig_captains_Func006C = (): boolean => {
  if ((!(GetEventPlayerChatString()! === "-captains"))) {
    return false;
  }
  return true;
};

const Trig_captains_Actions = (): void => {
  TriggerSleepAction(0.01);
  if ((Trig_captains_Func006C())) {
    DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
    DisableTrigger(gg_trg_random);
    DisableTrigger(gg_trg_fair);
    DisableTrigger(gg_trg_reverse);
    DisableTrigger(gg_trg_start);
    DisableTrigger(gg_trg_smart);
    DisableTrigger(gg_trg_versus);
    DisableTrigger(GetTriggeringTrigger()!);
    DisableTrigger(gg_trg_pick);
    DisableTrigger(gg_trg_end);
    udg_lastGameString = GetEventPlayerChatString()!;
    TriggerExecute(gg_trg_createLists);
    udg_Teams = 4;
    udg_pickIndex = 1;
    ForForce(udg_Sheep, Trig_captains_Func006Func017002);
    ForForce(udg_Wolf, Trig_captains_Func006Func018002);
    ForForce(udg_Spirit, Trig_captains_Func006Func019002);
    ForForce(GetPlayersAll()!, Trig_captains_Func006Func020002);
    StartTimerBJ(udg_Createtimer, false, 300);
    TimerDialogDisplayBJ(true, udg_createTimerWindow);
    ForForce(GetPlayersAll()!, Trig_captains_Func006Func023A);
    ForForce(
      GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
      Trig_captains_Func006Func024A,
    );
    ForForce(
      GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
      Trig_captains_Func006Func025A,
    );
    ForForce(udg_Spirit, Trig_captains_Func006Func026A);
    CreateMultiboardBJ(
      3,
      25,
      udg_colorString[GetConvertedPlayerId(udg_captains[1])] +
        (GetPlayerName(udg_captains[1]) + "'s turn"),
    );
    udg_sheepLastGame[GetConvertedPlayerId(udg_captains[1])] = true;
    udg_sheepLastGame[GetConvertedPlayerId(udg_captains[3])] = false;
    udg_captainsMultiboard = GetLastCreatedMultiboard()!;
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 25;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      MultiboardSetItemStyleBJ(
        udg_captainsMultiboard,
        1,
        GetForLoopIndexA(),
        true,
        false,
      );
      MultiboardSetItemStyleBJ(
        udg_captainsMultiboard,
        2,
        GetForLoopIndexA(),
        true,
        false,
      );
      MultiboardSetItemStyleBJ(
        udg_captainsMultiboard,
        3,
        GetForLoopIndexA(),
        true,
        false,
      );
      MultiboardSetItemWidthBJ(
        udg_captainsMultiboard,
        1,
        GetForLoopIndexA(),
        udg_draftMultiboardWidth,
      );
      MultiboardSetItemWidthBJ(
        udg_captainsMultiboard,
        2,
        GetForLoopIndexA(),
        udg_draftMultiboardWidth,
      );
      MultiboardSetItemWidthBJ(
        udg_captainsMultiboard,
        3,
        GetForLoopIndexA(),
        udg_draftMultiboardWidth,
      );
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      1,
      1,
      ("$" + udg_colorString[GetConvertedPlayerId(udg_captains[1])]) +
        GetPlayerName(udg_captains[1]),
    );
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      3,
      1,
      ("$" + udg_colorString[GetConvertedPlayerId(udg_captains[3])]) +
        GetPlayerName(udg_captains[3]),
    );
    udg_multiboardRow[GetConvertedPlayerId(udg_captains[1])] = 1;
    udg_multiboardRow[GetConvertedPlayerId(udg_captains[3])] = 1;
    udg_atempint = 2;
    ForForce(GetPlayersAll()!, Trig_captains_Func006Func037A);
    MultiboardDisplayBJ(true, udg_captainsMultiboard);
    MultiboardSuppressDisplay(false);
    MultiboardMinimizeBJ(false, udg_captainsMultiboard);
    udg_draftOn = true;
    udg_captainRow = 2;
    udg_captainTurn = 1;
    EnableTrigger(gg_trg_draftPlayer);
    EnableTrigger(gg_trg_giveUpCaptain);
    DisableTrigger(gg_trg_draftVersus);
    removeAllUnits();
  } else {
    if ((Trig_captains_Func006Func001C())) {
      DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
      DisableTrigger(gg_trg_random);
      DisableTrigger(gg_trg_fair);
      DisableTrigger(GetTriggeringTrigger()!);
      DisableTrigger(gg_trg_pick);
      DisableTrigger(gg_trg_smart);
      DisableTrigger(gg_trg_reverse);
      DisableTrigger(gg_trg_start);
      DisableTrigger(gg_trg_end);
      udg_lastGameString = GetEventPlayerChatString()!;
      TriggerExecute(gg_trg_createLists);
      udg_Teams = 4;
      udg_pickIndex = 1;
      ForForce(udg_Sheep, Trig_captains_Func006Func001Func014002);
      ForForce(udg_Wolf, Trig_captains_Func006Func001Func015002);
      ForForce(udg_Spirit, Trig_captains_Func006Func001Func016002);
      ForForce(GetPlayersAll()!, Trig_captains_Func006Func001Func017002);
      StartTimerBJ(udg_Createtimer, false, 300);
      TimerDialogDisplayBJ(true, udg_createTimerWindow);
      if ((Trig_captains_Func006Func001Func020C())) {
        ForForce(GetPlayersAll()!, Trig_captains_Func006Func001Func020Func003A);
        ForForce(
          GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
          Trig_captains_Func006Func001Func020Func004A,
        );
        ForForce(
          GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
          Trig_captains_Func006Func001Func020Func005A,
        );
        ForForce(udg_Spirit, Trig_captains_Func006Func001Func020Func006A);
      } else {
        udg_captains[1] = ConvertedPlayer(
          S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!),
        )!;
        udg_captains[3] = ConvertedPlayer(
          S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 15)!),
        )!;
      }
      CreateMultiboardBJ(
        3,
        25,
        udg_colorString[GetConvertedPlayerId(udg_captains[1])] +
          (GetPlayerName(udg_captains[1]) + "'s turn"),
      );
      udg_sheepLastGame[GetConvertedPlayerId(udg_captains[1])] = true;
      udg_sheepLastGame[GetConvertedPlayerId(udg_captains[3])] = false;
      udg_captainsMultiboard = GetLastCreatedMultiboard()!;
      bj_forLoopAIndex = 1;
      bj_forLoopAIndexEnd = 25;
      while (true) {
        if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
        MultiboardSetItemStyleBJ(
          udg_captainsMultiboard,
          1,
          GetForLoopIndexA(),
          true,
          false,
        );
        MultiboardSetItemStyleBJ(
          udg_captainsMultiboard,
          2,
          GetForLoopIndexA(),
          true,
          false,
        );
        MultiboardSetItemStyleBJ(
          udg_captainsMultiboard,
          3,
          GetForLoopIndexA(),
          true,
          false,
        );
        MultiboardSetItemWidthBJ(
          udg_captainsMultiboard,
          1,
          GetForLoopIndexA(),
          udg_draftMultiboardWidth,
        );
        MultiboardSetItemWidthBJ(
          udg_captainsMultiboard,
          2,
          GetForLoopIndexA(),
          udg_draftMultiboardWidth,
        );
        MultiboardSetItemWidthBJ(
          udg_captainsMultiboard,
          3,
          GetForLoopIndexA(),
          udg_draftMultiboardWidth,
        );
        bj_forLoopAIndex = bj_forLoopAIndex + 1;
      }
      MultiboardSetItemValueBJ(
        udg_captainsMultiboard,
        1,
        1,
        ("$" + udg_colorString[GetConvertedPlayerId(udg_captains[1])]) +
          GetPlayerName(udg_captains[1]),
      );
      MultiboardSetItemValueBJ(
        udg_captainsMultiboard,
        3,
        1,
        ("$" + udg_colorString[GetConvertedPlayerId(udg_captains[3])]) +
          GetPlayerName(udg_captains[3]),
      );
      udg_multiboardRow[GetConvertedPlayerId(udg_captains[1])] = 1;
      udg_multiboardRow[GetConvertedPlayerId(udg_captains[3])] = 1;
      udg_atempint = 2;
      ForForce(GetPlayersAll()!, Trig_captains_Func006Func001Func031A);
      MultiboardDisplayBJ(true, udg_captainsMultiboard);
      MultiboardSuppressDisplay(false);
      MultiboardMinimizeBJ(false, udg_captainsMultiboard);
      udg_draftOn = true;
      udg_captainRow = 2;
      udg_captainTurn = 1;
      EnableTrigger(gg_trg_draftPlayer);
      EnableTrigger(gg_trg_giveUpCaptain);
      DisableTrigger(gg_trg_draftVersus);
      removeAllUnits();
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_captains: () => void;
}
InitTrig_captains = (): void => {
  gg_trg_captains = CreateTrigger();
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(0)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(1)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(2)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(3)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(4)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(5)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(6)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(7)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(8)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(9)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(10)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(11)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(12)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(13)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(14)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(15)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(16)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(17)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(18)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(19)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(20)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(21)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(22)!,
    "-captains",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_captains,
    Player(23)!,
    "-captains",
    false,
  );
  TriggerAddCondition(gg_trg_captains, Condition(Trig_captains_Conditions));
  TriggerAddAction(gg_trg_captains, Trig_captains_Actions);
};
