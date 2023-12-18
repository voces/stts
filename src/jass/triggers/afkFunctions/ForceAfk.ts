import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_Force_Afk_Func001C = () => {
  if ((!(GetTriggerPlayer() === udg_Custom))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!) >= 1))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!) <= 24))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Conditions = () => {
  if ((!Trig_Force_Afk_Func001C())) {
    return false;
  }
  return true;
};

const playingAndNotAfk = () => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== 3,
    ),
  );
};

const setToHighestSc = () => {
  udg_atempint2 = Math.max(
    udg_atempint2,
    udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)],
  );
};

const drafted = () => {
  if (!(IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Draft) === true)) {
    return false;
  }
  return true;
};

const notPickOrCaptains = () => {
  if ((!(udg_Teams !== TEAMS_PICK))) {
    return false;
  }
  if ((!(udg_Teams !== TEAMS_CAPTAINS))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func001002001001001 = () => {
  return GetBooleanAnd(
    GetBooleanOr(
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING_PICK,
    ),
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
      GetBooleanAnd(
        GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
        GetBooleanAnd(
          udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] ===
            false,
          IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
        ),
      ),
    ),
  );
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func002Func001Func004C = () => {
  if ((udg_AFK[GetForLoopIndexB()] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexB()] === AFK_PLAYING_PICK)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexB()] === AFK_AFK_DURING_ROUND)) {
    return true;
  }
  return false;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func002Func001C = () => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexB())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexB())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer() !== ConvertedPlayer(GetForLoopIndexB())!))) {
    return false;
  }
  if (
    (!Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func002Func001Func004C())
  ) {
    return false;
  }
  if (
    (!(IsPlayerInForce(ConvertedPlayer(GetForLoopIndexB())!, udg_Draft) ===
      false))
  ) {
    return false;
  }
  if ((!(udg_sheepLastGame[GetForLoopIndexB()] === false))) {
    return false;
  }
  if ((!(udg_multiboardRow[GetForLoopIndexB()] === GetForLoopIndexA()))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003A = () => {
  udg_captains[3] = GetEnumPlayer()!;
  MultiboardSetItemValueBJ(
    udg_captainsMultiboard,
    2,
    udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)],
    " ",
  );
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    udg_atempboolean = false;
    bj_forLoopBIndex = 1;
    bj_forLoopBIndexEnd = 24;
    while (true) {
      if (bj_forLoopBIndex > bj_forLoopBIndexEnd) break;
      if (
        (Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func002Func001C())
      ) {
        udg_atempboolean = true;
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    if (
      (Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func003C())
    ) {
      udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = GetForLoopIndexA();
      break;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft);
  udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = false;
  MultiboardSetItemValueBJ(
    udg_captainsMultiboard,
    3,
    udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)],
    "$" +
      (udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
        GetPlayerName(GetEnumPlayer()!)),
  );
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func002Func001Func004C = () => {
  if ((udg_AFK[GetForLoopIndexB()] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexB()] === AFK_PLAYING_PICK)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexB()] === AFK_AFK_DURING_ROUND)) {
    return true;
  }
  return false;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func002Func001C = () => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexB())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexB())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer() !== ConvertedPlayer(GetForLoopIndexB())!))) {
    return false;
  }
  if (
    (!Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func002Func001Func004C())
  ) {
    return false;
  }
  if (
    (!(IsPlayerInForce(ConvertedPlayer(GetForLoopIndexB())!, udg_Draft) ===
      false))
  ) {
    return false;
  }
  if ((!(udg_sheepLastGame[GetForLoopIndexB()] === false))) {
    return false;
  }
  if ((!(udg_multiboardRow[GetForLoopIndexB()] === GetForLoopIndexA()))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005A = () => {
  udg_captains[3] = GetEnumPlayer()!;
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    udg_atempboolean = false;
    bj_forLoopBIndex = 1;
    bj_forLoopBIndexEnd = 24;
    while (true) {
      if (bj_forLoopBIndex > bj_forLoopBIndexEnd) break;
      if (
        (Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func002Func001C())
      ) {
        udg_atempboolean = true;
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    if (
      (Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func003C())
    ) {
      udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = GetForLoopIndexA();
      break;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  MultiboardSetItemValueBJ(
    udg_captainsMultiboard,
    3,
    udg_multiboardRow[GetConvertedPlayerId(udg_captains[3])],
    "$" +
      (udg_colorString[GetConvertedPlayerId(udg_captains[3])] +
        GetPlayerName(udg_captains[3])),
  );
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func007001001001 = () => {
  return GetBooleanAnd(
    GetBooleanOr(
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING_PICK,
    ),
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
      GetBooleanAnd(
        GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
        GetBooleanAnd(
          udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] ===
            false,
          IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
        ),
      ),
    ),
  );
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001C = () => {
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(
        Condition(
          Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func007001001001,
        ),
      )!,
    ) > 0))
  ) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func002C = () => {
  if ((!(udg_captainTurn === 3))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001C = () => {
  if ((!(GetTriggerPlayer() === udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func001002001001001 = () => {
  return GetBooleanAnd(
    GetBooleanOr(
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING_PICK,
    ),
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
      GetBooleanAnd(
        GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
        GetBooleanAnd(
          udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] ===
            true,
          IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
        ),
      ),
    ),
  );
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func002Func001Func004C = () => {
  if ((udg_AFK[GetForLoopIndexB()] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexB()] === AFK_PLAYING_PICK)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexB()] === AFK_AFK_DURING_ROUND)) {
    return true;
  }
  return false;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func002Func001C = () => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexB())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexB())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer() !== ConvertedPlayer(GetForLoopIndexB())!))) {
    return false;
  }
  if (
    (!Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func002Func001Func004C())
  ) {
    return false;
  }
  if (
    (!(IsPlayerInForce(ConvertedPlayer(GetForLoopIndexB())!, udg_Draft) ===
      false))
  ) {
    return false;
  }
  if ((!(udg_sheepLastGame[GetForLoopIndexB()] === true))) {
    return false;
  }
  if ((!(udg_multiboardRow[GetForLoopIndexB()] === GetForLoopIndexA()))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003A = () => {
  udg_captains[1] = GetEnumPlayer()!;
  MultiboardSetItemValueBJ(
    udg_captainsMultiboard,
    2,
    udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)],
    "",
  );
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    udg_atempboolean = false;
    bj_forLoopBIndex = 1;
    bj_forLoopBIndexEnd = 24;
    while (true) {
      if (bj_forLoopBIndex > bj_forLoopBIndexEnd) break;
      if (
        (Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func002Func001C())
      ) {
        udg_atempboolean = true;
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    if (
      (Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func003C())
    ) {
      udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = GetForLoopIndexA();
      break;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft);
  udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = true;
  MultiboardSetItemValueBJ(
    udg_captainsMultiboard,
    1,
    udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)],
    "$" +
      (udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
        GetPlayerName(GetEnumPlayer()!)),
  );
  udg_captainTurn = 3;
  MultiboardSetTitleText(
    udg_captainsMultiboard,
    udg_colorString[GetConvertedPlayerId(udg_captains[3])] +
      (GetPlayerName(udg_captains[3]) + "'s turn"),
  );
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func002Func001Func004C = () => {
  if ((udg_AFK[GetForLoopIndexB()] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexB()] === AFK_PLAYING_PICK)) {
    return true;
  }
  if ((udg_AFK[GetForLoopIndexB()] === AFK_AFK_DURING_ROUND)) {
    return true;
  }
  return false;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func002Func001C = () => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexB())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexB())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer() !== ConvertedPlayer(GetForLoopIndexB())!))) {
    return false;
  }
  if (
    (!Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func002Func001Func004C())
  ) {
    return false;
  }
  if (
    (!(IsPlayerInForce(ConvertedPlayer(GetForLoopIndexB())!, udg_Draft) ===
      false))
  ) {
    return false;
  }
  if ((!(udg_sheepLastGame[GetForLoopIndexB()] === true))) {
    return false;
  }
  if ((!(udg_multiboardRow[GetForLoopIndexB()] === GetForLoopIndexA()))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005A = () => {
  udg_captains[1] = GetEnumPlayer()!;
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    udg_atempboolean = false;
    bj_forLoopBIndex = 1;
    bj_forLoopBIndexEnd = 24;
    while (true) {
      if (bj_forLoopBIndex > bj_forLoopBIndexEnd) break;
      if (
        (Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func002Func001C())
      ) {
        udg_atempboolean = true;
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    if (
      (Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func003C())
    ) {
      udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] = GetForLoopIndexA();
      break;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  MultiboardSetItemValueBJ(
    udg_captainsMultiboard,
    1,
    udg_multiboardRow[GetConvertedPlayerId(udg_captains[1])],
    "$" +
      (udg_colorString[GetConvertedPlayerId(udg_captains[1])] +
        GetPlayerName(udg_captains[1])),
  );
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func007C = () => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func008001001001 = () => {
  return GetBooleanAnd(
    GetBooleanOr(
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING_PICK,
    ),
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
      GetBooleanAnd(
        GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
        GetBooleanAnd(
          udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] ===
            true,
          IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
        ),
      ),
    ),
  );
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002C = () => {
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(
        Condition(
          Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func008001001001,
        ),
      )!,
    ) > 0))
  ) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010C = () => {
  if ((!(ConvertedPlayer(udg_atempint) === udg_captains[1]))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func011C = () => {
  if ((!(udg_sheepLastGame[udg_atempint] === true))) {
    return false;
  }
  return true;
};

const captainsAndDrafted = () => {
  if ((!(udg_Teams === TEAMS_CAPTAINS))) {
    return false;
  }
  if (
    (!(IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Draft) === false))
  ) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func005C = () => {
  if ((IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Sheep) === true)) {
    return true;
  }
  if ((IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Wolf) === true)) {
    return true;
  }
  return false;
};

