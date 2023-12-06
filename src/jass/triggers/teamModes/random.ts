//===========================================================================
// Trigger: random
//===========================================================================
const Trig_random_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_random_Func003002001001001 = (): boolean => {
  return GetBooleanAnd(
    udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
    ),
  );
};

const Trig_random_Func004002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_random_Func005002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_random_Func006002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_random_Func033001001 = (): boolean => {
  return GetBooleanAnd(
    GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
      udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
    ),
  );
};

const Trig_random_Func033A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_random_Func034C = (): boolean => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 10)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 10)!) < 25))) {
    return false;
  }
  return true;
};

const Trig_random_Func035Func001A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_random_Func036002 = (): void => {
  if (
    (GetBooleanAnd(
      IsPlayerInForce(GetEnumPlayer()!, udg_Spirit) === false,
      GetBooleanAnd(
        GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
        GetBooleanAnd(
          GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
          udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0,
        ),
      ),
    ))
  ) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
  } else {
    ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
  }
};

const Trig_random_Func037002 = (): void => {
  if (
    (GetBooleanAnd(
      IsPlayerInForce(GetEnumPlayer()!, udg_Sheep) === false,
      GetBooleanAnd(
        GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
        GetBooleanAnd(
          GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
          udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0,
        ),
      ),
    ))
  ) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  } else {
    DoNothing();
  }
};

const Trig_random_Actions = (): void => {
  TriggerSleepAction(0.01);
  udg_lastGameString = GetEventPlayerChatString()!;
  udg_atempint = CountPlayersInForceBJ(
    GetPlayersMatching(Condition(Trig_random_Func003002001001001))!,
  ) / 2;
  ForForce(udg_Sheep, Trig_random_Func004002);
  ForForce(udg_Wolf, Trig_random_Func005002);
  ForForce(udg_Spirit, Trig_random_Func006002);
  udg_Teams = 2;
  ForForce(
    GetPlayersMatching(Condition(Trig_random_Func033001001))!,
    Trig_random_Func033A,
  );
  if ((Trig_random_Func034C())) {
    udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 10)!);
  }
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_atempint;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    ForForce(
      GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
      Trig_random_Func035Func001A,
    );
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  ForForce(GetPlayersAll()!, Trig_random_Func036002);
  ForForce(GetPlayersAll()!, Trig_random_Func037002);
  TriggerExecute(gg_trg_createSheep);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_random: () => void;
}
InitTrig_random = (): void => {
  gg_trg_random = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(0)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(1)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(2)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(3)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(4)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(5)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(6)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(7)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(8)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(9)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(10)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(11)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(12)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(13)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(14)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(15)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(16)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(17)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(18)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(19)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(20)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(21)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(22)!, "-random", false);
  TriggerRegisterPlayerChatEvent(gg_trg_random, Player(23)!, "-random", false);
  TriggerAddCondition(gg_trg_random, Condition(Trig_random_Conditions));
  TriggerAddAction(gg_trg_random, Trig_random_Actions);
};
