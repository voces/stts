//===========================================================================
// Trigger: massTimeUp
//===========================================================================
const Trig_massTimeUp_Func006A = (): void => {
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    15,
    ("                              " +
      udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)]) +
      (GetPlayerName(GetEnumPlayer()!) +
        ("|r massed " +
          (I2S(GetPlayerStructureCount(GetEnumPlayer()!, true)) + " farms"))),
  );
};

const Trig_massTimeUp_Actions = (): void => {
  DisableTrigger(gg_trg_reset);
  PauseTimerBJ(false, udg_Timer);
  TimerDialogDisplayBJ(true, udg_TimerWindow);
  TimerDialogDisplayBJ(false, udg_massTimerWindow);
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    15,
    "                              |CFFFFCC00Time! Scores |r",
  );
  ForForce(GetPlayersAll()!, Trig_massTimeUp_Func006A);
  EnableTrigger(gg_trg_mass);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_massTimeUp: () => void;
}
InitTrig_massTimeUp = (): void => {
  gg_trg_massTimeUp = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_massTimeUp, udg_massTimer);
  TriggerAddAction(gg_trg_massTimeUp, Trig_massTimeUp_Actions);
};
