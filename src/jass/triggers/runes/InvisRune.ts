//===========================================================================
// Trigger: Invis Rune
//
// 0=Initial
// 1=Invis
// 2=Speed
// 3=Mana
// 4=Vision
// Start round/Create Wolves/Cancel
//===========================================================================
const Trig_Invis_Rune_Actions = () => {
  CreateItemLoc(
    FourCC("I00O"),
    Location(GetRectCenterX(invisRune), GetRectCenterY(invisRune)),
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Invis_Rune: () => void;
}
InitTrig_Invis_Rune = () => {
  gg_trg_Invis_Rune = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Invis_Rune, udg_RuneTimer[1]);
  TriggerAddAction(gg_trg_Invis_Rune, Trig_Invis_Rune_Actions);
};
