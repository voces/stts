import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import "./attack";
import "./disable";
import "./owner";
import "./stop";
import { president } from "settings/settings";

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
    udg_dummyWisps = 0;
    udg_wispPoints = 0;
    udg_time = 120 * 60;
    udg_sheepGold = 1000000;
    udg_wolfGold = 1000000;
    udg_Teams = TEAMS_LOCK_IE_PLAYING;
    president.enabled = false;
    EnableTrigger(gg_trg_attack);
    EnableTrigger(gg_trg_stop);
    EnableTrigger(gg_trg_mass);
    EnableTrigger(gg_trg_owner);
    EnableTrigger(gg_trg_speed);
    autoCancelEnabled = false;
    TriggerExecute(gg_trg_createSheep);
  });
});
