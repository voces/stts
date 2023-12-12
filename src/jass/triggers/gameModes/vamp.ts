//===========================================================================
// Trigger: vamp

import { president } from "../../../modes/president";

//===========================================================================
const Trig_vamp_Conditions = () => {
  return GetTriggerPlayer()! === udg_Custom;
};

const Trig_vamp_Actions = () => {
  if (vampOn) {
    vampOn = false;
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
    DisableTrigger(gg_trg_sheepVamp);
    LeaderboardSetItemLabel(
      GetLastCreatedLeaderboard()!,
      LeaderboardGetPlayerIndex(GetLastCreatedLeaderboard()!, Player(27)!),
      "|CFFED1C24Next: " + simpleformatTime(udg_time),
    );
  } else {
    vampOn = true;
    udg_switchOn = false;
    president.enabled = false;
    DisableTrigger(gg_trg_sheepDies);
    DisableTrigger(gg_trg_spiritDies);
    DisableTrigger(gg_trg_sheepSwitch);
    EnableTrigger(gg_trg_sheepVamp);
    LeaderboardSetItemLabel(
      GetLastCreatedLeaderboard()!,
      LeaderboardGetPlayerIndex(GetLastCreatedLeaderboard()!, Player(27)!),
      "|CFFED1C24Next: " + simpleformatTime(udg_time) + " vamp",
    );
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_vamp: () => void;
}
InitTrig_vamp = () => {
  gg_trg_vamp = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_vamp, "-vamp", true);
  TriggerAddCondition(gg_trg_vamp, Condition(Trig_vamp_Conditions));
  TriggerAddAction(gg_trg_vamp, Trig_vamp_Actions);
};
