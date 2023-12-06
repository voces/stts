//===========================================================================
// Trigger: AFK
//
// afk == 4, went afk during game or during pick and WAS picked
// afk == 3, gamestarted, and 1 or 2 OR during pick was NOT picked. (not playing)
// afk == 2, watching game (back)
// afk == 1, was afk=3, so they came back DURING pick and have not been picked yet
// afk == 0, here

import { inflateGoldCount } from "../commands/g";

//===========================================================================
const Trig_AFK_Func005Func001Func001Func002Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[udg_atempint] === true))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001Func001Func002C = (): boolean => {
  if ((!(udg_Teams === 4))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001Func001Func003Func001C = (): boolean => {
  if ((!(udg_Teams === 4))) {
    return false;
  }
  if ((!(udg_AFK[udg_atempint] === 3))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001Func001Func003Func002C = (): boolean => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf) === false))) {
    return false;
  }
  if ((!(udg_Teams === 3))) {
    return false;
  }
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep) === false))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001Func001Func003C = (): boolean => {
  if ((Trig_AFK_Func005Func001Func001Func003Func001C())) {
    return true;
  }
  if ((Trig_AFK_Func005Func001Func001Func003Func002C())) {
    return true;
  }
  return false;
};

const Trig_AFK_Func005Func001Func001C = (): boolean => {
  if ((!Trig_AFK_Func005Func001Func001Func003C())) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001Func002Func006Func001C = (): boolean => {
  if ((!(GetEnumPlayer()! !== GetTriggerPlayer()!))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001Func002Func006A = (): void => {
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

const Trig_AFK_Func005Func001Func002C = (): boolean => {
  if ((!(udg_AFK[udg_atempint] === 4))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func001C = (): boolean => {
  if ((!(udg_gameStarted === true))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func005Func001Func002Func002A = (): void => {
  PanCameraToForPlayer(
    GetTriggerPlayer()!,
    GetUnitX(udg_unit[GetPlayerId(GetEnumPlayer()!)]),
    GetUnitY(udg_unit[GetPlayerId(GetEnumPlayer()!)]),
  );
};

const Trig_AFK_Func005Func005Func001Func002Func005C = (): boolean => {
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep) === true)) {
    return true;
  }
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Spirit) === true)) {
    return true;
  }
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf) === true)) {
    return true;
  }
  return false;
};

const Trig_AFK_Func005Func005Func001Func002C = (): boolean => {
  if ((!Trig_AFK_Func005Func005Func001Func002Func005C())) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func005Func001C = (): boolean => {
  if ((!(udg_Teams === 2))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func005C = (): boolean => {
  if ((!(udg_Teams === 3))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func007002001001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== 3,
    ),
  );
};

const Trig_AFK_Func005Func008A = (): void => {
  udg_atempint2 = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)];
};

const Trig_AFK_Func005Func010001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== 3,
    ),
  );
};

const Trig_AFK_Func005Func010Func001C = (): boolean => {
  if ((!(GetEnumPlayer()! !== GetTriggerPlayer()!))) {
    return false;
  }
  if (
    (!(udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] > udg_atempint2))
  ) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func010A = (): void => {
  if ((Trig_AFK_Func005Func010Func001C())) {
    udg_atempint2 = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)];
  }
};

