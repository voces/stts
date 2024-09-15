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
  one?: boolean;
};

const items: Item[] = [];

const getSelectedInventoryUnit = (allowEmpty: boolean) => {
  const g = CreateGroup()!;
  const p = GetTriggerPlayer()!;
  GroupEnumUnitsSelected(
    g,
    p,
    Filter(() => {
      const u = UnitEx.fromFilter();
      return u && !u.isIllusion() && (u.inventorySize - (allowEmpty ? 0 : UnitInventoryCount(u.handle)) > 0) &&
        u.isAlly(MapPlayerEx.fromHandle(p));
    }),
  );
  const u = FirstOfGroup(g);
  DestroyGroup(g);
  return u || udg_unit[GetPlayerId(p) + 1];
};

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
      `                              |CFF00AEEFYour team already has ${item.name}`,
    );
    return true;
  }

  return false;
};

const BuySellItem__buyAction = () => {
  const parts = GetEventPlayerChatString()!.toLowerCase().split(" ");

  if ((parts[0] !== "-buy" && parts[0] !== "-b") || parts.length !== 2 || parts[1].length === 0) return;

  const u = getSelectedInventoryUnit(false);
  if (!u) return;

  const p = GetTriggerPlayer()!;

  for (let i = 0; i < items.length; i++) {
    if (items[i].name.startsWith(parts[1])) {
      if (teamHasTeamItem(items[i], p)) return;

      if (GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) >= items[i].cost) {
        UnitAddItemById(u, items[i].id);
        AdjustPlayerStateSimpleBJ(p, PLAYER_STATE_RESOURCE_GOLD, -items[i].cost);
      } else {
        if (p === GetLocalPlayer()) StartSound(gg_snd_Error);
        DisplayTimedTextToPlayer(
          p,
          0,
          0,
          15,
          "                              |CFF00AEEFThat item set is " + I2S(items[i].cost) + " gold.",
        );
      }
      break;
    }
  }
};

const BuySellItem__sellAction = () => {
  const parts = GetEventPlayerChatString()!.toLowerCase().split(" ");

  if ((parts[0] !== "-sell" && parts[0] !== "-s") || parts.length !== 2 || parts[1].length === 0) return;

  const u = getSelectedInventoryUnit(true);
  if (!u) return;

  const slot = S2I(parts[1]) - 1;
  const itm = UnitItemInSlot(u, slot);
  if (!itm) return;

  const itemId = GetItemTypeId(itm);
  for (let i = 0; i < items.length; i++) {
    if (itemId === items[i].id) {
      AdjustPlayerStateSimpleBJ(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD, R2I(I2R(items[i].cost) / 4.2));
      RemoveItem(itm);
      break;
    }
  }
};

const BuySellItem__sellAllAction = () => {
  const p = GetTriggerPlayer()!;
  const g = CreateGroup()!;
  GroupEnumUnitsSelected(
    g,
    p,
    Filter(() => !IsUnitIllusion(GetFilterUnit()!) && UnitInventoryCount(GetFilterUnit()!) > 0),
  )!;
  let u = FirstOfGroup(g);

  while (u) {
    for (let i = 0; i < bj_MAX_INVENTORY; i++) {
      const itm = UnitItemInSlot(u, i);
      if (!itm) continue;
      const itemId = GetItemTypeId(itm);

      for (let n = 0; n < items.length; n++) {
        if (itemId === items[n].id) {
          AdjustPlayerStateSimpleBJ(p, PLAYER_STATE_RESOURCE_GOLD, R2I(I2R(items[n].cost) / 4.2));
          RemoveItem(itm);
          break;
        }
      }
    }

    GroupRemoveUnit(g, u);
    u = FirstOfGroup(g);
  }

  DestroyGroup(g);
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
    { name: "1c", cost: 200, id: FourCC("I005") },
    { name: "boots", cost: 112, id: FourCC("I009") },
    { name: "ball", cost: 28, id: FourCC("I006") }, // alias for crystal
    { name: "bril", cost: 98, id: FourCC("I003"), one: true },
    { name: "beam", cost: 112, id: FourCC("I000") },
    { name: "bomber", cost: 75, id: FourCC("I002") },
    { name: "c8", cost: 21, id: FourCC("I00B") },
    { name: "c16", cost: 53, id: FourCC("I008") },
    { name: "c55", cost: 200, id: FourCC("I005") },
    { name: "club", cost: 56, id: FourCC("I00Z") },
    { name: "cloak", cost: 200, id: FourCC("I001") },
    { name: "crystal", cost: 28, id: FourCC("I006") }, // alias for ball
    { name: "drums", cost: 175, id: FourCC("I00U"), one: true },
    { name: "disease", cost: 140, id: FourCC("I010") },
    { name: "endur", cost: 112, id: FourCC("I00H"), one: true },
    { name: "forb", cost: 200, id: FourCC("I00W") }, // alias for orb
    { name: "gloves", cost: 112, id: FourCC("I004") },
    { name: "gem", cost: 56, id: FourCC("I00E") },
    { name: "goblins", cost: 390, id: FourCC("I012") },
    { name: "golem", cost: 140, id: FourCC("I00A") },
    { name: "hay", cost: 42, id: FourCC("I011") },
    { name: "kaleidoscope", cost: 112, id: FourCC("I00X") },
    { name: "mana", cost: 49, id: FourCC("I00D") },
    { name: "mastery", cost: 140, id: FourCC("I00Y") },
    { name: "neck", cost: 112, id: FourCC("I00I") },
    { name: "orb", cost: 200, id: FourCC("I00W") }, // alias for forb
    { name: "r110", cost: 112, id: FourCC("I00M") },
    { name: "sheep", cost: 56, id: FourCC("I00G") },
    { name: "suppression", cost: 140, id: FourCC("I00V") },
    { name: "scythe", cost: 112, id: FourCC("scyt") },
    { name: "scepter", cost: 140, id: FourCC("I00Y") },
    { name: "sobi", cost: 56, id: FourCC("I00N") },
    { name: "speed", cost: 42, id: FourCC("I00F") },
    { name: "str", cost: 42, id: FourCC("I007") },
    { name: "velocity", cost: 112, id: FourCC("I00T") },
  );
});
