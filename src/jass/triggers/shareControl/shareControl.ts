//===========================================================================
// Trigger: shareControl
//===========================================================================
const Trig_shareControl_Conditions = (): boolean => {
  if ((!(udg_shareOn === true))) {
    return false;
  }
  if ((!(udg_Teams === 2))) {
    return false;
  }
  return true;
};

const Trig_shareControl_Func003Func001Func001C = (): boolean => {
  if (
    (!(GetPlayerAlliance(
      ConvertedPlayer(GetForLoopIndexA())!,
      ConvertedPlayer(GetForLoopIndexB())!,
      ALLIANCE_SHARED_CONTROL,
    ) === true))
  ) {
    return false;
  }
  return true;
};

const Trig_shareControl_Actions = (): void => {
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
InitTrig_shareControl = (): void => {
  gg_trg_shareControl = CreateTrigger();
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(0)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(1)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(2)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(3)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(4)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(5)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(6)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(7)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(8)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(9)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(10)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(11)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(12)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(13)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(14)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(15)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(16)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(17)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(18)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(19)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(20)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(21)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(22)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerRegisterPlayerAllianceChange(
    gg_trg_shareControl,
    Player(23)!,
    ALLIANCE_SHARED_CONTROL,
  );
  TriggerAddCondition(
    gg_trg_shareControl,
    Condition(Trig_shareControl_Conditions),
  );
  TriggerAddAction(gg_trg_shareControl, Trig_shareControl_Actions);
};
