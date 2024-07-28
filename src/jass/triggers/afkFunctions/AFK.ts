import { terrain } from "settings/terrain";
import { inflateGoldCount } from "../commands/g";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { ForceEx } from "handles/ForceEx";
import { transferHostTo } from "../hostCommands/transfer";

const isFilterPlayerPlaying = () => GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING;

const filterPlayerNotAFK = () =>
  isFilterPlayerPlaying() && udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== AFK_AFK;

const setCaptainAndMultiboard = (captainIndex: number, player: player) => {
  udg_captains[captainIndex] = player;
  const playerIndex = GetConvertedPlayerId(player);
  MultiboardSetItemValueBJ(
    udg_captainsMultiboard,
    captainIndex === 1 ? 1 : 3,
    udg_multiboardRow[playerIndex],
    `$${MapPlayerEx.fromHandle(player)}`,
  );
};

const updateMultiboardRowForPlayer = (player: player) => {
  const playerIndex = GetConvertedPlayerId(player);
  for (let i = 1; i <= 24; i++) {
    udg_atempboolean = false;
    for (let n = 1; n <= 24; n++) {
      if (
        GetPlayerSlotState(ConvertedPlayer(n)!) === PLAYER_SLOT_STATE_PLAYING &&
        player !== ConvertedPlayer(n)! &&
        (udg_AFK[n] === AFK_PLAYING ||
          udg_AFK[n] === AFK_PLAYING_PICK ||
          udg_AFK[n] === AFK_AFK_DURING_ROUND) &&
        !IsPlayerInForce(ConvertedPlayer(n)!, udg_Draft) &&
        udg_sheepLastGame[n] &&
        udg_multiboardRow[n] === i
      ) {
        udg_atempboolean = true;
        break;
      }
    }
    if (!udg_atempboolean) {
      udg_multiboardRow[playerIndex] = i;
      break;
    }
  }
};

const handleCaptainSelection = (captainIndex: number, conditionFunc: () => boolean, turnUpdate = false) => {
  const candidates = GetPlayersMatching(Condition(conditionFunc))!;
  if (CountPlayersInForceBJ(candidates) > 0) {
    const selectedPlayer = ForcePickRandomPlayer(candidates)!;
    setCaptainAndMultiboard(captainIndex, selectedPlayer);
    updateMultiboardRowForPlayer(selectedPlayer);
    if (turnUpdate) {
      MultiboardSetTitleText(
        udg_captainsMultiboard,
        MapPlayerEx.fromHandle(udg_captains[captainIndex]).colorize("'s turn", true),
      );
    }
  } else {
    const selectedPlayer = ForcePickRandomPlayer(udg_Draft)!;
    setCaptainAndMultiboard(captainIndex, selectedPlayer);
    updateMultiboardRowForPlayer(selectedPlayer);
    ForceRemovePlayerSimple(selectedPlayer, udg_Draft);
    udg_sheepLastGame[GetConvertedPlayerId(selectedPlayer)] = true;
    udg_captainTurn = captainIndex === 1 ? 3 : 1;
    MultiboardSetTitleText(
      udg_captainsMultiboard,
      MapPlayerEx.fromHandle(udg_captains[udg_captainTurn]).colorize("'s turn", true),
    );
  }
};

