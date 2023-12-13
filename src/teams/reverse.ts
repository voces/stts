import { addScriptHook, W3TS_HOOK } from "w3ts";
import { clearForces } from "../util/clearForces";
import { forEachPlayingPlayer } from "../util/forEachPlayingPlayer";
import { registerAnyPlayerChatEvent } from "../util/registerAnyPlayerChatEvent";
import { adjustSheepTeamSize } from "./start";

const Trig_reverse_Actions = () => {
  udg_lastGameString = GetEventPlayerChatString()!.toLowerCase();

  clearForces();
  forEachPlayingPlayer((p) => ForceAddPlayer(udg_sheepLastGame[p.id + 1] ? udg_Wolf : udg_Sheep, p.handle));

  if (udg_lastGameString !== "-reverse") {
    adjustSheepTeamSize(parseInt(udg_lastGameString.split(" ")[1]));
  }

  udg_Teams = TEAMS_LOCK_IE_PLAYING;
  TriggerExecute(gg_trg_createSheep);
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_reverse = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_reverse, "-reverse", false);
  TriggerAddCondition(
    gg_trg_reverse,
    Condition(() => {
      if (GetTriggerPlayer() !== udg_Custom) return false;
      const s = GetEventPlayerChatString()!;
      if (s === "-reverse") return true;
      const count = parseInt(s.split(" ")[1]);
      return count > 0 && count < 24;
    }),
  );
  TriggerAddAction(gg_trg_reverse, Trig_reverse_Actions);
});
