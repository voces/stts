//===========================================================================
// Trigger: miscSmartSave
//===========================================================================
//TESH.scrollpos=0
//TESH.alwaysfold=0
const Trig_miscSmartSave_Actions = (): void => {
  if (OrderId2StringBJ(GetIssuedOrderId()) === "smart") {
    if (
      IsUnitAlly(GetTriggerUnit()!, GetOwningPlayer(GetOrderTargetUnit()!)) &&
      GetUnitTypeId(GetOrderTargetUnit()!) === wisp
    ) {
      IssueTargetOrder(GetTriggerUnit()!, "attack", GetOrderTargetUnit()!);
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_miscSmartSave: () => void;
}
InitTrig_miscSmartSave = (): void => {
  gg_trg_miscSmartSave = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_miscSmartSave,
    EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER,
  );
  TriggerAddAction(gg_trg_miscSmartSave, Trig_miscSmartSave_Actions);
};
