import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_continue_Actions = () => {
  udg_versusOff = false;
  if (udg_versus === 1) {
    ForForce(GetPlayersAll()!, () => {
      if (
        udg_AFK[GetConvertedPlayerId(GetEnumPlayer()!)] === AFK_PLAYING &&
        GetPlayerSlotState(GetEnumPlayer()!) === PLAYER_SLOT_STATE_PLAYING
      ) {
        const force = !udg_sheepLastGame[GetConvertedPlayerId(GetEnumPlayer()!)] ? udg_Wolf : udg_Sheep;
        ForceAddPlayerSimple(GetEnumPlayer()!, force);
      }
    });
  }
  udg_time = udg_versusTime;
  DisableTrigger(GetTriggeringTrigger()!);
  TriggerExecute(gg_trg_versusCountDown);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_continue: () => void;
}
InitTrig_continue = () => {
  gg_trg_continue = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_continue, "-continue");
  TriggerAddCondition(gg_trg_continue, Condition(() => GetTriggerPlayer() === udg_Custom && udg_versus > 0));
  TriggerAddAction(gg_trg_continue, Trig_continue_Actions);
};
