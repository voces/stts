import { addScriptHook, W3TS_HOOK } from "w3ts";

const BuySellItem__itemShorthand: string[] = [];
const BuySellItem__itemCost: number[] = [];
const BuySellItem__itemCode: number[] = [];
let BuySellItem__itemIndex = 0;

const BuySellItem__isRealWolf = () => {
  return GetUnitTypeId(GetFilterUnit()!) === FourCC("EC03") &&
    IsUnitIllusionBJ(GetFilterUnit()!) === false;
};

const BuySellItem__buyAction = () => {
  let i = 0;

  Split(GetEventPlayerChatString()!, " ", false);
  if (
    (myArg[0] !== "-buy" && myArg[0] !== "-b") || myArgCount === 1 ||
    StringLength(myArg[1]) <= 0
  ) {
    return;
  }

  const g = GetUnitsOfPlayerMatching(
    GetTriggerPlayer()!,
    Condition(BuySellItem__isRealWolf),
  )!;
  const u = FirstOfGroup(g);
  if (u == null) return DestroyGroup(g);

  while (true) {
    if (i === BuySellItem__itemIndex) break;

    if (SubString(BuySellItem__itemShorthand[i], 0, StringLength(myArg[1])) === myArg[1]) {
      if (GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) >= BuySellItem__itemCost[i]) {
        UnitAddItemByIdSwapped(BuySellItem__itemCode[i], u);
        AdjustPlayerStateSimpleBJ(
          GetTriggerPlayer()!,
          PLAYER_STATE_RESOURCE_GOLD,
          -BuySellItem__itemCost[i],
        );
      } else {
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              |CFF00AEEFThat item set is " +
            I2S(BuySellItem__itemCost[i]) + " gold.",
        );
      }
      break;
    }

    i = i + 1;
  }

  DestroyGroup(g);
};

const BuySellItem__sellAction = () => {
  let i = 0;

  Split(GetEventPlayerChatString()!, " ", false);
  if (
    (myArg[0] !== "-sell" && myArg[0] !== "-s") || myArgCount === 1 ||
    StringLength(myArg[1]) <= 0
  ) return;

  const g = GetUnitsOfPlayerMatching(
    GetTriggerPlayer()!,
    Condition(BuySellItem__isRealWolf),
  )!;
  const u = FirstOfGroup(g);

  if (u == null) return DestroyGroup(g);

  const slot = S2I(myArg[1]) - 1;
  const itm = UnitItemInSlot(u, slot);

  if (itm == null) return DestroyGroup(g);

  const itemId = GetItemTypeId(itm);
  while (true) {
    if (i === BuySellItem__itemIndex) break;

    if (itemId === BuySellItem__itemCode[i]) {
      AdjustPlayerStateSimpleBJ(
        GetTriggerPlayer()!,
        PLAYER_STATE_RESOURCE_GOLD,
        R2I(I2R(BuySellItem__itemCost[i]) / 4.2),
      );
      RemoveItem(itm);
      break;
    }

    i = i + 1;
  }

  DestroyGroup(g);
};

const BuySellItem__sellAllAction = () => {
  const p = GetTriggerPlayer()!;
  const g = GetUnitsOfPlayerMatching(p, Condition(BuySellItem__isRealWolf))!;
  let u = FirstOfGroup(g);
  let i: number;
  let n: number;
  let itm: item | undefined;
  let itemId: number;

  while (true) {
    if (u == null) break;

    i = 0;
    while (true) {
      itm = UnitItemInSlot(u, i);
      if (itm != null) {
        itemId = GetItemTypeId(itm);
        n = 0;
        while (true) {
          if (itemId === BuySellItem__itemCode[n]) {
            AdjustPlayerStateSimpleBJ(
              p,
              PLAYER_STATE_RESOURCE_GOLD,
              R2I(I2R(BuySellItem__itemCost[n]) / 4.2),
            );
            RemoveItem(itm);
            break;
          }

          n = n + 1;
          if (n === BuySellItem__itemIndex) break;
        }
      }

      i = i + 1;
      if (i === 6) break;
    }

    GroupRemoveUnit(g, u);
    u = FirstOfGroup(g);
  }
};

const registerItem = (
  shorthand: string,
  cost: number,
  passedCode: number,
): void => {
  BuySellItem__itemShorthand[BuySellItem__itemIndex] = shorthand;
  BuySellItem__itemCost[BuySellItem__itemIndex] = cost;
  BuySellItem__itemCode[BuySellItem__itemIndex] = passedCode;
  BuySellItem__itemIndex = BuySellItem__itemIndex + 1;
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  let t = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(t, "-b", false);
  TriggerAddAction(t, BuySellItem__buyAction);

  t = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(t, "-s", false);
  TriggerAddAction(t, BuySellItem__sellAction);

  t = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(t, "-sellall", true);
  TriggerAddAction(t, BuySellItem__sellAllAction);

  registerItem("1c", 200, FourCC("I005"));
  registerItem("boots", 112, FourCC("I009"));
  registerItem("bril", 98, FourCC("I003"));
  registerItem("beam", 112, FourCC("I000"));
  registerItem("bomber", 75, FourCC("I002"));
  registerItem("c8", 21, FourCC("I00B"));
  registerItem("c16", 53, FourCC("I008"));
  registerItem("c55", 200, FourCC("I005"));
  registerItem("club", 56, FourCC("I00Z"));
  registerItem("cloak", 200, FourCC("I001"));
  registerItem("crystal", 28, FourCC("I006"));
  registerItem("drums", 175, FourCC("I00U"));
  registerItem("endur", 112, FourCC("I00H"));
  // call registerItem("forb", 200, 'I00W')
  registerItem("gloves", 112, FourCC("I004"));
  registerItem("gem", 70, FourCC("I00E"));
  registerItem("golem", 140, FourCC("I00A"));
  registerItem("kaleidoscope", 112, FourCC("I00X"));
  registerItem("mana", 49, FourCC("I00D"));
  registerItem("neck", 112, FourCC("I00I"));
  registerItem("r110", 112, FourCC("I00M"));
  registerItem("sheep", 56, FourCC("I00G"));
  registerItem("suppression", 175, FourCC("I00V"));
  registerItem("scythe", 112, FourCC("scyt"));
  registerItem("sobi", 56, FourCC("I00N"));
  registerItem("speed", 42, FourCC("I00F"));
  registerItem("str", 42, FourCC("I007"));
  registerItem("velocity", 112, FourCC("I00T"));
});
