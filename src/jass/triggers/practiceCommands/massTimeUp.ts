import { MapPlayerEx } from "handles/MapPlayerEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

const Trig_massTimeUp_Actions = () => {
  DisableTrigger(gg_trg_reset);
  PauseTimerBJ(false, udg_Timer);
  TimerDialogDisplayBJ(true, udg_TimerWindow);
  TimerDialogDisplayBJ(false, udg_massTimerWindow);
  displayTimedTextToAll(
    "                              |CFFFFCC00Time! Scores |r",
    15,
  );
  ForForce(GetPlayersAll()!, () =>
    displayTimedTextToAll(
      `                              ${MapPlayerEx.fromEnum()} massed ${
        I2S(GetPlayerStructureCount(GetEnumPlayer()!, true))
      } farms`,
      15,
    ));
  EnableTrigger(gg_trg_mass);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_massTimeUp: () => void;
}
InitTrig_massTimeUp = () => {
  gg_trg_massTimeUp = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_massTimeUp, udg_massTimer);
  TriggerAddAction(gg_trg_massTimeUp, Trig_massTimeUp_Actions);
};
