import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_position_Actions = () => {
  const pos = S2I(GetEventPlayerChatString()!.split(" ")[1]);
  if (pos < 1 || pos > 24) return;
  const p = MapPlayerEx.fromEvent()!;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (
      GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
      udg_startLocation[i + 1] === udg_masterStartLocation[pos]
    ) return;
  }
  udg_startLocation[p.cid] = udg_masterStartLocation[pos];
  p.displayTimedText(
    udg_masterColorString[pos] + "                              Set spawn position to: " + I2S(pos),
    8,
  );
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_position: () => void;
}
InitTrig_position = () => {
  gg_trg_position = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_position, "-position ", false);
  TriggerAddCondition(gg_trg_position, Condition(() => udg_practiceOn));
  TriggerAddAction(gg_trg_position, Trig_position_Actions);
};
