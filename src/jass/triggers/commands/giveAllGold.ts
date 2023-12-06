//===========================================================================
// Trigger: giveAllGold
//===========================================================================
const Trig_giveAllGold_Conditions = (): boolean => {
  if ((!(udg_isAnon === false))) {
    return false;
  }
  if ((!(udg_Teams === 2))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!) < 25))) {
    return false;
  }
  if ((!(udg_giveGold === true))) {
    return false;
  }
  if (
    (!(GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) > 0))
  ) {
    return false;
  }
  return true;
};

const Trig_giveAllGold_Func002Func008C = (): boolean => {
  if ((udg_AFK[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)] === 0)) {
    return true;
  }
  if ((udg_AFK[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)] === 4)) {
    return true;
  }
  return false;
};

const Trig_giveAllGold_Func002C = (): boolean => {
  if (
    (!(IsPlayerAlly(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
      GetTriggerPlayer()!,
    ) === true))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!Trig_giveAllGold_Func002Func008C())) {
    return false;
  }
  if (
    (!(GetConvertedPlayerId(GetTriggerPlayer()!) !==
      S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)))
  ) {
    return false;
  }
  return true;
};

const Trig_giveAllGold_Actions = (): void => {
  if ((Trig_giveAllGold_Func002C())) {
    udg_giveGold = false;
    udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!);
    transferGold(
      GetTriggerPlayer()!,
      ConvertedPlayer(udg_atempint)!,
      GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD),
      TRANSFER_DISPLAY_INVOLVED,
    );
    udg_giveGold = true;
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_giveAllGold: () => void;
}
InitTrig_giveAllGold = (): void => {
  gg_trg_giveAllGold = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(0)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(1)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(2)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(3)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(4)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(5)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(6)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(7)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(8)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(9)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(10)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(11)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(12)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(13)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(14)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(15)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(16)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(17)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(18)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(19)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(20)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(21)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(22)!, "-g", false);
  TriggerRegisterPlayerChatEvent(gg_trg_giveAllGold, Player(23)!, "-g", false);
  TriggerAddCondition(
    gg_trg_giveAllGold,
    Condition(Trig_giveAllGold_Conditions),
  );
  TriggerAddAction(gg_trg_giveAllGold, Trig_giveAllGold_Actions);
};
