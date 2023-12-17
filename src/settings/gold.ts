import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, W3TS_HOOK } from "w3ts";

const Trig_gold_Actions = () => {
  const parts = GetEventPlayerChatString()!.toLowerCase().split(" ").slice(1)
    .map((v) => S2I(v));

  if (parts.length === 2) {
    udg_sheepGold = parts[0];
    udg_wolfGold = parts[1];
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      `                              |cffffcc00Set |cff00aeefsheep|cffffcc00 gold to ${I2S(udg_sheepGold)}|r.`,
    );
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      5,
      `                              |cffffcc00Set |cffed1c24wolf|cffffcc00 gold to ${I2S(udg_sheepGold)}|r.`,
    );
    return;
  }

  udg_sheepGold = udg_wolfGold = parts[0];
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    `                              |cffffcc00Set gold to ${I2S(udg_sheepGold)}|r.`,
  );
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_gold = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_gold, "-gold ", false);
  TriggerAddCondition(gg_trg_gold, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_gold, Trig_gold_Actions);
});
