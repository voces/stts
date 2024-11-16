import { MapPlayerEx } from "handles/MapPlayerEx";
import { logRound } from "jass/triggers/hostCommands/UpdateStats";
import { addRound, addTime, rounds } from "stats/times";
import { income, president, settings, terrain } from "settings/settings";

const noHandicaps = () => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const playing = IsPlayerInForce(Player(i)!, udg_Sheep) ||
      IsPlayerInForce(Player(i)!, udg_Spirit) ||
      IsPlayerInForce(Player(i)!, udg_Wolf);
    if (GetPlayerHandicap(Player(i)!) !== 1 && playing) return false;
  }
  return true;
};

export const updateTimes = () => {
  let s = "";
  let timeElapsed = TimerGetElapsed(udg_Timer);
  const emitRound = !someoneLeft && udg_sheepGold === 0 && udg_wolfGold === 0 &&
    noHandicaps() && terrain.name === "Classic" && !president.enabled && income.sheep === 1 &&
    income.wolves === 1 && income.savings === 1;
  let sheepString = "";
  let sheep = 0;
  const sheepPlayers: MapPlayerEx[] = [];
  let wolvesString = "";
  let wolves = 0;
  const wolfPlayers: MapPlayerEx[] = [];

  if (timeElapsed <= 0.01) timeElapsed = udg_time;

  if (udg_switchOn || vampOn || udg_practiceOn) return;

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p) continue;
    if (p.isSheep || p.isWisp) {
      sheepPlayers.push(p);
      s__times_sheepCount[playerTimes[i]]++;
      if (s === "") s = p.coloredName;
      else s = s + ", " + p;
      if (sheep > 0) sheepString += " " + I2S(i);
      else sheepString = I2S(i)!;
      udg_roundTimes[i + 1] += timeElapsed.toFixed(3) + " | ";
      if (timeElapsed > s__times_pTimeMax[playerTimes[i]]) s__times_pTimeMax[playerTimes[i]] = timeElapsed;
      for (let n = 0; n < bj_MAX_PLAYERS; n++) {
        if (IsPlayerInForce(Player(n)!, udg_Sheep) || IsPlayerInForce(Player(n)!, udg_Spirit)) {
          s___times_pTime[s__times_pTime[playerTimes[i]] + n] += timeElapsed;
        }
      }
      sheep++;
    } else if (p.isWolf) {
      wolfPlayers.push(p);
      if (wolves > 0) wolvesString += " " + I2S(i);
      else wolvesString = I2S(i)!;
      wolves++;
    }
  }

  let showLeader = false;
  if (!someoneLeft) {
    const mode = `${sheep}v${wolves}`;
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      if (
        IsPlayerInForce(Player(i)!, udg_Sheep) ||
        IsPlayerInForce(Player(i)!, udg_Spirit)
      ) addTime(i, mode, timeElapsed);
    }
    addRound(sheepPlayers, wolfPlayers, timeElapsed);
    let count = 0;
    for (const round of rounds) {
      if (round.sheep.length !== sheepPlayers.length || round.wolves.length !== wolfPlayers.length) continue;
      count++;
      if (count > 3) {
        showLeader = true;
        break;
      }
    }
  }

  udg_timeString = formatTime(timeElapsed);
  fullTimeString = s + " with " + formatTime(timeElapsed);

  let leader = true;
  let loser = true;
  if (showLeader) {
    for (const round of rounds) {
      if (
        round.sheep.length !== settings.teamConfiguration.sheep.length ||
        round.wolves.length !== settings.teamConfiguration.wolves.length
      ) continue;
      if (round.time > timeElapsed) leader = false;
      if (round.time < timeElapsed) loser = false;
      if (!leader && !loser) continue;
    }

    if (leader) fullTimeString += " (leader)";
    if (loser) fullTimeString += " (loser)";
  }

  if (emitRound) logRound(sheepString, wolvesString, timeElapsed.toFixed(3));
};
