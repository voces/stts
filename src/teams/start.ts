import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { clearForces } from "util/clearForces";
import { forEachPlayingPlayer } from "util/forEachPlayingPlayer";
import { reduceForce } from "util/reduceForce";
import { isPlaying } from "util/isPlaying";
import { MapPlayerEx } from "handles/MapPlayerEx";

const getMinsReducer =
  <T>(fn: (v: T) => number) => (accum: [min: number, pool: T[]], v: T): [min: number, pool: T[]] => {
    const t = fn(v);
    if (t < accum[0]) return [t, [v]];
    if (t === accum[0]) return (accum[1].push(v), accum);
    return accum;
  };

export const adjustSheepTeamSize = (desiredSheep: number) => {
  let currentSheep = reduceForce(
    GetPlayersAll()!,
    0,
    (sum, p) => isPlaying(p) && IsPlayerInForce(p.handle, udg_Sheep) ? sum + 1 : sum,
  );

  if (desiredSheep !== currentSheep) {
    while (desiredSheep < currentSheep) {
      const pool = reduceForce<[min: number, pool: MapPlayerEx[]]>(
        udg_Sheep,
        [Infinity, []],
        getMinsReducer((p) => -udg_sheepCount[p.id + 1] + (pub[p.id] ? 100 : 0)),
      )[1];

      const p = pool[GetRandomInt(0, pool.length - 1)].handle;
      ForceRemovePlayer(udg_Sheep, p);
      ForceAddPlayer(udg_Wolf, p);
      currentSheep--;
    }

    while (desiredSheep > currentSheep) {
      const pool = reduceForce<[min: number, pool: MapPlayerEx[]]>(
        udg_Wolf,
        [Infinity, []],
        getMinsReducer((p) => udg_sheepCount[p.id + 1] + (pub[p.id] ? 100 : 0)),
      )[1];

      const p = pool[GetRandomInt(0, pool.length - 1)].handle;
      ForceRemovePlayer(udg_Wolf, p);
      ForceAddPlayer(udg_Sheep, p);
      currentSheep++;
    }
  }
};

const Trig_start_Actions = () => {
  udg_lastGameString = (GetEventPlayerChatString()?.toLowerCase() ?? "-start").toLowerCase();

  TriggerSleepAction(0.01);

  clearForces();
  forEachPlayingPlayer((p) => ForceAddPlayer(udg_sheepLastGame[p.id + 1] ? udg_Sheep : udg_Wolf, p.handle));

  if (udg_lastGameString !== "-start" && udg_lastGameString !== "-restart") {
    const parts = udg_lastGameString.split(" ");
    if (parts.length > 1) adjustSheepTeamSize(S2I(parts[1]));
  }

  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_start = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_start, "-start", false);
  TriggerAddCondition(
    gg_trg_start,
    Condition(() => {
      if (GetTriggerPlayer() !== udg_Custom) return false;
      const s = GetEventPlayerChatString()?.toLowerCase() ?? "";
      if (s === "-start" || s === "-restart") return true;
      const count = S2I(s.split(" ")[1]);
      return count > 0 && count < 24;
    }),
  );
  TriggerAddAction(gg_trg_start, Trig_start_Actions);

  const t = Trigger.create();
  registerAnyPlayerChatEvent(t, "-restart", false);
  t.addCondition(() => GetTriggerPlayer() === udg_Custom);
  t.addAction(() => {
    TriggerExecute(gg_trg_cancel);
    if (udg_versus > 0) TriggerExecute(gg_trg_continue);
    else TriggerExecute(gg_trg_start);
  });

  {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_START);
    t.addCondition(() => GetTrainedUnitType() === FourCC("h00F"));
    t.addAction(Trig_start_Actions);
  }
});
