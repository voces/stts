import { farmVision, income, president, settings, spawnSetting, switchSetting, terrain } from "settings/settings";
import { setTerrain } from "settings/terrain";
import { frames } from "./frames";
import { onTerrainUpdatedViaCommand, onUpdateIntermission } from "./hooks";
import { getActivePlayerCount, getIdealDesiredSheep, getPubCount, toStringWithPrecision } from "./util";
import { adjustSheepTeamSize } from "teams/start";
import { smart as actualSmart } from "teams/smart";
import { FrameEx } from "handles/FrameEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { getTimes } from "stats/times";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { setTimeout } from "util/setTimeout";

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
  frames.settings.shrink.checked = udg_mapShrink;
  frames.settings.expand.checked = udg_mapExpand;

  updatePresidentHandicap();
  updateSwitchSettings();
};

const updateGold = () => {
  frames.settings.sheepGold.text = udg_sheepGold.toFixed(0);
  frames.settings.wolfGold.text = udg_wolfGold.toFixed(0);
  frames.settings.sheepIncome.text = income.sheep.toFixed(0);
  frames.settings.wolfIncome.text = income.wolves.toFixed(0);
  frames.settings.moneyFarmIncome.text = income.savings.toFixed(0);
};

const updateOther = () => {
  if (frames.settings.time.value !== udg_time / 60) frames.settings.time.value = udg_time / 60;
  frames.settings.spawn.value = spawnSetting.mode === "static" ? 0 : spawnSetting.mode === "free" ? 1 : 2;
  frames.settings.view.checked = udg_viewOn;
  frames.settings.farmVision.value = farmVision.vision === -1 ? 9 : farmVision.vision / 64;
  frames.settings.autoCancel.checked = autoCancelEnabled;
  frames.settings.allowShareControl.checked = udg_shareOn;
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
  const playerCount = getActivePlayerCount();
  if (previousPlayersCount === playerCount) {
    if (settings.desiredSheep >= playerCount) {
      settings.desiredSheep = playerCount - 1;
      frames.settings.desiredSheep.text = (playerCount - 1).toFixed(0);
    }
    return;
  } else {
    settings.desiredSheep = getIdealDesiredSheep();
    previousPlayersCount = playerCount;
  }
  frames.settings.desiredSheep.text = settings.desiredSheep.toFixed(0);
};

export const updatePlayers = () => {
  const playerCount = getActivePlayerCount();
  const sheep = settings.desiredSheep;
  const wolves = playerCount - sheep;
  const localIsHost = MapPlayerEx.fromLocal().isHost;

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (!frames.players[i]) continue;
    const p = MapPlayerEx.fromIndex(i)!;
    const {
      container,
      backdrop,
      team,
      teamBackdrop,
      disabledTeamBackdrop,
      sheepCount,
      handicap,
      pubMark,
      average,
      deathOrder,
    } = frames.players[i];

    team.enabled = p.isHere && localIsHost;

    if (!p.isHere) {
      container.alpha = 63;
      backdrop.alpha = 15;
    } else if (p.afk !== AFK_PLAYING) {
      container.alpha = 159;
      backdrop.alpha = 27;
    } else {
      container.alpha = 255;
      backdrop.alpha = 31;
    }

    const variant = p.isSheep ? "BTNSheep" : p.isWolf ? "BTNRaider" : "BTNWisp";
    [teamBackdrop, disabledTeamBackdrop].forEach((b) =>
      b.setTexture(`ReplaceableTextures/CommandButtons/${variant}.blp`)
    );

    sheepCount.text = p.sheepCount.toFixed(0);
    // sheepCount.enabled = enabled;

    handicap.text = (p.handicap * 100).toFixed(0) + "%";

    pubMark.visible = p.isPub;

    // handicap.enabled = enabled;

    const times = getTimes(i);
    const timeStat = times[`${sheep}v${wolves}`] ?? { total: 0, count: 0 };
    average.text = timeStat.count === 0 ? "-" : simpleformatTime(timeStat.total / timeStat.count, true);

    const deathStat = p.deathOrder[`${sheep}v${wolves}`] ?? { total: 0, count: 0 };
    deathOrder.text = deathStat.count === 0 ? "-" : toStringWithPrecision(deathStat.total / deathStat.count, 1);
  }
};

