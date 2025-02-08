import { bulldog } from "bulldog/settings";
import { end as endBulldog } from "bulldog/stats";
import { updateTimes } from "stats/updateTimes";
import { maybeRotate } from "teams/smart";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { setTimeout } from "util/setTimeout";

const Trig_wolvesWin_Actions = () => {
  ForForce(udg_Spirit, () => udg_sheepSurvived[GetConvertedPlayerId(GetEnumPlayer()!)] += "0 | ");
  if (udg_Teams === TEAMS_LOCK_IE_PLAYING) {
    if (udg_versus === 1) udg_gameTime[1] = TimerGetElapsed(udg_Timer);
    else if (udg_versus === 2) udg_gameTime[2] = TimerGetElapsed(udg_Timer);
    else if (!vampOn && !bulldog.enabled) setTimeout(0.05, () => displayTimedTextToAll(`\n${fullTimeString}.`, 18));
    updateTimes();
    maybeRotate();
    endBulldog();
    TriggerExecute(gg_trg_startRound);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_wolvesWin: () => void;
}
InitTrig_wolvesWin = () => {
  gg_trg_wolvesWin = CreateTrigger();
  TriggerAddAction(gg_trg_wolvesWin, Trig_wolvesWin_Actions);
};
