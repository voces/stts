import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Anonymous_Actions = () => {
  const tempPlayerColors: Array<number> = [];
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

    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      BlzFrameSetVisible(BlzGetFrameByName("AllianceSlot", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("PlayerNameLabel", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("ColorBackdrop", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("ColorBorder", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("AllyCheckBox", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("GoldBackdrop", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("GoldText", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("LumberBackdrop", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("LumberText", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("UnitsCheckBox", i)!, false);
      BlzFrameSetVisible(BlzGetFrameByName("VisionCheckBox", i)!, false);
    }
  }

  for (let i = 1; i <= bj_MAX_PLAYERS; i++) udg_anonPlayerColors[i] = -1;

  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    let isNotAvailable = true;
    while (isNotAvailable) {
      isNotAvailable = false;
      tempPlayerColors[i] = GetRandomInt(1, bj_MAX_PLAYERS);
      for (let n = 1; n <= bj_MAX_PLAYERS; n++) {
        if (tempPlayerColors[i] === udg_anonPlayerColors[n]) {
          isNotAvailable = true;
          continue;
        }
      }
    }
    udg_anonPlayerColors[i] = tempPlayerColors[i];
    SetPlayerColorBJ(
      ConvertedPlayer(i)!,
      udg_playerColor[udg_anonPlayerColors[i]],
      true,
    );
    SetPlayerName(ConvertedPlayer(i)!, "sheep");
  }

  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    udg_startLocation[i] = udg_masterStartLocation[udg_anonPlayerColors[i]];
    udg_colorString[i] = udg_masterColorString[udg_anonPlayerColors[i]];
    udg_SheepColorR[i] = udg_masterSheepColorR[udg_anonPlayerColors[i]];
    udg_SheepColorG[i] = udg_masterSheepColorG[udg_anonPlayerColors[i]];
    udg_SheepColorB[i] = udg_masterSheepColorB[udg_anonPlayerColors[i]];
  }

  udg_Custom = ForcePickRandomPlayer(GetPlayersAll()!)!;
  udg_transfer = GetConvertedPlayerId(udg_Custom);
  DisplayTextToForce(GetForceOfPlayer(udg_Custom)!, "|CFFFFCC00You now have control of the game.");
  TriggerExecute(gg_trg_setupLeaderboard);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Anonymous: () => void;
}
InitTrig_Anonymous = () => {
  gg_trg_Anonymous = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_Anonymous, "-anon");
  registerAnyPlayerChatEvent(gg_trg_Anonymous, "-anonymous");
  TriggerAddCondition(gg_trg_Anonymous, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_Anonymous, Anonymous_Actions);
};
