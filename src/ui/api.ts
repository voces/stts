import { settings } from "settings/settings";
import { frames } from "./frames";
import { getActivePlayerCount, getPubCount } from "./util";
import { adjustSheepTeamSize } from "teams/start";
import { smart as actualSmart } from "teams/smart";
import { FrameEx } from "handles/FrameEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { setTimeout } from "util/setTimeout";
import { TriggerEx } from "handles/TriggerEx";
import { updateIntermission } from "./api/updateIntermission";

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
      .setPoint(FRAMEPOINT_RIGHT, FrameEx.fromOrigin(ORIGIN_FRAME_WORLD_FRAME), FRAMEPOINT_RIGHT, -0.05, 0);
    FrameEx.fromOrigin(ORIGIN_FRAME_UNIT_MSG)
      .clearPoints()
      .setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.22, 0.25)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.58, 0.25);
  }
};

let showingIntermission = false;

let hotkeyTrigger: TriggerEx | undefined;

addScriptHook(W3TS_HOOK.MAIN_BEFORE, () => {
  hotkeyTrigger = TriggerEx.create();
  hotkeyTrigger.registerAnyPlayerKeyEvent(OSKEY_S, 0, true);
  hotkeyTrigger.registerAnyPlayerKeyEvent(OSKEY_A, 0, true);
  hotkeyTrigger.registerAnyPlayerKeyEvent(OSKEY_V, 0, true);
  hotkeyTrigger.registerAnyPlayerKeyEvent(OSKEY_R, 0, true);
  hotkeyTrigger.addAction(() => {
    if (!MapPlayerEx.fromEvent()?.isHost) return;
    if (BlzGetTriggerPlayerKey() === OSKEY_S) return smart();
    if (BlzGetTriggerPlayerKey() === OSKEY_A) return start();
    if (BlzGetTriggerPlayerKey() === OSKEY_R) return TriggerExecute(gg_trg_practice);
    if (BlzGetTriggerPlayerKey() === OSKEY_V) return TriggerExecute(gg_trg_versus);
  });

  FrameEx.fromOrigin(ORIGIN_FRAME_UNIT_MSG)
    .clearPoints()
    .setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.22, 0.25)
    .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.58, 0.25);

  setTimeout(0.5, () => {
    adjustChatFrames();

    if (showingIntermission) {
      const someVisible = ["EscMenuMainPanel", "QuestDialog", "AllianceDialog", "ChatDialog", "LogDialog"]
        .some((n) => FrameEx.fromName(n).visible);
      if (someVisible) hideIntermission(true);
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
  if (frames.intermissionFrames[0].visible === true) return;
  for (const frame of frames.intermissionFrames) frame.visible = true;
  adjustChatFrames();
};

export const hideIntermission = (local = false) => {
  if (!local) {
    showingIntermission = false;
    if (hotkeyTrigger) hotkeyTrigger.enabled = false;
  }

  if (frames.intermissionFrames[0].visible === false) return;
  for (const frame of frames.intermissionFrames) frame.visible = false;
  frames.end.confirm.visible = false;
  adjustChatFrames();
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

  actualSmart(settings.desiredSheep - Math.floor((getPubCount() + 1) / 2));
};
