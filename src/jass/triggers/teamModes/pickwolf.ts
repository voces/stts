//===========================================================================
// Trigger: pickwolf
//===========================================================================
const Trig_pickwolf_Conditions = () => {
  if ((!(GetTrainedUnitType() === FourCC("EC03")))) {
    return false;
  }
  return true;
};

const Trig_pickwolf_Actions = () => {
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
InitTrig_pickwolf = () => {
  gg_trg_pickwolf = CreateTrigger();
  DisableTrigger(gg_trg_pickwolf);
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    TriggerRegisterPlayerUnitEventSimple(gg_trg_pickwolf, Player(i)!, EVENT_PLAYER_UNIT_TRAIN_START);
  }
  TriggerAddCondition(gg_trg_pickwolf, Condition(Trig_pickwolf_Conditions));
  TriggerAddAction(gg_trg_pickwolf, Trig_pickwolf_Actions);
};
