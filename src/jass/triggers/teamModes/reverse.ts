import { clearForces } from "../../../util/clearForces";
import { registerAnyPlayerChatEvent } from "../../../util/registerAnyPlayerChatEvent";

const Trig_reverse_Func006Func002001001 = () => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING,
    ),
  );
};

const Trig_reverse_Func006Func002Func001C = () => {
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
  ) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func002A = () => {
  if ((Trig_reverse_Func006Func002Func001C())) {
    udg_atempint = udg_atempint + 1;
  }
};

const Trig_reverse_Func006Func003Func001Func001Func001Func001C = () => {
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
  ) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func001Func001Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func001Func001A = () => {
  if ((Trig_reverse_Func006Func003Func001Func001Func001C())) {
    if ((Trig_reverse_Func006Func003Func001Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
    }
  }
};

const Trig_reverse_Func006Func003Func001Func002Func001A = () => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func003Func001Func003A = () => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func003Func001Func004Func001Func001C = () => {
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
  ) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func001Func004Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func001Func004A = () => {
  if ((Trig_reverse_Func006Func003Func001Func004Func001C())) {
    if ((Trig_reverse_Func006Func003Func001Func004Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_reverse_Func006Func003Func001Func005Func001A = () => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func003Func001Func006A = () => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func003Func001C = () => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 10, 11)!) < udg_atempint))
  ) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func002Func001Func002C = () => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func002Func001C = () => {
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func002A = () => {
  if ((Trig_reverse_Func006Func003Func002Func001C())) {
    if ((Trig_reverse_Func006Func003Func002Func001Func002C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    }
  }
};

const Trig_reverse_Func006Func003C = () => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 10, 11)!) === udg_atempint))
  ) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func004Func001Func004C = () => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func004Func001C = () => {
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

const Trig_reverse_Func006Func004A = () => {
  if ((Trig_reverse_Func006Func004Func001C())) {
    if ((Trig_reverse_Func006Func004Func001Func004C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    }
  }
};

const Trig_reverse_Func006C = () => {
  if ((!(udg_atempstring === "-reverse"))) {
    return false;
  }
  return true;
};

const Trig_reverse_Actions = () => {
  udg_lastGameString = GetEventPlayerChatString()!;
  udg_atempstring = StringCase(GetEventPlayerChatString()!, false)!;
  clearForces();
  if ((Trig_reverse_Func006C())) {
    ForForce(GetPlayersAll()!, Trig_reverse_Func006Func004A);
  } else {
    udg_atempint = 0;
    ForForce(
      GetPlayersMatching(Condition(Trig_reverse_Func006Func002001001))!,
      Trig_reverse_Func006Func002A,
    );
    if ((Trig_reverse_Func006Func003C())) {
      ForForce(GetPlayersAll()!, Trig_reverse_Func006Func003Func002A);
    } else {
      if ((Trig_reverse_Func006Func003Func001C())) {
        ForForce(GetPlayersAll()!, Trig_reverse_Func006Func003Func001Func004A);
        bj_forLoopAIndex = 1;
        bj_forLoopAIndexEnd = S2I(
          SubStringBJ(GetEventPlayerChatString()!, 10, 11)!,
        );
        while (true) {
          if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
          ForForce(
            GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
            Trig_reverse_Func006Func003Func001Func005Func001A,
          );
          bj_forLoopAIndex = bj_forLoopAIndex + 1;
        }
        ForForce(udg_Spirit, Trig_reverse_Func006Func003Func001Func006A);
      } else {
        ForForce(GetPlayersAll()!, Trig_reverse_Func006Func003Func001Func001A);
        bj_forLoopAIndex = 1;
        bj_forLoopAIndexEnd = S2I(SubStringBJ(GetEventPlayerChatString()!, 10, 11)!) -
          CountPlayersInForceBJ(udg_Sheep);
        while (true) {
          if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
          ForForce(
            GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
            Trig_reverse_Func006Func003Func001Func002Func001A,
          );
          bj_forLoopAIndex = bj_forLoopAIndex + 1;
        }
        ForForce(udg_Spirit, Trig_reverse_Func006Func003Func001Func003A);
      }
    }
  }
  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
  TriggerSleepAction(0.01);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_reverse: () => void;
}
InitTrig_reverse = () => {
  gg_trg_reverse = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_reverse, "-reverse", false);
  TriggerAddCondition(
    gg_trg_reverse,
    Condition(() => {
      if (GetTriggerPlayer() !== udg_Custom) return false;
      const s = GetEventPlayerChatString()!;
      if (s === "-reverse") return true;
      const count = parseInt(s.split(" ")[1]);
      return count > 0 && count < 24;
    }),
  );
  TriggerAddAction(gg_trg_reverse, Trig_reverse_Actions);
};
