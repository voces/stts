import { MapPlayerEx } from "handles/MapPlayerEx";
import { spawns } from "settings/spawns";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_position_Actions = () => {
  const positionIndex = S2I(GetEventPlayerChatString()!.split(" ")[1]);
  if (positionIndex < 1 || positionIndex > 24) return;
  const p = MapPlayerEx.fromEvent()!;
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (
      GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
      udg_startLocation[i + 1] === udg_masterStartLocation[positionIndex] &&
      i !== p.id
    ) return;
  }
  udg_startLocation[p.cid] = udg_masterStartLocation[positionIndex];
  p.displayTimedText(
    udg_masterColorString[positionIndex] + "                              Set spawn position to: " + I2S(positionIndex),
    8,
  );
  const pos = {
    x: GetRectCenterX(udg_startLocation[p.cid]),
    y: GetRectCenterY(udg_startLocation[p.cid]),
  };
  SetUnitPosition(udg_unit[p.cid], pos.x, pos.y);
  PanCameraToTimedForPlayer(p.handle, pos.x, pos.y, 0);
  spawns.set(p.handle, pos);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_position: () => void;
}
InitTrig_position = () => {
  gg_trg_position = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_position, "-position ", false);
  TriggerAddCondition(gg_trg_position, Condition(() => udg_practiceOn || !udg_gameStarted));
  TriggerAddAction(gg_trg_position, Trig_position_Actions);
};
