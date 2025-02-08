import { setTerrain } from "settings/terrain";
import { income, settings, terrain } from "settings/settings";
import { bulldog } from "./settings";
import { setBulldogMap } from "./maps";
import { getIdealDesiredSheep } from "ui/util";
import { defaultGold, defaultIncome } from "./defaults";
import { triggerIntermissionUpdate } from "ui/hooks";

export const enableBulldog = (katma: boolean) => {
  bulldog.katma = katma;

  if (bulldog.enabled) return;
  bulldog.enabled = true;

  defaultTime();
  settings.desiredSheep = getIdealDesiredSheep();

  udg_sheepGold = defaultGold();
  udg_wolfGold = 0;

  income.sheep = defaultIncome();
  income.wolves = 2;
  income.savings = income.sheep * 3;

  triggerIntermissionUpdate();

  setBulldogMap(bulldog.map);
};

export const disableBulldog = () => {
  if (!bulldog.enabled) return;
  bulldog.enabled = false;

  defaultTime();
  settings.desiredSheep = getIdealDesiredSheep();

  udg_sheepGold = 0;
  udg_wolfGold = 0;

  income.sheep = 1;
  income.wolves = 1;
  income.savings = 1;

  triggerIntermissionUpdate();

  setTerrain(terrain.index);
};
