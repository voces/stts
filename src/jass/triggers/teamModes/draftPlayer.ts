import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_draftPlayer_Conditions = () => {
  if ((!(udg_draftOn === true))) {
    return false;
  }
  if (
    (!(GetTriggerPlayer() === udg_captains[udg_captainTurn] ||
      GetPlayerController(udg_captains[udg_captainTurn]) === MAP_CONTROL_COMPUTER))
  ) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!) < 25))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005Func001Func002001001 = () => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      GetBooleanAnd(
        GetBooleanOr(
          udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
          GetBooleanOr(
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] ===
              AFK_PLAYING_PICK,
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] ===
              AFK_AFK_DURING_ROUND,
          ),
        ),
        GetBooleanAnd(
          IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
          udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] === false,
        ),
      ),
    ),
  );
};

const Trig_draftPlayer_Func006Func005Func001Func002Func001C = () => {
  if (
    (!(udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] ===
      GetForLoopIndexA()))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer() !== ConvertedPlayer(udg_atempint)!))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005Func001Func002A = () => {
  if ((Trig_draftPlayer_Func006Func005Func001Func002Func001C())) {
    udg_atempboolean = true;
  }
};

const Trig_draftPlayer_Func006Func005Func001Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005Func002Func002001001 = () => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      GetBooleanAnd(
        GetBooleanOr(
          udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
          GetBooleanOr(
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] ===
              AFK_PLAYING_PICK,
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] ===
              AFK_AFK_DURING_ROUND,
          ),
        ),
        GetBooleanAnd(
          IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
          udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] === true,
        ),
      ),
    ),
  );
};

const Trig_draftPlayer_Func006Func005Func002Func002Func001C = () => {
  if (
    (!(udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] ===
      GetForLoopIndexA()))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer() !== ConvertedPlayer(udg_atempint)!))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005Func002Func002A = () => {
  if ((Trig_draftPlayer_Func006Func005Func002Func002Func001C())) {
    udg_atempboolean = true;
  }
};

const Trig_draftPlayer_Func006Func005Func002Func003C = () => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005C = () => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func007C = () => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func001Func001C = () => {
  if ((!(udg_captainTurn === 3))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func001A = () => {
  if ((Trig_draftPlayer_Func006Func009Func001Func001C())) {
    udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = true;
  } else {
    udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = false;
  }
};

const Trig_draftPlayer_Func006Func009Func002C = () => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func006Func001Func001C = () => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func006Func001Func003C = () => {
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

const Trig_draftPlayer_Func006Func009Func006Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!Trig_draftPlayer_Func006Func009Func006Func001Func003C())) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func006A = () => {
  if ((Trig_draftPlayer_Func006Func009Func006Func001C())) {
    if ((Trig_draftPlayer_Func006Func009Func006Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_draftPlayer_Func006Func009C = () => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 1))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006C = () => {
  if (
    (!(IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Draft) === true))
  ) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Actions = () => {
  udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!);
  if ((Trig_draftPlayer_Func006C())) {
    udg_draftOn = false;
    udg_giveOn = false;
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      2,
      udg_multiboardRow[udg_atempint],
      "",
    );
    udg_atempboolean = false;
    if ((Trig_draftPlayer_Func006Func005C())) {
      bj_forLoopAIndex = 1;
      bj_forLoopAIndexEnd = 24;
      while (true) {
        if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
        udg_atempboolean = false;
        ForForce(
          GetPlayersMatching(
            Condition(Trig_draftPlayer_Func006Func005Func002Func002001001),
          )!,
          Trig_draftPlayer_Func006Func005Func002Func002A,
        );
        if ((Trig_draftPlayer_Func006Func005Func002Func003C())) {
          udg_multiboardRow[udg_atempint] = GetForLoopIndexA();
          break;
        }
        bj_forLoopAIndex = bj_forLoopAIndex + 1;
      }
    } else {
      bj_forLoopAIndex = 1;
      bj_forLoopAIndexEnd = 24;
      while (true) {
        if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
        udg_atempboolean = false;
        ForForce(
          GetPlayersMatching(
            Condition(Trig_draftPlayer_Func006Func005Func001Func002001001),
          )!,
          Trig_draftPlayer_Func006Func005Func001Func002A,
        );
        if ((Trig_draftPlayer_Func006Func005Func001Func003C())) {
          udg_multiboardRow[udg_atempint] = GetForLoopIndexA();
          break;
        }
        bj_forLoopAIndex = bj_forLoopAIndex + 1;
      }
    }
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      udg_captainTurn,
      udg_multiboardRow[udg_atempint],
      udg_colorString[udg_atempint] +
        GetPlayerName(ConvertedPlayer(udg_atempint)!),
    );
    if ((Trig_draftPlayer_Func006Func007C())) {
      udg_sheepLastGame[udg_atempint] = true;
    } else {
      udg_sheepLastGame[udg_atempint] = false;
    }
    ForceRemovePlayerSimple(ConvertedPlayer(udg_atempint)!, udg_Draft);
    if ((Trig_draftPlayer_Func006Func009C())) {
      ForForce(udg_Draft, Trig_draftPlayer_Func006Func009Func001A);
      ForForce(GetPlayersAll()!, Trig_draftPlayer_Func006Func009Func006A);
      udg_Teams = TEAMS_LOCK_IE_PLAYING;
      MultiboardDisplayBJ(false, udg_captainsMultiboard);
      enforceTeamResourceMultiboard();
      MultiboardMinimizeBJ(true, udg_captainsMultiboard);
      DestroyMultiboardBJ(udg_captainsMultiboard);
      TriggerSleepAction(0.01);
      DisableTrigger(gg_trg_draftPlayer);
      DisableTrigger(gg_trg_giveUpCaptain);
      TriggerExecute(gg_trg_createSheep);
    } else {
      if ((Trig_draftPlayer_Func006Func009Func002C())) {
        udg_captainTurn = 3;
      } else {
        udg_captainRow = udg_captainRow + 1;
        udg_captainTurn = 1;
      }
      udg_draftOn = true;
      udg_giveOn = true;
      MultiboardSetTitleText(
        udg_captainsMultiboard,
        udg_colorString[GetConvertedPlayerId(udg_captains[udg_captainTurn])] +
          (GetPlayerName(udg_captains[udg_captainTurn]) + "'s turn"),
      );
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_draftPlayer: () => void;
}
InitTrig_draftPlayer = () => {
  gg_trg_draftPlayer = CreateTrigger();
  DisableTrigger(gg_trg_draftPlayer);
  registerAnyPlayerChatEvent(gg_trg_draftPlayer, "-draft", false);
  TriggerAddCondition(gg_trg_draftPlayer, Condition(Trig_draftPlayer_Conditions));
  TriggerAddAction(gg_trg_draftPlayer, Trig_draftPlayer_Actions);
};
