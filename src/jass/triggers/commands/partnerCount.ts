import { MapPlayerEx } from "handles/MapPlayerEx";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_partnerCount_Actions = () => {
  const s = GetEventPlayerChatString()!.toLowerCase();
  const parts = s.split(" ");
  const pid = s.length === 1 ? GetPlayerId(GetTriggerPlayer()!) : S2I(parts[1] ?? "") - 1;

  if (pid < 0 || pid > 23) return;

  DisplayTimedTextToPlayer(
    GetTriggerPlayer()!,
    0,
    0,
    10,
    `                              ${MapPlayerEx.fromIndex(pid)!.coloredName}|r|CFFFFCC00's Partner Count|r`,
  );

  let i = 0;
  let count = 0;
  while (i < bj_MAX_PLAYERS) {
    count = 0;
    while (i < bj_MAX_PLAYERS && count < 12) {
      if (
        GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[i + 1] === AFK_PLAYING && i !== pid
      ) {
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          10,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + " : " +
            I2S(udg_accumPartner[pid * 24 + i + 1]),
        );
        count++;
      }
      i++;
    }

    if (count === 12) {
      TriggerSleepAction(9);
      if (GetLocalPlayer() === GetTriggerPlayer()!) ClearTextMessages();
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