const Trig_AFK_Func005Func011C = (): boolean => {
  if ((!(udg_sheepCount[udg_atempint] < udg_atempint2))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func001C = (): boolean => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Draft) === true))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func005C = (): boolean => {
  if ((!(udg_Teams !== 3))) {
    return false;
  }
  if ((!(udg_Teams !== 4))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func002002001001001 =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func002Func001Func004C =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func002Func001C =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003Func003Func003C =
  (): boolean => {
    if ((!(udg_atempboolean === false))) {
      return false;
    }
    return true;
  };

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func003A =
  (): void => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func002Func001Func004C =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func002Func001C =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func003C =
  (): boolean => {
    if ((!(udg_atempboolean === false))) {
      return false;
    }
    return true;
  };

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005A =
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
          (Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func002Func001C())
        ) {
          udg_atempboolean = true;
        }
        bj_forLoopBIndex = bj_forLoopBIndex + 1;
      }
      if (
        (Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func005Func002Func003C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001Func007001001001 =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func001C =
  (): boolean => {
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

const Trig_AFK_Func005Func013Func001Func001Func010Func001Func002C =
  (): boolean => {
    if ((!(udg_captainTurn === 3))) {
      return false;
    }
    return true;
  };

const Trig_AFK_Func005Func013Func001Func001Func010Func001C = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func002002001001001 =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func002Func001Func004C =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func002Func001C =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func003C =
  (): boolean => {
    if ((!(udg_atempboolean === false))) {
      return false;
    }
    return true;
  };

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func003A =
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
          (Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func002Func001C())
        ) {
          udg_atempboolean = true;
        }
        bj_forLoopBIndex = bj_forLoopBIndex + 1;
      }
      if (
        (Trig_AFK_Func005Func013Func001Func001Func010Func002Func003Func003Func003C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func002Func001Func004C =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func002Func001C =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func003C =
  (): boolean => {
    if ((!(udg_atempboolean === false))) {
      return false;
    }
    return true;
  };

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func005A =
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
          (Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func002Func001C())
        ) {
          udg_atempboolean = true;
        }
        bj_forLoopBIndex = bj_forLoopBIndex + 1;
      }
      if (
        (Trig_AFK_Func005Func013Func001Func001Func010Func002Func005Func002Func003C())
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func007C =
  (): boolean => {
    if ((!(udg_captainTurn === 1))) {
      return false;
    }
    return true;
  };

const Trig_AFK_Func005Func013Func001Func001Func010Func002Func008001001001 =
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

const Trig_AFK_Func005Func013Func001Func001Func010Func002C = (): boolean => {
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

const Trig_AFK_Func005Func013Func001Func001Func010C = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_captains[1]))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001Func011C = (): boolean => {
  if ((!(udg_sheepLastGame[udg_atempint] === true))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func001C = (): boolean => {
  if ((!(udg_Teams === 4))) {
    return false;
  }
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Draft) === false))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func001Func005C = (): boolean => {
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep) === true)) {
    return true;
  }
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf) === true)) {
    return true;
  }
  return false;
};

