import { setTimeout, Timeout } from "util/setTimeout";
import { switchSheepTimers } from "./switch";
import { switchSetting } from "settings/settings";

let timeout: Timeout | undefined = undefined;

export const startUpdatingLeaderboard = () => {
  if (timeout) timeout.cancel();
  timeout = setTimeout(1, () => {
    if (!udg_switchOn || !udg_gameStarted) {
      if (timeout) {
        timeout.cancel();
        timeout = undefined;
      }
      return;
    }

    let won = false;

    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      const p = Player(i)!;
      if (IsPlayerInForce(p, udg_Sheep) || IsPlayerInForce(p, udg_Wolf)) {
        if (IsPlayerInForce(p, udg_Sheep)) switchSheepTimers[i].pause();
        const t = Math.round(switchSheepTimers[i].elapsed);
        LeaderboardSetPlayerItemValueBJ(p, PlayerGetLeaderboard(GetLocalPlayer())!, t);
        if (t >= switchSetting.goalTime) won = true;
        if (IsPlayerInForce(p, udg_Sheep)) switchSheepTimers[i].resume();
      }
    }

    if (won) setTimeout(0.1, () => TriggerExecute(gg_trg_cancel));
  }, true);
};
