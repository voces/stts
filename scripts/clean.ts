import { readMapLua, writeMapLua } from "./util.ts";

await writeMapLua(await readMapLua());
