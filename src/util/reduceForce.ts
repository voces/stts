import { MapPlayerEx } from "handles/MapPlayerEx";
import { ForceEx } from "handles/ForceEx";

export const reduceForce = <T>(
  force: force | MapPlayerEx[],
  initial: T,
  fn: (accum: T, player: MapPlayerEx) => T,
) => {
  const f = Array.isArray(force) ? force : ForceEx.fromHandle(force)!.getPlayers();
  return f.reduce((p, v) => fn(p, v), initial);
};
