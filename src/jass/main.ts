import { addScriptHook, W3TS_HOOK } from "w3ts";
import "./triggers/savingFunction/sheepVamp";
import "./triggers/savingFunction/sheepDies";
import "./triggers/savingFunction/sheepSwitch";
import "./triggers/savingFunction/miscSmartSave";
import "./triggers/savingFunction/dummyWisps";
import "./triggers/savingFunction/sheepDamage";
import "./triggers/savingFunction/spiritDies";
import "./triggers/farmFunctions/instanceIllusion";
import "./triggers/farmFunctions/destroyFarm";
import "./triggers/farmFunctions/cancelConstruction";
import "./triggers/farmFunctions/farmDies";
import "./triggers/farmFunctions/destroyAllButSavings";
import "./triggers/farmFunctions/destroyAllFarms";
import "./triggers/farmFunctions/createFarm";
import "./triggers/zoomFunctions/zoom";
import "./triggers/zoomFunctions/zoomMsg";
import "./triggers/zoomFunctions/escFix";
import "./triggers/itemFunctions/buyFromInventory";
import "./triggers/itemFunctions/kaleidoscope";
import "./triggers/itemFunctions/suppressionField";
import "./triggers/itemFunctions/useItem";
import "./triggers/itemFunctions/attackFarmBeamPot";
import "./triggers/itemFunctions/attackFarmStrPot";
import "./triggers/itemRecipes/Claws90Recipe";
import "./triggers/itemRecipes/ClawsofVelocityRecipe";
import "./triggers/itemRecipes/NukeRecipe";
import "./triggers/aprFunctions/order";
import "./triggers/beerWrdaAdds/StrPotKill";
import "./triggers/beerWrdaAdds/FreakHotkeys";
import "./triggers/beerWrdaAdds/FirstBlood";
import "./triggers/beerWrdaAdds/SexyOn";
import "./triggers/beerWrdaAdds/HumilCheck";
import "./triggers/beerWrdaAdds/AntiStackStomp";
import "./triggers/beerWrdaAdds/SexyOff";
import "./triggers/beerWrdaAdds/LastSheepStanding";
import "./triggers/beerWrdaAdds/Anonymous";
import "./triggers/beerWrdaAdds/LosingCloak";
import "./triggers/beerWrdaAdds/SayQDeath";
import "./triggers/beerWrdaAdds/SheepColor";
import "./triggers/beerWrdaAdds/blightManagement";
import "./triggers/beerWrdaAdds/Wardgold";
import "./triggers/beerWrdaAdds/CreateTimers";
import "./triggers/beerWrdaAdds/GettingCloak";
import "./triggers/beerWrdaAdds/AlertSheepDeath";
import "./triggers/leaderboardFunctions/setupLeaderboard";
import "./triggers/leaderboardFunctions/hideEsc";
import "./triggers/leaderboardFunctions/ScoreboardMultiboard";
import "./triggers/leaderboardFunctions/show";
import "./triggers/leaderboardFunctions/hide";
import "./triggers/roundsEnds/wolvesWin";
import "./triggers/roundsEnds/sheepWin";
import "./triggers/gameModes/autoCancel";
import "./triggers/gameModes/controloff";
import "./triggers/abilityFunctions/castAbilityIssueOrder";
import "./triggers/abilityFunctions/castAbilitySpellCast";
import "./triggers/hostCommands/cancel";
import "./triggers/hostCommands/kick";
import "./triggers/hostCommands/end";
import "./triggers/hostCommands/UpdateStats";
import "./triggers/hostCommands/transfer";
import "./triggers/hostCommands/continue";
import "./triggers/multiKills/timeBlue";
import "./triggers/multiKills/timeMaroon";
import "./triggers/multiKills/timeLavender";
import "./triggers/multiKills/timeOrange";
import "./triggers/multiKills/MultiKillCheck";
import "./triggers/multiKills/timeTeal";
import "./triggers/multiKills/timeCoal";
import "./triggers/multiKills/timePeach";
import "./triggers/multiKills/timeGrey";
import "./triggers/multiKills/timeViolet";
import "./triggers/multiKills/timePink";
import "./triggers/multiKills/timeYellow";
import "./triggers/multiKills/timeNavy";
import "./triggers/multiKills/timeSnow";
import "./triggers/multiKills/timeWheat";
import "./triggers/multiKills/timePeanut";
import "./triggers/multiKills/timeLb";
import "./triggers/multiKills/timeBrown";
import "./triggers/multiKills/timeEmerald";
import "./triggers/multiKills/timeRed";
import "./triggers/multiKills/timePurple";
import "./triggers/multiKills/timeGreen";
import "./triggers/multiKills/timeDg";
import "./triggers/multiKills/timeMint";
import "./triggers/multiKills/timeTurquoise";
import "./triggers/playerLeaves/playerLeft";
import "./triggers/practiceCommands/redo";
import "./triggers/practiceCommands/reset";
import "./triggers/practiceCommands/speed";
import "./triggers/practiceCommands/massTimeUp";
import "./triggers/practiceCommands/initMassTest";
import "./triggers/practiceCommands/mass";
import "./triggers/runes/RunesReset";
import "./triggers/runes/RunesOn";
import "./triggers/resourceFunctions/increaseGoldWolf";
import "./triggers/resourceFunctions/increaseGoldSheep";
import "./triggers/teamModes/versus";
import "./triggers/teamModes/draftPlayer";
import "./triggers/teamModes/captains";
import "./triggers/teamModes/pickwolf";
import "./triggers/teamModes/picksheep";
import "./triggers/teamModes/draftVersus";
import "./triggers/teamModes/setupPick";
import "./triggers/initializing/initialization";
import "./triggers/initializing/quests";
import "./triggers/initializing/createLists";
import "./triggers/initializing/createTimer";
import "./triggers/initializing/createSheep";
import "./triggers/initializing/createWolves";
import "./triggers/initializing/startRound";
import "./triggers/initializing/versusCountDown";
import "./triggers/afkFunctions/setafk";
import "./triggers/afkFunctions/AFK";
import "./triggers/afkFunctions/ForceAfk";
import "./triggers/commands/ts";
import "./triggers/commands/firstbloodCount";
import "./triggers/commands/seeTime";
import "./triggers/commands/lss";
import "./triggers/commands/timeCommands";
import "./triggers/commands/g";
import "./triggers/commands/last";
import "./triggers/commands/position";
import "./triggers/commands/qds";
import "./triggers/commands/sc";
import "./triggers/commands/clear";
import "./triggers/commands/tf";
import "./triggers/commands/wins";
import "./triggers/commands/gall";
import "./triggers/commands/tk";
import "./triggers/commands/handicap";
import "./triggers/commands/partnerCount";
import "./triggers/commands/giveAllGold";
import "./triggers/commands/giveUpCaptain";
import "./triggers/commands/giveGold";
import "./triggers/commands/vwins";
import "./triggers/commands/qDeath";
import "./triggers/commands/unstuck";
import "./triggers/shareControl/autocontrol";
import "./triggers/shareControl/shareControl";
import "./triggers/shareControl/control";
import "./triggers/shareControl/antishareruin";
import "./triggers/shareControl/controllall";
import "./triggers/shareControl/noAutoControl";
import { setTimeout, Timeout } from "util/setTimeout";
import { removeEnumUnit } from "util/removeEnumUnit";
import { updateLeaderboardSettingsDisplay } from "settings/time";
import { terrain } from "settings/terrain";
import { logRound } from "./triggers/hostCommands/UpdateStats";

