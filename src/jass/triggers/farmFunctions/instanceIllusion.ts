const Trig_instanceIllusion_Actions = () => {
  ReplaceUnitBJ(GetTriggerUnit()!, FourCC("n004"), bj_UNIT_STATE_METHOD_RELATIVE);
  if (GetPlayerAlliance(GetOwningPlayer(bj_lastReplacedUnit!), GetLocalPlayer(), ALLIANCE_SHARED_VISION)) {
    SetUnitVertexColor(bj_lastReplacedUnit!, 127, 255, 127, 191);
  }
  AdjustPlayerStateBJ(-20, GetOwningPlayer(GetLastReplacedUnitBJ()!), PLAYER_STATE_RESOURCE_GOLD);
};

export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_instanceIllusion: () => void;
}
InitTrig_instanceIllusion = () => {
  gg_trg_instanceIllusion = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_instanceIllusion, EVENT_PLAYER_UNIT_TRAIN_START);
  TriggerAddCondition(gg_trg_instanceIllusion, Condition(() => GetTrainedUnitType() === FourCC("n004")));
  TriggerAddAction(gg_trg_instanceIllusion, Trig_instanceIllusion_Actions);
};
