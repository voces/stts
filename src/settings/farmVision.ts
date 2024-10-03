import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { farmVision } from "./settings";
import { updateLeaderboardSettingsDisplay } from "./time";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  farmVision.trigger = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(farmVision.trigger, EVENT_PLAYER_UNIT_CONSTRUCT_START);
  TriggerAddAction(farmVision.trigger, () => {
    if (GetUnitTypeId(GetConstructingStructure()!) === sentryFarmType) return;
    BlzSetUnitRealField(GetConstructingStructure()!, UNIT_RF_SIGHT_RADIUS, farmVision.vision);
  });
  DisableTrigger(farmVision.trigger);

  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-farmvision", false);
  TriggerAddCondition(t, Condition(() => GetTriggerPlayer() === udg_Custom && !udg_gameStarted));
  TriggerAddAction(t, () => {
    const s = GetEventPlayerChatString()!.toLowerCase();

    if (s === "-farmvision") {
      if (farmVision.vision >= 0) {
        farmVision.vision = -1;
        DisableTrigger(farmVision.trigger);
        displayTimedTextToAll("|CFF00AEEFFarm vision restored|r");
      } else {
        farmVision.vision = 64;
        EnableTrigger(farmVision.trigger);
        displayTimedTextToAll("|CFF00AEEFFarm vision set to |CFFED1C2464|r");
      }
      updateLeaderboardSettingsDisplay();
      return;
    }

    farmVision.vision = S2I(s.split(" ")[1]);
    EnableTrigger(farmVision.trigger);
    displayTimedTextToAll(`|CFF00AEEFFarm vision set to |CFFED1C24${I2S(farmVision.vision)}|r`);
    updateLeaderboardSettingsDisplay();
  });
});
