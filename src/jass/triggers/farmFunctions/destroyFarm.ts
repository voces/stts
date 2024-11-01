import { MapPlayerEx } from "handles/MapPlayerEx";

const Trig_destroyFarm_Actions = () => {
  const u = GetTriggerUnit()!;
  const desels: MapPlayerEx[] = [];

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i)!;
    if (IsUnitSelected(u, p.handle)) desels.push(p);
  }

  KillUnit(u);
  RemoveUnit(u);

  for (const p of desels) {
    if (p.getSelection().length === 0 && UnitAlive(udg_unit[p.cid])) {
      SelectUnitForPlayerSingle(udg_unit[p.cid], p.handle);
    }
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
