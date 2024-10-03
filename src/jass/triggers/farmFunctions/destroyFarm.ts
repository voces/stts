import { MapPlayerEx } from "handles/MapPlayerEx";

const Trig_destroyFarm_Actions = () => {
  const u = GetTriggerUnit()!;
  const owner = GetOwningPlayer(u);
  const ownerId = GetConvertedPlayerId(owner);
  const desels: MapPlayerEx[] = [];

  if (udg_farmCount[ownerId] > 0) udg_farmCount[ownerId]--;
  SetPlayerStateBJ(owner, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[ownerId]);

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i)!;
    if (IsUnitSelected(u, p.handle)) desels.push(p);
  }

  KillUnit(u);
  RemoveUnit(u);

  for (const p of desels) {
    if (p.getSelection().length === 0 && UnitAlive(udg_unit[p.cid])) {
      SelectUnitAddForPlayer(udg_unit[p.cid], p.handle);
    }
  }

  if (udg_switchOn) return;
  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    LeaderboardSetPlayerItemValueBJ(owner, PlayerGetLeaderboard(ConvertedPlayer(i)!)!, udg_farmCount[ownerId]);
  }
};

export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_destroyFarm: () => void;
}
InitTrig_destroyFarm = () => {
  gg_trg_destroyFarm = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_destroyFarm, EVENT_PLAYER_UNIT_TRAIN_START);
  TriggerAddCondition(gg_trg_destroyFarm, Condition(() => GetTrainedUnitType() === FourCC("nC13")));
  TriggerAddAction(gg_trg_destroyFarm, Trig_destroyFarm_Actions);
};
