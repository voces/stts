import { UnitEx } from "handles/UnitEx";
import { setTimeout } from "util/setTimeout";
import { addScriptHook, Effect, Trigger, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = Trigger.create();
  t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_CHANNEL);
  t.addAction(() => {
    if (GetSpellAbilityId() !== FourCC("A02E")) return;
    const u = UnitEx.fromEvent();
    if (!u) return;
    u.setAnimation("spell");
    const e = Effect.createAttachment("Abilities/Spells/Human/ManaShield/ManaShieldCaster", u, "origin");
    if (!e) return;
    setTimeout(1.5, () => e.destroy());
  });
});
