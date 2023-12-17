import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_giveUpCaptain_Func005Func002C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!) < 25))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!) > 0))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func005C = () => {
  if ((GetEventPlayerChatString() === "-give")) {
    return true;
  }
  if ((Trig_giveUpCaptain_Func005Func002C())) {
    return true;
  }
  return false;
};

const Trig_giveUpCaptain_Conditions = () => {
  if ((!Trig_giveUpCaptain_Func005C())) {
    return false;
  }
  if ((!(udg_giveOn === true))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func002Func001Func001Func001Func002001001001 = () => {
  return GetBooleanAnd(
    udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] === false,
    GetBooleanAnd(
      IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
      GetFilterPlayer() !== udg_captains[3],
    ),
  );
};

const Trig_giveUpCaptain_Func002Func001Func001Func001C = () => {
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(
        Condition(
          Trig_giveUpCaptain_Func002Func001Func001Func001Func002001001001,
        ),
      )!,
    ) === 0))
  ) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func002Func001Func001C = () => {
  if ((!(GetTriggerPlayer() === udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func002Func001Func002Func002001001001 = () => {
  return GetBooleanAnd(
    udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] === true,
    GetBooleanAnd(
      IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
      GetFilterPlayer() !== udg_captains[1],
    ),
  );
};

const Trig_giveUpCaptain_Func002Func001Func002C = () => {
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(
        Condition(Trig_giveUpCaptain_Func002Func001Func002Func002001001001),
      )!,
    ) === 0))
  ) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func002Func001C = () => {
  if ((!(GetTriggerPlayer() === udg_captains[1]))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func002C = () => {
  if ((!(GetEventPlayerChatString() === "-give"))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func003Func001Func001Func010C = () => {
  if ((!(udg_captainTurn === 3))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func003Func001Func001Func012001001001 = () => {
  return GetBooleanAnd(
    udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] === false,
    GetBooleanAnd(
      IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
      GetFilterPlayer() !== udg_captains[3],
    ),
  );
};

const Trig_giveUpCaptain_Func003Func001Func001C = () => {
  if (
    (!(IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Draft) === true))
  ) {
    return false;
  }
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(
        Condition(Trig_giveUpCaptain_Func003Func001Func001Func012001001001),
      )!,
    ) === 0))
  ) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func003Func001C = () => {
  if ((!(GetTriggerPlayer() === udg_captains[3]))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func003Func002Func010C = () => {
  if ((!(udg_captainTurn === 1))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func003Func002Func012001001001 = () => {
  return GetBooleanAnd(
    udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] === true,
    GetBooleanAnd(
      IsPlayerInForce(GetFilterPlayer()!, udg_Draft) === false,
      GetFilterPlayer() !== udg_captains[1],
    ),
  );
};

const Trig_giveUpCaptain_Func003Func002C = () => {
  if (
    (!(IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Draft) === true))
  ) {
    return false;
  }
  if (
    (!(CountPlayersInForceBJ(
      GetPlayersMatching(
        Condition(Trig_giveUpCaptain_Func003Func002Func012001001001),
      )!,
    ) === 0))
  ) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Func003C = () => {
  if ((!(GetTriggerPlayer() === udg_captains[1]))) {
    return false;
  }
  return true;
};

const Trig_giveUpCaptain_Actions = () => {
  udg_giveOn = false;
  if ((Trig_giveUpCaptain_Func002C())) {
    if ((Trig_giveUpCaptain_Func002Func001C())) {
      if ((Trig_giveUpCaptain_Func002Func001Func002C())) {
        udg_atempint = GetConvertedPlayerId(ForcePickRandomPlayer(udg_Draft)!);
      }
    } else {
      if ((Trig_giveUpCaptain_Func002Func001Func001C())) {
        if ((Trig_giveUpCaptain_Func002Func001Func001Func001C())) {
          udg_atempint = GetConvertedPlayerId(
            ForcePickRandomPlayer(udg_Draft)!,
          );
        }
      }
    }
  } else {
    udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!);
  }
  if ((Trig_giveUpCaptain_Func003C())) {
    if ((Trig_giveUpCaptain_Func003Func002C())) {
      udg_captains[1] = ConvertedPlayer(udg_atempint)!;
      udg_atempint2 = udg_multiboardRow[udg_atempint];
      udg_multiboardRow[udg_atempint] = udg_multiboardRow[GetConvertedPlayerId(GetTriggerPlayer()!)];
      udg_multiboardRow[GetConvertedPlayerId(GetTriggerPlayer()!)] = udg_atempint2;
      MultiboardSetItemValueBJ(
        udg_captainsMultiboard,
        1,
        udg_multiboardRow[udg_atempint],
        "$" +
          (udg_colorString[udg_atempint] +
            GetPlayerName(ConvertedPlayer(udg_atempint)!)),
      );
      MultiboardSetItemValueBJ(
        udg_captainsMultiboard,
        2,
        udg_multiboardRow[GetConvertedPlayerId(GetTriggerPlayer()!)],
        udg_colorString[GetConvertedPlayerId(GetTriggerPlayer()!)] +
          (GetPlayerName(GetTriggerPlayer()!) +
            ("(" + (I2S(GetConvertedPlayerId(GetTriggerPlayer()!)) + ")"))),
      );
      udg_sheepLastGame[udg_atempint] = true;
      ForceAddPlayerSimple(GetTriggerPlayer()!, udg_Draft);
      ForceRemovePlayerSimple(ConvertedPlayer(udg_atempint)!, udg_Draft);
      if ((Trig_giveUpCaptain_Func003Func002Func010C())) {
        MultiboardSetTitleText(
          udg_captainsMultiboard,
          udg_colorString[udg_atempint] +
            (GetPlayerName(ConvertedPlayer(udg_atempint)!) + "'s turn"),
        );
      }
    }
  } else {
    if ((Trig_giveUpCaptain_Func003Func001C())) {
      if ((Trig_giveUpCaptain_Func003Func001Func001C())) {
        udg_captains[3] = ConvertedPlayer(udg_atempint)!;
        udg_atempint2 = udg_multiboardRow[udg_atempint];
        udg_multiboardRow[udg_atempint] = udg_multiboardRow[GetConvertedPlayerId(GetTriggerPlayer()!)];
        udg_multiboardRow[GetConvertedPlayerId(GetTriggerPlayer()!)] = udg_atempint2;
        MultiboardSetItemValueBJ(
          udg_captainsMultiboard,
          3,
          udg_multiboardRow[udg_atempint],
          "$" +
            (udg_colorString[udg_atempint] +
              GetPlayerName(ConvertedPlayer(udg_atempint)!)),
        );
        MultiboardSetItemValueBJ(
          udg_captainsMultiboard,
          2,
          udg_multiboardRow[GetConvertedPlayerId(GetTriggerPlayer()!)],
          udg_colorString[GetConvertedPlayerId(GetTriggerPlayer()!)] +
            (GetPlayerName(GetTriggerPlayer()!) +
              ("(" + (I2S(GetConvertedPlayerId(GetTriggerPlayer()!)) + ")"))),
        );
        udg_sheepLastGame[udg_atempint] = false;
        ForceAddPlayerSimple(GetTriggerPlayer()!, udg_Draft);
        ForceRemovePlayerSimple(ConvertedPlayer(udg_atempint)!, udg_Draft);
        if ((Trig_giveUpCaptain_Func003Func001Func001Func010C())) {
          MultiboardSetTitleText(
            udg_captainsMultiboard,
            udg_colorString[udg_atempint] +
              (GetPlayerName(ConvertedPlayer(udg_atempint)!) + "'s turn"),
          );
        }
      }
    }
  }
  udg_giveOn = true;
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_giveUpCaptain: () => void;
}
InitTrig_giveUpCaptain = () => {
  gg_trg_giveUpCaptain = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_giveUpCaptain, "-give", false);
  TriggerAddCondition(
    gg_trg_giveUpCaptain,
    Condition(Trig_giveUpCaptain_Conditions),
  );
  TriggerAddAction(gg_trg_giveUpCaptain, Trig_giveUpCaptain_Actions);
};
