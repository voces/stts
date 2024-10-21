import { MapPlayerEx } from "handles/MapPlayerEx";

const times: Record<string, { total: number; count: number }>[] = [];
export const modes = new Set<string>();

type Round = { sheep: MapPlayerEx[]; wolves: MapPlayerEx[]; time: number };

export const rounds: Round[] = [];

export const addTime = (playerId: number, mode: string, time: number) => {
  modes.add(mode);
  if (!times[playerId]) times[playerId] = {};
  if (!times[playerId][mode]) times[playerId][mode] = { total: 0, count: 0 };
  times[playerId][mode].total += time;
  times[playerId][mode].count++;
};

export const addRound = (sheep: MapPlayerEx[], wolves: MapPlayerEx[], time: number) =>
  rounds.push({ sheep, wolves, time });

export const getTimes = (playerId: number) => times[playerId] ?? {};

export const getRounds = (...sheep: MapPlayerEx[]) =>
  sheep.length > 0 ? rounds.filter((r) => sheep.every((s) => r.sheep.includes(s))) : rounds;
