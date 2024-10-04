import { MapPlayerEx } from "handles/MapPlayerEx";
import { updateIntermission } from "ui/api";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const hasPermission = () => {
  const player = GetTriggerPlayer();
  return player === udg_Custom || player === udg_originalCustom;
};

const Trig_transfer_Conditions = () => {
  const chatNumber = S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!);
  return hasPermission() && chatNumber > 0 && chatNumber < 25;
};

const canTakeHost = () => {
  const playerState = GetPlayerSlotState(ConvertedPlayer(udg_transfer)!);
  const playerController = GetPlayerController(ConvertedPlayer(udg_transfer)!);

  return (
    playerState === PLAYER_SLOT_STATE_PLAYING &&
    playerController === MAP_CONTROL_USER &&
    !pub[udg_transfer - 1] &&
    udg_AFK[udg_transfer] < 3
  );
};

export const transferHostTo = (index: number) => {
  const oldHost = udg_Custom;
  udg_transfer = index;
  if (canTakeHost()) {
    udg_Custom = ConvertedPlayer(udg_transfer)!;
    if (udg_Teams === TEAMS_PICK) TriggerExecute(gg_trg_setupPick);
    udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
    udg_atempplayer2 = GetForceOfPlayer(ConvertedPlayer(udg_transfer)!)!;
    DisplayTextToForce(
      udg_atempplayer,
      "|CFFFFCC00Transfered game to " + udg_colorString[udg_transfer] + GetPlayerName(ConvertedPlayer(udg_transfer)!) +
        "|CFFFFCC00.",
    );
    DisplayTextToForce(udg_atempplayer2, "|CFFFFCC00You now have control of the game.");
    DestroyForce(udg_atempplayer);
    DestroyForce(udg_atempplayer2);
    LeaderboardSetPlayerItemLabelBJ(oldHost, GetLastCreatedLeaderboard()!, MapPlayerEx.fromHandle(oldHost).coloredName);
    LeaderboardSetPlayerItemLabelBJ(udg_Custom, GetLastCreatedLeaderboard()!, "|CFFFFFFFF$" + MapPlayerEx.host);
    transferOwnershipOfHostFarm();
    updateIntermission();
  } else {
    udg_transfer = 0;
  }
};

const Trig_transfer_Actions = () => {
  transferHostTo(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!));
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
