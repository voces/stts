import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { File } from "w3ts";

const Trig_autocontrol_Actions = () => {
  const enabled = !(udg_autocontrol[GetPlayerId(GetTriggerPlayer()!)]);
  udg_autocontrol[GetPlayerId(GetTriggerPlayer()!)] = enabled;

  if (GetLocalPlayer() !== GetTriggerPlayer()!) return;

  if (enabled) {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFAutocontrol enabled",
    );
  } else {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFAutocontrol disabled",
    );
  }

  File.write("revo/autocontrol.txt", B2S(enabled));
};

const Trig_autocontrol_load = () => {
  let s = File.read("revo/autocontrol.txt");
  if (s == null) s = "false";
  BlzSendSyncData("autocontrol", s);
};

const Trig_autocontrol_sync = () => {
  udg_autocontrol[GetPlayerId(GetTriggerPlayer()!)] = S2B(BlzGetTriggerSyncData()!);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_autocontrol: () => void;
}
InitTrig_autocontrol = () => {
  const t = CreateTrigger();
  const s = CreateTrigger();
  let i = 0;

  gg_trg_autocontrol = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_autocontrol, "-autocontrol");
  TriggerAddAction(gg_trg_autocontrol, Trig_autocontrol_Actions);

  TriggerRegisterTimerEventSingle(t, 0.01);
  TriggerAddAction(t, Trig_autocontrol_load);

  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    BlzTriggerRegisterPlayerSyncEvent(s, Player(i)!, "autocontrol", false);
    i = i + 1;
  }
  TriggerAddAction(s, Trig_autocontrol_sync);
};
