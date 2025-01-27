const _getFarmColor = (unit: unit): [r: number, g: number, b: number, a: number] => {
  const maxHp = BlzGetUnitMaxHP(unit);
  if (maxHp < 120) return [1, 1, 1, maxHp / 120];
  else if (maxHp < 240) {
    const pi = (maxHp - 120) / 120;
    const p = 1 - pi;
    return [1, p + 0.4 * pi, p + 0.4 * pi, 255];
  } else if (maxHp < 360) {
    const pi = (maxHp - 240) / 240;
    const p = 1 - pi;
    return [p + 0.5 * p, 0.4 * p + 0.5 * pi, 0.4 * p + 0.5 * pi, 1];
  } else {
    const p = Math.exp(-(maxHp - 360) * Math.log(2) / 180);
    return [0.5 * p, 0.5 * p, 0.5 * p, 1];
  }
};

export const getFarmColor = (unit: unit, as255 = false): [r: number, g: number, b: number, a: number] => {
  if (!as255) return _getFarmColor(unit);
  return _getFarmColor(unit).map((v) => Math.round(v * 255)) as [number, number, number, number];
};
