import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { MapPlayerEx } from "handles/MapPlayerEx";

export const president = {
  enabled: false,
  president: MapPlayerEx.fromIndex(PLAYER_NEUTRAL_PASSIVE)!,
  handicap: 1,
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = Trigger.create();
  registerAnyPlayerChatEvent(t, "-president", false);
  t.addAction(() => {
    if (udg_gameStarted) return;

    const parts = GetEventPlayerChatString()!.split(" ");

    if (parts.length === 1 && president.handicap !== 0.75) president.enabled = !president.enabled;
    else president.enabled = true;

    if (president.enabled) {
      if (udg_switchOn) udg_switchOn = false;
      if (vampOn) vampOn = false;

      if (parts.length > 1) {
        let handicap = parseFloat(
          parts[1][0] === "." ? `0${parts[1]}` : parts[1],
        );
        handicap = handicap > 23 ? handicap / 100 : handicap;
        president.handicap = handicap >= 0.23 ? handicap : 1;
      } else president.handicap = 0.75;
    } else for (let i = 0; i < bj_MAX_PLAYERS; i++) SetPlayerHandicap(Player(i)!, 1);

    DisplayTimedTextToForce(
      GetPlayersAll()!,
      10,
      `                              |CFF00AEEFProtect the President |CFFED1C24${
        president.enabled
          ? `enabled${president.handicap === 0.75 ? "" : ` (${president.handicap * 100}%)`}`
          : "disabled"
      }|r`,
    );
  });
});
