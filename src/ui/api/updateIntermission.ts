import { FrameEx } from "handles/FrameEx";
import { frames } from "../frames";
import { getActivePlayerCount, getIdealDesiredSheep, isScEven, precisionCompare, toStringWithPrecision } from "../util";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { GOLD_COLOR, RED_COLOR, WHITE_COLOR } from "../constants";
import { onUpdateIntermission } from "../hooks";
import { farmVision, income, president, settings, spawnSetting, switchSetting } from "settings/settings";
import { getTimes } from "stats/times";

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

export const updateMode = (value?: number) => {
  if (typeof value !== "number") {
    value = udg_switchOn ? 2 : vampOn ? 3 : president.enabled ? 1 : 0;
    frames.settings.mode.value = value;
  } else {
    president.enabled = value === 1;
    udg_switchOn = value === 2;
    vampOn = value === 3;
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

let previousPlayersCount = 0;
export const updateDesiredSheep = () => {
  const playerCount = getActivePlayerCount();
  if (previousPlayersCount === playerCount) {
    if (settings.desiredSheep >= playerCount) {
      settings.desiredSheep = Math.max(playerCount - 1, 1);
      frames.settings.desiredSheep.text = (playerCount - 1).toFixed(0);
      return;
    }
  } else {
    settings.desiredSheep = getIdealDesiredSheep();
    previousPlayersCount = playerCount;
  }
  const stringified = settings.desiredSheep.toFixed(0);
  if (frames.settings.desiredSheep.text !== stringified) frames.settings.desiredSheep.text = stringified;
};

export const updatePlayers = () => {
  const playerCount = getActivePlayerCount();
  const sheep = settings.desiredSheep;
  const wolves = playerCount - sheep;
  const localIsHost = MapPlayerEx.fromLocal().isHost;

  let bestAverage: { players: FrameEx[]; average: number } = { players: [], average: -1 };
  let bestDO: { players: FrameEx[]; do: number } = { players: [], do: 25 };

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (!frames.players[i]) continue;
    const p = MapPlayerEx.fromIndex(i)!;
    const {
      container,
      backdrop,
      team,
      teamBackdrop,
      disabledTeamBackdrop,
      name,
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

    name.text = p.coloredName.split(" (")[0] + "|r";

    const variant = p.isSheep ? "BTNSheep" : p.isWolf ? "BTNRaider" : "BTNWisp";
    [teamBackdrop, disabledTeamBackdrop].forEach((b) =>
      b.setTexture(`ReplaceableTextures/CommandButtons/${variant}.blp`)
    );

    sheepCount.text = p.sheepCount.toFixed(0);

    handicap.text = (p.handicap * 100).toFixed(0) + "%";

    pubMark.visible = p.isPub;

    const times = getTimes(i);
    const timeStat = times[`${sheep}v${wolves}`] ?? { total: 0, count: 0 };
    average.text = timeStat.count === 0 ? "-" : simpleformatTime(timeStat.total / timeStat.count, true);
    if (timeStat.count > 0) {
      const avg = timeStat.total / timeStat.count;
      average.text = timeStat.count === 0 ? "-" : simpleformatTime(avg, true);
      const compare = precisionCompare(avg, bestAverage.average);
      if (compare === "greater") {
        for (const before of bestAverage.players) before.setTextColor(WHITE_COLOR);
        bestAverage = { players: [average], average: avg };
        average.setTextColor(GOLD_COLOR);
      } else if (compare === "equal") {
        bestAverage.players.push(average);
        average.setTextColor(GOLD_COLOR);
      } else average.setTextColor(WHITE_COLOR);
    } else {
      average.text = "-";
      average.setTextColor(WHITE_COLOR);
    }

    const doStart = p.deathOrder[`${sheep}v${wolves}`] ?? { total: 0, count: 0 };
    if (doStart.count > 0) {
      const avg = doStart.total / doStart.count;
      deathOrder.text = toStringWithPrecision(avg, 1);
      const compare = precisionCompare(avg, bestDO.do);
      if (compare === "less") {
        for (const before of bestDO.players) before.setTextColor(WHITE_COLOR);
        bestDO = { players: [deathOrder], do: avg };
        deathOrder.setTextColor(GOLD_COLOR);
      } else if (compare === "equal") {
        bestDO.players.push(deathOrder);
        deathOrder.setTextColor(GOLD_COLOR);
      } else deathOrder.setTextColor(WHITE_COLOR);
    } else {
      deathOrder.text = "-";
      deathOrder.setTextColor(WHITE_COLOR);
    }
  }
};

let quitCopy = "";
let confirmExitCopy = "";
export const updateScButtons = () => {
  const scEven = isScEven();
  frames.end.button.getChild(4).setTextColor(scEven ? GOLD_COLOR : RED_COLOR);
  frames.end.title.setTextColor(scEven ? WHITE_COLOR : RED_COLOR)
    .setText(scEven ? "End game?" : "End game with uneven sheep counts?");
  frames.end.confirmEnd.getChild(4).setTextColor(scEven ? GOLD_COLOR : RED_COLOR);
  FrameEx.fromName("EndGameButtonText").setTextColor(scEven ? GOLD_COLOR : RED_COLOR);
  const quitFrame = FrameEx.fromName("QuitButtonText");
  if (quitCopy === "") quitCopy = quitFrame.text;
  FrameEx.fromName("QuitButtonText").setTextColor(scEven ? GOLD_COLOR : RED_COLOR);
  quitFrame.setTextColor(scEven ? GOLD_COLOR : RED_COLOR).setText(
    scEven ? quitCopy : "Quit Mission (uneven sheep count)",
  );
  FrameEx.fromName("ConfirmQuitTitleText").setTextColor(scEven ? GOLD_COLOR : RED_COLOR);
  FrameEx.fromName("ConfirmQuitQuitButtonText").setTextColor(scEven ? GOLD_COLOR : RED_COLOR);
  const confirmExitFrame = FrameEx.fromName("ConfirmQuitMessageText", 0);
  if (confirmExitCopy === "") confirmExitCopy = confirmExitFrame.text;
  confirmExitFrame.setTextColor(scEven ? GOLD_COLOR : RED_COLOR).setText(
    scEven ? confirmExitCopy : "Are you sure you want to exit with uneven sheep counts?",
  );
};

const updateVersusButtons = () => {
  frames.versus.text = udg_versus > 0 ? "Cont. (|cffffffffV|r)" : "|cffffffffV|rersus";
  frames.start.getChild(4).setTextColor(udg_versus > 0 ? RED_COLOR : GOLD_COLOR);
  frames.smart.getChild(4).setTextColor(udg_versus > 0 ? RED_COLOR : GOLD_COLOR);
};

export const updateIntermission = () => {
  if (frames.intermissionFrames.length === 0) return;
  updateMode();
  updateGold();
  updateOther();
  updateDesiredSheep();
  updatePlayers();
  updateScButtons();
  updateVersusButtons();

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
    frames.end.button.enabled =
    frames.end.confirmEnd.enabled =
    frames.end.confirmCancel.enabled =
      MapPlayerEx.fromLocal().isHost;
};
onUpdateIntermission(updateIntermission);
