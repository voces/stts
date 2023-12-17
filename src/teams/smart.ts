import { addScriptHook, W3TS_HOOK } from "w3ts";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { clearForces } from "util/clearForces";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { ForceEx } from "handles/ForceEx";
import { forEachPlayingPlayer } from "util/forEachPlayingPlayer";

const perfectPlayerVariables: player[] = [];
let pubStart = 0;

const isActivePlayer = (p: player) =>
  GetPlayerSlotState(p) === PLAYER_SLOT_STATE_PLAYING &&
  udg_AFK[GetConvertedPlayerId(p)] === AFK_PLAYING && !(pub[GetPlayerId(p)]);

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
  const blocked: Array<boolean> = [];
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
  [0, 1],
  [2, 3],
  [4, 5],
  [0, 2],
  [1, 4],
  [3, 5],
  [0, 4],
  [1, 3],
  [2, 5],
  [0, 3],
  [1, 5],
  [2, 4],
  [0, 5],
  [1, 2],
  [3, 4],
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
  let minimumSheepCount = 9999;
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
  let minimumPartnerCount = 9999;
  let i: number;
  let n: number;
  const partnerCounts: Array<number> = [];
  i = 0;
  while (true) {
    if ((i >= bj_MAX_PLAYERS)) break;
    if ((IsPlayerInForce(Player(i)!, udg_Spirit))) {
      partnerCounts[i] = 0;
      n = 0;
      while (true) {
        if ((n >= bj_MAX_PLAYERS)) break;
        if ((IsPlayerInForce(Player(n)!, udg_Sheep))) {
          partnerCounts[i] = partnerCounts[i] +
            udg_accumPartner[i * bj_MAX_PLAYERS + (n + 1)];
        }
        n = n + 1;
      }
      if ((partnerCounts[i] < minimumPartnerCount)) {
        minimumPartnerCount = partnerCounts[i];
      }
    }
    i = i + 1;
  }
  i = 0;
  while (true) {
    if ((i >= bj_MAX_PLAYERS)) break;
    if (
      (IsPlayerInForce(Player(i)!, udg_Spirit) &&
        partnerCounts[i] === minimumPartnerCount)
    ) {
      ForceRemovePlayer(udg_Spirit, Player(i)!);
      ForceAddPlayer(udg_Draft, Player(i)!);
    }
    i = i + 1;
  }
};

export const maybeRotate = () => {
  const currentSc = udg_sheepCount[GetConvertedPlayerId(rotated)];
  let lowestSc = 9999;
  let ties = 0;
  let i: number;
  let newRotated!: player;
  if ((GetPlayerSlotState(rotated) === PLAYER_SLOT_STATE_LEFT)) {
    rotated = Player(PLAYER_NEUTRAL_PASSIVE)!;
  }
  if ((rotated === Player(PLAYER_NEUTRAL_PASSIVE)!)) {
    return;
  }
  i = 0;
  while (true) {
    if ((i >= bj_MAX_PLAYERS)) break;
    if (
      (udg_AFK[i + 1] === AFK_PLAYING &&
        GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING)
    ) {
      if ((udg_sheepCount[i + 1] < lowestSc)) {
        lowestSc = udg_sheepCount[i + 1];
        newRotated = Player(i)!;
        ties = 0;
      } else if ((udg_sheepCount[i + 1] === lowestSc)) {
        if ((GetRandomReal(0, 1) < 1 / (ties + 2))) {
          newRotated = Player(i)!;
        }
        ties = ties + 1;
      }
    }
    i = i + 1;
  }
  if ((lowestSc <= currentSc)) {
    return;
  }
  udg_AFK[GetConvertedPlayerId(rotated)] = AFK_PLAYING;
  udg_AFK[GetConvertedPlayerId(newRotated)] = AFK_AFK;
  const unrotated = rotated;
  rotated = newRotated;
  TimerStart(CreateTimer(), 0.25, false, () => {
    DestroyTimer(GetExpiredTimer()!);
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "|r                              Swapping in " +
        udg_colorString[GetConvertedPlayerId(unrotated)] +
        GetPlayerName(unrotated) + "|r.",
    );
  });
};

