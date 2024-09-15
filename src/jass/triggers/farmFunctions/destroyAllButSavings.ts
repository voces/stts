import { UNIT_TYPE_ID_MONEY_FARM } from "constants";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { removeEnumUnit } from "util/removeEnumUnit";

const Trig_destroyAllButSavings_Func002002002 = () => {
  return IsUnitType(GetFilterUnit()!, UNIT_TYPE_STRUCTURE) &&
    GetUnitTypeId(GetFilterUnit()!) !== UNIT_TYPE_ID_MONEY_FARM;
};

const Trig_destroyAllButSavings_Actions = () => {
  cid = GetConvertedPlayerId(GetTriggerPlayer()!);
  udg_atempgroup = GetUnitsOfPlayerMatching(
    ConvertedPlayer(cid)!,
    Condition(Trig_destroyAllButSavings_Func002002002),
  )!;
  ForGroupBJ(udg_atempgroup, removeEnumUnit);
  udg_farmCount[cid] = CountLivingPlayerUnitsOfTypeId(
    UNIT_TYPE_ID_MONEY_FARM,
    ConvertedPlayer(cid)!,
  );
  SetPlayerStateBJ(
    ConvertedPlayer(cid)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[cid],
  );
  DestroyGroup(udg_atempgroup);
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if (!udg_switchOn) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(cid)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_farmCount[cid],
      );
    }
    bj_forLoopAIndex = bj_forLoopAIndex + 1;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_destroyAllButSavings: () => void;
}
InitTrig_destroyAllButSavings = () => {
  gg_trg_destroyAllButSavings = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_destroyAllButSavings, "-ds");
  TriggerAddAction(
    gg_trg_destroyAllButSavings,
    Trig_destroyAllButSavings_Actions,
  );
};
