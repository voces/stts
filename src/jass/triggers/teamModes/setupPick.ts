import { removeEnumUnit } from "../../../util/removeEnumUnit";

const focusOnPickFarm = () => {
  PanCameraToTimedForPlayer(
    GetEnumPlayer()!,
    GetRectCenterX(gg_rct_pickfarm),
    GetRectCenterY(gg_rct_pickfarm),
    0,
  );
};

const Trig_setupPick_Actions = () => {
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
  if (udg_pickIndex > udg_playerCount) { // Everyone picked
    udg_Teams = TEAMS_LOCK_IE_PLAYING;
    TriggerExecute(gg_trg_createSheep);
  } else {
    udg_atempgroup = GetUnitsInRectAll(gg_rct_pickfarm)!;
    ForGroupBJ(udg_atempgroup, removeEnumUnit);
    ForForce(GetPlayersAll()!, focusOnPickFarm);
    DestroyGroup(udg_atempgroup);
    bj_lastCreatedUnit = CreateUnit(
      udg_Custom,
      pickFarmType,
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

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_setupPick: () => void;
}
InitTrig_setupPick = () => {
  gg_trg_setupPick = CreateTrigger();
  TriggerAddAction(gg_trg_setupPick, Trig_setupPick_Actions);
};
