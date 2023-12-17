import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_control_Conditions = () => {
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
    (!(udg_AFK[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)] ===
      AFK_PLAYING))
  ) {
    return false;
  }
  if ((!(udg_shareOn === true))) {
    return false;
  }
  if ((!(udg_Teams === TEAMS_LOCK_IE_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_control_Func003C = () => {
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

const Trig_control_Actions = () => {
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

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_control: () => void;
}
InitTrig_control = () => {
  gg_trg_control = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_control, "-c ", false);
  TriggerAddCondition(gg_trg_control, Condition(Trig_control_Conditions));
  TriggerAddAction(gg_trg_control, Trig_control_Actions);
};
