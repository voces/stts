import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_ts_Func003Func001Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_ts_Func003Func001A = (p: MapPlayerEx) => {
  if ((Trig_ts_Func003Func001Func001C())) {
    cid = GetConvertedPlayerId(GetEnumPlayer()!);
    p.displayTimedText(
      "                              " + udg_colorString[cid] + GetPlayerName(GetEnumPlayer()!) + " : " +
        I2S(udg_totalSaves[cid]),
      15,
    );
  }
};

const Trig_ts_Func003Func002Func001C = () => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[GetConvertedPlayerId(ConvertedPlayer(GetForLoopIndexA())!)] ===
      0))
  ) {
    return false;
  }
  return true;
};

const Trig_ts_Func003Func006Func001C = () => {
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) ===
      PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(ConvertedPlayer(GetForLoopIndexA())!) !==
      PLAYER_SLOT_STATE_LEFT))
  ) {
    return false;
  }
  if (
    (!(udg_AFK[GetConvertedPlayerId(ConvertedPlayer(GetForLoopIndexA())!)] ===
      0))
  ) {
    return false;
  }
  return true;
};

const Trig_ts_Func003C = () => {
  if ((!(CountPlayersInForceBJ(GetPlayersAll()!) > 14))) {
    return false;
  }
  return true;
};

const Trig_ts_Actions = () => {
  const p = MapPlayerEx.fromEvent()!;
  p.displayTimedText("                              |CFFFFCC00Total Saves|r", 15);
  if ((Trig_ts_Func003C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 12;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_ts_Func003Func002Func001C())) {
        p.displayTimedText(
          "                              " + udg_colorString[GetForLoopIndexA()] +
            GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) + " : " + I2S(udg_totalSaves[GetForLoopIndexA()]),
          15,
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    TriggerSleepAction(9);
    if (p.isLocal()) ClearTextMessages();
    p.displayTimedText("                              |CFFFFCC00Total Saves|r", 15);
    bj_forLoopAIndex = 13;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_ts_Func003Func006Func001C())) {
        p.displayTimedText(
          "                              " + udg_colorString[GetForLoopIndexA()] +
            GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) + " : " + I2S(udg_totalSaves[GetForLoopIndexA()]),
          15,
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else ForForce(GetPlayersAll()!, () => Trig_ts_Func003Func001A(p));
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_ts: () => void;
}
InitTrig_ts = () => {
  gg_trg_ts = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_ts, "-ts");
  TriggerAddAction(gg_trg_ts, Trig_ts_Actions);
};
