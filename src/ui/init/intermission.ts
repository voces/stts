import { ForceEx } from "handles/ForceEx";
import { FrameEx } from "handles/FrameEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { handleAFK } from "jass/triggers/afkFunctions/AFK";
import { transferHostTo } from "jass/triggers/hostCommands/transfer";
import {
  farmVision as farmVisionSetting,
  income,
  president,
  settings,
  spawnSetting,
  switchSetting,
} from "settings/settings";
import { checkAutoTimeFlag, getDefaultTime } from "settings/time";
import { setPub } from "teams/smart";
import {
  adjustChatFrames,
  enforceIntermissionVisibility,
  hideIntermission,
  showIntermission,
  smart,
  start,
  versus,
} from "ui/api";
import { updateTerrain } from "ui/api/modes";
import {
  updateDesiredSheep,
  updateIntermission,
  updateMode,
  updatePlayers,
  updateScButtons,
} from "ui/api/updateIntermission";
import { frames } from "ui/frames";
import { parseDesiredSheep, toStringWithPrecision } from "ui/util";
import { Checkbox, editBoxDelayedOnChange, getFrames, setupEditableText, setupSlider } from "./util";
import { toggleView } from "settings/view";

export const initIntermission = () => {
  FrameEx.create("SheepTagIntermission", "ConsoleUIBackdrop");
  const settingsContainer = FrameEx.fromName("SheepTagSettings");
  const players = FrameEx.fromName("SheepTagPlayers");
  const extra = FrameEx.fromName("SheepTagExtra");
  frames.intermissionFrames.push(
    settingsContainer,
    players,
    extra,
  );
  frames.settings.container = settingsContainer;

  const [
    roundSettingsButton,
    roundSettings,

    goldSettingsButton,
    goldSettings,

    otherSettingsButton,
    otherSettings,

    // Round settings
    modeLabel,
    mode,

    // President settings
    presidentOptions,
    presidentHandicapLabel,
    presidentHandicap,

    // Switch settings
    switchOptions,
    switchTimeLabel,

    terrainLabel,
    terrain,
    shrinkCheckbox,
    expandCheckbox,

    classicTerrainOptions,

    sheepGold,
    wolfGold,
    sheepIncome,
    wolfIncome,
    moneyFarmIncome,

    time,
    spawn,
    view,
    farmVision,
    autoCancel,
    allowShareControl,

    desiredSheep,
    versusButton,
    startButton,
    smartButton,

    playersLabel,

    practice,
    end,

    endConfirmationContainer,
    endConfirmationTitle,
    endConfirmCancel,
    endConfirmEnd,
  ] = getFrames(
    "SheepTagRoundSettingsButton",
    "SheepTagRoundSettings",
    "SheepTagGoldSettingsButton",
    "SheepTagGoldSettings",
    "SheepTagOtherSettingsButton",
    "SheepTagOtherSettings",
    "SheepTagRoundModeLabel",
    "SheepTagMode",
    "SheepTagPresidentOptions",
    "SheepTagPresidentHandicapLabel",
    "SheepTagPresidentHandicap",
    "SheepTagSwitchOptions",
    "SheepTagSwitchTimeLabel",
    "SheepTagTerrainLabel",
    "SheepTagTerrain",
    "SheepTagShrink",
    "SheepTagExpand",
    "SheepTagClassicOptions",
    "SheepTagSheepGold",
    "SheepTagWolfGold",
    "SheepTagSheepIncome",
    "SheepTagWolfIncome",
    "SheepTagMoneyFarmIncome",
    "SheepTagTime",
    "SheepTagSpawn",
    "SheepTagView",
    "SheepTagFarmVision",
    "SheepTagAutoCancel",
    "SheepTagControl",
    "SheepTagDesiredSheep",
    "SheepTagVersusButton",
    "SheepTagStartButton",
    "SheepTagSmartButton",
    "SheepTagActivePlayersText",
    "SheepTagPracticeButton",
    "SheepTagEndButton",
    "SheepTagEndConfirmation",
    "SheepTagEndConfirmationTitle",
    "SheepTagEndConfirmationCancel",
    "SheepTagEndConfirmationEnd",
  );

  const consoleBackdrop = FrameEx.fromName("ConsoleUIBackdrop");
  extra.setParent(consoleBackdrop).clearPoints()
    .setPoint(FRAMEPOINT_BOTTOMLEFT, players, FRAMEPOINT_BOTTOMRIGHT, 0.01, 0);
  practice.setParent(consoleBackdrop)
    .setPoint(FRAMEPOINT_TOPRIGHT, extra, FRAMEPOINT_TOPRIGHT, -0.02, -0.02)
    .children.forEach((child) => child.setParent(consoleBackdrop).setAllPoints(practice));
  end.setParent(consoleBackdrop)
    .setPoint(FRAMEPOINT_BOTTOMRIGHT, extra, FRAMEPOINT_BOTTOMRIGHT, -0.02, 0.02)
    .children.forEach((child) => child.setParent(consoleBackdrop).setAllPoints(end));

  frames.settings.roundTab = roundSettingsButton;
  frames.settings.goldTab = goldSettingsButton;
  frames.settings.otherTab = otherSettingsButton;
  frames.settings.modeLabel = modeLabel;
  frames.settings.mode = mode;
  frames.settings.president.container = presidentOptions;
  frames.settings.president.handicapLabel = presidentHandicapLabel;
  frames.settings.president.handicap = presidentHandicap;
  frames.settings.switch.container = switchOptions;
  frames.settings.switch.timeLabel = switchTimeLabel;

  // Sections

  goldSettings.visible = false;
  otherSettings.visible = false;

  roundSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-up.blp");
  roundSettingsButton.onClick(() => {
    roundSettings.visible = true;
    goldSettings.visible = false;
    otherSettings.visible = false;
    roundSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-up.blp");
    goldSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-down.blp");
    otherSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-down.blp");
    const isHost = MapPlayerEx.fromLocal().isHost;
    roundSettingsButton.enabled = isHost;
    goldSettingsButton.enabled = isHost;
    otherSettingsButton.enabled = isHost;
  });

  goldSettingsButton.onClick(() => {
    roundSettings.visible = false;
    goldSettings.visible = true;
    otherSettings.visible = false;
    roundSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-down.blp");
    goldSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-up.blp");
    otherSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-down.blp");
    const isHost = MapPlayerEx.fromLocal().isHost;
    roundSettingsButton.enabled = isHost;
    goldSettingsButton.enabled = isHost;
    otherSettingsButton.enabled = isHost;
  });

  otherSettingsButton.onClick(() => {
    roundSettings.visible = false;
    goldSettings.visible = false;
    otherSettings.visible = true;
    roundSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-down.blp");
    goldSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-down.blp");
    otherSettingsButton.getChild(0).setTexture("UI/Widgets/BattleNet/bnet-tab-up.blp");
    const isHost = MapPlayerEx.fromLocal().isHost;
    roundSettingsButton.enabled = isHost;
    goldSettingsButton.enabled = isHost;
    otherSettingsButton.enabled = isHost;
  });

  // Round settings

  mode.value = 0;
  mode.onItemChanged(({ value }) => updateMode(value), true);

  frames.settings.switch.invul = setupSlider("SheepTagSwitchInvul", { onChange: (v) => udg_sheepInvul = v });
  frames.settings.switch.wolf = setupSlider("SheepTagSwitchWolf", { onChange: (v) => udg_wolfSpawn = v });
  frames.settings.switch.spirits = setupSlider("SheepTagSwitchSpirits", { onChange: (v) => udg_dummyWisps = v });
  frames.settings.switch.saves = setupSlider("SheepTagSwitchSaves", {
    format: (v) => v === 26 ? "∞" : v.toFixed(0),
    onChange: (v) => udg_wispPoints = v === 26 ? 0 : v,
  });
  frames.settings.switch.time = setupSlider("SheepTagSwitchTime", {
    format: (v) => v === 21 ? "∞" : simpleformatTime(v * 30),
    onChange: (v) => switchSetting.goalTime = v === 21 ? Infinity : v * 30,
  });

  presidentOptions.visible = false;
  presidentHandicap.text = "75";
  editBoxDelayedOnChange(presidentHandicap, {
    onChange: ({ value }) => {
      const parsed = Math.min(Math.max(tonumber(value) ?? 0, 23), 500);
      president.handicap = parsed / 100;
      if (presidentHandicap.text !== parsed.toFixed(0)) presidentHandicap.text = parsed.toFixed(0);
    },
  });

  switchOptions.visible = false;

  frames.settings.terrain.select = terrain;
  frames.settings.terrain.label = terrainLabel;
  frames.settings.terrain.options = classicTerrainOptions;

  terrain.value = 0;
  terrain.onItemChanged(({ value }) => updateTerrain(value), true);

  frames.settings.shrink = new Checkbox(shrinkCheckbox, {
    checked: udg_mapShrink,
    onClick: (v) => {
      udg_mapShrink = v;
      if (v) {
        udg_mapExpand = false;
        frames.settings.expand.checked = false;
      }
    },
  });
  frames.settings.expand = new Checkbox(expandCheckbox, {
    checked: udg_mapExpand,
    onClick: (v) => {
      udg_mapExpand = v;
      if (v) {
        udg_mapShrink = false;
        frames.settings.shrink.checked = false;
      }
    },
  });

  // Resource settings

  frames.settings.sheepGold = sheepGold;
  frames.settings.wolfGold = wolfGold;
  frames.settings.sheepIncome = sheepIncome;
  frames.settings.wolfIncome = wolfIncome;
  frames.settings.moneyFarmIncome = moneyFarmIncome;
  editBoxDelayedOnChange(sheepGold, {
    onChange: ({ value }) => {
      udg_sheepGold = Math.min(Math.max(tonumber(value) ?? 0, 0), 9999999);
      if (sheepGold.text !== udg_sheepGold.toFixed(0)) sheepGold.text = udg_sheepGold.toFixed(0);
    },
  });
  editBoxDelayedOnChange(wolfGold, {
    onChange: ({ value }) => {
      udg_wolfGold = Math.min(Math.max(tonumber(value) ?? 0, 0), 9999999);
      if (wolfGold.text !== udg_wolfGold.toFixed(0)) wolfGold.text = udg_wolfGold.toFixed(0);
    },
  });
  editBoxDelayedOnChange(sheepIncome, {
    onChange: ({ value }) => {
      income.sheep = Math.min(Math.max(tonumber(value) ?? 1, 0), 999);
      const stringified = toStringWithPrecision(income.sheep);
      if (sheepIncome.text !== stringified) sheepIncome.text = stringified;
    },
  });
  editBoxDelayedOnChange(wolfIncome, {
    onChange: ({ value }) => {
      income.wolves = Math.min(Math.max(tonumber(value) ?? 1, 0), 999);
      const stringified = toStringWithPrecision(income.wolves);
      if (wolfIncome.text !== stringified) wolfIncome.text = stringified;
    },
  });
  editBoxDelayedOnChange(moneyFarmIncome, {
    onChange: ({ value }) => {
      income.savings = Math.min(Math.max(tonumber(value) ?? 1, 0), 999);
      const stringified = toStringWithPrecision(income.savings);
      if (moneyFarmIncome.text !== stringified) moneyFarmIncome.text = stringified;
    },
  });

  // Other settings

  frames.settings.time = time;
  frames.settings.spawn = spawn;
  frames.settings.farmVision = farmVision;

  setupSlider("SheepTagTime", {
    format: (v) => {
      const seconds = v * 60;
      return seconds === getDefaultTime() ? "Default" : simpleformatTime(seconds);
    },
    onChange: (v) => {
      udg_time = v * 60;
      checkAutoTimeFlag(true);
    },
  });
  spawn.onItemChanged(
    ({ value }) => spawnSetting.mode = value === 0 ? "static" : value === 1 ? "free" : "random",
    true,
  );
  spawn.value = 0;
  frames.settings.view = new Checkbox(view, {
    checked: udg_mapExpand,
    onClick: toggleView,
  });
  setupSlider("SheepTagFarmVision", {
    format: (v) => v === 9 ? "Default" : v === 28 ? "1800" : (v * 64).toFixed(0),
    onChange: (v) => {
      farmVisionSetting.vision = v === 9 ? -1 : v === 28 ? 1800 : v * 64;
      if (v === 9) DisableTrigger(farmVisionSetting.trigger);
      else EnableTrigger(farmVisionSetting.trigger);
    },
  });
  frames.settings.autoCancel = new Checkbox(autoCancel, {
    checked: autoCancelEnabled,
    onClick: (v) => autoCancelEnabled = v,
  });
  frames.settings.allowShareControl = new Checkbox(allowShareControl, {
    checked: autoCancelEnabled,
    onClick: (v) => udg_shareOn = v,
  });

  // Starting

  frames.settings.desiredSheep = desiredSheep;
  updateDesiredSheep();
  desiredSheep.onChange(({ value }) => {
    const parsed = parseDesiredSheep(value);
    settings.desiredSheep = parsed;
  }, true);
  editBoxDelayedOnChange(desiredSheep, {
    onChange: ({ value }) => {
      const parsed = parseDesiredSheep(value);
      settings.desiredSheep = parsed;
      if (desiredSheep.text !== parsed.toFixed()) desiredSheep.text = parsed.toFixed();
      updateIntermission();
    },
  });

  versusButton.onClick(versus);
  startButton.onClick(start);
  smartButton.onClick(smart);

  frames.versus = versusButton;
  frames.start = startButton;
  frames.smart = smartButton;

  // Players

  frames.playerLabel = playersLabel;

  let playerCount = 0;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) if (MapPlayerEx.fromIndex(i)?.isHere) playerCount++;

  const rowHeight = Math.min((0.385 - (2 * 0.018)) / (playerCount + 1), 0.0225);

  let prev: FrameEx | undefined = FrameEx.fromName("SheepTagPlayersHeader");
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p?.isHere) continue;

    const row = FrameEx.create("SheepTagPlayerRowTemplate", players, 0, i);
    frames.intermissionFrames.push(row);
    row.setPoint(FRAMEPOINT_TOPLEFT, prev, FRAMEPOINT_BOTTOMLEFT, 0, 0);
    row.height = rowHeight;

    const backdrop = FrameEx.fromName("SheepTagPlayerRowBackdrop", i)
      .setTexture(`replaceabletextures/teamcolor/teamcolor${i.toString().padStart(2, "0")}`)
      .setAlpha(31);

    const team = FrameEx.fromName("SheepTagPlayerTeam", i);
    team.onItemChanged(({ value }) => {
      team.value = -1;

      // Toggle casual
      if (value === 0) setPub(p.id, !p.isPub, false);
      // Make AFK
      else if (value === 1) {
        if (p.afk === AFK_PLAYING) handleAFK(p.handle);
        if (ForceEx.wolves.hasPlayer(p)) ForceEx.wolves.removePlayer(p);
        if (ForceEx.sheep.hasPlayer(p)) ForceEx.sheep.removePlayer(p);
        settings.desiredSheep = ForceEx.sheep.size();
        updateDesiredSheep();
        desiredSheep.text = settings.desiredSheep.toFixed(0);
        defaultTime();
        // Make sheep
      } else if (value === 2) {
        if (p.afk !== AFK_PLAYING) handleAFK(p.handle);
        if (ForceEx.wolves.hasPlayer(p)) ForceEx.wolves.removePlayer(p);
        if (!ForceEx.sheep.hasPlayer(p)) ForceEx.sheep.addPlayer(p);
        settings.desiredSheep = ForceEx.sheep.size();
        updateDesiredSheep();
        desiredSheep.text = settings.desiredSheep.toFixed(0);
        defaultTime();
        // Make wolf
      } else if (value === 3) {
        if (p.afk !== AFK_PLAYING) handleAFK(p.handle);
        if (ForceEx.sheep.hasPlayer(p)) ForceEx.sheep.removePlayer(p);
        if (!ForceEx.wolves.hasPlayer(p)) ForceEx.wolves.addPlayer(p);
        settings.desiredSheep = ForceEx.sheep.size();
        updateDesiredSheep();
        desiredSheep.text = settings.desiredSheep.toFixed(0);
        defaultTime();
        // Transfer host
      } else if (value === 4) transferHostTo(p.cid);
      // Kick
      else if (value === 5) {
        CustomDefeatBJ(p.handle, "You were disconnected.");
        settings.desiredSheep = ForceEx.sheep.size();
        updateDesiredSheep();
        desiredSheep.text = settings.desiredSheep.toFixed(0);
        defaultTime();
      }

      updatePlayers();
    }, true);
    const teamBackdrop = team.getChild(0);
    teamBackdrop.setTexture(`ReplaceableTextures/CommandButtons/${p.id > 11 ? "BTNRaider" : "BTNSheep"}.blp`);
    const disabledTeamBackdrop = team.getChild(1);
    disabledTeamBackdrop.setTexture(`ReplaceableTextures/CommandButtons/${p.id > 11 ? "BTNRaider" : "BTNSheep"}.blp`);

    const playerName = FrameEx.fromName("SheepTagPlayerRowName", i).setText(p.coloredName).setHeight(rowHeight);

    const { label: sheepCountLabel } = setupEditableText("SheepTagPlayerRowSheepCount", {
      context: i,
      onFocus: ({ label, editBox }) => {
        const labelText = label.text;
        editBox.setText(labelText === "0" ? "" : labelText);
      },
      onBlur: ({ label, value }) => {
        if (!value) return;
        const parsed = Math.max(tonumber(value) || 0, 0);
        label.text = parsed.toFixed(0);
        p.sheepCount = parsed;
        updateScButtons();
      },
    });
    sheepCountLabel.text = "0";

    const { label: handicapLabel } = setupEditableText("SheepTagPlayerRowHandicap", {
      context: i,
      onFocus: ({ editBox }) => {
        editBox.setText(p.handicap === 1 ? "" : (p.handicap * 100).toFixed(0));
      },
      onBlur: ({ label, value }) => {
        if (!value) return;
        const parsed = Math.min(Math.max(tonumber(value) || 0, 23), 500);
        label.text = parsed.toFixed(0) + "%";
        p.handicap = parsed / 100;
      },
    });
    handicapLabel.text = (p.handicap * 100).toFixed(0) + "%";

    const pubMark = FrameEx.fromName("SheepTagPlayerRowPub", i).setVisible(false);

    frames.players[i] = {
      container: row,
      backdrop,
      team,
      teamBackdrop,
      disabledTeamBackdrop,
      name: playerName,
      sheepCount: sheepCountLabel,
      handicap: handicapLabel,
      pubMark: pubMark,
      average: FrameEx.fromName("SheepTagPlayerRowAverage", i),
      deathOrder: FrameEx.fromName("SheepTagPlayerRowDeathOrder", i),
    };

    prev = row;
  }

  practice.onClick(() => TriggerExecute(gg_trg_practice));
  end.onClick(() => {
    hideIntermission();
    endConfirmationContainer.visible = true;
  });

  frames.practice = practice;
  frames.end = {
    button: end,
    confirm: endConfirmationContainer,
    title: endConfirmationTitle,
    confirmEnd: endConfirmEnd,
    confirmCancel: endConfirmCancel,
  };

  endConfirmationContainer.visible = false;

  endConfirmCancel.onClick(() => {
    endConfirmationContainer.visible = false;
    showIntermission();
  });

  endConfirmEnd.onClick(() => {
    endConfirmationContainer.visible = false;
    TriggerExecute(gg_trg_end);
  });

  adjustChatFrames();
  enforceIntermissionVisibility();
};
