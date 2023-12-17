//===========================================================================
// Trigger: Runes On
//===========================================================================
const Trig_Runes_On_Func001C = () => {
  if ((!(udg_runeSpawn === 0))) {
    return false;
  }
  return true;
};

const Trig_Runes_On_Actions = () => {
  if ((Trig_Runes_On_Func001C())) {
    TimerStart(udg_RuneTimer[0], 90, false, null);
    TriggerExecute(gg_trg_Invis_Rune);
    TriggerExecute(gg_trg_Speed_Rune);
    udg_runeSpawn = 1;
  } else {
    TriggerExecute(gg_trg_Mana_Rune);
    TriggerExecute(gg_trg_Omniscience_Rune);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Runes_On: () => void;
}
InitTrig_Runes_On = () => {
  gg_trg_Runes_On = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Runes_On, udg_RuneTimer[0]);
  TriggerAddAction(gg_trg_Runes_On, Trig_Runes_On_Actions);
};
