//===========================================================================
// Trigger: Ward gold
//===========================================================================

import { Trigger, Unit } from "w3ts";
import { withUnitsInRange } from "../../../util/withGroup";

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Ward_gold: () => void;
}
InitTrig_Ward_gold = () => {
  gg_trg_Ward_gold = CreateTrigger();
  const t = Trigger.fromHandle(gg_trg_Ward_gold)!;
  t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);

  t.addCondition(() => {
    const killingType = GetUnitTypeId(GetKillingUnit()!);
    return (killingType === sheepType || killingType === FourCC("h001")) &&
      GetUnitTypeId(GetDyingUnit()!) === FourCC("oeye");
  });

  t.addAction(() => {
    const dyingUnit = Unit.fromHandle(GetDyingUnit())!;
    const x = dyingUnit.x;
    const y = dyingUnit.y;
    const killingUnit = Unit.fromHandle(GetKillingUnit())!;

    AdjustPlayerStateBJ(
      4,
      killingUnit.owner.handle,
      PLAYER_STATE_RESOURCE_GOLD,
    );
    GoldText(4, killingUnit.handle);

    withUnitsInRange(x, y, 256, () => undefined, (u) => {
      if (u.typeId !== FourCC("oeye")) return false;
      killingUnit.damageTarget(
        u.handle,
        (257 - ((u.x - x) ** 2 + (u.y - y) ** 2) ** 0.5) ** 0.4,
        true,
        false,
        ATTACK_TYPE_MELEE,
        DAMAGE_TYPE_NORMAL,
        WEAPON_TYPE_WHOKNOWS,
      );
      return false;
    });
  });
};
