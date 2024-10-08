import { terrain } from "settings/settings";
import { setTerrain } from "settings/terrain";
import { frames } from "ui/frames";
import { onTerrainUpdatedViaCommand } from "ui/hooks";

export const updateTerrain = (value?: number) => {
  if (typeof value === "number") setTerrain(value, true);
  else {
    value = terrain.index;
    frames.settings.terrain.select.value = terrain.index;
  }
  frames.settings.terrain.options.visible = value === 0;
};
onTerrainUpdatedViaCommand(updateTerrain);
