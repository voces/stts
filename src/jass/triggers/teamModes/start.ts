import { MapPlayer, Trigger } from "w3ts";
import { registerAnyPlayerChatEvent } from "../../../util/registerAnyPlayerChatEvent";
import { clearForces } from "../../../util/clearForces";
import { forEachNonAfkPlayingPlayer } from "../../../util/forEachPlayingPlayer";
import { reduceForce } from "../../../util/reduceForce";
import { isPlaying } from "../../../util/isPlaying";

const getMinsReducer =
  <T>(fn: (v: T) => number) => (accum: [min: number, pool: T[]], v: T): [min: number, pool: T[]] => {
    const t = fn(v);
    if (t < accum[0]) return [t, [v]];
    if (t === accum[0]) return (accum[1].push(v), accum);
    return accum;
  };

const Trig_start_Actions = () => {
  TriggerSleepAction(0.01);

  udg_lastGameString = GetEventPlayerChatString()!;

  clearForces();
  forEachNonAfkPlayingPlayer((p) => ForceAddPlayer(udg_sheepLastGame[p.id + 1] ? udg_Sheep : udg_Wolf, p.handle));

  if (udg_lastGameString !== "-start" && udg_lastGameString !== "-restart") {
    let currentSheep = reduceForce(
      GetPlayersAll()!,
      0,
      (sum, p) => isPlaying(p) && udg_sheepLastGame[p.id + 1] ? sum + 1 : sum,
    );

    const desiredSheep = parseInt(udg_lastGameString.split(" ")[1]);

    if (desiredSheep !== currentSheep) {
      while (desiredSheep < currentSheep) {
        const pool = reduceForce<[min: number, pool: MapPlayer[]]>(
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
        const pool = reduceForce<[min: number, pool: MapPlayer[]]>(
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
  }

  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_start: () => void;
}
InitTrig_start = () => {
  gg_trg_start = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_start, "-start", false);
  TriggerAddCondition(
    gg_trg_start,
    Condition(() => {
      if (GetTriggerPlayer()! !== udg_Custom) return false;
      const s = GetEventPlayerChatString() ?? "";
      if (s === "-start" || s === "-restart") return true;
      const count = parseInt(s.split(" ")[1]);
      return count > 0 && count < 24;
    }),
  );
  TriggerAddAction(gg_trg_start, Trig_start_Actions);

  const t = Trigger.create();
  registerAnyPlayerChatEvent(t, "-restart", false);
  t.addCondition(() => GetTriggerPlayer() === udg_Custom);
  t.addAction(() => {
    TriggerExecute(gg_trg_cancel);
    TriggerExecute(gg_trg_start);
  });
};
