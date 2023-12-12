import { maybeRotate } from "../../../teams/smart";

const Trig_sheepWin_Func001Func003A = () => {
  udg_sheepSurvived[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] =
    udg_sheepSurvived[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] +
    (udg_atempstring + " | ");
  udg_wins[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] =
    udg_wins[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] + 1;
};

const Trig_sheepWin_Func001Func005A = () => {
  udg_sheepSurvived[GetConvertedPlayerId(GetEnumPlayer()!)] =
    udg_sheepSurvived[GetConvertedPlayerId(GetEnumPlayer()!)] +
    (I2S(CountPlayersInForceBJ(udg_Sheep)) + " | ");
  udg_wins[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_wins[GetConvertedPlayerId(GetEnumPlayer()!)] + 1;
};

const Trig_sheepWin_Func001Func007C = () => {
  if ((!(udg_practiceOn === false))) {
    return false;
  }
  if ((!(udg_switchOn === false))) {
    return false;
  }
  return true;
};

const Trig_sheepWin_Func001C = () => {
  if ((!Trig_sheepWin_Func001Func007C())) {
    return false;
  }
  return true;
};

const Trig_sheepWin_Func002Func001Func001C = () => {
  if ((!(udg_versus === 2))) {
    return false;
  }
  return true;
};

const Trig_sheepWin_Func002Func001C = () => {
  if ((!(udg_versus === 1))) {
    return false;
  }
  return true;
};

const Trig_sheepWin_Func002C = () => {
  if ((!(udg_Teams === TEAMS_LOCK_IE_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_sheepWin_Actions = () => {
  if ((Trig_sheepWin_Func001C())) {
    udg_atempgroup = GetUnitsOfTypeIdAll(sheepType)!;
    udg_atempstring = I2S(CountUnitsInGroup(udg_atempgroup))!;
    ForGroupBJ(udg_atempgroup, Trig_sheepWin_Func001Func003A);
    DestroyGroup(udg_atempgroup);
    ForForce(udg_Spirit, Trig_sheepWin_Func001Func005A);
    maybeRotate();
  }
  if ((Trig_sheepWin_Func002C())) {
    if ((Trig_sheepWin_Func002Func001C())) {
      udg_gameTime[1] = udg_time;
    } else {
      if ((Trig_sheepWin_Func002Func001Func001C())) {
        udg_gameTime[2] = udg_time;
      }
    }
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
