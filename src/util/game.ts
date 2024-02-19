import { UnitEx } from "handles/UnitEx";
import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";

let started = false;
addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  started = true;
});
const afterMain = (fn: () => void) => started ? fn() : addScriptHook(W3TS_HOOK.MAIN_AFTER, fn);

export const game = {
  onUnitDeath: (fn: (event: { dyingUnit: UnitEx }) => void) => {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
    t.addAction(() => fn({ dyingUnit: UnitEx.fromDying()! }));
  },
};

for (const key in game) {
  const gameKey = key as keyof typeof game;
  const old = game[gameKey];
  game[key as keyof typeof game] = (fn) => afterMain(() => old(fn));
}
