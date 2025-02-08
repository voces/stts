import { settings } from "settings/settings";
import { getActivePlayerCount } from "ui/util";

export const defaultGold = () => {
  const sheep = settings.desiredSheep;
  const wolves = getActivePlayerCount() - sheep;

  const ratio = (wolves / sheep) ** 1.25;

  return Math.round(50 * ratio);
};

export const defaultIncome = () => {
  const sheep = settings.desiredSheep;
  const wolves = getActivePlayerCount() - sheep;

  const ratio = (wolves / sheep) ** 1.25;

  return Math.round(20 * ratio) / 10;
};
