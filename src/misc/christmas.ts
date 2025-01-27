import {
  ABILITY_TYPE_ID_SNOWBALL_BUFF,
  ABILITY_TYPE_ID_SNOWBALL_DEBUFF_3,
  ABILITY_TYPE_ID_SNOWBALL_DEBUFF_5,
  ABILITY_TYPE_ID_SNOWBALL_DEBUFF_8,
  ABILITY_TYPE_ID_SNOWBALL_THROW,
  BUFF_TYPE_ID_SNOWBALL,
  UNIT_TYPE_ID_GOLEM,
  UNIT_TYPE_ID_HARD_FARM,
  UNIT_TYPE_ID_INVIS_HARD_FARM,
  UNIT_TYPE_ID_INVIS_WIDE_FARM,
  UNIT_TYPE_ID_SNOWBALL,
  UNIT_TYPE_ID_SNOWMAN,
  UNIT_TYPE_ID_WIDE_FARM,
} from "constants";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { UnitEx } from "handles/UnitEx";
import { game } from "util/game";
import { distanceBetweenPoints } from "util/geometry";
import { getTerrainZ } from "util/getTerrainZ";
import { setTimeout } from "util/setTimeout";
import { withDummy } from "util/withDummy";
import { withUnitsInRange } from "util/withGroup";
import { Effect } from "w3ts";

const SNOWBALLS = {
  3: ABILITY_TYPE_ID_SNOWBALL_DEBUFF_3,
  5: ABILITY_TYPE_ID_SNOWBALL_DEBUFF_5,
  8: ABILITY_TYPE_ID_SNOWBALL_DEBUFF_8,
};

const launchSnowball = (
  source: { unit: UnitEx; x: number; y: number; z: number },
  target: { x: number; y: number },
  { speed = 30, arc = 0.4, duration = 3 }: { speed?: number; arc?: number; duration?: 3 | 5 | 8 } = {},
) => {
  const projectileSnowball = Effect.create("christmas/snowball", source.x, source.y);
  if (!projectileSnowball) return;

  projectileSnowball.scale = 1;
  projectileSnowball.z = source.z;

  SetSoundPosition(gg_snd_FrostBoltLaunch1, source.x, source.y, source.z);
  StartSound(gg_snd_FrostBoltLaunch1);

  const zTarget = getTerrainZ(target.x, target.y) + 25;
  const distance = Math.sqrt((target.x - source.x) ** 2 + (target.y - source.y) ** 2);

  let px = source.x;
  let py = source.y;
  let pz = source.z;

  let traveled = 0;
  const timeout = setTimeout(0.02, () => {
    traveled += speed;
    if (traveled > distance || !source.unit.isAlive()) {
      projectileSnowball.destroy();
      timeout.cancel();
      if (traveled > distance) {
        UnitEx.create(MapPlayerEx.neutralAggressive, UNIT_TYPE_ID_SNOWBALL, target.x, target.y, bj_UNIT_FACING)
          .applyTimedLife(FourCC("BTFL"), 30);
      }
      return;
    }
    const p = traveled / distance;
    px = source.x * (1 - p) + target.x * p;
    py = source.y * (1 - p) + target.y * p;
    pz = source.z * (1 - p) + zTarget * p + distance * (arc * p * (1 - p));
    projectileSnowball.x = px;
    projectileSnowball.y = py;
    projectileSnowball.z = pz;
    projectileSnowball.scale = 1 * (1 - p) + 1.5 * p;
    const hit = withUnitsInRange(px, py, 112, (g) =>
      g.toArray().find((u) => {
        const typeId = u.typeId;
        if ((!unitDimensions[typeId] && !u.isUnitType(UNIT_TYPE_STRUCTURE)) || u === source.unit) return false;
        const dimensions = unitDimensions[typeId] ?? { height: 64, width: 64 };
        return distanceBetweenPoints(u, { x: px, y: py }) < dimensions.width &&
          pz - getTerrainZ(u.x, u.y) - 50 < dimensions.height;
      }));
    if (hit) {
      projectileSnowball.destroy();
      timeout.cancel();
      SetSoundPosition(gg_snd_FrostBoltHit1, px, py, pz);
      StartSound(gg_snd_FrostBoltHit1);
      withDummy(
        (dummy) => {
          dummy.addAbility(SNOWBALLS[duration]);
          dummy.issueTargetOrder("frostnova", hit);
        },
        hit.x,
        hit.y,
        source.unit.owner,
      );
    }
  }, true);
};

