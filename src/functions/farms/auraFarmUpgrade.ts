import {
  ABILITY_TYPE_ID_ARMOR_AURA,
  ABILITY_TYPE_ID_MANA_AURA,
  ABILITY_TYPE_ID_REGEN_AURA,
  ABILITY_TYPE_ID_SPEED_AURA,
  ABILITY_TYPE_ID_UPGRADED_ARMOR_AURA,
  ABILITY_TYPE_ID_UPGRADED_MANA_AURA,
  ABILITY_TYPE_ID_UPGRADED_REGEN_AURA,
  ABILITY_TYPE_ID_UPGRADED_SPEED_AURA,
  RESEARCH_TYPE_ID_UPGRADE_AURAS,
  UNIT_TYPE_ID_AURA_FARM,
} from "constants";
import { ForceEx } from "handles/ForceEx";
import { UnitEx } from "handles/UnitEx";
import { game } from "util/game";
import { onRoundInit } from "util/gameHooks";
import { withUnitsOfType } from "util/withGroup";
import { Trigger } from "w3ts";

let sheepResearched = false;
let wolvesResearched = false;

let newUnitTrigger: Trigger | undefined = undefined;

const upgradeAuras = (u: UnitEx) => {
  u.removeAbility(ABILITY_TYPE_ID_ARMOR_AURA);
  u.removeAbility(ABILITY_TYPE_ID_SPEED_AURA);
  u.removeAbility(ABILITY_TYPE_ID_MANA_AURA);
  u.removeAbility(ABILITY_TYPE_ID_REGEN_AURA);

  u.addAbility(ABILITY_TYPE_ID_UPGRADED_ARMOR_AURA);
  u.addAbility(ABILITY_TYPE_ID_UPGRADED_SPEED_AURA);
  u.addAbility(ABILITY_TYPE_ID_UPGRADED_MANA_AURA);
  u.addAbility(ABILITY_TYPE_ID_UPGRADED_REGEN_AURA);
};

game.onResearch(({ researchId, player }) => {
  if (researchId !== RESEARCH_TYPE_ID_UPGRADE_AURAS) return;

  if (player.isWolf) {
    ForceEx.wolves.for((p) => p.setTechResearched(RESEARCH_TYPE_ID_UPGRADE_AURAS, 1));
    wolvesResearched = true;
  } else {
    ForceEx.sheep.for((p) => p.setTechResearched(RESEARCH_TYPE_ID_UPGRADE_AURAS, 1));
    ForceEx.wisps.for((p) => p.setTechResearched(RESEARCH_TYPE_ID_UPGRADE_AURAS, 1));
    sheepResearched = true;
  }

  if (newUnitTrigger) newUnitTrigger.enabled = true;

  withUnitsOfType(
    UNIT_TYPE_ID_AURA_FARM,
    (auras) => auras.forEach((aura) => aura.isAlly(player) ? upgradeAuras(aura) : null),
  );
});

game.onNewUnit(({ newUnit }) => {
  if (newUnit.typeId !== UNIT_TYPE_ID_AURA_FARM) return;

  const owner = newUnit.owner;
  if (owner.isWolf ? !wolvesResearched : !sheepResearched) {
    if (owner.isWolf ? !sheepResearched : !wolvesResearched) {
      newUnitTrigger = Trigger.fromEvent()!;
      newUnitTrigger.enabled = false;
    }
    return;
  }

  upgradeAuras(newUnit);
});

onRoundInit(() => {
  sheepResearched = false;
  wolvesResearched = false;
  ForceEx.all.for((p) => p.setTechResearched(RESEARCH_TYPE_ID_UPGRADE_AURAS, 0));
  if (newUnitTrigger) newUnitTrigger.enabled = false;
});
