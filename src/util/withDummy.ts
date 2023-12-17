import { Unit } from "w3ts";
import { setTimeout } from "./setTimeout";
import { MapPlayerEx } from "handles/MapPlayerEx";

export const withDummy = <T>(
  fn: (dummy: Unit) => T,
  x = 0,
  y = 0,
  owner = MapPlayerEx.fromIndex(PLAYER_NEUTRAL_PASSIVE)!,
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
