//===========================================================================
// Trigger: noAutoControl
//===========================================================================

const Trig_noAutoControl_Actions = (): void => {
  const enabled = !(noAutoControl[GetPlayerId(GetTriggerPlayer()!)]);
  noAutoControl[GetPlayerId(GetTriggerPlayer()!)] = enabled;

  if (GetLocalPlayer() !== GetTriggerPlayer()!) {
    return;
  }

  if (enabled) {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFYou will no longer automatically receive control",
    );
  } else {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFYou will now automatically receive control",
    );
  }

  s__File_close(
    s__File_write(s__File_open("revo/noAutoControl.txt"), B2S(enabled)),
  );
};

const Trig_noAutoControl_load = (): void => {
  let s = s__File_readEx(s__File_open("revo/noAutoControl.txt"), true);
  if (s == null) {
    s = "false";
  }
  BlzSendSyncData("noAutoControl", s);
};

const Trig_noAutoControl_sync = (): void => {
  noAutoControl[GetPlayerId(GetTriggerPlayer()!)] = S2B(
    BlzGetTriggerSyncData()!,
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_noAutoControl: () => void;
}
InitTrig_noAutoControl = (): void => {
  const t = CreateTrigger();
  const s = CreateTrigger();
  let i = 0;

  gg_trg_noAutoControl = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(
    gg_trg_noAutoControl,
    "-noautocontrol",
    true,
  );
  TriggerAddAction(gg_trg_noAutoControl, Trig_noAutoControl_Actions);

  TriggerRegisterTimerEventSingle(t, 0.01);
  TriggerAddAction(t, Trig_noAutoControl_load);

  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    BlzTriggerRegisterPlayerSyncEvent(s, Player(i)!, "noAutoControl", false);
    i = i + 1;
  }
  TriggerAddAction(s, Trig_noAutoControl_sync);
};
