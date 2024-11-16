import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_Sheep_Color_Func001002 = () => {
  SetUnitVertexColorBJ(
    GetEnumUnit()!,
    udg_SheepColorR[GetConvertedPlayerId(GetTriggerPlayer()!)],
    udg_SheepColorG[GetConvertedPlayerId(GetTriggerPlayer()!)],
    udg_SheepColorB[GetConvertedPlayerId(GetTriggerPlayer()!)],
    0,
  );
};

const Trig_Sheep_Color_Actions = () => {
  Split(GetEventPlayerChatString()!, " ", true);
  if (myArgCount === 1) {
    if (S2R(myArg[0]) > 0) {
      if (S2R(myArg[0]) > 100) {
        udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = 100;
        udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = 100;
        udg_SheepColorB[GetPlayerId(GetTriggerPlayer()!) + 1] = 100;
      } else {
        udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = S2R(myArg[0]);
        udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = S2R(myArg[0]);
        udg_SheepColorB[GetPlayerId(GetTriggerPlayer()!) + 1] = S2R(myArg[0]);
      }
    } else {
      udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = 0;
      udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = 0;
      udg_SheepColorB[GetPlayerId(GetTriggerPlayer()!) + 1] = 0;
    }
  } else if (myArgCount === 2) {
    if (S2R(myArg[0]) > 0) {
      if (S2R(myArg[0]) > 100) {
        udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = 100;
      } else {
        udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = S2R(myArg[0]);
      }
    } else {
      udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = 0;
    }
    if (S2R(myArg[1]) > 0) {
      if (S2R(myArg[1]) > 100) {
        udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = 100;
      } else {
        udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = S2R(myArg[1]);
      }
    } else {
      udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = 0;
    }
  } else if (myArgCount >= 3) {
    if (S2R(myArg[0]) > 0) {
      if (S2R(myArg[0]) > 100) {
        udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = 100;
      } else {
        udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = S2R(myArg[0]);
      }
    } else {
      udg_SheepColorR[GetPlayerId(GetTriggerPlayer()!) + 1] = 0;
    }
    if (S2R(myArg[1]) > 0) {
      if (S2R(myArg[1]) > 100) {
        udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = 100;
      } else {
        udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = S2R(myArg[1]);
      }
    } else {
      udg_SheepColorG[GetPlayerId(GetTriggerPlayer()!) + 1] = 0;
    }
    if (S2R(myArg[2]) > 0) {
      if (S2R(myArg[2]) > 100) {
        udg_SheepColorB[GetPlayerId(GetTriggerPlayer()!) + 1] = 100;
      } else {
        udg_SheepColorB[GetPlayerId(GetTriggerPlayer()!) + 1] = S2R(myArg[2]);
      }
    } else {
      udg_SheepColorB[GetPlayerId(GetTriggerPlayer()!) + 1] = 0;
    }
  }
  DisplayTimedTextToForce(
    GetForceOfPlayer(GetTriggerPlayer()!)!,
    10,
    "Sheep color changed to " +
      udg_SheepColorR[GetConvertedPlayerId(GetTriggerPlayer()!)].toFixed(3) +
      "% |CFFFF0000Red|r " +
      udg_SheepColorG[GetConvertedPlayerId(GetTriggerPlayer()!)].toFixed(3) +
      "% |CFF18BE00Green|r " +
      udg_SheepColorB[GetConvertedPlayerId(GetTriggerPlayer()!)].toFixed(3) +
      "% |CFF0000FFBlue|r",
  );
  ForGroupBJ(
    GetUnitsOfPlayerAndTypeId(GetTriggerPlayer()!, sheepType)!,
    Trig_Sheep_Color_Func001002,
  );
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Sheep_Color: () => void;
}
InitTrig_Sheep_Color = () => {
  gg_trg_Sheep_Color = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_Sheep_Color, "-sexy", false);
  TriggerAddAction(gg_trg_Sheep_Color, Trig_Sheep_Color_Actions);
};
