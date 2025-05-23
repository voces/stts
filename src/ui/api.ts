import { settings } from "settings/settings";
import { frames } from "./frames";
import { getActivePlayerCount } from "./util";
import { adjustSheepTeamSize } from "teams/start";
import { smart as actualSmart } from "teams/smart";
import { FrameEx } from "handles/FrameEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { setTimeout } from "util/setTimeout";
import { TriggerEx } from "handles/TriggerEx";
import { updateHotkeys, updateIntermission } from "./api/updateIntermission";
import { ui } from "./data";

let hidePreferences = false;
export const preferencesShown = () => {
  hidePreferences = true;
};

export const adjustChatFrames = () => {
  if (frames.settings.container === undefined) return;

  if (frames.intermissionFrames[0].visible) {
    FrameEx.fromOrigin(ORIGIN_FRAME_CHAT_MSG)
      .setPoint(FRAMEPOINT_RIGHT, frames.settings.container, FRAMEPOINT_LEFT, 0, 0);
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
    FrameEx.fromOrigin(ORIGIN_FRAME_CHAT_MSG)
      // Technically this cuts it off a bit early, but that's fine
      .setPoint(FRAMEPOINT_RIGHT, FrameEx.fromOrigin(ORIGIN_FRAME_GAME_UI), FRAMEPOINT_RIGHT, -0.05, 0);
    FrameEx.fromOrigin(ORIGIN_FRAME_UNIT_MSG)
      .clearPoints()
      .setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.22, 0.2)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.58, 0.2);
  }
};

let showingIntermission = false;

let hotkeyTrigger: TriggerEx | undefined;

let menuFrames: FrameEx[] = [];

addScriptHook(W3TS_HOOK.MAIN_BEFORE, () => {
  hotkeyTrigger = TriggerEx.create();
  hotkeyTrigger.registerAnyPlayerKeyEvent(OSKEY_S, 0, true);
  hotkeyTrigger.registerAnyPlayerKeyEvent(OSKEY_A, 0, true);
  hotkeyTrigger.registerAnyPlayerKeyEvent(OSKEY_V, 0, true);
  hotkeyTrigger.registerAnyPlayerKeyEvent(OSKEY_R, 0, true);
  hotkeyTrigger.addAction(() => {
    if (!MapPlayerEx.fromEvent()?.isHost || ui.hotkeysDisabled) return;
    if (BlzGetTriggerPlayerKey() === OSKEY_S) return smart();
    if (BlzGetTriggerPlayerKey() === OSKEY_A) return start();
    if (BlzGetTriggerPlayerKey() === OSKEY_R) return TriggerExecute(gg_trg_practice);
    if (BlzGetTriggerPlayerKey() === OSKEY_V) return versus();
  });

  FrameEx.fromOrigin(ORIGIN_FRAME_UNIT_MSG)
    .clearPoints()
    .setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.22, 0.25)
    .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.58, 0.25);

  setTimeout(0.5, () => {
    adjustChatFrames();

    if (showingIntermission) {
      if (menuFrames.length === 0) {
        menuFrames.push(
          ...["EscMenuMainPanel", "QuestDialog", "AllianceDialog", "ChatDialog", "LogDialog"]
            .map((n) => FrameEx.fromName(n)),
          FrameEx.fromOrigin(ORIGIN_FRAME_GAME_UI).children[18],
        );
      }
      if (menuFrames.some((n) => n.visible)) hideIntermission(true);
      else showIntermission(true);
    }

    // If we close with esc then re-open, don't show preferences and show main panel instead
    if (hidePreferences && !frames.preferences.visible) {
      hidePreferences = false;
      frames.preferences.visible = false;
      FrameEx.fromName("MainPanel").setVisible(true);
    }
  }, true);
});

export const showIntermission = (local = false) => {
  if (!local) {
    showingIntermission = true;
    if (hotkeyTrigger) hotkeyTrigger.enabled = true;
    updateIntermission();
  }
  if (frames.intermissionFrames.length === 0) return;
  if (frames.intermissionFrames[0].visible === true) return;
  for (const frame of frames.intermissionFrames) frame.visible = true;
  adjustChatFrames();
};

export const hideIntermission = (local = false) => {
  if (!local) {
    showingIntermission = false;
    if (hotkeyTrigger) hotkeyTrigger.enabled = false;
  }
  if (frames.intermissionFrames.length === 0) return;
  if (frames.intermissionFrames[0].visible === false) return;
  for (const frame of frames.intermissionFrames) frame.visible = false;
  frames.end.confirm.visible = false;
  adjustChatFrames();
};

export const enforceIntermissionVisibility = () => {
  if (showingIntermission) showIntermission();
  else hideIntermission();
};

export const start = () => {
  const activePlayerCount = getActivePlayerCount();
  if (settings.desiredSheep === 0 || settings.desiredSheep >= activePlayerCount) return;

  adjustSheepTeamSize(settings.desiredSheep);
  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
};

export const smart = () => {
  const activePlayerCount = getActivePlayerCount();
  if (settings.desiredSheep === 0 || settings.desiredSheep >= activePlayerCount) return;

  actualSmart(settings.desiredSheep);
};

export const versus = () => udg_versus > 0 ? TriggerExecute(gg_trg_continue) : TriggerExecute(gg_trg_versus);

export const delayHotkeyButtons = () => {
  ui.hotkeysDisabled = true;
  updateHotkeys();
  setTimeout(0.5, () => {
    ui.hotkeysDisabled = false;
    updateHotkeys();
  });
};
