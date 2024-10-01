import { income, president, switchSetting, terrain } from "settings/settings";
import { setTerrain } from "settings/terrain";
import { frames } from "./frames";
import { onTerrainUpdatedViaCommand, onUpdateIntermission } from "./hooks";
import { getInHouseCount, parseDesiredSheep } from "./util";
import { adjustSheepTeamSize } from "teams/start";
import { smart as actualSmart } from "teams/smart";
import { FrameEx } from "handles/FrameEx";

const updatePresidentHandicap = () => {
  frames.settings.president.handicap.text = (president.handicap * 100).toFixed(0);
};

const updateSwitchSettings = () => {
  frames.settings.switch.invul.value = udg_sheepInvul;
  frames.settings.switch.wolf.value = udg_wolfSpawn;
  frames.settings.switch.spirits.value = udg_dummyWisps;
  frames.settings.switch.saves.value = udg_wispPoints === 0 ? 26 : udg_wispPoints;
  frames.settings.switch.time.value = switchSetting.goalTime === Infinity ? 21 : (switchSetting.goalTime / 30);
};

const enableVamp = () => {
  vampOn = false;
  DisableTrigger(gg_trg_sheepDies);
  DisableTrigger(gg_trg_spiritDies);
  DisableTrigger(gg_trg_sheepSwitch);
  EnableTrigger(gg_trg_sheepVamp);

  disableSwitch(false);
  president.enabled = false;
};

const disableVamp = (direct = true) => {
  vampOn = false;
  DisableTrigger(gg_trg_sheepVamp);
  if (direct) {
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
  }
};

const enableSwitch = () => {
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

const disableSwitch = (direct = true) => {
  udg_switchOn = false;
  udg_dummyWisps = 0;
  udg_wispPoints = 0;
  DisableTrigger(gg_trg_sheepSwitch);
  if (direct) {
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
  }
};

const enablePresident = () => {
  president.enabled = true;
  EnableTrigger(gg_trg_sheepDies);
  EnableTrigger(gg_trg_spiritDies);
  disableSwitch(false);
  disableVamp(false);
};

export const updateMode = (value?: number) => {
  if (typeof value !== "number") {
    value = udg_switchOn ? 2 : vampOn ? 3 : president.enabled ? 1 : 0;
    frames.settings.mode.value = value;
  } else {
    if (value === 0) {
      if (udg_switchOn) disableSwitch();
      if (vampOn) disableVamp();
      president.enabled = false;
    } else if (value === 1) enablePresident();
    else if (value === 2) enableSwitch();
    else enableVamp();
  }

  frames.settings.president.container.visible = value === 1;
  frames.settings.switch.container.visible = value === 2;
  const relative = value === 1
    ? frames.settings.president.handicapLabel
    : value === 2
    ? frames.settings.switch.timeLabel
    : frames.settings.modeLabel;
  frames.settings.terrain.label.setPoint(FRAMEPOINT_TOPLEFT, relative, FRAMEPOINT_BOTTOMLEFT, 0, -0.014);

  updatePresidentHandicap();
  updateSwitchSettings();
};

const updateGold = () => {
  BJDebugMsg("updateGold");
  frames.settings.sheepGold.text = udg_sheepGold.toFixed(0);
  frames.settings.wolfGold.text = udg_wolfGold.toFixed(0);
  frames.settings.sheepIncome.text = income.sheep.toFixed(0);
  frames.settings.wolfIncome.text = income.wolves.toFixed(0);
  frames.settings.moneyFarmIncome.text = income.savings.toFixed(0);
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

let previousPlayersCount = 0;

export const updateDesiredSheep = () => {
  const inHouseCount = getInHouseCount();
  const current = parseDesiredSheep(frames.settings.desiredSheep.text, false);
  if (previousPlayersCount === inHouseCount && current !== 0) {
    if (current >= inHouseCount) {
      frames.settings.desiredSheep.text = (inHouseCount - 1).toFixed(0);
    }
    return;
  }
  previousPlayersCount = inHouseCount;
  frames.settings.desiredSheep.text = (Math.floor(previousPlayersCount / 2 - 1)).toFixed(0);
};

export const updateIntermission = () => {
  BJDebugMsg("updateIntermission");
  if (frames.intermissionFrames.length === 0) return;
  updateMode();
  updateGold();
  updateDesiredSheep();
};
onUpdateIntermission(updateIntermission);

export const showIntermission = () => {
  BJDebugMsg("showIntermission");
  updateIntermission();
  for (const frame of frames.intermissionFrames) frame.visible = true;

  if (frames.settings.container !== undefined) {
    FrameEx.fromOrigin(ORIGIN_FRAME_CHAT_MSG).setPoint(
      FRAMEPOINT_RIGHT,
      frames.settings.container,
      FRAMEPOINT_LEFT,
      0,
      0,
    );
  }
};

export const hideIntermission = () => {
  for (const frame of frames.intermissionFrames) frame.visible = false;
  FrameEx.fromOrigin(ORIGIN_FRAME_CHAT_MSG).setPoint(
    FRAMEPOINT_RIGHT,
    // Technically this cuts it off a bit early, but that's fine
    FrameEx.fromOrigin(ORIGIN_FRAME_WORLD_FRAME),
    FRAMEPOINT_RIGHT,
    -0.05,
    0,
  );
};

export const start = () => {
  const desiredSheep = parseDesiredSheep(frames.settings.desiredSheep.text);
  adjustSheepTeamSize(desiredSheep);
  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
  hideIntermission();
};

export const smart = () => {
  actualSmart();
  hideIntermission();
};
