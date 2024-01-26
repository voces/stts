import { GroupEx } from "handles/GroupEx";
import { forEachPlayer } from "util/forEachPlayer";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { spawns } from "./spawns";
import { setTimeout } from "util/setTimeout";

type Terrain = {
  name: "Revolution" | "Glory Hills";
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
};

const terrains: Terrain[] = [];
export const terrain: Terrain = {} as Terrain;

const SHOP_A = FourCC("nC12");
const SHOP_A_ROTATED = FourCC("n006");
const SHOP_B = FourCC("n001");
const SHOP_B_ROTATED = FourCC("n007");
const SHOP_C = FourCC("n005");
const SHOP_C_ROTATED = FourCC("n008");

const setTerrain = (terrainIndex: number): void => {
  Object.assign(terrain, terrains[terrainIndex]);

  SetCameraBoundsToRect(terrain.cameraBounds);
  setTimeout(0.25, () => BlzChangeMinimapTerrainTex(terrain.minimap)); // Need a sufficient wait in w3ce
  PanCameraToTimed(GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf), 0);
  for (let i = 0; i < terrain.spawns.length; i++) {
    udg_startLocation[i + 1] = terrain.spawns[i];
    const p = Player(i);
    if (p) spawns.set(p, { x: GetRectCenterX(terrain.spawns[i]), y: GetRectCenterY(terrain.spawns[i]) });
  }
};

const initTrigger = () => {
  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-terrain");
  TriggerAddCondition(t, Condition(() => GetTriggerPlayer() === udg_Custom && !udg_gameStarted));
  TriggerAddAction(t, () => {
    const g = GroupEx.create().enumUnitsInRect(terrain.wolf, (u) => u.typeId === hostFarmType);
    setTerrain((terrains.findIndex((t) => t.minimap === terrain.minimap) + 1) % terrains.length);
    g.forEach((u) => u.setPosition(GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf)));
    g.destroy();
  });
};

const initTerrains = () => {
  terrains.push({
    name: "Revolution",
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
  });

  terrains.push({
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
  setTerrain(0);
});
