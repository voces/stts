//===========================================================================
// Trigger: ScoreboardMultiboard
//===========================================================================
const Trig_ScoreboardMultiboard_Func020Func001Func015C = () => {
  if ((!(Number.isFinite(udg_QDeathTime[GetConvertedPlayerId(GetEnumPlayer()!)])))) {
    return false;
  }
  return true;
};

const Trig_ScoreboardMultiboard_Func020A = () => {
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    1,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
      GetPlayerName(GetEnumPlayer()!),
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    2,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
      I2S(udg_sheepCount[GetConvertedPlayerId(GetEnumPlayer()!)]),
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    3,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
      I2S(udg_wins[GetConvertedPlayerId(GetEnumPlayer()!)]),
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    4,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
      I2S(udg_vwins[GetConvertedPlayerId(GetEnumPlayer()!)]),
  );
  udg_atempstring = formatTime(
    s___times_pTime[
      s__times_pTime[
        playerTimes[GetConvertedPlayerId(GetEnumPlayer()!) - 1]
      ] + GetConvertedPlayerId(GetEnumPlayer()!) - 1
    ],
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    5,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] + udg_atempstring,
  );
  udg_atempstring = formatTime(
    TimerGetElapsed(udg_sheepTimer[GetConvertedPlayerId(GetEnumPlayer()!)]),
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    6,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] + udg_atempstring,
  );
  udg_atempstring = formatTime(
    s__times_pTimeMax[
      playerTimes[GetConvertedPlayerId(GetEnumPlayer()!) - 1]
    ],
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    7,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] + udg_atempstring,
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    8,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
      I2S(udg_totalKills[GetConvertedPlayerId(GetEnumPlayer()!)]),
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    9,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
      I2S(udg_totalSaves[GetConvertedPlayerId(GetEnumPlayer()!)]),
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    10,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
      (I2S(
        udg_firstbloodKillCounter[GetConvertedPlayerId(GetEnumPlayer()!)],
      ) +
        (" | " +
          I2S(
            udg_firstbloodDeathCounter[
              GetConvertedPlayerId(GetEnumPlayer()!)
            ],
          ))),
  );
  MultiboardSetItemValueBJ(
    udg_scoreMultiboard,
    11,
    udg_atempint3,
    udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
      I2S(udg_lssCounter[GetConvertedPlayerId(GetEnumPlayer()!)]),
  );
  if ((Trig_ScoreboardMultiboard_Func020Func001Func015C())) {
    MultiboardSetItemValueBJ(
      udg_scoreMultiboard,
      12,
      udg_atempint3,
      udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] +
        udg_QDeathTime[GetConvertedPlayerId(GetEnumPlayer()!)].toFixed(3) + "s",
    );
  } else {
    MultiboardSetItemValueBJ(
      udg_scoreMultiboard,
      12,
      udg_atempint3,
      udg_colorString[GetConvertedPlayerId(GetEnumPlayer()!)] + "N/A",
    );
  }
  udg_atempint3 = udg_atempint3 + 1;
};

const Trig_ScoreboardMultiboard_Actions = () => {
  DestroyMultiboardBJ(udg_scoreMultiboard);
  cid = 12;
  udg_atempint2 = CountPlayersInForceBJ(GetPlayersAll()!) + 1;
  CreateMultiboardBJ(
    cid,
    udg_atempint2,
    "Join our Discord at https://dsc.gg/sheeptag",
  );
  udg_scoreMultiboard = GetLastCreatedMultiboard()!;
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 1, 1, "Player");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 2, 1, "SheepCount");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 3, 1, "Wins");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 4, 1, "VersusWins");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 5, 1, "Times");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 6, 1, "STimes");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 7, 1, "MaxTimes");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 8, 1, "Kills");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 9, 1, "Saves");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 10, 1, "FBC(K | D)");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 11, 1, "LSS");
  MultiboardSetItemValueBJ(udg_scoreMultiboard, 12, 1, "QD");
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = cid;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    bj_forLoopBIndex = 1;
    bj_forLoopBIndexEnd = udg_atempint2;
    while (true) {
      if (bj_forLoopBIndex > bj_forLoopBIndexEnd) break;
      MultiboardSetItemStyleBJ(
        udg_scoreMultiboard,
        GetForLoopIndexA(),
        GetForLoopIndexB(),
        true,
        false,
      );
      MultiboardSetItemWidthBJ(
        udg_scoreMultiboard,
        GetForLoopIndexA(),
        GetForLoopIndexB(),
        7,
      );
      bj_forLoopBIndex = bj_forLoopBIndex + 1;
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
  udg_atempint3 = 2;
  ForForce(GetPlayersAll()!, Trig_ScoreboardMultiboard_Func020A);
  MultiboardDisplayBJ(true, udg_scoreMultiboard);
  MultiboardSuppressDisplay(false);
  MultiboardMinimizeBJ(true, udg_scoreMultiboard);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_ScoreboardMultiboard: () => void;
}
InitTrig_ScoreboardMultiboard = () => {
  gg_trg_ScoreboardMultiboard = CreateTrigger();
  TriggerAddAction(
    gg_trg_ScoreboardMultiboard,
    Trig_ScoreboardMultiboard_Actions,
  );
};
