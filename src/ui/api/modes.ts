import { president, terrain } from "settings/settings";
import { setTerrain } from "settings/terrain";
import { frames } from "ui/frames";
import { onTerrainUpdatedViaCommand } from "ui/hooks";

export const enableVamp = () => {
  vampOn = false;
  DisableTrigger(gg_trg_sheepDies);
  DisableTrigger(gg_trg_spiritDies);
  DisableTrigger(gg_trg_sheepSwitch);
  EnableTrigger(gg_trg_sheepVamp);

  disableSwitch(false);
  president.enabled = false;
};

export const disableVamp = (direct = true) => {
  vampOn = false;
  DisableTrigger(gg_trg_sheepVamp);
  if (direct) {
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
  }
};

export const enableSwitch = () => {
  udg_switchOn = true;
  disableVamp(false);
  president.enabled = false;
  DisableTrigger(gg_trg_sheepDies);
  DisableTrigger(gg_trg_spiritDies);
  DisableTrigger(gg_trg_sheepVamp);
  EnableTrigger(gg_trg_sheepSwitch);

  udg_dummyWisps = frames.settings.switch.spirits.value;
  const savesFrameValue = frames.settings.switch.spirits.value;
  udg_wispPoints = savesFrameValue === 26 ? 0 : savesFrameValue;
};

export const disableSwitch = (direct = true) => {
  udg_switchOn = false;
  udg_dummyWisps = 0;
  udg_wispPoints = 0;
  DisableTrigger(gg_trg_sheepSwitch);
  if (direct) {
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
  }
};

export const enablePresident = () => {
  president.enabled = true;
  EnableTrigger(gg_trg_sheepDies);
  EnableTrigger(gg_trg_spiritDies);
  disableSwitch(false);
  disableVamp(false);
};

export const updateTerrain = (value?: number) => {
  if (typeof value === "number") setTerrain(value, true);
  else {
    value = terrain.index;
    frames.settings.terrain.select.value = terrain.index;
  }
  frames.settings.terrain.options.visible = value === 0;
};
onTerrainUpdatedViaCommand(updateTerrain);
