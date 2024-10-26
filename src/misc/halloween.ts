import { UNIT_TYPE_ID_GHOST } from "constants";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { UnitEx } from "handles/UnitEx";
import { setTimeout } from "util/setTimeout";
import { addScriptHook, getElapsedTime, W3TS_HOOK } from "w3ts";

const ghosts = new Set<[ghost: UnitEx, x1: number, x2: number, spawnedAt: number]>();

let frequency = 0;

const spawnGhost = () => {
  const x1 = GetRandomReal(GetCameraBoundMinX(), GetCameraBoundMaxX());
  const y1 = GetRandomReal(GetCameraBoundMinY(), GetCameraBoundMaxY());
  const facing = GetRandomReal(0, 360);
  const d = GetRandomReal(250, 1500);
  const x2 = x1 + Math.cos(facing * bj_DEGTORAD) * d;
  const y2 = y1 + Math.sin(facing * bj_DEGTORAD) * d;

  const ghost = UnitEx.create(MapPlayerEx.neutralPassive, UNIT_TYPE_ID_GHOST, x1, y1, facing);
  ghost.addAbility("Aloc");
  ghost.issueOrderAt("move", x2, y2);
  ghost.setVertexColor(255, 255, 255, 0);
  ghosts.add([ghost, x1, x2, getElapsedTime()]);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  setTimeout(0.1, () => {
    const time = getElapsedTime();
    for (const data of ghosts) {
      const [ghost, x1, x2, spawnedAt] = data;
      const p = (ghost.x - x1) / (x2 - x1);
      if (p >= 0.99 || ghost.currentOrder === 0) {
        ghosts.delete(data);
        ghost.destroy();
        continue;
      }
      const fadeInOut = 4 * p * (1 - p);
      const d = time - spawnedAt;
      const s = (Math.sin(d * 2) + Math.sin(d * 3 + 1) + Math.sin(d * 5 + 2)) / 7 + 0.5;
      ghost.setVertexColor(255, 255, 255, Math.round(127 * fadeInOut * s));
    }
  }, true);

  let spawner = setTimeout(100, spawnGhost, true);

  setTimeout(1, () => {
    const size = (GetCameraBoundMaxX() - GetCameraBoundMinX()) * (GetCameraBoundMaxY() - GetCameraBoundMinY());
    const nextFrequency = 50000000 / size;
    if (frequency === nextFrequency) return;
    frequency = nextFrequency;
    spawner.cancel();
    spawner = setTimeout(frequency, spawnGhost, true);
  }, true);
});
