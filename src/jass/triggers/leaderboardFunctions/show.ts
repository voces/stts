import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_show_Func001C = () => {
  if (GetEventPlayerChatString() !== "-s") return false;
  if (!udg_practiceOn) return false;
  return true;
};

const Trig_show_Actions = () => {
  if (!(Trig_show_Func001C())) {
    if (udg_Teams === TEAMS_LOCK_IE_PLAYING) {
      LeaderboardDisplayBJ(true, PlayerGetLeaderboardBJ(GetTriggerPlayer()!)!);
    }
    udg_permanentHide[GetConvertedPlayerId(GetTriggerPlayer()!)] = false;
  }
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
