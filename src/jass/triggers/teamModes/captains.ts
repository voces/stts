import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_captains_Func004Func002C = (s: string) => {
  if ((!(S2I(SubStringBJ(s, 11, 12)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(s, 11, 12)!) < 25))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(s, 13, 15)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(s, 13, 15)!) < 25))) {
    return false;
  }
  return true;
};

const Trig_captains_Func004C = (s: string) => {
  if ((s === "-captains")) {
    return true;
  }
  if ((Trig_captains_Func004Func002C(s))) {
    return true;
  }
  return false;
};

const Trig_captains_Func005001001001 = () => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
    ),
  );
};

const Trig_captains_Conditions = () => {
  if ((!(udg_Custom === GetTriggerPlayer()!))) {
    return false;
  }
  if (
    (!(CountPlayersInForceBJ(GetPlayersByMapControl(MAP_CONTROL_USER)!) >= 1))
  ) {
    return false;
  }
  if ((!Trig_captains_Func004C(GetEventPlayerChatString() ?? ""))) {
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

const Trig_captains_Func006Func001Func014002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_captains_Func006Func001Func015002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_captains_Func006Func001Func016002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func001Func017002 = () => {
  SetPlayerAllianceStateBJ(
    udg_Custom,
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
};

const Trig_captains_Func006Func001Func031Func001C = () => {
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

const Trig_captains_Func006Func001Func031A = () => {
  if ((Trig_captains_Func006Func001Func031Func001C())) {
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

const Trig_captains_Func006Func017002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_captains_Func006Func018002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_captains_Func006Func019002 = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func020002 = () => {
  SetPlayerAllianceStateBJ(
    udg_Custom,
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
};

const Trig_captains_Func006Func023Func001C = () => {
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

const Trig_captains_Func006Func023A = () => {
  if ((Trig_captains_Func006Func023Func001C())) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
  }
};

const Trig_captains_Func006Func026A = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_captains_Func006Func037Func001C = () => {
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

const Trig_captains_Func006Func037A = () => {
  if ((Trig_captains_Func006Func037Func001C())) {
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

const Trig_captains_Actions = () => {
  const s = GetEventPlayerChatString() ?? "";
  TriggerSleepAction(0.01);
  if (s === "-captains") {
    DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
    DisableTrigger(gg_trg_fair);
    DisableTrigger(gg_trg_reverse);
    DisableTrigger(gg_trg_start);
    DisableTrigger(gg_trg_smart);
    DisableTrigger(gg_trg_versus);
    DisableTrigger(gg_trg_captains);
    DisableTrigger(gg_trg_pick);
    DisableTrigger(gg_trg_end);
    udg_lastGameString = s;
    TriggerExecute(gg_trg_createLists);
    udg_Teams = TEAMS_CAPTAINS;
    udg_pickIndex = 1;
    ForForce(udg_Sheep, Trig_captains_Func006Func017002);
    ForForce(udg_Wolf, Trig_captains_Func006Func018002);
    ForForce(udg_Spirit, Trig_captains_Func006Func019002);
    ForForce(GetPlayersAll()!, Trig_captains_Func006Func020002);
    TimerStart(udg_Createtimer, 300, false, null);
    TimerDialogDisplayBJ(true, udg_createTimerWindow);
    ForForce(GetPlayersAll()!, Trig_captains_Func006Func023A);
    udg_captains[1] = ForcePickRandomPlayer(udg_Spirit)!;
    ForceRemovePlayer(udg_Spirit, udg_captains[1]);
    udg_captains[3] = ForcePickRandomPlayer(udg_Spirit)!;
    ForceRemovePlayer(udg_Spirit, udg_captains[3]);
    ForForce(udg_Spirit, Trig_captains_Func006Func026A);
    CreateMultiboardBJ(
      3,
      25,
      udg_colorString[GetConvertedPlayerId(udg_captains[1])] + GetPlayerName(udg_captains[1]) + "'s turn",
    );
    udg_sheepLastGame[GetConvertedPlayerId(udg_captains[1])] = true;
    udg_sheepLastGame[GetConvertedPlayerId(udg_captains[3])] = false;
    udg_captainsMultiboard = GetLastCreatedMultiboard()!;
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 25;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      MultiboardSetItemStyleBJ(udg_captainsMultiboard, 1, GetForLoopIndexA(), true, false);
      MultiboardSetItemStyleBJ(udg_captainsMultiboard, 2, GetForLoopIndexA(), true, false);
      MultiboardSetItemStyleBJ(udg_captainsMultiboard, 3, GetForLoopIndexA(), true, false);
      MultiboardSetItemWidthBJ(udg_captainsMultiboard, 1, GetForLoopIndexA(), udg_draftMultiboardWidth);
      MultiboardSetItemWidthBJ(udg_captainsMultiboard, 2, GetForLoopIndexA(), udg_draftMultiboardWidth);
      MultiboardSetItemWidthBJ(udg_captainsMultiboard, 3, GetForLoopIndexA(), udg_draftMultiboardWidth);
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      1,
      1,
      "$" + udg_colorString[GetConvertedPlayerId(udg_captains[1])] + GetPlayerName(udg_captains[1]),
    );
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      3,
      1,
      "$" + udg_colorString[GetConvertedPlayerId(udg_captains[3])] + GetPlayerName(udg_captains[3]),
    );
    udg_multiboardRow[GetConvertedPlayerId(udg_captains[1])] = 1;
    udg_multiboardRow[GetConvertedPlayerId(udg_captains[3])] = 1;
    cid = 2;
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
    const parts = s.split(" ");
    if (parts.length !== 3) return;
    const pid1 = S2I(parts[1]);
    const pid2 = S2I(parts[2]);
    if (pid1 < 1 || pid1 > bj_MAX_PLAYERS || pid2 < 1 || pid2 > bj_MAX_PLAYERS) return;
    const p1 = MapPlayerEx.fromIndex(pid1 - 1);
    const p2 = MapPlayerEx.fromIndex(pid2 - 1);
    if (!p1?.isActive || !p2?.isActive) return;

    DestroyLeaderboardBJ(GetLastCreatedLeaderboard()!);
    DisableTrigger(gg_trg_fair);
    DisableTrigger(gg_trg_captains);
    DisableTrigger(gg_trg_pick);
    DisableTrigger(gg_trg_smart);
    DisableTrigger(gg_trg_reverse);
    DisableTrigger(gg_trg_start);
    DisableTrigger(gg_trg_end);
    udg_lastGameString = s;
    TriggerExecute(gg_trg_createLists);
    udg_Teams = TEAMS_CAPTAINS;
    udg_pickIndex = 1;
    ForForce(udg_Sheep, Trig_captains_Func006Func001Func014002);
    ForForce(udg_Wolf, Trig_captains_Func006Func001Func015002);
    ForForce(udg_Spirit, Trig_captains_Func006Func001Func016002);
    ForForce(GetPlayersAll()!, Trig_captains_Func006Func001Func017002);
    TimerStart(udg_Createtimer, 300, false, null);
    TimerDialogDisplayBJ(true, udg_createTimerWindow);
    udg_captains[1] = p1.handle;
    udg_captains[3] = p2.handle;
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
      MultiboardSetItemStyleBJ(udg_captainsMultiboard, 1, GetForLoopIndexA(), true, false);
      MultiboardSetItemStyleBJ(udg_captainsMultiboard, 2, GetForLoopIndexA(), true, false);
      MultiboardSetItemStyleBJ(udg_captainsMultiboard, 3, GetForLoopIndexA(), true, false);
      MultiboardSetItemWidthBJ(udg_captainsMultiboard, 1, GetForLoopIndexA(), udg_draftMultiboardWidth);
      MultiboardSetItemWidthBJ(udg_captainsMultiboard, 2, GetForLoopIndexA(), udg_draftMultiboardWidth);
      MultiboardSetItemWidthBJ(udg_captainsMultiboard, 3, GetForLoopIndexA(), udg_draftMultiboardWidth);
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      1,
      1,
      "$" + udg_colorString[GetConvertedPlayerId(udg_captains[1])] + GetPlayerName(udg_captains[1]),
    );
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      3,
      1,
      "$" + udg_colorString[GetConvertedPlayerId(udg_captains[3])] + GetPlayerName(udg_captains[3]),
    );
    udg_multiboardRow[GetConvertedPlayerId(udg_captains[1])] = 1;
    udg_multiboardRow[GetConvertedPlayerId(udg_captains[3])] = 1;
    cid = 2;
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
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_captains: () => void;
}
InitTrig_captains = () => {
  gg_trg_captains = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_captains, "-captains", false);
  TriggerAddCondition(gg_trg_captains, Condition(Trig_captains_Conditions));
  TriggerAddAction(gg_trg_captains, Trig_captains_Actions);
};
