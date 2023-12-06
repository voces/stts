//===========================================================================
// Trigger: autocontrol
//===========================================================================

const Trig_autocontrol_Actions = (): void => {
  const enabled = !(udg_autocontrol[GetPlayerId(GetTriggerPlayer()!)]);
  udg_autocontrol[GetPlayerId(GetTriggerPlayer()!)] = enabled;

  if (GetLocalPlayer() !== GetTriggerPlayer()!) {
    return;
  }

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

  s__File_close(
    s__File_write(s__File_open("revo/autocontrol.txt"), B2S(enabled)),
  );
};

const Trig_autocontrol_load = (): void => {
  let s = s__File_readEx(s__File_open("revo/autocontrol.txt"), true);
  if (s == null) {
    s = "false";
  }
  BlzSendSyncData("autocontrol", s);
};

const Trig_autocontrol_sync = (): void => {
  udg_autocontrol[GetPlayerId(GetTriggerPlayer()!)] = S2B(
    BlzGetTriggerSyncData()!,
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_autocontrol: () => void;
}
InitTrig_autocontrol = (): void => {
  const t = CreateTrigger();
  const s = CreateTrigger();
  let i = 0;

  gg_trg_autocontrol = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_autocontrol, "-autocontrol", true);
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
