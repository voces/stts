import { UNIT_TYPE_ID_HAY_TRAP } from "constants";
import { setTimeout } from "util/setTimeout";
import { Effect } from "w3ts";

const Trig_farmDies_Actions = () => {
  const u = GetDyingUnit()!;
  const dyingPlayer = GetOwningPlayer(u);
  const pid = GetConvertedPlayerId(dyingPlayer);
  const killingPlayer = GetOwningPlayer(GetKillingUnit()!);

  if (GetUnitTypeId(u) === UNIT_TYPE_ID_HAY_TRAP) {
    const e = Effect.create("Objects/Spawnmodels/Human/HCancelDeath/HCancelDeath", GetUnitX(u), GetUnitY(u));
    if (e) setTimeout(2, () => e.destroy());
    RemoveUnit(u);
  }

  if (IsPlayerEnemy(dyingPlayer, killingPlayer)) {
    let amount = GetUnitPointValue(u);
    if (UnitHasItemOfTypeBJ(GetKillingUnit()!, FourCC("scyt"))) amount = amount * 2 + 1;

    AdjustPlayerStateBJ(amount, killingPlayer, PLAYER_STATE_RESOURCE_GOLD);
    GoldText(amount, GetKillingUnit()!);
  }

  if (udg_farmCount[pid] > 0) udg_farmCount[pid]--;
  SetPlayerState(dyingPlayer, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[pid]);

  if (!udg_switchOn) {
    LeaderboardSetPlayerItemValueBJ(
      dyingPlayer,
      PlayerGetLeaderboardBJ(dyingPlayer)!,
      udg_farmCount[pid],
    );
  }
};

export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_farmDies: () => void;
}
InitTrig_farmDies = () => {
  gg_trg_farmDies = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_farmDies, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_farmDies,
    Condition(() => IsUnitType(GetDyingUnit()!, UNIT_TYPE_STRUCTURE)),
  );
  TriggerAddAction(gg_trg_farmDies, Trig_farmDies_Actions);
};
