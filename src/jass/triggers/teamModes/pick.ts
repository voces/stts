//===========================================================================
// Trigger: pick
//
// gg_trg_pick
//===========================================================================
const Trig_pick_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_pick_Func014002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Sheep);
};

const Trig_pick_Func015002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Wolf);
};

const Trig_pick_Func016002 = (): void => {
  ForceRemovePlayerSimple(GetEnumPlayer()!, udg_Spirit);
};

const Trig_pick_Func017002 = (): void => {
  SetPlayerAllianceStateBJ(
    udg_Custom,
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
};

const Trig_pick_Actions = (): void => {
  //Quick Pick
  let message: string;
  let pID: number;
  const Added: Array<boolean> = [];
  let a = 0;
  //End Quick Pick
  DisableTrigger(gg_trg_random);
  DisableTrigger(gg_trg_smart);
  DisableTrigger(gg_trg_fair);
  DisableTrigger(gg_trg_reverse);
  DisableTrigger(GetTriggeringTrigger()!);
  DisableTrigger(gg_trg_start);
  DisableTrigger(gg_trg_captains);
  DisableTrigger(gg_trg_versus);
  DisableTrigger(gg_trg_end);
  udg_lastGameString = GetEventPlayerChatString()!;
  TriggerExecute(gg_trg_createLists);
  udg_Teams = TEAMS_PICK;
  udg_pickIndex = 1;
  ForForce(udg_Sheep, Trig_pick_Func014002);
  ForForce(udg_Wolf, Trig_pick_Func015002);
  ForForce(udg_Spirit, Trig_pick_Func016002);
  ForForce(GetPlayersAll()!, Trig_pick_Func017002);
  TriggerExecute(gg_trg_setupLeaderboard);
  StartTimerBJ(udg_Createtimer, false, 60);
  TimerDialogDisplayBJ(true, udg_createTimerWindow);
  EnableTrigger(gg_trg_picksheep);
  EnableTrigger(gg_trg_pickwolf);
  //Quick Pick
  if (GetEventPlayerChatString()! !== "-pick") {
    message = SubString(GetEventPlayerChatString()!, 6, -1)!;
    while (true) {
      if (StringLength(message) < 1) break;
      if (InStr(message, " ") > -1) {
        pID = S2I(SubString(message, 0, InStr(message, " "))!);
        message = SubString(message, InStr(message, " ") + 1, -1)!;
      } else {
        pID = S2I(message);
        message = "";
      }
      if (
        (pID - 1) > -1 && (pID - 1) < 24 &&
        GetPlayerSlotState(Player(pID - 1)!) !== PLAYER_SLOT_STATE_LEFT &&
        GetPlayerSlotState(Player(pID - 1)!) !== PLAYER_SLOT_STATE_EMPTY &&
        GetPlayerSlotState(Player(pID - 1)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[pID] <= 1
      ) {
        ForceAddPlayer(udg_Sheep, Player(pID - 1)!);
        Added[pID] = true;
      }
      a = a + 1;
    }
    a = 0;
    while (true) {
      if (a === 24) break;
      if (
        Added[a + 1] === false &&
        GetPlayerSlotState(Player(a)!) !== PLAYER_SLOT_STATE_LEFT &&
        GetPlayerSlotState(Player(a)!) !== PLAYER_SLOT_STATE_EMPTY &&
        GetPlayerSlotState(Player(a)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[a + 1] <= 1
      ) {
        ForceAddPlayer(udg_Wolf, Player(a)!);
      }
      a = a + 1;
    }
    udg_pickIndex = 25;
  }
  //end of quick pick
  TriggerExecute(gg_trg_setupPick);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_pick: () => void;
}
InitTrig_pick = (): void => {
  gg_trg_pick = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(0)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(1)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(2)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(3)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(4)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(5)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(6)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(7)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(8)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(9)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(10)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(11)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(12)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(13)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(14)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(15)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(16)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(17)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(18)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(19)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(20)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(21)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(22)!, "-pick", false);
  TriggerRegisterPlayerChatEvent(gg_trg_pick, Player(23)!, "-pick", false);
  TriggerAddCondition(gg_trg_pick, Condition(Trig_pick_Conditions));
  TriggerAddAction(gg_trg_pick, Trig_pick_Actions);
};
