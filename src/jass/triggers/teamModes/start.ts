//===========================================================================
// Trigger: start
//
// Gotta make it so if the number is larger than the amount of players on wolf team, then steal a member from the sheep side.
//===========================================================================
const Trig_start_Func010Func003C = (): boolean => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!) < 24))) {
    return false;
  }
  return true;
};

const Trig_start_Func010C = (): boolean => {
  if ((GetEventPlayerChatString()! === "-start")) {
    return true;
  }
  if ((GetEventPlayerChatString()! === "-restart")) {
    return true;
  }
  if ((Trig_start_Func010Func003C())) {
    return true;
  }
  return false;
};

const Trig_start_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  if ((!Trig_start_Func010C())) {
    return false;
  }
  return true;
};

const Trig_start_Func003A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_start_Func004A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_start_Func005A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_start_Func006Func001C = (): boolean => {
  if ((GetEventPlayerChatString()! === "-start")) {
    return true;
  }
  if ((GetEventPlayerChatString()! === "-restart")) {
    return true;
  }
  return false;
};

const Trig_start_Func006Func003001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
    ),
  );
};

const Trig_start_Func006Func003Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
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

const Trig_start_Func006Func003A = (): void => {
  if ((Trig_start_Func006Func003Func001C())) {
    udg_atempint = udg_atempint + 1;
  }
};

const Trig_start_Func006Func004Func001Func001Func001Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func004Func001Func001Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func004Func001Func001A = (): void => {
  if ((Trig_start_Func006Func004Func001Func001Func001C())) {
    if ((Trig_start_Func006Func004Func001Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
    }
  }
};

const Trig_start_Func006Func004Func001Func002Func001A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_start_Func006Func004Func001Func003A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_start_Func006Func004Func001Func004Func001Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func004Func001Func004Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func004Func001Func004A = (): void => {
  if ((Trig_start_Func006Func004Func001Func004Func001C())) {
    if ((Trig_start_Func006Func004Func001Func004Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_start_Func006Func004Func001Func005Func001A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_start_Func006Func004Func001Func006A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_start_Func006Func004Func001C = (): boolean => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!) < udg_atempint))
  ) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func004Func002Func001Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func004Func002Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func004Func002A = (): void => {
  if ((Trig_start_Func006Func004Func002Func001C())) {
    if ((Trig_start_Func006Func004Func002Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_start_Func006Func004C = (): boolean => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!) === udg_atempint))
  ) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func005Func001Func004C = (): boolean => {
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
  ) {
    return false;
  }
  return true;
};

const Trig_start_Func006Func005Func001C = (): boolean => {
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

const Trig_start_Func006Func005A = (): void => {
  if ((Trig_start_Func006Func005Func001C())) {
    if ((Trig_start_Func006Func005Func001Func004C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    }
  }
};

const Trig_start_Func006C = (): boolean => {
  if ((!Trig_start_Func006Func001C())) {
    return false;
  }
  return true;
};

const Trig_start_Actions = (): void => {
  TriggerSleepAction(0.01);
  udg_lastGameString = GetEventPlayerChatString()!;
  ForForce(udg_Sheep, Trig_start_Func003A);
  ForForce(udg_Wolf, Trig_start_Func004A);
  ForForce(udg_Spirit, Trig_start_Func005A);
  if ((Trig_start_Func006C())) {
    ForForce(GetPlayersAll()!, Trig_start_Func006Func005A);
  } else {
    udg_atempint = 0;
    ForForce(
      GetPlayersMatching(Condition(Trig_start_Func006Func003001001))!,
      Trig_start_Func006Func003A,
    );
    if ((Trig_start_Func006Func004C())) {
      ForForce(GetPlayersAll()!, Trig_start_Func006Func004Func002A);
    } else {
      if ((Trig_start_Func006Func004Func001C())) {
        ForForce(GetPlayersAll()!, Trig_start_Func006Func004Func001Func004A);
        bj_forLoopAIndex = 1;
        bj_forLoopAIndexEnd = S2I(
          SubStringBJ(GetEventPlayerChatString()!, 8, 9)!,
        );
        while (true) {
          if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
          ForForce(
            GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
            Trig_start_Func006Func004Func001Func005Func001A,
          );
          bj_forLoopAIndex = bj_forLoopAIndex + 1;
        }
        ForForce(udg_Spirit, Trig_start_Func006Func004Func001Func006A);
      } else {
        ForForce(GetPlayersAll()!, Trig_start_Func006Func004Func001Func001A);
        bj_forLoopAIndex = 1;
        bj_forLoopAIndexEnd =
          S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!) -
          CountPlayersInForceBJ(udg_Sheep);
        while (true) {
          if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
          ForForce(
            GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
            Trig_start_Func006Func004Func001Func002Func001A,
          );
          bj_forLoopAIndex = bj_forLoopAIndex + 1;
        }
        ForForce(udg_Spirit, Trig_start_Func006Func004Func001Func003A);
      }
    }
  }
  udg_Teams = 2;
  TriggerExecute(gg_trg_createSheep);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_start: () => void;
}
InitTrig_start = (): void => {
  gg_trg_start = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(0)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(1)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(2)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(3)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(4)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(5)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(6)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(7)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(8)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(9)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(10)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(11)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(12)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(13)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(14)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(15)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(16)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(17)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(18)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(19)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(20)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(21)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(22)!, "-start", false);
  TriggerRegisterPlayerChatEvent(gg_trg_start, Player(23)!, "-start", false);
  TriggerAddCondition(gg_trg_start, Condition(Trig_start_Conditions));
  TriggerAddAction(gg_trg_start, Trig_start_Actions);
};
