//===========================================================================
// Trigger: Mana Rune
//===========================================================================
const Trig_Mana_Rune_Actions = (): void => {
  CreateItemLoc(
    FourCC("I00J"),
    Location(GetRectCenterX(manaRune), GetRectCenterY(manaRune)),
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Mana_Rune: () => void;
}
InitTrig_Mana_Rune = (): void => {
  gg_trg_Mana_Rune = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Mana_Rune, udg_RuneTimer[3]);
  TriggerAddAction(gg_trg_Mana_Rune, Trig_Mana_Rune_Actions);
};