const pickingAndPicked = () => {
  if ((!(udg_Teams === TEAMS_PICK))) {
    return false;
  }
  if ((!Trig_Force_Afk_Func003Func007Func002Func005C())) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func006Func001Func001Func001C = () => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func006Func001Func001Func003C = () => {
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING_PICK)) {
    return true;
  }
  if (
    (udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_AFK_DURING_ROUND)
  ) {
    return true;
  }
  return false;
};

const Trig_Force_Afk_Func006Func001Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!Trig_Force_Afk_Func006Func001Func001Func003C())) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func006Func001A = () => {
  if ((Trig_Force_Afk_Func006Func001Func001C())) {
    if ((Trig_Force_Afk_Func006Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const captainsAndNoOneLeftToDraft = () => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 0))) {
    return false;
  }
  if ((!(udg_Teams === TEAMS_CAPTAINS))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Actions = () => {
  udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!);
  if (udg_AFK[udg_atempint] < 3) {
    if (udg_gameStarted) {
      // Can't AFK during round... for reasons?
    } else {
      if (pickingAndPicked()) {
        udg_AFKOn[udg_atempint] = 1;
        udg_AFK[udg_atempint] = AFK_AFK_DURING_ROUND;
      } else {
        if (captainsAndDrafted()) {
          udg_AFKOn[udg_atempint] = 1;
          udg_AFK[udg_atempint] = AFK_AFK_DURING_ROUND;
          if ((Trig_Force_Afk_Func003Func007Func002Func001Func010C())) {
            if (
              (Trig_Force_Afk_Func003Func007Func002Func001Func010Func002C())
            ) {
              udg_atempplayer = GetForceOfPlayer(
                ForcePickRandomPlayer(
                  GetPlayersMatching(
                    Condition(
                      Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func001002001001001,
                    ),
                  )!,
                )!,
              )!;
              ForForce(
                udg_atempplayer,
                Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005A,
              );
              DestroyForce(udg_atempplayer);
              if (
                (Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func007C())
              ) {
                MultiboardSetTitleText(
                  udg_captainsMultiboard,
                  udg_colorString[GetConvertedPlayerId(udg_captains[1])] +
                    (GetPlayerName(udg_captains[1]) + "'s turn"),
                );
              }
            } else {
              udg_atempplayer = GetForceOfPlayer(
                ForcePickRandomPlayer(udg_Draft)!,
              )!;
              ForForce(
                udg_atempplayer,
                Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003A,
              );
              DestroyForce(udg_atempplayer);
            }
          } else {
            if (
              (Trig_Force_Afk_Func003Func007Func002Func001Func010Func001C())
            ) {
              if (
                (Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001C())
              ) {
                udg_atempplayer = GetForceOfPlayer(
                  ForcePickRandomPlayer(
                    GetPlayersMatching(
                      Condition(
                        Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func001002001001001,
                      ),
                    )!,
                  )!,
                )!;
                ForForce(
                  udg_atempplayer,
                  Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005A,
                );
                DestroyForce(udg_atempplayer);
              } else {
                udg_atempplayer = GetForceOfPlayer(
                  ForcePickRandomPlayer(udg_Draft)!,
                )!;
                ForForce(
                  udg_atempplayer,
                  Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003A,
                );
                DestroyForce(udg_atempplayer);
              }
              if (
                (Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func002C())
              ) {
                MultiboardSetTitleText(
                  udg_captainsMultiboard,
                  udg_colorString[GetConvertedPlayerId(udg_captains[3])] +
                    (GetPlayerName(udg_captains[3]) + "'s turn"),
                );
              }
            }
          }
          if ((Trig_Force_Afk_Func003Func007Func002Func001Func011C())) {
            MultiboardSetItemValueBJ(
              udg_captainsMultiboard,
              1,
              udg_multiboardRow[udg_atempint],
              udg_colorString[udg_atempint] +
                (GetPlayerName(ConvertedPlayer(udg_atempint)!) + " (AFK)"),
            );
          } else {
            MultiboardSetItemValueBJ(
              udg_captainsMultiboard,
              3,
              udg_multiboardRow[udg_atempint],
              udg_colorString[udg_atempint] +
                (GetPlayerName(ConvertedPlayer(udg_atempint)!) + " (AFK)"),
            );
          }
        } else {
          if (drafted()) {
            ForceRemovePlayerSimple(ConvertedPlayer(udg_atempint)!, udg_Draft);
            MultiboardSetItemValueBJ(
              udg_captainsMultiboard,
              2,
              udg_multiboardRow[udg_atempint],
              "",
            );
          }
          udg_AFKOn[udg_atempint] = 1;
          udg_AFK[udg_atempint] = AFK_AFK;
          LeaderboardRemovePlayerItemBJ(
            ConvertedPlayer(udg_atempint)!,
            GetLastCreatedLeaderboard()!,
          );
          if (notPickOrCaptains()) {
            LeaderboardAddItemBJ(
              ConvertedPlayer(udg_atempint)!,
              GetLastCreatedLeaderboard()!,
              GetPlayerName(ConvertedPlayer(udg_atempint)!) + " (AFK)",
              0,
            );
          }
        }
      }
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        (("                              " + udg_colorString[udg_atempint]) +
          GetPlayerName(ConvertedPlayer(udg_atempint)!)) +
          " |rhas been set AFK.",
      );
    }
  } else {
    // If players sheepCount is lowest than the greatest players SheepCount, set them.
    udg_atempplayer = GetForceOfPlayer(
      ForcePickRandomPlayer(GetPlayersMatching(Condition(playingAndNotAfk))!)!,
    )!;
    ForForce(udg_atempplayer, setToHighestSc);
    DestroyForce(udg_atempplayer);
    const f = GetPlayersMatching(Condition(playingAndNotAfk))!;
    ForForce(f, setToHighestSc);
    DestroyForce(f);
    if (udg_sheepCount[udg_atempint] < udg_atempint2) {
      udg_sheepCount[udg_atempint] = udg_atempint2;
    }
    if (udg_Teams === TEAMS_OPEN) {
      udg_AFK[udg_atempint] = AFK_PLAYING;
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        "                              " + udg_colorString[udg_atempint] +
          GetPlayerName(ConvertedPlayer(udg_atempint)!) +
          " |rhas been unset from AFK.",
      );
    }
  }

  TriggerExecute(gg_trg_createLists);
  TriggerExecute(gg_trg_setupLeaderboard);
  if (captainsAndNoOneLeftToDraft()) {
    ForForce(GetPlayersAll()!, Trig_Force_Afk_Func006Func001A);
    udg_Teams = TEAMS_LOCK_IE_PLAYING;
    MultiboardDisplayBJ(false, udg_captainsMultiboard);
    enforceTeamResourceMultiboard();
    MultiboardMinimizeBJ(true, udg_captainsMultiboard);
    DestroyMultiboardBJ(udg_captainsMultiboard);
    TriggerSleepAction(0.01);
    DisableTrigger(gg_trg_giveUpCaptain);
    DisableTrigger(gg_trg_draftPlayer);
    TriggerExecute(gg_trg_createSheep);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Force_Afk: () => void;
}
InitTrig_Force_Afk = () => {
  gg_trg_Force_Afk = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_Force_Afk, "-fafk", false);
  TriggerAddCondition(gg_trg_Force_Afk, Condition(Trig_Force_Afk_Conditions));
  TriggerAddAction(gg_trg_Force_Afk, Trig_Force_Afk_Actions);
};
