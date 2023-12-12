//===========================================================================
// Trigger: Speed Rune
//===========================================================================
const Trig_Speed_Rune_Actions = () => {
  CreateItemLoc(
    FourCC("I00P"),
    Location(GetRectCenterX(speedRune), GetRectCenterY(speedRune)),
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Speed_Rune: () => void;
}
InitTrig_Speed_Rune = () => {
  gg_trg_Speed_Rune = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Speed_Rune, udg_RuneTimer[2]);
  TriggerAddAction(gg_trg_Speed_Rune, Trig_Speed_Rune_Actions);
};
