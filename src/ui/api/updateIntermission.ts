import { FrameEx } from "handles/FrameEx";
import { frames } from "../frames";
import { getActivePlayerCount, getIdealDesiredSheep, isScEven, precisionCompare, toStringWithPrecision } from "../util";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { GOLD_COLOR, RED_COLOR, WHITE_COLOR } from "../constants";
import { onUpdateIntermission } from "../hooks";
import { farmVision, income, president, settings, spawnSetting, switchSetting, terrain } from "settings/settings";
import { getTimes, Round, rounds } from "stats/times";
import { ui } from "ui/data";
import { updateLeaderboardSettingsDisplay } from "settings/time";
import { bulldog } from "bulldog/settings";
import { disableBulldog, enableBulldog } from "bulldog/setup";

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

const updateTime = () => {
  frames.settings.time.setMinMaxValue(bulldog.enabled ? 0.25 : 1, bulldog.enabled ? 5 : 20);
  frames.settings.time.setStepSize(bulldog.enabled ? 0.25 : 1);
  if (frames.settings.time.value !== udg_time / 60) frames.settings.time.value = udg_time / 60;
};

export const updateMode = (value?: number) => {
  if (typeof value !== "number") {
    value = bulldog.enabled ? bulldog.katma ? 5 : 4 : udg_switchOn ? 2 : vampOn ? 3 : president.enabled ? 1 : 0;
    frames.settings.mode.value = value;
  } else {
    president.enabled = value === 1;
    udg_switchOn = value === 2;
    vampOn = value === 3;
    value === 4 || value === 5 ? enableBulldog(value === 5) : disableBulldog();
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
  frames.settings.terrain.label.visible = !bulldog.enabled;
  frames.settings.terrain.select.visible = !bulldog.enabled;
  frames.settings.terrain.options.visible = !bulldog.enabled && terrain.index === 0;

  frames.playerHeaders.average.visible = !bulldog.enabled;
  frames.playerHeaders.deathOrder.visible = !bulldog.enabled;
  frames.playerHeaders.points.visible = bulldog.enabled;
  frames.playerHeaders.pointsTooltip.text = bulldog.katma
    ? "Number of times the entire sheep team have made it to the end."
    : "Number of times allied sheep have made it to the end.";
  frames.playerHeaders.scores.visible = bulldog.enabled;
  frames.playerHeaders.scores.text = bulldog.katma ? "RIPs" : "Solo";
  frames.playerHeaders.scoresTooltip.text = bulldog.katma
    ? "Number of times this player was the first sheep to die."
    : "Number of times this player has made it to the end.";
  frames.playerHeaders.leaks.visible = bulldog.enabled;

  updateTime();

  updatePresidentHandicap();
  updateSwitchSettings();
  updateLeaderboardSettingsDisplay(true);
};

const updateGold = () => {
  frames.settings.sheepGold.text = udg_sheepGold.toFixed(0);
  frames.settings.wolfGold.text = udg_wolfGold.toFixed(0);
  frames.settings.sheepIncome.text = toStringWithPrecision(income.sheep);
  frames.settings.wolfIncome.text = toStringWithPrecision(income.wolves);
  frames.settings.moneyFarmIncome.text = toStringWithPrecision(income.savings);
};

const updateOther = () => {
  updateTime();
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
      frames.settings.desiredSheep.text = settings.desiredSheep.toFixed(0);
      return;
    }
  } else {
    settings.desiredSheep = getIdealDesiredSheep();
    previousPlayersCount = playerCount;
  }
  const stringified = settings.desiredSheep.toFixed(0);
  frames.settings.desiredSheep.text = stringified;
};

