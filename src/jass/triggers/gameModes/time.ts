//===========================================================================
// Trigger: time
//===========================================================================
const Trig_time_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 6, 6) !== "s"))) {
    return false;
  }
  return true;
};

const Trig_time_Func002Func001C = (): boolean => {
  if (
    (!(SubStringBJ(
      GetEventPlayerChatString()!,
      GetForLoopIndexA(),
      GetForLoopIndexA(),
    ) === ":"))
  ) {
    return false;
  }
  return true;
};

const Trig_time_Func003Func001C = (): boolean => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 9)!) >= 1))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 9)!) <= 120))) {
    return false;
  }
  return true;
};

const Trig_time_Func003C = (): boolean => {
  if ((!(udg_atempint > 0))) {
    return false;
  }
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint - 1)!) >=
      1))
  ) {
    return false;
  }
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint - 1)!) <=
      120))
  ) {
    return false;
  }
  if (
    (!(S2I(
      SubStringBJ(
        GetEventPlayerChatString()!,
        udg_atempint + 1,
        StringLength(GetEventPlayerChatString()!),
      )!,
    ) >= 0))
  ) {
    return false;
  }
  if (
    (!(S2I(
      SubStringBJ(
        GetEventPlayerChatString()!,
        udg_atempint + 1,
        StringLength(GetEventPlayerChatString()!),
      )!,
    ) <= 59))
  ) {
    return false;
  }
  return true;
};

const Trig_time_Func005C = (): boolean => {
  if ((!(StringLength(udg_atempstring) === 1))) {
    return false;
  }
  return true;
};

const Trig_time_Func006C = (): boolean => {
  if ((!(udg_switchOn === true))) {
    return false;
  }
  return true;
};

const Trig_time_Actions = (): void => {
  udg_atempint = 0;
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = StringLength(GetEventPlayerChatString()!);
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_time_Func002Func001C())) {
      udg_atempint = GetForLoopIndexA();
      break;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  if ((Trig_time_Func003C())) {
    udg_time = I2R(
      S2I(SubStringBJ(GetEventPlayerChatString()!, 7, udg_atempint - 1)!) *
        60,
    ) +
      I2R(
        S2I(
          SubStringBJ(
            GetEventPlayerChatString()!,
            udg_atempint + 1,
            StringLength(GetEventPlayerChatString()!),
          )!,
        ),
      );
    checkAutoTimeFlag();
  } else {
    if ((Trig_time_Func003Func001C())) {
      udg_time = I2R(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 9)!)) * 60;
      checkAutoTimeFlag();
    }
  }
  udg_atempstring = I2S(R2I(ModuloReal(udg_time, 60)))!;
  if ((Trig_time_Func005C())) {
    udg_atempstring = "0" + udg_atempstring;
  }
  if ((Trig_time_Func006C())) {
    LeaderboardSetPlayerItemLabelBJ(
      Player(PLAYER_NEUTRAL_PASSIVE)!,
      GetLastCreatedLeaderboard()!,
      "|CFFED1C24Next: " +
        (I2S(R2I(udg_time / 60)) + (":" + (udg_atempstring + " switch"))),
    );
  } else {
    if (vampOn) {
      LeaderboardSetItemLabel(
        GetLastCreatedLeaderboard()!,
        LeaderboardGetPlayerIndex(
          GetLastCreatedLeaderboard()!,
          Player(PLAYER_NEUTRAL_PASSIVE)!,
        ),
        "|CFFED1C24Next: " + simpleformatTime(udg_time) + " vamp",
      );
    } else {
      LeaderboardSetItemLabel(
        GetLastCreatedLeaderboard()!,
        LeaderboardGetPlayerIndex(
          GetLastCreatedLeaderboard()!,
          Player(PLAYER_NEUTRAL_PASSIVE)!,
        ),
        "|CFFED1C24Next: " + simpleformatTime(udg_time),
      );
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_time: () => void;
}
InitTrig_time = (): void => {
  gg_trg_time = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(0)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(1)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(2)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(3)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(4)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(5)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(6)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(7)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(8)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(9)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(10)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(11)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(12)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(13)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(14)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(15)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(16)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(17)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(18)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(19)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(20)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(21)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(22)!, "-time", false);
  TriggerRegisterPlayerChatEvent(gg_trg_time, Player(23)!, "-time", false);
  TriggerAddCondition(gg_trg_time, Condition(Trig_time_Conditions));
  TriggerAddAction(gg_trg_time, Trig_time_Actions);
};
