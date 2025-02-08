import { addScriptHook, Trigger, Unit, W3TS_HOOK } from "w3ts";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { president } from "settings/settings";
import { updateLeaderboardSettingsDisplay } from "settings/time";
import { withDummy } from "util/withDummy";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { ABILITY_TYPE_ID_PRESIDENT } from "constants";
import { bulldog } from "bulldog/settings";

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
  let t = Trigger.create();
  registerAnyPlayerChatEvent(t, "-president", false);
  t.addAction(() => {
    if (udg_gameStarted || GetTriggerPlayer() !== udg_Custom) return;

    const parts = GetEventPlayerChatString()!.split(" ");
    if (parts[0].toLowerCase() === "-presidentcount") return;

    if (parts.length === 1 && president.handicap === 0.75) president.enabled = !president.enabled;
    else president.enabled = true;

    if (president.enabled) {
      udg_switchOn = false;
      vampOn = false;
      bulldog.enabled = false;

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
      `|CFF00AEEFProtect the President |CFFED1C24${
        president.enabled
          ? `enabled${president.handicap === 0.75 ? "" : ` (${president.handicap * 100}%)`}`
          : "disabled"
      }|r`,
    );
    updateLeaderboardSettingsDisplay();
  });

  t = Trigger.create();
  registerAnyPlayerChatEvent(t, "-presidentcount", false);
  t.addAction(() => {
    let count = 0;
    const p = MapPlayerEx.fromEvent()!;
    p.displayTimedText("|CFFFFCC00President Count|r", 8);
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      const p2 = MapPlayerEx.fromIndex(i);
      if (!p2 || p2.slotState === PLAYER_SLOT_STATE_EMPTY) continue;
      if (count > 0 && (count % 15 === 0)) {
        TriggerSleepAction(5);
        count = 0;
        p.displayTimedText("|CFFFFCC00President Count (cont.)|r", 8);
      }
      p.displayTimedText(`${p2.coloredName_} : ${I2S(p2.presidentCount)}`, 8);
      count++;
    }
  });
});
