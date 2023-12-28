//===========================================================================
// Trigger: AFK
//
// afk == 4, went afk during game or during pick and WAS picked
// afk == 3, gamestarted, and 1 or 2 OR during pick was NOT picked. (not playing)
// afk == 2, watching game (back)
// afk == 1, was afk=3, so they came back DURING pick and have not been picked yet
// afk == 0, here
//===========================================================================

import { terrain } from "settings/terrain";
import { inflateGoldCount } from "../commands/g";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { sleep } from "w3ts";

const captainsAndAfk = () => {
  if ((!(udg_Teams === TEAMS_CAPTAINS))) {
    return false;
  }
  if ((!(udg_AFK[udg_atempint] === AFK_AFK))) {
    return false;
  }
  return true;
};

const pickingAndNotPicked = () => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf) === false))) {
    return false;
  }
  if ((!(udg_Teams === TEAMS_PICK))) {
    return false;
  }
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep) === false))) {
    return false;
  }
  return true;
};

const captainsAndAfkOrPickingAndNotPicked = () => {
  if ((captainsAndAfk())) {
    return true;
  }
  if ((pickingAndNotPicked())) {
    return true;
  }
  return false;
};

const captainsAndAfkOrPickingAndNotPicked2 = () => {
  if ((!captainsAndAfkOrPickingAndNotPicked())) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001Func002Func006Func001C = () => {
  if ((!(GetEnumPlayer() !== GetTriggerPlayer()!))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001Func002Func006A = () => {
  if ((Trig_AFK_Func005Func001Func002Func006Func001C())) {
    SetPlayerAllianceStateBJ(
      GetTriggerPlayer()!,
      GetEnumPlayer()!,
      bj_ALLIANCE_UNALLIED,
    );
    SetPlayerAllianceStateBJ(
      GetTriggerPlayer()!,
      GetEnumPlayer()!,
      bj_ALLIANCE_ALLIED_VISION,
    );
  }
};

const Trig_AFK_Func005Func005Func001Func002Func002A = () => {
  PanCameraToForPlayer(
    GetTriggerPlayer()!,
    GetUnitX(udg_unit[GetPlayerId(GetEnumPlayer()!)]),
    GetUnitY(udg_unit[GetPlayerId(GetEnumPlayer()!)]),
  );
};

const inTeam = () => {
  return IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep) ||
    IsPlayerInForce(GetTriggerPlayer()!, udg_Spirit) ||
    IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf);
};

const Trig_AFK_Func005Func007002001001001 = () => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== 3,
    ),
  );
};

const Trig_AFK_Func005Func008A = () => {
  udg_atempint2 = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)];
};

const playingAndNotAFKOrPub = () => {
  return GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING &&
    GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT &&
    udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== 3 &&
    !pub[GetPlayerId(GetFilterPlayer()!)];
};

const Trig_AFK_Func005Func010Func001C = () => {
  if ((!(GetEnumPlayer() !== GetTriggerPlayer()!))) {
    return false;
  }
  if (
    (!(udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] > udg_atempint2))
  ) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func010A = () => {
  if ((Trig_AFK_Func005Func010Func001C())) {
    udg_atempint2 = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)];
  }
};

