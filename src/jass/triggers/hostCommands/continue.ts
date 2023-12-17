import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_continue_Conditions = () => {
  if ((!(GetTriggerPlayer() === udg_Custom))) {
    return false;
  }
  if ((!(udg_versus > 0))) {
    return false;
  }
  return true;
};

const Trig_continue_Func002Func001Func001Func002C = () => {
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === false))
  ) {
    return false;
  }
  return true;
};

const Trig_continue_Func002Func001Func001C = () => {
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_continue_Func002Func001A = () => {
  if ((Trig_continue_Func002Func001Func001C())) {
    if ((Trig_continue_Func002Func001Func001Func002C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    }
  }
};

const Trig_continue_Func002C = () => {
  if ((!(udg_versus === 1))) {
    return false;
  }
  return true;
};

const Trig_continue_Actions = () => {
  udg_versusOff = false;
  if ((Trig_continue_Func002C())) {
    ForForce(GetPlayersAll()!, Trig_continue_Func002Func001A);
  }
  udg_time = udg_versusTime;
  DisableTrigger(GetTriggeringTrigger()!);
  TriggerExecute(gg_trg_versusCountDown);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_continue: () => void;
}
InitTrig_continue = () => {
  gg_trg_continue = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_continue, "-continue");
  TriggerAddCondition(gg_trg_continue, Condition(Trig_continue_Conditions));
  TriggerAddAction(gg_trg_continue, Trig_continue_Actions);
};
