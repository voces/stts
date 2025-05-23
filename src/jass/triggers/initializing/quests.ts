import { addScriptHook, W3TS_HOOK } from "w3ts";
import { setTimeout } from "util/setTimeout";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  CreateQuestBJ(
    bj_QUESTTYPE_REQ_DISCOVERED,
    "Sheep Tag ReVoLuTiOn",
    "Join our Discord |CFF00AEEFhttps://dsc.gg/sheeptag|r for more Sheep Tag!",
    "ReplaceableTextures\\CommandButtons\\BTNSheep.blp",
  );

  CreateQuestBJ(
    bj_QUESTTYPE_REQ_DISCOVERED,
    "Commands",
    "An exhaustive list of commands is available in the Help menu inside the main menu, also available with the shortcut Alt + H.",
    "ReplaceableTextures\\PassiveButtons\\PASBTNStatUp.blp",
  );

  CreateQuestBJ(
    bj_QUESTTYPE_OPT_DISCOVERED,
    "Credits",
    `|cffffcc00Map developers|r
GosuSheep
Chakra
XXXandBEER
Wrda

|cffffcc00Assets & Tools|r
HideShow icon: darkdeathknight
Christmas tree & lights: Vinz
Frosty: Thrikodius
Snowball: Walle
Snow Golem: tillinghast
Ice Wolfrider: Abeus
Santa hat: Deolrin
Present: Mc!
Snowy house: Thorneon
Santa: IamMclovin
Ice Infernal: Dark Hunter1357 & Nety0
Model editor: Retera & Twilacs
Help from Hive, especially Tasyen's UI guides`,
    "ReplaceableTextures\\CommandButtons\\BTNPeasant.blp",
  );

  CreateQuestBJ(
    bj_QUESTTYPE_OPT_DISCOVERED,
    "Hall Of Fame",
    `|cffffcc00Winners of Sheep Tag Realm Wars 2009|r
Drewisfat
Magoogotbanned
Duncan(donuts)
BattleWaRRioR
Wanna-be-sheep
|cffffcc00Winners of Sheep Tag World Cup 2009|r
Drewisfat
Magoogotbanned
MasteR-SheP
XXXandBEER
Celestial_One
Wanna-be-sheep
Duncan(donuts)
|cffffcc00Winners of Sheep Tag World Cup 2008|r
Drewisfat
Magoogotbanned
Philosophize
Celestial_One
BattleWaRRioR
Wilshire12
Duncan(donuts)
|cffffcc00Winners of Sheep Tag World Cup 2007|r
IamOnYourSide
LazdShowOfAmir
CandyManKiller
|cffffcc00Winners of Sheep Tag World Cup 2006|r
Shoop
IamOnYourSide
LosingLoser
Be3r[behh]
dazzzzeee`,
    "ReplaceableTextures\\CommandButtons\\BTNRaider.blp",
  );

  // Makes a noise, but gives us room!
  setTimeout(0.05, () => {
    BlzFrameClick(BlzGetFrameByName("UpperButtonBarQuestsButton", 0)!);
    BlzFrameClick(BlzGetFrameByName("QuestAcceptButton", 0)!);
    BlzFrameSetSize(
      BlzGetFrameByName("QuestItemListContainer", 0)!,
      0.01,
      0.01,
    );
    BlzFrameSetSize(
      BlzGetFrameByName("QuestItemListScrollBar", 0)!,
      0.001,
      0.001,
    );
  });
});

/**

Gilneas buildings: CloudWolf
Black farm: Val_09
Pumpkin: R2D2
Pumpkin header: Usedwell
Zombie sheep: VoidLordXtreme

*/
