import { terrain } from "settings/terrain";
import { addScriptHook, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_Invis_Rune = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Invis_Rune, udg_RuneTimer[1]);
  TriggerAddAction(
    gg_trg_Invis_Rune,
    () => CreateItem(FourCC("I00O"), GetRectCenterX(terrain.runes.invis), GetRectCenterY(terrain.runes.invis)),
  );

  gg_trg_Speed_Rune = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Speed_Rune, udg_RuneTimer[2]);
  TriggerAddAction(
    gg_trg_Speed_Rune,
    () => CreateItem(FourCC("I00P"), GetRectCenterX(terrain.runes.speed), GetRectCenterY(terrain.runes.speed)),
  );

  gg_trg_Mana_Rune = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Mana_Rune, udg_RuneTimer[3]);
  TriggerAddAction(
    gg_trg_Mana_Rune,
    () => CreateItem(FourCC("I00J"), GetRectCenterX(terrain.runes.mana), GetRectCenterY(terrain.runes.mana)),
  );

  gg_trg_Omniscience_Rune = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_Omniscience_Rune, udg_RuneTimer[4]);
  TriggerAddAction(
    gg_trg_Omniscience_Rune,
    () =>
      CreateItem(FourCC("I00K"), GetRectCenterX(terrain.runes.omniscience), GetRectCenterY(terrain.runes.omniscience)),
  );
});
