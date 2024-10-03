import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_SexyOn_Conditions = () => {
  if ((!(GetTriggerPlayer() === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_SexyOn_Actions = () => {
  EnableTrigger(gg_trg_Sheep_Color);
  displayTimedTextToAll("|CFFFFCC00Sexy Enabled|r", 5);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_SexyOn: () => void;
}
InitTrig_SexyOn = () => {
  gg_trg_SexyOn = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_SexyOn, "-yes sexy");
  TriggerAddCondition(gg_trg_SexyOn, Condition(Trig_SexyOn_Conditions));
  TriggerAddAction(gg_trg_SexyOn, Trig_SexyOn_Actions);
};