declare global {
  //globals from Critter:
  let Critter___critter: unit;
  // deno-lint-ignore prefer-const
  let Critter___xRect: Array<number>;
  // deno-lint-ignore prefer-const
  let Critter___yRect: Array<number>;
  //endglobals from Critter
  //globals from FileIO:
  // Enable this if you want to allow the system to read files generated in patch 1.30 or below.
  // NOTE: For this to work properly you must edit the 'Amls' ability and change the levels to 2
  // as well as typing something in "Level 2 - Text - Tooltip - Normal" text field.
  //
  // Enabling this will also cause the system to treat files written with .write("") as empty files.
  //
  // This setting is really only intended for those who were already using the system in their map
  // prior to patch 1.31 and want to keep old files created with this system to still work.
  //endglobals from FileIO
  //globals from HCL:
  let HCL__command: string;
  //endglobals from HCL
  //globals from SavingFarms:
  // deno-lint-ignore prefer-const
  let SavingFarms__g: group;
  //endglobals from SavingFarms
  //globals from Util:
  // deno-lint-ignore prefer-const
  let TRANSFER_DISPLAY_SOURCE: 1;
  // deno-lint-ignore prefer-const
  let TRANSFER_DISPLAY_INVOLVED: 2;
  // deno-lint-ignore prefer-const
  let TRANSFER_DISPLAY_TEAM: 3;

  // deno-lint-ignore prefer-const
  let wolfGoldGiven: Array<number>;
  // deno-lint-ignore prefer-const
  let sheepGoldGiven: Array<number>;
  // deno-lint-ignore prefer-const
  let spiritGoldGiven: Array<number>;
  //endglobals from Util
  //globals from gs:
  // deno-lint-ignore prefer-const
  let gsAmounts: Array<number>;
  // deno-lint-ignore prefer-const
  let gsPlayerIndices: Array<number>;
  let gsLength: number;
  // deno-lint-ignore prefer-const
  let gsDist: Array<number>;
  //endglobals from gs
  //globals from BuySellItem:
  // deno-lint-ignore prefer-const
  let BuySellItem__itemShorthand: Array<string>;
  // deno-lint-ignore prefer-const
  let BuySellItem__itemCost: Array<number>;
  // deno-lint-ignore prefer-const
  let BuySellItem__itemCode: Array<number>;
  let BuySellItem__itemIndex: number;
  //endglobals from BuySellItem
  //globals from Smart:
  // deno-lint-ignore prefer-const
  let pub: Array<boolean>;
  // deno-lint-ignore prefer-const
  let rotated: player;
  // deno-lint-ignore prefer-const
  let perfectSmartIndex: number;
  // deno-lint-ignore prefer-const
  let perfectRound: boolean;
  // deno-lint-ignore prefer-const
  let perfectRoundCanceled: boolean;
  //endglobals from Smart
  //globals from TeamResources:
  // deno-lint-ignore prefer-const
  let TEAM_RESOURCES_DEFAULT: 0;
  // deno-lint-ignore prefer-const
  let TEAM_RESOURCES_TWINED: 1;
  // deno-lint-ignore prefer-const
  let TEAM_RESOURCES_HIDDEN: 2;
  let teamResources: number;
  //endglobals from TeamResources
  // User-defined
  let udg_Timer: timer;
  let udg_TimerWindow: timerdialog;
  let udg_Sheep: force;
  let udg_Wolf: force;
  let udg_Spirit: force;
  let udg_time: number;
  // deno-lint-ignore prefer-const
  let udg_Teams: number;
  // deno-lint-ignore prefer-const
  let udg_startLocation: Array<rect>;
  let udg_lastPlayer: number;
  let udg_Custom: player;
  let udg_pickIndex: number;
  let udg_Createtimer: timer;
  // deno-lint-ignore prefer-const
  let udg_switch: Array<number>;
  let udg_redTimer: timer;
  let udg_blueTimer: timer;
  let udg_yellowTimer: timer;
  let udg_orangeTimer: timer;
  let udg_greenTimer: timer;
  let udg_pinkTimer: timer;
  let udg_greyTimer: timer;
  let udg_lbTimer: timer;
  let udg_dgTimer: timer;
  let udg_brownTimer: timer;
  let udg_tealTimer: timer;
  let udg_purpleTimer: timer;
  let udg_round2: boolean;
  let udg_gameStarted: boolean;
  // deno-lint-ignore prefer-const
  let udg_unit: Array<unit>;
  // deno-lint-ignore prefer-const
  let udg_view: Array<fogmodifier | undefined>;
  // deno-lint-ignore prefer-const
  let udg_playerList: Array<player>;
  let udg_numSheep: number;
  let udg_numWolf: number;
  let udg_atempgroup: group;
  // deno-lint-ignore prefer-const
  let udg_zoom: Array<number>;
  let udg_transfer: number;
  let udg_atempint: number;
  let udg_createTimerWindow: timerdialog;
  let udg_wolfTimer: timer;
  // deno-lint-ignore prefer-const
  let udg_apr: Array<number>;
  let udg_timeString: string;
  // deno-lint-ignore prefer-const
  let udg_sheepLastGame: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_farmCount: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_kills: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_hideshow: Array<boolean>;
  let udg_atempboolean: boolean;
  let udg_switchOn: boolean;
  let udg_gameTimer: timer;
  let udg_gameTimeString: string;
  let udg_noplayer: player;
  let udg_lastGameString: string;
  let udg_viewOn: boolean;
  let udg_atempint2: number;
  let udg_giveGold: boolean;
  let udg_wolfSpawn: number;
  let udg_sheepInvul: number;
  let udg_positionOn: boolean;
  // deno-lint-ignore prefer-const
  let udg_positionArray: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_sheepCount: Array<number>;
  let udg_dummyWisps: number;
  // deno-lint-ignore prefer-const
  let udg_permanentHide: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_AFK: Array<number>;
  let udg_playerCount: number;
  let udg_farm: unit;
  // deno-lint-ignore prefer-const
  let udg_colorString: Array<string>;
  let udg_numPick: number;
  let udg_wispPoints: number;
  // deno-lint-ignore prefer-const
  let udg_saves: Array<number>;
  let udg_atempstring: string;
  // deno-lint-ignore prefer-const
  let udg_AFKOn: Array<number>;
  let udg_redHideTimer: timer;
  let udg_blueHideTimer: timer;
  let udg_tealHideTimer: timer;
  let udg_purpleHideTimer: timer;
  let udg_yellowHideTimer: timer;
  let udg_orangeHideTimer: timer;
  let udg_greenHideTimer: timer;
  let udg_pinkHideTimer: timer;
  let udg_greyHideTimer: timer;
  let udg_lbHideTimer: timer;
  let udg_dgHideTimer: timer;
  let udg_brownHideTimer: timer;
  // deno-lint-ignore prefer-const
  let udg_hideEsc: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_wolfZoom: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_sheepZoom: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_captains: Array<player>;
  let udg_captainsMultiboard: multiboard;
  let udg_captainTurn: number;
  let udg_Draft: force;
  let udg_captainRow: number;
  let udg_draftOn: boolean;
  // deno-lint-ignore prefer-const
  let udg_multiboardRow: Array<number>;
  let udg_giveOn: boolean;
  // deno-lint-ignore prefer-const
  let udg_wispZoom: Array<number>;
  let udg_versus: number;
  let udg_pickAgain: boolean;
  // deno-lint-ignore prefer-const
  let udg_gameTime: Array<number>;
  let udg_shareOn: boolean;
  let udg_versusOff: boolean;
  let udg_sheepGold: number;
  let udg_wolfGold: number;
  let udg_mapName: string;
  // deno-lint-ignore prefer-const
  let udg_accumPartner: Array<number>;
  let udg_atempint3: number;
  let udg_runSmart: boolean;
  // deno-lint-ignore prefer-const
  let udg_wasHere: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_itemIcon: Array<string>;
  // deno-lint-ignore prefer-const
  let udg_cloakAbility: Array<number>;
  let udg_someVersusBoolean: boolean;
  let udg_versusTime: number;
  let udg_firstBlood: boolean;
  // deno-lint-ignore prefer-const
  let udg_humiliationCheck: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_firstbloodKillCounter: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_firstbloodDeathCounter: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_switchEffect: Array<effect>;
  // deno-lint-ignore prefer-const
  let udg_RuneTimer: Array<timer>;
  // deno-lint-ignore prefer-const
  let udg_antiStackEffect: Array<effect>;
  let udg_wolfTimerWindow: timerdialog;
  // deno-lint-ignore prefer-const
  let udg_lssCounter: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_wins: Array<number>;
  let udg_qDeath: number;
  let udg_qDeathString: string;
  // deno-lint-ignore prefer-const
  let udg_QDeathTime: Array<number>;
  let udg_Force: force;
  // deno-lint-ignore prefer-const
  let udg_PlayerName: Array<string>;
  let udg_IntLoop: number;
  let udg_IntCloakCount: number;
  // deno-lint-ignore prefer-const
  let udg_unit2: Array<unit>;
  // deno-lint-ignore prefer-const
  let udg_totalSaves: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_totalKills: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_SheepColorR: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_SheepColorG: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_SheepColorB: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_freakHotkeys: Array<boolean>;
  let udg_runeSpawn: number;
  let udg_atempplayer: force;
  let udg_atempplayer2: force;
  let udg_atemploc: location;
  let udg_practiceOn: boolean;
  let udg_massTime: number;
  let udg_massTimer: timer;
  let udg_massTimerWindow: timerdialog;
  let udg_massTimeString: string;
  // deno-lint-ignore prefer-const
  let udg_sheepTimer: Array<timer>;
  // deno-lint-ignore prefer-const
  let udg_camLock: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_firstRound: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_disable: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_multiKillTimer: Array<timer>;
  // deno-lint-ignore prefer-const
  let udg_multiKillNum: Array<number>;
  let udg_maroonHideTimer: timer;
  let udg_navyHideTimer: timer;
  let udg_turquoiseHideTimer: timer;
  let udg_violetHideTimer: timer;
  let udg_wheatHideTimer: timer;
  let udg_peachHideTimer: timer;
  let udg_mintHideTimer: timer;
  let udg_lavenderHideTimer: timer;
  let udg_coalHideTimer: timer;
  let udg_snowHideTimer: timer;
  let udg_emeraldHideTimer: timer;
  let udg_peanutHideTimer: timer;
  let udg_maroonTimer: timer;
  let udg_navyTimer: timer;
  let udg_turquoiseTimer: timer;
  let udg_violetTimer: timer;
  let udg_wheatTimer: timer;
  let udg_peachTimer: timer;
  let udg_mintTimer: timer;
  let udg_lavenderTimer: timer;
  let udg_coalTimer: timer;
  let udg_snowTimer: timer;
  let udg_emeraldTimer: timer;
  let udg_peanutTimer: timer;
  let udg_paddingTimer: timer;
  let udg_paddingTimerWindow: timerdialog;
  let udg_mapExpand: boolean;
  let udg_mapShrink: boolean;
  let udg_mapSizeChangeTimer: timer;
  let udg_mapSizeChangeTimerWindow: timerdialog;
  let udg_blightCounter: number;
  let udg_blightAlterationTime: number;
  let udg_blightAlterations: number;
  let udg_draftMultiboardWidth: number;
  // deno-lint-ignore prefer-const
  let udg_playerColor: Array<playercolor>;
  // deno-lint-ignore prefer-const
  let udg_anonPlayerColors: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_masterColorString: Array<string>;
  // deno-lint-ignore prefer-const
  let udg_masterStartLocation: Array<rect>;
  // deno-lint-ignore prefer-const
  let udg_masterSheepColorB: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_masterSheepColorG: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_masterSheepColorR: Array<number>;
  let udg_isAnon: boolean;
  // deno-lint-ignore prefer-const
  let udg_vwins: Array<number>;
  let udg_scoreMultiboard: multiboard;
  // deno-lint-ignore prefer-const
  let udg_totalFarmsBuilt: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_totalFarmCountBeforeWolves: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_averageFarmCountBeforeWolves: Array<number>;
  // deno-lint-ignore prefer-const
  let udg_roundTimes: Array<string>;
  // deno-lint-ignore prefer-const
  let udg_sheepSurvived: Array<string>;
  let udg_originalCustom: player;
  let udg_anactualtempplayer: player;
  // deno-lint-ignore prefer-const
  let udg_autocontrol: Array<boolean>;
  // deno-lint-ignore prefer-const
  let udg_autoTime: boolean;
  let udg_atemploc2: location;

  // Generated
  let gg_trg_createSheep: trigger;
  let gg_trg_versusCountDown: trigger;
  let gg_trg_createWolves: trigger;
  let gg_trg_initialization: trigger;
  let gg_trg_startRound: trigger;
  let gg_trg_createLists: trigger;
  let gg_trg_createTimer: trigger;
  let gg_trg_smart: trigger;
  let gg_trg_start: trigger;
  let gg_trg_pickwolf: trigger;
  let gg_trg_picksheep: trigger;
  let gg_trg_reverse: trigger;
  let gg_trg_setupPick: trigger;
  let gg_trg_pick: trigger;
  let gg_trg_fair: trigger;
  let gg_trg_captains: trigger;
  let gg_trg_versus: trigger;
  let gg_trg_draftPlayer: trigger;
  let gg_trg_draftVersus: trigger;
  let gg_trg_practice: trigger;
  let gg_trg_controloff: trigger;
  let gg_trg_mapShrink: trigger;
  let gg_trg_mapExpand: trigger;
  let gg_trg_switch: trigger;
  let gg_trg_vamp: trigger;
  let gg_trg_view: trigger;
  let gg_trg_time: trigger;
  let gg_trg_autoCancel: trigger;
  let gg_trg_gold: trigger;
  let gg_trg_initMassTest: trigger;
  let gg_trg_attack: trigger;
  let gg_trg_stop: trigger;
  let gg_trg_owner: trigger;
  let gg_trg_speed: trigger;
  let gg_trg_mass: trigger;
  let gg_trg_reset: trigger;
  let gg_trg_redo: trigger;
  let gg_trg_massTimeUp: trigger;
  let gg_trg_UpdateStats: trigger;
  let gg_trg_continue: trigger;
  let gg_trg_cancel: trigger;
  let gg_trg_transfer: trigger;
  let gg_trg_end: trigger;
  let gg_trg_kick: trigger;
  let gg_trg_sheepWin: trigger;
  let gg_trg_wolvesWin: trigger;
  let gg_trg_ScoreboardMultiboard: trigger;
  let gg_trg_hide: trigger;
  let gg_trg_show: trigger;
  let gg_trg_hideEsc: trigger;
  let gg_trg_setupLeaderboard: trigger;
  let gg_trg_teamResources: trigger;
  let gg_trg_miscSmartSave: trigger;
  let gg_trg_wispControl: trigger;
  let gg_trg_sheepSwitch: trigger;
  let gg_trg_sheepVamp: trigger;
  let gg_trg_dummyWisps: trigger;
  let gg_trg_sheepDies: trigger;
  let gg_trg_sheepDamage: trigger;
  let gg_trg_spiritDies: trigger;
  let gg_trg_playerLeft: trigger;
  let gg_trg_createFarm: trigger;
  let gg_trg_cancelletruction: trigger;
  let gg_trg_farmDies: trigger;
  let gg_trg_destroyFarm: trigger;
  let gg_trg_destroyAllFarms: trigger;
  let gg_trg_destroyAllButSavings: trigger;
  let gg_trg_instanceIllusion: trigger;
  let gg_trg_castAbilitySpellCast: trigger;
  let gg_trg_castAbilityIssueOrder: trigger;
  let gg_trg_buyFromInventory: trigger;
  let gg_trg_attackFarmStrPot: trigger;
  let gg_trg_attackFarmBeamPot: trigger;
  let gg_trg_useItem: trigger;
  let gg_trg_increaseGoldSheep: trigger;
  let gg_trg_increaseGoldWolf: trigger;
  let gg_trg_regrowTrees: trigger;
  let gg_trg_escFix: trigger;
  let gg_trg_zoom: trigger;
  let gg_trg_zoomMsg: trigger;
  let gg_trg_position: trigger;
  let gg_trg_tk: trigger;
  let gg_trg_ts: trigger;
  let gg_trg_tf: trigger;
  let gg_trg_qds: trigger;
  let gg_trg_qDeath: trigger;
  let gg_trg_wins: trigger;
  let gg_trg_vwins: trigger;
  let gg_trg_last: trigger;
  let gg_trg_sc: trigger;
  let gg_trg_firstbloodCount: trigger;
  let gg_trg_partnerCount: trigger;
  let gg_trg_giveAllGold: trigger;
  let gg_trg_giveGold: trigger;
  let gg_trg_gall: trigger;
  let gg_trg_gs: trigger;
  let gg_trg_g: trigger;
  let gg_trg_lss: trigger;
  let gg_trg_seeTime: trigger;
  let gg_trg_unstuck: trigger;
  let gg_trg_giveUpCaptain: trigger;
  let gg_trg_timeCommands: trigger;
  let gg_trg_handicap: trigger;
  let gg_trg_clear: trigger;
  let gg_trg_control: trigger;
  let gg_trg_controllall: trigger;
  let gg_trg_shareControl: trigger;
  let gg_trg_autocontrol: trigger;
  let gg_trg_noAutoControl: trigger;
  let gg_trg_order: trigger;
  let gg_trg_Force_Afk: trigger;
  let gg_trg_setafk: trigger;
  let gg_trg_AFK: trigger;
  let gg_trg_blightManagement: trigger;
  let gg_trg_Create_Timers: trigger;
  let gg_trg_SexyOff: trigger;
  let gg_trg_SexyOn: trigger;
  let gg_trg_Anonymous: trigger;
  let gg_trg_Sheep_Color: trigger;
  let gg_trg_FreakHotkeys: trigger;
  let gg_trg_Alert_Sheep_Death: trigger;
  let gg_trg_Say_Q_Death: trigger;
  let gg_trg_Getting_Cloak: trigger;
  let gg_trg_Losing_Cloak: trigger;
  let gg_trg_Str_Pot_Kill: trigger;
  let gg_trg_Humil_Check: trigger;
  let gg_trg_Ward_gold: trigger;
  let gg_trg_First_Blood: trigger;
  let gg_trg_Last_Sheep_Standing: trigger;
  let gg_trg_MultiKillCheck: trigger;
  let gg_trg_timeRed: trigger;
  let gg_trg_timeBlue: trigger;
  let gg_trg_timeTeal: trigger;
  let gg_trg_timePurple: trigger;
  let gg_trg_timeYellow: trigger;
  let gg_trg_timeOrange: trigger;
  let gg_trg_timeGreen: trigger;
  let gg_trg_timePink: trigger;
  let gg_trg_timeGrey: trigger;
  let gg_trg_timeLb: trigger;
  let gg_trg_timeDg: trigger;
  let gg_trg_timeBrown: trigger;
  let gg_trg_timeMaroon: trigger;
  let gg_trg_timeNavy: trigger;
  let gg_trg_timeTurquoise: trigger;
  let gg_trg_timeViolet: trigger;
  let gg_trg_timeWheat: trigger;
  let gg_trg_timePeach: trigger;
  let gg_trg_timeMint: trigger;
  let gg_trg_timeLavender: trigger;
  let gg_trg_timeCoal: trigger;
  let gg_trg_timeSnow: trigger;
  let gg_trg_timeEmerald: trigger;
  let gg_trg_timePeanut: trigger;
  let gg_trg_Claws_of_Velocity_Recipe: trigger;
  let gg_trg_Claws_90_Recipe: trigger;
  let gg_trg_Nuke_Recipe: trigger;
  let gg_trg_Invis_Rune: trigger;
  let gg_trg_Speed_Rune: trigger;
  let gg_trg_Mana_Rune: trigger;
  let gg_trg_Omniscience_Rune: trigger;
  let gg_trg_Runes_Reset: trigger;
  let gg_trg_Runes_On: trigger;
  let gg_trg_cancelConstruction: trigger;
  // deno-lint-ignore prefer-const
  let AFK_PLAYING: 0;
  // deno-lint-ignore prefer-const
  let AFK_PLAYING_PICK: 1;
  // deno-lint-ignore prefer-const
  let AFK_RETURNED_DURING_ROUND: 2;
  // deno-lint-ignore prefer-const
  let AFK_AFK: 3;
  // deno-lint-ignore prefer-const
  let AFK_AFK_DURING_ROUND: 4;

  // deno-lint-ignore prefer-const
  let TEAMS_INIT: 0;
  // deno-lint-ignore prefer-const
  let TEAMS_OPEN: 1;
  // deno-lint-ignore prefer-const
  let TEAMS_LOCK_IE_PLAYING: 2;
  // deno-lint-ignore prefer-const
  let TEAMS_PICK: 3;
  // deno-lint-ignore prefer-const
  let TEAMS_CAPTAINS: 4;

  // deno-lint-ignore prefer-const
  let colors: Array<number>;
  // deno-lint-ignore prefer-const
  let playerTimes: Array<number>;
  // deno-lint-ignore prefer-const
  let sheepType: number;
  // deno-lint-ignore prefer-const
  let shepType: number;
  // deno-lint-ignore prefer-const
  let wispType: number;
  // deno-lint-ignore prefer-const
  let unstuckType: number;
  // deno-lint-ignore prefer-const
  let pickFarmType: number;
  // deno-lint-ignore prefer-const
  let permgolem: number;
  // deno-lint-ignore prefer-const
  let shareControlAbility: number;
  // deno-lint-ignore prefer-const
  let locateAlliesAbility: number;
  // deno-lint-ignore prefer-const
  let destroyAllFarms: number;
  // deno-lint-ignore prefer-const
  let blinkAbility: number;
  // deno-lint-ignore prefer-const
  let sheepInventoryAbility: number;
  // deno-lint-ignore prefer-const
  let translocationFarmType: number;
  // deno-lint-ignore prefer-const
  let hostFarmType: number;
  // deno-lint-ignore prefer-const
  let giveAlliesGoldSheepAbility: number;
  // deno-lint-ignore prefer-const
  let sentryFarmType: number;

  let recordTime: number;
  let loserTime: number;
  let recordHolders: string;
  let loserHolders: string;
  let fullTimeString: string;
  // deno-lint-ignore prefer-const
  let wasHere: Array<boolean>;
  // deno-lint-ignore prefer-const
  let noAutoControl: Array<boolean>;

  let myArgCount: number;
  // deno-lint-ignore prefer-const
  let myArg: Array<string>;

  // deno-lint-ignore prefer-const
  let autoCancelEnabled: boolean;

  // deno-lint-ignore prefer-const
  let AFKers: force;
  // deno-lint-ignore prefer-const
  let vampOn: boolean;
  // deno-lint-ignore prefer-const
  let someoneLeft: boolean;
  let createSheepSpawnIndex: number;
  let createSheepTimer: timer;
  // deno-lint-ignore prefer-const
  let gSheepAbilityFlag: Array<number>;
  // deno-lint-ignore prefer-const
  let kaleidoscope: number;
  let lastSheepReceiver: player;
  let lastWolfReceiver: player;
  // deno-lint-ignore prefer-const
  let lastReceivedFrom: Array<player>;
  // deno-lint-ignore prefer-const
  let goldCount: Array<number>;
  let goldRaces: number;

  //JASSHelper struct globals:
  // deno-lint-ignore prefer-const
  let s__File_AbilityCount: 10;
  // deno-lint-ignore prefer-const
  let s__File_PreloadLimit: 200;
  let s__File_Counter: number;
  // deno-lint-ignore prefer-const
  let s__File_List: Array<number>;
  // deno-lint-ignore prefer-const
  let s__File_AbilityList: Array<number>;
  // deno-lint-ignore prefer-const
  let s__File_filename: Array<string>;
  // deno-lint-ignore prefer-const
  let s__File_buffer: Array<string>;
  let si__colorsStruct_F: number;
  let si__colorsStruct_I: number;
  // deno-lint-ignore prefer-const
  let si__colorsStruct_V: Array<number>;
  // deno-lint-ignore prefer-const
  let s__colorsStruct_color1: Array<number>;
  // deno-lint-ignore prefer-const
  let s__colorsStruct_color2: Array<number>;
  // deno-lint-ignore prefer-const
  let s__colorsStruct_color3: Array<number>;
  let si__times_F: number;
  let si__times_I: number;
  // deno-lint-ignore prefer-const
  let si__times_V: Array<number>;
  // deno-lint-ignore prefer-const
  let s___times_pTime: Array<number>;
  // deno-lint-ignore prefer-const
  let s__times_pTime: Array<number>;
  // deno-lint-ignore prefer-const
  let s__times_pTimeMax: Array<number>;
  // deno-lint-ignore prefer-const
  let s__times_pTimeLoser: Array<number>;
  // deno-lint-ignore prefer-const
  let s__times_sheepCount: Array<number>;
  let f__arg__this: number;
}

