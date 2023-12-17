import { Unit } from "w3ts";
import { GroupEx } from "handles/GroupEx";
import { MapPlayerEx } from "handles/MapPlayerEx";

export const withGroup = <T>(
  fn: (group: GroupEx) => T,
  filter?: (unit: Unit) => boolean,
  player?: MapPlayerEx | player,
) => {
  const group = GroupEx.create()!;
  const temp = GroupEx.create()!;

  if (filter || player) {
    const normalizedPlayer = player
      ? player instanceof MapPlayerEx ? player : MapPlayerEx.fromHandle(player)
      : undefined;
    const start = normalizedPlayer ? normalizedPlayer.id : 0;
    const end = normalizedPlayer ? normalizedPlayer.id + 1 : bj_MAX_PLAYERS;
    const finalFilter = filter ? () => filter(Unit.fromFilter()!) : () => true;
    for (let i = start; i < end; i++) {
      temp.enumUnitsOfPlayer(MapPlayerEx.fromIndex(i)!, finalFilter);
      temp.addGroupFast(group);
    }
  }

  let result: T;
  try {
    result = fn(group);
  } finally {
    group.destroy();
  }
  return result;
};

export const withUnitsInRange = <T>(
  x: number,
  y: number,
  range: number,
  fn: (group: GroupEx) => T,
  filter?: (unit: Unit) => boolean,
) =>
  withGroup((g) => {
    g.enumUnitsInRange(
      x,
      y,
      range,
      filter ? () => filter(Unit.fromFilter()!) : () => true,
    );
    return fn(g);
  });

export const withPlayerUnits = <T>(
  player: MapPlayerEx | player,
  fn: (units: GroupEx) => T,
  filter?: (unit: Unit) => boolean,
) => withGroup(fn, filter, player);

export const withUnitsOfType = <T>(
  unitId: string | number,
  fn: (units: GroupEx) => T,
  filter?: (unit: Unit) => boolean,
) => {
  const typeId = typeof unitId === "string" ? FourCC(unitId) : unitId;
  return withGroup(
    fn,
    filter ? (u) => u.typeId === typeId && filter(u) : (u) => u.typeId === typeId,
  );
};
