//===========================================================================
// Trigger: owner
//===========================================================================
const Trig_IllusionCheck = (): boolean => {
  return (IsUnitIllusionBJ(GetFilterUnit()!) === true);
};

const Trig_RemoveUnit = (): void => {
  RemoveUnit(GetEnumUnit()!);
};

const Trig_owner_Func001C = (): boolean => {
  if (
    (!GetBooleanOr(
      GetOwningPlayer(udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)]) ===
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      GetOwningPlayer(udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)]) ===
        Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    ))
  ) {
    return false;
  }
  return true;
};

const Trig_owner_Actions = (): void => {
  if ((Trig_owner_Func001C())) {
    SetUnitOwner(
      udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
      GetTriggerPlayer()!,
      false,
    );
    UnitAddAbilityBJ(
      FourCC("A01V"),
      udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
    );
  } else {
    SetUnitOwner(
      udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
      Player(bj_PLAYER_NEUTRAL_VICTIM)!,
      false,
    );
    UnitRemoveAbilityBJ(
      FourCC("A01V"),
      udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
    );
  }

  IssueImmediateOrderBJ(
    udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
    "holdposition",
  );

  udg_atempgroup = GetUnitsOfPlayerMatching(
    GetTriggerPlayer()!,
    Condition(Trig_IllusionCheck),
  )!;
  ForGroupBJ(udg_atempgroup, Trig_RemoveUnit);
  DestroyGroup(udg_atempgroup);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_owner: () => void;
}
InitTrig_owner = (): void => {
  gg_trg_owner = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_owner, "-owner", true);
  TriggerAddAction(gg_trg_owner, Trig_owner_Actions);
};
