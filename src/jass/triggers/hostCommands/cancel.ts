import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { displaySwitchWinner } from "modes/switch/winnerMsg";
import { settings } from "settings/settings";
import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_cancel_resetSheepState = () => {
  udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)]--;
  for (let cid = 1; cid <= bj_MAX_PLAYERS; cid++) {
    if (IsPlayerInForce(ConvertedPlayer(cid)!, udg_Sheep) || IsPlayerInForce(ConvertedPlayer(cid)!, udg_Spirit)) {
      udg_accumPartner[GetPlayerId(GetEnumPlayer()!) * 24 + cid]--;
    }
  }
};

const Trig_cancel_Actions = () => {
  if (udg_practiceOn) {
    udg_sheepGold = 0;
    udg_wolfGold = 0;
    udg_time = 0;
    defaultTime();
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
    }
    if (!udg_gameStarted && udg_versus === 1) udg_versus = 0;
    else settings.desiredSheep = ForceEx.sheep.size() + ForceEx.wisps.size();
  }

  if (!udg_switchOn && !vampOn && !udg_practiceOn && udg_Teams === TEAMS_LOCK_IE_PLAYING) {
    SetTimeOfDay(GetRandomReal(0, 24));
    ForForce(udg_Sheep, Trig_cancel_resetSheepState);
    ForForce(udg_Spirit, Trig_cancel_resetSheepState);
  }

  for (let i = 0; i < bj_MAX_PLAYERS; i++) MapPlayerEx.fromIndex(i)?.cancel();

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
