import { Timer } from "w3ts";
import { withUnitsInRange } from "util/withGroup";
import { setTimeout } from "util/setTimeout";
import { UNIT_TYPE_ID_FARM, UNIT_TYPE_ID_GOLEM, UNIT_TYPE_ID_STRONG_FARM, UNIT_TYPE_ID_UPGRADED_FARM } from "constants";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { getFarmColor } from "util/getFarmColor";

let translocateTicker: Timer;
const translocates: unit[] = [];

const recentTranslocates = new Map<unit, Set<unit>>();

export const translocate = (unit: unit, pivot: unit, adjustGold = false) => {
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

  SetUnitPosition(unit, GetUnitX(pivot) + dx * scale, GetUnitY(pivot) + dy * scale);
  // We need to adjust gold as using SetUnitPosition on the builder in response to EVENT_PLAYER_UNIT_CONSTRUCT_START
  // cancels the gold cost
  if (adjustGold) {
    const p = GetOwningPlayer(pivot);
    SetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD, GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) - 75);
  }

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
  const p = GetOwningPlayer(u);
  const cid = GetConvertedPlayerId(p);

  if (IsUnitIllusion(GetTriggerUnit()!)) return;

  udg_farmCount[cid]++;
  udg_totalFarmsBuilt[cid]++;
  SetPlayerState(p, PLAYER_STATE_RESOURCE_LUMBER, udg_farmCount[cid]);

  if (GetUnitTypeId(u) === translocationFarmType) {
    translocate(udg_unit[cid], u, true);
    translocates.push(u);
    if (translocates.length === 1) translocateTicker.start(0.03, true, translocateTick);
  }

  const unitType = GetUnitTypeId(u);
  if (
    unitType === UNIT_TYPE_ID_FARM || unitType === UNIT_TYPE_ID_UPGRADED_FARM || unitType === UNIT_TYPE_ID_STRONG_FARM
  ) {
    const handicap = GetPlayerHandicap(p);
    if (handicap !== 1) SetUnitVertexColor(u, ...getFarmColor(u, true));
  }

  if (udg_switchOn) return;
  for (let i = 1; i <= bj_MAX_PLAYERS; i++) {
    LeaderboardSetPlayerItemValueBJ(
      ConvertedPlayer(cid)!,
      PlayerGetLeaderboard(ConvertedPlayer(i)!)!,
      udg_farmCount[cid],
    );
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
