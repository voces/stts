//===========================================================================
// Trigger: zoom
//
// afk == 0 here
// afk == 1 came back during pick, was not picked
// afk == 2 back, watching game
// afk == 3 went afk before the game started
// afk == 4, went afk during game or after being picked
//===========================================================================
const saveZooms = (p: player): void => {
  if (p !== GetLocalPlayer()) {
    return;
  }

  s__File_close(
    s__File_write(
      s__File_open("revo/zooms.txt"),
      R2S(udg_sheepZoom[GetConvertedPlayerId(GetTriggerPlayer()!)]) + " " +
        R2S(udg_wolfZoom[GetConvertedPlayerId(GetTriggerPlayer()!)]) + " " +
        R2S(udg_wispZoom[GetConvertedPlayerId(GetTriggerPlayer()!)]),
    ),
  );
};

const Trig_zoom_smol_numbers = (val: number): number => {
  if (val < 1) {
    return val;
  }
  let i = 0;
  while (true) {
    if (++i === 100) {
      break;
    }
    if (val > 400) break;
    val = val * 10;
  }
  return val;
};

const setZooms = (
  p: player,
  val1: number,
  val2: number,
  val3: number,
): void => {
  const pId = GetConvertedPlayerId(p);
  if (myArgCount === 2) {
    if (val1 > 1350) {
      if (val1 > 3350) {
        udg_sheepZoom[pId] = 3350;
      } else {
        udg_sheepZoom[pId] = val1;
      }
    } else {
      udg_sheepZoom[pId] = 1350;
    }
    if (val1 > 1350) {
      if (val1 > 3350) {
        udg_wolfZoom[pId] = 3350;
      } else {
        udg_wolfZoom[pId] = val1;
      }
    } else {
      udg_wolfZoom[pId] = 1350;
    }
    if (val1 > 1350) {
      if (val1 > 3350) {
        udg_wispZoom[pId] = 3350;
      } else {
        udg_wispZoom[pId] = val1;
      }
    } else {
      udg_wispZoom[pId] = 1350;
    }
  } else if (myArgCount === 3) {
    if (val1 > 1350) {
      if (val1 > 3350) {
        udg_sheepZoom[pId] = 3350;
      } else {
        udg_sheepZoom[pId] = val1;
      }
    } else {
      udg_sheepZoom[pId] = 1350;
    }
    if (val2 > 1350) {
      if (val2 > 3350) {
        udg_wolfZoom[pId] = 3350;
      } else {
        udg_wolfZoom[pId] = val2;
      }
    } else {
      udg_wolfZoom[pId] = 1350;
    }
    if (val1 > 1350) {
      if (val1 > 3350) {
        udg_wispZoom[pId] = 3350;
      } else {
        udg_wispZoom[pId] = val1;
      }
    } else {
      udg_wispZoom[pId] = 1350;
    }
  } else if (myArgCount === 4) {
    if (val1 > 1350) {
      if (val1 > 3350) {
        udg_sheepZoom[pId] = 3350;
      } else {
        udg_sheepZoom[pId] = val1;
      }
    } else {
      udg_sheepZoom[pId] = 1350;
    }
    if (val2 > 1350) {
      if (val2 > 3350) {
        udg_wolfZoom[pId] = 3350;
      } else {
        udg_wolfZoom[pId] = val2;
      }
    } else {
      udg_wolfZoom[pId] = 1350;
    }
    if (val3 > 1350) {
      if (val3 > 3350) {
        udg_wispZoom[pId] = 3350;
      } else {
        udg_wispZoom[pId] = val3;
      }
    } else {
      udg_wispZoom[pId] = 1350;
    }
  }
  if (udg_sheepLastGame[pId]) {
    if (udg_AFK[pId] > 0) {
      SetCameraFieldForPlayer(
        p,
        CAMERA_FIELD_TARGET_DISTANCE,
        udg_wispZoom[pId],
        0,
      );
    } else {
      if (IsPlayerInForce(p, udg_Spirit)) {
        SetCameraFieldForPlayer(
          p,
          CAMERA_FIELD_TARGET_DISTANCE,
          udg_wispZoom[pId],
          0,
        );
      } else {
        SetCameraFieldForPlayer(
          p,
          CAMERA_FIELD_TARGET_DISTANCE,
          udg_sheepZoom[pId],
          0,
        );
      }
    }
  } else if (udg_sheepLastGame[pId] === false) {
    if (udg_AFK[pId] > 0) {
      SetCameraFieldForPlayer(
        p,
        CAMERA_FIELD_TARGET_DISTANCE,
        udg_wispZoom[pId],
        0,
      );
    } else {
      SetCameraFieldForPlayer(
        p,
        CAMERA_FIELD_TARGET_DISTANCE,
        udg_wolfZoom[pId],
        0,
      );
    }
  }
};

const loadZooms = () => {
  let val1 = 0;
  let val2 = 0;
  let val3 = 0;

  const s = s__File_readEx(s__File_open("revo/zooms.txt"), true);

  if (StringLength(s) === 0) {
    val1 = 1650;
    val2 = 1650;
    val3 = 1650;
  } else {
    Split(s, " ", false);
    val1 = S2R(myArg[0]);
    val2 = S2R(myArg[1]);
    val3 = S2R(myArg[2]);
    DisplayTextToPlayer(
      GetLocalPlayer(),
      0,
      0,
      "Loaded zooms. Sheep: " + I2S(R2I(val1)) + ", Wolf: " + I2S(R2I(val2)) +
        ", Spirit: " + I2S(R2I(val3)),
    );
  }

  myArgCount = 4;
  setZooms(GetLocalPlayer(), val1, val2, val3);
};

const Trig_zoom_Actions = () => {
  let val1 = 0;
  let val2 = 0;
  let val3 = 0;

  Split(GetEventPlayerChatString()!, " ", false);

  if (myArg[0] !== "-zoom" && myArg[0] !== "-z" && myArg[0] !== "-cam") {
    return;
  }

  val1 = Trig_zoom_smol_numbers(S2R(myArg[1]));
  val2 = Trig_zoom_smol_numbers(S2R(myArg[2]));
  val3 = Trig_zoom_smol_numbers(S2R(myArg[3]));

  setZooms(GetTriggerPlayer()!, val1, val2, val3);
  saveZooms(GetTriggerPlayer()!);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_zoom: () => void;
}
InitTrig_zoom = () => {
  gg_trg_zoom = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_zoom, "-zoom ", false);
  TriggerRegisterPlayerChatEventAll(gg_trg_zoom, "-z ", false);
  TriggerRegisterPlayerChatEventAll(gg_trg_zoom, "-cam ", false);
  TriggerAddAction(gg_trg_zoom, Trig_zoom_Actions);

  const t = CreateTrigger();
  TriggerRegisterTimerEventSingle(t, 0.01);
  TriggerAddAction(t, loadZooms);
};
