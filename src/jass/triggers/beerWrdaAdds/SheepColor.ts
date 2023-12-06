//===========================================================================
// Trigger: Sheep Color
//
// afk == 0 here
// afk == 1 came back during pick, was not picked
// afk == 2 back, watching game
// afk == 3 went afk before the game started
// afk == 4, went afk during game or after being picked
//===========================================================================
const Trig_Sheep_Color_Func001002 = (): void => {
  SetUnitVertexColorBJ(
    GetEnumUnit()!,
    udg_SheepColorR[GetConvertedPlayerId(GetTriggerPlayer()!)],
    udg_SheepColorG[GetConvertedPlayerId(GetTriggerPlayer()!)],
    udg_SheepColorB[GetConvertedPlayerId(GetTriggerPlayer()!)],
    0,
  );
};

const Trig_Sheep_Color_Actions = (): void => {
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
    "     " +
      ("Sheep color changed to " +
        (R2S(udg_SheepColorR[GetConvertedPlayerId(GetTriggerPlayer()!)]) +
          ("% |CFFFF0000Red|r " +
            (R2S(udg_SheepColorG[GetConvertedPlayerId(GetTriggerPlayer()!)]) +
              ("% |CFF18BE00Green|r " +
                (R2S(
                  udg_SheepColorB[GetConvertedPlayerId(GetTriggerPlayer()!)],
                ) +
                  "% |CFF0000FFBlue|r")))))),
  );
  ForGroupBJ(
    GetUnitsOfPlayerAndTypeId(GetTriggerPlayer()!, FourCC("uC04"))!,
    Trig_Sheep_Color_Func001002,
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Sheep_Color: () => void;
}
InitTrig_Sheep_Color = (): void => {
  gg_trg_Sheep_Color = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_Sheep_Color, "-sexy", false);
  TriggerAddAction(gg_trg_Sheep_Color, Trig_Sheep_Color_Actions);
};
