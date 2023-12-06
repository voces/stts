//===========================================================================
// Trigger: buyFromInventory
//===========================================================================
const Trig_buyFromInventory_Func002Func001C = (): boolean => {
  if (
    (!(GetPlayerState(
      GetOwningPlayer(GetLearningUnit()!),
      PLAYER_STATE_RESOURCE_GOLD,
    ) >= 140))
  ) {
    return false;
  }
  return true;
};

const Trig_buyFromInventory_Func002Func002Func001C = (): boolean => {
  if (
    (!(GetPlayerState(
      GetOwningPlayer(GetLearningUnit()!),
      PLAYER_STATE_RESOURCE_GOLD,
    ) >= 42))
  ) {
    return false;
  }
  return true;
};

const Trig_buyFromInventory_Func002Func002Func002Func001Func001Func001C =
  (): boolean => {
    if (
      (!(GetPlayerState(
        GetOwningPlayer(GetLearningUnit()!),
        PLAYER_STATE_RESOURCE_GOLD,
      ) >= 112))
    ) {
      return false;
    }
    return true;
  };

const Trig_buyFromInventory_Func002Func002Func002Func001Func001C =
  (): boolean => {
    if ((!(GetLearnedSkillBJ() === FourCC("A010")))) {
      return false;
    }
    return true;
  };

const Trig_buyFromInventory_Func002Func002Func002Func001Func002C =
  (): boolean => {
    if (
      (!(GetPlayerState(
        GetOwningPlayer(GetLearningUnit()!),
        PLAYER_STATE_RESOURCE_GOLD,
      ) >= 75))
    ) {
      return false;
    }
    return true;
  };

const Trig_buyFromInventory_Func002Func002Func002Func001C = (): boolean => {
  if ((!(GetLearnedSkillBJ() === FourCC("A00R")))) {
    return false;
  }
  return true;
};

const Trig_buyFromInventory_Func002Func002Func002Func002C = (): boolean => {
  if (
    (!(GetPlayerState(
      GetOwningPlayer(GetLearningUnit()!),
      PLAYER_STATE_RESOURCE_GOLD,
    ) >= 42))
  ) {
    return false;
  }
  return true;
};

const Trig_buyFromInventory_Func002Func002Func002C = (): boolean => {
  if ((!(GetLearnedSkillBJ() === FourCC("A00P")))) {
    return false;
  }
  return true;
};

const Trig_buyFromInventory_Func002Func002C = (): boolean => {
  if ((!(GetLearnedSkillBJ() === FourCC("A00O")))) {
    return false;
  }
  return true;
};

const Trig_buyFromInventory_Func002C = (): boolean => {
  if ((!(GetLearnedSkillBJ() === FourCC("A00N")))) {
    return false;
  }
  return true;
};

const Trig_buyFromInventory_Actions = (): void => {
  udg_atempplayer = GetForceOfPlayer(GetOwningPlayer(GetLearningUnit()!))!;
  if ((Trig_buyFromInventory_Func002C())) {
    if ((Trig_buyFromInventory_Func002Func001C())) {
      UnitAddItemByIdSwapped(FourCC("I00A"), GetLearningUnit()!);
      AdjustPlayerStateBJ(
        -140,
        GetOwningPlayer(GetLearningUnit()!),
        PLAYER_STATE_RESOURCE_GOLD,
      );
    } else {
      DisplayTextToForce(
        udg_atempplayer,
        "                              |CFF00AEEFThat item is 140 gold.",
      );
    }
    TriggerSleepAction(0.01);
    UnitRemoveAbilityBJ(FourCC("A00N"), GetLearningUnit()!);
  } else {
    if ((Trig_buyFromInventory_Func002Func002C())) {
      if ((Trig_buyFromInventory_Func002Func002Func001C())) {
        UnitAddItemByIdSwapped(FourCC("I00F"), GetLearningUnit()!);
        AdjustPlayerStateBJ(
          -42,
          GetOwningPlayer(GetLearningUnit()!),
          PLAYER_STATE_RESOURCE_GOLD,
        );
      } else {
        DisplayTextToForce(
          udg_atempplayer,
          "                              |CFF00AEEFThat item is 42 gold.",
        );
      }
      TriggerSleepAction(0.01);
      UnitRemoveAbilityBJ(FourCC("A00O"), GetLearningUnit()!);
    } else {
      if ((Trig_buyFromInventory_Func002Func002Func002C())) {
        if ((Trig_buyFromInventory_Func002Func002Func002Func002C())) {
          UnitAddItemByIdSwapped(FourCC("I007"), GetLearningUnit()!);
          AdjustPlayerStateBJ(
            -42,
            GetOwningPlayer(GetLearningUnit()!),
            PLAYER_STATE_RESOURCE_GOLD,
          );
        } else {
          DisplayTextToForce(
            udg_atempplayer,
            "                              |CFF00AEEFThat item is 42 gold.",
          );
        }
        TriggerSleepAction(0.01);
        UnitRemoveAbilityBJ(FourCC("A00P"), GetLearningUnit()!);
      } else {
        if ((Trig_buyFromInventory_Func002Func002Func002Func001C())) {
          if ((Trig_buyFromInventory_Func002Func002Func002Func001Func002C())) {
            UnitAddItemByIdSwapped(FourCC("I002"), GetLearningUnit()!);
            AdjustPlayerStateBJ(
              -75,
              GetOwningPlayer(GetLearningUnit()!),
              PLAYER_STATE_RESOURCE_GOLD,
            );
          } else {
            DisplayTextToForce(
              udg_atempplayer,
              "                              |CFF00AEEFThat item is 75 gold.",
            );
          }
          TriggerSleepAction(0.01);
          UnitRemoveAbilityBJ(FourCC("A00R"), GetLearningUnit()!);
        } else {
          if ((Trig_buyFromInventory_Func002Func002Func002Func001Func001C())) {
            if (
              (Trig_buyFromInventory_Func002Func002Func002Func001Func001Func001C())
            ) {
              UnitAddItemByIdSwapped(FourCC("I000"), GetLearningUnit()!);
              AdjustPlayerStateBJ(
                -112,
                GetOwningPlayer(GetLearningUnit()!),
                PLAYER_STATE_RESOURCE_GOLD,
              );
            } else {
              DisplayTextToForce(
                udg_atempplayer,
                "                              |CFF00AEEFThat item is 112 gold.",
              );
            }
            TriggerSleepAction(0.01);
            UnitRemoveAbilityBJ(FourCC("A010"), GetLearningUnit()!);
          }
        }
      }
    }
  }
  DestroyForce(udg_atempplayer);
  ModifyHeroSkillPoints(GetLearningUnit()!, bj_MODIFYMETHOD_ADD, 1);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_buyFromInventory: () => void;
}
InitTrig_buyFromInventory = (): void => {
  gg_trg_buyFromInventory = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_buyFromInventory,
    EVENT_PLAYER_HERO_SKILL,
  );
  TriggerAddAction(gg_trg_buyFromInventory, Trig_buyFromInventory_Actions);
};
