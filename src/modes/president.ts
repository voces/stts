import { addScriptHook, Trigger, Unit, W3TS_HOOK } from "w3ts";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { president } from "settings/settings";
import { updateLeaderboardSettingsDisplay } from "settings/time";
import { withDummy } from "util/withDummy";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { ABILITY_TYPE_ID_PRESIDENT } from "constants";

export const applyPresidentBuff = (target: Unit | unit) => {
  const handle = target instanceof Unit ? target.handle : target;
  withDummy(
    (dummy) => {
      dummy.addAbility(ABILITY_TYPE_ID_PRESIDENT);
      IssueTargetOrder(dummy.handle, "innerfire", handle);
    },
    GetUnitX(handle),
    GetUnitY(handle),
    MapPlayerEx.fromEnum(),
  );
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = Trigger.create();
  registerAnyPlayerChatEvent(t, "-president", false);
  t.addAction(() => {
    if (udg_gameStarted || GetTriggerPlayer() !== udg_Custom) return;

    const parts = GetEventPlayerChatString()!.split(" ");

    if (parts.length === 1 && president.handicap === 0.75) president.enabled = !president.enabled;
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
    updateLeaderboardSettingsDisplay();
  });
});
