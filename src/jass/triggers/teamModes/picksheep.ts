//===========================================================================
// Trigger: picksheep
//===========================================================================
const Trig_picksheep_Conditions = () => {
  if ((!(GetTrainedUnitType() === sheepType))) {
    return false;
  }
  return true;
};

const Trig_picksheep_Actions = () => {
  ForceAddPlayerSimple(udg_playerList[udg_pickIndex], udg_Sheep);
  LeaderboardSetPlayerItemLabelBJ(
    udg_playerList[udg_pickIndex],
    GetLastCreatedLeaderboard()!,
    "|CFF00AEEFSheep",
  );
  udg_atempplayer = GetForceOfPlayer(udg_playerList[udg_pickIndex])!;
  DisplayTimedTextToForce(
    udg_atempplayer,
    30,
    "                             You've Been Added To The Sheep Team.",
  );
  DestroyForce(udg_atempplayer);
  udg_pickIndex = udg_pickIndex + 1;
  TriggerExecute(gg_trg_setupPick);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_picksheep: () => void;
}
InitTrig_picksheep = () => {
  gg_trg_picksheep = CreateTrigger();
  DisableTrigger(gg_trg_picksheep);
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(0)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(1)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(2)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(3)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(4)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(5)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(6)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(7)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(8)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(9)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(10)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(11)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(12)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(13)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(14)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(15)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(16)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(17)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(18)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(19)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(20)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(21)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(22)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerRegisterPlayerUnitEventSimple(
    gg_trg_picksheep,
    Player(23)!,
    EVENT_PLAYER_UNIT_TRAIN_START,
  );
  TriggerAddCondition(gg_trg_picksheep, Condition(Trig_picksheep_Conditions));
  TriggerAddAction(gg_trg_picksheep, Trig_picksheep_Actions);
};
