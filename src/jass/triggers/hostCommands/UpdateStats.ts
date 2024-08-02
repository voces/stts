import { defineEvent, defineNumberValue, defineStringValue, setPlayerFlag } from "w3ts-w3mmd";
import { MapPlayerEx } from "handles/MapPlayerEx";

import { displayTimedTextToAll } from "util/displayTimedTextToAll";

export const logRound = defineEvent("round", "{0} vs {1}: lasted {2}", "sheep", "wolves", "time");
export const logMassingTest = defineEvent("massingTest", "{0}", "time");
const logEnd = defineEvent("end", "The game was ended");

const logTimes = defineNumberValue("Times", "high", "leaderboard", "real");
const logFarmsBuilt = defineNumberValue("Farms Built", "high", "track", "int");
const logAverageFarmCountBeforeWolves = defineNumberValue("Average Farm Count Before Wolves", "high", "track", "real");
const logSaves = defineNumberValue("Saves", "high", "track", "int");
const logKills = defineNumberValue("Kills", "high", "track", "int");
const logWins = defineNumberValue("Wins", "high", "track", "int");
const logVersusWins = defineNumberValue("Versus Wins", "high", "track", "int");
const logLastSheepStanding = defineNumberValue("Last Sheep Standing", "high", "track", "int");
const logFirstBloodDeaths = defineNumberValue("First Blood Deaths", "high", "track", "int");
const logFirstBloodKills = defineNumberValue("First Blood Kills", "high", "track", "int");
const logWolfGoldGiven = defineNumberValue("Wolf Gold Given", "high", "track", "int");
const logSheepGoldGiven = defineNumberValue("Sheep Gold Given", "high", "track", "int");
const logSpiritGoldGiven = defineNumberValue("Spirit Gold Given", "high", "track", "int");
const logQuickestDeath = defineNumberValue("Quickest Death", "high", "track", "real");
const logSheepTimes = defineNumberValue("Sheep Times", "high", "track", "real");
const logRoundTimes = defineStringValue("Round Times", "none");
const logSheepSurvived = defineStringValue("Sheep Survived", "none");

const Trig_UpdateStats_forEnumPlayer = () => {
  const p = MapPlayerEx.fromEnum()!;
  if (p.controller !== MAP_CONTROL_USER) return;

  setPlayerFlag(p.handle, "drawer");
  logFarmsBuilt(p.handle, udg_totalFarmsBuilt[p.cid]);
  logAverageFarmCountBeforeWolves(
    p.handle,
    udg_totalFarmCountBeforeWolves[p.cid - 1].reduce((a, b) => a + b) /
      udg_totalFarmCountBeforeWolves[p.cid - 1].length,
  );
  logSaves(p.handle, udg_totalSaves[p.cid]);
  logKills(p.handle, udg_totalKills[p.cid]);
  logWins(p.handle, udg_wins[p.cid]);
  logVersusWins(p.handle, udg_vwins[p.cid]);
  logLastSheepStanding(p.handle, udg_lssCounter[p.cid]);
  logFirstBloodDeaths(p.handle, udg_firstbloodDeathCounter[p.cid]);
  logFirstBloodKills(p.handle, udg_firstbloodKillCounter[p.cid]);
  logWolfGoldGiven(p.handle, wolfGoldGiven[p.id]);
  logSheepGoldGiven(p.handle, sheepGoldGiven[p.id]);
  logSpiritGoldGiven(p.handle, spiritGoldGiven[p.id]);
  logSheepTimes(p.handle, TimerGetElapsed(udg_sheepTimer[p.cid]));
  logTimes(p.handle, s___times_pTime[s__times_pTime[playerTimes[p.id]] + p.id]);
  logRoundTimes(p.handle, udg_roundTimes[p.cid]);
  logSheepSurvived(p.handle, udg_sheepSurvived[p.cid]);
  if (Number.isFinite(udg_QDeathTime[p.cid])) logQuickestDeath(p.handle, udg_QDeathTime[p.cid]);
};

const Trig_UpdateStats_Actions = () => {
  ForForce(GetPlayersAll()!, Trig_UpdateStats_forEnumPlayer);
  logEnd();
  TriggerSleepAction(0.3);
  displayTimedTextToAll(
    `                              |cff00aeefW3MMD|r stats have been saved to the replay!
    
    Upload your replays to |cff00aeefhttps://wc3stats.com/|r`,
    30,
  );
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_UpdateStats: () => void;
}
InitTrig_UpdateStats = () => {
  gg_trg_UpdateStats = CreateTrigger();
  TriggerAddAction(gg_trg_UpdateStats, Trig_UpdateStats_Actions);
};
