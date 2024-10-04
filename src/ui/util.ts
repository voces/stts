import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";

export const getActivePlayerCount = () => ForceEx.all.toArray().reduce((count, p) => count + (p.isActive ? 1 : 0), 0);

export const getPubCount = () => ForceEx.all.toArray().reduce((count, p) => count + (p.isActive && p.isPub ? 1 : 0), 0);

const getCounts = () => {
  let regulars = 0;
  let pubs = 0;
  let afks = 0;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p || !p.isHere) continue;
    if (p.afk > 0) {
      afks++;
      continue;
    }
    if (p.isPub) {
      pubs++;
      continue;
    }
    regulars++;
  }
  return { regulars, pubs, afks };
};

export const getIdealDesiredSheep = () => {
  const { regulars, pubs } = getCounts();
  if (pubs % 2 === 0) return Math.floor((regulars + pubs) / 2 - 1);
  return Math.floor((regulars + pubs + 1) / 2 - 1);
};

export const parseDesiredSheep = (value: string) => {
  if (value === "") return getIdealDesiredSheep();
  const highBounded = Math.min(tonumber(value) ?? 1, Math.max(getActivePlayerCount() - 1, 1));
  return Math.max(highBounded, 1);
};

export const toStringWithPrecision = (value: number, precision = 3) =>
  string.gsub(
    string.gsub(string.format(`%.${precision}f`, value), "0+$", "")[0],
    "%.$",
    "",
  )[0];
