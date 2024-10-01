import { ForceEx } from "handles/ForceEx";
import { FrameEx } from "handles/FrameEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { TriggerEx } from "handles/TriggerEx";
import { onZoomChange, saveZooms } from "jass/triggers/zoomFunctions/zoom";
import {
  getTeamResources,
  setTeamResources,
  TEAM_RESOURCES_DEFAULT,
  TEAM_RESOURCES_HIDDEN,
  TEAM_RESOURCES_TWINED,
} from "userSettings/teamResources";
import { setTimeout, Timeout } from "util/setTimeout";
import { addScriptHook, File, W3TS_HOOK } from "w3ts";
import { smart, start, updateDesiredSheep, updateMode, updateTerrain } from "./api";
import { frames } from "./frames";
import { income, president, switchSetting } from "settings/settings";
import { parseDesiredSheep, toStringWithPrecision } from "./util";

let sheepZoomEditBox: FrameEx | undefined;
let wolfZoomEditBox: FrameEx | undefined;
let wispZoomEditBox: FrameEx | undefined;

const updateZooms = (cid: number) => {
  if (sheepZoomEditBox) sheepZoomEditBox.text = udg_sheepZoom[cid].toFixed(0);
  if (wolfZoomEditBox) wolfZoomEditBox.text = udg_wolfZoom[cid].toFixed(0);
  if (wispZoomEditBox) wispZoomEditBox.text = udg_wispZoom[cid].toFixed(0);
};
onZoomChange(updateZooms);

const handleZoom =
  (which: "sheep" | "wolf" | "wisp") => ({ player, value }: { player: MapPlayerEx; value: string }) => {
    const zoom = parseInt(value);
    if (zoom > 400) {
      const array = which === "sheep" ? udg_sheepZoom : which === "wolf" ? udg_wolfZoom : udg_wispZoom;
      array[player.cid] = zoom;
      saveZooms(player.handle);
      if (which === "sheep" && ForceEx.sheep.hasPlayer(player)) player.setCameraDistance(zoom);
      if (which === "wolf" && ForceEx.wolves.hasPlayer(player)) player.setCameraDistance(zoom);
      if (which === "wisp" && (ForceEx.wisps.hasPlayer(player) || player.afk > 0)) player.setCameraDistance(zoom);
    }
  };

const getFrames = <T extends string[]>(...names: T) =>
  names.map((name) => FrameEx.fromName(name)) as { [K in keyof T]: FrameEx };

