import { addScriptHook, W3TS_HOOK } from "w3ts";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { clearForces } from "util/clearForces";
import { isPlaying } from "util/isPlaying";
import { ForceEx } from "handles/ForceEx";

const Trig_fair_Actions = () => {
  udg_lastGameString = GetEventPlayerChatString()!.toLowerCase();

  const pool = ForceEx.all.getPlayers().filter((p) => isPlaying(p));

  const desiredSheep = udg_lastGameString === "-fair"
    ? Math.floor(pool.length / 2)
    : parseInt(udg_lastGameString.split(" ")[1]);

  if (desiredSheep >= pool.length) return;

  clearForces();

  let min = Infinity;
  let max = -Infinity;
  const groups: MapPlayerEx[][] = [];
  pool.forEach((p) => {
    if (p.sheepCount < min) min = p.sheepCount;
    if (p.sheepCount > max) max = p.sheepCount;
    if (!groups[p.sheepCount]) groups[p.sheepCount] = [p];
    else groups[p.sheepCount].push(p);
  });

  while (ForceEx.sheep.size() < desiredSheep) {
    if (!Array.isArray(groups[min])) {
      min++;
      continue;
    }
    const pickIndex = Math.floor(Math.random() * groups[min].length);
    const pick = groups[min][pickIndex];
    groups[min].splice(pickIndex, 1);
    ForceEx.sheep.addPlayer(pick);
    if (groups[min].length === 0) min++;
  }

  while (min <= max) {
    if (!Array.isArray(groups[min])) {
      min++;
      continue;
    }
    groups[min].forEach((p) => ForceEx.wolves.addPlayer(p));
    min++;
  }

  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_fair = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_fair, "-fair", false);
  TriggerAddCondition(gg_trg_fair, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_fair, Trig_fair_Actions);
});
