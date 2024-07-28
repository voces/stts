const times: Record<string, { total: number; count: number }>[] = [];
export const modes = new Set<string>();

export const addTime = (playerId: number, mode: string, time: number) => {
  modes.add(mode);
  if (!times[playerId]) times[playerId] = {};
  if (!times[playerId][mode]) times[playerId][mode] = { total: 0, count: 0 };
  times[playerId][mode].total += time;
  times[playerId][mode].count++;
};

export const getTimes = (playerId: number) => times[playerId] ?? {};