//globals from Critter:
Critter___xRect = [];
Critter___yRect = [];
//endglobals from Critter
//globals from FileIO:
// Enable this if you want to allow the system to read files generated in patch 1.30 or below.
// NOTE: For this to work properly you must edit the 'Amls' ability and change the levels to 2
// as well as typing something in "Level 2 - Text - Tooltip - Normal" text field.
//
// Enabling this will also cause the system to treat files written with .write("") as empty files.
//
// This setting is really only intended for those who were already using the system in their map
// prior to patch 1.31 and want to keep old files created with this system to still work.
//endglobals from FileIO
//globals from HCL:
HCL__command = "";
//endglobals from HCL
//globals from SavingFarms:
SavingFarms__g = CreateGroup()!;
//endglobals from SavingFarms
//globals from Util:
TRANSFER_DISPLAY_SOURCE = 1;
TRANSFER_DISPLAY_INVOLVED = 2;
TRANSFER_DISPLAY_TEAM = 3;

wolfGoldGiven = Array.from({ length: bj_MAX_PLAYERS }, () => 0);
sheepGoldGiven = Array.from({ length: bj_MAX_PLAYERS }, () => 0);
spiritGoldGiven = Array.from({ length: bj_MAX_PLAYERS }, () => 0);
//endglobals from Util
//globals from gs:
gsAmounts = [];
gsPlayerIndices = [];
gsDist = [];
//endglobals from gs
//globals from BuySellItem:
BuySellItem__itemShorthand = [];
BuySellItem__itemCost = [];
BuySellItem__itemCode = [];
BuySellItem__itemIndex = 0;
//endglobals from BuySellItem
//globals from Smart:
pub = [];
rotated = Player(PLAYER_NEUTRAL_PASSIVE)!;
perfectSmartIndex = 0;
perfectRound = false;
perfectRoundCanceled = false;
//endglobals from Smart
//globals from TeamResources:
TEAM_RESOURCES_DEFAULT = 0;
TEAM_RESOURCES_TWINED = 1;
TEAM_RESOURCES_HIDDEN = 2;
teamResources = TEAM_RESOURCES_DEFAULT;
//endglobals from TeamResources
// User-defined
udg_time = 0;

TEAMS_INIT = 0;
TEAMS_OPEN = 1;
TEAMS_LOCK_IE_PLAYING = 2;
TEAMS_PICK = 3;
TEAMS_CAPTAINS = 4;

