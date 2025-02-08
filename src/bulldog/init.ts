import { addScriptHook, Effect, W3TS_HOOK } from "w3ts";
import { bulldogMaps, setBulldogMap } from "./maps";
import { TriggerEx } from "handles/TriggerEx";
import { UnitEx } from "handles/UnitEx";
import { setTimeout } from "util/setTimeout";
import { scored } from "./stats";
import { ForceEx } from "handles/ForceEx";
import { gsDistributeGold } from "functions/gs";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { bulldog } from "./settings";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  bulldogMaps.push(
    {
      name: "The Farm",
      area: gg_rct_Stage_1_Boundry,
      start: gg_rct_Stage_1_Start,
      wolf: gg_rct_Stage_1_Spawn,
      end: gg_rct_Stage_1_End,
    },
    {
      name: "The Rock",
      area: gg_rct_Stage_2_Boundry,
      start: gg_rct_Stage_2_Start,
      wolf: gg_rct_Stage_2_Spawn,
      end: gg_rct_Stage_2_End,
    },
    {
      name: "The Ramps",
      area: gg_rct_Stage_3_Boundry,
      start: gg_rct_Stage_3_Start,
      wolf: gg_rct_Stage_3_Spawn,
      end: gg_rct_Stage_3_End,
    },
    {
      name: "The Valley",
      area: gg_rct_Stage_4_Boundry,
      start: gg_rct_Stage_4_Start,
      wolf: gg_rct_Stage_4_Spawn,
      end: gg_rct_Stage_4_End,
    },
    {
      name: "The Rise",
      area: gg_rct_Stage_5_Boundry,
      start: gg_rct_Stage_5_Start,
      wolf: gg_rct_Stage_5_Spawn,
      end: gg_rct_Stage_5_End,
    },
    {
      name: "The Target",
      area: gg_rct_Stage_6_Boundry,
      start: gg_rct_Stage_6_Start,
      wolf: gg_rct_Stage_6_Spawn,
      end: gg_rct_Stage_6_End,
    },
    {
      name: "The Ridge",
      area: gg_rct_Stage_7_Boundry,
      start: gg_rct_Stage_7_Start,
      wolf: gg_rct_Stage_7_Spawn,
      end: gg_rct_Stage_7_End,
    },
    {
      name: "The Windmill",
      area: gg_rct_Stage_8_Boundry,
      start: gg_rct_Stage_8_Start,
      wolf: gg_rct_Stage_8_Spawn,
      end: gg_rct_Stage_8_End,
    },
    {
      name: "The Craters",
      area: gg_rct_Stage_9_Boundry,
      start: gg_rct_Stage_9_Start,
      wolf: gg_rct_Stage_9_Spawn,
      end: gg_rct_Stage_9_End,
    },
    {
      name: "_|'s Assassin",
      area: gg_rct_Stage_10_Boundry,
      start: gg_rct_Stage_10_Start,
      wolf: gg_rct_Stage_10_Spawn,
      end: gg_rct_Stage_10_End,
    },
    {
      name: "The Pocket",
      area: gg_rct_Stage_11_Boundry,
      start: gg_rct_Stage_11_Start,
      wolf: gg_rct_Stage_11_Spawn,
      end: gg_rct_Stage_11_End,
    },
    {
      name: "The Meadow",
      area: gg_rct_Stage_12_Boundry,
      start: gg_rct_Stage_12_Start,
      wolf: gg_rct_Stage_12_Spawn,
      end: gg_rct_Stage_12_End,
    },
    {
      name: "The Mountain",
      area: gg_rct_Stage_13_Boundry,
      start: gg_rct_Stage_13_Start,
      wolf: gg_rct_Stage_13_Spawn,
      end: gg_rct_Stage_13_End,
    },
    {
      name: "The Slope",
      area: gg_rct_Stage_14_Boundry,
      start: gg_rct_Stage_14_Start,
      wolf: gg_rct_Stage_14_Spawn,
      end: gg_rct_Stage_14_End,
    },
    {
      name: "The Fuck",
      area: gg_rct_Stage_15_Boundry,
      start: gg_rct_Stage_15_Start,
      wolf: gg_rct_Stage_15_Spawn,
      end: gg_rct_Stage_15_End,
    },
    {
      name: "The Lake",
      area: gg_rct_Stage_16_Boundry,
      start: gg_rct_Stage_16_Start,
      wolf: gg_rct_Stage_16_Spawn,
      end: gg_rct_Stage_16_End,
    },
    {
      name: "The Field",
      area: gg_rct_Stage_17_Boundry,
      start: gg_rct_Stage_17_Start,
      wolf: gg_rct_Stage_17_Spawn,
      end: gg_rct_Stage_17_End,
    },
    {
      name: "The Protuberance",
      area: gg_rct_Stage_18_Boundry,
      start: gg_rct_Stage_18_Start,
      wolf: gg_rct_Stage_18_Spawn,
      end: gg_rct_Stage_18_End,
    },
    {
      name: "The Pen",
      area: gg_rct_Stage_19_Boundry,
      start: gg_rct_Stage_19_Start,
      wolf: gg_rct_Stage_19_Spawn,
      end: gg_rct_Stage_19_End,
    },
    {
      name: "The Hourglass",
      area: gg_rct_Stage_20_Boundry,
      start: gg_rct_Stage_20_Start,
      wolf: gg_rct_Stage_20_Spawn,
      end: gg_rct_Stage_20_End,
    },
    {
      name: "The Shallow River",
      area: gg_rct_Stage_21_Boundry,
      start: gg_rct_Stage_21_Start,
      wolf: gg_rct_Stage_21_Spawn,
      end: gg_rct_Stage_21_End,
    },
    {
      name: "The Woods",
      area: gg_rct_Stage_22_Boundry,
      start: gg_rct_Stage_22_Start,
      wolf: gg_rct_Stage_22_Spawn,
      end: gg_rct_Stage_22_End,
    },
    {
      name: "The Tamed Woods",
      area: gg_rct_Stage_23_Boundry,
      start: gg_rct_Stage_23_Start,
      wolf: gg_rct_Stage_23_Spawn,
      end: gg_rct_Stage_23_End,
    },
    {
      name: "The Tiny Rectangle",
      area: gg_rct_Stage_24_Boundry,
      start: gg_rct_Stage_24_Start,
      wolf: gg_rct_Stage_24_Spawn,
      end: gg_rct_Stage_24_End,
    },
    {
      name: "The Dump",
      area: gg_rct_Stage_25_Boundry,
      start: gg_rct_Stage_25_Start,
      wolf: gg_rct_Stage_25_Spawn,
      end: gg_rct_Stage_25_End,
      outside: gg_rct_Stage_25_Boundry_2,
    },
    {
      name: "The Negative",
      area: gg_rct_Stage_26_Boundry,
      start: gg_rct_Stage_26_Start,
      wolf: gg_rct_Stage_26_Spawn,
      end: gg_rct_Stage_26_End,
    },
    {
      name: "The Cave",
      area: gg_rct_Stage_27_Boundry,
      start: gg_rct_Stage_27_Start,
      wolf: gg_rct_Stage_27_Spawn,
      end: gg_rct_Stage_27_End,
    },
    {
      name: "The Corner",
      area: gg_rct_Stage_28_Boundry,
      start: gg_rct_Stage_28_Start,
      wolf: gg_rct_Stage_28_Spawn,
      end: gg_rct_Stage_28_End,
    },
    {
      name: "The Well",
      area: gg_rct_Stage_29_Boundry,
      start: gg_rct_Stage_29_Start,
      wolf: gg_rct_Stage_29_Spawn,
      end: gg_rct_Stage_29_End,
    },
    {
      name: "The Pond",
      area: gg_rct_Stage_30_Boundry,
      start: gg_rct_Stage_30_Start,
      wolf: gg_rct_Stage_30_Spawn,
      end: gg_rct_Stage_30_End,
    },
    {
      name: "The Stream",
      area: gg_rct_Stage_31_Boundry,
      start: gg_rct_Stage_31_Start,
      wolf: gg_rct_Stage_31_Spawn,
      end: gg_rct_Stage_31_End,
    },
    {
      name: "The Exchange",
      area: gg_rct_Stage_32_Boundry,
      start: gg_rct_Stage_32_Start,
      wolf: gg_rct_Stage_32_Spawn,
      end: gg_rct_Stage_32_End,
    },
    {
      // Katama
      name: "The Signals",
      area: gg_rct_Stage_33_Boundry,
      start: gg_rct_Stage_33_Start,
      wolf: gg_rct_Stage_33_Spawn,
      end: gg_rct_Stage_33_End,
    },
    {
      name: "The Pass",
      area: gg_rct_Stage_34_Boundry,
      start: gg_rct_Stage_34_Start,
      wolf: gg_rct_Stage_34_Spawn,
      end: gg_rct_Stage_34_End,
    },
    {
      // Shroomy
      name: "The Campsite",
      area: gg_rct_Stage_35_Boundry,
      start: gg_rct_Stage_35_Start,
      wolf: gg_rct_Stage_35_Spawn,
      end: gg_rct_Stage_35_End,
      outside: gg_rct_Stage_35_Boundry_2,
    },
    {
      name: "The Crossover",
      area: gg_rct_Stage_36_Boundry,
      start: gg_rct_Stage_36_Start,
      wolf: gg_rct_Stage_36_Spawn,
      end: gg_rct_Stage_36_End,
    },
    {
      name: "The Fire",
      area: gg_rct_Stage_37_Boundry,
      start: gg_rct_Stage_37_Start,
      wolf: gg_rct_Stage_37_Spawn,
      end: gg_rct_Stage_37_End,
    },
    {
      name: "The Hate",
      area: gg_rct_Stage_38_Boundry,
      start: gg_rct_Stage_38_Start,
      wolf: gg_rct_Stage_38_Spawn,
      end: gg_rct_Stage_38_End,
    },
    {
      name: "The Ejaculation",
      area: gg_rct_Stage_39_Boundry,
      start: gg_rct_Stage_39_Start,
      wolf: gg_rct_Stage_39_Spawn,
      end: gg_rct_Stage_39_End,
      outside: gg_rct_Stage_39_Boundry_2,
    },
    {
      name: "The Sad Robot",
      area: gg_rct_Stage_40_Boundry,
      start: gg_rct_Stage_40_Start,
      wolf: gg_rct_Stage_40_Spawn,
      end: gg_rct_Stage_40_End,
    },
    {
      name: "The Tumor",
      area: gg_rct_Stage_41_Boundry,
      start: gg_rct_Stage_41_Start,
      wolf: gg_rct_Stage_41_Spawn,
      end: gg_rct_Stage_41_End,
      outside: gg_rct_Stage_41_Boundry_2,
    },
    {
      name: "The _|",
      area: gg_rct_Stage_42_Boundry,
      start: gg_rct_Stage_42_Start,
      wolf: gg_rct_Stage_42_Spawn,
      end: gg_rct_Stage_42_End,
    },
    {
      name: "The Trench",
      area: gg_rct_Stage_43_Boundry,
      start: gg_rct_Stage_43_Start,
      wolf: gg_rct_Stage_43_Spawn,
      end: gg_rct_Stage_43_End,
    },
    {
      name: "The Shipwreck",
      area: gg_rct_Stage_44_Boundry,
      start: gg_rct_Stage_44_Start,
      wolf: gg_rct_Stage_44_Spawn,
      end: gg_rct_Stage_44_End,
    },
    {
      name: "The Gap",
      area: gg_rct_Stage_45_Boundry,
      start: gg_rct_Stage_45_Start,
      wolf: gg_rct_Stage_45_Spawn,
      end: gg_rct_Stage_45_End,
    },
    {
      name: "The Jump",
      area: gg_rct_Stage_46_Boundry,
      start: gg_rct_Stage_46_Start,
      wolf: gg_rct_Stage_46_Spawn,
      end: gg_rct_Stage_46_End,
    },
    {
      name: "The Drained Lake",
      area: gg_rct_Stage_47_Boundry,
      start: gg_rct_Stage_47_Start,
      wolf: gg_rct_Stage_47_Spawn,
      end: gg_rct_Stage_47_End,
      outside: gg_rct_Stage_47_Boundry_2,
    },
    {
      name: "The Mini Dump",
      area: gg_rct_Stage_48_Boundry,
      start: gg_rct_Stage_48_Start,
      wolf: gg_rct_Stage_48_Spawn,
      end: gg_rct_Stage_48_End,
    },
    {
      name: "The Gorge",
      area: gg_rct_Stage_49_Boundry,
      start: gg_rct_Stage_49_Start,
      wolf: gg_rct_Stage_49_Spawn,
      end: gg_rct_Stage_49_End,
    },
    {
      name: "Under the Waterfall",
      area: gg_rct_Stage_50_Boundry,
      start: gg_rct_Stage_50_Start,
      wolf: gg_rct_Stage_50_Spawn,
      end: gg_rct_Stage_50_End,
    },
    {
      name: "The Cage",
      area: gg_rct_Stage_51_Boundry,
      start: gg_rct_Stage_51_Start,
      wolf: gg_rct_Stage_51_Spawn,
      end: gg_rct_Stage_51_End,
    },
    {
      name: "Angles",
      area: gg_rct_Stage_52_Boundry,
      start: gg_rct_Stage_52_Start,
      wolf: gg_rct_Stage_52_Spawn,
      end: gg_rct_Stage_52_End,
      outside: gg_rct_Stage_52_Boundry_2,
    },
    {
      name: "The Trough",
      area: gg_rct_Stage_53_Boundry,
      start: gg_rct_Stage_53_Start,
      wolf: gg_rct_Stage_53_Spawn,
      end: gg_rct_Stage_53_End,
    },
    {
      name: "The Narrows",
      area: gg_rct_Stage_54_Boundry,
      start: gg_rct_Stage_54_Start,
      wolf: gg_rct_Stage_54_Spawn,
      end: gg_rct_Stage_54_End,
    },
    {
      name: "Rivendell",
      area: gg_rct_Stage_55_Boundry,
      start: gg_rct_Stage_55_Start,
      wolf: gg_rct_Stage_55_Spawn,
      end: gg_rct_Stage_55_End,
    },
    {
      name: "The Lamp",
      area: gg_rct_Stage_56_Boundry,
      start: gg_rct_Stage_56_Start,
      wolf: gg_rct_Stage_56_Spawn,
      end: gg_rct_Stage_56_End,
    },
    {
      name: "Autism",
      area: gg_rct_Stage_57_Boundry,
      start: gg_rct_Stage_57_Start,
      wolf: gg_rct_Stage_57_Spawn,
      end: gg_rct_Stage_57_End,
    },
    {
      name: "Big Drew",
      area: gg_rct_Stage_58_Boundry,
      start: gg_rct_Stage_58_Start,
      wolf: gg_rct_Stage_58_Spawn,
      end: gg_rct_Stage_58_End,
    },
    {
      name: "The Split",
      area: gg_rct_Stage_59_Boundry,
      start: gg_rct_Stage_59_Start,
      wolf: gg_rct_Stage_59_Spawn,
      end: gg_rct_Stage_59_End,
    },
  );

  for (const map of bulldogMaps) {
    const t = TriggerEx.create();
    const r = CreateRegion();
    RegionAddRect(r, map.end);
    t.registerEnterRegion(r, () => {
      if (map.name !== bulldogMaps[bulldog.map].name) return false;
      const u = UnitEx.fromFilter();
      if (!u) return false;
      return u.typeId === sheepType && !u.isIllusion();
    });
    t.addAction(() => {
      const u = UnitEx.fromEvent()!;
      const p = u.owner;
      scored(p);
      const e = Effect.create("Abilities/Spells/Human/DispelMagic/DispelMagicTarget", u.x, u.y)!;
      setTimeout(2, () => e.destroy());

      if (udg_practiceOn) return;

      u.destroy();

      ForceEx.sheep.removePlayer(p);
      ForceEx.wisps.addPlayer(p);

      if (ForceEx.sheep.size() === 0) TriggerExecute(gg_trg_sheepWin);
      else gsDistributeGold(p.handle, true, TRANSFER_DISPLAY_INVOLVED);
    });
  }

  const mapTrigger = TriggerEx.create();
  mapTrigger.registerAnyPlayerChatEvent("-map ", false);
  mapTrigger.addAction(() => {
    if (udg_gameStarted || !bulldog.enabled) return;
    const p = MapPlayerEx.fromEvent();
    if (!p?.isHost) return;

    const input = GetEventPlayerChatString() ?? "";
    if (!input.toLowerCase().startsWith("-map ") || input.length < 6) return;
    const mapInput = input.slice(5);
    const lMapInput = mapInput.toLowerCase();
    const mapIndex = bulldogMaps.findIndex((m) => m.name.toLowerCase().includes(lMapInput));
    if (mapIndex === -1) {
      if (p.isLocal()) StartSound(gg_snd_Error);
      p.displayTimedText(`No map matching "${mapInput}"`);
      return;
    }

    setBulldogMap(mapIndex);
  });

  const onKey = (dir: "right" | "left") => () => {
    if (udg_gameStarted || !bulldog.enabled) return;
    const p = MapPlayerEx.fromEvent();
    if (!p?.isHost) return;

    setBulldogMap((bulldog.map + (dir === "left" ? bulldogMaps.length - 1 : 1)) % bulldogMaps.length);
  };

  const right = TriggerEx.create();
  right.registerAnyPlayerEvent(EVENT_PLAYER_ARROW_RIGHT_DOWN);
  right.addAction(onKey("right"));
  const left = TriggerEx.create();
  left.registerAnyPlayerEvent(EVENT_PLAYER_ARROW_LEFT_DOWN);
  left.addAction(onKey("left"));
});
