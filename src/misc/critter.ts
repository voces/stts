import { addScriptHook, W3TS_HOOK } from "w3ts";
import { isPointInPolygon, Point } from "util/geometry";

let critter: unit | undefined;

const barn: Point[] = [{ x: -416, y: -1664 }, { x: -256, y: -1472 }, { x: -128, y: -1568 }, { x: -320, y: -1760 }];

export const createCritter = () => {
  let x = GetRandomReal(-416, -128);
  let y = GetRandomReal(-1760, -1472);
  while (true) {
    if (isPointInPolygon(x, y, barn)) break;
    x = GetRandomReal(-416, -128);
    y = GetRandomReal(-1760, -1472);
  }
  critter = CreateUnit(Player(PLAYER_NEUTRAL_PASSIVE)!, FourCC("n009"), x, y, GetRandomReal(0, 360));
};

const moveCritter = () => {
  if (!critter || !UnitAlive(critter)) return;

  let x = GetRandomReal(-416, -128);
  let y = GetRandomReal(-1760, -1472);
  while (true) {
    if (isPointInPolygon(x, y, barn)) break;
    x = GetRandomReal(-416, -128);
    y = GetRandomReal(-1760, -1472);
  }

  IssuePointOrder(critter, "move", x, y);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  TriggerRegisterTimerEvent(t, 5, true);
  TriggerAddAction(t, moveCritter);
});
