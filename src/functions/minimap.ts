import { UNIT_TYPE_ID_GOLEM } from "constants";
import { colors } from "util/colors";
import { game } from "util/game";

game.onNewUnit(({ newUnit }) => {
  const typeId = newUnit.typeId;
  const icon = typeId === shepType
    ? "ui/minimap/minimap-hero"
    : typeId === sheepType || typeId === UNIT_TYPE_ID_GOLEM
    ? "war3mapImported/minimap-002"
    : undefined;
  if (!icon) return;

  const pip = CreateMinimapIconOnUnit(
    newUnit.handle,
    ...(colors[newUnit.owner.id] ?? [0, 0, 0]),
    icon,
    FOG_OF_WAR_VISIBLE,
  );
  if (pip) SetMinimapIconOrphanDestroy(pip, true);
});
