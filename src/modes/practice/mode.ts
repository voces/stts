import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import "./attack";
import "./disable";
import "./owner";
import "./stop";
import { president } from "settings/settings";

let prevPresident = false;
let prevVampOn = false;
let prevSwitchOn = false;

export const restoreSettings = () => {
  president.enabled = prevPresident;
  vampOn = prevVampOn;
  udg_switchOn = prevSwitchOn;
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_practice = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_practice, "-practice");
  TriggerRegisterAnyUnitEventBJ(gg_trg_practice, EVENT_PLAYER_UNIT_TRAIN_START);
  TriggerAddCondition(
    gg_trg_practice,
    Condition(() => {
      if (GetTriggerPlayer() !== udg_Custom) return false;
      const type = GetTrainedUnitType();
      return type === 0 || type === FourCC("h00H");
    }),
  );
  TriggerAddAction(gg_trg_practice, () => {
    udg_lastGameString = GetEventPlayerChatString()?.toLowerCase() ?? "";
    udg_practiceOn = true;
    prevPresident = president.enabled;
    prevVampOn = vampOn;
    prevSwitchOn = udg_switchOn;
    president.enabled = false;
    vampOn = false;
    udg_switchOn = false;
    udg_Teams = TEAMS_LOCK_IE_PLAYING;
    TriggerExecute(gg_trg_createSheep);
  });
});
