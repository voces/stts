import { MapPlayerEx } from "handles/MapPlayerEx";

export const income = {
  sheep: 1,
  wolves: 1,
  savings: 1,
};

export const president = {
  enabled: false,
  president: MapPlayerEx.fromIndex(PLAYER_NEUTRAL_PASSIVE)!,
  handicap: 1,
};

export const spawnSetting = { mode: "static" as "static" | "free" | "random" };

export const farmVision = { vision: -1 };
