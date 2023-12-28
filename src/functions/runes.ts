import { terrain } from "settings/terrain";
import { setTimeout, Timeout } from "util/setTimeout";
import { addScriptHook, Item, Trigger, W3TS_HOOK } from "w3ts";

const runes: Record<keyof typeof terrain["runes"], number> = {
  invis: FourCC("I00O"),
  speed: FourCC("I00P"),
  mana: FourCC("I00J"),
  omniscience: FourCC("I00K"),
};

export const spawnRune = (rune: keyof typeof runes) => {
  const gold = Math.random() < 0.0;
  const type = gold ? FourCC("gold") : runes[rune];
  const item = Item.create(type, GetRectCenterX(terrain.runes[rune]), GetRectCenterY(terrain.runes[rune]))!;
  item.userData = runes[rune];
  if (gold) {
    const abil = item.getAbility(FourCC("Algo"))!;
    BlzSetAbilityIntegerLevelField(abil, ABILITY_ILF_GOLD_GIVEN, 1, 15);
  }
};

const timeouts = new Set<Timeout>();
const deathTriggers = new Set<Trigger>();

export const startRuneTimer = () => {
  let t = setTimeout(90, () => {
    timeouts.delete(t);
    spawnRune("invis");
    spawnRune("speed");
    t = setTimeout(90, () => {
      timeouts.delete(t);
      spawnRune("mana");
      spawnRune("omniscience");
    });
    timeouts.add(t);
  });
  timeouts.add(t);
};

export const stopRuneTimers = () => {
  for (const timeout of timeouts) timeout.cancel();
  timeouts.clear();
  for (const trigger of deathTriggers) trigger.destroy();
  deathTriggers.clear();
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = Trigger.create();
  t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_PICKUP_ITEM);
  t.addAction(() => {
    const itemId = Item.fromEvent()!.userData;
    for (const key in runes) {
      if (itemId === runes[key as keyof typeof runes]) {
        const t = setTimeout(240, () => {
          timeouts.delete(t);
          spawnRune(key as keyof typeof runes);
        });
        timeouts.add(t);
        break;
      }
    }
  });
});
