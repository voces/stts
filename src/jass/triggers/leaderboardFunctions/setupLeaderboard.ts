import { ForceEx } from "handles/ForceEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { switchSheepTimers } from "modes/switch/switch";

const getTime = (p: MapPlayerEx) => {
  const paused = p.isSheep;
  if (paused) switchSheepTimers[p.id].pause();
  const value = Math.round(switchSheepTimers[p.id].elapsed);
  if (paused) switchSheepTimers[p.id].resume();
  return value;
};

const lb = () => GetLastCreatedLeaderboard()!;

const addSection = ({ player, label, value }: { player: MapPlayerEx; label: string; value?: number }) => {
  const p = player.handle;
  const lb = GetLastCreatedLeaderboard()!;
  LeaderboardAddItemBJ(p, lb, label, value ?? 0);
  LeaderboardSetPlayerItemStyleBJ(p, lb, true, typeof value === "number" ? true : false, false);
  LeaderboardSetPlayerItemLabelColorBJ(p, lb, 100, 100, 100, 0);
};

const addPlayer = (p: MapPlayerEx, value: "sc" | "saves" | "time" | "fc" | "kills" | "hide") => {
  const afk = udg_AFK[p.cid] >= AFK_AFK;
  const back = udg_AFK[p.cid] === AFK_RETURNED_DURING_ROUND;
  const lb = GetLastCreatedLeaderboard()!;

  LeaderboardAddItemBJ(
    p.handle,
    lb,
    `${p.name}${afk ? " (AFK)" : ""}${back ? " (back)" : ""}`,
    value === "sc"
      ? udg_sheepCount[p.cid]
      : value === "saves"
      ? udg_saves[p.cid]
      : value === "time"
      ? getTime(p)
      : value === "fc"
      ? udg_farmCount[p.cid]
      : value === "kills"
      ? udg_kills[p.cid]
      : 0,
  );

  LeaderboardSetPlayerItemStyleBJ(p.handle, lb, true, value !== "hide", false);
};

// Don't think this works?
const anonSortLeaderboard = () => {
  LeaderboardSetPlayerItemLabelBJ(
    GetEnumPlayer()!,
    lb(),
    (MapPlayerEx.fromEnum()?.isSheep ? "S" : "W") + I2S(GetRandomInt(1000, 9999)),
  );

  LeaderboardSortItemsByLabel(lb(), true);
};

const Trig_setupLeaderboard_Actions = () => {
  if (udg_Teams < TEAMS_LOCK_IE_PLAYING) return;

  if (udg_Teams === TEAMS_PICK) {
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      const p = Player(i);
      if (!p) continue;
      const prev = PlayerGetLeaderboard(p);
      if (prev) DestroyLeaderboard(prev);
    }
    CreateLeaderboardBJ(GetPlayersAll()!, "Pick Teams");
    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      const p = MapPlayerEx.fromIndex(i);
      if (!p || !p.isActive) continue;
      LeaderboardAddItemBJ(p.handle, lb(), p.name, 0);
      LeaderboardSetPlayerItemStyleBJ(p.handle, lb(), true, false, false);
    }
    return;
  }

  if (udg_Teams === TEAMS_LOCK_IE_PLAYING) { // IN GAME
    for (let pid = 0; pid < bj_MAX_PLAYERS; pid++) {
      const lbOwner = MapPlayerEx.fromIndex(pid);
      if (!lbOwner || !lbOwner.inGame) continue;

      const prev = PlayerGetLeaderboard(lbOwner.handle);
      if (prev) {
        DestroyLeaderboard(prev);
      }

      bj_lastCreatedLeaderboard = CreateLeaderboard()!;
      PlayerSetLeaderboard(lbOwner.handle, bj_lastCreatedLeaderboard);

      addSection({
        player: MapPlayerEx.neutralAggressive,
        label: `Sheep: ${ForceEx.sheep.size()}                                 (${
          udg_switchOn ? udg_wispPoints > 0 ? "Saves" : "Time" : "Farms"
        })`,
      });
      ForceEx.sheep.for((p) => addPlayer(p, udg_switchOn ? udg_wispPoints > 0 ? "saves" : "time" : "fc"));

      if (ForceEx.wisps.size() > 0) {
        addSection({ player: MapPlayerEx.neutralVictim, label: `Spirits: ${ForceEx.wisps.size()}` });
        ForceEx.wisps.for((p) => addPlayer(p, "hide"));
      }

      if (!udg_practiceOn) {
        addSection({
          player: MapPlayerEx.neutralPassive,
          label: `Wolves: ${ForceEx.wolves.size()}                                 (${
            udg_switchOn ? udg_wispPoints > 0 ? "Saves" : "Time" : "Kills"
          })`,
        });
        ForceEx.wolves.for((p) => addPlayer(p, udg_switchOn ? udg_wispPoints > 0 ? "saves" : "time" : "kills"));
      }

      if (ForceEx.all.toArray().some((p) => p.afk > AFK_PLAYING)) {
        addSection({ player: MapPlayerEx.neutralExtra, label: "AFK Players" });
        ForceEx.all.for((p) => {
          if (p.afk === AFK_PLAYING || !p.inGame) return;
          addPlayer(p, "hide");
        });
      }
    }
  }

  ForceEx.all.for((p) => {
    const lb = PlayerGetLeaderboard(p.handle);
    if (lb) LeaderboardDisplay(lb, !udg_hideshow[p.cid] && !udg_permanentHide[p.cid]);
  });

  if (udg_isAnon) ForForce(GetPlayersAll()!, anonSortLeaderboard);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_setupLeaderboard: () => void;
}
InitTrig_setupLeaderboard = () => {
  gg_trg_setupLeaderboard = CreateTrigger();
  TriggerAddAction(gg_trg_setupLeaderboard, Trig_setupLeaderboard_Actions);
};
