import { sleep } from "w3ts";

export const inflateGoldCount = (p: player): void => {
  let max = goldCount[0];
  for (let i = 1; i < bj_MAX_PLAYERS; i++) {
    if (goldCount[i] > max) max = goldCount[i];
  }
  goldCount[GetPlayerId(p)] = max;
};

const Trig_g_showGoldCounts = async () => {
  let i = 0;
  let count = 0;
  const p = GetTriggerPlayer()!;
  DisplayTimedTextToPlayer(
    p,
    0,
    0,
    15,
    "                              |CFFFFCC00Gold Count|r",
  );
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    count = 0;
    while (true) {
      if (i === bj_MAX_PLAYERS || count === 12) break;
      if (
        GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
        udg_AFK[i + 1] === AFK_PLAYING
      ) {
        DisplayTimedTextToPlayer(
          p,
          0,
          0,
          15,
          "                              " + udg_colorString[i + 1] +
            GetPlayerName(Player(i)!) + " : " + I2S(R2I(goldCount[i])),
        );
        count = count + 1;
      }
      i = i + 1;
    }
    if (count === 12) {
      await sleep(9);
      if (GetLocalPlayer() === p) ClearTextMessages();
    }
  }
};

const Trig_g_receiver = (sender: player): void => {
  const p = ConvertedPlayer(S2I(myArg[1]));

  if (p == null) {
    return;
  }

  if (
    ((IsPlayerInForce(sender, udg_Sheep)) ||
      IsPlayerInForce(GetTriggerPlayer()!, udg_Spirit)) &&
    (IsPlayerInForce(p, udg_Sheep))
  ) {
    lastSheepReceiver = p;
  } else if (
    (IsPlayerInForce(sender, udg_Wolf)) && (IsPlayerInForce(p, udg_Wolf))
  ) {
    lastWolfReceiver = p;
  }
};

const Trig_g_leastGoldCount = (forSheep: boolean, last: player): player => {
  let i = 0;
  let least = -1;
  let ties = 0;
  let p!: player;
  let backup!: player;
  let backupTies = 0;
  let backupLeast = -1;

  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    if (
      GetTriggerPlayer() !== Player(i)! &&
      GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
      ((forSheep && (IsPlayerInForce(Player(i)!, udg_Sheep))) ||
        (!forSheep && (IsPlayerInForce(Player(i)!, udg_Wolf))))
    ) {
      if (pub[i] || last === Player(i)!) {
        if (goldCount[i] < backupLeast || backupLeast === -1) {
          backup = Player(i)!;
          backupLeast = goldCount[i];
          backupTies = 0;
        } else if (goldCount[i] === backupLeast) {
          // This makes it so everyone has equal chance in the event of a tie
          if (GetRandomReal(0, 1) < (1 / (backupTies + 2))) {
            backup = Player(i)!;
          }
          backupTies = backupTies + 1;
        }
      } else if (goldCount[i] < least || least === -1) {
        p = Player(i)!;
        least = goldCount[i];
        ties = 0;
      } else if (goldCount[i] === least) {
        // This makes it so everyone has equal chance in the event of a tie
        if (GetRandomReal(0, 1) < (1 / (ties + 2))) {
          p = Player(i)!;
        }
        ties = ties + 1;
      }
    }
    i = i + 1;
  }

  if (p == null) {
    if (backup == null) {
      return null as unknown as player;
    }
    p = backup;
  }

  goldCount[GetPlayerId(p)] = goldCount[GetPlayerId(p)] + 1 / Pow(2, goldRaces);
  goldRaces = goldRaces + 1;

  return p;
};

