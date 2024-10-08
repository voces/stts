import { ABILITY_TYPE_ID_GIVE_ALLY_GOLD_WOLF } from "constants";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { UnitEx } from "handles/UnitEx";
import { president, terrain } from "settings/settings";
import { displayToVerit } from "util/displayTimedTextToAll";
import { isPointInRect } from "util/geometry";
import { isUnitSameTeam } from "util/isUnitSameTeam";
import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { setTimeout, Timeout } from "util/setTimeout";
import { withPlayerUnits } from "util/withGroup";

const selectedPriority = Array.from<undefined, [player: player, timeout: Timeout] | undefined>({
  length: bj_MAX_PLAYERS,
}, () => undefined);

export const inflateGoldCount = (p: player): void => {
  let max = goldCount[0];
  for (let i = 1; i < bj_MAX_PLAYERS; i++) {
    if (goldCount[i] > max) max = goldCount[i];
  }
  goldCount[GetPlayerId(p)] = max;
};

const Trig_g_showGoldCounts = () => {
  let count = 0;
  const triggerer = MapPlayerEx.fromEvent()!;
  triggerer.displayTimedText("|CFFFFCC00Gold Count|r", 15);
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    const p = MapPlayerEx.fromIndex(i);
    if (!p || p.slotState === PLAYER_SLOT_STATE_EMPTY) continue;
    if (count > 0 && (count % 15 === 0)) {
      TriggerSleepAction(9);
      count = 0;
      triggerer.displayTimedText("|CFFFFCC00Gold Count (cont.)|r", 15);
    }
    triggerer.displayTimedText(`${p.coloredName_} : ${I2S(R2I(goldCount[i]))}`, 15);
    count++;
  }
};

const markReceiver = (sender: player, target: string): void => {
  const p = Player(S2I(target) - 1);

  if (p == null || sender === p) return;

  if ((IsPlayerInForce(sender, udg_Sheep) || IsPlayerInForce(sender, udg_Spirit)) && IsPlayerInForce(p, udg_Sheep)) {
    lastSheepReceiver = p;
  } else if (IsPlayerInForce(sender, udg_Wolf) && IsPlayerInForce(p, udg_Wolf)) {
    lastWolfReceiver = p;
  }
};

const Trig_g_leastGoldCount = (forSheep: boolean, last: player): player | null => {
  let least = -1;
  let ties = 0;
  let p!: player;
  let backup!: player;
  let backupTies = 0;
  let backupLeast = -1;

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (
      GetTriggerPlayer() !== Player(i)! &&
      GetPlayerSlotState(Player(i)!) === PLAYER_SLOT_STATE_PLAYING &&
      (forSheep && IsPlayerInForce(Player(i)!, udg_Sheep) ||
        (!forSheep && IsPlayerInForce(Player(i)!, udg_Wolf)))
    ) {
      if (pub[i] || last === Player(i)!) {
        if (goldCount[i] < backupLeast || backupLeast === -1) {
          backup = Player(i)!;
          backupLeast = goldCount[i];
          backupTies = 0;
        } else if (goldCount[i] === backupLeast) {
          // This makes it so everyone has equal chance in the event of a tie
          if (GetRandomReal(0, 1) < (1 / (backupTies + 2))) backup = Player(i)!;
          backupTies = backupTies + 1;
        }
      } else if (goldCount[i] < least || least === -1) {
        p = Player(i)!;
        least = goldCount[i];
        ties = 0;
      } else if (goldCount[i] === least) {
        // This makes it so everyone has equal chance in the event of a tie
        if (GetRandomReal(0, 1) < (1 / (ties + 2))) p = Player(i)!;
        ties = ties + 1;
      }
    }
  }

  if (p == null) {
    if (backup == null) return null;
    p = backup;
  }

  goldCount[GetPlayerId(p)] = goldCount[GetPlayerId(p)] + 1 / Pow(2, goldRaces);
  goldRaces = goldRaces + 1;

  return p;
};

