import { enforceTeamResourceMultiboard } from "userSettings/teamResources";
import { removeEnumUnit } from "util/removeEnumUnit";

const Trig_playerLeft_Func004C = () => {
  if ((!(udg_practiceOn === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func005Func001C = (self: player) => {
  if ((!(udg_AFK[GetConvertedPlayerId(self)] === AFK_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func005Func002C = (self: player) => {
  if ((!(IsPlayerInForce(self, udg_Spirit) === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func005C = () => {
  if ((!(udg_sheepLastGame[udg_atempint] === false))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func008Func001Func001A = () => {
  AdjustPlayerStateBJ(
    Math.floor(
      GetPlayerState(ConvertedPlayer(udg_atempint)!, PLAYER_STATE_RESOURCE_GOLD) /
        (CountPlayersInForceBJ(udg_Wolf) - 1),
    ),
    GetEnumPlayer()!,
    PLAYER_STATE_RESOURCE_GOLD,
  );
};

const Trig_playerLeft_Func008Func001Func002001001 = (self: player) => {
  return GetBooleanOr(
    IsPlayerInForce(self, udg_Sheep) === true,
    IsPlayerInForce(self, udg_Spirit) === true,
  );
};

const Trig_playerLeft_Func008Func001Func002A = () => {
  AdjustPlayerStateBJ(
    Math.floor(
      GetPlayerState(ConvertedPlayer(udg_atempint)!, PLAYER_STATE_RESOURCE_GOLD) /
        ((CountPlayersInForceBJ(udg_Sheep) + CountPlayersInForceBJ(udg_Spirit)) -
          1),
    ),
    GetEnumPlayer()!,
    PLAYER_STATE_RESOURCE_GOLD,
  );
};

const Trig_playerLeft_Func008Func001C = () => {
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

const Trig_playerLeft_Func008C = () => {
  if ((!(udg_gameStarted === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func009Func001002002 = () => {
  return GetBooleanAnd(
    GetUnitTypeId(GetFilterUnit()!) === FourCC("EC03"),
    IsUnitIllusionBJ(GetFilterUnit()!) === false,
  );
};

const Trig_playerLeft_Func009Func002A = () => {
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 6;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    UnitRemoveItemFromSlotSwapped(GetForLoopIndexA(), GetEnumUnit()!);
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

const Trig_playerLeft_Func009C = (self: player) => {
  if ((!(IsPlayerInForce(self, udg_Wolf) === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func001Func001Func001A = () => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Draft);
};

const Trig_playerLeft_Func010Func001Func001Func003Func001C = () => {
  if ((!(udg_sheepLastGame[udg_atempint] === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func001Func001Func003C = (self: player) => {
  if ((!(IsPlayerInForce(self, udg_Draft) === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func001Func001Func004C = () => {
  if ((GetTriggerPlayer() === udg_captains[1])) {
    return true;
  }
  if ((GetTriggerPlayer() === udg_captains[3])) {
    return true;
  }
  return false;
};

const Trig_playerLeft_Func010Func001Func001C = () => {
  if ((!Trig_playerLeft_Func010Func001Func001Func004C())) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func001Func002C = () => {
  if ((udg_AFK[udg_atempint] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[udg_atempint] === AFK_PLAYING_PICK)) {
    return true;
  }
  if ((udg_AFK[udg_atempint] === AFK_AFK_DURING_ROUND)) {
    return true;
  }
  return false;
};

const Trig_playerLeft_Func010Func001C = () => {
  if ((!Trig_playerLeft_Func010Func001Func002C())) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func002Func001Func001Func001C = () => {
  if ((!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010Func002Func001Func001Func003C = () => {
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING)) {
    return true;
  }
  if ((udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING_PICK)) {
    return true;
  }
  if (
    (udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_AFK_DURING_ROUND)
  ) {
    return true;
  }
  return false;
};

const Trig_playerLeft_Func010Func002Func001Func001C = () => {
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

const Trig_playerLeft_Func010Func002Func001A = () => {
  if ((Trig_playerLeft_Func010Func002Func001Func001C())) {
    if ((Trig_playerLeft_Func010Func002Func001Func001Func001C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    }
  }
};

const Trig_playerLeft_Func010Func002C = () => {
  if ((!(CountPlayersInForceBJ(udg_Draft) === 0))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func010C = () => {
  if ((!(udg_Teams === TEAMS_CAPTAINS))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func011C = () => {
  if ((!(GetTriggerPlayer() === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_playerLeft_Func015A = (self: player) => {
  LeaderboardRemovePlayerItemBJ(
    self,
    PlayerGetLeaderboardBJ(GetEnumPlayer()!)!,
  );
};

const Trig_playerLeft_Actions = () => {
  const self = GetTriggerPlayer()!;
  const p = udg_Custom;
  pub[GetPlayerId(self)] = false;
  udg_atempint = GetConvertedPlayerId(self);
  if ((Trig_playerLeft_Func004C())) {
    RemoveUnit(udg_unit2[udg_atempint]);
  }
  if ((Trig_playerLeft_Func005C())) {
    if ((Trig_playerLeft_Func005Func001C(self))) {
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
    if ((Trig_playerLeft_Func005Func002C(self))) {
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
          Condition(() => Trig_playerLeft_Func008Func001Func002001001(self)),
        )!,
        Trig_playerLeft_Func008Func001Func002A,
      );
    } else {
      ForForce(udg_Wolf, Trig_playerLeft_Func008Func001Func001A);
    }
    someoneLeft = true;
  }
  if ((Trig_playerLeft_Func009C(self))) {
    udg_atempgroup = GetUnitsOfPlayerMatching(
      self,
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
        if ((Trig_playerLeft_Func010Func001Func001Func003C(self))) {
          ForceRemovePlayerSimple(self, udg_Draft);
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
      udg_Teams = TEAMS_LOCK_IE_PLAYING;
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
    udg_atempgroup = GetUnitsOfPlayerAll(self)!;
    ForGroupBJ(udg_atempgroup, removeEnumUnit);
    udg_Custom = p;
    transferOwnershipOfHostFarm();
  } else {
    udg_atempgroup = GetUnitsOfPlayerAll(self)!;
    ForGroupBJ(udg_atempgroup, removeEnumUnit);
  }
  DestroyGroup(udg_atempgroup);
  TriggerSleepAction(0.01);
  LeaderboardRemovePlayerItemBJ(
    self,
    GetLastCreatedLeaderboard()!,
  );
  ForForce(GetPlayersAll()!, () => Trig_playerLeft_Func015A(self));
  ForceRemovePlayerSimple(self, udg_Sheep);
  ForceRemovePlayerSimple(self, udg_Spirit);
  ForceRemovePlayerSimple(self, udg_Wolf);
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
  udg_AFK[GetConvertedPlayerId(self)] = AFK_PLAYING;
  TriggerExecute(gg_trg_createLists);
  TriggerExecute(gg_trg_setupLeaderboard);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_playerLeft: () => void;
}
InitTrig_playerLeft = () => {
  gg_trg_playerLeft = CreateTrigger();
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    TriggerRegisterPlayerEventLeave(gg_trg_playerLeft, Player(i)!);
    TriggerRegisterPlayerEventDefeat(gg_trg_playerLeft, Player(i)!);
  }
  TriggerAddAction(gg_trg_playerLeft, Trig_playerLeft_Actions);
};
