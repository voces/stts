import { MapPlayerEx } from "handles/MapPlayerEx";
import { getRounds, getTimes, modes } from "stats/times";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";
import { formatList } from "util/formatList";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_timeCommands_Actions = () => {
  const self = MapPlayerEx.fromEvent()!;
  let i = 0;
  let count = 0;
  Split(GetEventPlayerChatString()!, " ", false);
  if (myArg[0] === "-times" && myArgCount === 1) {
    self.displayTimedText("|CFFFFCC00Total Sheep Round Time|r", 15);
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) TriggerSleepAction(4);
        self.displayTimedText(
          udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + ": " +
            formatTime(s___times_pTime[s__times_pTime[playerTimes[i]] + i]),
          15,
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-times") {
    while (true) {
      if (i === 24) break;
      if (wasHere[i] && i !== S2I(myArg[1]) - 1) {
        if (count === 12) TriggerSleepAction(4);
        if (
          s___times_pTime[
            s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + S2I(myArg[1]) - 1
          ] === 0
        ) {
          self.displayTimedText(
            udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": " +
              formatTime(
                s___times_pTime[
                  s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + i
                ],
              ) + "; 0.000%",
            15,
          );
        } else {
          self.displayTimedText(
            udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": " +
              formatTime(
                s___times_pTime[
                  s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + i
                ],
              ) + "; " +
              R2S(
                s___times_pTime[
                  s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + i
                ] /
                  s___times_pTime[
                    s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] +
                    S2I(myArg[1]) - 1
                  ] * 100,
              ) + "%",
            15,
          );
        }
        count = count + 1;
      }
      i = i + 1;
    }
    self.displayTimedText(
      "Total: " +
        formatTime(
          s___times_pTime[
            s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + S2I(myArg[1]) - 1
          ],
        ),
      15,
    );
  } else if (myArg[0] === "-atime" || myArg[0] === "-atimes") {
    self.displayTimedText("|CFFFFCC00Average Sheep Round Time|r", 15);

    for (let i = 0; i < bj_MAX_PLAYERS; i++) {
      if (!wasHere[i]) continue;
      if (count === 12) TriggerSleepAction(4);
      const times = getTimes(i);
      const keys = Object.keys(times).sort();
      const player = MapPlayerEx.fromIndex(i)!;
      if (keys.length === 0) self.displayTimedText(`${player.coloredName_}: N/A`, 15);
      else {
        self.displayTimedText(
          `${player.coloredName_}: ${
            keys.map((k) =>
              `${simpleformatTime(times[k].total / times[k].count, true)}${modes.size > 1 ? ` (${k})` : ""}`
            ).join(", ")
          }`,
          15,
        );
      }
      count = count + 1;
    }
  } else if (myArg[0] === "-mytimes") {
    self.displayTimedText("|CFFFFCC00Total Sheep Round Time Per Teammate|r", 15);
    while (true) {
      if (i === 24) break;
      if (wasHere[i] && i !== self.id) {
        if (count === 12) TriggerSleepAction(4);
        if (s___times_pTime[s__times_pTime[playerTimes[self.id]] + self.id] === 0) {
          self.displayTimedText(
            udg_colorString[i + 1] + GetPlayerName(Player(i)!) + ": " +
              formatTime(s___times_pTime[s__times_pTime[playerTimes[self.id]] + i]) + "; 0.000%",
            15,
          );
        } else {
          self.displayTimedText(
            udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": " + formatTime(s___times_pTime[s__times_pTime[playerTimes[self.id]] + i]) +
              "; " +
              R2S(
                s___times_pTime[s__times_pTime[playerTimes[self.id]] + i] /
                  s___times_pTime[s__times_pTime[playerTimes[self.id]] + self.id] * 100,
              ) + "%",
            15,
          );
        }
        count = count + 1;
      }
      i = i + 1;
    }
    self.displayTimedText(
      "Total: " +
        formatTime(s___times_pTime[s__times_pTime[playerTimes[self.id]] + self.id]),
      15,
    );
  } else if (myArg[0] === "-maxtimes") {
    self.displayTimedText(
      "|CFFFFCC00Longest Sheep Round Per Player|r",
      15,
    );
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) TriggerSleepAction(4);
        self.displayTimedText(
          udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + ": " +
            formatTime(s__times_pTimeMax[playerTimes[i]]),
          15,
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-leader") {
    if (recordHolders === "") {
      self.displayTimedText("There are no leaders!", 15);
      self.displayTimedText("There are no losers!", 15);
    } else {
      self.displayTimedText(
        "Leaders: " + recordHolders + " with " + formatTime(recordTime),
        15,
      );
      self.displayTimedText(
        "Losers: " + loserHolders + " with " + formatTime(loserTime),
        15,
      );
    }
  } else if (myArg[0] === "-stime" || myArg[0] === "-stimes") {
    self.displayTimedText("|CFFFFCC00Total Time Alive as Sheep|r", 15);
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) TriggerSleepAction(4);
        self.displayTimedText(
          udg_colorString[i + 1] + GetPlayerName(Player(i)!) + ": " +
            formatTime(TimerGetElapsed(udg_sheepTimer[i + 1])),
          15,
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-reset" && self.isHost) {
    recordHolders = "";
    loserHolders = "";
    recordTime = -Infinity;
    loserTime = Infinity;
    displayTimedTextToAll("Leaders and losers reset", 15);
    while (true) {
      if (i === 24) break;
      s__times_pTimeMax[playerTimes[i]] = 0;
      s___times_pTime[s__times_pTime[playerTimes[i]] ?? 0 + i] = 0;
      s__times_sheepCount[playerTimes[i]] = 0;
      i = i + 1;
    }
  } else if (myArg[0] === "-rtime" || myArg[0] === "-rtimes") {
    self.displayTimedText("|CFFFFCC00Sheep Round Times|r", 15);
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) TriggerSleepAction(4);
        self.displayTimedText(
          udg_colorString[i + 1] + GetPlayerName(Player(i)!) + ": " +
            udg_roundTimes[i + 1].slice(0, -2),
          15,
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-ss" || myArg[0] === "-sheepSurvived") {
    self.displayTimedText("|CFFFFCC00Sheep Survived|r", 15);
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) TriggerSleepAction(4);
        self.displayTimedText(
          udg_colorString[i + 1] + GetPlayerName(Player(i)!) + ": " +
            udg_sheepSurvived[i + 1],
          15,
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-rounds") {
    const matchingPlayers = myArg.slice(1).map((a) => MapPlayerEx.fromIndex(parseInt(a) - 1))
      .filter((p): p is MapPlayerEx => !!p && p.slotState !== PLAYER_SLOT_STATE_EMPTY);
    const rounds = getRounds(...matchingPlayers);

    if (rounds.length === 0) {
      return self.displayTimedText(
        `|CFFFFCC00No rounds${matchingPlayers.length > 0 ? ` with ${formatList(matchingPlayers)}` : ""}|r`,
      );
    }

    self.displayTimedText(
      matchingPlayers.length > 0
        ? `|CFFFFCC00Rounds with ${formatList(matchingPlayers)}:|r`
        : "|CFFFFCC00All rounds:|r",
      15,
    );
    for (const round of rounds) {
      self.displayTimedText(`${formatList(round.sheep)}: ${formatTime(round.time)}`, 15);
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_timeCommands: () => void;
}
InitTrig_timeCommands = () => {
  gg_trg_timeCommands = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-times", false); // accepts an argument
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-stime");
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-rtime", false); // -rtimes
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-ss");
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-sheepSurvived");
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-mytimes");
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-maxtimes");
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-leader");
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-loser");
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-reset");
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-atime", false); // -atimes
  registerAnyPlayerChatEvent(gg_trg_timeCommands, "-rounds", false); // accepts arguments
  TriggerAddAction(gg_trg_timeCommands, Trig_timeCommands_Actions);
};
