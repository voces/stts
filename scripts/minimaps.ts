import TGA from "npm:tga";
import Terrain from "npm:mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3e/file.js";
import Region from "npm:mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3r/file.js";
import Doodad from "npm:mdx-m3-viewer-th/dist/cjs/parsers/w3x/doo/file.js";

// -10, -177
// 34, 43

const War3MapW3e = Terrain.default;
const War3MapW3r = Region.default;
const War3MapDoo = Doodad.default;

const tiles: Record<string, [number, number, number] | undefined> = {
  Wgrs: [46, 72, 69],
  CWgr: [46, 72, 69],
  Wdrt: [79, 81, 63],
  Wrok: [96, 88, 77],
  Wsnw: [170, 195, 214],
  CWsn: [170, 195, 214],
  Wdro: [74, 77, 63],
  Wsng: [77, 85, 74],
  Lgrd: [26, 86, 18],
  Lrok: [135, 114, 90],
  CLgr: [93, 123, 67],
  Lgrs: [43, 110, 26],
  Ldrt: [152, 99, 57],
  Ldro: [140, 100, 57],
  CLdi: [137, 104, 71],
};

const doodadData: Record<
  string,
  | {
    color: [r: number, g: number, b: number][] | [r: number, g: number, b: number];
    size?: [x: number, y: number, rotation: number] | [x: number, y: number] | number;
  }
  | undefined
