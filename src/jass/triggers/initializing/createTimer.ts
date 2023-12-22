import { enforceTeamResourceMultiboard } from "userSettings/teamResources";

const Trig_createTimer_Func001Func001A = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft);
};

const Trig_createTimer_Func001C = () => {
  if ((!(udg_Teams === TEAMS_CAPTAINS))) {
    return false;
  }
  return true;
};

const Trig_createTimer_Actions = () => {
  if ((Trig_createTimer_Func001C())) {
    ForForce(udg_Draft, Trig_createTimer_Func001Func001A);
    MultiboardDisplayBJ(false, udg_captainsMultiboard);
    MultiboardMinimizeBJ(true, udg_captainsMultiboard);
    DestroyMultiboardBJ(udg_captainsMultiboard);
    enforceTeamResourceMultiboard();
    TriggerSleepAction(0.01);
    DisableTrigger(GetTriggeringTrigger()!);
    DisableTrigger(gg_trg_giveUpCaptain);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_createTimer: () => void;
}
InitTrig_createTimer = () => {
  gg_trg_createTimer = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_createTimer, udg_Createtimer);
  TriggerAddAction(gg_trg_createTimer, Trig_createTimer_Actions);
};
