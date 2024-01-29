import { MapPlayerEx } from "handles/MapPlayerEx";

const data = [
  { skill: "A00N", cost: 140, item: "I00A" }, // golem
  { skill: "A00O", cost: 42, item: "I00F" }, // speed?
  { skill: "A00P", cost: 42, item: "I007" }, // str?
  { skill: "A00R", cost: 75, item: "I002" }, // bomber
  { skill: "A010", cost: 112, item: "I000" }, // beam
];

const Trig_buyFromInventory_Actions = () => {
  const learningUnit = GetLearningUnit()!;
  const learnedSkill = GetLearnedSkill();
  const currentGold = GetPlayerState(GetOwningPlayer(learningUnit), PLAYER_STATE_RESOURCE_GOLD);
  const p = MapPlayerEx.fromOwner(learningUnit)!;
  udg_atempplayer = GetForceOfPlayer(GetOwningPlayer(learningUnit))!;

  for (let i = 0; i < data.length; i++) {
    if (learnedSkill === FourCC(data[i].skill)) {
      if (currentGold >= data[i].cost) {
        UnitAddItemById(learningUnit, FourCC(data[i].item));
        AdjustPlayerStateBJ(-data[i].cost, GetOwningPlayer(learningUnit), PLAYER_STATE_RESOURCE_GOLD);
      } else p.displayTimedText(`                              |CFF00AEEFThat item is ${data[i].cost} gold.`);
      TriggerSleepAction(0.01);
      UnitRemoveAbility(learningUnit, learnedSkill);
      break;
    }
  }
  ModifyHeroSkillPoints(learningUnit, bj_MODIFYMETHOD_ADD, 1);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_buyFromInventory: () => void;
}
InitTrig_buyFromInventory = () => {
  gg_trg_buyFromInventory = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_buyFromInventory, EVENT_PLAYER_HERO_SKILL);
  TriggerAddAction(gg_trg_buyFromInventory, Trig_buyFromInventory_Actions);
};
