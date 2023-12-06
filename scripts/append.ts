import { readMapLua, writeMapLua } from "./util.ts";

const getTsLua = () =>
  Deno.readTextFile("./temp/out.lua").then((f) =>
    f.replace(/__async__require__/g, "require")
  );

const [mapLua, tsLua] = await Promise.all([
  readMapLua(),
  getTsLua(),
]);

await writeMapLua(mapLua + tsLua);
