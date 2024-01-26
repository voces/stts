import { enforceTeamResourceMultiboard } from "userSettings/teamResources";

const Trig_castAbility_Actions = () => {
  const u = GetTriggerUnit()!;
  const p = GetOwningPlayer(u);
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
    GetUnitAbilityLevel(u, FourCC("B005")) > 0
  ) {
    UnitRemoveBuffBJ(FourCC("B005"), GetSpellAbilityUnit()!);
  } else if (GetSpellAbilityId() === FourCC("A029")) {
    IssueImmediateOrder(u, "stop");
    SetUnitState(u, UNIT_STATE_MANA, GetUnitState(u, UNIT_STATE_MANA) + 10);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_castAbilitySpellCast: () => void;
}
InitTrig_castAbilitySpellCast = () => {
  gg_trg_castAbilitySpellCast = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_castAbilitySpellCast, EVENT_PLAYER_UNIT_SPELL_CAST);
  TriggerAddAction(gg_trg_castAbilitySpellCast, Trig_castAbility_Actions);
};
