import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  let farmVision = -1;

  const createFarmTrigger = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(createFarmTrigger, EVENT_PLAYER_UNIT_CONSTRUCT_START);
  TriggerAddAction(createFarmTrigger, () => {
    if (GetUnitTypeId(GetConstructingStructure()!) === sentryFarmType) return;
    BlzSetUnitRealField(GetConstructingStructure()!, UNIT_RF_SIGHT_RADIUS, farmVision);
  });
  DisableTrigger(createFarmTrigger);

  const t = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(t, "-farmvision", false);
  TriggerAddCondition(t, Condition(() => GetTriggerPlayer() === udg_Custom && !udg_gameStarted));
  TriggerAddAction(t, () => {
    const s = GetEventPlayerChatString()!.toLowerCase();

    if (s === "-farmvision") {
      if (farmVision >= 0) {
        DisableTrigger(createFarmTrigger);
        displayTimedTextToAll("                              |CFF00AEEFFarm vision restored|r");
      } else {
        farmVision = 64;
        EnableTrigger(createFarmTrigger);
        displayTimedTextToAll("                              |CFF00AEEFFarm vision set to |CFFED1C2464|r");
      }
      return;
    }

    farmVision = S2I(s.split(" ")[1]);
    EnableTrigger(createFarmTrigger);
    displayTimedTextToAll(`                              |CFF00AEEFFarm vision set to |CFFED1C24${I2S(farmVision)}|r`);
  });
});
