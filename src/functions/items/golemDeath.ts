import { game } from "util/game";

game.onUnitDeath(({ dyingUnit }) => {
  if (dyingUnit.isIllusion()) return;
  for (let i = 0; i < dyingUnit.inventorySize; i++) dyingUnit.removeItemFromSlot(i);
});
