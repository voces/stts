import { UnitEx } from "handles/UnitEx";
import { addScriptHook, Item, Trigger, W3TS_HOOK } from "w3ts";
import { registerAnyPlayerChatEvent } from "./registerAnyPlayerChatEvent";
import { MapPlayerEx } from "handles/MapPlayerEx";

let started = false;
let mapRegion!: region;
addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  started = true;
  mapRegion = CreateRegion();
  RegionAddRect(mapRegion, GetWorldBounds()!);
});
const afterMain = (fn: () => Promise<Trigger>) =>
  started ? fn() : new Promise<Trigger>((resolve) => addScriptHook(W3TS_HOOK.MAIN_AFTER, () => resolve(fn())));

export const game = {
  onNewUnit: (fn: (event: { newUnit: UnitEx }) => void) => {
    const t = Trigger.create();
    t.registerEnterRegion(mapRegion, undefined);
    t.addAction(() => fn({ newUnit: UnitEx.fromEvent()! }));
    return Promise.resolve(t);
  },
  onUnitDeath: (fn: (event: { dyingUnit: UnitEx }) => void) => {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
    t.addAction(() => fn({ dyingUnit: UnitEx.fromDying()! }));
    return Promise.resolve(t);
  },
  onSpellEnd: (fn: (event: { spellId: number; unit: UnitEx; target: UnitEx | undefined }) => void) => {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_ENDCAST);
    t.addAction(() =>
      fn({ spellId: GetSpellAbilityId()!, unit: UnitEx.fromEvent()!, target: UnitEx.fromHandle(GetSpellTargetUnit()) })
    );
    return Promise.resolve(t);
  },
  onItemUsed: (fn: (event: { item: Item; unit: UnitEx }) => void) => {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_USE_ITEM);
    t.addAction(() => fn({ item: Item.fromEvent()!, unit: UnitEx.fromEvent()! }));
    return Promise.resolve(t);
  },
  onConstructionStart: (fn: (event: { unit: UnitEx }) => void) => {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_CONSTRUCT_START);
    t.addAction(() => fn({ unit: UnitEx.fromEvent()! }));
    return Promise.resolve(t);
  },
  onConstructionFinish: (fn: (event: { unit: UnitEx }) => void) => {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_CONSTRUCT_FINISH);
    t.addAction(() => fn({ unit: UnitEx.fromEvent()! }));
    return Promise.resolve(t);
  },
  onResearch: (fn: (event: { researchId: number; unit: UnitEx; player: MapPlayerEx }) => void) => {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_RESEARCH_FINISH);
    t.addAction(() =>
      fn({ researchId: GetResearched()!, unit: UnitEx.fromEvent()!, player: MapPlayerEx.fromEvent()! })
    );
    return Promise.resolve(t);
  },
  onUpgradeFinish: (fn: (event: { unit: UnitEx }) => void) => {
    const t = Trigger.create();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_UPGRADE_FINISH);
    t.addAction(() => fn({ unit: UnitEx.fromEvent()! }));
    return Promise.resolve(t);
  },
  onCommand: (
    { trigger, exact, host = true, intermission = false, fn: callback }: {
      trigger: string;
      exact?: boolean;
      host?: boolean;
      intermission?: boolean;
      fn: (event: { player: MapPlayerEx; parts: string[] }) => void;
    },
  ) => {
    const t = Trigger.create();
    registerAnyPlayerChatEvent(t.handle, trigger, exact);
    t.addCondition(() => {
      if (exact && !GetEventPlayerChatString()!.toLowerCase().startsWith(trigger)) return false;
      if (host && MapPlayerEx.fromEvent()!.handle !== udg_Custom) return false;
      if (intermission && udg_gameStarted) return false;
      return true;
    });
    t.addAction(() => callback({ player: MapPlayerEx.fromEvent()!, parts: GetEventPlayerChatString()!.split(" ") }));
    return Promise.resolve(t);
  },
  onInterval: (period: number, fn: () => void) => {
    const t = Trigger.create();
    t.registerTimerEvent(period, true);
    t.addAction(fn);
    return Promise.resolve(t);
  },
};

for (const key in game) {
  const gameKey = key as keyof typeof game;
  const old = game[gameKey];
  game[key as keyof typeof game] = (...args: any[]) => afterMain(() => (old as any)(...args));
}
