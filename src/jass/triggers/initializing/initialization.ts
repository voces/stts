export {};

const Trig_isSheep = () => {
  SetCameraFieldForPlayer(
    GetEnumPlayer()!,
    CAMERA_FIELD_TARGET_DISTANCE,
    udg_sheepZoom[GetConvertedPlayerId(GetEnumPlayer()!)],
    0,
  );
};

const Trig_isWolf = () => {
  SetCameraFieldForPlayer(
    GetEnumPlayer()!,
    CAMERA_FIELD_TARGET_DISTANCE,
    udg_wolfZoom[GetConvertedPlayerId(GetEnumPlayer()!)],
    0,
  );
};

const Trig_initialization_forAllPlayersOne = () => {
  cid = GetConvertedPlayerId(GetEnumPlayer()!);
  udg_zoom[cid] = GetCameraField(CAMERA_FIELD_TARGET_DISTANCE);
  playerTimes[cid - 1] = s__times_create();
  udg_AFK[cid] = AFK_PLAYING;
  udg_permanentHide[cid] = false;
  udg_AFKOn[cid] = 0;
  udg_sheepZoom[cid] = 0;
  udg_wolfZoom[cid] = 0;
  udg_wispZoom[cid] = 0;
  wasHere[cid - 1] = true;
  if (GetPlayerSlotState(ConvertedPlayer(cid)!) === PLAYER_SLOT_STATE_PLAYING) {
    udg_wasHere[cid] = true;
  }
};

const Trig_initialization_forAllPlayersTwo = () => {
  SetPlayerFlagBJ(PLAYER_STATE_GIVES_BOUNTY, false, GetEnumPlayer()!);
  cid = GetConvertedPlayerId(GetEnumPlayer()!);
  udg_startLocation[cid + 24] = udg_startLocation[cid];
  udg_hideshow[GetConvertedPlayerId(GetEnumPlayer()!)] = false;
  udg_hideEsc[GetConvertedPlayerId(GetEnumPlayer()!)] = false;
  if (GetConvertedPlayerId(GetEnumPlayer()!) < 13) {
    udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = true;
  } else {
    udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] = false;
  }
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    SetPlayerAllianceStateBJ(
      ConvertedPlayer(GetForLoopIndexA())!,
      GetEnumPlayer()!,
      bj_ALLIANCE_UNALLIED,
    );
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

