import { Effect, MapPlayer, Trigger } from "w3ts";
import { UNIT_TYPE_ID_FEINTING_TOWER } from "constants";
import { UnitEx } from "handles/UnitEx";
import { game } from "util/game";
import { setTimeout } from "util/setTimeout";
import { withUnitsInRange } from "util/withGroup";
import { MapPlayerEx } from "handles/MapPlayerEx";

const feintingTowers = new Set<UnitEx>();
let ticker: Trigger;
const location = Location(0, 0);

game.onInterval(4, () => {
  if (feintingTowers.size === 0) {
    if (!ticker) ticker = Trigger.fromEvent()!;
    ticker.enabled = false;
    return;
  }

  for (const tower of feintingTowers) {
    if (!tower.isAlive) {
      feintingTowers.delete(tower);
      continue;
    }

    let madeSpawnEffect = false;

    withUnitsInRange(tower.x, tower.y, 1000, (units) =>
      units.forEach((u) => {
        if (
          u.moveSpeed === 0 || !u.isAlive() || u.isIllusion() || !tower.isAlly(u.owner) || !u.isAlly(tower.owner) ||
          u.getAbility(FourCC("Aloc"))
        ) return;

        if (!madeSpawnEffect) {
          madeSpawnEffect = true;
          const e = Effect.create("Abilities/Spells/Undead/DeathPact/DeathPactTarget", tower.x, tower.y);
          if (e) {
            MoveLocation(location, tower.x, tower.y);
            e.z = GetLocationZ(location) + 175;
            setTimeout(2, () => e.destroy());
          }
        }

        // Clone unit
        const clone = UnitEx.create(MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE)!, u.typeId, u.x, u.y, u.facing)!;
        clone.color = u.owner.color;
        clone.life = u.life;
        clone.mana = u.mana;
        clone.setBaseDamage(-500, 0);
        clone.setBaseDamage(-500, 1);
        if (u.owner.compareAlliance(MapPlayerEx.fromLocal(), ALLIANCE_SHARED_VISION)) {
          clone.setVertexColor(127, 255, 127, 127);
        }

        // Make unselectable and not impact pathing, but will follow pathing after 0.1 seconds
        clone.addAbility(FourCC("Aloc"));
        setTimeout(0.1, () => clone.setPathing(true));
        clone.x = u.x;
        clone.y = u.y;

        // Move chaotically
        const direction = clone.facing * bj_DEGTORAD;
        clone.issueOrderAt("patrol", clone.x + 600 * Math.cos(direction), clone.y + 600 * Math.sin(direction));
        for (let i = Math.random() * 3; i < 5; i += Math.random() * 2) {
          setTimeout(i, () => {
            const direction = Math.random() * Math.PI * 2;
            clone.issueOrderAt("patrol", clone.x + 600 * Math.cos(direction), clone.y + 600 * Math.sin(direction));
          });
        }

        // Remove after 5 seconds
        setTimeout(5, () => {
          if (!clone.isAlive()) {
            return;
          }

          DisableTrigger(gg_trg_castAbilityIssueOrder);
          clone.destroy();
          setTimeout(0.01, () => EnableTrigger(gg_trg_castAbilityIssueOrder));

          const e = Effect.create("Abilities/Spells/Human/Feedback/ArcaneTowerAttack", clone.x, clone.y);
          if (e) {
            MoveLocation(location, clone.x, clone.y);
            e.z = GetLocationZ(location) + 40;
            setTimeout(2, () => e.destroy());
          }
        });
      }));
  }
});

game.onUpgradeFinish(({ unit }) => {
  if (unit.typeId !== UNIT_TYPE_ID_FEINTING_TOWER) return;
  feintingTowers.add(unit);
  if (feintingTowers.size === 1) ticker.enabled = true;
});
