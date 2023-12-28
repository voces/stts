import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { sleep } from "w3ts";

const Trig_firstbloodCount_Func003Func001Func001C = () => {
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING))) {
    return false;
  }
  if ((!(GetPlayerSlotState(GetEnumPlayer()!) !== PLAYER_SLOT_STATE_LEFT))) {
    return false;
  }
  if ((!(udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING))) {
    return false;
  }
  return true;
};

const Trig_firstbloodCount_Func003Func001A = (p: MapPlayerEx) => {
  if ((Trig_firstbloodCount_Func003Func001Func001C())) {
    udg_atempint = GetConvertedPlayerId(GetEnumPlayer()!);
    p.displayTimedText(
      "                              " + udg_colorString[udg_atempint] +
        GetPlayerName(GetEnumPlayer()!) +
        " : " +
        I2S(udg_firstbloodKillCounter[udg_atempint]) +
        " | " + I2S(udg_firstbloodDeathCounter[udg_atempint]),
      15,
    );
  }
};

const Trig_firstbloodCount_Func003Func002Func001C = () => {
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

const Trig_firstbloodCount_Func003Func006Func001C = () => {
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

const Trig_firstbloodCount_Func003C = () => {
  if ((!(CountPlayersInForceBJ(GetPlayersAll()!) > 14))) {
    return false;
  }
  return true;
};

const Trig_firstbloodCount_Actions = async () => {
  const p = MapPlayerEx.fromEvent()!;
  p.displayTimedText("                              |CFFFFCC00First Blood Kills | Deaths|r", 15);
  if ((Trig_firstbloodCount_Func003C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 12;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_firstbloodCount_Func003Func002Func001C())) {
        p.displayTimedText(
          "                              " +
            udg_colorString[GetForLoopIndexA()] +
            GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
            " : " +
            I2S(udg_firstbloodKillCounter[GetForLoopIndexA()]) +
            " | " +
            I2S(udg_firstbloodDeathCounter[GetForLoopIndexA()]),
          15,
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    await sleep(9);
    if (p.isLocal()) ClearTextMessages();
    p.displayTimedText("                              |CFFFFCC00First Blood Kills | Deaths|r", 15);
    bj_forLoopAIndex = 13;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      if ((Trig_firstbloodCount_Func003Func006Func001C())) {
        p.displayTimedText(
          "                              " +
            udg_colorString[GetForLoopIndexA()] +
            GetPlayerName(ConvertedPlayer(GetForLoopIndexA())!) +
            " : " +
            I2S(udg_firstbloodKillCounter[GetForLoopIndexA()]) +
            " | " +
            I2S(udg_firstbloodDeathCounter[GetForLoopIndexA()]),
          15,
        );
      }
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  } else ForForce(GetPlayersAll()!, () => Trig_firstbloodCount_Func003Func001A(p));
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_firstbloodCount: () => void;
}
InitTrig_firstbloodCount = () => {
  gg_trg_firstbloodCount = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_firstbloodCount, "-fbc");
  TriggerAddAction(gg_trg_firstbloodCount, Trig_firstbloodCount_Actions);
};