const Smart__traditionalSmart = (sheepToDraft: number): void => {
  let p: player;
  let playersInSpirit: number;
  let playersInDraft: number;
  ForForce(GetPlayersAll()!, () => {
    if (isActivePlayer(GetEnumPlayer()!)) {
      ForceAddPlayer(udg_Wolf, GetEnumPlayer()!);
    }
  });
  draftLowestSCToSpirit();
  p = ForcePickRandomPlayer(udg_Spirit)!;
  ForceRemovePlayer(udg_Spirit, p);
  ForceAddPlayer(udg_Sheep, p);
  playersInSpirit = CountPlayersInForceBJ(udg_Spirit);
  sheepToDraft = sheepToDraft - 1;
  while (true) {
    if ((sheepToDraft <= 0)) break;
    if ((playersInSpirit === 0)) {
      draftLowestSCToSpirit();
      playersInSpirit = CountPlayersInForceBJ(udg_Spirit);
    }
    draftLowestPCToDraft();
    playersInDraft = CountPlayersInForceBJ(udg_Draft);
    playersInSpirit = playersInSpirit - playersInDraft;
    while (true) {
      if ((!(sheepToDraft > 0 && playersInDraft > 0))) break;
      p = ForcePickRandomPlayer(udg_Draft)!;
      ForceRemovePlayer(udg_Draft, p);
      ForceAddPlayer(udg_Sheep, p);
      sheepToDraft = sheepToDraft - 1;
      playersInDraft = playersInDraft - 1;
    }
  }
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

const smart = () => {
  udg_lastGameString = GetEventPlayerChatString() ?? "-smart";
  const parts = udg_lastGameString.toLowerCase().split(" ");

  let sheepToDraft: number;
  if (udg_runSmart || parts[0] !== "-smart") {
    sheepToDraft = Math.floor(getActivePlayerCount() / 2 - 1);
  } else {
    if (udg_lastGameString === "-smart") sheepToDraft = Math.floor(getActivePlayerCount() / 2 - 1);
    else sheepToDraft = S2I(parts[1]);
  }
  if (sheepToDraft <= 0) sheepToDraft = 1;
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
    if (
      pub[n] && GetPlayerSlotState(Player(n)!) === PLAYER_SLOT_STATE_PLAYING
    ) {
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

const togglePub = () => {
  if (udg_Custom !== GetTriggerPlayer()! || udg_gameStarted) return;
  const parts = GetEventPlayerChatString()!.split(" ");
  const i = S2I(parts[1]) - 1;
  if (GetPlayerSlotState(Player(i)!) !== PLAYER_SLOT_STATE_PLAYING) return;
  pub[i] = !(pub[i]);
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    "                              " + udg_colorString[i + 1] +
      (pub[i] ? "Flagged " : "Unflagged ") +
      GetPlayerName(Player(i)!) + " as a pub.",
  );
};

const toggleRotate = () => {
  let maxSc = -1;
  let ties = 0;
  let r: number;
  if (udg_Custom !== GetTriggerPlayer()! || udg_gameStarted) return;
  if (rotated === Player(PLAYER_NEUTRAL_PASSIVE)!) {
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      "                              Rotation enabled.",
    );
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

  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    "                              Rotation disabled.",
  );
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
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    `                              Perfect smart ${perfectSmartEnabled ? "enabled" : "disabled"}.`,
  );
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  clearPlayerVariables();

  let t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-smart", false);
  TriggerAddCondition(
    t,
    Condition(() => {
      if (udg_Custom !== GetTriggerPlayer() || udg_gameStarted) return false;
      const parts = GetEventPlayerChatString()!.split(" ");
      if (parts.length === 1) return true;
      return S2I(parts[1]) < getActivePlayerCount();
    }),
  );
  TriggerAddAction(t, smart);

  t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_TRAIN_START);
  TriggerAddCondition(t, Condition(() => GetTrainedUnitType() === FourCC("h00E")));
  TriggerAddAction(t, smart);

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-pub", false);
  TriggerAddAction(t, togglePub);

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-rotate", true);
  TriggerAddAction(t, toggleRotate);

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-perfect", false);
  TriggerAddAction(t, togglePerfect);
});
