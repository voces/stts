//===========================================================================
// Trigger: reverse
//===========================================================================
const Trig_reverse_Func011Func002C = (): boolean => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 10, 11)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 10, 11)!) < 24))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func011C = (): boolean => {
  if ((GetEventPlayerChatString()! === "-reverse")) {
    return true;
  }
  if ((Trig_reverse_Func011Func002C())) {
    return true;
  }
  return false;
};

const Trig_reverse_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  if ((!Trig_reverse_Func011C())) {
    return false;
  }
  return true;
};

const Trig_reverse_Func003A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_reverse_Func004A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_reverse_Func005A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func002001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
    ),
  );
};

const Trig_reverse_Func006Func002Func001C = (): boolean => {
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
  ) {
    return false;
  }
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

const Trig_reverse_Func006Func002A = (): void => {
  if ((Trig_reverse_Func006Func002Func001C())) {
    udg_atempint = udg_atempint + 1;
  }
};

const Trig_reverse_Func006Func003Func001Func001Func001Func001C =
  (): boolean => {
    if (
      (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
    ) {
      return false;
    }
    return true;
  };

const Trig_reverse_Func006Func003Func001Func001Func001C = (): boolean => {
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

const Trig_reverse_Func006Func003Func001Func001A = (): void => {
  if ((Trig_reverse_Func006Func003Func001Func001Func001C())) {
    if ((Trig_reverse_Func006Func003Func001Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
    }
  }
};

const Trig_reverse_Func006Func003Func001Func002Func001A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func003Func001Func003A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func003Func001Func004Func001Func001C =
  (): boolean => {
    if (
      (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
    ) {
      return false;
    }
    return true;
  };

const Trig_reverse_Func006Func003Func001Func004Func001C = (): boolean => {
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

const Trig_reverse_Func006Func003Func001Func004A = (): void => {
  if ((Trig_reverse_Func006Func003Func001Func004Func001C())) {
    if ((Trig_reverse_Func006Func003Func001Func004Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_reverse_Func006Func003Func001Func005Func001A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func003Func001Func006A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_reverse_Func006Func003Func001C = (): boolean => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 10, 11)!) < udg_atempint))
  ) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func002Func001Func002C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func003Func002Func001C = (): boolean => {
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
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

const Trig_reverse_Func006Func003Func002A = (): void => {
  if ((Trig_reverse_Func006Func003Func002Func001C())) {
    if ((Trig_reverse_Func006Func003Func002Func001Func002C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    }
  }
};

const Trig_reverse_Func006Func003C = (): boolean => {
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 10, 11)!) === udg_atempint))
  ) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func004Func001Func004C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_reverse_Func006Func004Func001C = (): boolean => {
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

const Trig_reverse_Func006Func004A = (): void => {
  if ((Trig_reverse_Func006Func004Func001C())) {
    if ((Trig_reverse_Func006Func004Func001Func004C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    }
  }
};

const Trig_reverse_Func006C = (): boolean => {
  if ((!(udg_atempstring === "-reverse"))) {
    return false;
  }
  return true;
};

const Trig_reverse_Actions = (): void => {
  udg_lastGameString = GetEventPlayerChatString()!;
  udg_atempstring = StringCase(GetEventPlayerChatString()!, false)!;
  ForForce(udg_Sheep, Trig_reverse_Func003A);
  ForForce(udg_Wolf, Trig_reverse_Func004A);
  ForForce(udg_Spirit, Trig_reverse_Func005A);
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
        bj_forLoopAIndexEnd =
          S2I(SubStringBJ(GetEventPlayerChatString()!, 10, 11)!) -
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
  udg_Teams = 2;
  TriggerExecute(gg_trg_createSheep);
  TriggerSleepAction(0.01);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_reverse: () => void;
}
InitTrig_reverse = (): void => {
  gg_trg_reverse = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(0)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(1)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(2)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(3)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(4)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(5)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(6)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(7)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(8)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(gg_trg_reverse, Player(9)!, "-reverse", false);
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(10)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(11)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(12)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(13)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(14)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(15)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(16)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(17)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(18)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(19)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(20)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(21)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(22)!,
    "-reverse",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_reverse,
    Player(23)!,
    "-reverse",
    false,
  );
  TriggerAddCondition(gg_trg_reverse, Condition(Trig_reverse_Conditions));
  TriggerAddAction(gg_trg_reverse, Trig_reverse_Actions);
};
