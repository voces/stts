import { addScriptHook, W3TS_HOOK } from "w3ts";

const Trig_setupPick_Actions = () => {
  ClearTextMessagesBJ(GetPlayersAll()!);
  while (true) {
    if (
      GetPlayerSlotState(udg_playerList[udg_pickIndex]) === PLAYER_SLOT_STATE_PLAYING ||
      udg_pickIndex >= udg_playerCount &&
        udg_AFK[GetConvertedPlayerId(udg_playerList[udg_pickIndex])] <= 1
    ) break;
    udg_pickIndex = udg_pickIndex + 1;
  }
  if (udg_pickIndex > udg_playerCount) { // Everyone picked
    udg_Teams = TEAMS_LOCK_IE_PLAYING;
    TriggerExecute(gg_trg_createSheep);
    return;
  }

  removeAllUnits();

  udg_farm = CreateUnit(
    udg_Custom,
    pickFarmType,
    GetRectCenterX(gg_rct_pickfarm),
    GetRectCenterY(gg_rct_pickfarm),
    270,
  )!;
  SetUnitColor(udg_farm, GetPlayerColor(udg_playerList[udg_pickIndex]));
  PanCameraToTimed(GetUnitX(udg_farm), GetUnitY(udg_farm), 0.1);
  SelectUnitSingle(udg_farm);

  DisplayTimedTextToForce(
    GetForceOfPlayer(udg_Custom)!,
    30,
    `Press |CFF0054A6S|r                                    Press |CFFED1C24W|r
For Sheep                              For Wolf`.split("\n").map((v) => `${" ".repeat(70)}${v}`).join(
      "\n",
    ),
  );
  DisplayTimedTextToForce(
    GetForceOfPlayer(udg_Custom)!,
    30,
    " ".repeat(87) +
      udg_colorString[GetConvertedPlayerId(udg_playerList[udg_pickIndex])] +
      GetPlayerName(udg_playerList[udg_pickIndex]),
  );
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  gg_trg_setupPick = CreateTrigger();
  TriggerAddAction(gg_trg_setupPick, Trig_setupPick_Actions);
});
