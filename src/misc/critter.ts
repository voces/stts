import { addScriptHook, W3TS_HOOK } from "w3ts";
import { isPointInPolygon, Point } from "util/geometry";
import { getCenter } from "settings/terrain";

let critter: unit | undefined;

const barn: Point[] = [{ x: -160, y: -704 }, { x: 0, y: -512 }, { x: 128, y: -608 }, { x: -64, y: -800 }];

const getCritterPoint = () => {
  const offset = getCenter();
  let x = GetRandomReal(offset.x - 160, offset.x + 128);
  let y = GetRandomReal(offset.y - 800, offset.y - 512);
  while (true) {
    if (isPointInPolygon(x, y, barn.map(({ x, y }) => ({ x: x + offset.x, y: y + offset.y })))) break;
    x = GetRandomReal(offset.x - 160, offset.x + 128);
    y = GetRandomReal(offset.y - 800, offset.y - 512);
  }
  return { x, y };
};

export const createCritter = () => {
  const { x, y } = getCritterPoint();
  critter = CreateUnit(Player(PLAYER_NEUTRAL_PASSIVE)!, FourCC("n009"), x, y, GetRandomReal(0, 360));
};

const moveCritter = () => {
  if (!critter || !UnitAlive(critter)) return;

  const { x, y } = getCritterPoint();

  IssuePointOrder(critter, "move", x, y);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  TriggerRegisterTimerEvent(t, 5, true);
  TriggerAddAction(t, moveCritter);
});
