import { addScriptHook, W3TS_HOOK } from "w3ts";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { clearForces } from "util/clearForces";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { ForceEx } from "handles/ForceEx";
import { forEachPlayingPlayer } from "util/forEachPlayingPlayer";
import { setSc } from "jass/triggers/commands/sc";
import { getAllHandicap, getPubHandicap } from "jass/triggers/commands/handicap";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

const perfectPlayerVariables: player[] = [];
let pubStart = 0;

let lastActivePlayerCount = 0;
let lastSheepToDraft = 0;

const isActivePlayer = (p: player) =>
  GetPlayerSlotState(p) === PLAYER_SLOT_STATE_PLAYING &&
  udg_AFK[GetConvertedPlayerId(p)] === AFK_PLAYING &&
  !(pub[GetPlayerId(p)]);

const getActivePlayerCount = (): number => {
  let count = 0;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) if (isActivePlayer(Player(i)!)) count++;
  return count;
};

const clearPlayerVariables = () => {
  for (let i = 0; i < 6; i++) perfectPlayerVariables[i] = Player(PLAYER_NEUTRAL_PASSIVE)!;
};

const isPlayerVariableOpen = (pvid: number) =>
  perfectPlayerVariables[pvid] === Player(PLAYER_NEUTRAL_PASSIVE)! ||
  GetPlayerSlotState(perfectPlayerVariables[pvid]) !==
    PLAYER_SLOT_STATE_PLAYING ||
  udg_AFK[GetConvertedPlayerId(perfectPlayerVariables[pvid])] !==
    AFK_PLAYING ||
  pub[GetPlayerId(perfectPlayerVariables[pvid])];

const isUnassignedActivePlayer = (p: player) => {
  if (!isActivePlayer(p)) return false;
  for (let i = 0; i < 6; i++) if (perfectPlayerVariables[i] === p) return false;
  return true;
};

const setupPlayerVariables = (reset: boolean): void => {
  let ties: number;
  const blocked: boolean[] = [];
  if (reset) {
    blocked[GetPlayerId(perfectPlayerVariables[3])] = true;
    blocked[GetPlayerId(perfectPlayerVariables[4])] = true;
    clearPlayerVariables();
    perfectSmartIndex = 0;
  }
  for (let i = 0; i < 6; i++) {
    ties = 0;
    if (!isPlayerVariableOpen(i)) continue;
    for (let n = 0; n < bj_MAX_PLAYERS; n++) {
      if (!isUnassignedActivePlayer(Player(n)!) || (i <= 1 && blocked[n])) continue;
      if (GetRandomReal(0, 1) < (1 / (ties + 1))) perfectPlayerVariables[i] = Player(n)!;
      ties = ties + 1;
    }
  }
};

const perfectSmartDraft = (sheepA: number, sheepB: number): void => {
  for (let i = 0; i < 6; i++) {
    ForceAddPlayer(
      i === sheepA || i === sheepB ? udg_Sheep : udg_Wolf,
      perfectPlayerVariables[i],
    );
  }
};

const perfect2v4Pattern = [
  [0, 1], // [0, 1]
  [2, 3], // [2, 3]
  [4, 5], // [4, 5]
  [0, 2], // [0, 2]
  [1, 4], // [1, 3]
  [3, 5], // [0, 4]
  [0, 4], // [1, 5]
  [1, 3], // [2, 4]
  [2, 5], // [3, 5]
  [0, 3], // [1, 2]
  [1, 5], // [0, 3]
  [2, 4], // [1, 4]
  [0, 5], // [0, 5]
  [1, 2], // [3, 4]
  [3, 4], // [2, 5]
] as [number, number][];

const aSheepHasTwoHigherScThanAWolf = () => {
  let maxSheepSc = -Infinity;
  let minWolfSc = Infinity;

  for (let i = 0; i < perfectPlayerVariables.length; i++) {
    const pid = GetPlayerId(perfectPlayerVariables[i]);

    if (IsPlayerInForce(perfectPlayerVariables[i], udg_Sheep)) {
      const sc = udg_sheepCount[pid + 1] + 1;
      if (sc > maxSheepSc) maxSheepSc = sc;
    } else {
      const sc = udg_sheepCount[pid + 1];
      if (sc < minWolfSc) minWolfSc = sc;
    }
  }

  return maxSheepSc - minWolfSc >= 2;
};

const perfectSmart = (): void => {
  setupPlayerVariables(perfectSmartIndex === 15);
  perfectSmartDraft(...perfect2v4Pattern[perfectSmartIndex]);

  if (aSheepHasTwoHigherScThanAWolf()) {
    clearForces();
    perfectSmartEnabled = false;
    Smart__traditionalSmart(2);
    return;
  }

  perfectSmartIndex++;
  perfectRound = true;
  perfectRoundCanceled = false;
};

const draftLowestSCToSpirit = () => {
  let minimumSheepCount = Infinity;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (IsPlayerInForce(Player(i)!, udg_Wolf) && minimumSheepCount > udg_sheepCount[i + 1]) {
      minimumSheepCount = udg_sheepCount[i + 1];
    }
  }

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (IsPlayerInForce(Player(i)!, udg_Wolf) && minimumSheepCount === udg_sheepCount[i + 1]) {
      ForceRemovePlayer(udg_Wolf, Player(i)!);
      ForceAddPlayer(udg_Spirit, Player(i)!);
    }
  }
};

