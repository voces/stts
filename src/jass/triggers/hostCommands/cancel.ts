//===========================================================================
// Trigger: cancel
//===========================================================================
// cancel

const Trig_cancel_playerActions = (): void => {
  udg_apr[GetConvertedPlayerId(GetEnumPlayer()!)] = 999;
};

const Trig_cancel_flipSheepLastGame = (): void => {
  udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] =
    !(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)]);
};

const Trig_cancel_resetSheepState = (): void => {
  let i = 1;
  udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] =
    udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] - 1;
  while (true) {
    if (i > bj_MAX_PLAYERS) break;
    if (
      IsPlayerInForce(ConvertedPlayer(i)!, udg_Sheep) ||
      IsPlayerInForce(ConvertedPlayer(i)!, udg_Spirit)
    ) {
      udg_accumPartner[GetPlayerId(GetEnumPlayer()!) * 24 + i] =
        udg_accumPartner[GetPlayerId(GetEnumPlayer()!) * 24 + i] - 1;
    }
    i = i + 1;
  }
};

const Trig_cancel_Actions = (): void => {
  if (udg_practiceOn) {
    udg_sheepGold = 0;
    udg_wolfGold = 0;
    udg_time = 0;
    defaultTime();
  }

  if (perfectRound) {
    perfectRound = false;
    if (perfectSmartIndex > 0) {
      perfectSmartIndex = perfectSmartIndex - 1;
      perfectRoundCanceled = true;
    }
  }

  ForForce(GetPlayersAll()!, Trig_cancel_playerActions);

  if (udg_versus > 0) {
    udg_versusOff = true;
    if (udg_gameStarted && udg_versus === 2) {
      ForForce(GetPlayersAll()!, Trig_cancel_flipSheepLastGame);
    }
    udg_versusTime = udg_time;
    udg_time = 0;
  }

  if (
    udg_switchOn === false && vampOn === false && udg_practiceOn === false &&
    udg_Teams === TEAMS_LOCK
  ) {
    SetTimeOfDay(GetRandomReal(0, 24));
    ForForce(udg_Sheep, Trig_cancel_resetSheepState);
    ForForce(udg_Spirit, Trig_cancel_resetSheepState);
  }

  if (udg_Teams === TEAMS_CAPTAINS) {
    MultiboardDisplayBJ(false, udg_captainsMultiboard);
    enforceTeamResourceMultiboard();
    MultiboardMinimizeBJ(true, udg_captainsMultiboard);
    DestroyMultiboardBJ(udg_captainsMultiboard);
  }

  TriggerExecute(gg_trg_startRound);
};

const Trig_cancel_Conditions = (): boolean => {
  return GetTriggerPlayer()! === udg_Custom;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_cancel: () => void;
}
InitTrig_cancel = (): void => {
  let i = 0;
  gg_trg_cancel = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(gg_trg_cancel, Player(i)!, "-cancel", true);
    i = i + 1;
  }
  TriggerAddCondition(gg_trg_cancel, Condition(Trig_cancel_Conditions));
  TriggerAddAction(gg_trg_cancel, Trig_cancel_Actions);
};
