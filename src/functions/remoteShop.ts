import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { UnitEx } from "handles/UnitEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { withGroup } from "util/withGroup";
import { addScriptHook, W3TS_HOOK } from "w3ts";

type Item = {
  name: string;
  cost: number;
  id: number;
  quick?: string;
  one?: boolean;
};

const items: Item[] = [];

const teamHasTeamItem = (item: Item, player: player) => {
  if (!item.one) return false;

  if (!ForceEx.wolves.hasPlayer(player)) return false;

  let alreadyHaveItem = false;

  withGroup((g) => {
    for (let i = 0; i < bj_MAX_PLAYERS && !alreadyHaveItem; i++) {
      const p = MapPlayerEx.fromIndex(i);
      if (!p?.isActiveHuman || !ForceEx.wolves.hasPlayer(p)) continue;
      g.enumUnitsOfPlayer(p, (f) => {
        if (alreadyHaveItem || f.hasItemOfType(item.id)) alreadyHaveItem = true;
        return false;
      });
    }
  });

  if (alreadyHaveItem) {
    if (player === GetLocalPlayer()) StartSound(gg_snd_Error);
    DisplayTimedTextToPlayer(
      player,
      0,
      0,
      15,
      `|cffed1c24Your team already has ${item.name}.`,
    );
    return true;
  }

  return false;
};

const BuySellItem__buyAction = () => {
  const parts = GetEventPlayerChatString()!.toLowerCase().split(" ");

  if ((parts[0] !== "-buy" && parts[0] !== "-b") || parts.length !== 2 || parts[1].length === 0) return;

  const p = GetTriggerPlayer()!;
  const u = (udg_practiceOn ? udg_unit2 : udg_unit)[GetPlayerId(p) + 1];
  if (!u) return;

  for (let i = 0; i < items.length; i++) {
    if (items[i].name.startsWith(parts[1])) {
      if (teamHasTeamItem(items[i], p)) return;

      const price = Math.round(Math.min(items[i].cost * 1.4, items[i].cost + 40));
      if (GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) >= price) {
        UnitAddItemById(u, items[i].id);
        AdjustPlayerStateSimpleBJ(p, PLAYER_STATE_RESOURCE_GOLD, -price);
      } else {
        if (p === GetLocalPlayer()) StartSound(gg_snd_Error);
        DisplayTimedTextToPlayer(p, 0, 0, 15, "|CFF00AEEFThat item is " + price.toFixed() + " gold.");
      }
      break;
    }
  }
};

const BuySellItem__sellAction = () => {
  const parts = GetEventPlayerChatString()!.toLowerCase().split(" ");

  if ((parts[0] !== "-sell" && parts[0] !== "-s") || parts.length !== 2 || parts[1].length === 0) return;

  const p = GetTriggerPlayer()!;
  const u = (udg_practiceOn ? udg_unit2 : udg_unit)[GetPlayerId(p) + 1];
  if (!u) return;

  const slot = S2I(parts[1]) - 1;
  const itm = UnitItemInSlot(u, slot);
  if (!itm) return;

  const itemId = GetItemTypeId(itm);
  for (let i = 0; i < items.length; i++) {
    if (itemId === items[i].id) {
      const worth = items[i].cost * Math.max(1, GetItemCharges(itm));
      AdjustPlayerStateSimpleBJ(p, PLAYER_STATE_RESOURCE_GOLD, Math.round(Math.max(worth * 0.57, worth * 0.8 - 40)));
      RemoveItem(itm);
      break;
    }
  }
};

