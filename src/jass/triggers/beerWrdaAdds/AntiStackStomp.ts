export {};

const Stomp_Conditions = () => {
  return GetSpellAbilityId() === FourCC("A01E") ||
    GetSpellAbilityId() === FourCC("A01P");
};

const Stomp_cond2 = () => {
  return (GetUnitTypeId(GetFilterUnit()!) === sheepType &&
    IsUnitIllusion(GetFilterUnit()!) === false);
};

const Stomp_cond1 = () => {
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
  udg_antiStackEffect[GetConvertedPlayerId(GetOwningPlayer(GetEnumUnit()!))] = GetLastCreatedEffectBJ()!;
};

const Stomp_Actions = () => {
  const atempgroup = GetUnitsInRangeOfLocMatching(
    300,
    GetUnitLoc(GetTriggerUnit()!),
    Condition(Stomp_cond2),
  )!;
  const atempeffect: effect[] = [];
  ForGroupBJ(atempgroup, Stomp_cond1);
  DestroyGroup(atempgroup);
  for (let i = 0; i < bj_MAX_PLAYERS; i++) atempeffect[i] = udg_antiStackEffect[i + 1];
  TriggerSleepAction(4);
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (atempeffect[i] === udg_antiStackEffect[i + 1]) {
      SetPlayerUnitAvailableBJ(FourCC("n002"), true, ConvertedPlayer(i + 1)!);
      DestroyEffectBJ(udg_antiStackEffect[GetConvertedPlayerId(ConvertedPlayer(i + 1)!)]);
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Anti_Stack_Stomp: () => void;
}
InitTrig_Anti_Stack_Stomp = () => {
  const t = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_SPELL_EFFECT);
  TriggerAddCondition(t, Condition(Stomp_Conditions));
  TriggerAddAction(t, Stomp_Actions);
};
