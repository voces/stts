//===========================================================================
// Trigger: playerLeft
//===========================================================================
const Trig_playerLeft_Func004C = (): boolean => {
  if ((!(udg_practiceOn === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func005Func001C = (): boolean => {
  if ((!(udg_AFK[GetConvertedPlayerId(GetTriggerPlayer()!)] === 0))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func005Func002C = (): boolean => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Spirit) === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func005C = (): boolean => {
  if ((!(udg_sheepLastGame[udg_atempint] === false))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func008Func001Func001A = (): void => {
  AdjustPlayerStateBJ(
    GetPlayerState(ConvertedPlayer(udg_atempint)!, PLAYER_STATE_RESOURCE_GOLD) /
      (CountPlayersInForceBJ(udg_Wolf) - 1),
    GetEnumPlayer()!,
    PLAYER_STATE_RESOURCE_GOLD,
  );
};

const Trig_playerLeft_Func008Func001Func002001001 = (): boolean => {
  return GetBooleanOr(
    IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep) === true,
    IsPlayerInForce(GetTriggerPlayer()!, udg_Spirit) === true,
  );
};

const Trig_playerLeft_Func008Func001Func002A = (): void => {
  AdjustPlayerStateBJ(
    GetPlayerState(ConvertedPlayer(udg_atempint)!, PLAYER_STATE_RESOURCE_GOLD) /
      ((CountPlayersInForceBJ(udg_Sheep) + CountPlayersInForceBJ(udg_Spirit)) -
        1),
    GetEnumPlayer()!,
    PLAYER_STATE_RESOURCE_GOLD,
  );
};

const Trig_playerLeft_Func008Func001C = (): boolean => {
  if (
    (!GetBooleanOr(
      IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Sheep) === true,
      IsPlayerInForce(ConvertedPlayer(udg_atempint)!, udg_Spirit) === true,
    ))
  ) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func008C = (): boolean => {
  if ((!(udg_gameStarted === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func009Func001002002 = (): boolean => {
  return GetBooleanAnd(
    GetUnitTypeId(GetFilterUnit()!) === FourCC("EC03"),
    IsUnitIllusionBJ(GetFilterUnit()!) === false,
  );
};

const Trig_playerLeft_Func009Func002A = (): void => {
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 6;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    UnitRemoveItemFromSlotSwapped(GetForLoopIndexA(), GetEnumUnit()!);
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

const Trig_playerLeft_Func009C = (): boolean => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf) === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func001Func001Func001A = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft);
};

const Trig_playerLeft_Func010Func001Func001Func003Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[udg_atempint] === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func001Func001Func003C = (): boolean => {
  if ((!(IsPlayerInForce(GetTriggerPlayer()!, udg_Draft) === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func001Func001Func004C = (): boolean => {
  if ((GetTriggerPlayer()! === udg_captains[1])) {
    return true;
  }
  if ((GetTriggerPlayer()! === udg_captains[3])) {
    return true;
  }
  return false;
};

const Trig_playerLeft_Func010Func001Func001C = (): boolean => {
  if ((!Trig_playerLeft_Func010Func001Func001Func004C())) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func001Func002C = (): boolean => {
  if ((udg_AFK[udg_atempint] === 0)) {
    return true;
  }
  if ((udg_AFK[udg_atempint] === 1)) {
    return true;
  }
  if ((udg_AFK[udg_atempint] === 4)) {
    return true;
  }
  return false;
};

const Trig_playerLeft_Func010Func001C = (): boolean => {
  if ((!Trig_playerLeft_Func010Func001Func002C())) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func002Func001Func001Func001C = (): boolean => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func002Func001Func001Func003C = (): boolean => {
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 0)) {
    return true;
  }
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 1)) {
    return true;
  }
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === 4)) {
    return true;
  }
  return false;
};

const Trig_playerLeft_Func010Func002Func001Func001C = (): boolean => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!Trig_playerLeft_Func010Func002Func001Func001Func003C())) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func002Func001A = (): void => {
  if ((Trig_playerLeft_Func010Func002Func001Func001C())) {
    if ((Trig_playerLeft_Func010Func002Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_playerLeft_Func010Func002C = (): boolean => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 0))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010C = (): boolean => {
  if ((!(udg_Teams === 4))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func011Func002002 = (): void => {
  RemoveUnit(GetEnumUnit()!);
};

const Trig_playerLeft_Func011Func006002 = (): void => {
  RemoveUnit(GetEnumUnit()!);
};

const Trig_playerLeft_Func011C = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func015A = (): void => {
  LeaderboardRemovePlayerItemBJ(
    GetTriggerPlayer()!,
    PlayerGetLeaderboardBJ(GetEnumPlayer()!)!,
  );
};

const Trig_playerLeft_Actions = (): void => {
  const p = udg_Custom;
  pub[GetPlayerId(GetTriggerPlayer()!)] = false;
  udg_atempint = GetConvertedPlayerId(GetTriggerPlayer()!);
  if ((Trig_playerLeft_Func004C())) {
    RemoveUnit(udg_unit2[udg_atempint]);
  }
  if ((Trig_playerLeft_Func005C())) {
    if ((Trig_playerLeft_Func005Func001C())) {
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        ("                              " + udg_colorString[udg_atempint]) +
          (GetPlayerName(ConvertedPlayer(udg_atempint)!) +
            " |rhas left the game. (Wolf)"),
      );
    } else {
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        ("                              " + udg_colorString[udg_atempint]) +
          (GetPlayerName(ConvertedPlayer(udg_atempint)!) +
            " |rhas left the game. (Spectator)"),
      );
    }
  } else {
    if ((Trig_playerLeft_Func005Func002C())) {
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        ("                              " + udg_colorString[udg_atempint]) +
          (GetPlayerName(ConvertedPlayer(udg_atempint)!) +
            " |rhas left the game. (Spirit)"),
      );
    } else {
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        ("                              " + udg_colorString[udg_atempint]) +
          (GetPlayerName(ConvertedPlayer(udg_atempint)!) +
            " |rhas left the game. (Sheep)"),
      );
    }
  }
  if ((udg_transfer === udg_atempint)) {
    udg_transfer = 0;
  } else {
    DoNothing();
  }
  udg_switch[udg_atempint] = 0;
  if ((Trig_playerLeft_Func008C())) {
    if ((Trig_playerLeft_Func008Func001C())) {
      ForForce(
        GetPlayersMatching(
          Condition(Trig_playerLeft_Func008Func001Func002001001),
        )!,
        Trig_playerLeft_Func008Func001Func002A,
      );
    } else {
      ForForce(udg_Wolf, Trig_playerLeft_Func008Func001Func001A);
    }
    someoneLeft = true;
  }
  if ((Trig_playerLeft_Func009C())) {
    udg_atempgroup = GetUnitsOfPlayerMatching(
      GetTriggerPlayer()!,
      Condition(Trig_playerLeft_Func009Func001002002),
    )!;
    ForGroupBJ(udg_atempgroup, Trig_playerLeft_Func009Func002A);
    DestroyGroup(udg_atempgroup);
  }
  if ((Trig_playerLeft_Func010C())) {
    if ((Trig_playerLeft_Func010Func001C())) {
      if ((Trig_playerLeft_Func010Func001Func001C())) {
        ForForce(udg_Draft, Trig_playerLeft_Func010Func001Func001Func001A);
        TriggerExecute(gg_trg_cancel);
      } else {
        if ((Trig_playerLeft_Func010Func001Func001Func003C())) {
          ForceRemovePlayerSimple(GetTriggerPlayer()!, udg_Draft);
          MultiboardSetItemValueBJ(
            udg_captainsMultiboard,
            2,
            udg_multiboardRow[udg_atempint],
            "",
          );
        } else {
          if ((Trig_playerLeft_Func010Func001Func001Func003Func001C())) {
            MultiboardSetItemValueBJ(
              udg_captainsMultiboard,
              1,
              udg_multiboardRow[udg_atempint],
              "",
            );
          } else {
            MultiboardSetItemValueBJ(
              udg_captainsMultiboard,
              3,
              udg_multiboardRow[udg_atempint],
              "",
            );
          }
        }
      }
    }
    if ((Trig_playerLeft_Func010Func002C())) {
      ForForce(GetPlayersAll()!, Trig_playerLeft_Func010Func002Func001A);
      udg_Teams = 2;
      MultiboardDisplayBJ(false, udg_captainsMultiboard);
      enforceTeamResourceMultiboard();
      MultiboardMinimizeBJ(true, udg_captainsMultiboard);
      DestroyMultiboardBJ(udg_captainsMultiboard);
      TriggerSleepAction(0.01);
      DisableTrigger(gg_trg_giveUpCaptain);
      DisableTrigger(gg_trg_draftPlayer);
      TriggerExecute(gg_trg_createSheep);
    }
  }
  if ((Trig_playerLeft_Func011C())) {
    udg_Custom = Player(PLAYER_NEUTRAL_PASSIVE)!;
    transferOwnershipOfHostFarm();
    udg_atempgroup = GetUnitsOfPlayerAll(GetTriggerPlayer()!)!;
    ForGroupBJ(udg_atempgroup, Trig_playerLeft_Func011Func006002);
    udg_Custom = p;
    transferOwnershipOfHostFarm();
  } else {
    udg_atempgroup = GetUnitsOfPlayerAll(GetTriggerPlayer()!)!;
    ForGroupBJ(udg_atempgroup, Trig_playerLeft_Func011Func002002);
  }
  DestroyGroup(udg_atempgroup);
  TriggerSleepAction(0.01);
  LeaderboardRemovePlayerItemBJ(
    GetTriggerPlayer()!,
    GetLastCreatedLeaderboard()!,
  );
  ForForce(GetPlayersAll()!, Trig_playerLeft_Func015A);
  ForceRemovePlayerSimple(GetTriggerPlayer()!, udg_Sheep);
  ForceRemovePlayerSimple(GetTriggerPlayer()!, udg_Spirit);
  ForceRemovePlayerSimple(GetTriggerPlayer()!, udg_Wolf);
  if ((CountPlayersInForceBJ(udg_Sheep) === 0)) {
    TriggerExecute(gg_trg_wolvesWin);
  } else {
    DoNothing();
  }
  if ((CountPlayersInForceBJ(udg_Wolf) === 0)) {
    TriggerExecute(gg_trg_sheepWin);
  } else {
    DoNothing();
  }
  udg_AFK[GetConvertedPlayerId(GetTriggerPlayer()!)] = 0;
  TriggerExecute(gg_trg_createLists);
  TriggerExecute(gg_trg_setupLeaderboard);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_playerLeft: () => void;
}
InitTrig_playerLeft = (): void => {
  gg_trg_playerLeft = CreateTrigger();
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(0)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(1)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(2)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(3)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(4)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(5)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(6)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(7)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(8)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(9)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(10)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(11)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(12)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(13)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(14)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(15)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(16)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(17)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(18)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(19)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(20)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(21)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(22)!);
  TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(23)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(0)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(1)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(2)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(3)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(4)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(5)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(6)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(7)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(8)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(9)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(10)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(11)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(12)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(13)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(14)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(15)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(16)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(17)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(18)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(19)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(20)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(21)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(22)!);
  TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(23)!);
  TriggerAddAction(gg_trg_playerLeft, Trig_playerLeft_Actions);
};
