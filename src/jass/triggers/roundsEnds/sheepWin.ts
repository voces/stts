import { bulldog } from "bulldog/settings";
import { end as endBulldog } from "bulldog/stats";
import { ForceEx } from "handles/ForceEx";
import { displaySwitchWinner } from "modes/switch/winnerMsg";
import { president } from "settings/settings";
import { updateTimes } from "stats/updateTimes";
import { maybeRotate } from "teams/smart";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { setTimeout } from "util/setTimeout";

const updateLastSurvivorStats = () => {
  udg_sheepSurvived[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] =
    udg_sheepSurvived[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] +
    (udg_atempstring + " | ");
  udg_wins[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] =
    udg_wins[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] + 1;
};

const updateSheepStats = () => {
  udg_sheepSurvived[GetConvertedPlayerId(GetEnumPlayer()!)] =
    udg_sheepSurvived[GetConvertedPlayerId(GetEnumPlayer()!)] +
    (I2S(CountPlayersInForceBJ(udg_Sheep)) + " | ");
  udg_wins[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_wins[GetConvertedPlayerId(GetEnumPlayer()!)] + 1;
};

const Trig_sheepWin_Actions = () => {
  // Timer expiring is a wolf win, not sheep win
  if (GetExpiredTimer() && bulldog.enabled) return TriggerExecute(gg_trg_wolvesWin);

  if (!president.enabled) ForceEx.sheep.for((p) => p.survived());
  if (!udg_practiceOn && !udg_switchOn) {
    udg_atempgroup = GetUnitsOfTypeIdAll(sheepType)!;
    udg_atempstring = I2S(CountUnitsInGroup(udg_atempgroup))!;
    if (!bulldog.enabled) {
      ForGroupBJ(udg_atempgroup, updateLastSurvivorStats);
      ForForce(udg_Spirit, updateSheepStats);
    }
    DestroyGroup(udg_atempgroup);
    maybeRotate();
  }
  if (udg_switchOn) displaySwitchWinner();
  endBulldog();
  if (udg_Teams === TEAMS_LOCK_IE_PLAYING) {
    if (udg_versus === 1) udg_gameTime[1] = udg_time;
    else if (udg_versus === 2) udg_gameTime[2] = udg_time;
    else if (!vampOn && !bulldog.enabled) setTimeout(0.05, () => displayTimedTextToAll(`\n${fullTimeString}.`, 18));
    updateTimes();
    TriggerExecute(gg_trg_startRound);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sheepWin: () => void;
}
InitTrig_sheepWin = () => {
  gg_trg_sheepWin = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_sheepWin, udg_Timer);
  TriggerAddAction(gg_trg_sheepWin, Trig_sheepWin_Actions);
};
