import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_show_Actions = () => {
  if (GetEventPlayerChatString() === "-s" && udg_practiceOn) return;

  if (udg_Teams === TEAMS_LOCK_IE_PLAYING) LeaderboardDisplay(PlayerGetLeaderboard(GetTriggerPlayer()!)!, true);

  udg_permanentHide[GetConvertedPlayerId(GetTriggerPlayer()!)] = false;
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_show: () => void;
}
InitTrig_show = () => {
  gg_trg_show = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_show, "-show");
  registerAnyPlayerChatEvent(gg_trg_show, "-s");
  TriggerAddAction(gg_trg_show, Trig_show_Actions);
};
