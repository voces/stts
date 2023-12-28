import { writeMapLua } from "./util.ts";

if (Deno.args.length) {
  const computers = parseInt(Deno.args[0]);
  if (!Number.isInteger(computers) || computers < 1 || computers > 23) {
    console.error("Number of computers must be between 1 and 23.");
    Deno.exit(1);
  }

  await writeMapLua((await Deno.readTextFile("map.w3x/war3map.lua")).replace(
    new RegExp(
      "(SetPlayerController\\(Player\\((" + Array.from({ length: computers }, (_, i) => i + 1).join("|") +
        ")\\), MAP_CONTROL_)USER",
      "g",
    ),
    "$1COMPUTER",
  ));
}

await new Deno.Command("deno", { args: ["task", "launch"] }).output();
