import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { removeEnumUnit } from "util/removeEnumUnit";

export const isFilterUnitStructure = () => IsUnitType(GetFilterUnit()!, UNIT_TYPE_STRUCTURE);

const Trig_destroyAllFarms_Actions = () => {
  cid = GetConvertedPlayerId(GetTriggerPlayer()!);
  udg_atempgroup = GetUnitsOfPlayerMatching(ConvertedPlayer(cid)!, Condition(isFilterUnitStructure))!;
  udg_farmCount[cid] = 0;
  SetPlayerStateBJ(
    ConvertedPlayer(cid)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[cid],
  );
  ForGroupBJ(udg_atempgroup, removeEnumUnit);
  DestroyGroup(udg_atempgroup);
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if (!udg_switchOn) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(cid)!,
        PlayerGetLeaderboard(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_farmCount[cid],
      );
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_destroyAllFarms: () => void;
}
InitTrig_destroyAllFarms = () => {
  gg_trg_destroyAllFarms = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_destroyAllFarms, "-d");
  TriggerAddAction(gg_trg_destroyAllFarms, Trig_destroyAllFarms_Actions);
};
