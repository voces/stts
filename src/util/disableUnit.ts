const disabledMap = new WeakMap<unit, ability[]>();

export const disableUnit = (unit: unit) => {
  let i = 0;
  let abil: ability | undefined;
  const disabled: ability[] = [];
  // deno-lint-ignore no-cond-assign
  while (abil = BlzGetUnitAbilityByIndex(unit, i)) {
    disabled.push(abil);
    BlzUnitDisableAbility(unit, BlzGetAbilityId(abil), true, false);
    i++;
  }
  if (disabled.length > 0) disabledMap.set(unit, disabled);
};

export const enableUnit = (unit: unit) => {
  const disabled = disabledMap.get(unit);
  if (!disabled) return;
  disabledMap.delete(unit);
  for (const abil of disabled) BlzUnitDisableAbility(unit, BlzGetAbilityId(abil), false, false);
};
