export const isUnitSameTeam = (u: unit, p: player) => {
  const p2 = GetOwningPlayer(u);
  if (IsPlayerInForce(p2, udg_Wolf)) return IsPlayerInForce(p, udg_Wolf);
  if (IsPlayerInForce(p2, udg_Sheep) || IsPlayerInForce(p2, udg_Spirit)) {
    return IsPlayerInForce(p, udg_Sheep) || IsPlayerInForce(p, udg_Spirit);
  }
  return !IsPlayerInForce(p, udg_Wolf) && !IsPlayerInForce(p, udg_Sheep) && !IsPlayerInForce(p, udg_Spirit);
};
