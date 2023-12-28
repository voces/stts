//===========================================================================
// Trigger: versusCountDown
//===========================================================================
const Trig_versusCountDown_Func002Func001C = () => {
  if ((!(udg_versus === 1))) {
    return false;
  }
  return true;
};

const Trig_versusCountDown_Func002Func006Func001Func002C = () => {
  if (
    (!(udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] === true))
  ) {
    return false;
  }
  return true;
};

const Trig_versusCountDown_Func002Func006Func001C = () => {
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  return true;
};

const Trig_versusCountDown_Func002Func006A = () => {
  if ((Trig_versusCountDown_Func002Func006Func001C())) {
    if ((Trig_versusCountDown_Func002Func006Func001Func002C())) {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Wolf);
    } else {
      ForceAddPlayerSimple(GetEnumPlayer()!, udg_Sheep);
    }
  }
};

const Trig_versusCountDown_Func002C = () => {
  if ((!(udg_versus === 2))) {
    return false;
  }
  return true;
};

const Trig_versusCountDown_Func004C = () => {
  if ((!(udg_versus > 0))) {
    return false;
  }
  if ((!(udg_versusOff === false))) {
    return false;
  }
  return true;
};

const Trig_versusCountDown_Actions = () => {
  ClearTextMessagesBJ(udg_Sheep);
  if ((Trig_versusCountDown_Func002C())) {
    udg_atempstring = (I2S(R2I(udg_gameTime[1] / 60)) + ":") +
      SubStringBJ(R2S(ModuloReal(udg_gameTime[1], 60))!, 1, 2);
    if (
      (SubStringBJ(
        udg_atempstring,
        StringLength(udg_atempstring),
        StringLength(udg_atempstring),
      ) === ".")
    ) {
      udg_atempstring = SubStringBJ(udg_atempstring, 1, StringLength(udg_atempstring) - 2) +
        ("0" +
          SubStringBJ(
            udg_atempstring,
            StringLength(udg_atempstring) - 1,
            StringLength(udg_atempstring) - 1,
          ));
    } else {
      DoNothing();
    }
    DisplayTextToForce(
      GetPlayersAll()!,
      "                              |cff00aeefTeam 1 lasted " +
        udg_atempstring,
    );
    udg_time = 1200;
    ForForce(GetPlayersAll()!, Trig_versusCountDown_Func002Func006A);
  } else {
    if ((Trig_versusCountDown_Func002Func001C())) {
      udg_time = 1200;
    }
  }
  TriggerExecute(gg_trg_setupLeaderboard);
  if ((Trig_versusCountDown_Func004C())) {
    TriggerExecute(gg_trg_createSheep);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_versusCountDown: () => void;
}
InitTrig_versusCountDown = () => {
  gg_trg_versusCountDown = CreateTrigger();
  TriggerAddAction(gg_trg_versusCountDown, Trig_versusCountDown_Actions);
};
