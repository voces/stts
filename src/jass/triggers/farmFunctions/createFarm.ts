import { Timer } from "w3ts";
import { withUnitsInRange } from "util/withGroup";
import { setTimeout } from "util/setTimeout";
import { UNIT_TYPE_ID_GOLEM } from "constants";
import { MapPlayerEx } from "handles/MapPlayerEx";

let translocateTicker: Timer;
const translocates: unit[] = [];

const recentTranslocates = new Map<unit, Set<unit>>();

export const translocate = (unit: unit, pivot: unit) => {
  const mana = GetUnitState(pivot, UNIT_STATE_MANA);
  if (mana < 10) return;

  const recents = recentTranslocates.get(pivot);
  if (recents && recents.has(unit)) return;
  if (recents) recents.add(unit);
  else recentTranslocates.set(pivot, new Set([unit]));

  setTimeout(1, () => {
    const recents = recentTranslocates.get(pivot);
    if (!recents) return;
    recents.delete(unit);
    if (recents.size === 0) recentTranslocates.delete(pivot);
  });

  SetUnitState(pivot, UNIT_STATE_MANA, mana - 10);

  const dx = GetUnitX(pivot) - GetUnitX(unit);
  const dy = GetUnitY(pivot) - GetUnitY(unit);
  const e1 = AddSpecialEffect(
    "Abilities\\Spells\\Human\\Polymorph\\PolyMorphTarget.mdl",
    GetUnitX(unit),
    GetUnitY(unit),
  )!;
  const scale = 104 / RMaxBJ(RAbsBJ(dx), RAbsBJ(dy));

  SetUnitX(unit, GetUnitX(pivot) + dx * scale);
  SetUnitY(unit, GetUnitY(pivot) + dy * scale);

  TriggerSleepAction(0);

  UnitSetConstructionProgress(pivot, 100);
  const e2 = AddSpecialEffect(
    "Abilities\\Spells\\Human\\Polymorph\\PolyMorphTarget.mdl",
    GetUnitX(unit),
    GetUnitY(unit),
  )!;

  TriggerSleepAction(1);

  DestroyEffect(e1);
  DestroyEffect(e2);
};

// TODO: would scale better if we went unit -> translocate rather than translocate -> unit
const translocateTick = () => {
  for (let i = translocates.length - 1; i >= 0; i--) {
    const u = translocates[i];
    if (!UnitAlive(u)) translocates.splice(i, 1);
    const mana = GetUnitState(u, UNIT_STATE_MANA);
    if (mana < 10) continue;
    const p = MapPlayerEx.fromOwner(u);
    const picked = withUnitsInRange(
      GetUnitX(u),
      GetUnitY(u),
      152,
      (g) => GroupPickRandomUnit(g.handle),
      (u2) =>
        (u2.typeId === sheepType || u2.typeId === shepType || u2.typeId === UNIT_TYPE_ID_GOLEM) &&
        u2.isAlly(p),
    );
    if (picked) translocate(picked, u);
  }

  if (translocates.length === 0) translocateTicker.pause();
};

const Trig_createFarm_Actions = () => {
  const u = GetConstructingStructure()!;
  const playerId = GetConvertedPlayerId(
    GetOwningPlayer(u),
  );
  let i = 1;

  if (IsUnitIllusion(GetTriggerUnit()!)) {
    return;
  }

  udg_farmCount[playerId]++;
  udg_totalFarmsBuilt[playerId]++;
  SetPlayerStateBJ(ConvertedPlayer(playerId)!, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[playerId]);

  if (GetUnitTypeId(u) === translocationFarmType) {
    translocate(udg_unit[GetPlayerId(GetOwningPlayer(u)) + 1], u);
    translocates.push(u);
    if (translocates.length === 1) {
      translocateTicker.start(0.03, true, translocateTick);
    }
  }

  while (true) {
    if (i > bj_MAX_PLAYERS) break;

    if (!udg_switchOn) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(playerId)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!,
        udg_farmCount[playerId],
      );
    }

    i = i + 1;
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_createFarm: () => void;
}
InitTrig_createFarm = () => {
  gg_trg_createFarm = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_createFarm, EVENT_PLAYER_UNIT_CONSTRUCT_START);
  TriggerAddAction(gg_trg_createFarm, Trig_createFarm_Actions);

  translocateTicker = Timer.create();
};
