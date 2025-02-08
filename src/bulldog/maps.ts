import { bulldog } from "./settings";
import { terrain } from "settings/settings";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

export const bulldogMaps: { area: rect; start: rect; end: rect; wolf: rect; name: string; outside?: rect }[] = [];

export const setBulldogMap = (index: number) => {
  bulldog.map = index;
  const map = bulldogMaps[bulldog.map];
  displayTimedTextToAll(`Terrain set to |CFFED1C24${map.name}|r.`);
  SetCameraBoundsToRect(map.area);
  BlzChangeMinimapTerrainTex(`minimaps/bulldog${index + 1}.tga`);
  PanCameraToTimed(GetRectCenterX(map.area), GetRectCenterY(map.area), 0);
  terrain.minimap = "";
  terrain.cameraBounds = map.area;
  terrain.wolf = map.wolf;
  terrain.spawnBounds = map.start;
  terrain.shops = [];
  terrain.guideFarms = [];
  terrain.critter = false;
};
