import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_SexyOff_Conditions = () => {
  if ((!(GetTriggerPlayer() === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_SexyOff_Actions = () => {
  udg_SheepColorR[1] = 100;
  udg_SheepColorG[1] = 0;
  udg_SheepColorB[1] = 0;
  udg_SheepColorR[2] = 0;
  udg_SheepColorG[2] = 0;
  udg_SheepColorB[2] = 100;
  udg_SheepColorR[3] = 0;
  udg_SheepColorG[3] = 100;
  udg_SheepColorB[3] = 100;
  udg_SheepColorR[4] = 32.16;
  udg_SheepColorG[4] = 0;
  udg_SheepColorB[4] = 47.84;
  udg_SheepColorR[5] = 100;
  udg_SheepColorG[5] = 100;
  udg_SheepColorB[5] = 0;
  udg_SheepColorR[6] = 100;
  udg_SheepColorG[6] = 40;
  udg_SheepColorB[6] = 0;
  udg_SheepColorR[7] = 0;
  udg_SheepColorG[7] = 100;
  udg_SheepColorB[7] = 0;
  udg_SheepColorR[8] = 91;
  udg_SheepColorG[8] = 35;
  udg_SheepColorB[8] = 68;
  udg_SheepColorR[9] = 58.04;
  udg_SheepColorG[9] = 59;
  udg_SheepColorB[9] = 58;
  udg_SheepColorR[10] = 48.24;
  udg_SheepColorG[10] = 75;
  udg_SheepColorB[10] = 77;
  udg_SheepColorR[11] = 3.14;
  udg_SheepColorG[11] = 39.04;
  udg_SheepColorB[11] = 26;
  udg_SheepColorR[12] = 29.02;
  udg_SheepColorG[12] = 16;
  udg_SheepColorB[12] = 0;
  udg_SheepColorR[13] = 50;
  udg_SheepColorG[13] = 0;
  udg_SheepColorB[13] = 0;
  udg_SheepColorR[14] = 0;
  udg_SheepColorG[14] = 0;
  udg_SheepColorB[14] = 50;
  udg_SheepColorR[15] = 25;
  udg_SheepColorG[15] = 87.84;
  udg_SheepColorB[15] = 81.57;
  udg_SheepColorR[16] = 93.33;
  udg_SheepColorG[16] = 50.98;
  udg_SheepColorB[16] = 93.33;
  udg_SheepColorR[17] = 100;
  udg_SheepColorG[17] = 92.15;
  udg_SheepColorB[17] = 80.39;
  udg_SheepColorR[18] = 100;
  udg_SheepColorG[18] = 85.49;
  udg_SheepColorB[18] = 72.54;
  udg_SheepColorR[19] = 96.07;
  udg_SheepColorG[19] = 100;
  udg_SheepColorB[19] = 98.04;
  udg_SheepColorR[20] = 90.02;
  udg_SheepColorG[20] = 90.02;
  udg_SheepColorB[20] = 98.04;
  udg_SheepColorR[21] = 2.35;
  udg_SheepColorG[21] = 2.35;
  udg_SheepColorB[21] = 2.75;
  udg_SheepColorR[22] = 100;
  udg_SheepColorG[22] = 98.04;
  udg_SheepColorB[22] = 98.04;
  udg_SheepColorR[23] = 31.37;
  udg_SheepColorG[23] = 78.43;
  udg_SheepColorB[23] = 47.06;
  udg_SheepColorR[24] = 47.84;
  udg_SheepColorG[24] = 26.67;
  udg_SheepColorB[24] = 20.04;
  DisableTrigger(gg_trg_Sheep_Color);
  displayTimedTextToAll("|CFFFFCC00Sexy Disabled|r", 5);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_SexyOff: () => void;
}
InitTrig_SexyOff = () => {
  gg_trg_SexyOff = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_SexyOff, "-no sexy");
  TriggerAddCondition(gg_trg_SexyOff, Condition(Trig_SexyOff_Conditions));
  TriggerAddAction(gg_trg_SexyOff, Trig_SexyOff_Actions);
};
