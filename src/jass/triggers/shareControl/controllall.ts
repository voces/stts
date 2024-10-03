import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_controllal_Func002C = () => {
  if ((GetSpellAbilityId() === FourCC("A022"))) {
    return true;
  }
  if ((StringLength(GetEventPlayerChatString()!) > 0)) {
    return true;
  }
  return false;
};

const Trig_controllal_Conditions = () => {
  if ((!(udg_AFK[GetConvertedPlayerId(GetTriggerPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if ((!Trig_controllal_Func002C())) {
    return false;
  }
  if (!udg_shareOn) return false;
  if ((!(udg_Teams === TEAMS_LOCK_IE_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_controllal_Func004C = () => {
  if ((!(GetSpellAbilityId() === FourCC("A022")))) {
    return false;
  }
  return true;
};

const Trig_controllal_Func008Func001Func001C = () => {
  if ((!(GetEnumPlayer() !== udg_anactualtempplayer))) {
    return false;
  }
  return true;
};

const Trig_controllal_Func008Func001Func002C = () => {
  if ((!(GetEnumPlayer() !== udg_anactualtempplayer))) {
    return false;
  }
  if ((!(GetEnumPlayer() !== udg_anactualtempplayer))) {
    return false;
  }
  return true;
};

const Trig_controllal_Func008Func001C = () => {
  if (!GetPlayerAlliance(udg_anactualtempplayer, GetEnumPlayer()!, ALLIANCE_SHARED_VISION)) return false;
  if (GetPlayerAlliance(udg_anactualtempplayer, GetEnumPlayer()!, ALLIANCE_SHARED_ADVANCED_CONTROL)) return false;
  return true;
};

const Trig_controllal_Func008A = () => {
  if ((Trig_controllal_Func008Func001C())) {
    if ((Trig_controllal_Func008Func001Func002C())) {
      if (pub[GetPlayerId(GetEnumPlayer()!)]) {
        return;
      }
      DisplayTextToForce(
        udg_atempplayer,
        "|CFFFFCC00Gave control to " +
          (udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
            (GetPlayerName(GetEnumPlayer()!) + "|CFFFFCC00.")),
      );
      SetPlayerAllianceStateBJ(
        udg_anactualtempplayer,
        GetEnumPlayer()!,
        bj_ALLIANCE_ALLIED_ADVUNITS,
      );
    }
  } else {
    if ((Trig_controllal_Func008Func001Func001C())) {
      DisplayTextToForce(
        udg_atempplayer,
        "|CFFFFCC00Took control from " +
          (udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
            (GetPlayerName(GetEnumPlayer()!) + "|CFFFFCC00.")),
      );
      SetPlayerAllianceStateBJ(
        udg_anactualtempplayer,
        GetEnumPlayer()!,
        bj_ALLIANCE_UNALLIED,
      );
      SetPlayerAllianceStateBJ(
        udg_anactualtempplayer,
        GetEnumPlayer()!,
        bj_ALLIANCE_ALLIED_VISION,
      );
    }
  }
};

const Trig_controllal_Actions = () => {
  udg_anactualtempplayer = GetTriggerPlayer()!;
  if ((Trig_controllal_Func004C())) {
    udg_anactualtempplayer = GetOwningPlayer(GetTriggerUnit()!);
  }
  udg_atempplayer = GetForceOfPlayer(udg_anactualtempplayer)!;
  ForForce(GetPlayersAllies(udg_anactualtempplayer)!, Trig_controllal_Func008A);
  DestroyForce(udg_atempplayer);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_controllal: () => void;
}
InitTrig_controllal = () => {
  gg_trg_controllall = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_controllall, "-call");
  TriggerRegisterAnyUnitEventBJ(gg_trg_controllall, EVENT_PLAYER_UNIT_SPELL_CAST);
  TriggerAddCondition(gg_trg_controllall, Condition(Trig_controllal_Conditions));
  TriggerAddAction(gg_trg_controllall, Trig_controllal_Actions);
};