const BuySellItem__sellAllAction = () => {
  const p = GetTriggerPlayer()!;
  const u = (udg_practiceOn ? udg_unit2 : udg_unit)[GetPlayerId(p) + 1];

  for (let i = 0; i < bj_MAX_INVENTORY; i++) {
    const itm = UnitItemInSlot(u, i);
    if (!itm) continue;
    const itemId = GetItemTypeId(itm);

    for (let n = 0; n < items.length; n++) {
      if (itemId === items[n].id) {
        const worth = items[n].cost * Math.max(1, GetItemCharges(itm));
        AdjustPlayerStateSimpleBJ(p, PLAYER_STATE_RESOURCE_GOLD, Math.round(Math.max(worth * 0.57, worth * 0.8 - 40)));
        RemoveItem(itm);
        break;
      }
    }
  }
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  let t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-b ", false);
  registerAnyPlayerChatEvent(t, "-buy ", false);
  TriggerAddAction(t, BuySellItem__buyAction);

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-s ", false);
  registerAnyPlayerChatEvent(t, "-sell ", false);
  TriggerAddAction(t, BuySellItem__sellAction);

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-sellall");
  TriggerAddAction(t, BuySellItem__sellAllAction);

  items.push(
    { name: "1c", cost: 160, id: FourCC("I005") },
    { name: "boots", cost: 80, id: FourCC("I009"), quick: "n00Q" },
    { name: "ball", cost: 20, id: FourCC("I006") }, // alias for crystal
    { name: "bril", cost: 70, id: FourCC("I003"), one: true },
    { name: "beam", cost: 80, id: FourCC("I000"), quick: "n00L" },
    { name: "bomber", cost: 55, id: FourCC("I002"), quick: "n00J" },
    { name: "c8", cost: 15, id: FourCC("I00B") },
    { name: "c16", cost: 35, id: FourCC("I008") },
    { name: "c55", cost: 160, id: FourCC("I005") },
    { name: "cloak", cost: 160, id: FourCC("I001") },
    { name: "crystal", cost: 20, id: FourCC("I006") }, // alias for ball
    { name: "drums", cost: 135, id: FourCC("I00U"), quick: "n00O", one: true },
    { name: "disease", cost: 100, id: FourCC("I010") },
    { name: "endur", cost: 80, id: FourCC("I00H"), quick: "n00N", one: true },
    { name: "forb", cost: 160, id: FourCC("I00W") }, // alias for orb
    { name: "gloves", cost: 80, id: FourCC("I004") },
    { name: "goblins", cost: 450, id: FourCC("I012") },
    { name: "golem", cost: 100, id: FourCC("I00A"), quick: "n00I" },
    { name: "hay", cost: 30, id: FourCC("I011"), quick: "n00M" },
    { name: "mana", cost: 35, id: FourCC("I00D") },
    { name: "neck", cost: 80, id: FourCC("I00I"), quick: "n00P" },
    { name: "orb", cost: 160, id: FourCC("I00W") }, // alias for forb
    { name: "r110", cost: 80, id: FourCC("I00M") },
    { name: "sheep", cost: 40, id: FourCC("I00G"), one: true },
    { name: "suppression", cost: 90, id: FourCC("I00V"), quick: "n00R" },
    { name: "scythe", cost: 80, id: FourCC("scyt") },
    { name: "sobi", cost: 40, id: FourCC("I00N") },
    { name: "speed", cost: 30, id: FourCC("I00F"), quick: "n00H" },
    { name: "str", cost: 25, id: FourCC("I007"), quick: "n00K" },
    { name: "velocity", cost: 80, id: FourCC("I00T") },
  );

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    t = CreateTrigger();
    const quick = item.quick;
    if (!quick) continue;
    TriggerRegisterCommandEvent(t, FourCC("AEbu"), UnitId2String(FourCC(quick))!);
    TriggerAddAction(t, () => {
      const u = UnitEx.fromEvent();
      if (!u || !u.isAlive() || u.owner.gold < item.cost * 1.4) return;
      if (teamHasTeamItem(item, GetOwningPlayer(u.handle))) return;
      if (u.isSelected(MapPlayerEx.fromLocal())) ForceUICancel();
      u.owner.gold -= Math.round(item.cost * 1.4);
      u.addItemById(item.id);
    });
  }
});
