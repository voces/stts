import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_partnerCount_Actions = () => {
  const parts = GetEventPlayerChatString()!.toLowerCase().split(" ");
  const pid = parts.length === 1 ? GetPlayerId(GetTriggerPlayer()!) : S2I(parts[1] ?? "") - 1;

  if (pid < 0 || pid > 23) return;

  const self = MapPlayerEx.fromEvent()!;

  self.displayTimedText(`${MapPlayerEx.fromIndex(pid)}|CFFFFCC00's Partner Count|r`, 10);

  let i = 0;
  let count = 0;
  while (i < bj_MAX_PLAYERS) {
    count = 0;
    while (i < bj_MAX_PLAYERS && count < 12) {
      if (
        GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[i + 1] === AFK_PLAYING && i !== pid
      ) {
        const p2 = MapPlayerEx.fromIndex(i)!;
        self.displayTimedText(`${p2.hex}${p2.name} : ${I2S(udg_accumPartner[pid * 24 + i + 1])}`, 10);
        count++;
      }
      i++;
    }

    if (count === 12) {
      TriggerSleepAction(9);
      if (self.isLocal()) ClearTextMessages();
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_partnerCount: () => void;
}
InitTrig_partnerCount = () => {
  gg_trg_partnerCount = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_partnerCount, "-pc", false);
  TriggerAddAction(gg_trg_partnerCount, Trig_partnerCount_Actions);
};
