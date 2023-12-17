import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

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
  if ((!(GetEnumPlayer() !== GetTriggerPlayer()!))) {
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

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_gall: () => void;
}
InitTrig_gall = () => {
  gg_trg_gall = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_gall, "-g all");
  TriggerAddCondition(gg_trg_gall, Condition(Trig_gall_Conditions));
  TriggerAddAction(gg_trg_gall, Trig_gall_Actions);
};
