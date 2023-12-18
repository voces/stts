//===========================================================================
// Trigger: setafk
//
// afk == 0 here
// afk == 1 came back during pick, was not picked (not picked/not playing)
// afk == 2 back, watching game (watching)
// afk == 3 went afk before the game started (is not playing)
// afk == 4, went afk during game or after being picked (share control)
//===========================================================================

import { MapPlayerEx } from "handles/MapPlayerEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

const Trig_setafk_Func001001001 = () => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
    ),
  );
};

const Trig_setafk_Func001Func001Func003C = () => {
  if ((!(udg_Teams !== 3))) {
    return false;
  }
  return true;
};

const Trig_setafk_Func001Func001C = () => {
  if (
    (!((I2R(udg_apr[GetConvertedPlayerId(GetEnumPlayer()!)]) /
      (TimerGetElapsed(udg_Timer) / 60)) <= 5))
  ) {
    return false;
  }
  if ((!(GetPlayerController(GetEnumPlayer()!) === MAP_CONTROL_USER))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_setafk_Func001A = () => {
  if ((Trig_setafk_Func001Func001C())) {
    udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] = AFK_AFK;
    LeaderboardRemovePlayerItemBJ(
      GetEnumPlayer()!,
      GetLastCreatedLeaderboard()!,
    );
    if ((Trig_setafk_Func001Func001Func003C())) {
      LeaderboardAddItemBJ(
        GetEnumPlayer()!,
        GetLastCreatedLeaderboard()!,
        GetPlayerName(GetEnumPlayer()!) + " (AFK)",
        0,
      );
    }
    displayTimedTextToAll(`                              ${MapPlayerEx.fromEnum()} has been set to AFK.`, 5);
  }
};

const Trig_setafk_Actions = () => {
  ForForce(
    GetPlayersMatching(Condition(Trig_setafk_Func001001001))!,
    Trig_setafk_Func001A,
  );
  TriggerExecute(gg_trg_setupLeaderboard);
  TriggerExecute(gg_trg_createLists);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_setafk: () => void;
}
InitTrig_setafk = () => {
  gg_trg_setafk = CreateTrigger();
  TriggerAddAction(gg_trg_setafk, Trig_setafk_Actions);
};
