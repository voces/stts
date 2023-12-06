//===========================================================================
// Trigger: UpdateStats
//===========================================================================
const Trig_UpdateStats_forEnumPlayer = (): void => {
  if (GetPlayerController(GetEnumPlayer()!) !== MAP_CONTROL_USER) {
    return;
  }

  MMD_FlagPlayer(GetEnumPlayer()!, MMD_FLAG_DRAWER);
  MMD__update_value(
    "Farms Built",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(udg_totalFarmsBuilt[GetConvertedPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  udg_averageFarmCountBeforeWolves[GetConvertedPlayerId(GetEnumPlayer()!)] =
    I2R(
      udg_totalFarmCountBeforeWolves[GetConvertedPlayerId(GetEnumPlayer()!)],
    ) / I2R(udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)]);
  MMD__update_value(
    "Average Farm Count Before Wolves",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    R2S(
      (udg_averageFarmCountBeforeWolves[
        GetConvertedPlayerId(GetEnumPlayer()!)
      ]) * 1,
    )!,
    MMD_TYPE_REAL,
  );
  MMD__update_value(
    "Saves",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(udg_totalSaves[GetConvertedPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "Kills",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(udg_totalKills[GetConvertedPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "Wins",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(udg_wins[GetConvertedPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "Versus Wins",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(udg_vwins[GetConvertedPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "Last Sheep Standing",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(udg_lssCounter[GetConvertedPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "First Blood Deaths",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(udg_firstbloodDeathCounter[GetConvertedPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "First Blood Kills",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(udg_firstbloodKillCounter[GetConvertedPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "Wolf Gold Given",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(wolfGoldGiven[GetPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "Sheep Gold Given",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(sheepGoldGiven[GetPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "Spirit Gold Given",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    I2S(spiritGoldGiven[GetPlayerId(GetEnumPlayer()!)])!,
    MMD_TYPE_INT,
  );
  MMD__update_value(
    "Sheep Times",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    R2S(
      (TimerGetElapsed(
        udg_sheepTimer[GetConvertedPlayerId(GetEnumPlayer()!)],
      )) * 1,
    )!,
    MMD_TYPE_REAL,
  );
  MMD__update_value(
    "Times",
    GetEnumPlayer()!,
    MMD__ops[MMD_OP_SET],
    R2S(
      (s___times_pTime[
        s__times_pTime[playerTimes[GetPlayerId(GetEnumPlayer()!)]] +
        GetPlayerId(GetEnumPlayer()!)
      ]) * 1,
    )!,
    MMD_TYPE_REAL,
  );
  MMD_UpdateValueString(
    "Round Times",
    GetEnumPlayer()!,
    udg_roundTimes[GetConvertedPlayerId(GetEnumPlayer()!)],
  );
  MMD_UpdateValueString(
    "Sheep Survived",
    GetEnumPlayer()!,
    udg_sheepSurvived[GetConvertedPlayerId(GetEnumPlayer()!)],
  );

  if (udg_QDeathTime[GetConvertedPlayerId(GetEnumPlayer()!)] < 9999) {
    MMD__update_value(
      "Quickest Death",
      GetEnumPlayer()!,
      MMD__ops[MMD_OP_SET],
      R2S((udg_QDeathTime[GetConvertedPlayerId(GetEnumPlayer()!)]) * 1)!,
      MMD_TYPE_REAL,
    );
  }
};

const Trig_UpdateStats_Actions = (): void => {
  ForForce(GetPlayersAll()!, Trig_UpdateStats_forEnumPlayer);
  MMD__LogEvent("end", 0, "");
  TriggerSleepAction(0.3);
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    30,
    `                              |cff00aeefW3MMD|r stats have been saved to the replay!

Upload your replays to |cff00aeefhttps://wc3stats.com/|r`,
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_UpdateStats: () => void;
}
InitTrig_UpdateStats = (): void => {
  gg_trg_UpdateStats = CreateTrigger();
  TriggerAddAction(gg_trg_UpdateStats, Trig_UpdateStats_Actions);
};
