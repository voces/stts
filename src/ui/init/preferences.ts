import { ForceEx } from "handles/ForceEx";
import { FrameEx } from "handles/FrameEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { TriggerEx } from "handles/TriggerEx";
import { onZoomChange, saveZooms } from "jass/triggers/zoomFunctions/zoom";
import { setShowGuideFarms, showGuideFarms } from "settings/farmGuides";
import { preferencesShown } from "ui/api";
import { frames } from "ui/frames";
import {
  getTeamResources,
  setTeamResources,
  TEAM_RESOURCES_DEFAULT,
  TEAM_RESOURCES_HIDDEN,
  TEAM_RESOURCES_TWINED,
} from "userSettings/teamResources";
import { File } from "w3ts";

let sheepZoomEditBox: FrameEx | undefined;
let wolfZoomEditBox: FrameEx | undefined;
let wispZoomEditBox: FrameEx | undefined;

const updateZooms = (cid?: number) => {
  if (typeof cid === "number") {
    if (GetPlayerId(GetLocalPlayer()) + 1 !== cid) return;
  } else cid = GetPlayerId(GetLocalPlayer()) + 1;

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

export const initPreferences = () => {
  const pid = GetPlayerId(GetLocalPlayer());

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
  BlzFrameSetEnable(BlzGetFrameByName("SaveGameFileEditBox", 0)!, false);
  BlzFrameSetVisible(BlzGetFrameByName("SaveGameSaveButton", 0)!, false);
  BlzFrameSetEnable(BlzGetFrameByName("OverwriteOverwriteButton", 0)!, false);

  // Modify Tips
  BlzFrameSetText(BlzGetFrameByName("TipsTitleText", 0)!, "Sheep Tag Tips");

  const escPanel = FrameEx.fromName("InsideMainPanel");
  const preferencesButton = FrameEx.create("SheepTagPreferencesButton", escPanel);
  preferencesButton.setVisible(false).setVisible(true);

  const preferencesPanel = FrameEx.create("SheepTagPreferencesPanel", "ConsoleUIBackdrop");
  preferencesPanel.visible = false;
  frames.preferences = preferencesPanel;

  sheepZoomEditBox = FrameEx.fromName("SheepZoomEditBox");
  sheepZoomEditBox.onChange(handleZoom("sheep"));
  wolfZoomEditBox = FrameEx.fromName("WolfZoomEditBox");
  wolfZoomEditBox.onChange(handleZoom("wolf"));
  wispZoomEditBox = FrameEx.fromName("WispZoomEditBox");
  wispZoomEditBox.onChange(handleZoom("wisp"));
  updateZooms();

  const autoControlCheckboxUnchecked = FrameEx.fromName("AutoControlCheckbox");
  const autoControlCheckboxChecked = FrameEx.fromName("AutoControlCheckboxChecked");
  [autoControlCheckboxChecked, autoControlCheckboxUnchecked].forEach((f) =>
    f.onToggle(({ player, checked }) => {
      udg_autocontrol[player.id] = checked;
      if (!player.isLocal()) return;
      File.write("revo/autocontrol.txt", B2S(checked));
    })
  );

  const noAutoControlCheckboxUnchecked = FrameEx.fromName("NoAutoControlCheckbox");
  const noAutoControlCheckboxChecked = FrameEx.fromName("NoAutoControlCheckboxChecked");
  [noAutoControlCheckboxChecked, noAutoControlCheckboxUnchecked].forEach((f) =>
    f.onToggle(({ player, checked }) => {
      noAutoControl[player.id] = checked;
      if (!player.isLocal()) return;
      File.write("revo/noAutoControl.txt", B2S(checked));
    })
  );

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
    [teamResourcesShownRadioUnchecked, TEAM_RESOURCES_DEFAULT],
    [teamResourcesShownRadioChecked, TEAM_RESOURCES_DEFAULT],
    [teamResourcesTwinRadioUnchecked, TEAM_RESOURCES_TWINED],
    [teamResourcesTwinRadioChecked, TEAM_RESOURCES_TWINED],
    [teamResourcesHiddenRadioUnchecked, TEAM_RESOURCES_HIDDEN],
    [teamResourcesHiddenRadioChecked, TEAM_RESOURCES_HIDDEN],
  ] as const).forEach(([radio, value]) => {
    radio.onToggle(({ player, checked }) => {
      if (!checked) return;
      setTeamResources(player.handle, value);
      if (initialRadio && radio !== initialRadio && player.isLocal()) {
        initialRadio.visible = false;
        if (initialRadio === teamResourcesShownRadioChecked) teamResourcesShownRadioUnchecked!.visible = true;
        else if (initialRadio === teamResourcesTwinRadioChecked) teamResourcesTwinRadioUnchecked!.visible = true;
        else teamResourcesHiddenRadioUnchecked!.visible = true;
        initialRadio = undefined;
      }
    });
  });

  const guideFarmsChecked = FrameEx.fromName("FarmGuideCheckboxChecked");
  const guideFarmsUnchecked = FrameEx.fromName("FarmGuideCheckboxUnchecked");

  [guideFarmsChecked, guideFarmsUnchecked].forEach((f) =>
    f.onToggle(({ player, checked }) => {
      if (!player.isLocal()) return;
      setShowGuideFarms(checked);
    })
  );

  let initialized = false;
  preferencesButton.onClick(({ player }) => {
    escapeTrigger.enabled = true;

    const mainPanel = FrameEx.fromName("MainPanel");
    preferencesPanel.setParent(mainPanel.parent);

    if (!player.isLocal()) return;

    if (!initialized) {
      initialized = true;
      (udg_autocontrol[pid] ? autoControlCheckboxChecked : autoControlCheckboxUnchecked).visible = false;
      (noAutoControl[pid] ? noAutoControlCheckboxUnchecked : noAutoControlCheckboxChecked).visible = false;
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

        initialRadio = teamResources === TEAM_RESOURCES_DEFAULT
          ? teamResourcesShownRadioChecked
          : teamResources === TEAM_RESOURCES_TWINED
          ? teamResourcesTwinRadioChecked
          : teamResourcesHiddenRadioChecked;
      });
      (showGuideFarms() ? guideFarmsUnchecked : guideFarmsChecked).visible = false;
    }

    mainPanel.setVisible(false);
    preferencesPanel.visible = true;
    preferencesShown();
  });

  FrameEx.fromName("SheepTagPreferencesReturnButton").onClick(({ player }) => {
    if (!player.isLocal()) return;
    preferencesPanel.visible = false;
    ForceUICancel();
    FrameEx.fromName("MainPanel").setVisible(true);
  });
};
