//===========================================================================
// Trigger: castAbilitySpellCast
//===========================================================================
const Trig_castAbility_Actions = (): void => {
  const p = GetOwningPlayer(GetTriggerUnit()!);
  if (
    GetSpellAbilityId() === FourCC("A00G") &&
    udg_permanentHide[GetConvertedPlayerId(p)] === false
  ) {
    if (IsLeaderboardDisplayed(PlayerGetLeaderboard(p)!)) {
      LeaderboardDisplay(PlayerGetLeaderboard(p)!, false);
      udg_hideshow[GetConvertedPlayerId(p)] = true;
    } else {
      LeaderboardDisplay(PlayerGetLeaderboard(p)!, true);
      udg_hideshow[GetConvertedPlayerId(p)] = false;
    }
    enforceTeamResourceMultiboard();
  } else if (
    GetSpellAbilityId() === FourCC("A00M") &&
    GetUnitAbilityLevel(GetTriggerUnit()!, FourCC("B005")) > 0
  ) {
    UnitRemoveBuffBJ(FourCC("B005"), GetSpellAbilityUnit()!);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_castAbilitySpellCast: () => void;
}
InitTrig_castAbilitySpellCast = (): void => {
  gg_trg_castAbilitySpellCast = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_castAbilitySpellCast,
    EVENT_PLAYER_UNIT_SPELL_CAST,
  );
  TriggerAddAction(gg_trg_castAbilitySpellCast, Trig_castAbility_Actions);
};
