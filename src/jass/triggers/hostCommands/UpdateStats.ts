import { MapPlayerEx } from "handles/MapPlayerEx";

const Trig_UpdateStats_forEnumPlayer = () => {
  const p = MapPlayerEx.fromEnum()!;
  if (p.controller !== MAP_CONTROL_USER) return;

  MMD_FlagPlayer(p.handle, MMD_FLAG_DRAWER);

  const setValue = (
    name: string,
    value: string | number,
    type: typeof MMD_TYPE_INT | typeof MMD_TYPE_REAL = MMD_TYPE_INT,
  ) => {
    const v = typeof value === "string" ? value : type === MMD_TYPE_INT ? I2S(value)! : R2S(value)!;
    MMD__update_value(name, p.handle, MMD__ops[MMD_OP_SET], v, type);
  };

  setValue("Farms Built", udg_totalFarmsBuilt[p.cid]);
  udg_averageFarmCountBeforeWolves[p.cid] = I2R(udg_totalFarmCountBeforeWolves[p.cid]) / I2R(udg_sheepCount[p.cid]);
  setValue("Average Farm Count Before Wolves", udg_averageFarmCountBeforeWolves[p.cid], MMD_TYPE_REAL);
  setValue("Saves", udg_totalSaves[p.cid]);
  setValue("Kills", udg_totalKills[p.cid]);
  setValue("Wins", udg_wins[p.cid]);
  setValue("Versus Wins", udg_vwins[p.cid]);
  setValue("Last Sheep Standing", udg_lssCounter[p.cid]);
  setValue("First Blood Deaths", udg_firstbloodDeathCounter[p.cid]);
  setValue("First Blood Kills", udg_firstbloodKillCounter[p.cid]);
  setValue("Wolf Gold Given", wolfGoldGiven[p.id]);
  setValue("Sheep Gold Given", sheepGoldGiven[p.id]);
  setValue("Spirit Gold Given", spiritGoldGiven[p.id]);
  setValue("Sheep Times", TimerGetElapsed(udg_sheepTimer[p.cid]), MMD_TYPE_REAL);
  setValue("Times", s___times_pTime[s__times_pTime[playerTimes[p.id]] + p.id], MMD_TYPE_REAL);
  MMD_UpdateValueString("Round Times", p.handle, udg_roundTimes[p.cid]);
  MMD_UpdateValueString("Sheep Survived", p.handle, udg_sheepSurvived[p.cid]);
  if (udg_QDeathTime[p.cid] < 9999) setValue("Quickest Death", udg_QDeathTime[p.cid], MMD_TYPE_REAL);
};

const Trig_UpdateStats_Actions = () => {
  ForForce(GetPlayersAll()!, Trig_UpdateStats_forEnumPlayer);
  MMD__LogEvent("end", 0, "");
  TriggerSleepAction(0.3);
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    30,
    `                              |cff00aeefW3MMD|r stats have been saved to the replay!

Upload your replays to |cff00aeefhttps://wc3stats.com/|r`,
  );
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_UpdateStats: () => void;
}
InitTrig_UpdateStats = () => {
  gg_trg_UpdateStats = CreateTrigger();
  TriggerAddAction(gg_trg_UpdateStats, Trig_UpdateStats_Actions);
};
