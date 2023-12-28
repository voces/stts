import { addScriptHook, W3TS_HOOK } from "w3ts";
import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";

const g = CreateGroup();

const SavingFarms__tick = () => {
  const sheeps = ForceEx.sheep.size() + ForceEx.wisps.size();
  const wolves = Math.max(ForceEx.wolves.size(), 1);

  const rate = wolves / sheeps / 10;

  GroupEnumUnitsOfType(
    g,
    UnitId2String(FourCC("h005"))!,
    Condition(() => {
      MapPlayerEx.fromFilterUnit()!.bankedGold += rate;
      return false;
    }),
  );

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i)!;
    if (p.bankedGold >= 1) {
      const added = Math.floor(p.bankedGold);
      p.gold += added;
      p.bankedGold -= added;
    }
  }
};

export const resetBankedGold = () => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) MapPlayerEx.fromIndex(i)!.bankedGold = 0;
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = CreateTrigger();
  TriggerRegisterTimerEventPeriodic(t, 1);
  TriggerAddAction(t, SavingFarms__tick);
});
