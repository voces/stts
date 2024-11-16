import { updateIntermission } from "ui/api/updateIntermission";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_controloff_Actions = () => {
  if (udg_shareOn) {
    udg_shareOn = false;
    DisplayTimedTextToForce(GetPlayersAll()!, 5, "|cffffcc00Sharing Control has been disabled.");
  } else {
    udg_shareOn = true;
    DisplayTimedTextToForce(GetPlayersAll()!, 5, "|cffffcc00Sharing Control has been enabled.");
  }

  updateIntermission();
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_controloff: () => void;
}
InitTrig_controloff = () => {
  gg_trg_controloff = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_controloff, "-control");
  TriggerAddCondition(gg_trg_controloff, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_controloff, Trig_controloff_Actions);
};
