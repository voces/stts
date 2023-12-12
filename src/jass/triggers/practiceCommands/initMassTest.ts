import { removeEnumUnit } from "../../../util/removeEnumUnit";

const Trig_initMassTest_Func005002002 = () => {
  return GetBooleanOr(
    IsUnitType(GetFilterUnit()!, UNIT_TYPE_STRUCTURE) === true,
    GetBooleanOr(
      IsUnitIllusionBJ(GetFilterUnit()!) === true,
      GetUnitTypeId(GetFilterUnit()!) === FourCC("ngst"),
    ),
  );
};

const Trig_initMassTest_Func008002 = () => {
  RemoveItem(GetEnumItem()!);
};

const Trig_initMassTest_Func010A = () => {
  udg_farmCount[GetConvertedPlayerId(GetEnumPlayer()!)] = 0;
  SetPlayerStateBJ(GetEnumPlayer()!, PLAYER_STATE_RESOURCE_LUMBER, 0);
  udg_atemploc = GetRectCenter(wolfSpawn)!;
  SetUnitPositionLocFacingBJ(
    udg_unit2[GetConvertedPlayerId(GetEnumPlayer()!)],
    udg_atemploc,
    bj_UNIT_FACING,
  );
  SetUnitOwner(
    udg_unit2[GetConvertedPlayerId(GetEnumPlayer()!)],
    Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    false,
  );
  IssueImmediateOrderBJ(
    udg_unit2[GetConvertedPlayerId(GetEnumPlayer()!)],
    "holdposition",
  );
  RemoveLocation(udg_atemploc);
  udg_atemploc = GetRectCenter(
    udg_startLocation[GetConvertedPlayerId(GetEnumPlayer()!)],
  )!;
  SetUnitPositionLocFacingBJ(
    udg_unit[GetConvertedPlayerId(GetEnumPlayer()!)],
    udg_atemploc,
    bj_UNIT_FACING,
  );
  PanCameraToTimedLocForPlayer(GetEnumPlayer()!, udg_atemploc, 0);
  RemoveLocation(udg_atemploc);
  SelectUnitForPlayerSingle(
    udg_unit[GetConvertedPlayerId(GetEnumPlayer()!)],
    GetEnumPlayer()!,
  );
};

const Trig_initMassTest_Actions = () => {
  DisableTrigger(gg_trg_mass);
  DisableTrigger(gg_trg_redo);
  ClearTextMessagesBJ(GetPlayersAll()!);
  MMD__LogEvent("massingTest", 1, " " + MMD__pack((R2S(udg_massTime))!));
  udg_atempgroup = GetUnitsInRectMatching(
    GetPlayableMapRect()!,
    Condition(Trig_initMassTest_Func005002002),
  )!;
  ForGroupBJ(udg_atempgroup, removeEnumUnit);
  DestroyGroup(udg_atempgroup);
  EnumItemsInRectBJ(GetPlayableMapRect()!, Trig_initMassTest_Func008002);
  PauseAllUnitsBJ(true);
  ForForce(GetPlayersAll()!, Trig_initMassTest_Func010A);
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    "                              |cff00aeef" +
      (udg_massTimeString + " mass test"),
  );
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    1,
    "                              |cffffcc00Begin massing in 3...",
  );
  if (udg_Teams !== 2) {
    return;
  }
  TriggerSleepAction(1);
  if (udg_Teams !== 2) {
    return;
  }
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    1,
    "                              |cffffcc00Begin massing in 2...",
  );
  TriggerSleepAction(1);
  if (udg_Teams !== 2) {
    return;
  }
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    1,
    "                              |cffffcc00Begin massing in 1...",
  );
  TriggerSleepAction(1);
  if (udg_Teams !== 2) {
    return;
  }
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    "                              |cffffcc00Type|r |cffed1c24-stop|r |cffffcc00to go back to practicing or |cffed1c24-redo|r |cffffcc00to try again.|r",
  );
  PauseAllUnitsBJ(false);
  StartTimerBJ(udg_massTimer, false, udg_massTime);
  TimerDialogDisplayBJ(true, udg_massTimerWindow);
  PauseTimerBJ(true, udg_Timer);
  TimerDialogDisplayBJ(false, udg_TimerWindow);
  EnableTrigger(gg_trg_reset);
  EnableTrigger(gg_trg_redo);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_initMassTest: () => void;
}
InitTrig_initMassTest = () => {
  gg_trg_initMassTest = CreateTrigger();
  TriggerAddAction(gg_trg_initMassTest, Trig_initMassTest_Actions);
};