const Trig_AFK_Func005Func013Func001Func001Func001C = () => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Draft) === true))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func005C = () => {
  if ((!(udg_Teams !== 3))) {
    return false;
  }
  if ((!(udg_Teams !== 4))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func002002001001001 = () => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func002Func001Func004C = () => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func002Func001C = () => {
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
    (!Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func002Func001Func004C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003A = () => {
  udg_captains[3] = GetEnumPlayer()!;
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
        (Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func002Func001C())
      ) {
        udg_atempboolean = true;
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    if (
      (Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func003C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func002Func001Func004C = () => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func002Func001C = () => {
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
    (!Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func002Func001Func004C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005A = () => {
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
        (Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func002Func001C())
      ) {
        udg_atempboolean = true;
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    if (
      (Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func003C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func007001001001 = () => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001C = () => {
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(
        Condition(
          Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func007001001001,
        ),
      )!,
    ) > 0))
  ) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func002C = () => {
  if ((!(udg_captainTurn === 3))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func001C = () => {
  if ((!(GetTriggerPlayer() === udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func002002001001001 = () => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func002Func001Func004C = () => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func002Func001C = () => {
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
    (!Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func002Func001Func004C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func003A = () => {
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
        (Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func002Func001C())
      ) {
        udg_atempboolean = true;
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    if (
      (Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func003C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func002Func001Func004C = () => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func002Func001C = () => {
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
    (!Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func002Func001Func004C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func005A = () => {
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
        (Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func002Func001C())
      ) {
        udg_atempboolean = true;
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    if (
      (Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func003C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func007C = () => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func008001001001 = () => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002C = () => {
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(
        Condition(
          Trig_AFK_Func005Func013Func001Func001Func010Func002Func008001001001,
        ),
      )!,
    ) > 0))
  ) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010C = () => {
  if ((!(GetTriggerPlayer() === udg_captains[1]))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func011C = () => {
  if ((!(udg_sheepLastGame[udg_atempint] === true))) {
    return false;
  }
  return true;
};

const captainsAndPicked = () => {
  if ((!(udg_Teams === TEAMS_CAPTAINS))) {
    return false;
  }
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Draft) === false))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func005C = () => {
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep) === true)) {
    return true;
  }
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf) === true)) {
    return true;
  }
  return false;
};

const pickingAndPicked = () => {
  if ((!(udg_Teams === TEAMS_PICK))) {
    return false;
  }
  if ((!Trig_AFK_Func005Func013Func001Func005C())) {
    return false;
  }
  return true;
};

const Trig_AFK_Func008Func001Func001Func001C = () => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func008Func001Func001Func003C = () => {
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

const Trig_AFK_Func008Func001Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!Trig_AFK_Func008Func001Func001Func003C())) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func008Func001A = () => {
  if ((Trig_AFK_Func008Func001Func001C())) {
    if ((Trig_AFK_Func008Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const captainsAndDraftEmpty = () => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 0))) {
    return false;
  }
  if ((!(udg_Teams === TEAMS_CAPTAINS))) {
    return false;
  }
  return true;
};

const Trig_AFK_Actions = async () => {
  if (rotated === GetTriggerPlayer()!) return;
  udg_atempint = GetConvertedPlayerId(GetTriggerPlayer()!);
  if (udg_AFK[udg_atempint] < AFK_AFK) { // Not AFK
    if (udg_gameStarted) {
      if (udg_AFK[udg_atempint] > 0) {
        udg_AFKOn[udg_atempint] = 1;
        udg_AFK[udg_atempint] = AFK_AFK;
        LeaderboardSetPlayerItemLabelBJ(
          GetTriggerPlayer()!,
          PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          GetPlayerName(GetTriggerPlayer()!)!,
        );
      }
    } else if (pickingAndPicked()) {
      udg_AFKOn[udg_atempint] = 1;
      udg_AFK[udg_atempint] = AFK_AFK_DURING_ROUND;
    } else if (captainsAndPicked()) {
      udg_AFKOn[udg_atempint] = 1;
      udg_AFK[udg_atempint] = AFK_AFK_DURING_ROUND;
      if ((Trig_AFK_Func005Func013Func001Func001Func010C())) {
        if ((Trig_AFK_Func005Func013Func001Func001Func010Func002C())) {
          udg_atempplayer = GetForceOfPlayer(
            ForcePickRandomPlayer(
              GetPlayersMatching(
                Condition(
                  Trig_AFK_Func005Func013Func001Func001Func010Func002Func002002001001001,
                ),
              )!,
            )!,
          )!;
          ForForce(
            udg_atempplayer,
            Trig_AFK_Func005Func013Func001Func001Func010Func002Func005A,
          );
          DestroyForce(udg_atempplayer);
          if (
            (Trig_AFK_Func005Func013Func001Func001Func010Func002Func007C())
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
            Trig_AFK_Func005Func013Func001Func001Func010Func002Func003A,
          );
          DestroyForce(udg_atempplayer);
        }
      } else {
        if ((Trig_AFK_Func005Func013Func001Func001Func010Func001C())) {
          if (
            (Trig_AFK_Func005Func013Func001Func001Func010Func001Func001C())
          ) {
            udg_atempplayer = GetForceOfPlayer(
              ForcePickRandomPlayer(
                GetPlayersMatching(
                  Condition(
                    Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func002002001001001,
                  ),
                )!,
              )!,
            )!;
            ForForce(
              udg_atempplayer,
              Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005A,
            );
            DestroyForce(udg_atempplayer);
          } else {
            udg_atempplayer = GetForceOfPlayer(
              ForcePickRandomPlayer(udg_Draft)!,
            )!;
            ForForce(
              udg_atempplayer,
              Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003A,
            );
            DestroyForce(udg_atempplayer);
          }
          if (
            (Trig_AFK_Func005Func013Func001Func001Func010Func001Func002C())
          ) {
            MultiboardSetTitleText(
              udg_captainsMultiboard,
              udg_colorString[GetConvertedPlayerId(udg_captains[3])] +
                (GetPlayerName(udg_captains[3]) + "'s turn"),
            );
          }
        }
      }
      if ((Trig_AFK_Func005Func013Func001Func001Func011C())) {
        MultiboardSetItemValueBJ(
          udg_captainsMultiboard,
          1,
          udg_multiboardRow[udg_atempint],
          udg_colorString[udg_atempint] +
            (GetPlayerName(GetTriggerPlayer()!) + " (AFK)"),
        );
      } else {
        MultiboardSetItemValueBJ(
          udg_captainsMultiboard,
          3,
          udg_multiboardRow[udg_atempint],
          udg_colorString[udg_atempint] +
            (GetPlayerName(GetTriggerPlayer()!) + " (AFK)"),
        );
      }
    } else {
      if ((Trig_AFK_Func005Func013Func001Func001Func001C())) {
        ForceRemovePlayerSimple(GetTriggerPlayer()!, udg_Draft);
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
        GetTriggerPlayer()!,
        GetLastCreatedLeaderboard()!,
      );
      if ((Trig_AFK_Func005Func013Func001Func001Func005C())) {
        LeaderboardAddItemBJ(
          GetTriggerPlayer()!,
          GetLastCreatedLeaderboard()!,
          GetPlayerName(GetTriggerPlayer()!) + " (AFK)",
          0,
        );
      }
    }
    if (udg_AFK[udg_atempint] > 2) {
      displayTimedTextToAll(
        `                              ${MapPlayerEx.fromIndex(udg_atempint - 1)} has gone AFK.`,
        5,
      );
    }
  } else {
    if (udg_gameStarted) {
      if (udg_AFK[udg_atempint] === AFK_AFK_DURING_ROUND) {
        ForForce(
          GetPlayersAllies(GetTriggerPlayer()!)!,
          Trig_AFK_Func005Func001Func002Func006A,
        );
        bj_forLoopAIndex = 1;
        bj_forLoopAIndexEnd = udg_lastPlayer;
        while (true) {
          if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
          LeaderboardSetPlayerItemLabelBJ(
            GetTriggerPlayer()!,
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
            GetPlayerName(GetTriggerPlayer()!)!,
          );
          bj_forLoopAIndex = bj_forLoopAIndex + 1;
        }
        udg_AFK[udg_atempint] = AFK_PLAYING;
        SelectUnitForPlayerSingle(udg_unit[udg_atempint], GetTriggerPlayer()!);
        PanCameraToForPlayer(
          GetTriggerPlayer()!,
          GetUnitX(udg_unit[udg_atempint]),
          GetUnitY(udg_unit[udg_atempint]),
        );
      } else {
        bj_forLoopAIndex = 1;
        bj_forLoopAIndexEnd = udg_lastPlayer;
        while (true) {
          if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
          LeaderboardSetPlayerItemLabelBJ(
            GetTriggerPlayer()!,
            PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
            GetPlayerName(GetTriggerPlayer()!) + " (back)",
          );
          bj_forLoopAIndex = bj_forLoopAIndex + 1;
        }
        udg_AFK[udg_atempint] = 2;
        udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
        DisplayTimedTextToForce(
          udg_atempplayer,
          10,
          "                              |CFF00AEEFYou can watch this game until it ends.",
        );
        DestroyForce(udg_atempplayer);
      }
    } else if (captainsAndAfkOrPickingAndNotPicked2()) {
      udg_AFK[udg_atempint] = AFK_PLAYING_PICK;
      LeaderboardAddItemBJ(
        GetTriggerPlayer()!,
        GetLastCreatedLeaderboard()!,
        GetPlayerName(GetTriggerPlayer()!)!,
        0,
      );
    } else {
      udg_AFK[udg_atempint] = AFK_PLAYING;
      if (udg_Teams === TEAMS_CAPTAINS) {
        if (udg_sheepLastGame[udg_atempint]) {
          MultiboardSetItemValueBJ(
            udg_captainsMultiboard,
            1,
            udg_multiboardRow[udg_atempint],
            udg_colorString[udg_atempint] +
              GetPlayerName(GetTriggerPlayer()!),
          );
        } else {
          MultiboardSetItemValueBJ(
            udg_captainsMultiboard,
            3,
            udg_multiboardRow[udg_atempint],
            udg_colorString[udg_atempint] +
              GetPlayerName(GetTriggerPlayer()!),
          );
        }
      }
    }
    ResetToGameCameraForPlayer(GetTriggerPlayer()!, 0);
    SetCameraFieldForPlayer(
      GetTriggerPlayer()!,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_zoom[GetConvertedPlayerId(GetTriggerPlayer()!)],
      0,
    );
    displayTimedTextToAll(
      `                              ${MapPlayerEx.fromIndex(udg_atempint - 1)} is back.`,
      5,
    );
    if (udg_Teams === TEAMS_PICK) {
      PanCameraToForPlayer(
        GetTriggerPlayer()!,
        GetUnitX(udg_farm),
        GetUnitY(udg_farm),
      );
    } else if (udg_Teams === TEAMS_LOCK_IE_PLAYING) {
      if (inTeam()) {
        PanCameraToForPlayer(
          GetTriggerPlayer()!,
          GetUnitX(udg_unit[udg_atempint]),
          GetUnitY(udg_unit[udg_atempint]),
        );
      } else {
        udg_atempplayer = GetForceOfPlayer(
          ForcePickRandomPlayer(udg_Sheep)!,
        )!;
        ForForce(
          udg_atempplayer,
          Trig_AFK_Func005Func005Func001Func002Func002A,
        );
        DestroyForce(udg_atempplayer);
      }
    } else PanCameraToForPlayer(GetTriggerPlayer()!, GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf));
    // If players sheepCount is lowest than the greatest players SheepCount, set them.
    udg_atempplayer = GetForceOfPlayer(
      ForcePickRandomPlayer(
        GetPlayersMatching(Condition(Trig_AFK_Func005Func007002001001001))!,
      )!,
    )!;
    ForForce(udg_atempplayer, Trig_AFK_Func005Func008A);
    DestroyForce(udg_atempplayer);
    ForForce(
      GetPlayersMatching(Condition(playingAndNotAFKOrPub))!,
      Trig_AFK_Func005Func010A,
    );
    if (udg_sheepCount[udg_atempint] < udg_atempint2) {
      udg_sheepCount[udg_atempint] = udg_atempint2;
    }
    inflateGoldCount(GetTriggerPlayer()!);
  }
  TriggerExecute(gg_trg_createLists);
  TriggerExecute(gg_trg_setupLeaderboard);
  if (captainsAndDraftEmpty()) {
    ForForce(GetPlayersAll()!, Trig_AFK_Func008Func001A);
    udg_Teams = TEAMS_LOCK_IE_PLAYING;
    MultiboardDisplayBJ(false, udg_captainsMultiboard);
    enforceTeamResourceMultiboard();
    MultiboardMinimizeBJ(true, udg_captainsMultiboard);
    DestroyMultiboardBJ(udg_captainsMultiboard);
    await sleep(0.01);
    DisableTrigger(gg_trg_giveUpCaptain);
    DisableTrigger(gg_trg_draftPlayer);
    TriggerExecute(gg_trg_createSheep);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_AFK: () => void;
}
InitTrig_AFK = () => {
  gg_trg_AFK = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_AFK, "-afk");
  TriggerAddAction(gg_trg_AFK, Trig_AFK_Actions);
};
