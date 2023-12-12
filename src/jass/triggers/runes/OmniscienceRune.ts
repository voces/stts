//===========================================================================
// Trigger: Omniscience Rune
//===========================================================================
const Trig_Omniscience_Rune_Actions = () => {
  CreateItemLoc(
    FourCC("I00K"),
    Location(GetRectCenterX(omniscienceRune), GetRectCenterY(omniscienceRune)),
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Omniscience_Rune: () => void;
}
InitTrig_Omniscience_Rune = () => {
  gg_trg_Omniscience_Rune = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Omniscience_Rune, udg_RuneTimer[4]);
  TriggerAddAction(gg_trg_Omniscience_Rune, Trig_Omniscience_Rune_Actions);
};
