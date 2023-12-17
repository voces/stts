import { maybeRotate } from "teams/smart";

const Trig_wolvesWin_Func001A = () => {
  udg_sheepSurvived[GetConvertedPlayerId(GetEnumPlayer()!)] =
    udg_sheepSurvived[GetConvertedPlayerId(GetEnumPlayer()!)] + ("0 | ");
};

const Trig_wolvesWin_Func002Func001Func001C = () => {
  if ((!(udg_versus === 2))) {
    return false;
  }
  return true;
};

const Trig_wolvesWin_Func002Func001C = () => {
  if ((!(udg_versus === 1))) {
    return false;
  }
  return true;
};

const Trig_wolvesWin_Func002C = () => {
  if ((!(udg_Teams === TEAMS_LOCK_IE_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_wolvesWin_Actions = () => {
  ForForce(udg_Spirit, Trig_wolvesWin_Func001A);
  if ((Trig_wolvesWin_Func002C())) {
    if ((Trig_wolvesWin_Func002Func001C())) {
      udg_gameTime[1] = TimerGetElapsed(udg_Timer);
    } else {
      if ((Trig_wolvesWin_Func002Func001Func001C())) {
        udg_gameTime[2] = TimerGetElapsed(udg_Timer);
      }
    }
    updateTimes();
    maybeRotate();
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
