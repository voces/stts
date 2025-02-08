import TGA from "npm:tga";
import Terrain from "npm:mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3e/file.js";
import Region from "npm:mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3r/file.js";
import Doodad from "npm:mdx-m3-viewer-th/dist/cjs/parsers/w3x/doo/file.js";

// -10, -177
// 34, 43

const War3MapW3e = Terrain.default;
const War3MapW3r = Region.default;
const War3MapDoo = Doodad.default;

const colors: Record<string, [number, number, number] | undefined> = {
  // Tiles
  Wgrs: [46, 72, 69],
  CWgr: [46, 72, 69],
  Wdrt: [79, 81, 63],
  Wrok: [96, 88, 77],
  Wsnw: [170, 195, 214],
  CWsn: [170, 195, 214],
  Wdro: [74, 77, 63],
  Wsng: [77, 85, 74],
  // Doodads
  WTst: [110, 170, 180], // Winter tree
  YTst: [110, 170, 180], // Cityscape winter tree
  // LSgs: [40, 15, 5], // Scorched granary
  // LSsf: [26, 11, 5], // Scorched farm
  // VOfl: [181, 138, 99], // Fence Long
  // VOfs: [181, 138, 99], // Fence Short
  // VOal: [181, 138, 99], // Fence Angled Long
  // VOas: [181, 138, 99], // Fence Angled Short
  // YOec: [138, 94, 38], // Crates Empty
  // LSin: [207, 187, 103], // Inn
  // LOwr: [137, 91, 62], // Wheelbarrow Broken
  // LTba: [154, 107, 40], // Barricade
  // LOcg: [49, 48, 47], // Cage
  // LOwb: [147, 116, 53], // Wheelbarrow
  // LSwl: [124, 119, 84], // Well
  // LOtr: [144, 89, 65], // Trough
  // LSwb: [41, 10, 0], // Windmill Burned
  // LSba: [108, 62, 33], // Barn
};

const sizes: Record<string, number | undefined> = {
  LSgs: 1.75,
  LSsf: 1.5,
  YOec: 0.5,
  LSin: 2,
  VOfs: 0.75,
  VOal: 1.25,
  VOas: 0.85,
  LOwb: 0.75,
  LOtr: 0.75,
  LSwb: 1.5,
  LSba: 2.25,
};

const decor = new Set(["LPrs", "LPwh", "LOth", "LOhc"]);

const drawCircle = (
  imageData: ImageData,
  centerX: number,
  centerY: number,
  radius: number,
  color: [number, number, number, number],
) => {
  const { width, height, data } = imageData;

  // Normalize alpha (0-255 → 0-1)
  const newAlpha = color[3] / 255;

  // Bounding box to limit iteration
  const minX = Math.max(0, Math.floor(centerX - radius - 1));
  const maxX = Math.min(width - 1, Math.ceil(centerX + radius + 1));
  const minY = Math.max(0, Math.floor(centerY - radius - 1));
  const maxY = Math.min(height - 1, Math.ceil(centerY + radius + 1));

  // Iterate over the bounding box
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      // Check if the pixel is inside the circle
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Compute how much this pixel is covered by the circle
      const coverage = Math.max(0, Math.min(1, 1 - (distance - radius) / 1.5)); // 1.5 is the anti-aliasing softness

      if (coverage === 0) continue;

      const index = (y * width + x) * 4;

      // Old color values
      const oldR = data[index];
      const oldG = data[index + 1];
      const oldB = data[index + 2];
      const oldA = (data[index + 3]) / 255; // Normalize

      // Adjust alpha blending based on coverage
      const effectiveAlpha = newAlpha * coverage;
      const resultAlpha = effectiveAlpha + oldA * (1 - effectiveAlpha);

      if (resultAlpha <= 0) continue;

      // console.log({ effectiveAlpha, coverage, resultAlpha, oldR, newR: color[0], oldA });

      // Blend colors using smooth coverage-based alpha blending
      data[index] = Math.round((oldR * (1 - effectiveAlpha) + color[0] * effectiveAlpha) / resultAlpha);
      data[index + 1] = Math.round((oldG * (1 - effectiveAlpha) + color[1] * effectiveAlpha) / resultAlpha);
      data[index + 2] = Math.round((oldB * (1 - effectiveAlpha) + color[2] * effectiveAlpha) / resultAlpha);
      data[index + 3] = Math.round(resultAlpha * 255); // Convert back to 0-255

      // console.log(data[index]);
    }
  }
};

