import { MapPlayerEx } from "../handles/MapPlayerEx";

/** `allowAfk` defaults to `false` */
export const isPlaying = (player: player | MapPlayerEx, allowAfk = false) => {
  const p = player instanceof MapPlayerEx ? player : MapPlayerEx.fromHandle(player);
  return p.slotState === PLAYER_SLOT_STATE_PLAYING && (allowAfk || udg_AFK[p.id + 1] === AFK_PLAYING);
};
