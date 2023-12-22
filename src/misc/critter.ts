import { addScriptHook, W3TS_HOOK } from "w3ts";

let critter: unit | undefined;

const bounds: { x: number; y: number }[] = [];

const isLeft = (
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  x: number,
  y: number,
) => (x1 - x0) * (y - y0) - (x - x0) * (y1 - y0);

const isPointInRectangle = (x: number, y: number): boolean => {
  let wn = 0;

  for (let i = 0; i < bounds.length; i++) {
    const x1 = bounds[i].x;
    const y1 = bounds[i].y;
    const x2 = bounds[ModuloInteger(i + 1, 4)].x;
    const y2 = bounds[ModuloInteger(i + 1, 4)].y;

    if (y1 <= y) {
      if (y2 > y && isLeft(x1, y1, x2, y2, x, y) > 0) wn = wn + 1;
    } else if (y2 <= y && isLeft(x1, y1, x2, y2, x, y) < 0) wn = wn - 1;
  }

  return wn !== 0;
};

export const createCritter = () => {
  let x = GetRandomReal(-416, -128);
  let y = GetRandomReal(-1760, -1472);
  while (true) {
    if (isPointInRectangle(x, y)) break;
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
    if (isPointInRectangle(x, y)) break;
    x = GetRandomReal(-416, -128);
    y = GetRandomReal(-1760, -1472);
  }

  IssuePointOrder(critter, "move", x, y);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  BJDebugMsg("still run?");
  const t = CreateTrigger();
  TriggerRegisterTimerEvent(t, 5, true);
  TriggerAddAction(t, moveCritter);
  bounds.push(
    { x: -416, y: -1664 },
    { x: -256, y: -1472 },
    { x: -128, y: -1568 },
    { x: -320, y: -1760 },
  );
});
