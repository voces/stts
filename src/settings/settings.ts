import { MapPlayerEx } from "handles/MapPlayerEx";
import type { Terrain } from "./terrain";

export const income = {
  sheep: 1,
  wolves: 1,
  savings: 1,
};

export const president = {
  enabled: false,
  president: MapPlayerEx.fromIndex(PLAYER_NEUTRAL_PASSIVE)!,
  handicap: 0.75,
};

export const spawnSetting = { mode: "static" as "static" | "free" | "random" };

export const farmVision = { vision: -1 };

export const switchSetting = {
  goalTime: Infinity,
};

export const terrain: Terrain = {} as Terrain;
