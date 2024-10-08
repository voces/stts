import { terrain } from "settings/settings";
import { setTimeout } from "util/setTimeout";

const Trig_dummyWisps_Conditions = () => {
  if ((!(GetUnitTypeId(GetTriggerUnit()!) === FourCC("e000")))) {
    return false;
  }
  return true;
};

const Trig_dummyWisps_Actions = () => {
  cid = GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!));
  udg_saves[cid] = udg_saves[cid] + 1;
  DisplayTextToForce(
    GetPlayersAll()!,
    udg_colorString[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))] +
      GetPlayerName(GetOwningPlayer(GetKillingUnit()!)) + "|r killed a spirit for 100 gold!",
  );
  AdjustPlayerStateBJ(
    100,
    GetOwningPlayer(GetKillingUnit()!),
    PLAYER_STATE_RESOURCE_GOLD,
  );
  CreateUnit(Player(bj_PLAYER_NEUTRAL_VICTIM)!, wispType, RandomX(terrain.wisp), RandomY(terrain.wisp), 0);
  if (udg_wispPoints > 0 && udg_saves[cid] >= udg_wispPoints) {
    setTimeout(0.1, () => TriggerExecute(gg_trg_cancel));
  }
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if (udg_wispPoints > 0) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(cid)!,
        PlayerGetLeaderboard(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_saves[cid],
      );
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_dummyWisps: () => void;
}
InitTrig_dummyWisps = () => {
  gg_trg_dummyWisps = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_dummyWisps, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(gg_trg_dummyWisps, Condition(Trig_dummyWisps_Conditions));
  TriggerAddAction(gg_trg_dummyWisps, Trig_dummyWisps_Actions);
};