export const giveAllGold = (sender: player): void => {
  const amount = GetPlayerState(sender, PLAYER_STATE_RESOURCE_GOLD);
  let changedReceiver = false;
  let transferDisplay:
    | typeof TRANSFER_DISPLAY_SOURCE
    | typeof TRANSFER_DISPLAY_TEAM = TRANSFER_DISPLAY_SOURCE;

  // Don't transfer 0 gold
  if (amount === 0 || !udg_giveGold) return;

  // Select to prioritize
  let goldStep = "selection";
  let receiver: player | null = selectedPriority[GetPlayerId(sender)]?.[0] ?? null;
  if (receiver && IsPlayerInForce(receiver, udg_Spirit)) receiver = null;

  // Priority is last receiver, president, or a random person with least gc
  if (!receiver) {
    if (IsPlayerInForce(sender, udg_Sheep) || IsPlayerInForce(sender, udg_Spirit)) {
      goldStep = "train";
      receiver = lastSheepReceiver;
      if (
        receiver == null || receiver === sender || GetPlayerSlotState(receiver) === PLAYER_SLOT_STATE_LEFT ||
        IsPlayerInForce(receiver, udg_Spirit)
      ) {
        goldStep = president.enabled ? "president" : "algo";
        receiver = president.enabled
          ? president.president!.handle
          : Trig_g_leastGoldCount(true, lastReceivedFrom[GetPlayerId(sender)]);
      }
    } else if (IsPlayerInForce(sender, udg_Wolf)) {
      receiver = lastWolfReceiver;
      if (receiver == null || receiver === sender || GetPlayerSlotState(receiver) === PLAYER_SLOT_STATE_LEFT) {
        receiver = Trig_g_leastGoldCount(false, lastReceivedFrom[GetPlayerId(sender)]);
      }
    }
  }

  // Don't transfer to self, a leaver, or a wisp
  if (receiver === sender || receiver == null || GetPlayerSlotState(receiver) === PLAYER_SLOT_STATE_LEFT) return;
  // TODO: remove in 2025 if no hits
  if (IsPlayerInForce(receiver, udg_Spirit)) displayToVerit(`Gold given to wisp on step ${goldStep}`);

  // Ensure a train is established
  if ((IsPlayerInForce(sender, udg_Sheep) || IsPlayerInForce(sender, udg_Spirit)) && lastSheepReceiver !== receiver) {
    lastSheepReceiver = receiver;
    changedReceiver = true;
  } else if (IsPlayerInForce(sender, udg_Wolf) && lastWolfReceiver !== receiver) {
    lastWolfReceiver = receiver;
    changedReceiver = true;
  }

  lastReceivedFrom[GetPlayerId(receiver)] = sender;

  if (amount > 3 || changedReceiver) transferDisplay = TRANSFER_DISPLAY_TEAM;

  const gold = GetPlayerState(receiver, PLAYER_STATE_RESOURCE_GOLD) + amount;
  transferGold(sender, receiver, amount, transferDisplay);

  if (receiver === GetLocalPlayer() && (changedReceiver || (gold >= 112 && amount > 3))) StartSound(gg_snd_ReceiveGold);
};

const Trig_g_Actions = () => {
  const str = StringCase(GetEventPlayerChatString()!, false)!;

  // String is just "-g"; give gold intelligently
  if (str === "-g" || str === "-g ") return giveAllGold(GetTriggerPlayer()!);

  const parts = str.split(" ");

  // They typed -g X; mark who received the gold
  if (parts[0] === "-g" && parts.length > 1) return markReceiver(GetTriggerPlayer()!, parts[1]);

  // Note early returns above; mark when someone speaks
  if (str.startsWith("g")) {
    if (IsPlayerInForce(GetTriggerPlayer()!, udg_Sheep)) {
      lastSheepReceiver = GetTriggerPlayer()!;
      if (GetLocalPlayer() === GetTriggerPlayer()) StartSound(gg_snd_ReceiveGold);
    } else if (IsPlayerInForce(GetTriggerPlayer()!, udg_Wolf)) {
      let wolf: UnitEx | undefined = undefined as UnitEx | undefined;
      withPlayerUnits(GetTriggerPlayer()!, () => {}, (u) => {
        if (u.typeId === shepType && !u.isIllusion()) wolf = u;
        return false;
      });
      if (!wolf) return;
      if (isPointInRect(wolf.x, wolf.y, terrain.spawnBounds)) {
        lastWolfReceiver = GetTriggerPlayer()!;
        if (GetLocalPlayer() === GetTriggerPlayer()) StartSound(gg_snd_ReceiveGold);
        return;
      }
      let nearShop = false;
      for (const [rect] of terrain.shops) {
        if ((GetRectCenterX(rect) - wolf.x) ** 2 + (GetRectCenterY(rect) - wolf.y) ** 2 < 2_250_000) {
          nearShop = true;
          break;
        }
      }
      if (nearShop) {
        lastWolfReceiver = GetTriggerPlayer()!;
        if (GetLocalPlayer() === GetTriggerPlayer()) StartSound(gg_snd_ReceiveGold);
        return;
      }
    }
  }
};

const Trig_g_SpellCast = () => {
  const p = GetOwningPlayer(GetTriggerUnit()!);
  if (
    udg_giveGold && GetSpellAbilityId() === ABILITY_TYPE_ID_GIVE_ALLY_GOLD_WOLF &&
    GetPlayerState(p, PLAYER_STATE_RESOURCE_GOLD) > 0 &&
    IsPlayerInForce(p, udg_Wolf)
  ) giveAllGold(p);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_g: () => void;
}
InitTrig_g = () => {
  let t = CreateTrigger();
  gg_trg_g = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_g, "");
  TriggerAddCondition(gg_trg_g, Condition(() => udg_gameStarted));
  TriggerAddAction(gg_trg_g, Trig_g_Actions);

  TriggerRegisterAnyUnitEventBJ(t, EVENT_PLAYER_UNIT_SPELL_CAST);
  TriggerAddAction(t, Trig_g_SpellCast);

  t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-gc");
  TriggerAddAction(t, Trig_g_showGoldCounts);

  t = CreateTrigger();
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    TriggerRegisterPlayerUnitEvent(
      t,
      Player(i)!,
      EVENT_PLAYER_UNIT_SELECTED,
      Filter(() => {
        const u = GetFilterUnit();
        const p = GetTriggerPlayer();
        return !!u && !!p && isUnitSameTeam(u, p) && GetOwningPlayer(u) !== p &&
          !IsPlayerInForce(GetOwningPlayer(u), udg_Spirit);
      }),
    );
  }
  TriggerAddAction(t, () => {
    const pid = GetPlayerId(GetTriggerPlayer()!);
    selectedPriority[pid]?.[1].cancel();
    selectedPriority[pid] = [
      GetOwningPlayer(GetTriggerUnit()!),
      setTimeout(3, () => selectedPriority[pid] = undefined),
    ];
  });
};
