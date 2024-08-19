import { MapPlayerEx } from "handles/MapPlayerEx";
import { game } from "util/game";

game.onConstructionCancel((e) => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i)!;
    if (e.unit.isSelected(p) && p.getSelection().length === 0 && UnitAlive(udg_unit[p.cid])) {
      SelectUnitAddForPlayer(udg_unit[p.cid], p.handle);
    }
  }
});
