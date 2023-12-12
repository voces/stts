//===========================================================================
// Trigger: Say Q Death
//===========================================================================
const Trig_Say_Q_Death_Func001Func001C = () => {
  if (
    (!(udg_QDeathTime[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!)] <
      9999))
  ) {
    return false;
  }
  return true;
};

const Trig_Say_Q_Death_Func001C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!) >= 1))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!) <= 24))) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  return true;
};

const Trig_Say_Q_Death_Actions = () => {
  if ((Trig_Say_Q_Death_Func001C())) {
    if ((Trig_Say_Q_Death_Func001Func001C())) {
      udg_Force = GetForceOfPlayer(GetTriggerPlayer()!)!;
      DisplayTextToForce(
        udg_Force,
        ("The quickest death for " +
          (udg_colorString[
            S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!)
          ] +
            GetPlayerName(
              ConvertedPlayer(
                S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!),
              )!,
            ))) +
          ("|r is a time of " +
            R2S(
              udg_QDeathTime[
                S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!)
              ],
            )),
      );
      DestroyForce(udg_Force);
    } else {
      DisplayTextToForce(
        udg_Force,
        ("The quickest death for " +
          (udg_colorString[
            S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!)
          ] +
            GetPlayerName(
              ConvertedPlayer(
                S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!),
              )!,
            ))) + "|r is N/A",
      );
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Say_Q_Death: () => void;
}
InitTrig_Say_Q_Death = () => {
  gg_trg_Say_Q_Death = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(0)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(1)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(2)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(3)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(4)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(5)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(6)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(7)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(8)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_Say_Q_Death, Player(9)!, "-qd ", false);
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(10)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(11)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(12)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(13)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(14)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(15)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(16)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(17)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(18)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(19)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(20)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(21)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(22)!,
    "-qd ",
    false,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_Say_Q_Death,
    Player(23)!,
    "-qd ",
    false,
  );
  TriggerAddAction(gg_trg_Say_Q_Death, Trig_Say_Q_Death_Actions);
};
