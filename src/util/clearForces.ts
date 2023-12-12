export const clearForces = () => {
  ForForce(udg_Sheep, () => ForceRemovePlayer(udg_Sheep, GetEnumPlayer()!));
  ForForce(udg_Spirit, () => ForceRemovePlayer(udg_Spirit, GetEnumPlayer()!));
  ForForce(udg_Wolf, () => ForceRemovePlayer(udg_Wolf, GetEnumPlayer()!));
};
