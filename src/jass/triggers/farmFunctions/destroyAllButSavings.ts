import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { removeEnumUnit } from "util/removeEnumUnit";

const Trig_destroyAllButSavings_Func002002002 = () => {
  return GetBooleanAnd(
    IsUnitType(GetFilterUnit()!, UNIT_TYPE_STRUCTURE) === true,
    GetUnitTypeId(GetFilterUnit()!) !== FourCC("h005"),
  );
};

const Trig_destroyAllButSavings_Func007Func001C = () => {
  if ((!(udg_dummyWisps > 0))) {
    return false;
  }
  return true;
};

const Trig_destroyAllButSavings_Actions = () => {
  udg_atempint = GetConvertedPlayerId(GetTriggerPlayer()!);
  udg_atempgroup = GetUnitsOfPlayerMatching(
    ConvertedPlayer(udg_atempint)!,
    Condition(Trig_destroyAllButSavings_Func002002002),
  )!;
  ForGroupBJ(udg_atempgroup, removeEnumUnit);
  udg_farmCount[udg_atempint] = CountLivingPlayerUnitsOfTypeId(
    FourCC("h005"),
    ConvertedPlayer(udg_atempint)!,
  );
  SetPlayerStateBJ(
    ConvertedPlayer(udg_atempint)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[udg_atempint],
  );
  DestroyGroup(udg_atempgroup);
  bj_forLoopAIndex = 1;
  bj_forLoopAIndexEnd = udg_lastPlayer;
  while (true) {
    if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
    if ((Trig_destroyAllButSavings_Func007Func001C())) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(udg_atempint)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(GetForLoopIndexA())!)!,
        udg_saves[udg_atempint],
      );
    } else {
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
