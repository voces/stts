//===========================================================================
// Trigger: autoCancel
//===========================================================================
const Trig_autoCancel_Conditions = (): boolean => {
  return GetTriggerPlayer()! === udg_Custom;
};

const Trig_autoCancel_Actions = (): void => {
  if (autoCancelEnabled) {
    autoCancelEnabled = false;
  } else {
    autoCancelEnabled = true;
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_autoCancel: () => void;
}
InitTrig_autoCancel = (): void => {
  gg_trg_autoCancel = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_autoCancel, "-autocancel", false);
  TriggerAddCondition(gg_trg_autoCancel, Condition(Trig_autoCancel_Conditions));
  TriggerAddAction(gg_trg_autoCancel, Trig_autoCancel_Actions);
};
