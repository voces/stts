import { Force, MapPlayer } from "w3ts";

export const reduceForce = <T>(
  force: force | MapPlayer[],
  initial: T,
  fn: (accum: T, player: MapPlayer) => T,
) => {
  const f = Array.isArray(force) ? force : Force.fromHandle(force)!.getPlayers();
  return f.reduce((p, v) => fn(p, v), initial);
};
