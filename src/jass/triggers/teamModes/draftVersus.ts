import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_draftVersus_Conditions = () =>
  udg_draftOn &&
  (GetTriggerPlayer() === udg_captains[udg_captainTurn] ||
    GetPlayerController(udg_captains[udg_captainTurn]) === MAP_CONTROL_COMPUTER);

const Trig_draftVersus_Actions = () => {
  const parts = GetEventPlayerChatString()?.split(" ") ?? [];
  const cid = parseInt(parts[1]);
  if (cid < 1 || cid > bj_MAX_PLAYERS) return;
  const p = ConvertedPlayer(cid)!;
  if (IsPlayerInForce(p, udg_Draft)) {
    udg_draftOn = false;
    udg_giveOn = false;

    udg_sheepLastGame[cid] = udg_captainTurn === 1;
    ForceRemovePlayerSimple(p, udg_Draft);

    MultiboardSetItemValueBJ(udg_captainsMultiboard, 2, udg_multiboardRow[cid], "");
    udg_multiboardRow[cid] = (() => {
      let row = 2;
      while (true) {
        let open = true;
        if (row === udg_multiboardRow[cid]) return row;
        for (let cid2 = 1; cid2 <= bj_MAX_PLAYERS; cid2++) {
          const p = MapPlayerEx.fromIndex(cid2 - 1);
          if (p?.isActive && udg_multiboardRow[cid2] === row && udg_sheepLastGame[cid] === udg_sheepLastGame[cid2]) {
            open = false;
            break;
          }
        }
        if (open) return row;
        row++;
      }
    })();
    MultiboardSetItemValueBJ(
      udg_captainsMultiboard,
      udg_captainTurn,
      udg_multiboardRow[cid],
      udg_colorString[cid] + GetPlayerName(p),
    );

    if (CountPlayersInForceBJ(udg_Draft) === 1) {
      ForForce(udg_Draft, () => udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = udg_captainTurn === 3);

      const swap = GetRandomInt(0, 1) === 0;
      for (let pid = 0; pid < bj_MAX_PLAYERS; pid++) {
        const p = MapPlayerEx.fromIndex(pid);
        if (!p?.isActive) continue;
        if (swap) p.sheepLastGame = !p.sheepLastGame;
        if (p?.sheepLastGame) ForceEx.sheep.addPlayer(p);
        else ForceEx.wolves.addPlayer(p);
      }

      udg_Teams = TEAMS_LOCK_IE_PLAYING;
      MultiboardDisplayBJ(false, udg_captainsMultiboard);
      enforceTeamResourceMultiboard();
      MultiboardMinimizeBJ(true, udg_captainsMultiboard);
      DestroyMultiboardBJ(udg_captainsMultiboard);

      TriggerSleepAction(0.01);
      udg_someVersusBoolean = false;
      DisableTrigger(gg_trg_draftVersus);
      DisableTrigger(gg_trg_giveUpCaptain);
      TriggerExecute(gg_trg_versusCountDown);
    } else {
      if (udg_captainTurn === 1) {
        if (!udg_pickAgain) {
          udg_captainTurn = 3;
          udg_pickAgain = true;
        } else {
          if (CountPlayersInForceBJ(udg_Draft) > 1) udg_captainRow = udg_captainRow + 1;
          else udg_captainTurn = 3;
          udg_pickAgain = false;
        }
      } else {
        if (!udg_pickAgain) {
          udg_captainTurn = 1;
          udg_pickAgain = true;
        } else {
          if (CountPlayersInForceBJ(udg_Draft) > 1) udg_captainRow = udg_captainRow + 1;
          else udg_captainTurn = 1;
          udg_pickAgain = false;
        }
      }
      udg_draftOn = true;
      udg_giveOn = true;
      MultiboardSetTitleText(
        udg_captainsMultiboard,
        udg_colorString[GetConvertedPlayerId(udg_captains[udg_captainTurn])] +
          GetPlayerName(udg_captains[udg_captainTurn]) + "'s turn",
      );
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_draftVersus: () => void;
}
InitTrig_draftVersus = () => {
  gg_trg_draftVersus = CreateTrigger();
  DisableTrigger(gg_trg_draftVersus);
  registerAnyPlayerChatEvent(gg_trg_draftVersus, "-draft", false);
  TriggerAddCondition(gg_trg_draftVersus, Condition(Trig_draftVersus_Conditions));
  TriggerAddAction(gg_trg_draftVersus, Trig_draftVersus_Actions);
};
