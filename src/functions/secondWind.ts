import { Unit } from "w3ts";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { setTimeout } from "util/setTimeout";
import { withDummy } from "util/withDummy";
import { withUnitsInRange } from "util/withGroup";

const applySecondWind = (unit: unit) => {
  withDummy(
    (dummy) => {
      dummy.addAbility(FourCC("A02A"));
      dummy.issueTargetOrder("bloodlust", Unit.fromHandle(unit)!);
    },
    GetUnitX(unit),
    GetUnitY(unit),
    MapPlayerEx.fromHandle(GetOwningPlayer(unit)),
  );

  const maybeRemoveBloodlust = () => {
    if (!UnitAlive(unit)) return;
    const aSheepIsNear = withUnitsInRange(
      GetUnitX(unit),
      GetUnitY(unit),
      1000,
      (g) => g.size > 0,
      (u) => u.typeId === sheepType,
    );
    if (aSheepIsNear) UnitRemoveAbility(unit, FourCC("B00J"));
    else setTimeout(1, maybeRemoveBloodlust);
  };
  setTimeout(1, maybeRemoveBloodlust);
};

export const maybeApplySecondWind = (unit: unit) =>
  withUnitsInRange(
      GetUnitX(unit),
      GetUnitY(unit),
      1000,
      (g) => g.size > 0,
      (u) => u.typeId === sheepType,
    )
    ? null
    : applySecondWind(unit);
