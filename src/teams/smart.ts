import { addScriptHook, W3TS_HOOK } from "w3ts";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { clearForces } from "util/clearForces";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { setSc } from "jass/triggers/commands/sc";
import { getAllHandicap, getPubHandicap } from "jass/triggers/commands/handicap";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { rounds } from "stats/times";

let pubStart = 0;

let lastActivePlayerCount = 0;
let lastSheepToDraft = 0;

const DESIRED_SOLUTIONS = 10;
const MAX_ATTEMPTS = 3000;

const nChooseM = (n: number, m: number): number => {
  if (m > n) return 0; // Not possible to choose more elements than available
  if (m === 0 || m === n) return 1; // Only one way to choose all or none

  // Use symmetry: C(n, m) = C(n, n - m)
  m = Math.min(m, n - m);

  let result = 1;
  for (let i = 1; i <= m; i++) {
    result = (result * (n - i + 1)) / i; // Multiply and divide iteratively
  }

  return result;
};

const normalizeAccum = () => {
  const counts: number[] = [];
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    for (let n = 1; n <= bj_MAX_PLAYERS; n++) {
      counts.push(udg_accumPartner[i * bj_MAX_PLAYERS + n]);
    }
  }
  return counts;
};

const isActivePlayer = (p: player) =>
  GetPlayerSlotState(p) === PLAYER_SLOT_STATE_PLAYING &&
  udg_AFK[GetConvertedPlayerId(p)] === AFK_PLAYING &&
  !(pub[GetPlayerId(p)]);

const getActivePlayerCount = (): number => {
  let count = 0;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) if (isActivePlayer(Player(i)!)) count++;
  return count;
};

export const maybeRotate = () => {
  const currentSc = udg_sheepCount[GetConvertedPlayerId(rotated)];
  let lowestSc = Infinity;
  let ties = 0;
  let newRotated!: player;
  if (GetPlayerSlotState(rotated) === PLAYER_SLOT_STATE_LEFT) rotated = Player(PLAYER_NEUTRAL_PASSIVE)!;
  if (rotated === Player(PLAYER_NEUTRAL_PASSIVE)!) return;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (udg_AFK[i + 1] === AFK_PLAYING && GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING) {
      if (udg_sheepCount[i + 1] < lowestSc) {
        lowestSc = udg_sheepCount[i + 1];
        newRotated = Player(i)!;
        ties = 0;
      } else if (udg_sheepCount[i + 1] === lowestSc) {
        // WAT?
        if (GetRandomReal(0, 1) < 1 / (ties + 2)) newRotated = Player(i)!;
        ties++;
      }
    }
  }
  if (lowestSc <= currentSc) return;
  udg_AFK[GetConvertedPlayerId(rotated)] = AFK_PLAYING;
  udg_AFK[GetConvertedPlayerId(newRotated)] = AFK_AFK;
  const unrotated = rotated;
  rotated = newRotated;
  TimerStart(CreateTimer(), 0.25, false, () => {
    DestroyTimer(GetExpiredTimer()!);
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "|rSwapping in " +
        udg_colorString[GetConvertedPlayerId(unrotated)] +
        GetPlayerName(unrotated) + "|r.",
    );
  });
};

const getRandomTeam = (
  sheep: number,
  counts: number[],
): number[] => {
  const minScPools: number[][] = [];
  while (minScPools.reduce((count, pool) => count + pool.length, 0) < sheep) {
    let pool: number[] = [];
    let minSc = Infinity;
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      if (!isActivePlayer(Player(i)!) || minScPools.some((pool) => pool.includes(i))) continue;
      const sheepCount = counts[i * bj_MAX_PLAYERS + i];
      if (sheepCount < minSc) {
        minSc = sheepCount;
        pool = [i];
      } else if (sheepCount === minSc) pool.push(i);
    }
    minScPools.push(pool);
  }

  const primary = minScPools.slice(0, minScPools.length - 1).flat();
  const secondary = minScPools[minScPools.length - 1];

  const others: number[] = [];
  while (others.length < sheep - primary.length) {
    const pick = secondary[Math.floor(Math.random() * secondary.length)];
    if (!others.includes(pick)) others.push(pick);
  }

  return [...primary, ...others];
};

