import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_reset_Conditions = () => {
  if ((!(GetTriggerPlayer() === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_reset_Actions = () => {
  DisableTrigger(GetTriggeringTrigger()!);
  ClearTextMessages();
  PauseTimerBJ(true, udg_massTimer);
  TimerDialogDisplayBJ(false, udg_massTimerWindow);
  PauseTimerBJ(false, udg_Timer);
  TimerDialogDisplayBJ(true, udg_TimerWindow);
  EnableTrigger(gg_trg_mass);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_reset: () => void;
}
InitTrig_reset = () => {
  gg_trg_reset = CreateTrigger();
  DisableTrigger(gg_trg_reset);
  registerAnyPlayerChatEvent(gg_trg_reset, "-stop");
  TriggerAddCondition(gg_trg_reset, Condition(Trig_reset_Conditions));
  TriggerAddAction(gg_trg_reset, Trig_reset_Actions);
};
