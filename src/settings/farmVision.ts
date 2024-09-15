import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";
import { farmVision } from "./settings";
import { updateLeaderboardSettingsDisplay } from "./time";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const createFarmTrigger = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(createFarmTrigger, EVENT_PLAYER_UNIT_CONSTRUCT_START);
  TriggerAddAction(createFarmTrigger, () => {
    if (GetUnitTypeId(GetConstructingStructure()!) === sentryFarmType) return;
    BlzSetUnitRealField(GetConstructingStructure()!, UNIT_RF_SIGHT_RADIUS, farmVision.vision);
  });
  DisableTrigger(createFarmTrigger);

  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-farmvision", false);
  TriggerAddCondition(t, Condition(() => GetTriggerPlayer() === udg_Custom && !udg_gameStarted));
  TriggerAddAction(t, () => {
    const s = GetEventPlayerChatString()!.toLowerCase();

    if (s === "-farmvision") {
      if (farmVision.vision >= 0) {
        farmVision.vision = -1;
        DisableTrigger(createFarmTrigger);
        displayTimedTextToAll("                              |CFF00AEEFFarm vision restored|r");
      } else {
        farmVision.vision = 64;
        EnableTrigger(createFarmTrigger);
        displayTimedTextToAll("                              |CFF00AEEFFarm vision set to |CFFED1C2464|r");
      }
      updateLeaderboardSettingsDisplay();
      return;
    }

    farmVision.vision = S2I(s.split(" ")[1]);
    EnableTrigger(createFarmTrigger);
    displayTimedTextToAll(
      `                              |CFF00AEEFFarm vision set to |CFFED1C24${I2S(farmVision.vision)}|r`,
    );
    updateLeaderboardSettingsDisplay();
  });
});
