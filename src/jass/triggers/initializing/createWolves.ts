import { ABILITY_TYPE_ID_GIVE_ALLY_GOLD_WOLF } from "constants";
import { startRuneTimer } from "functions/runes";
import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { terrain } from "settings/settings";
import { forEachPlayer } from "util/forEachPlayer";

const createWolf = () => {
  const p = GetEnumPlayer()!;
  const cid = GetConvertedPlayerId(p);
  if (!udg_practiceOn && udg_AFK[cid] === AFK_PLAYING) {
    PanCameraToTimedForPlayer(p, GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf), 0);
  }
  const wolf = CreateUnit(p, shepType, GetRectCenterX(terrain.wolf), GetRectCenterY(terrain.wolf), 270)!;
  if (udg_freakHotkeys[cid]) {
    UnitRemoveAbility(wolf, FourCC("A00S"));
    UnitRemoveAbility(wolf, FourCC("A018"));
    UnitAddAbility(wolf, FourCC("A01H"));
    UnitAddAbility(wolf, FourCC("A01F"));
  }
  if (udg_practiceOn) {
    UnitRemoveAbility(wolf, ABILITY_TYPE_ID_GIVE_ALLY_GOLD_WOLF);
    SetUnitOwner(wolf, Player(bj_PLAYER_NEUTRAL_VICTIM)!, false);
    IssueImmediateOrderBJ(wolf, "holdposition");
  } else {
    if (udg_switchOn) UnitRemoveAbility(wolf, ABILITY_TYPE_ID_GIVE_ALLY_GOLD_WOLF);
    SelectUnitForPlayerSingle(wolf, p);
    ForceUICancelBJ(p);
    udg_unit[cid] = wolf;
  }
  SuspendHeroXPBJ(false, wolf);
  udg_unit2[cid] = wolf;
};

const Trig_createWolves_Actions = () => {
  if (autoCancel()) return;

  ForForce(udg_Wolf, createWolf);
  ForceEx.sheep.for((s) => udg_totalFarmCountBeforeWolves[s.id].push(udg_farmCount[s.id + 1]));

  wolvesCreated = true;

  DisplayTimedTextToForce(udg_Sheep, 5, "The wolves have been set free!");

  TimerDialogDisplayBJ(false, udg_wolfTimerWindow);
  PauseTimerBJ(false, udg_Timer);
  TimerDialogDisplayBJ(true, udg_TimerWindow);
  if (!udg_practiceOn && !udg_switchOn && !vampOn) {
    startRuneTimer();
    ForForce(udg_Sheep, () => {
      const cid = MapPlayerEx.fromEnum()!.cid;
      if (udg_firstRound[cid]) {
        TimerStart(udg_sheepTimer[cid], 99999, false, null);
        udg_firstRound[cid] = false;
      } else PauseTimerBJ(false, udg_sheepTimer[cid]);
    });
  }

  if (udg_dummyWisps > 0) {
    EnableTrigger(gg_trg_dummyWisps);
    forEachPlayer((p) => SetPlayerAllianceStateBJ(Player(bj_PLAYER_NEUTRAL_VICTIM)!, p.handle, bj_ALLIANCE_NEUTRAL));
    for (let i = 0; i < udg_dummyWisps; i++) {
      CreateUnit(Player(bj_PLAYER_NEUTRAL_VICTIM)!, wispType, RandomX(terrain.wisp), RandomY(terrain.wisp), 270);
    }
  }

  if (udg_mapShrink || udg_mapExpand) {
    udg_blightAlterationTime = (udg_time - (udg_time / udg_blightAlterations)) /
      udg_blightAlterations;
    TimerStart(udg_mapSizeChangeTimer, udg_blightAlterationTime, false, null);
    TimerDialogDisplayBJ(true, udg_mapSizeChangeTimerWindow);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_createWolves: () => void;
}
InitTrig_createWolves = () => {
  gg_trg_createWolves = CreateTrigger();
  TriggerRegisterTimerExpireEventBJ(gg_trg_createWolves, udg_wolfTimer);
  TriggerAddAction(gg_trg_createWolves, Trig_createWolves_Actions);
};
