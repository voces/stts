const location = Location(0, 0);

export const getTerrainZ = (x: number, y: number) => {
  MoveLocation(location, x, y);
  return GetLocationZ(location);
};
