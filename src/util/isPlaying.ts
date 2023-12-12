import { MapPlayer } from "w3ts";

export const isPlaying = (player: player | MapPlayer, allowAfk = false) => {
  const p = player instanceof MapPlayer ? player : MapPlayer.fromHandle(player)!;
  return p.slotState === PLAYER_SLOT_STATE_PLAYING && (allowAfk || udg_AFK[p.id + 1] === AFK_PLAYING);
};
