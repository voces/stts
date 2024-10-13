import { GroupEx } from "handles/GroupEx";
import { forEachPlayer } from "util/forEachPlayer";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { spawns } from "./spawns";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { formatList } from "util/formatList";
import { terrain } from "./settings";
import { terrainUpdatedViaCommand } from "ui/hooks";

export type Terrain = {
  index: number;
  name: "Classic" | "Glory Hills" | "Experimental" | "Tiny" | "Compact";
  minimap: string;
  cameraBounds: rect;
  spawnType: "playerColor" | "team";
  wisp: rect;
  wolf: rect;
  runes: {
    invis: rect;
    speed: rect;
    omniscience: rect;
    mana: rect;
  };
  spawns: rect[];
  spawnBounds: rect;
  shops: [location: rect, type: number][];
  guideFarms: { x: number; y: number }[];
};

export const terrains: Terrain[] = [];

const SHOP_A = FourCC("nC12");
const SHOP_A_ROTATED = FourCC("n006");
const SHOP_A_INLINE = FourCC("n00C");
const SHOP_B = FourCC("n001");
const SHOP_B_ROTATED = FourCC("n007");
const SHOP_B_INLINE = FourCC("n00D");
const SHOP_C = FourCC("n00E");
const SHOP_C_ROTATED = FourCC("n008");
const SHOP_C_INLINE = FourCC("n005");

export const setTerrain = (terrainIndex: number, notify = false): void => {
  const g = GroupEx.create().enumUnitsInRect(terrain.wolf, (u) => u.typeId === hostFarmType);
  Object.assign(terrain, terrains[terrainIndex]);

  SetCameraBoundsToRect(terrain.cameraBounds);
  BlzChangeMinimapTerrainTex(terrain.minimap);
  PanCameraToTimed(GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf), 0);
  for (let i = 0; i < terrain.spawns.length; i++) {
    udg_masterStartLocation[i + 1] = udg_startLocation[i + 1] = terrain.spawns[i];
    const p = Player(i);
    if (p) spawns.set(p, { x: GetRectCenterX(terrain.spawns[i]), y: GetRectCenterY(terrain.spawns[i]) });
  }

  if (!notify) displayTimedTextToAll(`Terrain set to |CFFED1C24${terrain.name}|r.`);

  g.forEach((u) => u.setPosition(GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf)));
  g.destroy();
};

const getIndex = () => {
  const parts = GetEventPlayerChatString()!.split(" ");
  if (parts.length < 2) return (terrain.index + 1) % terrains.length;
  const input = parts[1].toLowerCase();

  for (let i = 0; i < terrains.length; i++) if (terrains[i].name.toLowerCase().startsWith(input)) return i;

  // Handles natives
  if (string.match(input, "^%-?%d+$")[0] !== undefined) {
    const index = parseInt(input);
    if (index === 0) return;
    return (((index < 0 ? index : index - 1) % terrains.length) + terrains.length) % terrains.length;
  }

  DisplayTimedTextToPlayer(
    GetTriggerPlayer()!,
    0,
    0,
    5,
    `Did not find matching terrain. Terrain names are: ${formatList(terrains.map((t) => `|CFFED1C24${t.name}|r`))}.`,
  );
};

const initTrigger = () => {
  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-terrain", false);
  TriggerAddCondition(t, Condition(() => GetTriggerPlayer() === udg_Custom && !udg_gameStarted));
  TriggerAddAction(t, () => {
    const index = getIndex();
    if (typeof index !== "number") return;
    setTerrain(index);
    terrainUpdatedViaCommand();
  });
};

