import { addScriptHook, W3TS_HOOK } from "w3ts";
import { clearForces } from "../util/clearForces";
import { registerAnyPlayerChatEvent } from "../util/registerAnyPlayerChatEvent";

const Trig_pick_Actions = () => {
  DisableTrigger(gg_trg_smart);
  DisableTrigger(gg_trg_fair);
  DisableTrigger(gg_trg_reverse);
  DisableTrigger(gg_trg_pick);
  DisableTrigger(gg_trg_start);
  DisableTrigger(gg_trg_captains);
  DisableTrigger(gg_trg_versus);
  DisableTrigger(gg_trg_end);

  udg_lastGameString = GetEventPlayerChatString()!;
  TriggerExecute(gg_trg_createLists);
  udg_Teams = TEAMS_PICK;
  udg_pickIndex = 1;
  clearForces();
  ForForce(GetPlayersAll()!, () => SetPlayerAllianceStateBJ(udg_Custom, GetEnumPlayer()!, bj_ALLIANCE_ALLIED_VISION));

  TriggerExecute(gg_trg_setupLeaderboard);

  StartTimerBJ(udg_Createtimer, false, 60);
  TimerDialogDisplayBJ(true, udg_createTimerWindow);

  EnableTrigger(gg_trg_picksheep);
  EnableTrigger(gg_trg_pickwolf);

  //Quick Pick
  if (udg_lastGameString !== "-pick") {
    const parts = udg_lastGameString.split(" ").slice(1).map((v) => parseInt(v));
    for (const pid of parts) {
      if (
        pid > 0 && pid < 25 && GetPlayerSlotState(Player(pid - 1)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[pid] == AFK_PLAYING
      ) ForceAddPlayer(udg_Sheep, Player(pid - 1)!);
    }
    for (let pid = 0; pid < bj_MAX_PLAYERS; pid++) {
      if (
        GetPlayerSlotState(Player(pid)!) === PLAYER_SLOT_STATE_PLAYING && udg_AFK[pid] == AFK_PLAYING &&
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
  TriggerAddCondition(
    gg_trg_pick,
    Condition(() => GetTriggerPlayer()! === udg_Custom),
  );
  TriggerAddAction(gg_trg_pick, Trig_pick_Actions);
});
