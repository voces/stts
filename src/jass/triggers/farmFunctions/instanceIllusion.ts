import { UNIT_TYPE_ID_FARM, UNIT_TYPE_ID_STRONG_FARM, UNIT_TYPE_ID_UPGRADED_FARM } from "constants";
import { game } from "util/game";
import { getFarmColor } from "util/getFarmColor";

export const UNIT_TYPE_ID_ILLUSION_FARM = FourCC("n004");

const setVertexColor = (unit: unit) => {
  if (GetPlayerAlliance(GetOwningPlayer(unit), GetLocalPlayer(), ALLIANCE_SHARED_VISION)) {
    const [r, g, b, a] = getFarmColor(unit);
    SetUnitVertexColor(
      unit,
      Math.round(255 * r * 0.5),
      Math.round(255 * g),
      Math.round(255 * b * 0.5),
      Math.round(255 * a * 0.75),
    );
  } else SetUnitVertexColor(unit, ...getFarmColor(unit, true));
};

const Trig_instanceIllusion_Actions = () => {
  const u = GetTriggerUnit()!;
  const desels: player[] = [];

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = Player(i)!;
    if (IsUnitSelected(u, p)) desels.push(p);
  }

  const replacement = ReplaceUnitBJ(GetTriggerUnit()!, UNIT_TYPE_ID_ILLUSION_FARM, bj_UNIT_STATE_METHOD_RELATIVE)!;
  setVertexColor(replacement);
  AdjustPlayerStateBJ(-20, GetOwningPlayer(GetLastReplacedUnitBJ()!), PLAYER_STATE_RESOURCE_GOLD);

  for (const p of desels) SelectUnitAddForPlayer(replacement, p);
};

export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_instanceIllusion: () => void;
}
InitTrig_instanceIllusion = () => {
  gg_trg_instanceIllusion = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_instanceIllusion, EVENT_PLAYER_UNIT_TRAIN_START);
  TriggerAddCondition(gg_trg_instanceIllusion, Condition(() => GetTrainedUnitType() === UNIT_TYPE_ID_ILLUSION_FARM));
  TriggerAddAction(gg_trg_instanceIllusion, Trig_instanceIllusion_Actions);
};

game.onUpgradeCancel(({ unit }) => {
  const unitType = unit.typeId;
  if (unitType === UNIT_TYPE_ID_ILLUSION_FARM) setVertexColor(unit.handle);
  else if (
    unitType === UNIT_TYPE_ID_FARM || unitType === UNIT_TYPE_ID_UPGRADED_FARM || unitType === UNIT_TYPE_ID_STRONG_FARM
  ) unit.setVertexColor(...getFarmColor(unit.handle, true));
});
