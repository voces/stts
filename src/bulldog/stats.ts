import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { settings } from "settings/settings";
import { bulldog } from "./settings";
import { logBulldog, logKatma } from "jass/triggers/hostCommands/UpdateStats";

const scores: MapPlayerEx[] = [];
export const scored = (player: MapPlayerEx) => scores.push(player);

let _died: MapPlayerEx | undefined;
export const died = (player: MapPlayerEx) => {
  _died = player;
};

export const clear = () => {
  scores.splice(0);
  _died = undefined;
};

export const getMode = () =>
  `${settings.teamConfiguration.sheep.length}v${settings.teamConfiguration.wolves.length}-${
    bulldog.katma ? "katma" : "bulldog"
  }`;

export const end = () => {
  if (!bulldog.enabled) return;

  const mode = getMode();
  if (bulldog.katma) {
    const sheepWon = scores.length === ForceEx.wisps.size();
    const sheep: number[] = [];
    const wolves: number[] = [];

    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      const p = MapPlayerEx.fromIndex(i)!;
      if (ForceEx.sheep.hasPlayer(p) || ForceEx.wisps.hasPlayer(p)) {
        sheep.push(p.id);
        const stats = p.bulldog[mode] ?? (p.bulldog[mode] = { team: 0, solo: 0, leaks: 0, deaths: 0 });
        if (sheepWon) {
          stats.team += 1;
          stats.solo += 1;
        } else if (p === _died) stats.deaths++;
      } else if (ForceEx.wolves.hasPlayer(p)) {
        wolves.push(p.id);
        const stats = p.bulldog[mode] ?? (p.bulldog[mode] = { team: 0, solo: 0, leaks: 0, deaths: 0 });
        if (sheepWon) stats.leaks += 1;
      }
    }

    logKatma(sheep.join(" "), wolves.join(" "), sheepWon ? "s" : "w");
  } else {
    const sheep: number[] = [];
    const wolves: number[] = [];

    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      const p = MapPlayerEx.fromIndex(i)!;
      if (ForceEx.sheep.hasPlayer(p) || ForceEx.wisps.hasPlayer(p)) {
        sheep.push(p.id);
        const stats = p.bulldog[mode] ?? (p.bulldog[mode] = { team: 0, solo: 0, leaks: 0, deaths: 0 });
        stats.team += scores.length;
        if (scores.includes(p)) stats.solo++;
        else stats.deaths++;
      } else if (ForceEx.wolves.hasPlayer(p)) {
        wolves.push(p.id);
        const stats = p.bulldog[mode] ?? (p.bulldog[mode] = { team: 0, solo: 0, leaks: 0, deaths: 0 });
        stats.leaks += scores.length;
      }
    }

    logBulldog(sheep.join(" "), wolves.join(" "), scores.map((p) => p.id).join(" "));
  }
};
