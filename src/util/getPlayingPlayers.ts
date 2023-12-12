import { MapPlayer } from "w3ts";
import { reduceForce } from "./reduceForce";
import { isPlaying } from "./isPlaying";

export const getPlayingPlayers = () =>
  reduceForce<MapPlayer[]>(GetPlayersAll()!, [], (players, p) => ((isPlaying(p) && players.push(p)), players));
