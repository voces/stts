import { inflateGoldCount } from "../commands/g";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { ForceEx } from "handles/ForceEx";
import { transferHostTo } from "../hostCommands/transfer";
import { updateIntermission } from "ui/api/updateIntermission";

const isFilterPlayerPlaying = () => GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING;

const filterPlayerNotAFK = () =>
  isFilterPlayerPlaying() && udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] !== AFK_AFK;

export const handleAFK = (p: player) => {
  const cid = GetConvertedPlayerId(p);

  if (rotated === p) return `Rotated players cannot ${udg_AFK[cid] > AFK_PLAYING ? "return" : "AFK"}!`;

  if (udg_AFK[cid] < AFK_AFK) { // Leaving
    if (udg_gameStarted) {
      // Cannot AFK in middle of a round
      if (udg_AFK[cid] === AFK_PLAYING) return "Cannot AFK during a round!";

      // Else case: they came back then went AFK again
      udg_AFK[cid] = AFK_AFK;
    } else if (udg_Teams === TEAMS_OPEN) {
      udg_AFK[cid] = AFK_AFK;
      ForceRemovePlayer(udg_Sheep, p);
      ForceRemovePlayer(udg_Wolf, p);

      // Cannot AFK during captains or pick
    } else return "Cannot AFK during pick!";

    if (udg_Custom === p) {
      for (let i = 0; i < bj_MAX_PLAYERS; i++) {
        const p2 = MapPlayerEx.fromIndex(i);
        if (p2?.isActive && !p2.isPub) {
          transferHostTo(p2.cid);
          break;
        }
      }
    }
  } else { // Returning
    if (udg_gameStarted) {
      udg_AFK[cid] = AFK_RETURNED_DURING_ROUND;
      DisplayTimedTextToPlayer(p, 0, 0, 5, "|CFF00AEEFYou can watch this game until it ends.");
    } else if (udg_Teams === TEAMS_OPEN) udg_AFK[cid] = AFK_PLAYING;
    else return "Cannot return during pick!";

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
  updateIntermission();
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
    const error = handleAFK(p);
    if (typeof error === "string") return DisplayTimedTextToPlayer(p, 0, 0, 5, error);
    const cid = GetConvertedPlayerId(p);
    displayTimedTextToAll(
      `${MapPlayerEx.fromIndex(cid - 1)} ${udg_AFK[cid] < AFK_AFK ? "is back" : "has gone AFK"}.`,
      5,
    );
  });

  gg_trg_Force_Afk = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_Force_Afk, "-fafk", false);
  TriggerAddAction(gg_trg_Force_Afk, () => {
    if (GetTriggerPlayer() !== udg_Custom) return;
    const cid = S2I(GetEventPlayerChatString()!.split(" ")[1] ?? "");
    if (cid < 1 || cid > bj_MAX_PLAYERS) return;
    const error = handleAFK(Player(cid - 1)!);
    if (typeof error === "string") return displayTimedTextToAll(error, 5);
    displayTimedTextToAll(
      `${MapPlayerEx.fromIndex(cid - 1)} has been ${udg_AFK[cid] < AFK_AFK ? "unset from" : "set to"} AFK.`,
      5,
    );
  });
};
