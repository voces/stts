//===========================================================================
// Trigger: setupPick
//===========================================================================

const focusOnPickFarm = (): void => {
  PanCameraToTimedForPlayer(
    GetEnumPlayer()!,
    GetRectCenterX(gg_rct_pickfarm),
    GetRectCenterY(gg_rct_pickfarm),
    0,
  );
};

const Trig_setupPick_Func002Func002002 = (): void => {
  RemoveUnit(GetEnumUnit()!);
};

const Trig_setupPick_Func002C = (): boolean => {
  if ((!(udg_pickIndex > udg_playerCount))) {
    return false;
  }
  return true;
};

const Trig_setupPick_Actions = (): void => {
  ClearTextMessagesBJ(GetPlayersAll()!);
  while (true) {
    if (
      (((GetPlayerSlotState(udg_playerList[udg_pickIndex]) !==
        PLAYER_SLOT_STATE_LEFT) ||
        (GetPlayerSlotState(udg_playerList[udg_pickIndex]) ===
          PLAYER_SLOT_STATE_PLAYING) ||
        (udg_pickIndex >= udg_playerCount)) &&
        (udg_AFK[GetConvertedPlayerId(udg_playerList[udg_pickIndex])] <= 1))
    ) break;
    udg_pickIndex = udg_pickIndex + 1;
  }
  if ((Trig_setupPick_Func002C())) {
    udg_Teams = TEAMS_LOCK;
    TriggerExecute(gg_trg_createSheep);
  } else {
    udg_atempgroup = GetUnitsInRectAll(gg_rct_pickfarm)!;
    ForGroupBJ(udg_atempgroup, Trig_setupPick_Func002Func002002);
    ForForce(GetPlayersAll()!, focusOnPickFarm);
    DestroyGroup(udg_atempgroup);
    bj_lastCreatedUnit = CreateUnit(
      udg_Custom,
      pick,
      GetRectCenterX(gg_rct_pickfarm),
      GetRectCenterY(gg_rct_pickfarm),
      270,
    );
    SetUnitColor(udg_farm, GetPlayerColor(udg_playerList[udg_pickIndex]));
    udg_farm = GetLastCreatedUnit()!;
    SelectUnitSingle(GetLastCreatedUnit()!);
    DisplayTimedTextToForce(
      GetForceOfPlayer(udg_Custom)!,
      30,
      `Press |CFF0054A6S|r                                    Press |CFFED1C24W|r
For Sheep                                    For Wolf`,
    );
    DisplayTimedTextToForce(
      GetForceOfPlayer(udg_Custom)!,
      30,
      "                                                        " +
        (udg_colorString[GetConvertedPlayerId(udg_playerList[udg_pickIndex])] +
          GetPlayerName(udg_playerList[udg_pickIndex])),
    );
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_setupPick: () => void;
}
InitTrig_setupPick = (): void => {
  gg_trg_setupPick = CreateTrigger();
  TriggerAddAction(gg_trg_setupPick, Trig_setupPick_Actions);
};