udg_Teams = TEAMS_INIT;
udg_startLocation = [];
udg_lastPlayer = 0;
udg_pickIndex = 0;
udg_switch = [];
udg_round2 = false;
udg_gameStarted = false;
udg_unit = [];
udg_view = [];
udg_playerList = [];
udg_numSheep = 0;
udg_numWolf = 0;
udg_zoom = [];
udg_transfer = 0;
udg_atempint = 0;
udg_apr = [];
udg_sheepLastGame = [];
udg_farmCount = [];
udg_kills = [];
udg_hideshow = [];
udg_atempboolean = false;
udg_switchOn = false;
udg_viewOn = false;
udg_atempint2 = 0;
udg_giveGold = false;
udg_wolfSpawn = 0;
udg_sheepInvul = 0;
udg_positionOn = false;
udg_positionArray = [];
udg_sheepCount = [];
udg_dummyWisps = 0;
udg_permanentHide = [];
udg_AFK = [];
udg_playerCount = 0;
udg_colorString = [];
udg_numPick = 0;
udg_wispPoints = 0;
udg_saves = [];
udg_AFKOn = [];
udg_hideEsc = [];
udg_wolfZoom = [];
udg_sheepZoom = [];
udg_captains = [];
udg_captainTurn = 0;
udg_captainRow = 0;
udg_draftOn = false;
udg_multiboardRow = [];
udg_giveOn = false;
udg_wispZoom = [];
udg_versus = 0;
udg_pickAgain = false;
udg_gameTime = [];
udg_shareOn = false;
udg_versusOff = false;
udg_sheepGold = 0;
udg_wolfGold = 0;
udg_accumPartner = [];
udg_atempint3 = 0;
udg_runSmart = false;
udg_wasHere = [];
udg_itemIcon = [];
udg_cloakAbility = [];
udg_someVersusBoolean = false;
udg_versusTime = 0;
udg_firstBlood = false;
udg_humiliationCheck = [];
udg_firstbloodKillCounter = [];
udg_firstbloodDeathCounter = [];
udg_switchEffect = [];
udg_RuneTimer = [];
udg_antiStackEffect = [];
udg_lssCounter = [];
udg_wins = [];
udg_qDeath = 0;
udg_QDeathTime = [];
udg_PlayerName = [];
udg_IntLoop = 0;
udg_IntCloakCount = 0;
udg_unit2 = [];
udg_totalSaves = [];
udg_totalKills = [];
udg_SheepColorR = [];
udg_SheepColorG = [];
udg_SheepColorB = [];
udg_freakHotkeys = [];
udg_runeSpawn = 0;
udg_practiceOn = false;
udg_massTime = 0;
udg_sheepTimer = [];
udg_camLock = [];
udg_firstRound = [];
udg_disable = [];
udg_multiKillTimer = [];
udg_multiKillNum = [];
udg_mapExpand = false;
udg_mapShrink = false;
udg_blightCounter = 0;
udg_blightAlterationTime = 0;
udg_blightAlterations = 0;
udg_draftMultiboardWidth = 0;
udg_playerColor = [];
udg_anonPlayerColors = [];
udg_masterColorString = [];
udg_masterStartLocation = [];
udg_masterSheepColorB = [];
udg_masterSheepColorG = [];
udg_masterSheepColorR = [];
udg_isAnon = false;
udg_vwins = [];
udg_totalFarmsBuilt = [];
udg_totalFarmCountBeforeWolves = [];
udg_averageFarmCountBeforeWolves = [];
udg_roundTimes = [];
udg_sheepSurvived = [];
udg_autocontrol = [];
udg_autoTime = true;

// Generated
AFK_PLAYING = 0;
AFK_PLAYING_PICK = 1;
AFK_RETURNED_DURING_ROUND = 2;
AFK_AFK = 3;
AFK_AFK_DURING_ROUND = 4;

colors = [];
playerTimes = [];
sheepType = FourCC("uC04");
shepType = FourCC("EC03");
wispType = FourCC("e000");
unstuckType = FourCC("H007");
pickFarmType = FourCC("h003");
permgolem = FourCC("n000");
shareControlAbility = FourCC("A022");
locateAlliesAbility = FourCC("A00D");
destroyAllFarms = FourCC("A00U");
blinkAbility = FourCC("A01V");
sheepInventoryAbility = FourCC("A01Z");
translocationFarmType = FourCC("h00C");
hostFarmType = FourCC("h00D");
giveAlliesGoldSheepAbility = FourCC("A024");
sentryFarmType = FourCC("eC09");

recordTime = 0;
loserTime = 999;
recordHolders = "";
loserHolders = "";
fullTimeString = "";
wasHere = [];
noAutoControl = [];

myArgCount = 0;
myArg = [];

autoCancelEnabled = true;

AFKers = CreateForce()!;
vampOn = false;
someoneLeft = false;
gSheepAbilityFlag = [];
kaleidoscope = FourCC("I00X");
lastReceivedFrom = [];
goldCount = Array.from({ length: bj_MAX_PLAYERS }, () => 0);

//JASSHelper struct globals:
s__File_AbilityCount = 10;
s__File_PreloadLimit = 200;
s__File_Counter = 0;
s__File_List = [];
s__File_AbilityList = [];
s__File_filename = [];
s__File_buffer = [];
si__colorsStruct_F = 0;
si__colorsStruct_I = 0;
si__colorsStruct_V = [];
s__colorsStruct_color1 = [];
s__colorsStruct_color2 = [];
s__colorsStruct_color3 = [];
si__times_F = 0;
si__times_I = 0;
si__times_V = [];
s___times_pTime = [];
s__times_pTime = [];
s__times_pTimeMax = [];
s__times_pTimeLoser = [];
s__times_sheepCount = [];

//Generated allocator of times
const s__times__allocate = (): number => {
  let _this = si__times_F;
  if ((_this !== 0)) {
    si__times_F = si__times_V[_this];
  } else {
    si__times_I = si__times_I + 1;
    _this = si__times_I;
  }
  if ((_this > 340)) {
    return 0;
  }
  s__times_pTime[_this] = (_this - 1) * 24;
  si__times_V[_this] = -1;
  return _this;
};

//Generated allocator of colorsStruct
declare global {
  // deno-lint-ignore prefer-const
  let s__colorsStruct__allocate: () => number;
}
s__colorsStruct__allocate = (): number => {
  let _this = si__colorsStruct_F;
  if ((_this !== 0)) {
    si__colorsStruct_F = si__colorsStruct_V[_this];
  } else {
    si__colorsStruct_I = si__colorsStruct_I + 1;
    _this = si__colorsStruct_I;
  }
  if ((_this > 8190)) {
    return 0;
  }

  si__colorsStruct_V[_this] = -1;
  return _this;
};

//library Critter:

const isLeft = (
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  x: number,
  y: number,
): number => {
  return (x1 - x0) * (y - y0) - (x - x0) * (y1 - y0);
};

const isPointInRectangle = (x: number, y: number): boolean => {
  let wn = 0;
  let i = 0;
  let x1: number;
  let y1: number;
  let x2: number;
  let y2: number;

  while (true) {
    if (i === 4) break;
    x1 = Critter___xRect[i];
    y1 = Critter___yRect[i];
    x2 = Critter___xRect[ModuloInteger(i + 1, 4)];
    y2 = Critter___yRect[ModuloInteger(i + 1, 4)];

    if (y1 <= y) {
      if (y2 > y && isLeft(x1, y1, x2, y2, x, y) > 0) {
        wn = wn + 1;
      }
    } else {
      if (y2 <= y && isLeft(x1, y1, x2, y2, x, y) < 0) {
        wn = wn - 1;
      }
    }

    i = i + 1;
  }

  return wn !== 0;
};

declare global {
  // deno-lint-ignore prefer-const
  let Critter_createCritter: () => void;
}
Critter_createCritter = () => {
  let x = GetRandomReal(-416, -128);
  let y = GetRandomReal(-1760, -1472);
  while (true) {
    if (isPointInRectangle(x, y)) break;
    x = GetRandomReal(-416, -128);
    y = GetRandomReal(-1760, -1472);
  }
  Critter___critter = CreateUnit(
    Player(PLAYER_NEUTRAL_PASSIVE)!,
    FourCC("n009"),
    x,
    y,
    GetRandomReal(0, 360),
  )!;
};

const Critter_moveCritter = () => {
  let x = GetRandomReal(-416, -128);
  let y = GetRandomReal(-1760, -1472);
  while (true) {
    if (isPointInRectangle(x, y)) break;
    x = GetRandomReal(-416, -128);
    y = GetRandomReal(-1760, -1472);
  }
  if (Critter___critter != null && UnitAlive(Critter___critter)) {
    IssuePointOrder(Critter___critter, "move", x, y);
  }
};

const Critter___critterInit = () => {
  const t = CreateTrigger();
  TriggerRegisterTimerEvent(t, 5, true);
  TriggerAddAction(t, Critter_moveCritter);
  Critter___xRect[0] = -416;
  Critter___xRect[1] = -256;
  Critter___xRect[2] = -128;
  Critter___xRect[3] = -320;
  Critter___yRect[0] = -1664;
  Critter___yRect[1] = -1472;
  Critter___yRect[2] = -1568;
  Critter___yRect[3] = -1760;
};

//library Critter ends
//library FileIO:

declare global {
  // deno-lint-ignore prefer-const
  let s__File_open: (filename: string) => number;
}
s__File_open = (filename: string): number => {
  let _this = s__File_List[0];

  if ((_this == null)) {
    _this = s__File_Counter + 1;
    s__File_Counter = _this;
  } else {
    s__File_List[0] = s__File_List[_this];
  }

  s__File_filename[_this] = filename;
  s__File_buffer[_this] = null as unknown as string;

  return _this;
};

// This is used to detect invalid characters which aren't supported in preload files.

declare global {
  // deno-lint-ignore prefer-const
  let s__File_write: (_this: number, contents: string) => number;
}
s__File_write = (_this: number, contents: string): number => {
  let i = 0;
  let c = 0;
  let len = StringLength(contents);
  let lev = 0;
  const prefix = "-";
  let chunk: string;

  s__File_buffer[_this] = null as unknown as string;

  // Check if the string is empty. If null, the contents will be cleared.
  if ((contents === "")) {
    len = len + 1;
  }

  // Begin to generate the file
  PreloadGenClear();
  PreloadGenStart();
  while (true) {
    if (i >= len) break;

    lev = 0;

    chunk = SubString(contents, i, i + s__File_PreloadLimit)!;
    Preload(
      '" )\ncall BlzSetAbilityTooltip(' + I2S(s__File_AbilityList[c]) + ', "' +
        prefix + chunk + '", ' + I2S(lev) + ")\n//",
    );
    i = i + s__File_PreloadLimit;
    c = c + 1;
  }
  Preload('" )\nendfunction\nfunction a takes nothing returns nothing\n //');
  PreloadGenEnd(s__File_filename[_this]);

  return _this;
};

const s__File_readPreload = (_this: number): string => {
  let i = 0;
  let lev = 0;
  const original: Array<string> = [];
  let chunk = "";
  let output = "";

  while (true) {
    if (i === s__File_AbilityCount) break;
    original[i] = BlzGetAbilityTooltip(s__File_AbilityList[i], 0)!;
    i = i + 1;
  }
  // Execute the preload file
  Preloader(s__File_filename[_this]);
  // Read the output
  i = 0;
  while (true) {
    if (i === s__File_AbilityCount) break;
    lev = 0;
    // Read from ability index 1 instead of 0 if
    // backwards compatability is enabled

    // Make sure the tooltip has changed
    chunk = BlzGetAbilityTooltip(s__File_AbilityList[i], lev)!;
    if ((chunk === original[i])) {
      if ((i === 0 && output === "")) {
        return null as unknown as string;
      }
      return output;
    }
    // Check if the file is an empty string or null
    if ((i === 0)) {
      if ((SubString(chunk, 0, 1) !== "-")) {
        return null as unknown as string;
      }
      chunk = SubString(chunk, 1, StringLength(chunk))!;
    }
    // Remove the prefix
    if ((i > 0)) {
      chunk = SubString(chunk, 1, StringLength(chunk))!;
    }
    // Restore the tooltip and append the chunk
    BlzSetAbilityTooltip(s__File_AbilityList[i], original[i], lev);
    output = output + chunk;
    i = i + 1;
  }
  return output;
};

