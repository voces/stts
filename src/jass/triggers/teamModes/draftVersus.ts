//===========================================================================
// Trigger: draftVersus
//===========================================================================
const Trig_draftVersus_Conditions = (): boolean => {
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

const Trig_draftVersus_Func030Func005Func001Func002001001 = (): boolean => {
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

const Trig_draftVersus_Func030Func005Func001Func002Func001C = (): boolean => {
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

const Trig_draftVersus_Func030Func005Func001Func002A = (): void => {
  if ((Trig_draftVersus_Func030Func005Func001Func002Func001C())) {
    udg_atempboolean = true;
  }
};

const Trig_draftVersus_Func030Func005Func001Func003C = (): boolean => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func005Func002Func002001001 = (): boolean => {
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

const Trig_draftVersus_Func030Func005Func002Func002Func001C = (): boolean => {
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

const Trig_draftVersus_Func030Func005Func002Func002A = (): void => {
  if ((Trig_draftVersus_Func030Func005Func002Func002Func001C())) {
    udg_atempboolean = true;
  }
};

const Trig_draftVersus_Func030Func005Func002Func003C = (): boolean => {
  if ((!(udg_atempboolean === false))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func005C = (): boolean => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func007C = (): boolean => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func001Func001C = (): boolean => {
  if ((!(udg_captainTurn === 3))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func001A = (): void => {
  if ((Trig_draftVersus_Func030Func009Func001Func001C())) {
    udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = true;
  } else {
    udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = false;
  }
};

const Trig_draftVersus_Func030Func009Func002Func001Func001C = (): boolean => {
  if ((!(CountPlayersInForceBJ(udg_Draft) > 1))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func002Func001C = (): boolean => {
  if ((!(udg_pickAgain === false))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func002Func002Func001C = (): boolean => {
  if ((!(CountPlayersInForceBJ(udg_Draft) > 1))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func002Func002C = (): boolean => {
  if ((!(udg_pickAgain === false))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func002C = (): boolean => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func006Func001Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func006Func001Func003C = (): boolean => {
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

const Trig_draftVersus_Func030Func009Func006Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!Trig_draftVersus_Func030Func009Func006Func001Func003C())) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030Func009Func006A = (): void => {
  if ((Trig_draftVersus_Func030Func009Func006Func001C())) {
    if ((Trig_draftVersus_Func030Func009Func006Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_draftVersus_Func030Func009C = (): boolean => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 1))) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Func030C = (): boolean => {
  if (
    (!(IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Draft) === true))
  ) {
    return false;
  }
  return true;
};

const Trig_draftVersus_Actions = (): void => {
  udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 8, 9)!);
  if ((Trig_draftVersus_Func030C())) {
    udg_draftOn = false;
    udg_giveOn = false;
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      2,
      udg_multiboardRow[udg_atempint],
      "",
    );
    udg_atempboolean = false;
    if ((Trig_draftVersus_Func030Func005C())) {
      bj_forLoopAIndex = 1;
      bj_forLoopAIndexEnd = 24;
      while (true) {
        if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
        udg_atempboolean = false;
        ForForce(
          GetPlayersMatching(
            Condition(Trig_draftVersus_Func030Func005Func002Func002001001),
          )!,
          Trig_draftVersus_Func030Func005Func002Func002A,
        );
        if ((Trig_draftVersus_Func030Func005Func002Func003C())) {
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
            Condition(Trig_draftVersus_Func030Func005Func001Func002001001),
          )!,
          Trig_draftVersus_Func030Func005Func001Func002A,
        );
        if ((Trig_draftVersus_Func030Func005Func001Func003C())) {
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
    if ((Trig_draftVersus_Func030Func007C())) {
      udg_sheepLastGame[udg_atempint] = true;
    } else {
      udg_sheepLastGame[udg_atempint] = false;
    }
    ForceRemovePlayerSimple(ConvertedPlayer(udg_atempint)!, udg_Draft);
    if ((Trig_draftVersus_Func030Func009C())) {
      ForForce(udg_Draft, Trig_draftVersus_Func030Func009Func001A);
      ForForce(GetPlayersAll()!, Trig_draftVersus_Func030Func009Func006A);
      udg_Teams = 2;
      MultiboardDisplayBJ(false, udg_captainsMultiboard);
      enforceTeamResourceMultiboard();
      MultiboardMinimizeBJ(true, udg_captainsMultiboard);
      DestroyMultiboardBJ(udg_captainsMultiboard);
      TriggerSleepAction(0.01);
      udg_someVersusBoolean = false;
      DisableTrigger(GetTriggeringTrigger()!);
      DisableTrigger(gg_trg_giveUpCaptain);
      TriggerExecute(gg_trg_versusCountDown);
    } else {
      if ((Trig_draftVersus_Func030Func009Func002C())) {
        if ((Trig_draftVersus_Func030Func009Func002Func002C())) {
          udg_captainTurn = 3;
          udg_pickAgain = true;
        } else {
          if ((Trig_draftVersus_Func030Func009Func002Func002Func001C())) {
            udg_captainRow = udg_captainRow + 1;
          } else {
            udg_captainTurn = 3;
          }
          udg_pickAgain = false;
        }
      } else {
        if ((Trig_draftVersus_Func030Func009Func002Func001C())) {
          udg_captainTurn = 1;
          udg_pickAgain = true;
        } else {
          if ((Trig_draftVersus_Func030Func009Func002Func001Func001C())) {
            udg_captainRow = udg_captainRow + 1;
          } else {
            udg_captainTurn = 1;
          }
          udg_pickAgain = false;
        }
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
  let InitTrig_draftVersus: () => void;
}
InitTrig_draftVersus = (): void => {
  gg_trg_draftVersus = CreateTrigger();
  DisableTrigger(gg_trg_draftVersus);
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(0)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(1)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(2)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(3)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(4)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(5)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(6)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(7)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(8)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(9)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(10)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(11)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(12)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(13)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(14)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(15)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(16)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(17)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(18)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(19)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(20)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(21)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(22)!,
    "-draft",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_draftVersus,
    Player(23)!,
    "-draft",
    false,
  );
  TriggerAddCondition(
    gg_trg_draftVersus,
    Condition(Trig_draftVersus_Conditions),
  );
  TriggerAddAction(gg_trg_draftVersus, Trig_draftVersus_Actions);
};
