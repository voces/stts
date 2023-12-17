import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_transfer_Func001C = () => {
  if ((GetTriggerPlayer() === udg_Custom)) {
    return true;
  }
  if ((GetTriggerPlayer() === udg_originalCustom)) {
    return true;
  }
  return false;
};

const Trig_transfer_Conditions = () => {
  if ((!Trig_transfer_Func001C())) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!) < 25))) {
    return false;
  }
  return true;
};

const Trig_transfer_Func003Func004C = () => {
  if ((!(udg_Teams === TEAMS_PICK))) {
    return false;
  }
  return true;
};

const Trig_transfer_Func003C = () => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(udg_transfer)!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(udg_transfer)!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(GetPlayerController(ConvertedPlayer(udg_transfer)!) ===
      MAP_CONTROL_USER))
  ) {
    return false;
  }
  if ((!(udg_AFK[udg_transfer] < 3))) {
    return false;
  }
  return true;
};

const Trig_transfer_Actions = () => {
  udg_transfer = S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!);
  if ((Trig_transfer_Func003C())) {
    udg_anactualtempplayer = udg_Custom;
    udg_Custom = ConvertedPlayer(udg_transfer)!;
    if ((Trig_transfer_Func003Func004C())) {
      TriggerExecute(gg_trg_setupPick);
    }
    udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
    udg_atempplayer2 = GetForceOfPlayer(ConvertedPlayer(udg_transfer)!)!;
    DisplayTextToForce(
      udg_atempplayer,
      "                              |CFFFFCC00Transfered game to " +
        (udg_colorString[udg_transfer] +
          (GetPlayerName(ConvertedPlayer(udg_transfer)!) + "|CFFFFCC00.")),
    );
    DisplayTextToForce(
      udg_atempplayer2,
      "                              |CFFFFCC00You now have control of the game.",
    );
    DestroyForce(udg_atempplayer);
    DestroyForce(udg_atempplayer2);
    LeaderboardSetPlayerItemLabelBJ(
      udg_anactualtempplayer,
      GetLastCreatedLeaderboard()!,
      udg_colorString[GetConvertedPlayerId(udg_anactualtempplayer)] +
        GetPlayerName(udg_anactualtempplayer),
    );
    LeaderboardSetPlayerItemLabelBJ(
      udg_Custom,
      GetLastCreatedLeaderboard()!,
      "|CFFFFFFFF$" +
        (udg_colorString[GetConvertedPlayerId(udg_Custom)] +
          GetPlayerName(udg_Custom)),
    );
    transferOwnershipOfHostFarm();
  } else {
    udg_transfer = 0;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_transfer: () => void;
}
InitTrig_transfer = () => {
  gg_trg_transfer = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_transfer, "-transfer", false);
  TriggerAddCondition(gg_trg_transfer, Condition(Trig_transfer_Conditions));
  TriggerAddAction(gg_trg_transfer, Trig_transfer_Actions);
};
