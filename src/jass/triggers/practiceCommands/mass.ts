import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_mass_Actions = () => {
  const words = GetEventPlayerChatString()!.split(" ");
  if (words[0].toLowerCase() !== "-mass") return;
  let timeString = words[1] ?? "";
  if (timeString === "") timeString = "18";
  const parts = timeString.split(":");
  let time = 0;
  let mult = 1;
  for (let i = parts.length - 1; i >= 0; i--) {
    time += parseFloat(parts[i] === "" ? "0" : parts[i]) * mult;
    mult *= 60;
  }
  if (time <= 0 || time > 7200) return;

  udg_massTime = time;
  udg_massTimeString = simpleformatTime(udg_massTime);

  TriggerExecute(gg_trg_initMassTest);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_mass: () => void;
}
InitTrig_mass = () => {
  gg_trg_mass = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_mass, "-mass", false);
  TriggerAddCondition(gg_trg_mass, Condition(() => GetTriggerPlayer() === udg_Custom));
  TriggerAddAction(gg_trg_mass, Trig_mass_Actions);
};
