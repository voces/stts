//===========================================================================
// Trigger: order
//===========================================================================
const Trig_order_Actions = () => {
  udg_atempint = GetConvertedPlayerId(GetOwningPlayer(GetOrderedUnit()!));
  udg_apr[udg_atempint] = udg_apr[udg_atempint] + 1;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_order: () => void;
}
InitTrig_order = () => {
  gg_trg_order = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_order, EVENT_PLAYER_UNIT_ISSUED_ORDER);
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_order,
    EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER,
  );
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_order,
    EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER,
  );
  TriggerAddAction(gg_trg_order, Trig_order_Actions);
};
