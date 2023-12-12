import { MapPlayer } from "w3ts";
import { isPlaying } from "./isPlaying";

export const forEachNonAfkPlayingPlayer = (fn: (player: MapPlayer) => void) =>
  ForForce(GetPlayersAll()!, () => {
    const p = MapPlayer.fromEnum()!;
    if (isPlaying(p)) fn(p);
  });
