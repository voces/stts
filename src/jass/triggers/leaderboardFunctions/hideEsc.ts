//===========================================================================
// Trigger: hideEsc
//===========================================================================
// hideEsc

const Trig_hideEsc_filterNonControlledUnits = () => {
  const p = GetOwningPlayer(GetFilterUnit()!);

  if (p === GetTriggerPlayer()!) {
    return true;
  }

  if (
    GetPlayerAlliance(p, GetTriggerPlayer()!, ALLIANCE_SHARED_ADVANCED_CONTROL)
  ) {
    return true;
  }

  return false;
};

const Trig_hideEsc_Actions = () => {
  const p = GetTriggerPlayer()!;

  if (udg_Teams !== TEAMS_LOCK_IE_PLAYING) {
    return;
  }

  if (udg_hideEsc[GetPlayerId(p) + 1]) {
    return;
  }

  const g = CreateGroup()!;
  GroupEnumUnitsSelected(
    g,
    p,
    Condition(Trig_hideEsc_filterNonControlledUnits),
  );
  const size = BlzGroupGetSize(g);
  DestroyGroup(g);

  if (size > 0) {
    return;
  }

  if (IsLeaderboardDisplayed(PlayerGetLeaderboard(p)!)) {
    LeaderboardDisplay(PlayerGetLeaderboard(p)!, false);
    udg_hideshow[GetConvertedPlayerId(p)] = true;
  } else {
    LeaderboardDisplay(PlayerGetLeaderboard(p)!, true);
    udg_hideshow[GetConvertedPlayerId(p)] = false;
  }
  enforceTeamResourceMultiboard();
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_hideEsc: () => void;
}
InitTrig_hideEsc = () => {
  let i = 0;
  gg_trg_hideEsc = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerEventEndCinematic(gg_trg_hideEsc, Player(i)!);
    i = i + 1;
  }
  TriggerAddAction(gg_trg_hideEsc, Trig_hideEsc_Actions);
};