> = {
  WTst: { color: [110, 170, 180] }, // Winter tree
  YTst: { color: [110, 170, 180] }, // Cityscape winter tree
  LSgs: { color: [40, 15, 5], size: [1.5, 2] }, // Scorched granary
  LSsf: { color: [26, 11, 5], size: 1.5 }, // Scorched farm
  VOfl: { color: [80, 41, 27], size: [0.5, 2] }, // Fence Long
  VOfs: { color: [80, 41, 27], size: [0.5, 1] }, // Fence Short
  VOal: { color: [80, 41, 27], size: [2, 0.5, Math.PI / 4] }, // Fence Angled Long
  VOas: { color: [80, 41, 27], size: [1, 0.5, Math.PI / 4] }, // Fence Angled Short
  // YOec: { color: [138, 94, 38], size: 0.5 }, // Crates Empty
  LSin: { color: [161, 137, 64], size: [2, 1.5, Math.PI / 4] }, // Inn
  // LOwr: { color: [137, 91, 62] }, // Wheelbarrow Broken
  // LTba: { color: [154, 107, 40] }, // Barricade
  // LOcg: { color: [49, 48, 47] }, // Cage
  // LOce: { color: [49, 48, 47] }, // Cage Empty
  LSwl: { color: [124, 119, 84] }, // Well
  // LOtr: { color: [[94, 168, 210], [144, 89, 65]], size: [0.5, 1] }, // Trough
  LSwb: { color: [41, 10, 0] }, // Windmill Burned
  LSba: { color: [108, 62, 33], size: [2.5, 1.5, Math.PI / 4] }, // Barn
  LSwm: { color: [161, 137, 64], size: [2, 1.5] }, // Windmill
  VSvb: { color: [[65, 85, 72], [71, 65, 107], [109, 57, 50]] }, // Building
  LTlt: { color: [3, 106, 13] }, // Summer Tree Wall
  // LOh1: { color: [24, 93, 155], size: 0.5 }, // Banner Human
  // DOtp: { color: [62, 38, 14] }, // Pile of Treasure
  // LOic: { color: [202, 196, 174], size: 0.5 }, // Corpse Impaled
  // DOjp: { color: [103, 144, 175] }, // Pile of Junk
  // LOo2: { color: [185, 55, 52], size: 0.5 }, // Banner Tutorial Orc
  // LOlp: { color: [255, 255, 96], size: 0.5 }, // Post Lantern
  // LOar: { color: [239, 31, 47], size: 0.5 }, // Archery Target
  // LOch: { color: [201, 183, 111], size: [0.5, 1] }, // Hay Cart
  LSsi: { color: [24, 0, 0], size: [2, 1.5, Math.PI / 4] }, // Inn Scorched
  // LObr: { color: [255, 186, 30], size: 0.5 }, // Brazier
  LSsb: { color: [78, 45, 24], size: [2.5, 1.5, Math.PI / 4] }, // Barn Scorched
  // LOss: { color: [142, 142, 142], size: 0.5 }, // Skulls on Sticks
  // LOct: { color: [75, 75, 75] }, // Cage Trashed
  // LOtz: { color: [232, 204, 135], size: 0.5 }, // Torch Glowing
  // LOhb: { color: [198, 174, 89] }, // Hay
  LOpg: { color: [129, 69, 51], size: 0.5 }, // Grave Peasant
  // NOfp: { color: [151, 76, 31] }, // Fire Pit
  // LOt1: { color: [179, 124, 48] }, // Trash
  LTw2: { color: [196, 188, 160], size: [2.5, 0.5] }, // Stone Wall (Vertical)
  AOhs: { color: [62, 46, 23] }, // Stump Hollow
  // LOca: { color: [49, 159, 74], size: 0.75 }, // Cauldron with heads
  LOgr: { color: [119, 121, 119], size: 0.5 }, // Grave
  // LOsc: { color: [142, 116, 95], size: 0.5 }, // Corpse Sitting
  LSst: { color: [48, 51, 39] }, // Tower Scorched
  // LOwb: { color: [165, 146, 79], size: [0.5, 1] }, // Wheelbarrow
  // LOo1: { color: [116, 35, 35], size: 0.5 }, // Banner Orc
  LOsw: { color: [90, 92, 65] }, // Wall Stone
  // LOsk: { color: [217, 217, 217] }, // Skull Pile
  // LOam: { color: [79, 39, 15], size: 0.75 }, // Rack Armor
  // LOhp: { color: [142, 94, 71], size: 0.5 }, // Post Hitching
  // LOsh: { color: [133, 84, 54], size: 0.5 }, // Head on Spear
  LOrb: { color: [213, 180, 143] }, // Bones Rib
  LOsp: { color: [139, 96, 35], size: 0.4 }, // Post Sign
  // NOft: { color: [156, 134, 102] }, // Fire Pit Trashed
  LSgr: { color: [207, 194, 111], size: [1.1, 1.6] }, // Granary
  // NOfg: { color: [193, 83, 23] }, // Fire Pit with Pig
  LPfp: { color: [82, 142, 72], size: 0.3 }, // Lily Pads Floating
  NWsd: { color: [49, 47, 41], size: 2 }, // Ship Destroyed
  LTw0: { color: [174, 164, 137], size: [0.5, 2.5] }, // Stone Wall (Horizontal)
  // LOwp: { color: [111, 73, 43], size: 0.75 }, // Rack Weapon
  YObw: { color: [159, 125, 77] }, // Bench Wood
  // LObz: { color: [255, 110, 4], size: 0.5 }, // Brazier Glowing
  BObo: { color: [160, 108, 74], size: 1.5 }, // Bones
  // LOcb: { color: [171, 160, 100] }, // Hay Cart Broken
  LWw0: { color: [135, 148, 197], size: 2 }, // Waterfall
  // NWfb: { color: [63, 41, 0], size: 0.5 }, // Floating Box
  // NWpa: { color: [63, 41, 0], size: 0.75 }, // Floating Panel
  // NWfp: { color: [63, 41, 0], size: [0.25, 0.75, Math.PI / 4] }, // Floating Plank
  LPlp: { color: [88, 142, 75], size: 0.4 }, // Lily Pad
  APct: { color: [105, 74, 39], size: 0.2 }, // Cattail
  LSeb: { color: [153, 179, 81], size: 1.5 }, // Elven Building
  LPcr: { color: [157, 151, 48], size: 0.3 }, // Corn
  LPwh: { color: [128, 129, 39], size: 0.4 }, // Wheat
  APms: { color: [54, 188, 139], size: 0.25 }, // Mushroom
  LPrs: { color: [101, 112, 38], size: 0.4 }, // River Rushes
  LPcw: { color: [29, 33, 16], size: 0.4 }, // Grain Scorched
};

const decor = new Set(["LOth", "LOhc", "YOtf", "YOfs", "NObt", "YOr2", "YOf2", "AObd"]);

