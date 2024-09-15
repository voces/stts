import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

let targetPlayer: player;
let transferAmount: number = 0;

const notAfk = (targetCid: number) => udg_AFK[targetCid] === AFK_PLAYING || udg_AFK[targetCid] === AFK_AFK_DURING_ROUND;

const Trig_giveGold_Conditions = () => {
  const targetCid = S2I(SubStringBJ(GetEventPlayerChatString()!, 2, 3)!);
  if (targetCid <= 0 || targetCid > bj_MAX_PLAYERS) return false;
  targetPlayer = ConvertedPlayer(targetCid)!;

  transferAmount = S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 14)!);

  return GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) > 0 &&
    !udg_isAnon &&
    udg_Teams === TEAMS_LOCK_IE_PLAYING &&
    notAfk(targetCid) &&
    transferAmount > 0 &&
    transferAmount <= 1000000000 &&
    udg_giveGold;
};

const validReceiver = () => (
  IsPlayerAlly(targetPlayer!, GetTriggerPlayer()!) &&
  targetPlayer !== GetTriggerPlayer() &&
  GetPlayerSlotState(targetPlayer!) === PLAYER_SLOT_STATE_PLAYING
);

const Trig_giveGold_Actions = () => {
  if (!validReceiver()) return;

  udg_giveGold = false;
  transferGold(GetTriggerPlayer()!, targetPlayer, transferAmount, TRANSFER_DISPLAY_INVOLVED);
  udg_giveGold = true;
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_giveGold: () => void;
}
InitTrig_giveGold = () => {
  gg_trg_giveGold = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_giveGold, "-", false);
  TriggerAddCondition(gg_trg_giveGold, Condition(Trig_giveGold_Conditions));
  TriggerAddAction(gg_trg_giveGold, Trig_giveGold_Actions);
};
