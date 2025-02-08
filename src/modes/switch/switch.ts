import { updateLeaderboardSettingsDisplay } from "settings/time";
import { president, switchSetting } from "settings/settings";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, Timer, W3TS_HOOK } from "w3ts";
import { bulldog } from "bulldog/settings";

export const switchSheepTimers = Array.from({ length: bj_MAX_PLAYERS }, () => Timer.create());

const Trig_switch_Actions = () => {
  const s = GetEventPlayerChatString()!.toLowerCase();
  if (udg_switchOn && s === "-switch") {
    udg_switchOn = false;
    updateLeaderboardSettingsDisplay();
    return;
  }

  vampOn = false;
  president.enabled = false;
  bulldog.enabled = false;
  udg_switchOn = true;

  if (s === "-switch") {
    udg_sheepInvul = 5;
    udg_wolfSpawn = 3;
    udg_dummyWisps = 0;
    udg_wispPoints = 0;
    switchSetting.goalTime = Infinity;
  } else {
    const parts = s.split(" ").slice(1);
    const args = parts.filter((a) => !a.includes(":")).map((a) => a === "" ? 0 : S2I(a));
    udg_sheepInvul = args.length > 0 && args[0] >= 0 && args[0] <= 5 ? args[0] === 0 ? 0.01 : args[0] : 5;
    udg_wolfSpawn = args.length > 1 && args[1] >= 0 && args[1] <= 10 ? args[1] === 0 ? 0.01 : args[1] : 3;
    udg_dummyWisps = args.length > 2 && args[2] >= 0 && args[2] <= 5 ? args[2] : 0;
    udg_wispPoints = args.length > 3 && args[3] >= 0 && args[3] <= 10 ? args[3] : 0;

    const time = parts.find((a) => a.includes(":"));
    if (time) {
      switchSetting.goalTime = time.split(":").reduceRight(
        (sum, v, i, arr) => sum + S2R(v) * 60 ** (arr.length - i - 1),
        0,
      );
    } else switchSetting.goalTime = Infinity;
  }

  updateLeaderboardSettingsDisplay();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_switch = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_switch, "-switch", false);
  TriggerAddCondition(gg_trg_switch, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_switch, Trig_switch_Actions);
});
