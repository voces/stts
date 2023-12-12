//===========================================================================
// Trigger: FreakHotkeys
//===========================================================================
const Trig_FreakHotkeys_Func026Func002Func003A = () => {
  UnitRemoveAbilityBJ(FourCC("A01F"), GetEnumUnit()!);
  UnitRemoveAbilityBJ(FourCC("A01H"), GetEnumUnit()!);
  UnitAddAbilityBJ(FourCC("A018"), GetEnumUnit()!);
  UnitAddAbilityBJ(FourCC("A00S"), GetEnumUnit()!);
};

const Trig_FreakHotkeys_Func026Func002C = () => {
  if ((!(udg_gameStarted === true))) {
    return false;
  }
  return true;
};

const Trig_FreakHotkeys_Func026Func004Func003A = () => {
  UnitRemoveAbilityBJ(FourCC("A00S"), GetEnumUnit()!);
  UnitRemoveAbilityBJ(FourCC("A018"), GetEnumUnit()!);
  UnitAddAbilityBJ(FourCC("A01H"), GetEnumUnit()!);
  UnitAddAbilityBJ(FourCC("A01F"), GetEnumUnit()!);
};

const Trig_FreakHotkeys_Func026Func004C = () => {
  if ((!(udg_gameStarted === true))) {
    return false;
  }
  return true;
};

const Trig_FreakHotkeys_Func026C = () => {
  if (
    (!(udg_freakHotkeys[GetConvertedPlayerId(GetTriggerPlayer()!)] === false))
  ) {
    return false;
  }
  return true;
};

const Trig_FreakHotkeys_Actions = () => {
  udg_atempplayer = GetForceOfPlayer(GetTriggerPlayer()!)!;
  if ((Trig_FreakHotkeys_Func026C())) {
    udg_freakHotkeys[GetConvertedPlayerId(GetTriggerPlayer()!)] = true;
    if ((Trig_FreakHotkeys_Func026Func004C())) {
      DisplayTimedTextToForce(
        udg_atempplayer,
        5,
        "                              |CFFFFCC00Freak Keys Enabled|r",
      );
      udg_atempgroup = GetUnitsOfPlayerAndTypeId(
        GetTriggerPlayer()!,
        FourCC("EC03"),
      )!;
      ForGroupBJ(udg_atempgroup, Trig_FreakHotkeys_Func026Func004Func003A);
      DestroyGroup(udg_atempgroup);
    }
  } else {
    udg_freakHotkeys[GetConvertedPlayerId(GetTriggerPlayer()!)] = false;
    if ((Trig_FreakHotkeys_Func026Func002C())) {
      DisplayTimedTextToForce(
        udg_atempplayer,
        5,
        "                              |CFFFFCC00Freak Keys Disabled|r",
      );
      udg_atempgroup = GetUnitsOfPlayerAndTypeId(
        GetTriggerPlayer()!,
        FourCC("EC03"),
      )!;
      ForGroupBJ(udg_atempgroup, Trig_FreakHotkeys_Func026Func002Func003A);
      DestroyGroup(udg_atempgroup);
    }
  }
  DestroyForce(udg_atempplayer);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_FreakHotkeys: () => void;
}
InitTrig_FreakHotkeys = () => {
  gg_trg_FreakHotkeys = CreateTrigger();
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(0)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(1)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(2)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(3)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(4)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(5)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(6)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(7)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(8)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(9)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(10)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(11)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(12)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(13)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(14)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(15)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(16)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(17)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(18)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(19)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(20)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(21)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(22)!,
    "-freak",
    true,
  );
  TriggerRegisterPlayerChatEvent(
    gg_trg_FreakHotkeys,
    Player(23)!,
    "-freak",
    true,
  );
  TriggerAddAction(gg_trg_FreakHotkeys, Trig_FreakHotkeys_Actions);
};
