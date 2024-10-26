import type { MapPlayerEx } from "handles/MapPlayerEx";
import type { Terrain } from "./terrain";

export const income = {
  sheep: 1,
  wolves: 1,
  savings: 1,
};

export const president = {
  enabled: false,
  president: undefined as MapPlayerEx | undefined,
  handicap: 0.75,
};

export const spawnSetting = { mode: "free" as "static" | "free" | "random" };

export const farmVision = { vision: -1, trigger: undefined as unknown as trigger };

export const switchSetting = { goalTime: Infinity };

export const terrain: Terrain = {} as Terrain;

export const settings = {
  desiredSheep: 0,
  teamConfiguration: { sheep: [] as MapPlayerEx[], wolves: [] as MapPlayerEx[] },
};
