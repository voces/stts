import {
  ITEM_TYPE_ID_GOBLINS,
  UNIT_TYPE_ID_CLOCKWERK,
  UNIT_TYPE_ID_FACTORY,
  UNIT_TYPE_ID_GYRO,
  UNIT_TYPE_ID_SAPPER,
} from "constants";
import { UnitEx } from "handles/UnitEx";
import { terrain } from "settings/terrain";
import { game } from "util/game";
import { angleBetweenPoints, distanceBetweenPoints, findRayRectangleIntersection } from "util/geometry";
import { setTimeout } from "util/setTimeout";
import { withUnitsOfType } from "util/withGroup";

game.onItemUsed(({ item, unit }) => {
  const owner = unit.owner;

  if (item.typeId !== ITEM_TYPE_ID_GOBLINS) return;

  const direction = Math.random() * Math.PI * 2;

  PlaySoundBJ(gg_snd_GyrocopterYesAttack1);

  withUnitsOfType(sheepType, (sheep) =>
    sheep.map((s) => {
      if (s.getAbility(FourCC("Aloc"))) return;

      const start = findRayRectangleIntersection(s, terrain.cameraBounds, direction + Math.PI);
      if (!start) return;

      const end = findRayRectangleIntersection(s, terrain.cameraBounds, direction);
      if (!end) return;

      const deployPoint = { x: s.x, y: s.y };
      const u = UnitEx.create(owner, UNIT_TYPE_ID_GYRO, start.x, start.y, direction * bj_RADTODEG);
      u.issueOrderAt("move", end.x, end.y);
      let deployed = false;
      let last = distanceBetweenPoints(u, deployPoint);
      const { cancel } = setTimeout(1, () => {
        if (u.currentOrder === 0 || !unit.isAlive()) {
          cancel();
          u.destroy();
        }
        if (deployed) return;
        const next = distanceBetweenPoints(u, deployPoint);
        if (next < last && next > 500) {
          last = next;
          return;
        }

        deployed = true;
        const sample = UnitEx.create(u.owner, UNIT_TYPE_ID_FACTORY, deployPoint.x, deployPoint.y);
        const buildPoint = { x: sample.x, y: sample.y };
        sample.destroy();
        const sapper = UnitEx.create(
          u.owner,
          UNIT_TYPE_ID_SAPPER,
          u.x,
          u.y,
          angleBetweenPoints(u, buildPoint) * bj_RADTODEG,
        );
        sapper.setPathing(true);
        BlzQueueBuildOrderById(sapper.handle, UNIT_TYPE_ID_FACTORY, buildPoint.x, buildPoint.y);
        BlzQueueImmediateOrderById(sapper.handle, 852041);
      }, true);
    }));
});

game.onConstructionFinish(({ unit }) => {
  if (unit.typeId !== UNIT_TYPE_ID_FACTORY) return;
  unit.applyTimedLife(FourCC("BTFL"), 30);
  const { cancel } = setTimeout(1, () => {
    if (!unit.isAlive()) {
      cancel();
      return;
    }
    const goblin = UnitEx.create(
      unit.owner,
      UNIT_TYPE_ID_CLOCKWERK,
      unit.x + Math.random() - 0.5,
      unit.y + Math.random() - 0.5,
    );
    goblin.applyTimedLife(FourCC("BTFL"), 10);
    goblin.setPathing(true);
    BlzQueueImmediateOrderById(goblin.handle, 852041);
  }, true);
});