const terrainFile = new War3MapW3e();
terrainFile.load(await Deno.readFile("map.w3x/war3map.w3e"));

const regionFile = new War3MapW3r();
regionFile.load(await Deno.readFile("map.w3x/war3map.w3r"));

const doodadFile = new War3MapDoo();
doodadFile.load(await Deno.readFile("map.w3x/war3map.doo"), 132);
const skippedDoodads: Record<string, number | undefined> = {};
const doodads = doodadFile.doodads.filter((d) => {
  if (d.id in colors) return true;
  if (decor.has(d.id)) return false;
  skippedDoodads[d.id] = (skippedDoodads[d.id] ?? 0) + 1;
  return false;
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
  // if (Math.random() < 1) continue;
  const match = region.name.match(/^Stage (\d+) Boundry$/);
  if (!match) continue;
  const stage = match[1];
  // if (stage != "1") continue;

  const top = Math.round((region.top - yTerrain) / 128) + 2;
  const left = Math.round((region.left - xTerrain) / 128) - 4;
  const right = Math.round((region.bottom - xTerrain) / 128) + 4;
  const bottom = Math.round((region.right - yTerrain) / 128) - 3;
  const width = right - left;
  const height = top - bottom;

  const scale = Math.min(targetSize / width, targetSize / height);
  // const newWidth = Math.round(width * scale);
  // const newHeight = Math.round(height * scale);
  // const xOffset = Math.round((targetSize - newWidth) / 2);
  // const yOffset = Math.round((targetSize - newHeight) / 2);

  const getPixelFromTile = (xTile: number, yTile: number) => {
    const corner = terrainFile.corners[yTile]?.[xTile];
    if (!corner) {
      // console.warn(`No corner at ${xTile},${yTile}`);
      return [0, 0, 0];
    }

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
      : (terrainFile.cliffTilesets[corner.cliffTexture] ?? terrainFile.groundTilesets[corner.groundTexture]);

    if (!tileset) {
      console.warn(
        `No tileset at ${xTile},${yTile} (layers=${layers.size}, groundTexture=${corner.groundTexture}, cliffTexture=${corner.cliffTexture})`,
      );
      return [0, 0, 0];
    }

    let color = colors[tileset];
    if (!color) throw new Error(`No color defined for ${tileset}`);

    const waterDepth = corner.water - corner.waterHeight;
    if (waterDepth > 0) {
      const a = Math.min(1, waterDepth / 128);
      color = [color[0] * (1 - a), color[1] * (1 - a), Math.round(color[2] * (1 - a) + 255 * a)];
    }

    if (
      corner.boundary ||
      (corner.mapEdge && (!terrainFile.corners[yTile][xTile - 1] || terrainFile.corners[yTile][xTile - 1].mapEdge))
    ) {
      color = [color[0] * 0.25, color[1] * 0.25, color[2] * 0.25];
    }

    return color;
  };

  const xBase = left - Math.max(0, Math.round((height - width) / 2));
  const yBase = top + Math.max(0, Math.round((width - height) / 2));
  const getPixel = (x: number, y: number) => {
    const xTile = xBase + Math.round(x / scale);
    const yTile = yBase - Math.round(y / scale);

    const color = getPixelFromTile(xTile, yTile);

    // if (x < xOffset / 2 || (targetSize - x) < xOffset / 2 || y < yOffset / 2 || (targetSize - y) < yOffset / 2) {
    //   // if (xTile < left || xTile + 1 > right || yTile < bottom || yTile > top) {
    //   return color.map((c) => c * 0.25);
    // }

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
    drawCircle(
      data,
      (x - box.left) / (box.right - box.left) * 256,
      (1 - (y - box.bottom) / (box.top - box.bottom)) * 256,
      scale / 2 * (sizes[doodad.id] ?? 1),
      [
        ...colors[doodad.id]!,
        255,
      ],
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

  // const data2 = new ImageData(width, height);
  // for (let y = top; y >= bottom; y--) { // Flip Y iteration
  //   for (let x = left; x <= right; x++) {
  //     const [r, g, b] = getPixelFromTile(x, y);
  //     const index = ((top - y) * width + (x - left)) * 4; // Adjust indexing
  //     data2.data[index] = r;
  //     data2.data[index + 1] = g;
  //     data2.data[index + 2] = b;
  //     data2.data[index + 3] = 255; // Ensure alpha is fully opaque
  //   }
  // }
  // await saveTGA(data2, "scripts/test2.tga");
}

await Promise.all(promises);
