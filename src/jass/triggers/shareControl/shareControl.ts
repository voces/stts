//===========================================================================
// Trigger: shareControl
//===========================================================================
const Trig_shareControl_Conditions = () => {
  if (!udg_shareOn) return false;
  if ((!(udg_Teams === TEAMS_LOCK_IE_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_shareControl_Func003Func001Func001C = () => {
  if (
    !GetPlayerAlliance(
      ConvertedPlayer(GetForLoopIndexA())!,
      ConvertedPlayer(GetForLoopIndexB())!,
      ALLIANCE_SHARED_CONTROL,
    )
  ) {
    return false;
  }
  return true;
};

const Trig_shareControl_Actions = () => {
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    bj_forLoopBIndex = 1;
    bj_forLoopBIndexEnd = 24;
    while (true) {
      if (bj_forLoopBIndex > bj_forLoopBIndexEnd) break;
      if ((Trig_shareControl_Func003Func001Func001C())) {
        SetPlayerAllianceStateBJ(
          ConvertedPlayer(GetForLoopIndexA())!,
          ConvertedPlayer(GetForLoopIndexB())!,
          bj_ALLIANCE_ALLIED_ADVUNITS,
        );
      }
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_shareControl: () => void;
}
InitTrig_shareControl = () => {
  gg_trg_shareControl = CreateTrigger();
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    TriggerRegisterPlayerAllianceChange(gg_trg_shareControl, Player(i)!, ALLIANCE_SHARED_CONTROL);
  }
  TriggerAddCondition(
    gg_trg_shareControl,
    Condition(Trig_shareControl_Conditions),
  );
  TriggerAddAction(gg_trg_shareControl, Trig_shareControl_Actions);
};
