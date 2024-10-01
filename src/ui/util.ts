import { ForceEx } from "handles/ForceEx";

const getActivePlayerCount = () => ForceEx.all.toArray().reduce((count, p) => count + (p.isActive ? 1 : 0), 0);

export const getInHouseCount = () =>
  ForceEx.all.toArray().reduce((count, p) => count + (p.isActive && !p.isPub ? 1 : 0), 0);

export const parseDesiredSheep = (value: string, lowerBound = true) => {
  if (value === "") return (Math.floor(getInHouseCount() / 2 - 1));
  const highBounded = Math.min(tonumber(value) ?? 1, Math.max(getActivePlayerCount() - 1, 1));
  if (lowerBound) return Math.max(highBounded, 1);
  return highBounded;
};

export const toStringWithPrecision = (value: number) =>
  string.gsub(
    string.gsub(string.format("%.3f", value), "0+$", "")[0],
    "%.$",
    "",
  )[0];