game.onAttack((e) => {
  if (e.attacker.typeId === UNIT_TYPE_ID_SNOWMAN) {
    const facing = e.attacker.facing * bj_DEGTORAD;
    const x = e.attacker.x - 60 * Math.cos(facing + Math.PI / 2);
    const y = e.attacker.y + 60 * Math.sin(facing + Math.PI / 2);
    // TODO: project ahead of target
    launchSnowball(
      { unit: e.attacker, x, y, z: getTerrainZ(x, y) + 160 },
      { x: e.target.x, y: e.target.y },
      { speed: 18, arc: 1 },
    );
  }

  if (e.target.typeId === UNIT_TYPE_ID_SNOWBALL) {
    e.target.destroy();
    withDummy(
      (dummy) => {
        dummy.addAbility(ABILITY_TYPE_ID_SNOWBALL_BUFF);
        dummy.issueTargetOrder("unholyfrenzy", e.attacker);
      },
      e.attacker.x,
      e.attacker.y,
      e.attacker.owner,
    );
    if (e.attacker.typeId === shepType || e.attacker.typeId === UNIT_TYPE_ID_GOLEM) {
      e.attacker.addAbility(ABILITY_TYPE_ID_SNOWBALL_THROW);
    }
  }
});

// Sheep bite
game.onDamage((e) => {
  if (
    e.attacker?.hasBuff(BUFF_TYPE_ID_SNOWBALL) && e.attacker.typeId === sheepType &&
    [sheepType, shepType, UNIT_TYPE_ID_GOLEM].includes(e.target.typeId)
  ) {
    e.attacker.removeAbility(BUFF_TYPE_ID_SNOWBALL);
    withDummy(
      (dummy) => {
        dummy.addAbility(ABILITY_TYPE_ID_SNOWBALL_DEBUFF_8);
        dummy.issueTargetOrder("frostnova", e.target);
      },
      e.target.x,
      e.target.y,
      e.attacker.owner,
    );
  }
});

const unitDimensions = {
  [sheepType]: { height: 48, width: 64 },
  [shepType]: { height: 112, width: 84 },
  [UNIT_TYPE_ID_GOLEM]: { height: 128, width: 72 },
  [UNIT_TYPE_ID_HARD_FARM]: { height: 112, width: 112 },
  [UNIT_TYPE_ID_INVIS_HARD_FARM]: { height: 112, width: 112 },
  [UNIT_TYPE_ID_WIDE_FARM]: { height: 84, width: 84 },
  [UNIT_TYPE_ID_INVIS_WIDE_FARM]: { height: 84, width: 84 },
};

// Wolf or golem throw
game.onSpell(({ spellId, unit, target, x, y }) => {
  if (spellId !== ABILITY_TYPE_ID_SNOWBALL_THROW) return;
  unit.removeAbility(ABILITY_TYPE_ID_SNOWBALL_THROW);
  unit.removeAbility(BUFF_TYPE_ID_SNOWBALL);

  const facing = unit.facing * bj_DEGTORAD;
  const x2 = unit.x + 60 * Math.cos(facing + Math.PI / 2);
  const y2 = unit.y + 60 * Math.sin(facing + Math.PI / 2);
  // TODO: project ahead of target unit
  launchSnowball(
    { unit: unit, x: x2, y: y2, z: getTerrainZ(x, y) + 160 },
    { x: target?.x ?? x, y: target?.y ?? y },
    { duration: 5 },
  );
});
