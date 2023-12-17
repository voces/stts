import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_hide_Actions = () => {
  if (udg_Teams === TEAMS_LOCK_IE_PLAYING) {
    LeaderboardDisplayBJ(false, PlayerGetLeaderboardBJ(GetTriggerPlayer()!)!);
  }
  udg_permanentHide[GetConvertedPlayerId(GetTriggerPlayer()!)] = true;
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_hide: () => void;
}
InitTrig_hide = () => {
  gg_trg_hide = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_hide, "-hide");
  registerAnyPlayerChatEvent(gg_trg_hide, "-h");
  TriggerAddAction(gg_trg_hide, Trig_hide_Actions);
};
