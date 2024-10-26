import { UnitEx } from "handles/UnitEx";
import { setTimeout } from "util/setTimeout";
import { addScriptHook, Effect, Trigger, W3TS_HOOK } from "w3ts";

const recents: { caster: UnitEx; target: UnitEx }[] = [];

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  let t = Trigger.create();
  t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_CHANNEL);
  t.addAction(() => {
    if (GetSpellAbilityId() !== FourCC("A02E")) return;
    const caster = UnitEx.fromEvent();
    const target = UnitEx.fromHandle(GetSpellTargetUnit());

    if (!caster || !target) return;

    caster.setAnimation("spell");
    recents.push({ caster, target });
    setTimeout(1.6, () => {
      const idx = recents.findIndex((r) => r.caster === caster);
      if (idx >= 0) {
        if (recents[idx].caster.isAlive()) recents[idx].caster.mana -= 150;
        recents.splice(idx, 1);
      }
    });

    const e1 = Effect.createAttachment("Abilities/Spells/Human/ManaShield/ManaShieldCaster", caster, "origin");
    if (e1) setTimeout(1.5, () => e1.destroy());

    const e2 = Effect.createAttachment("Abilities/Spells/Items/AIco/CrownOfCmndTarget", target, "overhead");
    if (e2) setTimeout(2, () => e2.destroy());
  });

  t = Trigger.create();
  t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_CHANGE_OWNER);
  t.addAction(() => {
    const target = UnitEx.fromEvent();
    const idx = recents.findIndex((r) => r.target === target);
    if (idx >= 0 && recents[idx].target === target) recents.splice(idx, 1);
  });
});