const setupPreferences = () => {
  const pid = GetPlayerId(GetLocalPlayer());
  const cid = pid + 1;

  const escapeTrigger = TriggerEx.create();
  escapeTrigger.registerAnyPlayerKeyEvent(OSKEY_ESCAPE, 0, true);
  escapeTrigger.addAction(() => {
    if (preferencesPanel.visible) preferencesPanel.visible = false;
  });
  escapeTrigger.enabled = false;

  // Hide save/load buttons
  BlzFrameSetVisible(BlzGetFrameByName("SaveGameButton", 0)!, false);
  BlzFrameSetEnable(BlzGetFrameByName("SaveGameButton", 0)!, false);
  BlzFrameSetVisible(BlzGetFrameByName("LoadGameButton", 0)!, false);

  // Disable saving via Alt+S
  BlzFrameSetEnable(BlzGetFrameByName("SaveGameSaveButton", 0)!, false);
  // BlzFrameSetVisible(BlzGetFrameByName("EscMenuSaveLoadContainer", 0)!, false);

  const escPanel = FrameEx.fromName("InsideMainPanel");
  const preferencesButton = FrameEx.create("SheepTagPreferencesButton", escPanel);
  preferencesButton.parent.parent.parent.enabled = false;
  preferencesButton.parent.parent.parent.enabled = true;

  preferencesButton.onClick(() => {
    escapeTrigger.enabled = true;
    if (GetLocalPlayer() !== GetTriggerPlayer()) return;
    ForceUICancel();
    preferencesPanel.visible = true;
  });

  const preferencesPanel = FrameEx.create("SheepTagPreferencesPanel", "ConsoleUIBackdrop");
  preferencesPanel.visible = false;

  sheepZoomEditBox = FrameEx.fromName("SheepZoomEditBox");
  sheepZoomEditBox.onChange(handleZoom("sheep"));
  wolfZoomEditBox = FrameEx.fromName("WolfZoomEditBox");
  wolfZoomEditBox.onChange(handleZoom("wolf"));
  wispZoomEditBox = FrameEx.fromName("WispZoomEditBox");
  wispZoomEditBox.onChange(handleZoom("wisp"));
  updateZooms(cid);

  const autoControlCheckbox = FrameEx.fromName("AutoControlCheckbox");
  const autoControlCheckboxInverted = FrameEx.fromName("AutoControlCheckboxChecked");
  (udg_autocontrol[pid] ? autoControlCheckbox : autoControlCheckboxInverted).visible = false;
  (udg_autocontrol[pid] ? autoControlCheckboxInverted : autoControlCheckbox).onToggle(({ player, checked }) => {
    udg_autocontrol[player.id] = checked;
    File.write("revo/autocontrol.txt", B2S(checked));
  });

  const noAutoControlCheckbox = FrameEx.fromName("NoAutoControlCheckbox");
  const noAutoControlCheckboxInverted = FrameEx.fromName("NoAutoControlCheckboxChecked");
  (noAutoControl[pid] ? noAutoControlCheckbox : noAutoControlCheckboxInverted).visible = false;
  (noAutoControl[pid] ? noAutoControlCheckboxInverted : noAutoControlCheckbox).onToggle(({ player, checked }) => {
    noAutoControl[player.id] = checked;
    File.write("revo/noAutoControl.txt", B2S(checked));
  });

  const teamResourcesShownRadioUnchecked = FrameEx.fromName("TeamResourcesShownRadio");
  const teamResourcesShownRadioChecked = FrameEx.fromName("TeamResourcesShownRadioChecked");

  const teamResourcesTwinRadioUnchecked = FrameEx.fromName("TeamResourcesTwinRadio");
  const teamResourcesTwinRadioChecked = FrameEx.fromName("TeamResourcesTwinRadioChecked");

  const teamResourcesHiddenRadioUnchecked = FrameEx.fromName("TeamResourcesHiddenRadio");
  const teamResourcesHiddenRadioChecked = FrameEx.fromName("TeamResourcesHiddenRadioChecked");

  const teamResources = getTeamResources();

  let initialRadio: FrameEx | undefined = teamResources === TEAM_RESOURCES_DEFAULT
    ? teamResourcesShownRadioChecked
    : teamResources === TEAM_RESOURCES_TWINED
    ? teamResourcesTwinRadioChecked
    : teamResourcesHiddenRadioChecked;

  ([
    [teamResourcesShownRadioUnchecked, TEAM_RESOURCES_DEFAULT, false],
    [teamResourcesShownRadioChecked, TEAM_RESOURCES_DEFAULT, true],
    [teamResourcesTwinRadioUnchecked, TEAM_RESOURCES_TWINED, false],
    [teamResourcesTwinRadioChecked, TEAM_RESOURCES_TWINED, true],
    [teamResourcesHiddenRadioUnchecked, TEAM_RESOURCES_HIDDEN, false],
    [teamResourcesHiddenRadioChecked, TEAM_RESOURCES_HIDDEN, true],
  ] as const).forEach(([radio, value, checked]) => {
    if (teamResources === value && !checked) radio.visible = false;
    else if (teamResources !== value && checked) radio.visible = false;
    radio.onToggle(({ player, checked }) => {
      if (!checked) return;
      setTeamResources(player.handle, value);
      if (initialRadio && radio !== initialRadio && player.isLocal()) {
        initialRadio.visible = false;
        if (initialRadio === teamResourcesShownRadioChecked) teamResourcesShownRadioUnchecked.visible = true;
        else if (initialRadio === teamResourcesTwinRadioChecked) teamResourcesTwinRadioUnchecked.visible = true;
        else teamResourcesHiddenRadioUnchecked.visible = true;
        initialRadio = undefined;
      }
    });
  });

  FrameEx.fromName("SheepTagPreferencesReturnButton").onClick(({ player }) => {
    if (!player.isLocal()) return;
    preferencesPanel.visible = false;
  });
};

const setupSlider = (
  name: string,
  { format = (v) => v.toFixed(0), onChange }: { format?: (v: number) => string; onChange?: (v: number) => void } = {},
) => {
  const slider = FrameEx.fromName(name);
  const display = FrameEx.fromName(`${name}Value`);

  display.clearPoints();
  display.setPoint(FRAMEPOINT_BOTTOM, slider.getChild(2), FRAMEPOINT_TOP, 0, 0);
  slider.onSliderChange(({ value }) => {
    display.text = format(value);
    onChange?.(value);
  });

  return slider;
};

const editBoxDelayedOnChange = (
  editBox: FrameEx,
  { onChange, delay = 2 }: {
    onChange?: (frames: { value: string }) => void;
    delay?: number;
  },
) => {
  let timer: Timeout | undefined;
  editBox.onChange(({ value }) => {
    timer?.cancel();
    timer = setTimeout(delay, () => onChange?.({ ...frames, value }));
  });
};

