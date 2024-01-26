import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_end_Conditions = () => {
  if ((!(GetTriggerPlayer() === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_end_Func011A = () => {
  CustomDefeatBJ(
    GetEnumPlayer()!,
    `Join our Discord at
https://dsc.gg/sheeptag`,
  );
};

const Trig_end_Actions = () => {
  PauseTimerBJ(true, udg_Createtimer);
  TimerStart(udg_Createtimer, 180, false, null);
  TimerDialogSetTitleBJ(udg_createTimerWindow, "Game ending...");
  TimerDialogDisplayBJ(true, udg_createTimerWindow);
  TriggerExecute(gg_trg_ScoreboardMultiboard);
  MultiboardMinimizeBJ(false, udg_scoreMultiboard);
  udg_Custom = Player(PLAYER_NEUTRAL_PASSIVE)!;
  udg_transfer = -1;
  TriggerExecute(gg_trg_UpdateStats);
  PolledWait(180);
  ForForce(GetPlayersAll()!, Trig_end_Func011A);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_end: () => void;
}
InitTrig_end = () => {
  gg_trg_end = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_end, "-end");
  TriggerAddCondition(gg_trg_end, Condition(Trig_end_Conditions));
  TriggerAddAction(gg_trg_end, Trig_end_Actions);
};
