//===========================================================================
// Trigger: control
//===========================================================================
const Trig_control_Conditions = (): boolean => {
  if ((!(udg_isAnon === false))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!) < 25))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!) > 0))) {
    return false;
  }
  if (
    (!(IsPlayerAlly(
      GetTriggerPlayer()!,
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
    ) === true))
  ) {
    return false;
  }
  if (
    (!(IsPlayerAlly(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
      GetTriggerPlayer()!,
    ) === true))
  ) {
    return false;
  }
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!) !==
      GetConvertedPlayerId(GetTriggerPlayer()!)))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)] === 0))
  ) {
    return false;
  }
  if ((!(udg_shareOn === true))) {
    return false;
  }
  if ((!(udg_Teams === 2))) {
    return false;
  }
  return true;
};

const Trig_control_Func003C = (): boolean => {
  if (
    (!(GetPlayerAlliance(
      GetTriggerPlayer()!,
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
      ALLIANCE_SHARED_VISION,
    ) === true))
  ) {
    return false;
  }
  if (
    (!(GetPlayerAlliance(
      GetTriggerPlayer()!,
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
      ALLIANCE_SHARED_ADVANCED_CONTROL,
    ) === false))
  ) {
    return false;
  }
  return true;
};

const Trig_control_Actions = (): void => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  if ((Trig_control_Func003C())) {
    DisplayTextToForce(
      udg_atempplayer,
      "                              |CFFFFCC00Gave control to " +
        (udg_colorString[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)] +
          (GetPlayerName(
            ConvertedPlayer(
              S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!),
            )!,
          ) + "|CFFFFCC00.")),
    );
    SetPlayerAllianceStateBJ(
      GetTriggerPlayer()!,
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
      bj_ALLIANCE_ALLIED_ADVUNITS,
    );
  } else {
    DisplayTextToForce(
      udg_atempplayer,
      "                              |CFFFFCC00Took control from " +
        (udg_colorString[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)] +
          (GetPlayerName(
            ConvertedPlayer(
              S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!),
            )!,
          ) + "|CFFFFCC00.")),
    );
    SetPlayerAllianceStateBJ(
      GetTriggerPlayer()!,
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
      bj_ALLIANCE_UNALLIED,
    );
    SetPlayerAllianceStateBJ(
      GetTriggerPlayer()!,
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
      bj_ALLIANCE_ALLIED_VISION,
    );
  }
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_control: () => void;
}
InitTrig_control = (): void => {
  gg_trg_control = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(0)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(1)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(2)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(3)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(4)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(5)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(6)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(7)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(8)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(9)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(10)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(11)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(12)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(13)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(14)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(15)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(16)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(17)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(18)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(19)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(20)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(21)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(22)!, "-c ", false);
  TriggerRegisterPlayerChatEvent(gg_trg_control, Player(23)!, "-c ", false);
  TriggerAddCondition(gg_trg_control, Condition(Trig_control_Conditions));
  TriggerAddAction(gg_trg_control, Trig_control_Actions);
};