type Solution = [team: number[], pc: number, recency: number[]][];

const solve = (activePlayerCount: number, sheep: number) => {
  const depth = Math.min(nChooseM(activePlayerCount, sheep), 12);

  const solutions: Solution[] = [];
  for (
    let i = 0;
    // We're extremely unlikely to reach DESIRED_SOLUTIONS beyond 2v4
    solutions.length < DESIRED_SOLUTIONS && i < MAX_ATTEMPTS / activePlayerCount;
    i++
  ) {
    const sampleCounts = normalizeAccum();
    const solution: Solution = [];
    let flag = false;
    for (let n = 0; n < depth; n++) {
      const team = getRandomTeam(sheep, sampleCounts);

      for (const a of team) {
        for (const b of team) sampleCounts[a * bj_MAX_PLAYERS + b]++;
      }

      const pc = sampleCounts.reduce((sum, c) => sum + c ** 2, 0);
      if (solutions.length > 0) {
        // Ties are actually EXTREMELY unlikely beyond 2v4 to a depth of 15
        if (pc > solutions[0][n][1]) {
          flag = true;
          break;
        } else if (pc < solutions[0][n][1]) solutions.splice(0);
      }

      const recency = team.map((pid) => {
        for (let t = solution.length - 1; t >= 0; t--) {
          for (let e = 0; e < sheep; e++) {
            if (solution[t][0][e] === pid) {
              return solution.length - t;
            }
          }
        }
        for (let t = rounds.length - 1; t >= 0; t--) {
          for (let e = 0; e < rounds[t].sheep.length; e++) {
            if (rounds[t].sheep[e].id === pid) {
              return solution.length + rounds.length - t;
            }
          }
        }
        return Infinity;
      }).sort();

      solution.push([team, pc, recency]);
    }

    if (!flag) solutions.push(solution);
  }

  solutions.sort((a, b) => {
    for (let i = 0; i < depth; i++) {
      const diff = a[i][1] - b[i][1];
      if (diff !== 0) return diff;
    }

    for (let i = 0; i < depth; i++) {
      for (let n = 0; n < sheep; n++) {
        const diff = b[i][2][n] - a[i][2][n];
        if (diff !== 0) return diff;
      }
    }

    return 0;
  });

  return solutions[0][0][0];
};

const draft = (activePlayerCount: number, sheep: number) => {
  const team = rounds.length > 0 ? solve(activePlayerCount, sheep) : getRandomTeam(sheep, normalizeAccum());
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = Player(i)!;
    if (!isActivePlayer(p)) continue;
    if (team.some((p) => p === i)) ForceAddPlayer(udg_Sheep, p);
    else ForceAddPlayer(udg_Wolf, p);
  }
};

export const smart = (sheep?: number) => {
  let sheepToDraft: number;
  const activePlayerCount = getActivePlayerCount();
  if (typeof sheep !== "number") {
    sheepToDraft = lastActivePlayerCount === activePlayerCount
      ? lastSheepToDraft
      : Math.floor(activePlayerCount / 2 - 1);
  } else sheepToDraft = sheep;
  if (sheepToDraft <= 0) sheepToDraft = 1;
  lastSheepToDraft = sheepToDraft;
  lastActivePlayerCount = activePlayerCount;
  clearForces();

  draft(activePlayerCount, sheepToDraft);

  const end = pubStart + bj_MAX_PLAYERS;
  let addToSheep = true;
  let addedToWolf = false;
  for (let i = pubStart; i < end; i++) {
    const n = i % bj_MAX_PLAYERS;
    if (pub[n] && GetPlayerSlotState(Player(n)!) === PLAYER_SLOT_STATE_PLAYING) {
      if (addToSheep) ForceAddPlayer(udg_Sheep, Player(n)!);
      else {
        ForceAddPlayer(udg_Wolf, Player(n)!);
        if (!addedToWolf) {
          pubStart = n;
          addedToWolf = false;
        }
      }
      addToSheep = !addToSheep;
    }
  }

  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
};

