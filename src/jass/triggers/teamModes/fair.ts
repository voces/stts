//===========================================================================
// Trigger: fair
//===========================================================================
const Trig_fair_Func002Func002C = (): boolean => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!) > 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!) < 25))) {
    return false;
  }
  return true;
};

const Trig_fair_Func002C = (): boolean => {
  if ((GetEventPlayerChatString()! === "-fair")) {
    return true;
  }
  if ((Trig_fair_Func002Func002C())) {
    return true;
  }
  return false;
};

const Trig_fair_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  if ((!Trig_fair_Func002C())) {
    return false;
  }
  return true;
};

const Trig_fair_Func001Func003Func002001001001001 = (): boolean => {
  return GetBooleanAnd(
    IsPlayerInForce(GetFilterPlayer()!, udg_Sheep) === false,
    GetBooleanAnd(
      GetPlayerSlotState(GetFilterPlayer()!) === PLAYER_SLOT_STATE_PLAYING,
      GetBooleanAnd(
        GetPlayerSlotState(GetFilterPlayer()!) !== PLAYER_SLOT_STATE_LEFT,
        udg_AFK[GetConvertedPlayerId(GetFilterPlayer()!)] === 0,
      ),
    ),
  );
};

const Trig_fair_Func001Func003Func002A = (): void => {
  udg_atempint2 = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)];
};

const Trig_fair_Func001Func003Func003001001 = (): boolean => {
  return (IsPlayerInForce(GetFilterPlayer()!, udg_Sheep) === false);
};

const Trig_fair_Func001Func003Func003Func001C = (): boolean => {
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(GetConvertedPlayerId(GetEnumPlayer()!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(GetConvertedPlayerId(GetEnumPlayer()!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  if (
    (!(udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] < udg_atempint2))
  ) {
    return false;
  }
  return true;
};

const Trig_fair_Func001Func003Func003A = (): void => {
  if ((Trig_fair_Func001Func003Func003Func001C())) {
    udg_atempint2 = udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)];
  }
};

const Trig_fair_Func001Func003Func004001001 = (): boolean => {
  return (IsPlayerInForce(GetFilterPlayer()!, udg_Sheep) === false);
};

const Trig_fair_Func001Func003Func004Func001C = (): boolean => {
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(GetConvertedPlayerId(GetEnumPlayer()!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(GetConvertedPlayerId(GetEnumPlayer()!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  if (
    (!(udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] ===
      udg_atempint2))
  ) {
    return false;
  }
  if ((udg_round2 === true)) {
    if ((udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true)) {
      return false;
    }
  }
  return true;
};

const Trig_fair_sheepLastCount = (): boolean => {
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(GetConvertedPlayerId(GetEnumPlayer()!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(GetConvertedPlayerId(GetEnumPlayer()!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  if (
    (!(udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)] ===
      udg_atempint2))
  ) {
    return false;
  }
  return true;
};

const Trig_fair_addSheepLastCount = (): void => {
  if ((Trig_fair_sheepLastCount())) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
  }
};

const Trig_fair_Func001Func003Func004A = (): void => {
  if ((Trig_fair_Func001Func003Func004Func001C())) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Spirit);
  }
};

const Trig_fair_Func001Func003Func005Func002A = (): void => {
  ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_fair_Func001Func004A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_fair_Func001Func005001001 = (): boolean => {
  return (IsPlayerInForce(GetFilterPlayer()!, udg_Sheep) === false);
};

const Trig_fair_Func001Func005Func001C = (): boolean => {
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(GetConvertedPlayerId(GetEnumPlayer()!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(GetConvertedPlayerId(GetEnumPlayer()!))!,
    ) !== PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0))) {
    return false;
  }
  return true;
};

const Trig_fair_Func001Func005A = (): void => {
  if ((Trig_fair_Func001Func005Func001C())) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
  }
};

const Trig_fair_Actions = (): void => {
  ForceClear(udg_Sheep);
  ForceClear(udg_Wolf);
  ForceClear(udg_Spirit);
  udg_lastGameString = GetEventPlayerChatString()!;
  udg_atempstring = StringCase(GetEventPlayerChatString()!, false)!;
  if (udg_atempstring === "-fair" && udg_round2 === false) {
    TriggerExecute(gg_trg_random);
  } else {
    if (udg_atempstring === "-fair") {
      udg_atempint = udg_playerCount / 2;
    } else {
      udg_atempint = S2I(SubStringBJ(GetEventPlayerChatString()!, 7, 8)!);
    }
    while (true) {
      if ((CountPlayersInForceBJ(udg_Sheep) >= udg_atempint)) break;
      ForForce(
        GetForceOfPlayer(
          ForcePickRandomPlayer(
            GetPlayersMatching(
              Condition(Trig_fair_Func001Func003Func002001001001001),
            )!,
          )!,
        )!,
        Trig_fair_Func001Func003Func002A,
      );
      ForForce(
        GetPlayersMatching(Condition(Trig_fair_Func001Func003Func003001001))!,
        Trig_fair_Func001Func003Func003A,
      );
      if ((udg_round2 === true)) {
        if ((CountPlayersInForceBJ(udg_Sheep) < udg_atempint)) {
          ForForce(
            GetPlayersMatching(
              Condition(Trig_fair_Func001Func003Func004001001),
            )!,
            Trig_fair_addSheepLastCount,
          );
        }
      } else {
        ForForce(
          GetPlayersMatching(Condition(Trig_fair_Func001Func003Func004001001))!,
          Trig_fair_Func001Func003Func004A,
        );
      }
      while (true) {
        if (
          ((CountPlayersInForceBJ(udg_Sheep) >= udg_atempint) ||
            (CountPlayersInForceBJ(udg_Spirit) === 0))
        ) break;
        ForForce(
          GetForceOfPlayer(ForcePickRandomPlayer(udg_Spirit)!)!,
          Trig_fair_Func001Func003Func005Func002A,
        );
      }
    }
    ForForce(udg_Spirit, Trig_fair_Func001Func004A);
    ForForce(
      GetPlayersMatching(Condition(Trig_fair_Func001Func005001001))!,
      Trig_fair_Func001Func005A,
    );
    udg_Teams = TEAMS_LOCK;
    TriggerExecute(gg_trg_createSheep);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_fair: () => void;
}
InitTrig_fair = (): void => {
  gg_trg_fair = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(0)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(1)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(2)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(3)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(4)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(5)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(6)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(7)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(8)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(9)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(10)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(11)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(12)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(13)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(14)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(15)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(16)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(17)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(18)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(19)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(20)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(21)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(22)!, "-fair", false);
  TriggerRegisterPlayerChatEvent(gg_trg_fair, Player(23)!, "-fair", false);
  TriggerAddCondition(gg_trg_fair, Condition(Trig_fair_Conditions));
  TriggerAddAction(gg_trg_fair, Trig_fair_Actions);
};