export const updateIntermission = () => {
  if (frames.intermissionFrames.length === 0) return;
  updateMode();
  updateGold();
  updateOther();
  updateDesiredSheep();
  updatePlayers();
  frames.settings.roundTab.enabled =
    frames.settings.goldTab.enabled =
    frames.settings.otherTab.enabled =
    frames.settings.switch.invul.enabled =
    frames.settings.switch.wolf.enabled =
    frames.settings.switch.spirits.enabled =
    frames.settings.switch.saves.enabled =
    frames.settings.switch.time.enabled =
    frames.settings.president.handicap.enabled =
    frames.settings.mode.enabled =
    frames.settings.terrain.select.enabled =
    frames.settings.shrink.enabled =
    frames.settings.expand.enabled =
    frames.settings.sheepGold.enabled =
    frames.settings.wolfGold.enabled =
    frames.settings.sheepIncome.enabled =
    frames.settings.wolfIncome.enabled =
    frames.settings.moneyFarmIncome.enabled =
    frames.settings.time.enabled =
    frames.settings.spawn.enabled =
    frames.settings.view.enabled =
    frames.settings.farmVision.enabled =
    frames.settings.autoCancel.enabled =
    frames.settings.allowShareControl.enabled =
    frames.settings.desiredSheep.enabled =
    frames.versus.enabled =
    frames.start.enabled =
    frames.smart.enabled =
    frames.practice.enabled =
    frames.end.enabled =
      MapPlayerEx.fromLocal().isHost;
};
onUpdateIntermission(updateIntermission);

export const adjustChatFrames = () => {
  if (frames.settings.container === undefined) return;

  if (frames.intermissionFrames[0].visible) {
    FrameEx.fromOrigin(ORIGIN_FRAME_CHAT_MSG).setPoint(
      FRAMEPOINT_RIGHT,
      frames.settings.container,
      FRAMEPOINT_LEFT,
      0,
      0,
    );
    FrameEx.fromOrigin(ORIGIN_FRAME_UNIT_MSG)
      .clearPoints()
      .setPoint(FRAMEPOINT_BOTTOMLEFT, frames.intermissionFrames[2], FRAMEPOINT_TOPLEFT, 0, 0)
      .setPoint(
        FRAMEPOINT_BOTTOMRIGHT,
        frames.intermissionFrames[2],
        FRAMEPOINT_TOPLEFT,
        BlzGetLocalClientWidth() / BlzGetLocalClientHeight() * 0.6 / 2 - 0.33,
        0,
      );
  } else {
    FrameEx.fromOrigin(ORIGIN_FRAME_CHAT_MSG).setPoint(
      FRAMEPOINT_RIGHT,
      // Technically this cuts it off a bit early, but that's fine
      FrameEx.fromOrigin(ORIGIN_FRAME_WORLD_FRAME),
      FRAMEPOINT_RIGHT,
      -0.05,
      0,
    );
    FrameEx.fromOrigin(ORIGIN_FRAME_UNIT_MSG)
      .clearPoints()
      .setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.25, 0.25)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.55, 0.25);
  }
};

let showingIntermission = false;

addScriptHook(W3TS_HOOK.MAIN_BEFORE, () => {
  FrameEx.fromOrigin(ORIGIN_FRAME_UNIT_MSG)
    .clearPoints()
    .setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.25, 0.25)
    .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.55, 0.25);

  setTimeout(1, () => {
    adjustChatFrames();

    if (showingIntermission) {
      const someVisible = ["EscMenuMainPanel", "QuestDialog", "AllianceDialog", "ChatDialog", "LogDialog"]
        .some((n) => FrameEx.fromName(n).visible);
      if (someVisible) hideIntermission(true);
      else showIntermission(true);
    }
  }, true);
});

export const showIntermission = (local = false) => {
  if (!local) showingIntermission = true;
  updateIntermission();
  if (frames.intermissionFrames[0].visible === true) return;
  for (const frame of frames.intermissionFrames) frame.visible = true;
  adjustChatFrames();
};

export const hideIntermission = (local = false) => {
  if (!local) showingIntermission = false;
  if (frames.intermissionFrames[0].visible === false) return;
  for (const frame of frames.intermissionFrames) frame.visible = false;
  frames.endConfirmation.visible = false;
  adjustChatFrames();
};

export const start = () => {
  adjustSheepTeamSize(settings.desiredSheep);
  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
};

export const smart = () => {
  actualSmart(settings.desiredSheep - Math.floor((getPubCount() + 1) / 2));
};
