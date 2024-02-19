import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_versus_Func004Func002C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 10)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 10)!) < 25))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 13)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 13)!) < 25))) {
    return false;
  }
  return true;
};

const Trig_versus_Func004C = () => {
  if ((GetEventPlayerChatString() === "-versus")) {
    return true;
  }
  if ((Trig_versus_Func004Func002C())) {
    return true;
  }
  return false;
};

const Trig_versus_Func005001001001 = () => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
    ),
  );
};

const Trig_versus_Conditions = () => {
  if ((!(udg_Custom === GetTriggerPlayer()!))) {
    return false;
  }
  if (
    (!(CountPlayersInForceBJ(GetPlayersByMapControl(MAP_CONTROL_USER)!) >= 1))
  ) {
    return false;
  }
  if ((!Trig_versus_Func004C())) {
    return false;
  }
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(Condition(Trig_versus_Func005001001001))!,
    ) > 2))
  ) {
    return false;
  }
  return true;
};

const Trig_versus_Func006Func004Func020002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_versus_Func006Func004Func021002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_versus_Func006Func004Func022002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_versus_Func006Func004Func023002 = () => {
  SetPlayerAllianceStateBJ(
    udg_Custom,
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
};

const Trig_versus_Func006Func004Func026Func003Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_versus_Func006Func004Func026Func003A = () => {
  if ((Trig_versus_Func006Func004Func026Func003Func001C())) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
  }
};

const Trig_versus_Func006Func004Func026Func004A = () => {
  udg_captains[1] = GetEnumPlayer()!;
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_versus_Func006Func004Func026Func005A = () => {
  udg_captains[3] = GetEnumPlayer()!;
};

const Trig_versus_Func006Func004Func026Func006A = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_versus_Func006Func004Func026C = () => {
  if ((!(GetEventPlayerChatString() === "-captains"))) {
    return false;
  }
  return true;
};

const Trig_versus_Func006Func004Func037Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(GetEnumPlayer() !== udg_captains[1]))) {
    return false;
  }
  if ((!(GetEnumPlayer() !== udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_versus_Func006Func004Func037A = () => {
  if ((Trig_versus_Func006Func004Func037Func001C())) {
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      2,
      cid,
      udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
        GetPlayerName(GetEnumPlayer()!),
    );
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Draft);
    udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = cid;
    cid = cid + 1;
  }
};

const Trig_versus_Func006Func004C = () => {
  if (
    (!(udg_AFK[
      GetConvertedPlayerId(
        ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 10)!))!,
      )
    ] === 0))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[
      GetConvertedPlayerId(
        ConvertedPlayer(
          S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 13)!),
        )!,
      )
    ] === 0))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 10)!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 10)!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 13)!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 13)!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  return true;
};

const Trig_versus_Func006Func023002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_versus_Func006Func024002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_versus_Func006Func025002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_versus_Func006Func026002 = () => {
  SetPlayerAllianceStateBJ(
    udg_Custom,
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
};

const Trig_versus_Func006Func029Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_versus_Func006Func029A = () => {
  if ((Trig_versus_Func006Func029Func001C())) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
  }
};