const smartCommand = () => {
  udg_lastGameString = GetEventPlayerChatString()?.toLowerCase() ?? "-smart";
  const parts = udg_lastGameString.toLowerCase().split(" ");
  smart(parts.length > 1 ? S2I(parts[1]) : undefined);
};

export const setPub = (pid: number, value: boolean, message = true) => {
  if (GetPlayerSlotState(Player(pid)!) !== PLAYER_SLOT_STATE_PLAYING) return;
  const p = MapPlayerEx.fromIndex(pid)!;

  if (!value) {
    // Increase gold count to minimum
    let minGoldCount = goldCount[pid];
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      if (!pub[i] && goldCount[i] < minGoldCount) minGoldCount = goldCount[i];
    }
    if (goldCount[pid] < minGoldCount) goldCount[pid] = minGoldCount;

    // Decrease sheep count to maximum
    let maxSheepCount = 0;
    for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
      if (!pub[i - 1] && udg_sheepCount[i] > maxSheepCount) maxSheepCount = udg_sheepCount[i];
    }
    if (udg_sheepCount[pid + 1] > maxSheepCount) setSc(pid + 1, maxSheepCount);

    p.handicap = getAllHandicap() / 100;
  } else p.handicap = getPubHandicap() / 100;

  pub[pid] = value;

  if (message) displayTimedTextToAll(`${value ? "Flagged" : "Unflagged"} ${p} as a pub.`, 5);
};
const togglePub = () => {
  if (udg_Custom !== GetTriggerPlayer()! || udg_gameStarted) return;
  const parts = GetEventPlayerChatString()!.split(" ");
  if (parts.length === 1) return;
  const i = S2I(parts[1]) - 1;
  if (GetPlayerSlotState(Player(i)!) !== PLAYER_SLOT_STATE_PLAYING) return;
  const value = !(pub[i]);
  for (let n = 1; n < parts.length; n++) setPub(S2I(parts[n]) - 1, value);
};

const toggleRotate = () => {
  let maxSc = -1;
  let ties = 0;
  let r: number;
  if (udg_Custom !== GetTriggerPlayer()! || udg_gameStarted) return;
  if (rotated === Player(PLAYER_NEUTRAL_PASSIVE)!) {
    DisplayTimedTextToForce(GetPlayersAll()!, 5, "Rotation enabled.");
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      if (!isActivePlayer(Player(i)!)) continue;

      if (udg_sheepCount[i + 1] > maxSc) {
        maxSc = udg_sheepCount[i + 1];
        rotated = Player(i)!;
        ties = 0;
      } else if (udg_sheepCount[i + 1] === maxSc) {
        r = GetRandomReal(0, 1);
        if (r < 1 / (ties + 2)) rotated = Player(i)!;
        ties = ties + 1;
      }
    }
    udg_AFK[GetConvertedPlayerId(rotated)] = AFK_AFK;
    TriggerExecute(gg_trg_setupLeaderboard);
    TriggerExecute(gg_trg_createLists);
    return;
  }

  DisplayTimedTextToForce(GetPlayersAll()!, 5, "Rotation disabled.");
  udg_AFK[GetConvertedPlayerId(rotated)] = AFK_PLAYING;
  rotated = Player(PLAYER_NEUTRAL_PASSIVE)!;
  TriggerExecute(gg_trg_setupLeaderboard);
  TriggerExecute(gg_trg_createLists);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_smart = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_smart, "-smart", false);
  TriggerAddCondition(
    gg_trg_smart,
    Condition(() => {
      if (udg_Custom !== GetTriggerPlayer() || udg_gameStarted) return false;
      const parts = GetEventPlayerChatString()!.split(" ");
      if (parts.length === 1) return true;
      return S2I(parts[1]) < getActivePlayerCount();
    }),
  );
  TriggerAddAction(gg_trg_smart, smartCommand);

  let t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_TRAIN_START);
  TriggerAddCondition(t, Condition(() => GetTrainedUnitType() === FourCC("h00E")));
  TriggerAddAction(t, smart);

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-pub", false);
  TriggerAddAction(t, togglePub);

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-rotate");
  TriggerAddAction(t, toggleRotate);
});
