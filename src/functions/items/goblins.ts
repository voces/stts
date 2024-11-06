import {
  ABILITY_TYPE_ID_GOBLINS,
  UNIT_TYPE_ID_CLOCKWERK,
  UNIT_TYPE_ID_FACTORY,
  UNIT_TYPE_ID_GYRO,
  UNIT_TYPE_ID_SAPPER,
} from "constants";
import { GroupEx } from "handles/GroupEx";
import { UnitEx } from "handles/UnitEx";
import { terrain } from "settings/settings";
import { game } from "util/game";
import { angleBetweenPoints, distanceBetweenPoints, findRayRectangleIntersection } from "util/geometry";
import { setTimeout } from "util/setTimeout";
import { withUnitsOfType } from "util/withGroup";

const dropDistance = 400;
const minSpeed = 21;
const topLoadedSpeed = 30;
const topUnloadedSpeed = 35;
const deaccelerationWindow = 2500;
const accelerationWindow = 1500;
const waveCount = 4;
const waveSize = 5;
const waveFrequency = 4;
const refund = 150;

const refunds = new WeakMap<UnitEx, number>();

game.onSpell(({ spellId, unit, x, y }) => {
  if (spellId !== ABILITY_TYPE_ID_GOBLINS) return;

  const owner = unit.owner;
  const direction = x === unit.x ? GetRandomReal(0, Math.PI * 2) : Math.atan2(y - unit.y, x - unit.x);

  PlaySoundBJ(gg_snd_GyrocopterYesAttack1);

  withUnitsOfType(sheepType, (sheep) => {
    const count = sheep.size;
    sheep.forEach((s) => {
      if (s.isIllusion()) return;

      const start = findRayRectangleIntersection(s, terrain.cameraBounds, direction + Math.PI);
      if (!start) return;

      const end = findRayRectangleIntersection(s, terrain.cameraBounds, direction);
      if (!end) return;

      const deployPoint = { x: s.x, y: s.y };
      let target = deployPoint;
      const u = UnitEx.create(owner, UNIT_TYPE_ID_GYRO, start.x, start.y, direction * bj_RADTODEG);
      u.issueOrderAt("move", end.x, end.y);
      let deployed = false;
      let steps = 0;
      let dropPoint = { x: 0, y: 0 };
      const { cancel } = setTimeout(0.03, () => {
        steps++;
        if (!unit.isAlive()) {
          cancel();
          u.destroy();
          return;
        }

        const distanceToTarget = distanceBetweenPoints(u, target);
        if (target === end && distanceToTarget < 50) {
          cancel();
          u.destroy();
          return;
        }

        let speed = topUnloadedSpeed;
        if (target === deployPoint) {
          if (distanceToTarget < deaccelerationWindow + dropDistance) {
            speed = minSpeed +
              (topLoadedSpeed - minSpeed) * (distanceToTarget - dropDistance) / deaccelerationWindow;
          }
        } else {
          const distanceFromDropPoint = distanceBetweenPoints(u, dropPoint);
          speed = distanceFromDropPoint < accelerationWindow
            ? minSpeed + (topUnloadedSpeed - minSpeed) * distanceFromDropPoint / accelerationWindow
            : topUnloadedSpeed;
        }
        const angle = Math.atan2(target.y - u.y, target.x - u.x);
        u.setPosition(u.x + speed * Math.cos(angle), u.y + speed * Math.sin(angle));
        BlzSetUnitFacingEx(u.handle, angle * bj_RADTODEG);

        if (deployed || (steps % 33 === 0)) return;

        if (distanceToTarget > dropDistance) return;

        deployed = true;
        const sample = UnitEx.create(u.owner, UNIT_TYPE_ID_FACTORY, deployPoint.x, deployPoint.y);
        const buildPoint = { x: sample.x, y: sample.y };
        sample.destroy();
        dropPoint = { x: u.x, y: u.y };
        const sapper = UnitEx.create(
          u.owner,
          UNIT_TYPE_ID_SAPPER,
          u.x,
          u.y,
          angleBetweenPoints(u, buildPoint) * bj_RADTODEG,
        );
        sapper.setAnimation("birth");
        sapper.setPathing(true);
        refunds.set(sapper, Math.round(refund / count));

        BlzQueueBuildOrderById(sapper.handle, UNIT_TYPE_ID_FACTORY, buildPoint.x, buildPoint.y);
        BlzQueueImmediateOrderById(sapper.handle, 852041);
        target = end;
      }, true);
    });
  });
});

game.onConstructionStart(({ unit }) => {
  if (unit.typeId !== UNIT_TYPE_ID_FACTORY) return;
  const group = GroupEx.create();
  const x = unit.x;
  const y = unit.y;
  group.enumUnitsOfTypeCounted(
    UnitId2String(UNIT_TYPE_ID_SAPPER)!,
    () => {
      const u = UnitEx.fromFilter()!;
      return (x - u.x) ** 2 + (y - u.y) ** 2 < 62500; // 250
    },
    1,
  );
  const sapper = group.first;
  if (sapper) {
    const sapperRecovery = refunds.get(sapper)!;
    if (typeof sapperRecovery === "number") {
      refunds.set(unit, sapperRecovery);
      unit.onDamaged(() => {
        TriggerSleepAction(0);
        refunds.set(unit, sapperRecovery * unit.life / unit.maxLife);
      });
    }
  }
});

game.onConstructionFinish(({ unit }) => {
  if (unit.typeId !== UNIT_TYPE_ID_FACTORY) return;
  unit.applyTimedLife(FourCC("BTFL"), (waveCount - 1) * waveFrequency + 0.125);

  unit.onDeath(({ killingUnit }) => {
    if (killingUnit) return;
    const gold = refunds.get(unit);
    if (typeof gold === "number") unit.owner.gold += gold;
  });

  const spawnWave = () => {
    for (let i = 0; i < waveSize; i++) {
      const goblin = UnitEx.create(
        unit.owner,
        UNIT_TYPE_ID_CLOCKWERK,
        unit.x + 160 * (Math.random() - 0.5),
        unit.y + 160 * (Math.random() - 0.5),
      );
      goblin.setAnimation("birth");
      goblin.applyTimedLife(FourCC("BTFL"), 10);
      goblin.setPathing(true);
      BlzQueueImmediateOrderById(goblin.handle, 852041);
    }
  };
  const { cancel } = setTimeout(waveFrequency, () => {
    if (!unit.isAlive()) return cancel();
    spawnWave();
  }, true);
  spawnWave();
});