declare global {
  // deno-lint-ignore prefer-const
  let s__File_close: (_this: number) => void;
}
s__File_close = (_this: number): void => {
  if ((s__File_buffer[_this] != null)) {
    s__File_write(_this, s__File_readPreload(_this) + s__File_buffer[_this]);
    s__File_buffer[_this] = null as unknown as string;
  }
  s__File_List[_this] = s__File_List[0];
  s__File_List[0] = _this;
};

declare global {
  // deno-lint-ignore prefer-const
  let s__File_readEx: (_this: number, close: boolean) => string;
}
s__File_readEx = (_this: number, close: boolean): string => {
  let output = s__File_readPreload(_this);
  const buf = s__File_buffer[_this];

  if (close) {
    s__File_close(_this);
  }

  if ((output == null)) {
    return buf;
  }

  if ((buf != null)) {
    output = output + buf;
  }

  return output;
};

//Implemented from module FileIO__FileInit:
const s__File_FileIO__FileInit___onInit = () => {
  // We can't use a single ability with multiple levels because
  // tooltips return the first level's value if the value hasn't
  // been set. This way we don't need to edit any object editor data.
  s__File_AbilityList[0] = FourCC("Amls");
  s__File_AbilityList[1] = FourCC("Aroc");
  s__File_AbilityList[2] = FourCC("Amic");
  s__File_AbilityList[3] = FourCC("Amil");
  s__File_AbilityList[4] = FourCC("Aclf");
  s__File_AbilityList[5] = FourCC("Acmg");
  s__File_AbilityList[6] = FourCC("Adef");
  s__File_AbilityList[7] = FourCC("Adis");
  s__File_AbilityList[8] = FourCC("Afbt");
  s__File_AbilityList[9] = FourCC("Afbk");

  // Backwards compatability check

  // Read check
  // s__File_readEx(
  //   s__File_write(s__File_open("FileTester.pld"), "FileIO_"),
  //   true,
  // );
};

//library FileIO ends
//library HCL:

const HCL__init = () => {
  let i: number;
  let j: number;
  let h: number;
  let v: number;
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789 -=,.";
  const map: Array<number> = [];
  const blocked: Array<boolean> = [];

  //precompute mapping [have to avoid invalid and normal handicaps]
  blocked[0] = true;
  blocked[50] = true;
  blocked[60] = true;
  blocked[70] = true;
  blocked[80] = true;
  blocked[90] = true;
  blocked[100] = true;
  i = 0;
  j = 0;
  while (true) {
    if (blocked[j]) {
      j = j + 1;
    }
    if (j >= 256) break;
    map[j] = i;
    i = i + 1;
    j = j + 1;
  }

  //Extract command string from player handicaps
  i = 0;
  while (true) {
    if (i >= 24) break;
    h = R2I(100 * GetPlayerHandicap(Player(i)!) + 0.5);
    if (!blocked[h]) {
      h = map[h];
      v = h / 12;
      h = h - v * 12;
      SetPlayerHandicap(Player(i)!, 0.5 + h / 10);
      HCL__command = HCL__command + SubString(chars, v, v + 1);
    }
    i = i + 1;
  }
};

//library HCL ends
//library Util:

//Chat event for everyone
declare global {
  // deno-lint-ignore prefer-const
  let TriggerRegisterPlayerChatEventAll: (
    t: trigger,
    s: string,
    b: boolean,
  ) => void;
}
TriggerRegisterPlayerChatEventAll = (
  t: trigger,
  s: string,
  b: boolean,
): void => {
  let i = 0;
  while (true) {
    if (i === 24) break;
    TriggerRegisterPlayerChatEvent(t, Player(i)!, s, b);
    i = i + 1;
  }
};

//Splits a string into arguments around string c. If bb true, first argument is ignored.
declare global {
  // deno-lint-ignore prefer-const
  let Split: (s: string, c: string, bb: boolean) => void;
}
Split = (s: string, c: string, bb: boolean): void => {
  let i = 0;
  let n = 0;
  while (true) {
    if (i === myArgCount) break;
    myArg[i] = null as unknown as string;
    i = i + 1;
  }
  i = 0;
  if (bb) {
    while (true) {
      if (SubString(s, 0, 1) === c || s == null || s == "") break;
      s = SubString(s, 1, StringLength(s))!;
    }
    s = SubString(s, 1, StringLength(s))!;
  }
  while (true) {
    if (s == null || s == "") break;
    i = 0;
    while (true) {
      if (
        SubString(s, i, i + 1) === c || SubString(s, i, i + 1) == null ||
        SubString(s, i, i + 1) == ""
      ) break;
      i = i + 1;
    }
    myArg[n] = SubString(s, 0, i)!;
    s = SubString(s, i + 1, StringLength(s))!;
    n = n + 1;
  }
  myArgCount = n;
};

declare global {
  // deno-lint-ignore prefer-const
  let B2S: (bool: boolean) => string;
}
B2S = (bool: boolean): string => {
  if (bool) {
    return "true";
  }
  return "false";
};

declare global {
  // deno-lint-ignore prefer-const
  let S2B: (str: string) => boolean;
}
S2B = (str: string): boolean => {
  if (StringCase(str, false) === "true") {
    return true;
  }
  return false;
};

//sets a default time if need be
declare global {
  // deno-lint-ignore prefer-const
  let defaultTime: () => void;
}
defaultTime = () => {
  if (!udg_autoTime) return;

  const i = CountPlayersInForceBJ(udg_Sheep);
  const n = CountPlayersInForceBJ(udg_Wolf);

  if (i === 1 && n === 3) udg_time = 180;
  else if (i === 2 && n === 4) udg_time = 360;
  else if (i === 3 && n === 4) udg_time = 720;
  else if (i === 3 && n === 5) udg_time = 480;
  else if (i === 4 && n === 6) udg_time = 600;
  else if (i === 5 && n === 5) udg_time = 900;
  else if (i === 5 && n === 6) udg_time = 720;
  else if (i === 6 && n === 6) udg_time = 1200;
  else if (i + n >= 12) udg_time = 1200;
  else if (i + n >= 10) udg_time = 900;
  else if (i + n >= 8) udg_time = 480;
  else udg_time = 360;

  updateLeaderboardSettingsDisplay();
};

declare global {
  // deno-lint-ignore prefer-const
  let transferGold: (
    sender: player,
    receiver: player,
    amount: number,
    display: number,
  ) => void;
}
transferGold = (
  sender: player,
  receiver: player,
  amount: number,
  display: number,
): void => {
  let i: number;

  if (IsPlayerAlly(sender, receiver) === false) {
    return;
  }

  if (amount > GetPlayerState(sender, PLAYER_STATE_RESOURCE_GOLD)) {
    amount = GetPlayerState(sender, PLAYER_STATE_RESOURCE_GOLD);
  }

  if (amount === 0) {
    return;
  }

  AdjustPlayerStateBJ(-amount, sender, PLAYER_STATE_RESOURCE_GOLD);
  AdjustPlayerStateBJ(amount, receiver, PLAYER_STATE_RESOURCE_GOLD);

  if (udg_switchOn === false && vampOn === false && udg_practiceOn === false) {
    if (IsPlayerInForce(sender, udg_Wolf)) {
      wolfGoldGiven[GetPlayerId(sender)] = wolfGoldGiven[GetPlayerId(sender)] +
        amount;
    } else if (IsPlayerInForce(sender, udg_Sheep)) {
      sheepGoldGiven[GetPlayerId(sender)] = sheepGoldGiven[GetPlayerId(sender)] + amount;
    } else {
      spiritGoldGiven[GetPlayerId(sender)] = spiritGoldGiven[GetPlayerId(sender)] + amount;
    }
  }

  if (display >= TRANSFER_DISPLAY_SOURCE) {
    DisplayTextToPlayer(
      sender,
      0,
      0,
      "|CFFFFCC00Gave " + I2S(amount) + " gold to " +
        udg_colorString[GetConvertedPlayerId(receiver)] +
        GetPlayerName(receiver) + "|CFFFFCC00.|r",
    );
  }

  if (display >= TRANSFER_DISPLAY_INVOLVED) {
    DisplayTextToPlayer(
      receiver,
      0,
      0,
      "|CFFFFCC00Recieved " + I2S(amount) + " gold from " +
        udg_colorString[GetConvertedPlayerId(sender)] + GetPlayerName(sender) +
        "|CFFFFCC00.|r",
    );
  }

  if (display >= TRANSFER_DISPLAY_TEAM) {
    i = 0;
    while (true) {
      if (i >= bj_MAX_PLAYERS) break;
      if (
        Player(i) !== sender && Player(i) !== receiver &&
        IsPlayerAlly(sender, Player(i)!)
      ) {
        DisplayTextToPlayer(
          Player(i)!,
          0,
          0,
          udg_colorString[GetConvertedPlayerId(sender)] +
            GetPlayerName(sender) + " |CFFFFCC00gave " + I2S(amount) +
            " gold to " + udg_colorString[GetConvertedPlayerId(receiver)] +
            GetPlayerName(receiver) + "|CFFFFCC00.|r",
        );
      }
      i = i + 1;
    }
  }
};

//library Util ends
//library gs:

// Adapted from https://softwareengineering.stackexchange.com/q/291117

// Sorts gsAmounts and gsPlayerIndices as one
const gsSort = () => {
  let swapAmount: number;
  let swapPlayerIndex: number;
  let i = 1;
  let n: number;

  while (true) {
    if (i >= gsLength) break;
    swapAmount = gsAmounts[i];
    swapPlayerIndex = gsPlayerIndices[i];
    n = i - 1;
    while (true) {
      if (n < 0 || gsAmounts[n] <= swapAmount) break;
      gsAmounts[n + 1] = gsAmounts[n];
      gsPlayerIndices[n + 1] = gsPlayerIndices[n];
      n = n - 1;
    }
    gsAmounts[n + 1] = swapAmount;
    gsPlayerIndices[n + 1] = swapPlayerIndex;
    i = i + 1;
  }
};

// Fills gsDist; expects gsAmounts, and gsLength to be set
const gsDistribute = (initial: number): void => {
  let total = initial;
  let i = 0;
  let idx = 0;

  // Sorts gsAmounts increasing, bringing gsPlayerIndices with it
  gsSort();

  // First pass find total and count
  while (true) {
    if (i === gsLength) break;
    idx = i;
    total = total + gsAmounts[i];
    if (i >= gsLength - 1 || total / (idx + 1) <= gsAmounts[idx + 1]) {
      break;
    }
    i = i + 1;
  }

  const count = idx + 1;
  const avg = total / count;
  const remainder = ModuloInteger(total, count);

  // Figure out gsDist gsAmounts
  i = 0;
  while (true) {
    if (i === count) break;

    if (i < remainder) {
      gsDist[i] = avg - gsAmounts[i] + 1;
    } else {
      gsDist[i] = avg - gsAmounts[i];
    }

    i = i + 1;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let gsDistributeGold: (fromPlayer: player, allGold: boolean) => void;
}
gsDistributeGold = (fromPlayer: player, allGold: boolean): void => {
  const pId = GetPlayerId(fromPlayer);
  let i = 0;
  let isAlly: boolean;
  let isHere: boolean;
  let isHuman: boolean;
  let isWisp: boolean;
  const includeSelf = !allGold;
  gsLength = 0;
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    isAlly = IsPlayerAlly(fromPlayer, Player(i)!);
    isHere = GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
      udg_AFK[i + 1] === AFK_PLAYING;
    isHuman = GetPlayerController(Player(i)!) === MAP_CONTROL_USER;
    isWisp = IsPlayerInForce(Player(i)!, udg_Spirit);
    if (
      isAlly && isHere && isHuman && (!isWisp || (i === pId && includeSelf)) &&
      (includeSelf || i !== pId)
    ) {
      gsPlayerIndices[gsLength] = i;
      if (i === pId) {
        gsAmounts[gsLength] = 0;
      } else {
        gsAmounts[gsLength] = GetPlayerState(
          Player(i)!,
          PLAYER_STATE_RESOURCE_GOLD,
        );
      }
      gsDist[gsLength] = 0;
      gsLength = gsLength + 1;
    }
    i = i + 1;
  }

  gsDistribute(GetPlayerState(fromPlayer, PLAYER_STATE_RESOURCE_GOLD));

  i = 0;
  while (true) {
    if (i === gsLength) break;
    if (gsPlayerIndices[i] !== pId && gsDist[i] > 0) {
      transferGold(
        fromPlayer,
        Player(gsPlayerIndices[i])!,
        gsDist[i],
        TRANSFER_DISPLAY_INVOLVED,
      );
    }
    i = i + 1;
  }
};