const drawEllipse = (
  imageData: ImageData,
  centerX: number,
  centerY: number,
  radiusX: number,
  radiusY: number,
  rotation: number, // in radians, counter‑clockwise
  color: [r: number, g: number, b: number, a: number],
) => {
  const { width, height, data } = imageData;
  const newAlpha = color[3] / 255;
  const softnessPx = 1;

  // Precompute sin/cos
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);

  // Axis‑aligned bounding box half‑size + blur padding
  const halfW = Math.abs(radiusX * cos) + Math.abs(radiusY * sin) + softnessPx;
  const halfH = Math.abs(radiusX * sin) + Math.abs(radiusY * cos) + softnessPx;

  const minX = Math.max(0, Math.floor(centerX - halfW));
  const maxX = Math.min(width - 1, Math.ceil(centerX + halfW));
  const minY = Math.max(0, Math.floor(centerY - halfH));
  const maxY = Math.min(height - 1, Math.ceil(centerY + halfH));

  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      // Move to center & rotate by –rotation
      const dx = x - centerX;
      const dy = y - centerY;
      const xRot = dx * cos + dy * sin;
      const yRot = -dx * sin + dy * cos;

      // Distance from center in pixel‑space
      const d = Math.hypot(xRot, yRot);

      // Compute the exact ellipse radius at this angle:
      //   r(φ) = (rx·ry·d) / √((ry·xRot)² + (rx·yRot)²)
      // (if d≈0, we’ll just consider the point “inside”)
      let coverage: number;
      if (d < 1e-3) {
        coverage = 1;
      } else {
        const denom = Math.hypot(radiusY * xRot, radiusX * yRot);
        const radAtAngle = (radiusX * radiusY * d) / denom;
        const delta = d - radAtAngle;
        coverage = Math.max(0, Math.min(1, 1 - delta / softnessPx));
      }

      if (coverage === 0) continue;

      const idx = (y * width + x) * 4;
      const oldR = data[idx],
        oldG = data[idx + 1],
        oldB = data[idx + 2],
        oldA = data[idx + 3] / 255;

      const effA = newAlpha * coverage;
      const outA = effA + oldA * (1 - effA);
      if (outA <= 0) continue;

      // Standard “over” blend
      data[idx] = Math.round((oldR * (1 - effA) + color[0] * effA) / outA);
      data[idx + 1] = Math.round((oldG * (1 - effA) + color[1] * effA) / outA);
      data[idx + 2] = Math.round((oldB * (1 - effA) + color[2] * effA) / outA);
      data[idx + 3] = Math.round(outA * 255);
    }
  }
};

const terrainFile = new War3MapW3e();
terrainFile.load(await Deno.readFile("map.w3x/war3map.w3e"));

const regionFile = new War3MapW3r();
regionFile.load(await Deno.readFile("map.w3x/war3map.w3r"));

const doodadFile = new War3MapDoo();
doodadFile.load(await Deno.readFile("map.w3x/war3map.doo"), 132);
// const skippedDoodads: Record<string, number | undefined> = {};
const doodads = doodadFile.doodads.filter((d) => {
  // if (d.id in doodadData) return true;
  if (decor.has(d.id)) return false;
  // skippedDoodads[d.id] = (skippedDoodads[d.id] ?? 0) + 1;
  // return false;
  return true;
});
// console.log(skippedDoodads);

const [xTerrain, yTerrain] = terrainFile.centerOffset;

const targetSize = 256;

async function saveTGA(imageData: ImageData, outputPath: string) {
  const { width, height, data } = imageData;
  const tga = TGA.createTgaBuffer(width, height, data);
  await Deno.writeFile(outputPath, tga as any);
  console.log(`TGA file saved: ${outputPath}`);
}

