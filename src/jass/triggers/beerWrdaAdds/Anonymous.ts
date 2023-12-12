//===========================================================================
// Trigger: Anonymous
//===========================================================================
const Anonymous_Conditions = () => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Anonymous_Actions = () => {
  let udg_tempInt: number;
  const tempPlayerColors: Array<number> = [];
  let isAvailable: boolean;
  let i: number;
  udg_isAnon = true;
  if (BlzGetFrameByName("ChatPlayerRadioButton", 0) != null) {
    BlzFrameSetVisible(BlzGetFrameByName("ChatPlayerLabel", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("ChatPlayerRadioButton", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("ChatPlayerMenu", 0)!, false);

    BlzFrameSetText(
      BlzGetFrameByName("AllianceTitle", 0)!,
      "|cffffcc00Anonymous Mode Enabled (|r|cffffffffHidden names|r|cffffcc00)|r",
    );
    BlzFrameSetText(
      BlzGetFrameByName("UpperButtonBarAlliesButton", 0)!,
      "Allies (|cffffcc00F11|r)",
    );
    BlzFrameSetVisible(BlzGetFrameByName("UnitsHeader", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("VisionHeader", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("AllyHeader", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("GoldHeader", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("LumberHeader", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("AlliedVictoryLabel", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("AlliedVictoryCheckBox", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("AllianceDialogScrollBar", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("AllianceAcceptButton", 0)!, false);
    BlzFrameSetVisible(
      BlzGetFrameByName("AllianceAcceptButtonText", 0)!,
      false,
    );
    BlzFrameSetVisible(BlzGetFrameByName("ResourceTradingTitle", 0)!, false);
    BlzFrameSetVisible(BlzGetFrameByName("PlayersHeader", 0)!, false);

    bj_forLoopAIndex = 0;
    bj_forLoopAIndexEnd = 23;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      udg_tempInt = GetForLoopIndexA();
      BlzFrameSetVisible(
        BlzGetFrameByName("AllianceSlot", udg_tempInt)!,
        false,
      );
      BlzFrameSetVisible(
        BlzGetFrameByName("PlayerNameLabel", udg_tempInt)!,
        false,
      );
      BlzFrameSetVisible(
        BlzGetFrameByName("ColorBackdrop", udg_tempInt)!,
        false,
      );
      BlzFrameSetVisible(BlzGetFrameByName("ColorBorder", udg_tempInt)!, false);
      BlzFrameSetVisible(
        BlzGetFrameByName("AllyCheckBox", udg_tempInt)!,
        false,
      );
      BlzFrameSetVisible(
        BlzGetFrameByName("GoldBackdrop", udg_tempInt)!,
        false,
      );
      BlzFrameSetVisible(BlzGetFrameByName("GoldText", udg_tempInt)!, false);
      BlzFrameSetVisible(
        BlzGetFrameByName("LumberBackdrop", udg_tempInt)!,
        false,
      );
      BlzFrameSetVisible(BlzGetFrameByName("LumberText", udg_tempInt)!, false);
      BlzFrameSetVisible(
        BlzGetFrameByName("UnitsCheckBox", udg_tempInt)!,
        false,
      );
      BlzFrameSetVisible(
        BlzGetFrameByName("VisionCheckBox", udg_tempInt)!,
        false,
      );
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else {
    bj_forLoopAIndex = 0;
    bj_forLoopAIndexEnd = 11 * 24 + 16;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      CreateGroup();

      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  }

  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  i = 0;
  while (true) {
    if (i > 24) break;
    udg_anonPlayerColors[i] = -1;
    i = i + 1;
  }
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    udg_tempInt = GetForLoopIndexA();
    while (true) {
      tempPlayerColors[udg_tempInt] = GetRandomInt(1, 24);
      isAvailable = true;
      i = 1;
      while (true) {
        if (i > 24) break;
        if ((tempPlayerColors[udg_tempInt] === udg_anonPlayerColors[i])) {
          isAvailable = false;
        }
        i = i + 1;
      }
      if (isAvailable) break;
    }
    udg_anonPlayerColors[udg_tempInt] = tempPlayerColors[udg_tempInt];
    SetPlayerColorBJ(
      ConvertedPlayer(udg_tempInt)!,
      udg_playerColor[udg_anonPlayerColors[udg_tempInt]],
      true,
    );
    SetPlayerName(ConvertedPlayer(udg_tempInt)!, "sheep");
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  i = 1;
  while (true) {
    if (i > 24) break;
    udg_startLocation[i] = udg_masterStartLocation[udg_anonPlayerColors[i]];
    udg_colorString[i] = udg_masterColorString[udg_anonPlayerColors[i]];
    udg_SheepColorR[i] = udg_masterSheepColorR[udg_anonPlayerColors[i]];
    udg_SheepColorG[i] = udg_masterSheepColorG[udg_anonPlayerColors[i]];
    udg_SheepColorB[i] = udg_masterSheepColorB[udg_anonPlayerColors[i]];
    i = i + 1;
  }
  udg_Custom = ForcePickRandomPlayer(GetPlayersAll()!)!;
  udg_transfer = GetConvertedPlayerId(udg_Custom);
  DisplayTextToForce(
    GetForceOfPlayer(udg_Custom)!,
    "                              |CFFFFCC00You now have control of the game.",
  );
  TriggerExecute(gg_trg_setupLeaderboard);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Anonymous: () => void;
}
InitTrig_Anonymous = () => {
  gg_trg_Anonymous = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_Anonymous, "-anon", true);
  TriggerRegisterPlayerChatEventAll(gg_trg_Anonymous, "-anonymous", true);
  TriggerAddCondition(gg_trg_Anonymous, Condition(Anonymous_Conditions));
  TriggerAddAction(gg_trg_Anonymous, Anonymous_Actions);
};
