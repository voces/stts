//===========================================================================
// Trigger: blightManagement
//===========================================================================
const Trig_blightManagement_Func001Func001Func005Func005Func005C = () => {
  if ((!(udg_blightCounter === 3))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Func001Func001Func005Func005C = () => {
  if ((!(udg_blightCounter === 2))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Func001Func001Func005C = () => {
  if ((!(udg_blightCounter === 1))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Func001Func001C = () => {
  if ((!(udg_blightCounter === 0))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Func001Func003Func001Func005Func001C = () => {
  if ((!(udg_blightCounter === 3))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Func001Func003Func001Func005C = () => {
  if ((!(udg_blightCounter === 2))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Func001Func003Func001C = () => {
  if ((!(udg_blightCounter === 1))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Func001Func003C = () => {
  if ((!(udg_blightCounter === 0))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Func001C = () => {
  if ((!(udg_mapShrink === true))) {
    return false;
  }
  return true;
};

const Trig_blightManagement_Actions = () => {
  if ((Trig_blightManagement_Func001C())) {
    if ((Trig_blightManagement_Func001Func003C())) {
      SetBlightRectBJ(
        true,
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        gg_rct_Blight_Bot_1,
      );
      SetBlightRectBJ(
        true,
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        gg_rct_Blight_Left_1,
      );
      SetBlightRectBJ(
        true,
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        gg_rct_Blight_Right_1,
      );
      SetBlightRectBJ(
        true,
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        gg_rct_Blight_Top_1,
      );
      TimerStart(udg_mapSizeChangeTimer, udg_blightAlterationTime, false, null);
    } else {
      if ((Trig_blightManagement_Func001Func003Func001C())) {
        SetBlightRectBJ(
          true,
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          gg_rct_Blight_Bot_2,
        );
        SetBlightRectBJ(
          true,
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          gg_rct_Blight_Left_2,
        );
        SetBlightRectBJ(
          true,
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          gg_rct_Blight_Right_2,
        );
        SetBlightRectBJ(
          true,
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          gg_rct_Blight_Top_2,
        );
        TimerStart(udg_mapSizeChangeTimer, udg_blightAlterationTime, false, null);
      } else {
        if ((Trig_blightManagement_Func001Func003Func001Func005C())) {
          SetBlightRectBJ(
            true,
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            gg_rct_Blight_Bot_3,
          );
          SetBlightRectBJ(
            true,
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            gg_rct_Blight_Left_3,
          );
          SetBlightRectBJ(
            true,
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            gg_rct_Blight_Right_3,
          );
          SetBlightRectBJ(
            true,
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            gg_rct_Blight_Top_3,
          );
          TimerStart(udg_mapSizeChangeTimer, udg_blightAlterationTime, false, null);
        } else {
          if ((Trig_blightManagement_Func001Func003Func001Func005Func001C())) {
            SetBlightRectBJ(
              true,
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              gg_rct_Blight_Bot_4,
            );
            SetBlightRectBJ(
              true,
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              gg_rct_Blight_Left_4,
            );
            SetBlightRectBJ(
              true,
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              gg_rct_Blight_Right_4,
            );
            SetBlightRectBJ(
              true,
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              gg_rct_Blight_Top_4,
            );
            TimerDialogDisplayBJ(false, udg_mapSizeChangeTimerWindow);
          }
        }
      }
    }
  } else {
    if ((Trig_blightManagement_Func001Func001C())) {
      SetBlightRectBJ(
        false,
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        gg_rct_Blight_Bot_4,
      );
      SetBlightRectBJ(
        false,
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        gg_rct_Blight_Left_4,
      );
      SetBlightRectBJ(
        false,
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        gg_rct_Blight_Right_4,
      );
      SetBlightRectBJ(
        false,
        Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
        gg_rct_Blight_Top_4,
      );
      TimerStart(udg_mapSizeChangeTimer, udg_blightAlterationTime, false, null);
    } else {
      if ((Trig_blightManagement_Func001Func001Func005C())) {
        SetBlightRectBJ(
          false,
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          gg_rct_Blight_Bot_3,
        );
        SetBlightRectBJ(
          false,
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          gg_rct_Blight_Left_3,
        );
        SetBlightRectBJ(
          false,
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          gg_rct_Blight_Right_3,
        );
        SetBlightRectBJ(
          false,
          Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
          gg_rct_Blight_Top_3,
        );
        TimerStart(udg_mapSizeChangeTimer, udg_blightAlterationTime, false, null);
      } else {
        if ((Trig_blightManagement_Func001Func001Func005Func005C())) {
          SetBlightRectBJ(
            false,
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            gg_rct_Blight_Bot_2,
          );
          SetBlightRectBJ(
            false,
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            gg_rct_Blight_Left_2,
          );
          SetBlightRectBJ(
            false,
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            gg_rct_Blight_Right_2,
          );
          SetBlightRectBJ(
            false,
            Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
            gg_rct_Blight_Top_2,
          );
          TimerStart(udg_mapSizeChangeTimer, udg_blightAlterationTime, false, null);
        } else {
          if ((Trig_blightManagement_Func001Func001Func005Func005Func005C())) {
            SetBlightRectBJ(
              false,
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              gg_rct_Blight_Bot_1,
            );
            SetBlightRectBJ(
              false,
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              gg_rct_Blight_Left_1,
            );
            SetBlightRectBJ(
              false,
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              gg_rct_Blight_Right_1,
            );
            SetBlightRectBJ(
              false,
              Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
              gg_rct_Blight_Top_1,
            );
            TimerDialogDisplayBJ(false, udg_mapSizeChangeTimerWindow);
          }
        }
      }
    }
  }
  udg_blightCounter = udg_blightCounter + 1;
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_blightManagement: () => void;
}
InitTrig_blightManagement = () => {
  gg_trg_blightManagement = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_blightManagement, udg_mapSizeChangeTimer);
  TriggerAddAction(gg_trg_blightManagement, Trig_blightManagement_Actions);
};