const Trig_g_actual = (sender: player): void => {
  let receiver!: player;
  const amount = GetPlayerState(sender, PLAYER_STATE_RESOURCE_GOLD);
  let changedReceiver = false;
  let transferDisplay:
    | typeof TRANSFER_DISPLAY_SOURCE
    | typeof TRANSFER_DISPLAY_TEAM = TRANSFER_DISPLAY_SOURCE;

  // Don't transfer 0 gold
  if (amount === 0 || !udg_giveGold) {
    return;
  }

  // Priority is last receiver or a random person with least gc
  if (
    (IsPlayerInForce(sender, udg_Sheep)) || IsPlayerInForce(sender, udg_Spirit)
  ) {
    receiver = lastSheepReceiver;
    if (
      receiver == null || receiver === sender ||
      GetPlayerSlotState(receiver) === PLAYER_SLOT_STATE_LEFT
    ) {
      receiver = Trig_g_leastGoldCount(
        true,
        lastReceivedFrom[GetPlayerId(sender)],
      );
    }
  } else if ((IsPlayerInForce(sender, udg_Wolf))) {
    receiver = lastWolfReceiver;
    if (
      receiver == null || receiver === sender ||
      GetPlayerSlotState(receiver) === PLAYER_SLOT_STATE_LEFT
    ) {
      receiver = Trig_g_leastGoldCount(
        false,
        lastReceivedFrom[GetPlayerId(sender)],
      );
    }
  }

  // Don't transfer to self
  if (
    receiver === sender || receiver == null ||
    GetPlayerSlotState(receiver) === PLAYER_SLOT_STATE_LEFT
  ) {
    return;
  }

  // Ensure a train is established
  if ((IsPlayerInForce(sender, udg_Sheep) || IsPlayerInForce(sender, udg_Spirit)) && lastSheepReceiver !== receiver) {
    lastSheepReceiver = receiver;
    changedReceiver = true;
  } else if (
    (IsPlayerInForce(sender, udg_Wolf)) && lastWolfReceiver !== receiver
  ) {
    lastWolfReceiver = receiver;
    changedReceiver = true;
  }

  lastReceivedFrom[GetPlayerId(receiver)] = sender;

  if (amount > 3 || changedReceiver) {
    transferDisplay = TRANSFER_DISPLAY_TEAM;
  }

  const gold = GetPlayerState(receiver, PLAYER_STATE_RESOURCE_GOLD) + amount;
  transferGold(sender, receiver, amount, transferDisplay);

  if (
    receiver === GetLocalPlayer() &&
    (changedReceiver || (gold >= 112 && amount > 3))
  ) StartSound(gg_snd_ReceiveGold);
};

const Trig_g_Actions = () => {
  const str = StringCase(GetEventPlayerChatString()!, false)!;

  // String is just "-g"; give gold intelligently
  if (str === "-g" || str === "-g ") {
    Trig_g_actual(GetTriggerPlayer()!);
    return;
  }

  Split(str, " ", false);

  // They typed -g X; mark who received the gold
  if (myArgCount === 2 && myArg[0] === "-g") {
    Trig_g_receiver(GetTriggerPlayer()!);
    return;
  }

  // Note early returns above; mark when someone speaks
  if (myArg[0] === "g") {
    if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep))) {
      lastSheepReceiver = GetTriggerPlayer()!;
    } else if ((IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf))) {
      lastWolfReceiver = GetTriggerPlayer()!;
    }
  }
};

const Trig_g_Conditions = () => {
  return udg_gameStarted;
};

const Trig_g_SpellCast = () => {
  const p = GetOwningPlayer(GetTriggerUnit()!);
  if (
    udg_giveGold && GetSpellAbilityId() === FourCC("A00V") &&
    GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) > 0 &&
    IsPlayerInForce(p, udg_Wolf)
  ) {
    Trig_g_actual(p);
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_g: () => void;
}
InitTrig_g = () => {
  let i = 0;
  let t = CreateTrigger();
  gg_trg_g = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerChatEvent(gg_trg_g, Player(i)!, "", false);
    i = i + 1;
  }
  TriggerAddCondition(gg_trg_g, Condition(Trig_g_Conditions));
  TriggerAddAction(gg_trg_g, Trig_g_Actions);

  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_SPELL_CAST);
  TriggerAddAction(t, Trig_g_SpellCast);

  t = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(t, "-gc", true);
  TriggerAddAction(t, Trig_g_showGoldCounts);
};
