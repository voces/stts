import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_clear_Actions = () => {
  if (GetLocalPlayer() === GetTriggerPlayer()!) ClearTextMessages();
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_clear: () => void;
}
InitTrig_clear = () => {
  gg_trg_clear = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_clear, "-clear", true);
  TriggerAddAction(gg_trg_clear, Trig_clear_Actions);
};
