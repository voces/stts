import { ForceEx } from "handles/ForceEx";
import { displaySwitchWinner } from "modes/switch/winnerMsg";
import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_cancel_resetSheepState = () => {
  let i = 1;
  udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] - 1;
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

const Trig_cancel_Actions = () => {
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

  ForForce(GetPlayersAll()!, () => udg_apr[GetConvertedPlayerId(GetEnumPlayer()!)] = 999);

  if (udg_versus > 0) {
    udg_versusOff = true;
    if (udg_gameStarted && udg_versus === 2) {
      ForForce(
        GetPlayersAll()!,
        () =>
          udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] =
            !(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)]),
      );
    } else if (!udg_gameStarted && udg_versus === 1) udg_versus = 0;
    udg_versusTime = udg_time;
    udg_time = 0;
  }

  if (!udg_switchOn && !vampOn && !udg_practiceOn && udg_Teams === TEAMS_LOCK_IE_PLAYING) {
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

  if (udg_switchOn) displaySwitchWinner();

  if (wolvesCreated) ForceEx.sheep.for((s) => udg_totalFarmCountBeforeWolves[s.id].pop());

  TriggerExecute(gg_trg_startRound);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_cancel: () => void;
}
InitTrig_cancel = () => {
  gg_trg_cancel = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_cancel, "-cancel");
  TriggerAddCondition(gg_trg_cancel, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_cancel, Trig_cancel_Actions);
};