const setupEditableText = (
  name: string,
  { context = 0, onFocus, onBlur }: {
    context?: number;
    onFocus?: (frames: { label: FrameEx; editBox: FrameEx }) => void;
    onBlur?: (frames: { label: FrameEx; editBox: FrameEx; modified: boolean; value?: string }) => void;
  },
) => {
  const label = FrameEx.fromName(name, context);
  const editBox = FrameEx.fromName(`${name}EditBox`, context);
  const frames = { label, editBox };
  editBox.visible = false;
  let timer: Timeout | undefined;
  let justClicked = false;
  editBox.onChange(({ value }) => {
    if (justClicked) return justClicked = false;
    timer?.cancel();
    timer = setTimeout(0.75, () => {
      label.visible = true;
      editBox.setFocus(false).setVisible(false);
      onBlur?.({ ...frames, modified: true, value });
    });
  });
  label.onClick(() => {
    label.visible = false;
    justClicked = true;
    editBox.setVisible(true).setFocus(true);
    onFocus?.(frames);
    timer = setTimeout(2, () => {
      label.visible = true;
      editBox.setFocus(false).setVisible(false);
      onBlur?.({ ...frames, modified: false });
    });
  });
  return frames;
};

const setupIntermission = () => {
  FrameEx.create("SheepTagIntermission", ORIGIN_FRAME_WORLD_FRAME);
  const settingsContainer = FrameEx.fromName("SheepTagSettings");
  frames.intermissionFrames.push(
    settingsContainer,
    FrameEx.fromName("SheepTagPlayers"),
    FrameEx.fromName("SheepTagEndButton"),
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

    classicTerrainOptions,

    sheepGold,
    wolfGold,
    sheepIncome,
    wolfIncome,
    moneyFarmIncome,

    farmVision,
    spawn,
    _time,

    desiredSheep,
    _versus,
    startButton,
    smartButton,

    players,
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
    "SheepTagClassicOptions",
    "SheepTagSheepGold",
    "SheepTagWolfGold",
    "SheepTagSheepIncome",
    "SheepTagWolfIncome",
    "SheepTagMoneyFarmIncome",
    "SheepTagFarmVision",
    "SheepTagSpawn",
    "SheepTagTime",
    "SheepTagDesiredSheep",
    "SheepTagVersusButton",
    "SheepTagStartButton",
    "SheepTagSmartButton",
    "SheepTagPlayers",
  );

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

  roundSettingsButton.onClick(() => {
    roundSettings.visible = true;
    goldSettings.visible = false;
    otherSettings.visible = false;
  });

  goldSettingsButton.onClick(() => {
    roundSettings.visible = false;
    goldSettings.visible = true;
    otherSettings.visible = false;
  });

  otherSettingsButton.onClick(() => {
    roundSettings.visible = false;
    goldSettings.visible = false;
    otherSettings.visible = true;
  });

  // Round settings

  mode.value = 0;
  mode.onItemChanged(({ value }) => updateMode(value));

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
  terrain.onItemChanged(({ value }) => updateTerrain(value));

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

  farmVision.text = "64";
  spawn.value = 0;
  setupSlider("SheepTagTime", { format: (v) => simpleformatTime(v * 60) });

  // Starting

  frames.settings.desiredSheep = desiredSheep;
  updateDesiredSheep();
  editBoxDelayedOnChange(desiredSheep, {
    onChange: ({ value }) => {
      const parsed = parseDesiredSheep(value);
      if (desiredSheep.text !== parsed.toFixed()) desiredSheep.text = parsed.toFixed();
    },
  });

  startButton.onClick(start);
  smartButton.onClick(smart);

  // Players

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

    FrameEx.fromName("SheepTagPlayerRowBackdrop", i)
      .setTexture(`replaceabletextures/teamcolor/teamcolor${i.toString().padStart(2, "0")}`)
      .setAlpha(31);

    const team = FrameEx.fromName("SheepTagPlayerTeam", i);
    team.onItemChanged(({ value }) => {
      // TODO
      team.value = -1;
    });
    const backdrop = team.getChild(0);
    backdrop.setTexture(`ReplaceableTextures/CommandButtons/${p.id > 11 ? "BTNRaider" : "BTNSheep"}.blp`);
    const disabledBackdrop = team.getChild(1);
    disabledBackdrop.setTexture(`ReplaceableTextures/CommandButtons/${p.id > 11 ? "BTNRaider" : "BTNSheep"}.blp`);
    team.enabled = false;

    FrameEx.fromName("SheepTagPlayerRowName", i).setText(p.coloredName);

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
      },
    });
    sheepCountLabel.text = "0";

    const { label: handicapLabel } = setupEditableText("SheepTagPlayerRowHandicap", {
      context: i,
      onFocus: ({ editBox }) => {
        editBox.setText((p.handicap * 100).toFixed(0));
      },
      onBlur: ({ label, value }) => {
        if (!value) return;
        const parsed = Math.min(Math.max(tonumber(value) || 0, 23), 500);
        label.text = parsed.toFixed(0) + "%";
        p.handicap = parsed / 100;
      },
    });
    handicapLabel.text = (p.handicap * 100).toFixed(0) + "%";

    prev = row;
  }
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  setTimeout(0.01, () => {
    BlzLoadTOCFile("customui/main.toc");
    setupIntermission();
    setupPreferences();
  });
});
