import { MapPlayerEx } from "../handles/MapPlayerEx";

export const forEachPlayer = (fn: (player: MapPlayerEx) => void) =>
  ForForce(GetPlayersAll()!, () => fn(MapPlayerEx.fromEnum()!));
