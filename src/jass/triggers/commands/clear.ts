//===========================================================================
// Trigger: clear
//===========================================================================
const Trig_clear_Actions = (): void => {
  if (GetLocalPlayer() === GetTriggerPlayer()!) {
    ClearTextMessages();
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_clear: () => void;
}
InitTrig_clear = (): void => {
  gg_trg_clear = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_clear, "-clear", true);
  TriggerAddAction(gg_trg_clear, Trig_clear_Actions);
};
