import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

export const income = {
  sheep: 1,
  wolves: 1,
  savings: 1,
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-income", false);
  TriggerAddCondition(t, Condition(() => GetTriggerPlayer() === udg_Custom && !udg_gameStarted));
  TriggerAddAction(t, () => {
    const s = GetEventPlayerChatString()!.toLowerCase();

    if (s === "-income") {
      income.sheep = income.wolves = income.savings = 1;
      displayTimedTextToAll("                              |cffffcc00Income set to 1x.|r");
      return;
    }

    let [sheep, wolves, savings] = s.split(" ").slice(1).map((v) => parseFloat(v));
    if (wolves === undefined) wolves = sheep;
    if (savings === undefined) savings = sheep;

    income.sheep = sheep;
    income.wolves = wolves;
    income.savings = savings;

    if (income.sheep === income.wolves && income.sheep === income.savings) {
      displayTimedTextToAll(`                              |cffffcc00Income set to ${income.sheep}x.|r`);
      return;
    }

    displayTimedTextToAll(`                              |cffffcc00Sheep income set to ${income.sheep}x.|r`);
    if (income.sheep !== income.savings) {
      displayTimedTextToAll(`                              |cffffcc00Money Farm income set to ${income.savings}x.|r`);
    }
    displayTimedTextToAll(`                              |cffffcc00Wolf set to ${income.wolves}x.|r`);
  });
});
