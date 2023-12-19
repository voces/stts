import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_giveAllGold_Actions = () => {
  const parts = GetEventPlayerChatString()!.split(" ");
  const numParts = parts.slice(1).map((p) => S2I(p));

  if (parts[0] !== "-g" || numParts.length === 0 || (numParts[0] < 1 && numParts[0] > bj_MAX_PLAYERS)) return;
  const target = MapPlayerEx.fromIndex(numParts[0] - 1);
  if (!target || !target.isActive) return;

  const source = MapPlayerEx.fromEvent()!;
  if (!target.isPlayerAlly(source)) return;

  const amount = numParts.length > 1 ? Math.min(source.gold, numParts[1]) : source.gold;

  udg_giveGold = false;
  transferGold(source.handle, target.handle, amount, TRANSFER_DISPLAY_INVOLVED);
  udg_giveGold = true;
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
    Condition(() =>
      !udg_isAnon && udg_Teams === TEAMS_LOCK_IE_PLAYING && udg_giveGold &&
      GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) > 0
    ),
  );
  TriggerAddAction(gg_trg_giveAllGold, Trig_giveAllGold_Actions);
};
