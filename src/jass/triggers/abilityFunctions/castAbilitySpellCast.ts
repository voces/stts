import {
  ABILITY_TYPE_ID_BLUE_WARD,
  ABILITY_TYPE_ID_HIDE_SHOW,
  ABILITY_TYPE_ID_TRANSLOCATE,
  BUFF_TYPE_ID_FROST,
} from "constants";
import { enforceTeamResourceMultiboard } from "userSettings/teamResources";

const Trig_castAbility_Actions = () => {
  const u = GetTriggerUnit()!;
  const p = GetOwningPlayer(u);
  if (GetSpellAbilityId() === ABILITY_TYPE_ID_HIDE_SHOW && !udg_permanentHide[GetConvertedPlayerId(p)]) {
    if (IsLeaderboardDisplayed(PlayerGetLeaderboard(p)!)) {
      LeaderboardDisplay(PlayerGetLeaderboard(p)!, false);
      udg_hideshow[GetConvertedPlayerId(p)] = true;
    } else {
      LeaderboardDisplay(PlayerGetLeaderboard(p)!, true);
      udg_hideshow[GetConvertedPlayerId(p)] = false;
    }
    enforceTeamResourceMultiboard();
    // Not really sure what this is for
  } else if (GetSpellAbilityId() === ABILITY_TYPE_ID_BLUE_WARD && GetUnitAbilityLevel(u, BUFF_TYPE_ID_FROST) > 0) {
    UnitRemoveBuffBJ(BUFF_TYPE_ID_FROST, GetSpellAbilityUnit()!);
  } else if (GetSpellAbilityId() === ABILITY_TYPE_ID_TRANSLOCATE) {
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
