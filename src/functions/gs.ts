// Adapted from https://softwareengineering.stackexchange.com/q/291117

import { giveAllGold } from "jass/triggers/commands/g";
import { president } from "settings/settings";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

type GSPlayer = {
  player: number;
  gold: number;
  dist: number;
};

// Fills gsDist; expects gsAmounts, and gsLength to be set
const gsDistribute = (available: number, players: GSPlayer[]): void => {
  let total = available;
  let idx = 0;

  // Sort players by increasing gold amount
  players.sort((a, b) => a.gold - b.gold);

  // First pass to find how many players to distribute to and the total
  for (; idx < players.length; idx++) {
    total += players[idx].gold;
    // Break when the average would exceed the next player's gold (i.e., they wouldn't get anything)
    if (idx >= players.length - 1 || total / (idx + 1) <= players[idx + 1].gold) break;
  }

  const count = idx + 1;
  const avg = Math.floor(total / count);
  const remainder = total % count;

  // Second pass to set the `dist` for each player
  for (let i = 0; i < count; i++) players[i].dist = avg - players[i].gold + (i < remainder ? 1 : 0);
};

export const gsDistributeGold = (fromPlayer: player, allGold: boolean): void => {
  const pId = GetPlayerId(fromPlayer);
  const includeSelf = !allGold;
  const players: GSPlayer[] = [];
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const isAlly = IsPlayerAlly(fromPlayer, Player(i)!);
    const isHere = GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING && udg_AFK[i + 1] === AFK_PLAYING;
    // const isHuman = GetPlayerController(Player(i)!) === MAP_CONTROL_USER;
    const isHuman = true;
    const isWisp = IsPlayerInForce(Player(i)!, udg_Spirit);
    if (isAlly && isHere && isHuman && (!isWisp || (i === pId && includeSelf)) && (includeSelf || i !== pId)) {
      players.push({
        player: i,
        gold: i === pId ? 0 : GetPlayerState(Player(i)!, PLAYER_STATE_RESOURCE_GOLD),
        dist: 0,
      });
    }
  }

  if (players.length === 0) return;

  gsDistribute(GetPlayerState(fromPlayer, PLAYER_STATE_RESOURCE_GOLD), players);

  for (const { player, dist } of players) transferGold(fromPlayer, Player(player)!, dist, TRANSFER_DISPLAY_INVOLVED);
};

const wispGAbility = () => {
  const p = GetOwningPlayer(GetTriggerUnit()!);
  if (
    udg_giveGold && GetSpellAbilityId() === FourCC("A020") &&
    GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) > 0 &&
    !(IsPlayerInForce(p, udg_Wolf))
  ) {
    if (president.enabled) giveAllGold(p);
    else gsDistributeGold(p, true);
  }
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_gs = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_gs, "-gs");
  registerAnyPlayerChatEvent(gg_trg_gs, "-gsa");
  TriggerAddCondition(
    gg_trg_gs,
    Condition(() =>
      GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) > 0 &&
      udg_giveGold
    ),
  );
  TriggerAddAction(gg_trg_gs, () => gsDistributeGold(GetTriggerPlayer()!, GetEventPlayerChatString() === "-gsa"));

  const t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_SPELL_CAST);
  TriggerAddAction(t, wispGAbility);
});
