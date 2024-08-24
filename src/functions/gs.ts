// Adapted from https://softwareengineering.stackexchange.com/q/291117

import { giveAllGold } from "jass/triggers/commands/g";
import { president } from "modes/president";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

// Sorts gsAmounts and gsPlayerIndices as one
const gsSort = () => {
  let swapAmount: number;
  let swapPlayerIndex: number;

  for (let i = 1; i < gsLength; i++) {
    if (i >= gsLength) break;
    swapAmount = gsAmounts[i];
    swapPlayerIndex = gsPlayerIndices[i];

    let n = i - 1;
    for (; n >= 0 && gsAmounts[n] > swapAmount; n--) {
      gsAmounts[n + 1] = gsAmounts[n];
      gsPlayerIndices[n + 1] = gsPlayerIndices[n];
      n = n - 1;
    }
    gsAmounts[n + 1] = swapAmount;
    gsPlayerIndices[n + 1] = swapPlayerIndex;
  }
};

// Fills gsDist; expects gsAmounts, and gsLength to be set
const gsDistribute = (initial: number): void => {
  let total = initial;
  let idx = 0;

  // Sorts gsAmounts increasing, bringing gsPlayerIndices with it
  gsSort();

  // First pass find total and count
  for (let i = 0; i < gsLength; i++) {
    idx = i;
    total = total + gsAmounts[i];
    if (i >= gsLength - 1 || total / (idx + 1) <= gsAmounts[idx + 1]) break;
  }

  const count = idx + 1;
  const avg = Math.floor(total / count);
  const remainder = ModuloInteger(total, count);

  // Figure out gsDist gsAmounts
  for (let i = 0; i < count; i++) {
    if (i < remainder) gsDist[i] = avg - gsAmounts[i] + 1;
    else gsDist[i] = avg - gsAmounts[i];
  }
};

export const gsDistributeGold = (fromPlayer: player, allGold: boolean): void => {
  const pId = GetPlayerId(fromPlayer);
  let isAlly: boolean;
  let isHere: boolean;
  let isHuman: boolean;
  let isWisp: boolean;
  const includeSelf = !allGold;
  gsLength = 0;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    isAlly = IsPlayerAlly(fromPlayer, Player(i)!);
    isHere = GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
      udg_AFK[i + 1] === AFK_PLAYING;
    isHuman = GetPlayerController(Player(i)!) === MAP_CONTROL_USER;
    isWisp = IsPlayerInForce(Player(i)!, udg_Spirit);
    if (isAlly && isHere && isHuman && (!isWisp || (i === pId && includeSelf)) && (includeSelf || i !== pId)) {
      gsPlayerIndices[gsLength] = i;
      if (i === pId) gsAmounts[gsLength] = 0;
      else gsAmounts[gsLength] = GetPlayerState(Player(i)!, PLAYER_STATE_RESOURCE_GOLD);
      gsDist[gsLength] = 0;
      gsLength = gsLength + 1;
    }
  }

  if (gsLength === 0) return;

  gsDistribute(GetPlayerState(fromPlayer, PLAYER_STATE_RESOURCE_GOLD));

  for (let i = 0; i < gsLength; i++) {
    if (gsPlayerIndices[i] !== pId && gsDist[i] > 0) {
      transferGold(fromPlayer, Player(gsPlayerIndices[i])!, gsDist[i], TRANSFER_DISPLAY_INVOLVED);
    }
  }
};

const Trig_gs_UnitActions = () => {
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
  TriggerAddAction(t, Trig_gs_UnitActions);
});