const Trig_versus_Func006Func030A = () => {
  udg_captains[1] = GetEnumPlayer()!;
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_versus_Func006Func031A = () => {
  udg_captains[3] = GetEnumPlayer()!;
};

const Trig_versus_Func006Func032A = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_versus_Func006Func043Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(GetEnumPlayer() !== udg_captains[1]))) {
    return false;
  }
  if ((!(GetEnumPlayer() !== udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_versus_Func006Func043A = () => {
  if ((Trig_versus_Func006Func043Func001C())) {
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      2,
      cid,
      udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
        GetPlayerName(GetEnumPlayer()!),
    );
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Draft);
    udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = cid;
    cid = cid + 1;
  }
};

const Trig_versus_Func006C = () => {
  if ((!(GetEventPlayerChatString() === "-versus"))) {
    return false;
  }
  return true;
};

const Trig_versus_Actions = () => {
  const s = GetEventPlayerChatString()!;
  TriggerSleepAction(0.01);
  if ((Trig_versus_Func006C())) {
    udg_versus = 1;
    udg_versusOff = false;
    udg_someVersusBoolean = true;
    DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
    udg_pickAgain = false;
    udg_gameTime[1] = 0;
    udg_gameTime[2] = 0;
    DisableTrigger(gg_trg_fair);
    DisableTrigger(gg_trg_smart);
    DisableTrigger(gg_trg_reverse);
    DisableTrigger(gg_trg_start);
    DisableTrigger(gg_trg_versus);
    DisableTrigger(gg_trg_captains);
    DisableTrigger(gg_trg_pick);
    DisableTrigger(gg_trg_end);
    udg_lastGameString = s;
    TriggerExecute(gg_trg_createLists);
    udg_Teams = TEAMS_CAPTAINS;
    udg_pickIndex = 1;
    ForForce(udg_Sheep, Trig_versus_Func006Func023002);
    ForForce(udg_Wolf, Trig_versus_Func006Func024002);
    ForForce(udg_Spirit, Trig_versus_Func006Func025002);
    ForForce(GetPlayersAll()!, Trig_versus_Func006Func026002);
    TimerStart(udg_Createtimer, 300, false, null);
    TimerDialogDisplayBJ(true, udg_createTimerWindow);
    ForForce(GetPlayersAll()!, Trig_versus_Func006Func029A);
    ForForce(
      GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
      Trig_versus_Func006Func030A,
    );
    ForForce(
      GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
      Trig_versus_Func006Func031A,
    );
    ForForce(udg_Spirit, Trig_versus_Func006Func032A);
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
    cid = 2;
    ForForce(GetPlayersAll()!, Trig_versus_Func006Func043A);
    MultiboardDisplayBJ(true, udg_captainsMultiboard);
    MultiboardSuppressDisplay(false);
    MultiboardMinimizeBJ(false, udg_captainsMultiboard);
    udg_draftOn = true;
    udg_captainRow = 2;
    udg_captainTurn = 1;
    EnableTrigger(gg_trg_draftVersus);
    EnableTrigger(gg_trg_giveUpCaptain);
    DisableTrigger(gg_trg_draftPlayer);
    removeAllUnits();
  } else {
    if ((Trig_versus_Func006Func004C())) {
      DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
      udg_versus = 1;
      udg_versusOff = false;
      udg_pickAgain = false;
      udg_gameTime[1] = 0;
      udg_gameTime[2] = 0;
      DisableTrigger(gg_trg_captains);
      DisableTrigger(gg_trg_fair);
      DisableTrigger(gg_trg_versus);
      DisableTrigger(gg_trg_pick);
      DisableTrigger(gg_trg_smart);
      DisableTrigger(gg_trg_reverse);
      DisableTrigger(gg_trg_start);
      DisableTrigger(gg_trg_end);
      udg_lastGameString = s;
      TriggerExecute(gg_trg_createLists);
      udg_Teams = TEAMS_CAPTAINS;
      udg_pickIndex = 1;
      ForForce(udg_Sheep, Trig_versus_Func006Func004Func020002);
      ForForce(udg_Wolf, Trig_versus_Func006Func004Func021002);
      ForForce(udg_Spirit, Trig_versus_Func006Func004Func022002);
      ForForce(GetPlayersAll()!, Trig_versus_Func006Func004Func023002);
      TimerStart(udg_Createtimer, 300, false, null);
      TimerDialogDisplayBJ(true, udg_createTimerWindow);
      if ((Trig_versus_Func006Func004Func026C())) {
        ForForce(GetPlayersAll()!, Trig_versus_Func006Func004Func026Func003A);
        ForForce(
          GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
          Trig_versus_Func006Func004Func026Func004A,
        );
        ForForce(
          GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
          Trig_versus_Func006Func004Func026Func005A,
        );
        ForForce(udg_Spirit, Trig_versus_Func006Func004Func026Func006A);
      } else {
        udg_captains[1] = ConvertedPlayer(
          S2I(SubStringBJ(s, 9, 10)!),
        )!;
        udg_captains[3] = ConvertedPlayer(
          S2I(SubStringBJ(s, 11, 13)!),
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
      cid = 2;
      ForForce(GetPlayersAll()!, Trig_versus_Func006Func004Func037A);
      MultiboardDisplayBJ(true, udg_captainsMultiboard);
      MultiboardSuppressDisplay(false);
      MultiboardMinimizeBJ(false, udg_captainsMultiboard);
      udg_draftOn = true;
      udg_captainRow = 2;
      udg_captainTurn = 1;
      EnableTrigger(gg_trg_draftVersus);
      EnableTrigger(gg_trg_giveUpCaptain);
      DisableTrigger(gg_trg_draftPlayer);
      removeAllUnits();
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_versus: () => void;
}
InitTrig_versus = () => {
  gg_trg_versus = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_versus, "-versus", false);
  TriggerAddCondition(gg_trg_versus, Condition(Trig_versus_Conditions));
  TriggerAddAction(gg_trg_versus, Trig_versus_Actions);
};
