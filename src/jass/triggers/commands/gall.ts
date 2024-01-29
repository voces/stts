import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_gall_Actions = () => {
  const gold = GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD);
  if (gold === 0) return;

  // Figure out how many players to distribute it to
  let count = 0;
  const p = GetTriggerPlayer()!;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p2 = Player(i)!;
    if (
      p !== p2 && IsPlayerAlly(p, p2) && GetPlayerSlotState(p2) === PLAYER_SLOT_STATE_PLAYING &&
      GetPlayerController(p2) === MAP_CONTROL_USER
    ) count++;
  }
  if (count === 0) return;

  const common = Math.floor(gold / count);
  let remainder = gold - common * count;

  // Distribute it
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p2 = Player(i)!;
    if (
      p !== p2 && IsPlayerAlly(p, p2) && GetPlayerSlotState(p2) === PLAYER_SLOT_STATE_PLAYING &&
      GetPlayerController(p2) === MAP_CONTROL_USER
    ) {
      transferGold(p, p2, common + (remainder > 0 ? 1 : 0), TRANSFER_DISPLAY_INVOLVED);
      if (remainder > 0) remainder--;
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_gall: () => void;
}
InitTrig_gall = () => {
  gg_trg_gall = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_gall, "-g all");
  TriggerAddAction(gg_trg_gall, Trig_gall_Actions);
};
