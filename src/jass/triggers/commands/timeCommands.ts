//===========================================================================
// Trigger: timeCommands

import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

//===========================================================================
const Trig_timeCommands_Actions = () => {
  let i = 0;
  let n: number;
  let count = 0;
  Split(GetEventPlayerChatString()!, " ", false);
  if (myArg[0] === "-times" && myArgCount === 1) {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFFFFCC00Total Sheep Round Time|r",
    );
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) {
          TriggerSleepAction(4);
        }
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + ": " +
            formatTime(s___times_pTime[s__times_pTime[playerTimes[i]] + i]),
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-times") {
    while (true) {
      if (i === 24) break;
      if (wasHere[i] && i !== S2I(myArg[1]) - 1) {
        if (count === 12) {
          TriggerSleepAction(4);
        }
        if (
          s___times_pTime[
            s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + S2I(myArg[1]) - 1
          ] === 0
        ) {
          DisplayTimedTextToPlayer(
            GetTriggerPlayer()!,
            0,
            0,
            15,
            "                              " + udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": " +
              formatTime(
                s___times_pTime[
                  s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + i
                ],
              ) + "; %0.000",
          );
        } else {
          DisplayTimedTextToPlayer(
            GetTriggerPlayer()!,
            0,
            0,
            15,
            "                              " + udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": " +
              formatTime(
                s___times_pTime[
                  s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + i
                ],
              ) + "; %" +
              R2S(
                s___times_pTime[
                  s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + i
                ] /
                  s___times_pTime[
                    s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] +
                    S2I(myArg[1]) - 1
                  ] * 100,
              ),
          );
        }
        count = count + 1;
      }
      i = i + 1;
    }
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              " + "Total: " +
        formatTime(
          s___times_pTime[
            s__times_pTime[playerTimes[S2I(myArg[1]) - 1]] + S2I(myArg[1]) - 1
          ],
        ),
    );
  } else if (myArg[0] === "-atime" || myArg[0] === "-atimes") {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFFFFCC00Average Sheep Round Time|r",
    );
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) {
          TriggerSleepAction(4);
        }
        n = s__times_sheepCount[playerTimes[i]];
        if (n === 0) {
          DisplayTimedTextToPlayer(
            GetTriggerPlayer()!,
            0,
            0,
            15,
            "                              " + udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": N/A",
          );
        } else {
          DisplayTimedTextToPlayer(
            GetTriggerPlayer()!,
            0,
            0,
            15,
            "                              " + udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": " +
              formatTime(
                s___times_pTime[s__times_pTime[playerTimes[i]] + i] / n,
              ),
          );
        }
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-mytimes") {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFFFFCC00Total Sheep Round Time Per Teammate|r",
    );
    while (true) {
      if (i === 24) break;
      if (wasHere[i] && i !== GetPlayerId(GetTriggerPlayer()!)) {
        if (count === 12) {
          TriggerSleepAction(4);
        }
        if (
          s___times_pTime[
            s__times_pTime[playerTimes[GetPlayerId(GetTriggerPlayer()!)]] +
            GetPlayerId(GetTriggerPlayer()!)
          ] === 0
        ) {
          DisplayTimedTextToPlayer(
            GetTriggerPlayer()!,
            0,
            0,
            15,
            "                              " + udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": " +
              formatTime(
                s___times_pTime[
                  s__times_pTime[
                    playerTimes[GetPlayerId(GetTriggerPlayer()!)]
                  ] + i
                ],
              ) + "; %0.000",
          );
        } else {
          DisplayTimedTextToPlayer(
            GetTriggerPlayer()!,
            0,
            0,
            15,
            "                              " + udg_colorString[i + 1] +
              GetPlayerName(Player(i)!) + ": " +
              formatTime(
                s___times_pTime[
                  s__times_pTime[
                    playerTimes[GetPlayerId(GetTriggerPlayer()!)]
                  ] + i
                ],
              ) + "; %" +
              R2S(
                s___times_pTime[
                  s__times_pTime[
                    playerTimes[GetPlayerId(GetTriggerPlayer()!)]
                  ] + i
                ] /
                  s___times_pTime[
                    s__times_pTime[
                      playerTimes[GetPlayerId(GetTriggerPlayer()!)]
                    ] + GetPlayerId(GetTriggerPlayer()!)
                  ] * 100,
              ),
          );
        }
        count = count + 1;
      }
      i = i + 1;
    }
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              " + "Total: " +
        formatTime(
          s___times_pTime[
            s__times_pTime[playerTimes[GetPlayerId(GetTriggerPlayer()!)]] +
            GetPlayerId(GetTriggerPlayer()!)
          ],
        ),
    );
  } else if (myArg[0] === "-maxtimes") {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFFFFCC00Longest Sheep Round Per Player|r",
    );
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) {
          TriggerSleepAction(4);
        }
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + ": " +
            formatTime(s__times_pTimeMax[playerTimes[i]]),
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-leader") {
    if (recordHolders === "") {
      DisplayTimedTextToPlayer(
        GetTriggerPlayer()!,
        0,
        0,
        15,
        "                              There are no leaders!",
      );
      DisplayTimedTextToPlayer(
        GetTriggerPlayer()!,
        0,
        0,
        15,
        "                              There are no losers!",
      );
    } else {
      DisplayTimedTextToPlayer(
        GetTriggerPlayer()!,
        0,
        0,
        15,
        "                              " + "Leaders: " + recordHolders +
          " with " + formatTime(recordTime),
      );
      DisplayTimedTextToPlayer(
        GetTriggerPlayer()!,
        0,
        0,
        15,
        "                              " + "Losers: " + loserHolders +
          " with " + formatTime(loserTime),
      );
    }
  } else if (myArg[0] === "-stime" || myArg[0] === "-stimes") {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFFFFCC00Total Time Alive as Sheep|r",
    );
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) {
          TriggerSleepAction(4);
        }
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + ": " +
            formatTime(TimerGetElapsed(udg_sheepTimer[i + 1])),
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-reset" && GetTriggerPlayer() === udg_Custom) {
    recordHolders = "";
    loserHolders = "";
    recordTime = 0;
    loserTime = 999;
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              Leaders and losers reset",
    );
    while (true) {
      if (i === 24) break;
      s__times_pTimeMax[playerTimes[i]] = 0;
      s___times_pTime[s__times_pTime[playerTimes[i]] ?? 0 + i] = 0;
      s__times_sheepCount[playerTimes[i]] = 0;
      i = i + 1;
    }
  } else if (myArg[0] === "-rtime" || myArg[0] === "-rtimes") {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFFFFCC00Sheep Round Times|r",
    );
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) {
          TriggerSleepAction(4);
        }
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + ": " + udg_roundTimes[i + 1],
        );
        count = count + 1;
      }
      i = i + 1;
    }
  } else if (myArg[0] === "-ss" || myArg[0] === "-sheepSurvived") {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFFFFCC00Sheep Survived|r",
    );
    while (true) {
      if (i === 24) break;
      if (wasHere[i]) {
        if (count === 12) {
          TriggerSleepAction(4);
        }
        DisplayTimedTextToPlayer(
          GetTriggerPlayer()!,
          0,
          0,
          15,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + ": " + udg_sheepSurvived[i + 1],
        );
        count = count + 1;
      }
      i = i + 1;
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
  TriggerAddAction(gg_trg_timeCommands, Trig_timeCommands_Actions);
};
