import { isPlaying } from "./isPlaying";
import { MapPlayerEx } from "../handles/MapPlayerEx";

/** Includes pubs, but not AFKs */
export const forEachPlayingPlayer = (fn: (player: MapPlayerEx) => void) =>
  ForForce(GetPlayersAll()!, () => {
    const p = MapPlayerEx.fromEnum()!;
    if (isPlaying(p)) fn(p);
  });
