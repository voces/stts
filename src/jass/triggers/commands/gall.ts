//===========================================================================
// Trigger: gall
//===========================================================================
const Trig_gall_Conditions = () => {
  if (
    (!(GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) > 0))
  ) {
    return false;
  }
  return true;
};

const Trig_gall_Func002Func002C = () => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Spirit) === false))) {
    return false;
  }
  return true;
};

const Trig_gall_Func002Func003C = () => {
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep) === true)) {
    return true;
  }
  if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Spirit) === true)) {
    return true;
  }
  return false;
};

const Trig_gall_Func002C = () => {
  if ((!Trig_gall_Func002Func003C())) {
    return false;
  }
  return true;
};

const Trig_gall_Func005Func001Func001C = () => {
  if ((!(udg_atempboolean === true))) {
    return false;
  }
  return true;
};

const Trig_gall_Func005Func001C = () => {
  if (
    (!(CountLivingPlayerUnitsOfTypeId(FourCC("e000"), GetEnumPlayer()!) === 0))
  ) {
    return false;
  }
  if ((!(GetEnumPlayer()! !== GetTriggerPlayer()!))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(GetPlayerController(GetEnumPlayer()!) === MAP_CONTROL_USER))) {
    return false;
  }
  return true;
};

const Trig_gall_Func005A = () => {
  if ((Trig_gall_Func005Func001C())) {
    if ((Trig_gall_Func005Func001Func001C())) {
      udg_atempboolean = false;
      transferGold(
        GetTriggerPlayer()!,
        GetEnumPlayer()!,
        udg_atempint2 + udg_atempint3,
        TRANSFER_DISPLAY_INVOLVED,
      );
    } else {
      transferGold(
        GetTriggerPlayer()!,
        GetEnumPlayer()!,
        udg_atempint2,
        TRANSFER_DISPLAY_INVOLVED,
      );
    }
  }
};

const Trig_gall_Actions = () => {
  udg_atempboolean = true;
  if ((Trig_gall_Func002C())) {
    udg_atempint = CountPlayersInForceBJ(GetPlayersAllies(GetTriggerPlayer()!)!) -
      CountUnitsInGroup(GetUnitsOfTypeIdAll(FourCC("e000"))!);
    if ((Trig_gall_Func002Func002C())) {
      udg_atempint = udg_atempint - 1;
    }
  } else {
    udg_atempint = CountPlayersInForceBJ(
      GetPlayersAllies(GetTriggerPlayer()!)!,
    );
    udg_atempint = udg_atempint - 1;
  }
  udg_atempint2 = GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD) /
    udg_atempint;
  udg_atempint3 = ModuloInteger(
    GetPlayerState(GetTriggerPlayer()!, PLAYER_STATE_RESOURCE_GOLD),
    udg_atempint,
  );
  ForForce(GetPlayersAllies(GetTriggerPlayer()!)!, Trig_gall_Func005A);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_gall: () => void;
}
InitTrig_gall = () => {
  gg_trg_gall = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(0)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(1)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(2)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(3)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(4)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(5)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(6)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(7)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(8)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(9)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(10)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(11)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(12)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(13)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(14)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(15)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(16)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(17)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(18)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(19)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(20)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(21)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(22)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(23)!, "-g all", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(0)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(1)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(2)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(3)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(4)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(5)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(6)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(7)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(8)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(9)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(10)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(11)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(12)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(13)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(14)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(15)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(16)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(17)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(18)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(19)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(20)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(21)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(22)!, "-gall", true);
  TriggerRegisterPlayerChatEvent(gg_trg_gall, Player(23)!, "-gall", true);
  TriggerAddCondition(gg_trg_gall, Condition(Trig_gall_Conditions));
  TriggerAddAction(gg_trg_gall, Trig_gall_Actions);
};
