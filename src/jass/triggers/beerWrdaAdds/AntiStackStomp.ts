//===========================================================================
// Trigger: Anti Stack Stomp
//===========================================================================
const Stomp_Conditions = (): boolean => {
  return GetSpellAbilityId() === FourCC("A01E") ||
    GetSpellAbilityId() === FourCC("A01P");
};

const Stomp_cond2 = (): boolean => {
  return (GetUnitTypeId(GetFilterUnit()!) === FourCC("uC04") &&
    IsUnitIllusion(GetFilterUnit()!) === false);
};

const Stomp_cond1 = (): void => {
  DestroyEffectBJ(
    udg_antiStackEffect[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))],
  );
  SetPlayerUnitAvailableBJ(
    FourCC("n002"),
    false,
    GetOwningPlayer(GetEnumUnit()!),
  );
  AddSpecialEffectTargetUnitBJ(
    "origin",
    GetEnumUnit()!,
    "Abilities\\Spells\\Orc\\Purge\\PurgeBuffTarget.mdl",
  );
  udg_antiStackEffect[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] =
    GetLastCreatedEffectBJ()!;
};

const Stomp_Actions = (): void => {
  const atempgroup = GetUnitsInRangeOfLocMatching(
    300,
    GetUnitLoc(GetTriggerUnit()!),
    Condition(Stomp_cond2),
  )!;
  const atempeffect: Array<effect> = [];
  let i = 0;
  ForGroupBJ(atempgroup, Stomp_cond1);
  DestroyGroup(atempgroup);
  while (true) {
    if (i >= 24) break;
    atempeffect[i] = udg_antiStackEffect[i + 1];
    i = i + 1;
  }
  TriggerSleepAction(4);
  i = 0;
  while (true) {
    if (i >= 24) break;
    if ((atempeffect[i] === udg_antiStackEffect[i + 1])) {
      SetPlayerUnitAvailableBJ(FourCC("n002"), true, ConvertedPlayer(i + 1)!);
      DestroyEffectBJ(
        udg_antiStackEffect[GetConvertedPlayerId(ConvertedPlayer(i + 1)!)],
      );
    }
    i = i + 1;
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Anti_Stack_Stomp: () => void;
}
InitTrig_Anti_Stack_Stomp = (): void => {
  const t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_SPELL_EFFECT);
  TriggerAddCondition(t, Condition(Stomp_Conditions));
  TriggerAddAction(t, Stomp_Actions);
};