const isRamp = (xTile: number, yTile: number) => {
  const corner = terrainFile.corners[yTile]?.[xTile];
  if (!corner?.ramp) return false;

  const left = terrainFile.corners[yTile]?.[xTile - 1];
  const leftLeft = terrainFile.corners[yTile]?.[xTile - 2];
  const right = terrainFile.corners[yTile]?.[xTile + 1];
  const rightRight = terrainFile.corners[yTile]?.[xTile + 2];
  const below = terrainFile.corners[yTile - 1]?.[xTile];
  const belowBelow = terrainFile.corners[yTile - 2]?.[xTile];
  const above = terrainFile.corners[yTile + 1]?.[xTile];
  const aboveAbove = terrainFile.corners[yTile + 2]?.[xTile];

  const topLeft = terrainFile.corners[yTile + 1]?.[xTile - 1];
  const topRight = terrainFile.corners[yTile + 1]?.[xTile + 1];
  const bottomLeft = terrainFile.corners[yTile - 1]?.[xTile - 1];
  const bottomRight = terrainFile.corners[yTile - 1]?.[xTile + 1];

  if (left.ramp && right.ramp && below.ramp && above.ramp) return true;
  if (
    !left.ramp && right.ramp && below.ramp && above.ramp && rightRight.ramp &&
    corner.layerHeight === topLeft.layerHeight && corner.layerHeight === bottomLeft.layerHeight &&
    above.layerHeight === below.layerHeight
  ) return true;
  if (
    left.ramp && !right.ramp && below.ramp && above.ramp && leftLeft.ramp &&
    corner.layerHeight === topRight.layerHeight && corner.layerHeight === bottomRight.layerHeight &&
    above.layerHeight === below.layerHeight
  ) return true;
  if (
    left.ramp && right.ramp && !below.ramp && above.ramp && aboveAbove.ramp &&
    corner.layerHeight === bottomLeft.layerHeight && corner.layerHeight === bottomRight.layerHeight &&
    left.layerHeight === right.layerHeight
  ) return true;
  if (
    left.ramp && right.ramp && below.ramp && !above.ramp && belowBelow.ramp &&
    corner.layerHeight === topLeft.layerHeight && corner.layerHeight === topRight.layerHeight &&
    left.layerHeight === right.layerHeight
  ) return true;

  if (
    topLeft.layerHeight !== corner.layerHeight &&
    left.layerHeight === corner.layerHeight && above.layerHeight === corner.layerHeight
  ) return true;
  if (
    bottomRight.layerHeight !== corner.layerHeight &&
    right.layerHeight === corner.layerHeight && below.layerHeight === corner.layerHeight
  ) return true;
  if (
    topRight.layerHeight !== corner.layerHeight &&
    right.layerHeight === corner.layerHeight && above.layerHeight === corner.layerHeight
  ) return true;
  if (
    bottomLeft.layerHeight !== corner.layerHeight &&
    left.layerHeight === corner.layerHeight && below.layerHeight === corner.layerHeight
  ) return true;

  return false;
};

const cornerHeight = (xTile: number, yTile: number) => {
  const corner = terrainFile.corners[yTile]?.[xTile];
  if (!corner) return 0;
  if (!corner.ramp) return corner.layerHeight;

  const left = terrainFile.corners[yTile][xTile - 1];
  const right = terrainFile.corners[yTile][xTile + 1];
  if (left?.ramp && right?.ramp) return Math.max((left.layerHeight + right.layerHeight) / 2, corner.layerHeight);

  const above = terrainFile.corners[yTile - 1][xTile];
  const below = terrainFile.corners[yTile + 1][xTile];
  if (above?.ramp && below?.ramp) return Math.max((above.layerHeight + below.layerHeight) / 2, corner.layerHeight);

  return corner.layerHeight;
};

// const corner = terrainFile.corners[43][34];
// console.log(
//   corner,
//   terrainFile.groundTilesets[corner.groundTexture],
//   isRamp(34, 43),
//   [
//     cornerHeight(34 - 1, 43 - 1),
//     cornerHeight(34 - 1, 43),
//     cornerHeight(34 - 1, 43 + 1),
//     cornerHeight(34, 43 - 1),
//     cornerHeight(34, 43),
//     cornerHeight(34, 43 + 1),
//     cornerHeight(34 + 1, 43 - 1),
//     cornerHeight(34 + 1, 43),
//     cornerHeight(34 + 1, 43 + 1),
//   ],
// );

const promises: Promise<unknown>[] = [];

