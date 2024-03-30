import { addScriptHook, W3TS_HOOK } from "w3ts";
import { clearForces } from "util/clearForces";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { MapPlayerEx } from "handles/MapPlayerEx";

const canPlay = (pid: number) =>
  pid > 0 && pid < 25 && GetPlayerSlotState(Player(pid - 1)!) === PLAYER_SLOT_STATE_PLAYING &&
  udg_AFK[pid] == AFK_PLAYING;

const Trig_pick_Actions = () => {
  udg_lastGameString = GetEventPlayerChatString()!.toLowerCase();
  let parts: number[] = [];
  if (udg_lastGameString !== "-pick") {
    parts = udg_lastGameString.split(" ").slice(1).map((v) => S2I(v));
    for (const pid of parts) {
      if (!canPlay(pid)) {
        const p = MapPlayerEx.fromIndex(pid - 1);
        const pName = p ? p.coloredName : `Player ${pid}`;
        if (canPlay(pid - 2)) {
          displayTimedTextToAll(
            `${pName} cannot be picked. Did you mean ${MapPlayerEx.fromIndex(pid - 2)}?`,
          );
        } else if (canPlay(pid + 1)) {
          displayTimedTextToAll(`${pName} cannot be picked. Did you mean ${MapPlayerEx.fromIndex(pid)}?`);
        } else displayTimedTextToAll(`${pName} cannot be picked.`);
        return;
      }
    }
  }

  DisableTrigger(gg_trg_smart);
  DisableTrigger(gg_trg_fair);
  DisableTrigger(gg_trg_reverse);
  DisableTrigger(gg_trg_pick);
  DisableTrigger(gg_trg_start);
  DisableTrigger(gg_trg_captains);
  DisableTrigger(gg_trg_versus);
  DisableTrigger(gg_trg_end);

  TriggerExecute(gg_trg_createLists);
  udg_Teams = TEAMS_PICK;
  udg_pickIndex = 1;
  clearForces();
  ForForce(GetPlayersAll()!, () => SetPlayerAllianceStateBJ(udg_Custom, GetEnumPlayer()!, bj_ALLIANCE_ALLIED_VISION));

  TriggerExecute(gg_trg_setupLeaderboard);

  TimerStart(udg_Createtimer, 60, false, null);
  TimerDialogDisplayBJ(true, udg_createTimerWindow);

  EnableTrigger(gg_trg_picksheep);
  EnableTrigger(gg_trg_pickwolf);

  // Quick Pick
  if (udg_lastGameString !== "-pick") {
    // Already validate pids
    for (const pid of parts) ForceAddPlayer(udg_Sheep, Player(pid - 1)!);
    for (let pid = 0; pid < bj_MAX_PLAYERS; pid++) {
      if (
        GetPlayerSlotState(Player(pid)!) === PLAYER_SLOT_STATE_PLAYING && udg_AFK[pid + 1] == AFK_PLAYING &&
        !IsPlayerInForce(Player(pid)!, udg_Sheep)
      ) ForceAddPlayer(udg_Wolf, Player(pid)!);
    }
    udg_pickIndex = 25;
  }

  TriggerExecute(gg_trg_setupPick);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_pick = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_pick, "-pick", false);
  TriggerAddCondition(gg_trg_pick, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_pick, Trig_pick_Actions);
});
