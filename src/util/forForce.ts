import { MapPlayer } from "w3ts";

export const forForce = (force: force, fn: (player: MapPlayer) => void) =>
  ForForce(force, () => fn(MapPlayer.fromEnum()!));