const initTerrains = () => {
  terrains.push({
    index: terrains.length,
    name: "Classic",
    minimap: "war3mapImported\\classic.blp",
    cameraBounds: gg_rct_Revo_Camera_Bounds,
    spawnType: "playerColor",
    wisp: gg_rct_Fence_Zone,
    wolf: gg_rct_Shepard_Respawn,
    runes: {
      invis: gg_rct_Rune_of_Invis,
      speed: gg_rct_Rune_of_Speed,
      omniscience: gg_rct_Rune_of_Omniscience,
      mana: gg_rct_Rune_of_Mana,
    },
    spawns: [
      gg_rct_Red_Start,
      gg_rct_Blue_Start,
      gg_rct_Teal_Start,
      gg_rct_Purple_Start,
      gg_rct_Yellow_Start,
      gg_rct_Orange_Start,
      gg_rct_Green_Start,
      gg_rct_Pink_Start,
      gg_rct_grey_start,
      gg_rct_lb_start,
      gg_rct_dg_start,
      gg_rct_brown_start,
      gg_rct_Maroon_Start,
      gg_rct_Navy_Start,
      gg_rct_Turquoise_Start,
      gg_rct_Violet_Start,
      gg_rct_Wheat_Start,
      gg_rct_Peach_Start,
      gg_rct_Mint_Start,
      gg_rct_Lavender_Start,
      gg_rct_Coal_Start,
      gg_rct_Snow_Start,
      gg_rct_Emerald_Start,
      gg_rct_Peanut_Start,
    ],
    spawnBounds: GetEntireMapRect()!,
    shops: [
      [gg_rct_topShop1, SHOP_A],
      [gg_rct_bottomShop1, SHOP_A],
      [gg_rct_topShop2, SHOP_B],
      [gg_rct_bottomShop2, SHOP_B],
      [gg_rct_topShop3, SHOP_C],
      [gg_rct_bottomShop3, SHOP_C],
    ],
    guideFarms: [
      { x: -768 + 192 * 0, y: -256 - 192 * 0 },
      { x: -768 + 192 * 1, y: -256 - 192 * 0 },
      { x: -768 + 192 * 2, y: -256 - 192 * 0 },
      { x: -768 + 192 * 3, y: -256 - 192 * 0 },
      { x: -768 + 192 * 4, y: -256 - 192 * 0 },
      { x: -768 + 192 * 5, y: -256 - 192 * 0 },
      { x: -768 + 192 * 6, y: -256 - 192 * 0 },
      { x: -768 + 192 * 6, y: -256 - 192 * 1 },
      { x: -768 + 192 * 6, y: -256 - 192 * 2 },
      { x: -768 + 192 * 6, y: -256 - 192 * 3 },
      { x: -768 + 192 * 6, y: -256 - 192 * 4 },
      { x: -768 + 192 * 6, y: -256 - 192 * 5 },
      { x: -768 + 192 * 6, y: -256 - 192 * 6 },
      { x: -768 + 192 * 6, y: -256 - 192 * 7 },
      { x: -768 + 192 * 5, y: -256 - 192 * 7 },
      { x: -768 + 192 * 4, y: -256 - 192 * 7 },
      { x: -768 + 192 * 4, y: -256 - 192 * 8 },
      { x: -768 + 192 * 3, y: -256 - 192 * 8 },
      { x: -768 + 192 * 3, y: -256 - 192 * 9 },
      { x: -768 + 192 * 2, y: -256 - 192 * 9 },
      { x: -768 + 192 * 1, y: -256 - 192 * 9 },
      { x: -768 + 192 * 1, y: -256 - 192 * 8 },
      { x: -768 + 192 * 1, y: -256 - 192 * 7 },
      { x: -768 + 192 * 0, y: -256 - 192 * 7 },
      { x: -768 + 192 * 0, y: -256 - 192 * 6 },
      { x: -768 + 192 * 0, y: -256 - 192 * 5 },
      { x: -768 + 192 * 0, y: -256 - 192 * 4 },
      { x: -768 + 192 * -1, y: -256 - 192 * 4 },
      { x: -768 + 192 * -2, y: -256 - 192 * 4 },
      { x: -768 + 192 * -2, y: -256 - 192 * 3 },
      { x: -768 + 192 * -2, y: -256 - 192 * 2 },
      { x: -768 + 192 * -1, y: -256 - 192 * 2 },
      { x: -768 + 192 * -1, y: -256 - 192 * 1 },
      { x: -768 + 192 * 0, y: -256 - 192 * 1 },
    ],
  });

  terrains.push({
    index: terrains.length,
    name: "Glory Hills",
    minimap: "war3mapImported\\gloryhills.blp",
    cameraBounds: gg_rct_Glory_Hill_Camera_Bounds,
    spawnType: "team",
    wisp: gg_rct_Glory_Hill_Fence,
    wolf: gg_rct_Glory_Hill_Fence,
    runes: {
      invis: gg_rct_Glory_Hill_Invis,
      speed: gg_rct_Glory_Hill_Speed,
      omniscience: gg_rct_Glory_Hill_Omniscience,
      mana: gg_rct_Glory_Hill_Mana,
    },
    spawns: [
      gg_rct_gh1,
      gg_rct_gh2,
      gg_rct_gh3,
      gg_rct_gh4,
      gg_rct_gh5,
      gg_rct_gh6,
      gg_rct_gh7,
      gg_rct_gh8,
      gg_rct_gh9,
      gg_rct_gh10,
      gg_rct_gh11,
      gg_rct_gh12,
      gg_rct_gh13,
      gg_rct_gh14,
      gg_rct_gh15,
      gg_rct_gh16,
      gg_rct_gh17,
      gg_rct_gh18,
      gg_rct_gh19,
      gg_rct_gh20,
      gg_rct_gh21,
      gg_rct_gh22,
      gg_rct_gh23,
      gg_rct_gh24,
    ],
    spawnBounds: GetEntireMapRect()!,
    shops: [
      [gg_rct_Glory_Hill_ShopA1, SHOP_A_ROTATED],
      [gg_rct_Glory_Hill_ShopA2, SHOP_A_ROTATED],
      [gg_rct_Glory_Hill_ShopB1, SHOP_B_ROTATED],
      [gg_rct_Glory_Hill_ShopB2, SHOP_B_ROTATED],
      [gg_rct_Glory_Hill_ShopC1, SHOP_C_ROTATED],
      [gg_rct_Glory_Hill_ShopC2, SHOP_C_ROTATED],
    ],
    guideFarms: [
      { x: 12160 + 192 * 1, y: -1600 + 192 * 0 },
      { x: 12160 + 192 * 1, y: -1600 + 192 * 1 },
      { x: 12160 + 192 * 1, y: -1600 + 192 * 2 },
      { x: 12160 + 192 * 0, y: -1600 + 192 * 2 },
      { x: 12160 + 192 * 0, y: -1600 + 192 * 3 },
      { x: 12160 + 192 * 0, y: -1600 + 192 * 4 },
      { x: 12160 + 192 * 1, y: -1600 + 192 * 4 },
      { x: 12160 + 192 * 1, y: -1600 + 192 * 5 },
      { x: 12160 + 192 * 1, y: -1600 + 192 * 6 },
      { x: 12160 + 192 * 2, y: -1600 + 192 * 6 },
      { x: 12160 + 192 * 3, y: -1600 + 192 * 6 },
      { x: 12160 + 192 * 4, y: -1600 + 192 * 6 },
      { x: 12160 + 192 * 5, y: -1600 + 192 * 6 },
      { x: 12160 + 192 * 6, y: -1600 + 192 * 6 },
      { x: 12160 + 192 * 7, y: -1600 + 192 * 6 },
      { x: 12160 + 192 * 7, y: -1600 + 192 * 5 },
      { x: 12160 + 192 * 8, y: -1600 + 192 * 5 },
      { x: 12160 + 192 * 8, y: -1600 + 192 * 4 },
      { x: 12160 + 192 * 8, y: -1600 + 192 * 3 },
      { x: 12160 + 192 * 8, y: -1600 + 192 * 2 },
      { x: 12160 + 192 * 7, y: -1600 + 192 * 2 },
      { x: 12160 + 192 * 7, y: -1600 + 192 * 1 },
      { x: 12160 + 192 * 7, y: -1600 + 192 * 0 },
      { x: 12160 + 192 * 6, y: -1600 + 192 * 0 },
      { x: 12160 + 192 * 5, y: -1600 + 192 * 0 },
      { x: 12160 + 192 * 4, y: -1600 + 192 * 0 },
      { x: 12160 + 192 * 3, y: -1600 + 192 * 0 },
      { x: 12160 + 192 * 2, y: -1600 + 192 * 0 },
    ],
  });

  terrains.push({
    index: terrains.length,
    name: "Experimental",
    minimap: "war3mapImported\\experimental.blp",
    cameraBounds: gg_rct_Vro_Camera_Bounds,
    spawnType: "playerColor",
    wisp: gg_rct_Vro_Fence,
    wolf: gg_rct_Vro_Fence,
    runes: {
      invis: gg_rct_Vro_Invis,
      speed: gg_rct_Vro_Speed,
      omniscience: gg_rct_Vro_Omniscience,
      mana: gg_rct_Vro_Mana,
    },
    spawns: [
      gg_rct_vro1,
      gg_rct_vro2,
      gg_rct_vro3,
      gg_rct_vro4,
      gg_rct_vro5,
      gg_rct_vro6,
      gg_rct_vro7,
      gg_rct_vro8,
      gg_rct_vro9,
      gg_rct_vro10,
      gg_rct_vro11,
      gg_rct_vro12,
      gg_rct_vro13,
      gg_rct_vro14,
      gg_rct_vro15,
      gg_rct_vro16,
      gg_rct_vro17,
      gg_rct_vro18,
      gg_rct_vro19,
      gg_rct_vro20,
      gg_rct_vro21,
      gg_rct_vro22,
      gg_rct_vro23,
      gg_rct_vro24,
    ],
    spawnBounds: GetEntireMapRect()!,
    shops: [
      [gg_rct_Vro_Shop_A1, SHOP_A],
      [gg_rct_Vro_Shop_A2, SHOP_A],
      [gg_rct_Vro_Shop_B1, SHOP_B],
      [gg_rct_Vro_Shop_B2, SHOP_B],
      [gg_rct_Vro_Shop_C1, SHOP_C],
      [gg_rct_Vro_Shop_C2, SHOP_C],
    ],
    guideFarms: [
      { x: -768 + 192 * 0, y: -13568 - 192 * 0 },
      { x: -768 + 192 * 1, y: -13568 - 192 * 0 },
      { x: -768 + 192 * 2, y: -13568 - 192 * 0 },
      { x: -768 + 192 * 3, y: -13568 - 192 * 0 },
      { x: -768 + 192 * 4, y: -13568 - 192 * 0 },
      { x: -768 + 192 * 5, y: -13568 - 192 * 0 },
      { x: -768 + 192 * 6, y: -13568 - 192 * 0 },
      { x: -768 + 192 * 6, y: -13568 - 192 * 1 },
      { x: -768 + 192 * 6, y: -13568 - 192 * 2 },
      { x: -768 + 192 * 6, y: -13568 - 192 * 3 },
      { x: -768 + 192 * 6, y: -13568 - 192 * 4 },
      { x: -768 + 192 * 6, y: -13568 - 192 * 5 },
      { x: -768 + 192 * 6, y: -13568 - 192 * 6 },
      { x: -768 + 192 * 6, y: -13568 - 192 * 7 },
      { x: -768 + 192 * 5, y: -13568 - 192 * 7 },
      { x: -768 + 192 * 4, y: -13568 - 192 * 7 },
      { x: -768 + 192 * 4, y: -13568 - 192 * 8 },
      { x: -768 + 192 * 3, y: -13568 - 192 * 8 },
      { x: -768 + 192 * 3, y: -13568 - 192 * 9 },
      { x: -768 + 192 * 2, y: -13568 - 192 * 9 },
      { x: -768 + 192 * 1, y: -13568 - 192 * 9 },
      { x: -768 + 192 * 1, y: -13568 - 192 * 8 },
      { x: -768 + 192 * 1, y: -13568 - 192 * 7 },
      { x: -768 + 192 * 0, y: -13568 - 192 * 7 },
      { x: -768 + 192 * 0, y: -13568 - 192 * 6 },
      { x: -768 + 192 * 0, y: -13568 - 192 * 5 },
      { x: -768 + 192 * 0, y: -13568 - 192 * 4 },
      { x: -768 + 192 * -1, y: -13568 - 192 * 4 },
      { x: -768 + 192 * -2, y: -13568 - 192 * 4 },
      { x: -768 + 192 * -2, y: -13568 - 192 * 3 },
      { x: -768 + 192 * -2, y: -13568 - 192 * 2 },
      { x: -768 + 192 * -1, y: -13568 - 192 * 2 },
      { x: -768 + 192 * -1, y: -13568 - 192 * 1 },
      { x: -768 + 192 * 0, y: -13568 - 192 * 1 },
    ],
  });

  terrains.push({
    index: terrains.length,
    name: "Tiny",
    minimap: "war3mapImported\\tiny.blp",
    cameraBounds: gg_rct_tcamera,
    spawnType: "playerColor",
    wisp: gg_rct_tfence,
    wolf: gg_rct_tfence,
    runes: {
      invis: gg_rct_ti,
      speed: gg_rct_ts,
      omniscience: gg_rct_to,
      mana: gg_rct_tm,
    },
    spawns: [
      gg_rct_t1,
      gg_rct_t2,
      gg_rct_t3,
      gg_rct_t4,
      gg_rct_t5,
      gg_rct_t6,
      gg_rct_t7,
      gg_rct_t8,
      gg_rct_t9,
      gg_rct_t10,
      gg_rct_t11,
      gg_rct_t12,
      gg_rct_t13,
      gg_rct_t14,
      gg_rct_t15,
      gg_rct_t16,
      gg_rct_t17,
      gg_rct_t18,
      gg_rct_t19,
      gg_rct_t20,
      gg_rct_t21,
      gg_rct_t22,
      gg_rct_t23,
      gg_rct_t24,
    ],
    spawnBounds: GetEntireMapRect()!,
    shops: [],
    guideFarms: [
      { x: 8704, y: -9344 },
      { x: 9216, y: -9088 },
      { x: 8960, y: -8576 },
      { x: 8448, y: -8832 },
      { x: 8256, y: -8960 },
      { x: 8256, y: -8768 },
      { x: 8384, y: -9344 },
      { x: 8384, y: -9152 },
      { x: 8832, y: -9536 },
      { x: 8640, y: -9536 },
      { x: 8448, y: -9536 },
      { x: 9024, y: -9408 },
      { x: 9216, y: -9408 },
      { x: 9408, y: -8960 },
      { x: 9408, y: -9152 },
      { x: 9408, y: -9344 },
      { x: 9280, y: -8768 },
      { x: 9280, y: -8576 },
      { x: 8832, y: -8384 },
      { x: 9024, y: -8384 },
      { x: 9216, y: -8384 },
      { x: 8640, y: -8512 },
      { x: 8448, y: -8512 },
      { x: 8256, y: -8576 },
    ],
  });

  terrains.push({
    index: terrains.length,
    name: "Compact",
    minimap: "war3mapImported\\compact.blp",
    cameraBounds: gg_rct_compactCamera,
    spawnType: "playerColor",
    wisp: gg_rct_compactFence,
    wolf: gg_rct_compactFence,
    runes: {
      invis: gg_rct_compactInvis,
      speed: gg_rct_compactSpeed,
      omniscience: gg_rct_compactOmniscience,
      mana: gg_rct_compactMana,
    },
    spawns: [
      gg_rct_compact1,
      gg_rct_compact2,
      gg_rct_compact3,
      gg_rct_compact4,
      gg_rct_compact5,
      gg_rct_compact6,
      gg_rct_compact7,
      gg_rct_compact8,
      gg_rct_compact9,
      gg_rct_compact10,
      gg_rct_compact11,
      gg_rct_compact12,
      gg_rct_compact13,
      gg_rct_compact14,
      gg_rct_compact15,
      gg_rct_compact16,
      gg_rct_compact17,
      gg_rct_compact18,
      gg_rct_compact19,
      gg_rct_compact20,
      gg_rct_compact21,
      gg_rct_compact22,
      gg_rct_compact23,
      gg_rct_compact24,
    ],
    spawnBounds: GetEntireMapRect()!,
    shops: [
      [gg_rct_compactShopA, SHOP_A_INLINE],
      [gg_rct_compactShopB, SHOP_B_INLINE],
      [gg_rct_compactShopC, SHOP_C_INLINE],
    ],
    guideFarms: [
      { x: 12032 + 192 * 0, y: -14592 - 192 * 0 },
      { x: 12032 + 192 * 1, y: -14592 - 192 * 0 },
      { x: 12032 + 192 * 2, y: -14592 - 192 * 0 },
      { x: 12032 + 192 * 3, y: -14592 - 192 * 0 },
      { x: 12032 + 192 * 4, y: -14592 - 192 * 0 },
      { x: 12032 + 192 * 5, y: -14592 - 192 * 0 },
      { x: 12032 + 192 * 6, y: -14592 - 192 * 0 },
      { x: 12032 + 192 * 6, y: -14592 - 192 * 1 },
      { x: 12032 + 192 * 6, y: -14592 - 192 * 2 },
      { x: 12032 + 192 * 6, y: -14592 - 192 * 3 },
      { x: 12032 + 192 * 6, y: -14592 - 192 * 4 },
      { x: 12032 + 192 * 6, y: -14592 - 192 * 5 },
      { x: 12032 + 192 * 6, y: -14592 - 192 * 6 },
      { x: 12032 + 192 * 6, y: -14592 - 192 * 7 },
      { x: 12032 + 192 * 5, y: -14592 - 192 * 7 },
      { x: 12032 + 192 * 4, y: -14592 - 192 * 7 },
      { x: 12032 + 192 * 4, y: -14592 - 192 * 8 },
      { x: 12032 + 192 * 3, y: -14592 - 192 * 8 },
      { x: 12032 + 192 * 3, y: -14592 - 192 * 9 },
      { x: 12032 + 192 * 2, y: -14592 - 192 * 9 },
      { x: 12032 + 192 * 1, y: -14592 - 192 * 9 },
      { x: 12032 + 192 * 1, y: -14592 - 192 * 8 },
      { x: 12032 + 192 * 1, y: -14592 - 192 * 7 },
      { x: 12032 + 192 * 0, y: -14592 - 192 * 7 },
      { x: 12032 + 192 * 0, y: -14592 - 192 * 6 },
      { x: 12032 + 192 * 0, y: -14592 - 192 * 5 },
      { x: 12032 + 192 * 0, y: -14592 - 192 * 4 },
      { x: 12032 + 192 * -1, y: -14592 - 192 * 4 },
      { x: 12032 + 192 * -2, y: -14592 - 192 * 4 },
      { x: 12032 + 192 * -2, y: -14592 - 192 * 3 },
      { x: 12032 + 192 * -2, y: -14592 - 192 * 2 },
      { x: 12032 + 192 * -1, y: -14592 - 192 * 2 },
      { x: 12032 + 192 * -1, y: -14592 - 192 * 1 },
      { x: 12032 + 192 * 0, y: -14592 - 192 * 1 },
    ],
  });

  terrains.forEach((t) => {
    forEachPlayer((p) => t.shops.forEach((s) => CreateFogModifierRectBJ(true, p.handle, FOG_OF_WAR_VISIBLE, s[0])));
    let xMin = Infinity;
    let yMin = Infinity;
    let xMax = -Infinity;
    let yMax = -Infinity;
    for (let i = 0; i < t.spawns.length; i++) {
      const x = GetRectCenterX(t.spawns[i]);
      const y = GetRectCenterY(t.spawns[i]);
      if (x < xMin) xMin = x;
      if (x > xMax) xMax = x;
      if (y < yMin) yMin = y;
      if (y > yMax) yMax = y;
    }
    t.spawnBounds = Rect(xMin, yMin, xMax, yMax);
  });
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  initTrigger();
  initTerrains();
  setTerrain(0, true);
});
