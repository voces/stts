import { MapPlayer, Unit } from "w3ts";
import { setTimeout } from "./setTimeout";

export const withDummy = <T>(
  fn: (dummy: Unit) => T,
  x = 0,
  y = 0,
  owner = MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE)!,
) => {
  const dummy = Unit.create(owner, FourCC("h00J"), x, y)!;
  let result: T;
  try {
    result = fn(dummy);
  } finally {
    setTimeout(0.1, () => dummy.destroy());
  }
  return result;
};
