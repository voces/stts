//===========================================================================
// Trigger: giveGold
//===========================================================================
const Trig_giveGold_Func007C = () => {
  if (
    (udg_AFK[S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!)] ===
      AFK_PLAYING)
  ) {
    return true;
  }
  if (
    (udg_AFK[S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!)] ===
      AFK_AFK_DURING_ROUND)
  ) {
    return true;
  }
  return false;
};

const Trig_giveGold_Conditions = () => {
  if (
    (!(GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) > 0))
  ) {
    return false;
  }
  if ((!(udg_isAnon === false))) {
    return false;
  }
  if ((!(udg_Teams === TEAMS_LOCK_IE_PLAYING))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!) < 25))) {
    return false;
  }
  if ((!Trig_giveGold_Func007C())) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 14)!) > 0))) {
    return false;
  }
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 14)!) <= 1000000000))
  ) {
    return false;
  }
  if ((!(udg_giveGold === true))) {
    return false;
  }
  return true;
};

const Trig_giveGold_Func003Func004C = () => {
  if (
    (!(GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) <
      udg_atempint2))
  ) {
    return false;
  }
  return true;
};

const Trig_giveGold_Func003Func005C = () => {
  if ((!(udg_atempint2 > 0))) {
    return false;
  }
  return true;
};

const Trig_giveGold_Func003C = () => {
  if (
    (!(IsPlayerAlly(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!))!,
      GetTriggerPlayer()!,
    ) === true))
  ) {
    return false;
  }
  if (
    (!(S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!) !==
      GetConvertedPlayerId(GetTriggerPlayer()!)))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  return true;
};

const Trig_giveGold_Actions = () => {
  if ((Trig_giveGold_Func003C())) {
    udg_giveGold = false;
    udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!);
    udg_atempint2 = S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 14)!);
    if ((Trig_giveGold_Func003Func004C())) {
      udg_atempint2 = GetPlayerState(
        GetTriggerPlayer()!,
        PLAYER_STATE_RESOURCE_GOLD,
      );
    }
    if ((Trig_giveGold_Func003Func005C())) {
      transferGold(
        GetTriggerPlayer()!,
        ConvertedPlayer(udg_atempint)!,
        udg_atempint2,
        TRANSFER_DISPLAY_INVOLVED,
      );
      udg_giveGold = true;
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_giveGold: () => void;
}
InitTrig_giveGold = () => {
  gg_trg_giveGold = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(0)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(1)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(2)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(3)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(4)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(5)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(6)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(7)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(8)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(9)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(10)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(11)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(12)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(13)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(14)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(15)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(16)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(17)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(18)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(19)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(20)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(21)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(22)!, "-", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveGold, Player(23)!, "-", false);
  TriggerAddCondition(gg_trg_giveGold, Condition(Trig_giveGold_Conditions));
  TriggerAddAction(gg_trg_giveGold, Trig_giveGold_Actions);
};
