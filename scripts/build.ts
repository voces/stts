import { walk } from "https://deno.land/std@0.214.0/fs/walk.ts";
import Map from "npm:mdx-m3-viewer-th/dist/cjs/parsers/w3x/map.js";

const War3Map = Map.default;

try {
  await Deno.mkdir("map.w3x/minimaps");
} catch {}

try {
  await Deno.lstat("map.w3x/minimaps/bulldog1.tga");
} catch {
  const command = new Deno.Command("deno", {
    args: ["task", "build-minimaps"],
    stdout: "inherit",
    stderr: "inherit",
  });
  command.outputSync();
}

const files: string[] = [];
for await (const entry of walk("map.w3x")) if (entry.isFile && entry.name !== "war3mapMap.blp") files.push(entry.path);

const map = new War3Map();
map.archive.resizeHashtable(files.length + 1);

await Promise.all(files.map(async (fileName) => {
  if (!map.import(fileName.slice(8).replace(/\//g, "\\"), await Deno.readFile(fileName))) {
    throw new Error(`Could not import file "${fileName}"`);
  }
}));

map.import("war3mapMap.blp", await Deno.readFile("assets/classic.blp"));

const scriptFile = map.getScriptFile();
if (!scriptFile) throw new Error("Could not find script file");
const builtLua = await Deno.readTextFile("temp/out.lua");
const combinedLua = scriptFile.text() + "\n" + builtLua;
scriptFile.set(new TextEncoder().encode(combinedLua));

const result = map.save();
if (!result) throw new Error("Failed to save archive");

let name: string | undefined = map.getMapInformation().name;
if (name.startsWith("TRIGSTR")) name = map.readStringTable()?.getString(name);
if (!name) throw new Error("Could not extract map name");

await Promise.all([
  Deno.writeFile(`temp/release.w3x`, result),
  Deno.writeFile(`temp/${name}.w3x`, result),
  Deno.writeTextFile("temp/combined.lua", combinedLua),
]);