const Trig_gs_Actions = () => {
  gsDistributeGold(
    GetTriggerPlayer()!,
    GetEventPlayerChatString() === "-gsa",
  );
};

const Trig_gs_UnitActions = () => {
  const p = GetOwningPlayer(GetTriggerUnit()!);
  if (
    udg_giveGold && GetSpellAbilityId() === FourCC("A020") &&
    GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) > 0 &&
    !(IsPlayerInForce(p, udg_Wolf))
  ) {
    gsDistributeGold(p, true);
  }
};

const Trig_gs_Conditions = () => {
  return GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) > 0 &&
    udg_giveGold;
};

//===========================================================================
const InitTrig_gs = () => {
  let i = 0;
  const t = CreateTrigger();

  gg_trg_gs = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(gg_trg_gs, Player(i)!, "-gs", true);
    TriggerRegisterPlayerChatEvent(gg_trg_gs, Player(i)!, "-gsa", true);
    i = i + 1;
  }
  TriggerAddCondition(gg_trg_gs, Condition(Trig_gs_Conditions));
  TriggerAddAction(gg_trg_gs, Trig_gs_Actions);

  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_SPELL_CAST);
  TriggerAddAction(t, Trig_gs_UnitActions);
};

//library gs ends
//library transferHelpers:
const transferToCustom = () => {
  SetUnitOwner(GetEnumUnit()!, udg_Custom, true);
  SelectUnitAddForPlayer(GetEnumUnit()!, udg_Custom);
};

declare global {
  // deno-lint-ignore prefer-const
  let transferOwnershipOfHostFarm: () => void;
}
transferOwnershipOfHostFarm = () => {
  const g = GetUnitsOfTypeIdAll(FourCC("h00D"))!;
  ForGroup(g, transferToCustom);
  DestroyGroup(g);
};

//library transferHelpers ends
//library BuySellItem:

const BuySellItem__isRealWolf = () => {
  return GetUnitTypeId(GetFilterUnit()!) === FourCC("EC03") &&
    IsUnitIllusionBJ(GetFilterUnit()!) === false;
};

const BuySellItem__buyAction = () => {
  let i = 0;

  Split(GetEventPlayerChatString()!, " ", false);
  if (
    (myArg[0] !== "-buy" && myArg[0] !== "-b") || myArgCount === 1 ||
    StringLength(myArg[1]) <= 0
  ) {
    return;
  }

  const g = GetUnitsOfPlayerMatching(
    GetTriggerPlayer()!,
    Condition(BuySellItem__isRealWolf),
  )!;
  const u = FirstOfGroup(g);
  if (u == null) {
    DestroyGroup(g);
    return;
  }

  while (true) {
    if (i === BuySellItem__itemIndex) break;

    if (
      SubString(BuySellItem__itemShorthand[i], 0, StringLength(myArg[1])) ===
        myArg[1]
    ) {
      if (
        GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) >=
          BuySellItem__itemCost[i]
      ) {
        UnitAddItemByIdSwapped(BuySellItem__itemCode[i], u);
        AdjustPlayerStateSimpleBJ(
          GetTriggerPlayer()!,
          PLAYER_STATE_RESOURCE_GOLD,
          -BuySellItem__itemCost[i],
        );
      } else {
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              |CFF00AEEFThat item set is " +
            I2S(BuySellItem__itemCost[i]) + " gold.",
        );
      }
      break;
    }

    i = i + 1;
  }

  DestroyGroup(g);
};

const BuySellItem__sellAction = () => {
  let i = 0;

  Split(GetEventPlayerChatString()!, " ", false);
  if (
    (myArg[0] !== "-sell" && myArg[0] !== "-s") || myArgCount === 1 ||
    StringLength(myArg[1]) <= 0
  ) {
    return;
  }

  const g = GetUnitsOfPlayerMatching(
    GetTriggerPlayer()!,
    Condition(BuySellItem__isRealWolf),
  )!;
  const u = FirstOfGroup(g);

  if (u == null) {
    DestroyGroup(g);
    return;
  }

  const slot = S2I(myArg[1]) - 1;
  const itm = UnitItemInSlot(u, slot);

  if (itm == null) {
    DestroyGroup(g);
    return;
  }

  const itemId = GetItemTypeId(itm);
  while (true) {
    if (i === BuySellItem__itemIndex) break;

    if (itemId === BuySellItem__itemCode[i]) {
      AdjustPlayerStateSimpleBJ(
        GetTriggerPlayer()!,
        PLAYER_STATE_RESOURCE_GOLD,
        R2I(I2R(BuySellItem__itemCost[i]) / 4.2),
      );
      RemoveItem(itm);
      break;
    }

    i = i + 1;
  }

  DestroyGroup(g);
};

const BuySellItem__sellAllAction = () => {
  const p = GetTriggerPlayer()!;
  const g = GetUnitsOfPlayerMatching(p, Condition(BuySellItem__isRealWolf))!;
  let u = FirstOfGroup(g);
  let i: number;
  let n: number;
  let itm: item | undefined;
  let itemId: number;

  while (true) {
    if (u == null) break;

    i = 0;
    while (true) {
      itm = UnitItemInSlot(u, i);
      if (itm != null) {
        itemId = GetItemTypeId(itm);
        n = 0;
        while (true) {
          if (itemId === BuySellItem__itemCode[n]) {
            AdjustPlayerStateSimpleBJ(
              p,
              PLAYER_STATE_RESOURCE_GOLD,
              R2I(I2R(BuySellItem__itemCost[n]) / 4.2),
            );
            RemoveItem(itm);
            break;
          }

          n = n + 1;
          if (n === BuySellItem__itemIndex) break;
        }
      }

      i = i + 1;
      if (i === 6) break;
    }

    GroupRemoveUnit(g, u);
    u = FirstOfGroup(g);
  }
};

const BuySellItem__registerItem = (
  shorthand: string,
  cost: number,
  passedCode: number,
): void => {
  BuySellItem__itemShorthand[BuySellItem__itemIndex] = shorthand;
  BuySellItem__itemCost[BuySellItem__itemIndex] = cost;
  BuySellItem__itemCode[BuySellItem__itemIndex] = passedCode;
  BuySellItem__itemIndex = BuySellItem__itemIndex + 1;
};

const BuySellItem__init = () => {
  let t = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(t, "-b", false);
  TriggerAddAction(t, BuySellItem__buyAction);

  t = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(t, "-s", false);
  TriggerAddAction(t, BuySellItem__sellAction);

  t = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(t, "-sellall", true);
  TriggerAddAction(t, BuySellItem__sellAllAction);

  BuySellItem__registerItem("1c", 200, FourCC("I005"));
  BuySellItem__registerItem("boots", 112, FourCC("I009"));
  BuySellItem__registerItem("bril", 98, FourCC("I003"));
  BuySellItem__registerItem("beam", 112, FourCC("I000"));
  BuySellItem__registerItem("bomber", 75, FourCC("I002"));
  BuySellItem__registerItem("c8", 21, FourCC("I00B"));
  BuySellItem__registerItem("c16", 53, FourCC("I008"));
  BuySellItem__registerItem("c55", 200, FourCC("I005"));
  BuySellItem__registerItem("club", 56, FourCC("I00Z"));
  BuySellItem__registerItem("cloak", 200, FourCC("I001"));
  BuySellItem__registerItem("crystal", 28, FourCC("I006"));
  BuySellItem__registerItem("drums", 175, FourCC("I00U"));
  BuySellItem__registerItem("endur", 112, FourCC("I00H"));
  // call registerItem("forb", 200, 'I00W')
  BuySellItem__registerItem("gloves", 112, FourCC("I004"));
  BuySellItem__registerItem("gem", 70, FourCC("I00E"));
  BuySellItem__registerItem("golem", 140, FourCC("I00A"));
  BuySellItem__registerItem("kaleidoscope", 112, FourCC("I00X"));
  BuySellItem__registerItem("mana", 49, FourCC("I00D"));
  BuySellItem__registerItem("neck", 112, FourCC("I00I"));
  BuySellItem__registerItem("r110", 112, FourCC("I00M"));
  BuySellItem__registerItem("sheep", 56, FourCC("I00G"));
  BuySellItem__registerItem("suppression", 175, FourCC("I00V"));
  BuySellItem__registerItem("scythe", 112, FourCC("scyt"));
  BuySellItem__registerItem("sobi", 56, FourCC("I00N"));
  BuySellItem__registerItem("speed", 42, FourCC("I00F"));
  BuySellItem__registerItem("str", 42, FourCC("I007"));
  BuySellItem__registerItem("velocity", 112, FourCC("I00T"));
};

//library BuySellItem ends
//library TeamResources:

declare global {
  // deno-lint-ignore prefer-const
  let enforceTeamResourceMultiboard: () => void;
}
enforceTeamResourceMultiboard = () => {
  if (
    teamResources === TEAM_RESOURCES_HIDDEN ||
    (teamResources === TEAM_RESOURCES_TWINED &&
      !(IsLeaderboardDisplayed(PlayerGetLeaderboard(GetLocalPlayer())!)))
  ) {
    MultiboardSuppressDisplay(true);
  } else {
    MultiboardSuppressDisplay(false);
  }
};

const Trig_teamResources_Actions = () => {
  if (
    GetLocalPlayer() !== GetTriggerPlayer()! ||
    StringCase(GetEventPlayerChatString()!, false) !== "-teamresources"
  ) {
    return;
  }

  teamResources = ModuloInteger(teamResources + 1, 3);
  s__File_close(
    s__File_write(s__File_open("revo/teamResources.txt"), I2S(teamResources)!),
  );
  if (teamResources === TEAM_RESOURCES_DEFAULT) {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFShared resources shown",
    );
  } else if (teamResources === TEAM_RESOURCES_TWINED) {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFShared resources twinned",
    );
  } else {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFShared resources hidden",
    );
  }

  enforceTeamResourceMultiboard();
};

const Trig_teamResources_load = () => {
  const s = s__File_readEx(s__File_open("revo/teamResources.txt"), true);
  teamResources = S2I(s);
  enforceTeamResourceMultiboard();
};

//===========================================================================
const InitTrig_teamResources = () => {
  let i = 0;
  const t = CreateTrigger();

  gg_trg_teamResources = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(
      gg_trg_teamResources,
      Player(i)!,
      "-teamresources",
      false,
    );
    i = i + 1;
  }
  TriggerAddAction(gg_trg_teamResources, Trig_teamResources_Actions);

  TriggerRegisterTimerEventSingle(t, 0.01);
  TriggerAddAction(t, Trig_teamResources_load);
};

//library TeamResources ends
//===========================================================================
//
// Sheep Tag ReVoLuTiOn 9.5.5
//
//   Warcraft III map script
//   Generated by the Warcraft III World Editor
//   Map Author: discord.gg/Y4dHvwX
//
//===========================================================================

