//===========================================================================
// Trigger: pickwolf
//===========================================================================
const Trig_pickwolf_Conditions = (): boolean => {
  if ((!(GetTrainedUnitType() === FourCC("EC03")))) {
    return false;
  }
  return true;
};

const Trig_pickwolf_Actions = (): void => {
  ForceAddPlayerSimple(udg_playerList[udg_pickIndex], udg_Wolf);
  LeaderboardSetPlayerItemLabelBJ(
    udg_playerList[udg_pickIndex],
    GetLastCreatedLeaderboard()!,
    "|CFFED1C24Wolf",
  );
  udg_atempplayer = GetForceOfPlayer(udg_playerList[udg_pickIndex])!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    30,
    "                             You've Been Added To The Wolf Team.",
  );
  DestroyForce(udg_atempplayer);
  udg_pickIndex = udg_pickIndex + 1;
  TriggerExecute(gg_trg_setupPick);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_pickwolf: () => void;
}
InitTrig_pickwolf = (): void => {
  gg_trg_pickwolf = CreateTrigger();
  DisableTrigger(gg_trg_pickwolf);
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(0)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(1)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(2)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(3)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(4)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(5)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(6)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(7)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(8)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(9)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(10)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(11)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(12)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(13)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(14)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(15)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(16)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(17)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(18)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(19)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(20)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(21)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(22)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_pickwolf,
    Player(23)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerAddCondition(gg_trg_pickwolf, Condition(Trig_pickwolf_Conditions));
  TriggerAddAction(gg_trg_pickwolf, Trig_pickwolf_Actions);
};
