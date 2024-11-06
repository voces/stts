import { UNIT_TYPE_ID_HAY_TRAP } from "constants";
import { UnitEx } from "handles/UnitEx";
import { game } from "util/game";
import { getTerrainZ } from "util/getTerrainZ";
import { setTimeout } from "util/setTimeout";
import { Effect } from "w3ts";

const UNIT_TYPE_ID_HAY_PLACEMENT = FourCC("h00L");
const ITEM_TYPE_ID_HAY = FourCC("I011");

type Hay = {
  x: number;
  y: number;
};

const recentHays: Hay[] = [];

game.onItemUsed(({ item, unit }) => {
  unit.setAnimation("spell");
  if (item.typeId !== ITEM_TYPE_ID_HAY) return;
  const target = recentHays.shift();
  if (!target) return;

  const hayInHand = Effect.createAttachment("Doodads/LordaeronSummer/Props/Hay/Hay1", unit, "left hand");
  if (!hayInHand) return;
  hayInHand.scale = 0.35;
  setTimeout(0.43, () => {
    hayInHand.destroy();
    if (!unit.isAlive()) return;

    const facing = unit.facing * bj_DEGTORAD;
    const throwerX = unit.x;
    const throwerY = unit.y;
    const originX = throwerX + 60 * Math.cos(facing + Math.PI / 2);
    const originY = throwerY + 60 * Math.sin(facing + Math.PI / 2);
    const projectileHay = Effect.create("Doodads/LordaeronSummer/Props/Hay/Hay1", originX, originY);
    if (!projectileHay) return;

    projectileHay.scale = 0.35;
    const originZ = getTerrainZ(throwerX, throwerY) + 160;
    projectileHay.z = originX;
    let initialPitch = 1.4 + facing;
    if (initialPitch > Math.PI) initialPitch -= Math.PI * 2;
    projectileHay.setPitch(initialPitch);

    const targetZ = getTerrainZ(target.x, target.y);
    const distance = Math.sqrt((target.x - originX) ** 2 + (target.y - originY) ** 2);

    let traveled = 0;
    const timeout = setTimeout(0.02, () => {
      traveled += 20;
      if (traveled > distance || !unit.isAlive()) {
        projectileHay.destroy();
        timeout.cancel();
        if (traveled > distance) UnitEx.create(unit.owner, UNIT_TYPE_ID_HAY_TRAP, target.x, target.y, bj_UNIT_FACING);
        return;
      }
      const p = traveled / distance;
      projectileHay.x = originX * (1 - p) + target.x * p;
      projectileHay.y = originY * (1 - p) + target.y * p;
      projectileHay.z = originZ * (1 - p) + targetZ * p + distance * (1 - 2 * Math.abs(p - 0.5)) * 0.25;
      projectileHay.scale = 0.35 * (1 - p) + 0.5 * p;
      projectileHay.setOrientation(0, initialPitch * (1 - p), 0);
    }, true);
  });
});

game.onConstructionStart(({ unit }) => {
  if (unit.typeId !== UNIT_TYPE_ID_HAY_PLACEMENT) return;
  recentHays.push({ x: unit.x, y: unit.y });
  unit.destroy();
});
