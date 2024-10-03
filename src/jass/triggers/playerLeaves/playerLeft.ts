import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { withPlayerUnits } from "util/withGroup";

const restoreTeams = () => {
  const player = GetEnumPlayer()!;
  const playerId = GetConvertedPlayerId(player);
  const playerSlotState = GetPlayerSlotState(player);
  const playerAFKStatus = udg_AFK[playerId];

  if (
    playerSlotState === PLAYER_SLOT_STATE_PLAYING &&
    (playerAFKStatus === AFK_PLAYING ||
      playerAFKStatus === AFK_PLAYING_PICK ||
      playerAFKStatus === AFK_AFK_DURING_ROUND)
  ) {
    if (udg_sheepLastGame[playerId]) ForceAddPlayerSimple(player, udg_Sheep);
    else ForceAddPlayerSimple(player, udg_Wolf);
  }
};

const Trig_playerLeft_Actions = () => {
  const leaver = GetTriggerPlayer()!;
  const currentHost = udg_Custom;
  const p = MapPlayerEx.fromEvent()!;
  const pid = p.id;
  cid = pid + 1;

  // Adjust various data
  pub[pid] = false;
  if (udg_practiceOn) RemoveUnit(udg_unit2[cid]);
  if (udg_transfer === cid) udg_transfer = 0;
  udg_switch[cid] = 0;

  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    `${MapPlayerEx.fromIndex(pid)} has left the game. (${
      udg_sheepLastGame[cid]
        ? IsPlayerInForce(leaver, udg_Spirit) ? "Spirit" : "Sheep"
        : udg_AFK[GetConvertedPlayerId(leaver)] === AFK_PLAYING
        ? "Wolf"
        : "Spectator"
    })`,
  );

  // Distribute gold
  if (udg_gameStarted) {
    const team = ForceEx.wolves.hasPlayer(p) ? ForceEx.wolves : ForceEx.sheep;
    const gold = p.gold / team.size();
    team.for((p) => p.bankedGold += gold); // Add to banked gold since it supports decimals
    someoneLeft = true;
  }

  // Drop items
  if (IsPlayerInForce(leaver, udg_Wolf)) {
    withPlayerUnits(p, (g) =>
      g.forEach((u) => {
        for (let i = 0; i < 6; i++) u.removeItemFromSlot(i);
      }), (u) => u.typeId === shepType && !u.isIllusion);
  }

  // Fix captains/versus
  if (udg_Teams === TEAMS_CAPTAINS) {
    if (
      udg_AFK[cid] === AFK_PLAYING ||
      udg_AFK[cid] === AFK_PLAYING_PICK ||
      udg_AFK[cid] === AFK_AFK_DURING_ROUND
    ) {
      if (leaver === udg_captains[1] || leaver === udg_captains[3]) {
        ForForce(udg_Draft, () => ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft));
        TriggerExecute(gg_trg_cancel);
      } else if (IsPlayerInForce(leaver, udg_Draft)) {
        ForceRemovePlayerSimple(leaver, udg_Draft);
        MultiboardSetItemValueBJ(udg_captainsMultiboard, 2, udg_multiboardRow[cid], "");
      } else if (udg_sheepLastGame[cid]) {
        MultiboardSetItemValueBJ(udg_captainsMultiboard, 1, udg_multiboardRow[cid], "");
      } else MultiboardSetItemValueBJ(udg_captainsMultiboard, 3, udg_multiboardRow[cid], "");
    }

    if (CountPlayersInForceBJ(udg_Draft) === 0) {
      ForForce(GetPlayersAll()!, restoreTeams);
      udg_Teams = TEAMS_LOCK_IE_PLAYING;
      MultiboardDisplayBJ(false, udg_captainsMultiboard);
      enforceTeamResourceMultiboard();
      MultiboardMinimizeBJ(true, udg_captainsMultiboard);
      DestroyMultiboardBJ(udg_captainsMultiboard);
      TriggerSleepAction(0.01);
      DisableTrigger(gg_trg_giveUpCaptain);
      DisableTrigger(gg_trg_draftPlayer);
      TriggerExecute(gg_trg_createSheep);
    }
  }

  // Remove units
  if (p.isHost) {
    udg_Custom = Player(PLAYER_NEUTRAL_PASSIVE)!;
    transferOwnershipOfHostFarm();
    withPlayerUnits(p, (g) => g.forEach((u) => u.destroy()));
    udg_Custom = currentHost;
    transferOwnershipOfHostFarm();
  } else withPlayerUnits(p, (g) => g.forEach((u) => u.destroy()));

  TriggerSleepAction(0.01);

  LeaderboardRemovePlayerItemBJ(
    leaver,
    GetLastCreatedLeaderboard()!,
  );
  ForForce(GetPlayersAll()!, () => LeaderboardRemovePlayerItemBJ(leaver, PlayerGetLeaderboard(GetEnumPlayer()!)!));
  ForceRemovePlayerSimple(leaver, udg_Sheep);
  ForceRemovePlayerSimple(leaver, udg_Spirit);
  ForceRemovePlayerSimple(leaver, udg_Wolf);
  if (CountPlayersInForceBJ(udg_Sheep) === 0) TriggerExecute(gg_trg_wolvesWin);
  if (CountPlayersInForceBJ(udg_Wolf) === 0) TriggerExecute(gg_trg_sheepWin);
  udg_AFK[GetConvertedPlayerId(leaver)] = AFK_PLAYING;
  TriggerExecute(gg_trg_createLists);
  TriggerExecute(gg_trg_setupLeaderboard);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_playerLeft: () => void;
}
InitTrig_playerLeft = () => {
  gg_trg_playerLeft = CreateTrigger();
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(i)!);
    TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(i)!);
  }
  TriggerAddAction(gg_trg_playerLeft, Trig_playerLeft_Actions);
};