const handleAFK = (p: player) => {
  if (rotated === p) return;
  const cid = GetConvertedPlayerId(p);

  const updateAFKStatus = (status: typeof AFK_AFK | typeof AFK_AFK_DURING_ROUND) => {
    udg_AFKOn[cid] = 1;
    udg_AFK[cid] = status;
  };

  if (udg_AFK[cid] < AFK_AFK) { // Leaving
    if (udg_gameStarted) {
      if (udg_AFK[cid] === 0) return;
      updateAFKStatus(AFK_AFK);
      LeaderboardSetPlayerItemLabelBJ(
        p,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        MapPlayerEx.fromEvent()!.coloredName,
      );
    } else if (udg_Teams === TEAMS_PICK && (IsPlayerInForce(p, udg_Sheep) || IsPlayerInForce(p, udg_Wolf))) {
      updateAFKStatus(AFK_AFK_DURING_ROUND);
    } else if (udg_Teams === TEAMS_CAPTAINS && !IsPlayerInForce(p, udg_Draft)) {
      updateAFKStatus(AFK_AFK_DURING_ROUND);
      if (p === udg_captains[1]) {
        handleCaptainSelection(1, () =>
          (udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING ||
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING_PICK) &&
          isFilterPlayerPlaying() && udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] &&
          !IsPlayerInForce(GetFilterPlayer()!, udg_Draft), udg_captainTurn === 1);
      } else if (p === udg_captains[3]) {
        handleCaptainSelection(3, () =>
          (udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING ||
            udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === AFK_PLAYING_PICK) &&
          isFilterPlayerPlaying() && !udg_sheepLastGame[GetConvertedPlayerId(GetFilterPlayer()!)] &&
          !IsPlayerInForce(GetFilterPlayer()!, udg_Draft), udg_captainTurn === 3);
      }
      MultiboardSetItemValueBJ(
        udg_captainsMultiboard,
        udg_sheepLastGame[cid] ? 1 : 3,
        udg_multiboardRow[cid],
        MapPlayerEx.fromEvent()!.colorize(" (AFK)", true),
      );
    } else {
      if (IsPlayerInForce(p, udg_Draft)) {
        ForceRemovePlayerSimple(p, udg_Draft);
        MultiboardSetItemValueBJ(udg_captainsMultiboard, 2, udg_multiboardRow[cid], "");
      }
      updateAFKStatus(AFK_AFK);
      LeaderboardRemovePlayerItemBJ(p, GetLastCreatedLeaderboard()!);
      if (udg_Teams !== 3 && udg_Teams !== 4) {
        LeaderboardAddItemBJ(
          p,
          GetLastCreatedLeaderboard()!,
          MapPlayerEx.fromEvent()!.colorize(" (AFK)", true),
          0,
        );
      }
    }

    if (udg_Custom === p) {
      for (let i = 0; i < bj_MAX_PLAYERS; i++) {
        const p2 = MapPlayerEx.fromIndex(i);
        if (p2?.isHere && p2.afk < AFK_AFK && !p2.isPub && p2.afk < AFK_AFK) {
          transferHostTo(p2.cid);
          break;
        }
      }
    }
  } else { // Returning
    if (udg_gameStarted) {
      if (udg_AFK[cid] === AFK_AFK_DURING_ROUND) {
        ForForce(GetPlayersAllies(p)!, () => {
          if (GetEnumPlayer() === p) return;
          SetPlayerAllianceStateBJ(p, GetEnumPlayer()!, bj_ALLIANCE_UNALLIED);
          SetPlayerAllianceStateBJ(p, GetEnumPlayer()!, bj_ALLIANCE_ALLIED_VISION);
        });
        for (let i = 1; i <= udg_lastPlayer; i++) {
          LeaderboardSetPlayerItemLabelBJ(
            p,
            PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!,
            MapPlayerEx.fromEvent()!.name,
          );
        }
        udg_AFK[cid] = AFK_PLAYING;
        SelectUnitForPlayerSingle(udg_unit[cid], p);
        PanCameraToForPlayer(p, GetUnitX(udg_unit[cid]), GetUnitY(udg_unit[cid]));
      } else {
        for (let i = 1; i <= udg_lastPlayer; i++) {
          LeaderboardSetPlayerItemLabelBJ(
            p,
            PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!,
            `${MapPlayerEx.fromEvent()} (back)`,
          );
        }
        udg_AFK[cid] = 2;
        udg_atempplayer = GetForceOfPlayer(p)!;
        DisplayTimedTextToForce(
          udg_atempplayer,
          10,
          "                              |CFF00AEEFYou can watch this game until it ends.",
        );
        DestroyForce(udg_atempplayer);
      }
    } else if (
      (udg_Teams === TEAMS_CAPTAINS && udg_AFK[cid] === AFK_AFK) || (!IsPlayerInForce(p, udg_Wolf) &&
        udg_Teams === TEAMS_PICK &&
        !IsPlayerInForce(p, udg_Sheep))
    ) {
      udg_AFK[cid] = AFK_PLAYING_PICK;
      LeaderboardAddItemBJ(p, GetLastCreatedLeaderboard()!, MapPlayerEx.fromEvent()!.name, 0);
    } else {
      udg_AFK[cid] = AFK_PLAYING;
      if (udg_Teams === TEAMS_CAPTAINS) {
        MultiboardSetItemValueBJ(
          udg_captainsMultiboard,
          udg_sheepLastGame[cid] ? 1 : 3,
          udg_multiboardRow[cid],
          udg_colorString[cid] + GetPlayerName(p),
        );
      }
    }
    ResetToGameCameraForPlayer(p, 0);
    SetCameraFieldForPlayer(p, CAMERA_FIELD_TARGET_DISTANCE, udg_zoom[cid], 0);
    if (udg_Teams === TEAMS_PICK) {
      PanCameraToForPlayer(p, GetUnitX(udg_farm), GetUnitY(udg_farm));
    } else if (udg_Teams === TEAMS_LOCK_IE_PLAYING) {
      if (IsPlayerInForce(p, udg_Sheep) || IsPlayerInForce(p, udg_Spirit) || IsPlayerInForce(p, udg_Wolf)) {
        PanCameraToForPlayer(p, GetUnitX(udg_unit[cid]), GetUnitY(udg_unit[cid]));
      } else {
        const u = udg_unit[GetPlayerId(ForcePickRandomPlayer(udg_Sheep)!)!];
        PanCameraToForPlayer(p, GetUnitX(u), GetUnitY(u));
      }
    } else PanCameraToForPlayer(p, GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf));

    // If players sheepCount is lowest than the greatest players SheepCount, set them.
    const maxSheepCount = Math.max(
      ...ForceEx.with(filterPlayerNotAFK, (f) => f.getPlayers())
        .filter((player) => !pub[player.id])
        .map((player) => udg_sheepCount[player.cid]),
    );
    udg_sheepCount[cid] = Math.max(udg_sheepCount[cid], maxSheepCount);

    inflateGoldCount(p);
  }

  TriggerExecute(gg_trg_createLists);
  TriggerExecute(gg_trg_setupLeaderboard);

  if (CountPlayersInForceBJ(udg_Draft) === 0 && udg_Teams === TEAMS_CAPTAINS) {
    ForForce(GetPlayersAll()!, () => {
      const enumPlayer = GetEnumPlayer()!;
      if (
        GetPlayerSlotState(enumPlayer) === PLAYER_SLOT_STATE_PLAYING &&
        (udg_AFK[GetConvertedPlayerId(enumPlayer)] === AFK_PLAYING ||
          udg_AFK[GetConvertedPlayerId(enumPlayer)] === AFK_PLAYING_PICK ||
          udg_AFK[GetConvertedPlayerId(enumPlayer)] === AFK_AFK_DURING_ROUND)
      ) {
        ForceAddPlayerSimple(enumPlayer, udg_sheepLastGame[GetConvertedPlayerId(enumPlayer)] ? udg_Sheep : udg_Wolf);
      }
    });

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
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_AFK: () => void;
}
InitTrig_AFK = () => {
  gg_trg_AFK = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_AFK, "-afk");
  TriggerAddAction(gg_trg_AFK, () => {
    const p = GetTriggerPlayer()!;
    handleAFK(p);
    const cid = GetConvertedPlayerId(p);
    displayTimedTextToAll(
      `                              ${MapPlayerEx.fromIndex(cid - 1)} ${
        udg_AFK[cid] < AFK_AFK ? "is back" : "has gone AFK"
      }.`,
      5,
    );
  });

  gg_trg_Force_Afk = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_Force_Afk, "-fafk", false);
  TriggerAddAction(gg_trg_Force_Afk, () => {
    if (GetTriggerPlayer() !== udg_Custom) return;
    const cid = S2I(GetEventPlayerChatString()!.split(" ")[1] ?? "");
    if (cid < 1 || cid > bj_MAX_PLAYERS) return;
    handleAFK(ConvertedPlayer(cid)!);
    displayTimedTextToAll(
      `                              ${MapPlayerEx.fromIndex(cid - 1)} has been ${
        udg_AFK[cid] < AFK_AFK ? "unset from" : "set to"
      } AFK.`,
      5,
    );
  });
};
