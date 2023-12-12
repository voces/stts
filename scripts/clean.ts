import { readMapLua, writeMapLua } from "./util.ts";

await writeMapLua(await readMapLua());

if (
  !(await (new Deno.Command("git", { args: ["add", "map.w3x/war3map.lua"] })
    .spawn()).status).success
) {
  throw new Error("clean failed");
}