for (const region of regionFile.regions) {
  const match = region.name.match(/^Stage (\d+) Boundry$/);
  if (!match) continue;
  const stage = match[1];

  const top = Math.round((region.top - yTerrain) / 128) + 2;
  const left = Math.round((region.left - xTerrain) / 128) - 4;
  const right = Math.round((region.bottom - xTerrain) / 128) + 4;
  const bottom = Math.round((region.right - yTerrain) / 128) - 3;
  const width = right - left;
  const height = top - bottom;

  const scale = Math.min(targetSize / width, targetSize / height);

  const getPixelFromTile = (xTile: number, yTile: number) => {
    const corner = terrainFile.corners[yTile]?.[xTile];
    if (!corner) return [0, 0, 0];

    let tileset = "";
    const layers = isRamp(xTile, yTile) ? new Set([0]) : new Set([
      cornerHeight(xTile - 1, yTile - 1),
      cornerHeight(xTile - 1, yTile),
      cornerHeight(xTile - 1, yTile + 1),
      cornerHeight(xTile, yTile - 1),
      cornerHeight(xTile, yTile),
      cornerHeight(xTile, yTile + 1),
      cornerHeight(xTile + 1, yTile - 1),
      cornerHeight(xTile + 1, yTile),
      cornerHeight(xTile + 1, yTile + 1),
    ].filter((v) => typeof v === "number"));
    tileset = layers.size === 1
      ? terrainFile.groundTilesets[corner.groundTexture]
      : (terrainFile.cliffTilesets[corner.cliffTexture % 2]);

    if (!tileset) {
      console.warn(
        `No tileset at ${xTile},${yTile} (layers=${layers.size}, groundTexture=${corner.groundTexture}, cliffTexture=${corner.cliffTexture})`,
      );
      return [0, 0, 0];
    }

    let color = tiles[tileset];
    if (!color) throw new Error(`No color defined for ${tileset}`);

    if (corner.water && corner.waterHeight > corner.groundHeight) {
      const a = Math.min(1, ((corner.waterHeight - corner.groundHeight) - 3.95) / 2);
      color = [color[0] * (1 - a), color[1] * (1 - a), Math.round(color[2] * (1 - a) + 255 * a)];
    }

    if (
      corner.boundary ||
      (corner.mapEdge && (!terrainFile.corners[yTile][xTile - 1] || terrainFile.corners[yTile][xTile - 1].mapEdge))
    ) color = [color[0] * 0.25, color[1] * 0.25, color[2] * 0.25];

    return color;
  };

  const xBase = left - Math.max(0, Math.round((height - width) / 2));
  const yBase = top + Math.max(0, Math.round((width - height) / 2));
  const getPixel = (x: number, y: number) => {
    const xTile = xBase + Math.round(x / scale);
    const yTile = yBase - Math.round(y / scale);

    const color = getPixelFromTile(xTile, yTile);

    return color;
  };

  // Top left is 0,0; bottom right is 255,255
  const data = new ImageData(targetSize, targetSize);

  // Terrain
  for (let y = 0; y < targetSize; y++) {
    for (let x = 0; x < targetSize; x++) {
      const [r, g, b] = getPixel(x, y);
      const index = (y * targetSize + x) * 4;
      data.data[index] = r;
      data.data[index + 1] = g;
      data.data[index + 2] = b;
      data.data[index + 3] = 255;
    }
  }

  // Doodads
  const box = {
    left: xBase * 128 + xTerrain,
    top: yBase * 128 + yTerrain,
    right: (xBase + (256 / scale)) * 128 + xTerrain,
    bottom: (yBase - 256 / scale) * 128 + yTerrain,
  };
  for (const doodad of doodads) {
    const [x, y] = doodad.location;
    if (box.left > x || x > box.right || box.bottom > y || y > box.top) continue;
    const { color, size } = doodadData[doodad.id] ?? {};
    if (!color) {
      // missedDoodads[doodad.id] = (missedDoodads[doodad.id] ?? 0) + 1;
      continue;
    }
    const finalColor = (Array.isArray(color[0]) ? color[doodad.variation] : color) as [number, number, number];
    const xSize = size ? Array.isArray(size) ? size[0] : size : 1;
    const ySize = size ? Array.isArray(size) ? size[1] : size : 1;
    const baseRotation = (size && Array.isArray(size) && size.length >= 3) ? size[2]! : 0;
    drawEllipse(
      data,
      (x - box.left) / (box.right - box.left) * 256,
      (1 - (y - box.bottom) / (box.top - box.bottom)) * 256,
      scale / 2 * xSize,
      scale / 2 * ySize,
      doodad.angle + baseRotation,
      [...finalColor, 255],
    );
  }

  // Alpha
  for (let y = 0; y < targetSize; y++) {
    for (let x = 0; x < targetSize; x++) {
      const index = (y * targetSize + x) * 4;
      data.data[index + 3] = 0;
    }
  }

  promises.push(saveTGA(data, `map.w3x/minimaps/bulldog${stage}.tga`));
}

await Promise.all(promises);