//***************************************************************************
//*
//*  Global Variables
//*
//***************************************************************************

const InitGlobals = () => {
  let i = 0;
  udg_Timer = CreateTimer();
  udg_Sheep = CreateForce()!;
  udg_Wolf = CreateForce()!;
  udg_Spirit = CreateForce()!;
  udg_lastPlayer = 0;
  udg_pickIndex = 1;
  udg_Createtimer = CreateTimer();
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_switch[i] = 0;
    i = i + 1;
  }

  udg_redTimer = CreateTimer();
  udg_blueTimer = CreateTimer();
  udg_yellowTimer = CreateTimer();
  udg_orangeTimer = CreateTimer();
  udg_greenTimer = CreateTimer();
  udg_pinkTimer = CreateTimer();
  udg_greyTimer = CreateTimer();
  udg_lbTimer = CreateTimer();
  udg_dgTimer = CreateTimer();
  udg_brownTimer = CreateTimer();
  udg_tealTimer = CreateTimer();
  udg_purpleTimer = CreateTimer();
  udg_round2 = false;
  udg_gameStarted = false;
  udg_numSheep = 0;
  udg_numWolf = 0;
  udg_atempgroup = CreateGroup()!;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_zoom[i] = 0;
    i = i + 1;
  }

  udg_transfer = 0;
  udg_atempint = 0;
  udg_wolfTimer = CreateTimer();
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_apr[i] = 0;
    i = i + 1;
  }

  udg_timeString = "";
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_sheepLastGame[i] = false;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_farmCount[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_kills[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_hideshow[i] = false;
    i = i + 1;
  }

  udg_atempboolean = false;
  udg_switchOn = false;
  udg_gameTimer = CreateTimer();
  udg_gameTimeString = "";
  udg_lastGameString = "";
  udg_viewOn = false;
  udg_atempint2 = 0;
  udg_giveGold = true;
  udg_wolfSpawn = 10;
  udg_sheepInvul = 5;
  udg_positionOn = false;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_positionArray[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_sheepCount[i] = 0;
    i = i + 1;
  }

  udg_dummyWisps = 0;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_permanentHide[i] = false;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_AFK[i] = AFK_PLAYING;
    i = i + 1;
  }

  udg_playerCount = 0;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_colorString[i] = "";
    i = i + 1;
  }

  udg_numPick = 0;
  udg_wispPoints = 0;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_saves[i] = 0;
    i = i + 1;
  }

  udg_atempstring = "";
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_AFKOn[i] = 0;
    i = i + 1;
  }

  udg_redHideTimer = CreateTimer();
  udg_blueHideTimer = CreateTimer();
  udg_tealHideTimer = CreateTimer();
  udg_purpleHideTimer = CreateTimer();
  udg_yellowHideTimer = CreateTimer();
  udg_orangeHideTimer = CreateTimer();
  udg_greenHideTimer = CreateTimer();
  udg_pinkHideTimer = CreateTimer();
  udg_greyHideTimer = CreateTimer();
  udg_lbHideTimer = CreateTimer();
  udg_dgHideTimer = CreateTimer();
  udg_brownHideTimer = CreateTimer();
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_hideEsc[i] = false;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_wolfZoom[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_sheepZoom[i] = 0;
    i = i + 1;
  }

  udg_captainTurn = 0;
  udg_Draft = CreateForce()!;
  udg_captainRow = 0;
  udg_draftOn = false;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_multiboardRow[i] = 0;
    i = i + 1;
  }

  udg_giveOn = true;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_wispZoom[i] = 0;
    i = i + 1;
  }

  udg_versus = 0;
  udg_pickAgain = false;
  i = 0;
  while (true) {
    if ((i > 2)) break;
    udg_gameTime[i] = 0;
    i = i + 1;
  }

  udg_shareOn = false;
  udg_versusOff = false;
  udg_sheepGold = 0;
  udg_wolfGold = 0;
  udg_mapName = "";
  i = 0;
  while (true) {
    if ((i > 576)) break;
    udg_accumPartner[i] = 0;
    i = i + 1;
  }

  udg_atempint3 = 0;
  udg_runSmart = false;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_wasHere[i] = false;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 17)) break;
    udg_itemIcon[i] = "";
    i = i + 1;
  }

  udg_someVersusBoolean = false;
  udg_versusTime = 0;
  udg_firstBlood = false;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_humiliationCheck[i] = false;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_firstbloodKillCounter[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_firstbloodDeathCounter[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 9)) break;
    udg_RuneTimer[i] = CreateTimer();
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_lssCounter[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_wins[i] = 0;
    i = i + 1;
  }

  udg_qDeath = 9999;
  udg_qDeathString = "";
  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_QDeathTime[i] = 0;
    i = i + 1;
  }

  udg_Force = CreateForce()!;
  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_PlayerName[i] = "";
    i = i + 1;
  }

  udg_IntLoop = 0;
  udg_IntCloakCount = 0;
  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_totalSaves[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_totalKills[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_SheepColorR[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_SheepColorG[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_SheepColorB[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_freakHotkeys[i] = false;
    i = i + 1;
  }

  udg_runeSpawn = 0;
  udg_atempplayer = CreateForce()!;
  udg_atempplayer2 = CreateForce()!;
  udg_practiceOn = false;
  udg_massTime = 120;
  udg_massTimer = CreateTimer();
  udg_massTimeString = "";
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_sheepTimer[i] = CreateTimer();
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_camLock[i] = false;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_firstRound[i] = false;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_disable[i] = false;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_multiKillTimer[i] = CreateTimer();
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_multiKillNum[i] = 0;
    i = i + 1;
  }

  udg_maroonHideTimer = CreateTimer();
  udg_navyHideTimer = CreateTimer();
  udg_turquoiseHideTimer = CreateTimer();
  udg_violetHideTimer = CreateTimer();
  udg_wheatHideTimer = CreateTimer();
  udg_peachHideTimer = CreateTimer();
  udg_mintHideTimer = CreateTimer();
  udg_lavenderHideTimer = CreateTimer();
  udg_coalHideTimer = CreateTimer();
  udg_snowHideTimer = CreateTimer();
  udg_emeraldHideTimer = CreateTimer();
  udg_peanutHideTimer = CreateTimer();
  udg_maroonTimer = CreateTimer();
  udg_navyTimer = CreateTimer();
  udg_turquoiseTimer = CreateTimer();
  udg_violetTimer = CreateTimer();
  udg_wheatTimer = CreateTimer();
  udg_peachTimer = CreateTimer();
  udg_mintTimer = CreateTimer();
  udg_lavenderTimer = CreateTimer();
  udg_coalTimer = CreateTimer();
  udg_snowTimer = CreateTimer();
  udg_emeraldTimer = CreateTimer();
  udg_peanutTimer = CreateTimer();
  udg_paddingTimer = CreateTimer();
  udg_mapExpand = false;
  udg_mapShrink = false;
  udg_mapSizeChangeTimer = CreateTimer();
  udg_blightCounter = 0;
  udg_blightAlterationTime = 0;
  udg_blightAlterations = 4;
  udg_draftMultiboardWidth = 25;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_playerColor[i] = PLAYER_COLOR_RED;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_anonPlayerColors[i] = -1;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_masterColorString[i] = "";
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_masterSheepColorB[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_masterSheepColorG[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_masterSheepColorR[i] = 0;
    i = i + 1;
  }

  udg_isAnon = false;
  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_vwins[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_totalFarmsBuilt[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_totalFarmCountBeforeWolves[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_averageFarmCountBeforeWolves[i] = 0;
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_roundTimes[i] = "";
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 24)) break;
    udg_sheepSurvived[i] = "";
    i = i + 1;
  }

  i = 0;
  while (true) {
    if ((i > 1)) break;
    udg_autocontrol[i] = false;
    i = i + 1;
  }
};

//***************************************************************************
//*
//*  Custom Script Code
//*
//***************************************************************************

//***************************************************************************
//*
//*  Custom Script Code
//*
//***************************************************************************
// global

declare global {
  // deno-lint-ignore prefer-const
  let s__times_create: () => number;
}
s__times_create = (): number => {
  const myTimes = s__times__allocate();
  let i = 0;
  s__times_pTimeMax[myTimes] = 0;
  s__times_pTimeLoser[myTimes] = 999;
  s__times_sheepCount[myTimes] = 0;
  while (true) {
    if (i === 24) break;
    s___times_pTime[s__times_pTime[myTimes] + i] = 0;
    i = i + 1;
  }
  return myTimes;
};

declare global {
  // deno-lint-ignore prefer-const
  let simpleformatTime: (r: number) => string;
}
simpleformatTime = (r: number): string => {
  let s = "";
  if (r >= 36000) {
    s = I2S(R2I(r / 3600))!;
    r = ModuloReal(r, 3600);
  } else if (r >= 3600) {
    s = (s.length > 0 ? "0" : "") + I2S(R2I(r / 3600));
    r = ModuloReal(r, 3600);
  }
  if (s !== "") {
    s = s + ":";
  }
  if (r >= 600) {
    s = s + I2S(R2I(r / 60));
    r = ModuloReal(r, 60);
  } else if (r >= 60) {
    s = s + (s.length > 0 ? "0" : "") + I2S(R2I(r / 60));
    r = ModuloReal(r, 60);
  } else {
    s = s + (s.length === 0 ? "0" : "00");
  }
  s = s + ":";
  if (r >= 10) {
    s = s + I2S(R2I(r));
  } else {
    s = s + (s.length > 0 ? "0" : "") + I2S(R2I(r));
  }
  return s;
};

declare global {
  // deno-lint-ignore prefer-const
  let formatTime: (r: number) => string;
}
formatTime = (r: number): string => {
  let s = "";
  if (r >= 36000) {
    s = I2S(R2I(r / 3600))!;
    r = ModuloReal(r, 3600);
  } else if (r >= 3600) {
    s = "0" + I2S(R2I(r / 3600));
    r = ModuloReal(r, 3600);
  }
  if (s !== "") {
    s = s + ":";
  }
  if (r >= 600) {
    s = s + I2S(R2I(r / 60));
    r = ModuloReal(r, 60);
  } else if (r >= 60) {
    s = s + "0" + I2S(R2I(r / 60));
    r = ModuloReal(r, 60);
  } else {
    s = s + "00";
  }
  s = s + ":";
  if (r >= 10) {
    s = s + R2S(r);
  } else {
    s = s + "0" + R2S(r);
  }
  return s;
};

const noHandicaps = () => {
  let i = 0;
  let playing: boolean;
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    playing = IsPlayerInForce(Player(i)!, udg_Sheep) ||
      IsPlayerInForce(Player(i)!, udg_Spirit) ||
      IsPlayerInForce(Player(i)!, udg_Wolf);
    if (GetPlayerHandicap(Player(i)!) !== 1 && playing) {
      return false;
    }
    i = i + 1;
  }
  return true;
};

declare global {
  // deno-lint-ignore prefer-const
  let updateTimes: () => void;
}
updateTimes = () => {
  let i = 0;
  let n: number;
  let s = "";
  let timeElapsed = TimerGetElapsed(udg_Timer);
  const emitRound = !someoneLeft && udg_sheepGold === 0 && udg_wolfGold === 0 &&
    noHandicaps() && terrain.name === "Revolution";
  let l__sheep = "";
  let addedSheep = false;
  let wolves = "";
  let addedWolf = false;

  if (timeElapsed <= 0.01) {
    timeElapsed = udg_time;
  }

  if (udg_switchOn || vampOn || udg_practiceOn) {
    return;
  }

  while (true) {
    if (i === 24) break;
    if (
      IsPlayerInForce(Player(i)!, udg_Sheep) ||
      IsPlayerInForce(Player(i)!, udg_Spirit)
    ) {
      s__times_sheepCount[playerTimes[i]] = s__times_sheepCount[playerTimes[i]] + 1;
      if (s === "") {
        s = udg_colorString[i + 1] + GetPlayerName(Player(i)!) + "|r";
      } else {
        s = s + ", " + udg_colorString[i + 1] + GetPlayerName(Player(i)!) +
          "|r";
      }
      if (emitRound) {
        if (addedSheep) {
          l__sheep = l__sheep + " " + I2S(i);
        } else {
          l__sheep = I2S(i)!;
          addedSheep = true;
        }
      }
      udg_roundTimes[i + 1] = udg_roundTimes[i + 1] + R2S(timeElapsed) + " | ";
      if (timeElapsed > s__times_pTimeMax[playerTimes[i]]) {
        s__times_pTimeMax[playerTimes[i]] = timeElapsed;
      }
      n = 0;
      while (true) {
        if (n === 24) break;
        if (
          IsPlayerInForce(Player(n)!, udg_Sheep) ||
          IsPlayerInForce(Player(n)!, udg_Spirit)
        ) {
          s___times_pTime[s__times_pTime[playerTimes[i]] + n] = s___times_pTime[s__times_pTime[playerTimes[i]] + n] +
            timeElapsed;
        }
        n = n + 1;
      }
    } else if (IsPlayerInForce(Player(i)!, udg_Wolf) && emitRound) {
      if (addedWolf) {
        wolves = wolves + " " + I2S(i);
      } else {
        wolves = I2S(i)!;
        addedWolf = true;
      }
    }
    i = i + 1;
  }

  udg_timeString = formatTime(timeElapsed);
  fullTimeString = s + " with " + formatTime(timeElapsed);

  if (timeElapsed > recordTime) {
    recordTime = timeElapsed;
    recordHolders = s;
    fullTimeString = fullTimeString + " (leader)";
  }

  if (timeElapsed < loserTime) {
    loserTime = timeElapsed;
    loserHolders = s;
    fullTimeString = fullTimeString + " (loser)";
  }

  if (emitRound) logRound(l__sheep, wolves, R2S(timeElapsed)!);
};

//Returns the index in which string part is found in string whole
declare global {
  // deno-lint-ignore prefer-const
  let InStr: (whole: string, part: string) => number;
}
InStr = (whole: string, part: string): number => {
  let index = 0;
  while (true) {
    if (StringLength(whole) - index < StringLength(part)) break;
    if (SubString(whole, index, StringLength(part) + index) === part) {
      return index;
    }
    index = index + 1;
  }
  return -1;
};

//Creates floating text to simulate the receivement of gold
declare global {
  // deno-lint-ignore prefer-const
  let GoldText: (amount: number, u: unit) => void;
}

const goldTextBuffer = new Map<unit, [amount: number, timeout: Timeout]>();
GoldText = (amount: number, u: unit): void => {
  const prev = goldTextBuffer.get(u);
  if (prev) {
    amount += prev[0];
    prev[1].cancel();
  }

  goldTextBuffer.set(u, [
    amount,
    setTimeout(0.05, () => {
      goldTextBuffer.delete(u);
      const tt = CreateTextTag()!;
      if (GetUnitAbilityLevel(u, FourCC("Binv")) > 0) {
        DestroyTextTag(tt);
      } else {
        if (IsVisibleToPlayer(GetUnitX(u), GetUnitY(u), GetLocalPlayer())) {
          SetTextTagPermanent(tt, false);
          SetTextTagPos(tt, GetUnitX(u), GetUnitY(u), 25);
          SetTextTagText(tt, "+" + I2S(amount), 0.0276);
          SetTextTagColor(tt, 217, 217, 25, 0);
          SetTextTagFadepoint(tt, 0);
          SetTextTagVelocity(tt, 0, 0.027734375);
          SetTextTagLifespan(tt, 3);
        }
      }
    }),
  ]);
};

//Returns a random value between the max X and min X (for random point in rect)
declare global {
  // deno-lint-ignore prefer-const
  let RandomX: (theRect: rect) => number;
}
RandomX = (theRect: rect): number => {
  return GetRandomReal(GetRectMinX(theRect), GetRectMaxX(theRect));
};

//Returns a random value between the max Y and min Y (for random point in rect)
declare global {
  // deno-lint-ignore prefer-const
  let RandomY: (theRect: rect) => number;
}
RandomY = (theRect: rect): number => {
  return GetRandomReal(GetRectMinY(theRect), GetRectMaxY(theRect));
};

//cancels the game if there are AFK sheep
declare global {
  // deno-lint-ignore prefer-const
  let autoCancel: () => boolean;
}
autoCancel = () => {
  let i = 0;
  let flag = false;
  if (autoCancelEnabled && udg_switchOn === false && vampOn === false) {
    while (true) {
      if (i === 24) break;
      if (IsPlayerInForce(Player(i)!, udg_Sheep)) {
        if (udg_apr[i + 1] < 3) {
          flag = true;
          if (IsPlayerInForce(Player(i)!, AFKers)) {
            udg_AFK[i + 1] = AFK_AFK;
            LeaderboardRemovePlayerItemBJ(
              Player(i + 1)!,
              GetLastCreatedLeaderboard()!,
            );
            DisplayTimedTextToForce(
              GetPlayersAll()!,
              5,
              (("							  " + udg_colorString[i + 1]) +
                GetPlayerName(Player(i + 1)!)) + " |rhas been set to AFK.",
            );
          }
          ForceAddPlayer(AFKers, Player(i)!);
        } else {
          ForceRemovePlayer(AFKers, Player(i)!);
        }
      }
      i = i + 1;
    }
  }
  if (flag) {
    TriggerExecute(gg_trg_cancel);
  }
  return flag;
};

declare global {
  // deno-lint-ignore prefer-const
  let removeAllUnits: () => void;
}
removeAllUnits = () => {
  let i = 0;
  const g = CreateGroup()!;
  while (true) {
    if (i === bj_MAX_PLAYER_SLOTS) break;
    GroupEnumUnitsOfPlayer(g, Player(i)!, null);
    ForGroup(g, removeEnumUnit);
    i = i + 1;
  }
  DestroyGroup(g);
};

declare global {
  // deno-lint-ignore prefer-const
  let moveEnumPlayerFromSpiritToSheep: () => void;
}
moveEnumPlayerFromSpiritToSheep = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
  ForceAddPlayer(udg_Sheep, GetEnumPlayer()!);
};

//***************************************************************************
//*
//*  Triggers
//*
//***************************************************************************

const InitCustomTriggers = () => {
  InitTrig_createSheep();
  InitTrig_versusCountDown();
  InitTrig_createWolves();
  InitTrig_initialization();
  InitTrig_startRound();
  InitTrig_createLists();
  InitTrig_createTimer();
  InitTrig_pickwolf();
  InitTrig_picksheep();
  InitTrig_captains();
  InitTrig_versus();
  InitTrig_draftPlayer();
  InitTrig_draftVersus();
  InitTrig_controloff();
  InitTrig_autoCancel();
  InitTrig_initMassTest();
  InitTrig_speed();
  InitTrig_mass();
  InitTrig_reset();
  InitTrig_redo();
  InitTrig_massTimeUp();
  InitTrig_UpdateStats();
  InitTrig_continue();
  InitTrig_cancel();
  InitTrig_transfer();
  InitTrig_end();
  InitTrig_kick();
  InitTrig_sheepWin();
  InitTrig_wolvesWin();
  InitTrig_ScoreboardMultiboard();
  InitTrig_hide();
  InitTrig_show();
  InitTrig_hideEsc();
  InitTrig_setupLeaderboard();
  InitTrig_teamResources();
  InitTrig_miscSmartSave();
  InitTrig_sheepSwitch();
  InitTrig_sheepVamp();
  InitTrig_dummyWisps();
  InitTrig_sheepDies();
  InitTrig_sheepDamage();
  InitTrig_spiritDies();
  InitTrig_playerLeft();
  InitTrig_createFarm();
  InitTrig_cancelConstruction();
  InitTrig_farmDies();
  InitTrig_destroyFarm();
  InitTrig_destroyAllFarms();
  InitTrig_destroyAllButSavings();
  InitTrig_instanceIllusion();
  InitTrig_castAbilitySpellCast();
  InitTrig_castAbilityIssueOrder();
  InitTrig_buyFromInventory();
  InitTrig_attackFarmStrPot();
  InitTrig_attackFarmBeamPot();
  InitTrig_useItem();
  InitTrig_suppressionField();
  InitTrig_kaleidoscope();
  InitTrig_increaseGoldSheep();
  InitTrig_increaseGoldWolf();
  InitTrig_escFix();
  InitTrig_zoom();
  InitTrig_zoomMsg();
  InitTrig_position();
  InitTrig_tk();
  InitTrig_ts();
  InitTrig_tf();
  InitTrig_qds();
  InitTrig_qDeath();
  InitTrig_wins();
  InitTrig_vwins();
  InitTrig_last();
  InitTrig_sc();
  InitTrig_firstbloodCount();
  InitTrig_partnerCount();
  InitTrig_giveAllGold();
  InitTrig_giveGold();
  InitTrig_gall();
  InitTrig_gs();
  InitTrig_g();
  InitTrig_lss();
  InitTrig_seeTime();
  InitTrig_unstuck();
  InitTrig_giveUpCaptain();
  InitTrig_timeCommands();
  InitTrig_handicap();
  InitTrig_clear();
  InitTrig_control();
  InitTrig_controllal();
  InitTrig_shareControl();
  InitTrig_antishareruin();
  InitTrig_autocontrol();
  InitTrig_noAutoControl();
  InitTrig_order();
  InitTrig_Force_Afk();
  InitTrig_setafk();
  InitTrig_AFK();
  InitTrig_blightManagement();
  InitTrig_Create_Timers();
  InitTrig_SexyOff();
  InitTrig_SexyOn();
  InitTrig_Anonymous();
  InitTrig_Sheep_Color();
  InitTrig_FreakHotkeys();
  InitTrig_Alert_Sheep_Death();
  InitTrig_Say_Q_Death();
  InitTrig_Getting_Cloak();
  InitTrig_Losing_Cloak();
  InitTrig_Anti_Stack_Stomp();
  InitTrig_Str_Pot_Kill();
  InitTrig_Humil_Check();
  InitTrig_Ward_gold();
  InitTrig_First_Blood();
  InitTrig_Last_Sheep_Standing();
  InitTrig_MultiKillCheck();
  InitTrig_timeRed();
  InitTrig_timeBlue();
  InitTrig_timeTeal();
  InitTrig_timePurple();
  InitTrig_timeYellow();
  InitTrig_timeOrange();
  InitTrig_timeGreen();
  InitTrig_timePink();
  InitTrig_timeGrey();
  InitTrig_timeLb();
  InitTrig_timeDg();
  InitTrig_timeBrown();
  InitTrig_timeMaroon();
  InitTrig_timeNavy();
  InitTrig_timeTurquoise();
  InitTrig_timeViolet();
  InitTrig_timeWheat();
  InitTrig_timePeach();
  InitTrig_timeMint();
  InitTrig_timeLavender();
  InitTrig_timeCoal();
  InitTrig_timeSnow();
  InitTrig_timeEmerald();
  InitTrig_timePeanut();
  InitTrig_Claws_of_Velocity_Recipe();
  InitTrig_Claws_90_Recipe();
  InitTrig_Nuke_Recipe();
  InitTrig_Runes_Reset();
  InitTrig_Runes_On();
};

//===========================================================================
const RunInitializationTriggers = () => {
  ConditionalTriggerExecute(gg_trg_initialization);
};

//***************************************************************************
//*
//*  Main Initialization
//*
//***************************************************************************

//===========================================================================
addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  Critter___critterInit();
  HCL__init();
  BuySellItem__init();

  InitGlobals();
  InitCustomTriggers();
  RunInitializationTriggers();
});
