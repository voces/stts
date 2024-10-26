import { MapPlayer } from "w3ts";
import { setTimeout } from "./setTimeout";
import { onRoundStart } from "./onRoundStart";

const DUMMY_X = 15552;
const DUMMY_Y = -9536;

const dummies: unit[] = [];

onRoundStart(() => {
  for (let i = 0; i < 4; i++) {
    dummies.push(CreateUnit(Player(PLAYER_NEUTRAL_PASSIVE)!, FourCC("n00G"), DUMMY_X, DUMMY_Y, 270)!);
  }
});

const getDummy = (x: number, y: number) => {
  while (dummies.length > 0) {
    const dummy = dummies.pop();
    if (dummy && UnitAlive(dummy)) return dummy;
  }
  return CreateUnit(Player(PLAYER_NEUTRAL_PASSIVE)!, FourCC("n00G"), x, y, 270)!;
};

export const hasTrueVision = (x: number, y: number, player: MapPlayer, fn: () => void) => {
  const dummy = getDummy(x, y);
  SetUnitX(dummy, x);
  SetUnitY(dummy, y);

  let i = 1;
  const { cancel } = setTimeout(0.05, () => {
    if (!UnitAlive(dummy)) return;
    if (!IsUnitInvisible(dummy, player.handle)) fn();
    if (++i < 11) return;
    SetUnitX(dummy, DUMMY_X);
    SetUnitY(dummy, DUMMY_Y);
    dummies.push(dummy);
    cancel();
  }, true);
};
