import { terrain } from "settings/settings";
import { setTimeout, Timeout } from "util/setTimeout";
import { addScriptHook, Item, Trigger, W3TS_HOOK } from "w3ts";

const FIRST_DELAY = 90;
const SECOND_DELAY = 90;
const RESPAWN_DELAY = 240;

const runes: Record<keyof typeof terrain["runes"], number> = {
  invis: FourCC("I00O"),
  speed: FourCC("I00P"),
  mana: FourCC("I00J"),
  omniscience: FourCC("I00K"),
};

export const spawnRune = (rune: keyof typeof runes) => {
  const gold = GetRandomReal(0, 1) < 0;
  const type = gold ? FourCC("gold") : runes[rune];
  const item = Item.create(type, GetRectCenterX(terrain.runes[rune]), GetRectCenterY(terrain.runes[rune]))!;
  item.userData = runes[rune];
};

const timeouts = new Set<Timeout>();

export const startRuneTimer = () => {
  let t = setTimeout(FIRST_DELAY, () => {
    timeouts.delete(t);
    spawnRune("invis");
    spawnRune("speed");
    t = setTimeout(SECOND_DELAY, () => {
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
};

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = Trigger.create();
  t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_PICKUP_ITEM);
  t.addAction(() => {
    const itemId = Item.fromEvent()!.userData;
    for (const key in runes) {
      if (itemId === runes[key as keyof typeof runes]) {
        const t = setTimeout(RESPAWN_DELAY, () => {
          timeouts.delete(t);
          spawnRune(key as keyof typeof runes);
        });
        timeouts.add(t);
        break;
      }
    }
  });
});
