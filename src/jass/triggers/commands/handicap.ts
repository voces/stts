//===========================================================================
// Trigger: handicap
//===========================================================================
const setOwnHandicap = (): void => {
  const handicap = S2R(myArg[0]);
  const p = GetTriggerPlayer()!;
  const playerId = GetPlayerId(p);

  if (handicap >= 23 && handicap <= 100) {
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      udg_colorString[playerId + 1] + GetPlayerName(p) +
        " |r's handicap set to " + R2S(handicap) + "%.",
    );
    SetPlayerHandicap(p, handicap / 100);
  }
};

const setOtherHandicap = (): void => {
  const playerId = S2I(myArg[0]) - 1;
  const p = Player(playerId)!;
  const handicap = S2R(myArg[1]);

  if (handicap >= 23 && handicap <= 500) {
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      udg_colorString[playerId + 1] + GetPlayerName(p) +
        " |r's handicap set to " + R2S(handicap) + "%.",
    );
    SetPlayerHandicap(p, handicap / 100);
  }
};

const Trig_handicap_Actions = (): void => {
  Split(GetEventPlayerChatString()!, " ", true);
  if (myArgCount === 1) {
    setOwnHandicap();
  } else if (GetTriggerPlayer()! === udg_Custom) {
    setOtherHandicap();
  }
};

const Trig_handicap_Conditions = (): boolean => {
  return !udg_gameStarted;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_handicap: () => void;
}
InitTrig_handicap = (): void => {
  let i = 0;
  gg_trg_handicap = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(
      gg_trg_handicap,
      Player(i)!,
      "-handicap",
      false,
    );
    i = i + 1;
  }
  TriggerAddCondition(gg_trg_handicap, Condition(Trig_handicap_Conditions));
  TriggerAddAction(gg_trg_handicap, Trig_handicap_Actions);
};
