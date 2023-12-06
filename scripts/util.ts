export const readMapLua = () =>
  Deno.readTextFile(
    "map.w3x/war3map.lua",
  )
    .then((file) =>
      file.split(
        "--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]",
      )[0]
    );

export const writeMapLua = (content: string) =>
  Deno.writeTextFile(
    "map.w3x/war3map.lua",
    content,
  );
