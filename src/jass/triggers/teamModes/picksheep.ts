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
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    TriggerRegisterPlayerUnitEventSimple(gg_trg_picksheep, Player(i)!, EVENT_PLAYER_UNIT_TRAIN_START);
  }
  TriggerAddCondition(gg_trg_picksheep, Condition(Trig_picksheep_Conditions));
  TriggerAddAction(gg_trg_picksheep, Trig_picksheep_Actions);
};