const draftLowestPCToDraft = () => {
  // Compute PCs & minimum PC
  let minimumPartnerCount = Infinity;
  const partnerCounts: number[] = [];
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (IsPlayerInForce(Player(i)!, udg_Spirit)) {
      // Compute pc
      partnerCounts[i] = 0;
      for (let n = 0; n < bj_MAX_PLAYERS; n++) {
        if (IsPlayerInForce(Player(n)!, udg_Sheep)) {
          partnerCounts[i] += udg_accumPartner[i * bj_MAX_PLAYERS + (n + 1)];
        }
      }

      if (partnerCounts[i] < minimumPartnerCount) minimumPartnerCount = partnerCounts[i];
    }
  }

  // Draft
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (IsPlayerInForce(Player(i)!, udg_Spirit) && partnerCounts[i] === minimumPartnerCount) {
      ForceRemovePlayer(udg_Spirit, Player(i)!);
      ForceAddPlayer(udg_Draft, Player(i)!);
    }
  }
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

const Smart__traditionalSmart = (sheepToDraft: number): void => {
  let p: player;
  let playersInSpirit: number;
  let playersInDraft: number;

  // Put non-pubs as wolf
  ForForce(GetPlayersAll()!, () => isActivePlayer(GetEnumPlayer()!) && ForceAddPlayer(udg_Wolf, GetEnumPlayer()!));
  draftLowestSCToSpirit();

  // Seed the team with someone with lowest SC
  p = ForcePickRandomPlayer(udg_Spirit)!;
  ForceRemovePlayer(udg_Spirit, p);
  ForceAddPlayer(udg_Sheep, p);
  playersInSpirit = CountPlayersInForceBJ(udg_Spirit);
  sheepToDraft--;

  // Draft from lowest SC then lowest PC counts
  while (sheepToDraft > 0) {
    // Refill spirits
    if (playersInSpirit === 0) {
      draftLowestSCToSpirit();
      playersInSpirit = CountPlayersInForceBJ(udg_Spirit);
    }

    draftLowestPCToDraft();
    playersInDraft = CountPlayersInForceBJ(udg_Draft);
    playersInSpirit -= playersInDraft;
    while (sheepToDraft > 0 && playersInDraft > 0) {
      p = ForcePickRandomPlayer(udg_Draft)!;
      ForceRemovePlayer(udg_Draft, p);
      ForceAddPlayer(udg_Sheep, p);
      sheepToDraft--;
      playersInDraft--;
    }
  }

  // Place remaining as wolves
  ForForce(udg_Spirit, () => {
    ForceRemovePlayer(udg_Spirit, GetEnumPlayer()!);
    ForceAddPlayer(udg_Wolf, GetEnumPlayer()!);
  });
  ForForce(udg_Draft, () => {
    ForceRemovePlayer(udg_Draft, GetEnumPlayer()!);
    ForceAddPlayer(udg_Wolf, GetEnumPlayer()!);
  });
};

const smart1vX = () => {
  let pool: MapPlayerEx[] = [];
  let minSc = Infinity;
  forEachPlayingPlayer((p) => {
    if (pub[p.id]) return;
    if (p.sheepLastGame) return ForceEx.wolves.addPlayer(p);
    if (p.sheepCount < minSc) {
      pool.forEach((p) => ForceEx.wolves.addPlayer(p));
      minSc = p.sheepCount;
      pool = [p];
    } else if (p.sheepCount === minSc) pool.push(p);
    else ForceEx.wolves.addPlayer(p);
  });
  if (pool.length === 0) ForceEx.wolves.for((p) => (ForceEx.wolves.removePlayer(p), pool.push(p)));
  const pid = Math.floor(Math.random() * pool.length);
  ForceEx.sheep.addPlayer(pool.splice(pid, 1)[0]);
  pool.forEach((p) => ForceEx.wolves.addPlayer(p));
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
  if (perfectSmartEnabled) {
    if (
      sheepToDraft === 2 && getActivePlayerCount() === 6 &&
      rotated === Player(PLAYER_NEUTRAL_PASSIVE)!
    ) perfectSmart();
    else {
      perfectSmartEnabled = false;
      if (sheepToDraft === 1) smart1vX();
      else Smart__traditionalSmart(sheepToDraft);
    }
  } else if (sheepToDraft === 1) smart1vX();
  else Smart__traditionalSmart(sheepToDraft);

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

let perfectSmartEnabled = true;

const togglePerfect = () => {
  perfectSmartEnabled = !perfectSmartEnabled;
  if (perfectSmartEnabled && GetEventPlayerChatString() === "-perfect!") {
    clearPlayerVariables();
    perfectSmartIndex = 0;
  }
  DisplayTimedTextToForce(GetPlayersAll()!, 5, `Perfect smart ${perfectSmartEnabled ? "enabled" : "disabled"}.`);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  clearPlayerVariables();

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

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-perfect", false);
  TriggerAddAction(t, togglePerfect);
});
