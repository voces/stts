import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_giveAllGold_Conditions = () => {
  if ((!(udg_isAnon === false))) {
    return false;
  }
  if ((!(udg_Teams === TEAMS_LOCK_IE_PLAYING))) {
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

const Trig_giveAllGold_Func002Func008C = () => {
  if (
    (udg_AFK[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)] ===
      AFK_PLAYING)
  ) {
    return true;
  }
  if (
    (udg_AFK[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 5)!)] ===
      AFK_AFK_DURING_ROUND)
  ) {
    return true;
  }
  return false;
};

const Trig_giveAllGold_Func002C = () => {
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

const Trig_giveAllGold_Actions = () => {
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

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_giveAllGold: () => void;
}
InitTrig_giveAllGold = () => {
  gg_trg_giveAllGold = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_giveAllGold, "-g", false);
  TriggerAddCondition(
    gg_trg_giveAllGold,
    Condition(Trig_giveAllGold_Conditions),
  );
  TriggerAddAction(gg_trg_giveAllGold, Trig_giveAllGold_Actions);
};
