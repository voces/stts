//===========================================================================
// Trigger: draftPlayer
//===========================================================================
const Trig_draftPlayer_Conditions = (): boolean => {
  if ((!(udg_draftOn === true))) {
    return false;
  }
  if ((!(GetTriggerPlayer()! === udg_captains[udg_captainTurn]))) {
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

const Trig_draftPlayer_Func006Func005Func001Func002001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      GetBooleanAnd(
        GetBooleanOr(
          udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
          GetBooleanOr(
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 1,
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 4,
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

const Trig_draftPlayer_Func006Func005Func001Func002Func001C = (): boolean => {
  if (
    (!(udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] ===
      GetForLoopIndexA()))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer()! !== ConvertedPlayer(udg_atempint)!))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005Func001Func002A = (): void => {
  if ((Trig_draftPlayer_Func006Func005Func001Func002Func001C())) {
    udg_atempboolean = true;
  }
};

const Trig_draftPlayer_Func006Func005Func001Func003C = (): boolean => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005Func002Func002001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      GetBooleanAnd(
        GetBooleanOr(
          udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
          GetBooleanOr(
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 1,
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 4,
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

const Trig_draftPlayer_Func006Func005Func002Func002Func001C = (): boolean => {
  if (
    (!(udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] ===
      GetForLoopIndexA()))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer()! !== ConvertedPlayer(udg_atempint)!))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005Func002Func002A = (): void => {
  if ((Trig_draftPlayer_Func006Func005Func002Func002Func001C())) {
    udg_atempboolean = true;
  }
};

const Trig_draftPlayer_Func006Func005Func002Func003C = (): boolean => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func005C = (): boolean => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func007C = (): boolean => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func001Func001C = (): boolean => {
  if ((!(udg_captainTurn === 3))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func001A = (): void => {
  if ((Trig_draftPlayer_Func006Func009Func001Func001C())) {
    udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = true;
  } else {
    udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = false;
  }
};

const Trig_draftPlayer_Func006Func009Func002C = (): boolean => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func006Func001Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006Func009Func006Func001Func003C = (): boolean => {
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0)) {
    return true;
  }
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 1)) {
    return true;
  }
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 4)) {
    return true;
  }
  return false;
};

const Trig_draftPlayer_Func006Func009Func006Func001C = (): boolean => {
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

const Trig_draftPlayer_Func006Func009Func006A = (): void => {
  if ((Trig_draftPlayer_Func006Func009Func006Func001C())) {
    if ((Trig_draftPlayer_Func006Func009Func006Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_draftPlayer_Func006Func009C = (): boolean => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 1))) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Func006C = (): boolean => {
  if (
    (!(IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Draft) === true))
  ) {
    return false;
  }
  return true;
};

const Trig_draftPlayer_Actions = (): void => {
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
      udg_Teams = 2;
      MultiboardDisplayBJ(false, udg_captainsMultiboard);
      enforceTeamResourceMultiboard();
      MultiboardMinimizeBJ(true, udg_captainsMultiboard);
      DestroyMultiboardBJ(udg_captainsMultiboard);
      TriggerSleepAction(0.01);
      DisableTrigger(GetTriggeringTrigger()!);
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

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_draftPlayer: () => void;
}
InitTrig_draftPlayer = (): void => {
  gg_trg_draftPlayer = CreateTrigger();
  DisableTrigger(gg_trg_draftPlayer);
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(0)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(1)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(2)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(3)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(4)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(5)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(6)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(7)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(8)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(9)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(10)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(11)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(12)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(13)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(14)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(15)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(16)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(17)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(18)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(19)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(20)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(21)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(22)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftPlayer,
    Player(23)!,
    "-draft",
    false,
  );
  TriggerAddCondition(
    gg_trg_draftPlayer,
    Condition(Trig_draftPlayer_Conditions),
  );
  TriggerAddAction(gg_trg_draftPlayer, Trig_draftPlayer_Actions);
};