const Trig_AFK_Func005Func013Func001C = (): boolean => {
  if ((!(udg_Teams === 3))) {
    return false;
  }
  if ((!Trig_AFK_Func005Func013Func001Func005C())) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013Func002C = (): boolean => {
  if ((!(udg_AFK[udg_atempint] > 0))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func013C = (): boolean => {
  if ((!(udg_gameStarted === true))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005Func014C = (): boolean => {
  if ((!(udg_AFK[udg_atempint] > 2))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func005C = (): boolean => {
  if ((!(udg_AFK[udg_atempint] < 3))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func008Func001Func001Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_AFK_Func008Func001Func001Func003C = (): boolean => {
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

const Trig_AFK_Func008Func001Func001C = (): boolean => {
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

const Trig_AFK_Func008Func001A = (): void => {
  if ((Trig_AFK_Func008Func001Func001C())) {
    if ((Trig_AFK_Func008Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_AFK_Func008C = (): boolean => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 0))) {
    return false;
  }
  if ((!(udg_Teams === 4))) {
    return false;
  }
  return true;
};

const Trig_AFK_Actions = (): void => {
  if (rotated === GetTriggerPlayer()!) {
    return;
  }
  udg_atempint = GetConvertedPlayerId(GetTriggerPlayer()!);
  if ((Trig_AFK_Func005C())) {
    if ((Trig_AFK_Func005Func013C())) {
      if ((Trig_AFK_Func005Func013Func002C())) {
        udg_AFKOn[udg_atempint] = 1;
        udg_AFK[udg_atempint] = 3;
        LeaderboardSetPlayerItemLabelBJ(
          GetTriggerPlayer()!,
          PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
          GetPlayerName(GetTriggerPlayer()!)!,
        );
      }
    } else {
      if ((Trig_AFK_Func005Func013Func001C())) {
        udg_AFKOn[udg_atempint] = 1;
        udg_AFK[udg_atempint] = 4;
      } else {
        if ((Trig_AFK_Func005Func013Func001Func001C())) {
          udg_AFKOn[udg_atempint] = 1;
          udg_AFK[udg_atempint] = 4;
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
          udg_AFK[udg_atempint] = 3;
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
      }
    }
    if ((Trig_AFK_Func005Func014C())) {
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        (("                              " + udg_colorString[udg_atempint]) +
          GetPlayerName(GetTriggerPlayer()!)) + " |rhas gone AFK.",
      );
    }
  } else {
    if ((Trig_AFK_Func005Func001C())) {
      if ((Trig_AFK_Func005Func001Func002C())) {
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
        udg_AFK[udg_atempint] = 0;
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
    } else {
      if ((Trig_AFK_Func005Func001Func001C())) {
        udg_AFK[udg_atempint] = 1;
        LeaderboardAddItemBJ(
          GetTriggerPlayer()!,
          GetLastCreatedLeaderboard()!,
          GetPlayerName(GetTriggerPlayer()!)!,
          0,
        );
      } else {
        udg_AFK[udg_atempint] = 0;
        if ((Trig_AFK_Func005Func001Func001Func002C())) {
          if ((Trig_AFK_Func005Func001Func001Func002Func001C())) {
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
    }
    ResetToGameCameraForPlayer(GetTriggerPlayer()!, 0);
    SetCameraFieldForPlayer(
      GetTriggerPlayer()!,
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_zoom[GetConvertedPlayerId(GetTriggerPlayer()!)],
      0,
    );
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      (("                              " + udg_colorString[udg_atempint]) +
        GetPlayerName(GetTriggerPlayer()!)) + " |ris back.",
    );
    if ((Trig_AFK_Func005Func005C())) {
      PanCameraToForPlayer(
        GetTriggerPlayer()!,
        GetUnitX(udg_farm),
        GetUnitY(udg_farm),
      );
    } else {
      if ((Trig_AFK_Func005Func005Func001C())) {
        if ((Trig_AFK_Func005Func005Func001Func002C())) {
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
      } else {
        PanCameraToForPlayer(
          GetTriggerPlayer()!,
          GetRectCenterX(wolfSpawn),
          GetRectCenterY(wolfSpawn),
        );
      }
    }
    // If players sheepCount is lowest than the greatest players SheepCount, set them.
    udg_atempplayer = GetForceOfPlayer(
      ForcePickRandomPlayer(
        GetPlayersMatching(Condition(Trig_AFK_Func005Func007002001001001))!,
      )!,
    )!;
    ForForce(udg_atempplayer, Trig_AFK_Func005Func008A);
    DestroyForce(udg_atempplayer);
    ForForce(
      GetPlayersMatching(Condition(Trig_AFK_Func005Func010001001))!,
      Trig_AFK_Func005Func010A,
    );
    if ((Trig_AFK_Func005Func011C())) {
      udg_sheepCount[udg_atempint] = udg_atempint2;
    }
    inflateGoldCount(GetTriggerPlayer()!);
  }
  TriggerExecute(gg_trg_createLists);
  TriggerExecute(gg_trg_setupLeaderboard);
  if ((Trig_AFK_Func008C())) {
    ForForce(GetPlayersAll()!, Trig_AFK_Func008Func001A);
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
  let InitTrig_AFK: () => void;
}
InitTrig_AFK = (): void => {
  gg_trg_AFK = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(0)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(1)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(2)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(3)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(4)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(5)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(6)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(7)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(8)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(9)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(10)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(11)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(12)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(13)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(14)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(15)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(16)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(17)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(18)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(19)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(20)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(21)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(22)!, "-afk", true);
  TriggerRegisterPlayerChatEvent(gg_trg_AFK, Player(23)!, "-afk", true);
  TriggerAddAction(gg_trg_AFK, Trig_AFK_Actions);
};
