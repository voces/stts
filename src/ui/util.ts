import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { settings } from "settings/settings";

export const getActivePlayerCount = () => ForceEx.all.toArray().reduce((count, p) => count + (p.isActive ? 1 : 0), 0);

const getCounts = () => {
  let regulars = 0;
  let pubs = 0;
  let afks = 0;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p || !p.inGame) continue;
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
  if (pubs % 2 === 0) return Math.max(Math.floor((regulars + pubs) / 2 - 1), 1);
  return Math.max(Math.floor((regulars + pubs + 1) / 2 - 1), 1);
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

const getAdjustedSc = (p: MapPlayerEx) => {
  if (udg_gameStarted && (p.isSheep || p.isWisp)) return p.sheepCount - 1;
  return p.sheepCount;
};

export const isScEven = () => {
  let totalSc = 0;
  let minSc = Infinity;
  let maxSc = -Infinity;
  let players = 0;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p?.isActive || p.isPub) continue;
    players++;

    const sc = getAdjustedSc(p);
    totalSc += sc;
    if (minSc > sc) minSc = sc;
    if (maxSc < sc) maxSc = sc;
  }
  if (players === 0) return true;

  if (maxSc - minSc > 1) return false;

  return totalSc % players < settings.desiredSheep;
};

export const precisionCompare = (a: number, b: number, precision = 3) => {
  const as = a.toFixed(precision);
  const bs = b.toFixed(precision);
  if (as === bs) return "equal";
  return tonumber(as)! > tonumber(bs)! ? "greater" : "less";
};
