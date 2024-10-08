import { addScriptHook, W3TS_HOOK } from "w3ts";
import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { UnitEx } from "handles/UnitEx";
import { UNIT_TYPE_ID_MONEY_FARM } from "constants";
import { income, terrain } from "settings/settings";

const g = CreateGroup();

const getDistancePenality = (u: unit) => {
  const x = GetUnitX(u);
  const y = GetUnitY(u);
  const xMaxPen = GetRectMaxX(terrain.wisp);
  const xMinPen = GetRectMinX(terrain.wisp);
  const yMaxPen = GetRectMaxY(terrain.wisp);
  const yMinPen = GetRectMinY(terrain.wisp);

  // Return 2.5 if in pen (bonus +1 being inside versus right outside)
  if (x > xMinPen && x < xMaxPen && y > yMinPen && y < yMaxPen) return 2.5;

  const xMaxBounds = GetRectMaxX(terrain.cameraBounds);
  const xMinBounds = GetRectMinX(terrain.cameraBounds);
  const yMaxBounds = GetRectMaxY(terrain.cameraBounds);
  const yMinBounds = GetRectMinY(terrain.cameraBounds);

  // Return 0.25 if outside camera bounds (edge of map)
  if (x < xMinBounds || x > xMaxBounds || y < yMinBounds || y > yMaxBounds) return 0.25;

  let xPen = x;
  if (xPen > xMaxPen) xPen = xMaxPen;
  else if (xPen < xMinPen) xPen = xMinPen;

  let yPen = y;
  if (yPen > yMaxPen) yPen = yMaxPen;
  else if (yPen < yMinPen) yPen = yMinPen;

  const yDelta = y < yMinPen ? (y - yMinBounds) / (yMinPen - yMinBounds) : 1 - ((y - yMaxPen) / (yMaxBounds - yMaxPen));
  const xDelta = x < xMinPen ? (x - xMinBounds) / (xMinPen - xMinBounds) : 1 - ((x - xMaxPen) / (xMaxBounds - xMaxPen));

  // Otherwise we tween between 0.25 and 1.5, with an exponential drop off
  return Math.min(xDelta, yDelta) ** 2 * 1.25 + 0.25;
};

const tick = () => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p) continue;

    if (ForceEx.wolves.hasPlayer(p)) {
      p.bankedGold += income.wolves * 0.37 * p.handicap; // no wolf penality
      continue;
    }

    if (ForceEx.sheep.hasPlayer(p)) {
      const u = udg_unit[i + 1];
      if (!UnitAlive(u)) continue;
      const rate = getDistancePenality(u);
      p.setState(PLAYER_STATE_GOLD_UPKEEP_RATE, Math.round((1 - rate) * 100));
      p.bankedGold += income.sheep / 2 * rate;
      continue;
    }
  }

  GroupEnumUnitsOfType(
    g,
    UnitId2String(UNIT_TYPE_ID_MONEY_FARM)!,
    Condition(() => {
      const u = UnitEx.fromFilter()!;
      u.owner.bankedGold += getDistancePenality(u.handle) / 6 * income.savings; // 1/3 as much income as a sheep
      return false;
    }),
  );

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i)!;
    if (p.bankedGold >= 1) {
      const added = Math.floor(p.bankedGold);
      p.gold += added;
      p.bankedGold -= added;
    }
  }
};

export const resetBankedGold = () => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) MapPlayerEx.fromIndex(i)!.bankedGold = 0;
};

let tickTrigger: trigger;

export const enableIncome = () => EnableTrigger(tickTrigger);
export const disableIncome = () => DisableTrigger(tickTrigger);

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  tickTrigger = CreateTrigger();
  TriggerRegisterTimerEventPeriodic(tickTrigger, 0.65);
  TriggerAddAction(tickTrigger, tick);

  const t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_UPGRADE_START);
  TriggerAddAction(t, () => {
    const u = UnitEx.fromEvent();
    if (u?.typeId !== UNIT_TYPE_ID_MONEY_FARM) return;
    u.name = `Money Farm (|cffffcc00${
      Math.round(getDistancePenality(u.handle) * 15 * income.savings)
    } gold per minute|r)`; // 15 = 60/4
  });
});
