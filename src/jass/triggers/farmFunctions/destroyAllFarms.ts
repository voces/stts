import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { removeEnumUnit } from "util/removeEnumUnit";

export const Trig_destroyAllFarms_Func002002002 = () => {
  return (IsUnitType(GetFilterUnit()!, UNIT_TYPE_STRUCTURE) === true);
};

const Trig_destroyAllFarms_Actions = () => {
  udg_atempint = GetConvertedPlayerId(GetTriggerPlayer()!);
  udg_atempgroup = GetUnitsOfPlayerMatching(
    ConvertedPlayer(udg_atempint)!,
    Condition(Trig_destroyAllFarms_Func002002002),
  )!;
  udg_farmCount[udg_atempint] = 0;
  SetPlayerStateBJ(
    ConvertedPlayer(udg_atempint)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[udg_atempint],
  );
  ForGroupBJ(udg_atempgroup, removeEnumUnit);
  DestroyGroup(udg_atempgroup);
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if (!udg_switchOn) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_farmCount[udg_atempint],
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
