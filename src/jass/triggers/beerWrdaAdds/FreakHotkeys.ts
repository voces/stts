import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_FreakHotkeys_Func026Func002Func003A = () => {
  UnitRemoveAbilityBJ(FourCC("A01F"), GetEnumUnit()!);
  UnitRemoveAbilityBJ(FourCC("A01H"), GetEnumUnit()!);
  UnitAddAbilityBJ(FourCC("A018"), GetEnumUnit()!);
  UnitAddAbilityBJ(FourCC("A00S"), GetEnumUnit()!);
};

const Trig_FreakHotkeys_Func026Func004Func003A = () => {
  UnitRemoveAbilityBJ(FourCC("A00S"), GetEnumUnit()!);
  UnitRemoveAbilityBJ(FourCC("A018"), GetEnumUnit()!);
  UnitAddAbilityBJ(FourCC("A01H"), GetEnumUnit()!);
  UnitAddAbilityBJ(FourCC("A01F"), GetEnumUnit()!);
};

const Trig_FreakHotkeys_Func026C = () => udg_freakHotkeys[GetConvertedPlayerId(GetTriggerPlayer()!)];

const Trig_FreakHotkeys_Actions = () => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  if ((Trig_FreakHotkeys_Func026C())) {
    udg_freakHotkeys[GetConvertedPlayerId(GetTriggerPlayer()!)] = true;
    if (udg_gameStarted) {
      DisplayTimedTextToForce(udg_atempplayer, 5, "|CFFFFCC00Freak Keys Enabled|r");
      udg_atempgroup = GetUnitsOfPlayerAndTypeId(GetTriggerPlayer()!, shepType)!;
      ForGroupBJ(udg_atempgroup, Trig_FreakHotkeys_Func026Func004Func003A);
      DestroyGroup(udg_atempgroup);
    }
  } else {
    udg_freakHotkeys[GetConvertedPlayerId(GetTriggerPlayer()!)] = false;
    if (udg_gameStarted) {
      DisplayTimedTextToForce(udg_atempplayer, 5, "|CFFFFCC00Freak Keys Disabled|r");
      udg_atempgroup = GetUnitsOfPlayerAndTypeId(GetTriggerPlayer()!, shepType)!;
      ForGroupBJ(udg_atempgroup, Trig_FreakHotkeys_Func026Func002Func003A);
      DestroyGroup(udg_atempgroup);
    }
  }
  DestroyForce(udg_atempplayer);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_FreakHotkeys: () => void;
}
InitTrig_FreakHotkeys = () => {
  gg_trg_FreakHotkeys = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_FreakHotkeys, "-freak");
  TriggerAddAction(gg_trg_FreakHotkeys, Trig_FreakHotkeys_Actions);
};
