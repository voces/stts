import { MapPlayerEx } from "handles/MapPlayerEx";
import { UnitEx } from "handles/UnitEx";
import { game } from "util/game";
import { onRoundInit } from "util/gameHooks";
import { Trigger } from "w3ts";

let trigger: Trigger;

const testMass = new Map<MapPlayerEx, { width: number; height: number; gap: number; owner: number }>();

game.onCommand({
  trigger: "-testmass",
  host: false,
  exact: false,
  fn: ({ player, parts }) => {
    if (!udg_practiceOn) return;
    const width = parts[1] ? parseInt(parts[1]) : 5;
    const height = parts[2] ? parseInt(parts[2]) : width;
    const gap = parts[3] ? parseInt(parts[3]) : 3;
    const owner = parts[4] ? bj_PLAYER_NEUTRAL_VICTIM : player.id;

    if (owner < 0 || owner > bj_MAX_PLAYERS + 4) return;

    testMass.set(player, { width, height, gap, owner });

    if (testMass.size === 1) trigger.enabled = true;
  },
});

game.onConstructionStart(({ unit }) => {
  if (testMass.size === 0) {
    trigger.enabled = false;
    return;
  }

  const owner = unit.owner;

  const test = testMass.get(owner);
  if (!test) return;

  testMass.delete(owner);

  let remaining = 500;
  const offset = { x: unit.x, y: unit.y };
  for (let y = 0; y < test.height; y++) {
    for (let x = 0; x < test.width; x++) {
      if (x === 0 && y === 0) continue;
      if (--remaining === 0) return;
      const xWorld = offset.x + x * test.gap * 64;
      const yWorld = offset.y + y * test.gap * 64;
      const u = UnitEx.create(Player(test.owner)!, unit.typeId, xWorld, yWorld);
      if (u.x !== xWorld || u.y !== yWorld) u.destroy();
    }
  }
}).then((t) => {
  trigger = t;
  trigger.enabled = false;
});

onRoundInit(() => {
  testMass.clear();
});
