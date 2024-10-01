import { MapPlayer } from "w3ts";
import { onRoundStart } from "./onRoundStart";

const DUMMY_X = 15552;
const DUMMY_Y = -9536;

let dummy: unit | undefined;

onRoundStart(() => {
  dummy = CreateUnit(Player(PLAYER_NEUTRAL_PASSIVE)!, FourCC("n00G"), DUMMY_X, DUMMY_Y, 270)!;
});

export const hasTrueVision = (x: number, y: number, player: MapPlayer) => {
  if (!dummy) return false;
  SetUnitX(dummy, x);
  SetUnitY(dummy, y);
  const result = IsUnitVisible(dummy, player.handle);
  SetUnitX(dummy, DUMMY_X);
  SetUnitY(dummy, DUMMY_Y);
  return result;
};
