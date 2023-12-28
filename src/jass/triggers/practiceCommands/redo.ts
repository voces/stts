import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_redo_Actions = () => {
  TriggerExecute(gg_trg_reset);
  TriggerExecute(gg_trg_initMassTest);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_redo: () => void;
}
InitTrig_redo = () => {
  gg_trg_redo = CreateTrigger();
  DisableTrigger(gg_trg_redo);
  registerAnyPlayerChatEvent(gg_trg_redo, "-redo");
  TriggerAddCondition(gg_trg_redo, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_redo, Trig_redo_Actions);
};
