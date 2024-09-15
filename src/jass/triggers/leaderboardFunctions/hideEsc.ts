import { UNIT_TYPE_ID_START_POSITION } from "constants";
import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { addScriptHook, W3TS_HOOK } from "w3ts";

const Trig_hideEsc_filterNonControlledUnits = () => {
  const u = GetFilterUnit()!;
  if (GetUnitTypeId(u) === UNIT_TYPE_ID_START_POSITION) return false;
  const p = GetOwningPlayer(u);
  return p === GetTriggerPlayer() || GetPlayerAlliance(p, GetTriggerPlayer()!, ALLIANCE_SHARED_ADVANCED_CONTROL);
};

const Trig_hideEsc_Actions = () => {
  const p = GetTriggerPlayer()!;

  if (udg_Teams !== TEAMS_LOCK_IE_PLAYING) return;

  if (udg_hideEsc[GetPlayerId(p) + 1]) return;

  const g = CreateGroup()!;
  GroupEnumUnitsSelected(g, p, Condition(Trig_hideEsc_filterNonControlledUnits));
  const size = BlzGroupGetSize(g);
  DestroyGroup(g);

  if (size > 0) return;

  if (IsLeaderboardDisplayed(PlayerGetLeaderboard(p)!)) {
    LeaderboardDisplay(PlayerGetLeaderboard(p)!, false);
    udg_hideshow[GetConvertedPlayerId(p)] = true;
  } else {
    LeaderboardDisplay(PlayerGetLeaderboard(p)!, true);
    udg_hideshow[GetConvertedPlayerId(p)] = false;
  }
  enforceTeamResourceMultiboard();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  for (let i = 0; i < bj_MAX_PLAYERS; i++) TriggerRegisterPlayerEventEndCinematic(t, Player(i)!);
  TriggerAddAction(t, Trig_hideEsc_Actions);
});