const Trig_initialization_Actions = () => {
  let i: number;
  SetCreepCampFilterState(false);
  EnableMinimapFilterButtons(true, false);
  TimerStart(udg_gameTimer, 1000000000, false, null);
  udg_giveOn = true;
  udg_versus = 0;
  udg_versusOff = false;
  udg_mapName = "    Sheep Tag ReVoLuTiOn";
  udg_colorString[1] = "|CFFFF0000";
  udg_colorString[2] = "|CFF0000FF";
  udg_colorString[3] = "|CFF18E7BD";
  udg_colorString[4] = "|CFF520084";
  udg_colorString[5] = "|CFFFFFF00";
  udg_colorString[6] = "|CFFFF8A08";
  udg_colorString[7] = "|CFF18BE00";
  udg_colorString[8] = "|CFFE759AD";
  udg_colorString[9] = "|CFF949694";
  udg_colorString[10] = "|CFF7BBEF7";
  udg_colorString[11] = "|CFF086142";
  udg_colorString[12] = "|CFF4A2800";
  udg_colorString[13] = "|CFF9B0000";
  udg_colorString[14] = "|CFF0000C3";
  udg_colorString[15] = "|CFF00EAFF";
  udg_colorString[16] = "|CFFBE00FE";
  udg_colorString[17] = "|CFFEBCD87";
  udg_colorString[18] = "|CFFF8A48B";
  udg_colorString[19] = "|CFFBFFF80";
  udg_colorString[20] = "|CFFDCB9EB";
  udg_colorString[21] = "|CFF282828";
  udg_colorString[22] = "|CFFEBF0FF";
  udg_colorString[23] = "|CFF00781E";
  udg_colorString[24] = "|CFFA46F33";

  i = CountPlayersInForceBJ(GetPlayersAll()!);
  defaultTime();

  udg_SheepColorR[1] = 100;
  udg_SheepColorG[1] = 0;
  udg_SheepColorB[1] = 0;
  udg_SheepColorR[2] = 0;
  udg_SheepColorG[2] = 0;
  udg_SheepColorB[2] = 100;
  udg_SheepColorR[3] = 0;
  udg_SheepColorG[3] = 100;
  udg_SheepColorB[3] = 100;
  udg_SheepColorR[4] = 32.16;
  udg_SheepColorG[4] = 0;
  udg_SheepColorB[4] = 47.84;
  udg_SheepColorR[5] = 100;
  udg_SheepColorG[5] = 100;
  udg_SheepColorB[5] = 0;
  udg_SheepColorR[6] = 100;
  udg_SheepColorG[6] = 40;
  udg_SheepColorB[6] = 0;
  udg_SheepColorR[7] = 0;
  udg_SheepColorG[7] = 100;
  udg_SheepColorB[7] = 0;
  udg_SheepColorR[8] = 91;
  udg_SheepColorG[8] = 35;
  udg_SheepColorB[8] = 68;
  udg_SheepColorR[9] = 58.04;
  udg_SheepColorG[9] = 59;
  udg_SheepColorB[9] = 58;
  udg_SheepColorR[10] = 48.24;
  udg_SheepColorG[10] = 75;
  udg_SheepColorB[10] = 77;
  udg_SheepColorR[11] = 3.14;
  udg_SheepColorG[11] = 39.04;
  udg_SheepColorB[11] = 26;
  udg_SheepColorR[12] = 29.02;
  udg_SheepColorG[12] = 16;
  udg_SheepColorB[12] = 0;
  udg_SheepColorR[13] = 60.01;
  udg_SheepColorG[13] = 0;
  udg_SheepColorB[13] = 0;
  udg_SheepColorR[14] = 0;
  udg_SheepColorG[14] = 0;
  udg_SheepColorB[14] = 76.47;
  udg_SheepColorR[15] = 0;
  udg_SheepColorG[15] = 91.76;
  udg_SheepColorB[15] = 100;
  udg_SheepColorR[16] = 74.5;
  udg_SheepColorG[16] = 0;
  udg_SheepColorB[16] = 99.61;
  udg_SheepColorR[17] = 92;
  udg_SheepColorG[17] = 80.39;
  udg_SheepColorB[17] = 52.94;
  udg_SheepColorR[18] = 97.25;
  udg_SheepColorG[18] = 64.31;
  udg_SheepColorB[18] = 54.51;
  udg_SheepColorR[19] = 74.9;
  udg_SheepColorG[19] = 100;
  udg_SheepColorB[19] = 50;
  udg_SheepColorR[20] = 86.27;
  udg_SheepColorG[20] = 72.55;
  udg_SheepColorB[20] = 92.16;
  udg_SheepColorR[21] = 15.69;
  udg_SheepColorG[21] = 15.69;
  udg_SheepColorB[21] = 15.69;
  udg_SheepColorR[22] = 92.16;
  udg_SheepColorG[22] = 94.12;
  udg_SheepColorB[22] = 100;
  udg_SheepColorR[23] = 0;
  udg_SheepColorG[23] = 47.06;
  udg_SheepColorB[23] = 11.77;
  udg_SheepColorR[24] = 64.31;
  udg_SheepColorG[24] = 43.53;
  udg_SheepColorB[24] = 20;

  // Store a master list for anonymous mode.
  i = 1;
  while (true) {
    if (i > 24) break;
    udg_masterStartLocation[i] = udg_startLocation[i];
    udg_masterColorString[i] = udg_colorString[i];
    udg_masterSheepColorR[i] = udg_SheepColorR[i];
    udg_masterSheepColorG[i] = udg_SheepColorG[i];
    udg_masterSheepColorB[i] = udg_SheepColorB[i];
    i = i + 1;
  }

  udg_playerColor[1] = PLAYER_COLOR_RED;
  udg_playerColor[2] = PLAYER_COLOR_BLUE;
  udg_playerColor[3] = PLAYER_COLOR_CYAN;
  udg_playerColor[4] = PLAYER_COLOR_PURPLE;
  udg_playerColor[5] = PLAYER_COLOR_YELLOW;
  udg_playerColor[6] = PLAYER_COLOR_ORANGE;
  udg_playerColor[7] = PLAYER_COLOR_GREEN;
  udg_playerColor[8] = PLAYER_COLOR_PINK;
  udg_playerColor[9] = PLAYER_COLOR_LIGHT_GRAY;
  udg_playerColor[10] = PLAYER_COLOR_LIGHT_BLUE;
  udg_playerColor[11] = PLAYER_COLOR_AQUA;
  udg_playerColor[12] = PLAYER_COLOR_BROWN;
  udg_playerColor[13] = PLAYER_COLOR_MAROON;
  udg_playerColor[14] = PLAYER_COLOR_NAVY;
  udg_playerColor[15] = PLAYER_COLOR_TURQUOISE;
  udg_playerColor[16] = PLAYER_COLOR_VIOLET;
  udg_playerColor[17] = PLAYER_COLOR_WHEAT;
  udg_playerColor[18] = PLAYER_COLOR_PEACH;
  udg_playerColor[19] = PLAYER_COLOR_MINT;
  udg_playerColor[20] = PLAYER_COLOR_LAVENDER;
  udg_playerColor[21] = PLAYER_COLOR_COAL;
  udg_playerColor[22] = PLAYER_COLOR_SNOW;
  udg_playerColor[23] = PLAYER_COLOR_EMERALD;
  udg_playerColor[24] = PLAYER_COLOR_PEANUT;

  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = 24;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    udg_QDeathTime[GetForLoopIndexA()] = Infinity;
    udg_camLock[GetForLoopIndexA()] = true;
    udg_firstRound[GetForLoopIndexA()] = true;
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }

  udg_Custom = Player(0)!;
  udg_originalCustom = Player(0)!;

  ForForce(GetPlayersAll()!, Trig_initialization_forAllPlayersOne);

  TriggerSleepAction(0.01);
  ForForce(GetPlayersAll()!, Trig_initialization_forAllPlayersTwo);

  for (let i = 1; i <= 24; i++) colors[i] = s__colorsStruct__allocate();
  s__colorsStruct_color1[colors[1]] = 255;
  s__colorsStruct_color2[colors[1]] = 0;
  s__colorsStruct_color3[colors[1]] = 0;

  s__colorsStruct_color1[colors[2]] = 0;
  s__colorsStruct_color2[colors[2]] = 0;
  s__colorsStruct_color3[colors[2]] = 255;

  s__colorsStruct_color1[colors[3]] = 24;
  s__colorsStruct_color2[colors[3]] = 231;
  s__colorsStruct_color3[colors[3]] = 189;

  s__colorsStruct_color1[colors[4]] = 82;
  s__colorsStruct_color2[colors[4]] = 0;
  s__colorsStruct_color3[colors[4]] = 132;

  s__colorsStruct_color1[colors[5]] = 255;
  s__colorsStruct_color2[colors[5]] = 255;
  s__colorsStruct_color3[colors[5]] = 0;

  s__colorsStruct_color1[colors[6]] = 255;
  s__colorsStruct_color2[colors[6]] = 138;
  s__colorsStruct_color3[colors[6]] = 8;

  s__colorsStruct_color1[colors[7]] = 24;
  s__colorsStruct_color2[colors[7]] = 190;
  s__colorsStruct_color3[colors[7]] = 0;

  s__colorsStruct_color1[colors[8]] = 231;
  s__colorsStruct_color2[colors[8]] = 89;
  s__colorsStruct_color3[colors[8]] = 173;

  s__colorsStruct_color1[colors[9]] = 148;
  s__colorsStruct_color2[colors[9]] = 150;
  s__colorsStruct_color3[colors[9]] = 148;

  s__colorsStruct_color1[colors[10]] = 123;
  s__colorsStruct_color2[colors[10]] = 190;
  s__colorsStruct_color3[colors[10]] = 247;

  s__colorsStruct_color1[colors[11]] = 8;
  s__colorsStruct_color2[colors[11]] = 97;
  s__colorsStruct_color3[colors[11]] = 66;

  s__colorsStruct_color1[colors[12]] = 74;
  s__colorsStruct_color2[colors[12]] = 40;
  s__colorsStruct_color3[colors[12]] = 0;

  s__colorsStruct_color1[colors[13]] = 155;
  s__colorsStruct_color2[colors[13]] = 0;
  s__colorsStruct_color3[colors[13]] = 0;

  s__colorsStruct_color1[colors[14]] = 0;
  s__colorsStruct_color2[colors[14]] = 0;
  s__colorsStruct_color3[colors[14]] = 195;

  s__colorsStruct_color1[colors[15]] = 0;
  s__colorsStruct_color2[colors[15]] = 234;
  s__colorsStruct_color3[colors[15]] = 255;

  s__colorsStruct_color1[colors[16]] = 190;
  s__colorsStruct_color2[colors[16]] = 0;
  s__colorsStruct_color3[colors[16]] = 254;

  s__colorsStruct_color1[colors[17]] = 235;
  s__colorsStruct_color2[colors[17]] = 205;
  s__colorsStruct_color3[colors[17]] = 135;

  s__colorsStruct_color1[colors[18]] = 248;
  s__colorsStruct_color2[colors[18]] = 164;
  s__colorsStruct_color3[colors[18]] = 139;

  s__colorsStruct_color1[colors[19]] = 191;
  s__colorsStruct_color2[colors[19]] = 255;
  s__colorsStruct_color3[colors[19]] = 128;

  s__colorsStruct_color1[colors[20]] = 220;
  s__colorsStruct_color2[colors[20]] = 185;
  s__colorsStruct_color3[colors[20]] = 235;

  s__colorsStruct_color1[colors[21]] = 40;
  s__colorsStruct_color2[colors[21]] = 40;
  s__colorsStruct_color3[colors[21]] = 40;

  s__colorsStruct_color1[colors[22]] = 235;
  s__colorsStruct_color2[colors[22]] = 240;
  s__colorsStruct_color3[colors[22]] = 255;

  s__colorsStruct_color1[colors[23]] = 0;
  s__colorsStruct_color2[colors[23]] = 120;
  s__colorsStruct_color3[colors[23]] = 30;

  s__colorsStruct_color1[colors[24]] = 164;
  s__colorsStruct_color2[colors[24]] = 111;
  s__colorsStruct_color3[colors[24]] = 51;

  i = 0;
  while (true) {
    if (i === 24) break;
    if (GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING) {
      if (i < 12) {
        ForceAddPlayer(udg_Sheep, Player(i)!);
      } else {
        ForceAddPlayer(udg_Wolf, Player(i)!);
      }
      SetPlayerName(
        Player(i)!,
        GetPlayerName(Player(i)!)?.split("#")[0] + " (" + (I2S(i + 1) + ")"),
      );
    }
    i = i + 1;
  }

  ForForce(udg_Sheep, Trig_isSheep);
  ForForce(udg_Wolf, Trig_isWolf);
  TriggerExecute(gg_trg_Create_Timers);
  TriggerExecute(gg_trg_startRound);
  DisableTrigger(gg_trg_Sheep_Color);
  PlaySoundBJ(gg_snd_GoodJob);
  DestroyTrigger(gg_trg_initialization);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_initialization: () => void;
}
InitTrig_initialization = () => {
  gg_trg_initialization = CreateTrigger();
  TriggerAddAction(gg_trg_initialization, Trig_initialization_Actions);
};
