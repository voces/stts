import { addScriptHook, W3TS_HOOK } from "w3ts";

let critter: unit | undefined;

type Point = { x: number; y: number };

const bounds: Point[] = [];

const isLeft = (a: Point, b: Point, x: number, y: number) => (b.x - a.x) * (y - a.y) - (x - a.x) * (b.y - a.y);

const isPointInBounds = (x: number, y: number): boolean => {
  let wn = 0;

  for (let i = 0; i < bounds.length; i++) {
    const a = bounds[i];
    const b = bounds[(i + 1) % bounds.length];

    if (a.y <= y) {
      if (b.y > y && isLeft(a, b, x, y) > 0) wn = wn + 1;
    } else if (b.y <= y && isLeft(a, b, x, y) < 0) wn = wn - 1;
  }

  return wn !== 0;
};

export const createCritter = () => {
  let x = GetRandomReal(-416, -128);
  let y = GetRandomReal(-1760, -1472);
  while (true) {
    if (isPointInBounds(x, y)) break;
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
    if (isPointInBounds(x, y)) break;
    x = GetRandomReal(-416, -128);
    y = GetRandomReal(-1760, -1472);
  }

  IssuePointOrder(critter, "move", x, y);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
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