export const updatePlayers = () => {
  const playerCount = getActivePlayerCount();
  frames.playerLabel.text = playerCount.toFixed(0);
  frames.playerLabel.setScale(playerCount > 9 ? 0.7 : 1);

  const sheep = settings.desiredSheep;
  const wolves = playerCount - sheep;
  const localIsHost = MapPlayerEx.fromLocal().isHost;

  let bestAverage: { players: FrameEx[]; value: number } = { players: [], value: -1 };
  let bestDO: { players: FrameEx[]; value: number } = { players: [], value: 25 };
  let bestSolo: { players: FrameEx[]; value: number } = { players: [], value: -1 };
  let bestTeam: { players: FrameEx[]; value: number } = { players: [], value: -1 };
  let bestDeaths: { players: FrameEx[]; value: number } = { players: [], value: 5000 };
  let bestLeaks: { players: FrameEx[]; value: number } = { players: [], value: 5000 };

  let bestRound: Round | undefined;
  for (const round of rounds) {
    if (round.sheep.length === sheep && round.wolves.length === wolves && (!bestRound || bestRound.time < round.time)) {
      bestRound = round;
    }
  }

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (!frames.players[i]) continue;
    const p = MapPlayerEx.fromIndex(i)!;
    const {
      container,
      backdrop,
      team,
      teamBackdrop,
      disabledTeamBackdrop,
      crown,
      name,
      sheepCount,
      handicap,
      pubMark,
      average,
      deathOrder,
      points,
      score,
      leaks,
    } = frames.players[i];

    team.enabled = p.inGame && localIsHost;

    if (!p.inGame) {
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

    crown.setVisible(bestRound?.sheep.includes(p) ?? false);

    sheepCount.text = p.sheepCount.toFixed(0);

    handicap.text = (p.handicap * 100).toFixed(0) + "%";

    pubMark.visible = p.isPub;

    if (bulldog.enabled) {
      const stats = p.bulldog[`${sheep}v${wolves}-${bulldog.katma ? "katma" : "bulldog"}`];

      if (bulldog.katma) {
        score.text = stats?.team ? `${stats.deaths}` : "-";
        if (stats && stats.deaths < bestDeaths.value) {
          for (const before of bestDeaths.players) before.setTextColor(WHITE_COLOR);
          bestDeaths = { players: [score], value: stats.deaths };
          score.setTextColor(GOLD_COLOR);
        } else if (stats && stats.deaths === bestDeaths.value) {
          bestDeaths.players.push(score);
          score.setTextColor(GOLD_COLOR);
        } else score.setTextColor(WHITE_COLOR);
      } else {
        score.text = stats?.team ? `${stats.solo}` : "-";
        if (stats && stats.solo > bestSolo.value) {
          for (const before of bestSolo.players) before.setTextColor(WHITE_COLOR);
          bestSolo = { players: [score], value: stats.solo };
          score.setTextColor(GOLD_COLOR);
        } else if (stats && stats.solo === bestSolo.value) {
          bestSolo.players.push(score);
          score.setTextColor(GOLD_COLOR);
        } else score.setTextColor(WHITE_COLOR);
      }

      points.text = stats?.team ? `${stats.team}` : "-";
      if (stats && stats.team > bestTeam.value) {
        for (const before of bestTeam.players) before.setTextColor(WHITE_COLOR);
        bestTeam = { players: [points], value: stats.team };
        points.setTextColor(GOLD_COLOR);
      } else if (stats && stats.team === bestTeam.value) {
        bestTeam.players.push(points);
        points.setTextColor(GOLD_COLOR);
      } else points.setTextColor(WHITE_COLOR);

      leaks.text = stats?.leaks ? `${stats.leaks}` : "-";
      if (stats && stats.leaks < bestLeaks.value) {
        for (const before of bestLeaks.players) before.setTextColor(WHITE_COLOR);
        bestLeaks = { players: [leaks], value: stats.leaks };
        leaks.setTextColor(GOLD_COLOR);
      } else if (stats && stats.leaks === bestLeaks.value) {
        bestLeaks.players.push(leaks);
        leaks.setTextColor(GOLD_COLOR);
      } else leaks.setTextColor(WHITE_COLOR);
    } else {
      const times = getTimes(i);
      const timeStat = times[`${sheep}v${wolves}`] ?? { total: 0, count: 0 };
      average.text = timeStat.count === 0 ? "-" : simpleformatTime(timeStat.total / timeStat.count, true);
      if (timeStat.count > 0) {
        const avg = timeStat.total / timeStat.count;
        average.text = timeStat.count === 0 ? "-" : simpleformatTime(avg, true);
        const compare = precisionCompare(avg, bestAverage.value);
        if (compare === "greater") {
          for (const before of bestAverage.players) before.setTextColor(WHITE_COLOR);
          bestAverage = { players: [average], value: avg };
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
        const compare = precisionCompare(avg, bestDO.value);
        if (compare === "less") {
          for (const before of bestDO.players) before.setTextColor(WHITE_COLOR);
          bestDO = { players: [deathOrder], value: avg };
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

    average.visible = !bulldog.enabled;
    deathOrder.visible = !bulldog.enabled;
    points.visible = bulldog.enabled;
    score.visible = bulldog.enabled;
    leaks.visible = bulldog.enabled;
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

export const updateHotkeys = () => {
  if (!frames.start) return;
  frames.start.enabled =
    frames.smart.enabled =
    frames.versus.enabled =
    frames.practice.enabled =
      !ui.hotkeysDisabled && MapPlayerEx.fromLocal().isHost;
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
  updateHotkeys();

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
