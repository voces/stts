//===========================================================================
// Trigger: Force Afk
//===========================================================================
const Trig_Force_Afk_Func001C = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
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

const Trig_Force_Afk_Conditions = (): boolean => {
  if ((!Trig_Force_Afk_Func001C())) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func002002001001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== 3,
    ),
  );
};

const Trig_Force_Afk_Func003Func003A = (): void => {
  udg_atempint2 = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)];
};

const Trig_Force_Afk_Func003Func005001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== 3,
    ),
  );
};

const Trig_Force_Afk_Func003Func005Func001C = (): boolean => {
  if ((!(GetEnumPlayer()! !== ConvertedPlayer(udg_atempint)!))) {
    return false;
  }
  if (
    (!(udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] > udg_atempint2))
  ) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func005A = (): void => {
  if ((Trig_Force_Afk_Func003Func005Func001C())) {
    udg_atempint2 = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)];
  }
};

const Trig_Force_Afk_Func003Func006C = (): boolean => {
  if ((!(udg_sheepCount[udg_atempint] < udg_atempint2))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func001C = (): boolean => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Draft) === true))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func005C = (): boolean => {
  if ((!(udg_Teams !== 3))) {
    return false;
  }
  if ((!(udg_Teams !== 4))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func001002001001001 =
  (): boolean => {
    return GetBooleanAnd(
      GetBooleanOr(
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 1,
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func002Func001Func004C =
  (): boolean => {
    if ((udg_AFK[GetForLoopIndexB()] === 0)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexB()] === 1)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexB()] === 4)) {
      return true;
    }
    return false;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func002Func001C =
  (): boolean => {
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
    if ((!(GetEnumPlayer()! !== ConvertedPlayer(GetForLoopIndexB())!))) {
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003Func003Func003C =
  (): boolean => {
    if ((!(udg_atempboolean === false))) {
      return false;
    }
    return true;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func003A =
  (): void => {
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
        udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] =
          GetForLoopIndexA();
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func002Func001Func004C =
  (): boolean => {
    if ((udg_AFK[GetForLoopIndexB()] === 0)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexB()] === 1)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexB()] === 4)) {
      return true;
    }
    return false;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func002Func001C =
  (): boolean => {
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
    if ((!(GetEnumPlayer()! !== ConvertedPlayer(GetForLoopIndexB())!))) {
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005Func002Func003C =
  (): boolean => {
    if ((!(udg_atempboolean === false))) {
      return false;
    }
    return true;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func005A =
  (): void => {
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
        udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] =
          GetForLoopIndexA();
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001Func007001001001 =
  (): boolean => {
    return GetBooleanAnd(
      GetBooleanOr(
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 1,
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func001C =
  (): boolean => {
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001Func002C =
  (): boolean => {
    if ((!(udg_captainTurn === 3))) {
      return false;
    }
    return true;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func001C =
  (): boolean => {
    if ((!(GetTriggerPlayer()! === udg_captains[3]))) {
      return false;
    }
    return true;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func001002001001001 =
  (): boolean => {
    return GetBooleanAnd(
      GetBooleanOr(
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 1,
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func002Func001Func004C =
  (): boolean => {
    if ((udg_AFK[GetForLoopIndexB()] === 0)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexB()] === 1)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexB()] === 4)) {
      return true;
    }
    return false;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func002Func001C =
  (): boolean => {
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
    if ((!(GetEnumPlayer()! !== ConvertedPlayer(GetForLoopIndexB())!))) {
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003Func003Func003C =
  (): boolean => {
    if ((!(udg_atempboolean === false))) {
      return false;
    }
    return true;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func003A =
  (): void => {
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
        udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] =
          GetForLoopIndexA();
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func002Func001Func004C =
  (): boolean => {
    if ((udg_AFK[GetForLoopIndexB()] === 0)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexB()] === 1)) {
      return true;
    }
    if ((udg_AFK[GetForLoopIndexB()] === 4)) {
      return true;
    }
    return false;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func002Func001C =
  (): boolean => {
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
    if ((!(GetEnumPlayer()! !== ConvertedPlayer(GetForLoopIndexB())!))) {
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005Func002Func003C =
  (): boolean => {
    if ((!(udg_atempboolean === false))) {
      return false;
    }
    return true;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func005A =
  (): void => {
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
        udg_multiboardRow[GetConvertedPlayerId(GetEnumPlayer()!)] =
          GetForLoopIndexA();
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func007C =
  (): boolean => {
    if ((!(udg_captainTurn === 1))) {
      return false;
    }
    return true;
  };

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002Func008001001001 =
  (): boolean => {
    return GetBooleanAnd(
      GetBooleanOr(
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 1,
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010Func002C =
  (): boolean => {
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

const Trig_Force_Afk_Func003Func007Func002Func001Func010C = (): boolean => {
  if ((!(ConvertedPlayer(udg_atempint)! === udg_captains[1]))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001Func011C = (): boolean => {
  if ((!(udg_sheepLastGame[udg_atempint] === true))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func001C = (): boolean => {
  if ((!(udg_Teams === 4))) {
    return false;
  }
  if (
    (!(IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Draft) === false))
  ) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007Func002Func005C = (): boolean => {
  if ((IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Sheep) === true)) {
    return true;
  }
  if ((IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Wolf) === true)) {
    return true;
  }
  return false;
};

const Trig_Force_Afk_Func003Func007Func002C = (): boolean => {
  if ((!(udg_Teams === 3))) {
    return false;
  }
  if ((!Trig_Force_Afk_Func003Func007Func002Func005C())) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003Func007C = (): boolean => {
  if ((!(udg_gameStarted === true))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func003C = (): boolean => {
  if ((!(udg_AFK[udg_atempint] < 3))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func006Func001Func001Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Func006Func001Func001Func003C = (): boolean => {
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

const Trig_Force_Afk_Func006Func001Func001C = (): boolean => {
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

const Trig_Force_Afk_Func006Func001A = (): void => {
  if ((Trig_Force_Afk_Func006Func001Func001C())) {
    if ((Trig_Force_Afk_Func006Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_Force_Afk_Func006C = (): boolean => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 0))) {
    return false;
  }
  if ((!(udg_Teams === 4))) {
    return false;
  }
  return true;
};

const Trig_Force_Afk_Actions = (): void => {
  udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!);
  if ((Trig_Force_Afk_Func003C())) {
    if ((Trig_Force_Afk_Func003Func007C())) {
      DoNothing();
    } else {
      if ((Trig_Force_Afk_Func003Func007Func002C())) {
        udg_AFKOn[udg_atempint] = 1;
        udg_AFK[udg_atempint] = 4;
      } else {
        if ((Trig_Force_Afk_Func003Func007Func002Func001C())) {
          udg_AFKOn[udg_atempint] = 1;
          udg_AFK[udg_atempint] = 4;
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
          if ((Trig_Force_Afk_Func003Func007Func002Func001Func001C())) {
            ForceRemovePlayerSimple(ConvertedPlayer(udg_atempint)!, udg_Draft);
            MultiboardSetItemValueBJ(
              udg_captainsMultiboard,
              2,
              udg_multiboardRow[udg_atempint],
              "",
            );
          }
          udg_AFKOn[udg_atempint] = 1;
          udg_AFK[udg_atempint] = 3;
          LeaderboardRemovePlayerItemBJ(
            ConvertedPlayer(udg_atempint)!,
            GetLastCreatedLeaderboard()!,
          );
          if ((Trig_Force_Afk_Func003Func007Func002Func001Func005C())) {
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
      ForcePickRandomPlayer(
        GetPlayersMatching(
          Condition(Trig_Force_Afk_Func003Func002002001001001),
        )!,
      )!,
    )!;
    ForForce(udg_atempplayer, Trig_Force_Afk_Func003Func003A);
    DestroyForce(udg_atempplayer);
    ForForce(
      GetPlayersMatching(Condition(Trig_Force_Afk_Func003Func005001001))!,
      Trig_Force_Afk_Func003Func005A,
    );
    if ((Trig_Force_Afk_Func003Func006C())) {
      udg_sheepCount[udg_atempint] = udg_atempint2;
    }
  }
  TriggerExecute(gg_trg_createLists);
  TriggerExecute(gg_trg_setupLeaderboard);
  if ((Trig_Force_Afk_Func006C())) {
    ForForce(GetPlayersAll()!, Trig_Force_Afk_Func006Func001A);
    udg_Teams = 2;
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

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Force_Afk: () => void;
}
InitTrig_Force_Afk = (): void => {
  gg_trg_Force_Afk = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(0)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(1)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(2)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(3)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(4)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(5)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(6)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(7)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(8)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Force_Afk, Player(9)!, "-fafk ", false);
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(10)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(11)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(12)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(13)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(14)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(15)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(16)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(17)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(18)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(19)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(20)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(21)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(22)!,
    "-fafk ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Force_Afk,
    Player(23)!,
    "-fafk ",
    false,
  );
  TriggerAddCondition(gg_trg_Force_Afk, Condition(Trig_Force_Afk_Conditions));
  TriggerAddAction(gg_trg_Force_Afk, Trig_Force_Afk_Actions);
};
