//===========================================================================
// Trigger: versusCountDown
//===========================================================================

const addToTeam = () => {
  const playerId = GetConvertedPlayerId(GetEnumPlayer()!);

  if (udg_AFK[playerId] === AFK_PLAYING && GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING) {
    ForceAddPlayerSimple(GetEnumPlayer()!, udg_sheepLastGame[playerId] ? udg_Wolf : udg_Sheep);
  }
};

const Trig_versusCountDown_Actions = () => {
  ClearTextMessagesBJ(udg_Sheep);

  if (udg_versus === 2) {
    udg_atempstring = I2S(R2I(udg_gameTime[1] / 60)) + ":" +
      SubStringBJ((ModuloReal(udg_gameTime[1], 60)).toFixed(3)!, 1, 2);
    if (SubStringBJ(udg_atempstring, StringLength(udg_atempstring), StringLength(udg_atempstring)) === ".") {
      udg_atempstring = SubStringBJ(udg_atempstring, 1, StringLength(udg_atempstring) - 2) + "0" +
        SubStringBJ(udg_atempstring, StringLength(udg_atempstring) - 1, StringLength(udg_atempstring) - 1);
    }
    DisplayTextToForce(GetPlayersAll()!, "|cff00aeefTeam 1 lasted " + udg_atempstring);
    udg_time = 900;
    ForForce(GetPlayersAll()!, addToTeam);
  } else if (udg_versus === 1) udg_time = 900;

  TriggerExecute(gg_trg_setupLeaderboard);

  if (udg_versus > 0 && !udg_versusOff) TriggerExecute(gg_trg_createSheep);
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
