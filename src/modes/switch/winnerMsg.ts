import { ForceEx } from "handles/ForceEx";
import { switchSheepTimers } from "./switch";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

export const displaySwitchWinner = () => {
  ForceEx.sheep.for((p) => switchSheepTimers[p.id].pause());
  const winner = ForceEx.all.getPlayers().reduce((winner, p) =>
    udg_wispPoints > 0
      ? udg_saves[p.cid] > udg_saves[winner.cid] ? p : winner
      : switchSheepTimers[p.id].elapsed > switchSheepTimers[winner.id].elapsed
      ? p
      : winner
  );

  displayTimedTextToAll(
    `\n${winner} wins with ${
      udg_wispPoints > 0
        ? `${udg_saves[winner.cid]} saves`
        : `${simpleformatTime(switchSheepTimers[winner.id].elapsed)}`
    }!`,
  );
};
