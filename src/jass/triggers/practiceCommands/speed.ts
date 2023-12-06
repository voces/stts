//===========================================================================
// Trigger: speed
//===========================================================================
const Trig_speed_Conditions = (): boolean => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002Func001Func002Func002Func002C = (): boolean => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "5"))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002Func001Func002Func002C = (): boolean => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "4"))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002Func001Func002C = (): boolean => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "3"))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002Func001C = (): boolean => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "2"))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002C = (): boolean => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "1"))) {
    return false;
  }
  return true;
};

const Trig_speed_Actions = (): void => {
  if ((Trig_speed_Func002C())) {
    SetGameSpeed(MAP_SPEED_SLOWEST);
    DisplayTimedTextToForce(
      GetPlayersAll()!,
      8,
      "                              Set game speed to: |cff00aeefSlowest|r",
    );
  } else {
    if ((Trig_speed_Func002Func001C())) {
      SetGameSpeed(MAP_SPEED_SLOW);
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        8,
        "                              Set game speed to: |cff00aeefSlow|r",
      );
    } else {
      if ((Trig_speed_Func002Func001Func002C())) {
        SetGameSpeed(MAP_SPEED_NORMAL);
        DisplayTimedTextToForce(
          GetPlayersAll()!,
          8,
          "                              Set game speed to: |cff00aeefNormal|r",
        );
      } else {
        if ((Trig_speed_Func002Func001Func002Func002C())) {
          SetGameSpeed(MAP_SPEED_FAST);
          DisplayTimedTextToForce(
            GetPlayersAll()!,
            8,
            "                              Set game speed to: |cff00aeefFast|r",
          );
        } else {
          if ((Trig_speed_Func002Func001Func002Func002Func002C())) {
            SetGameSpeed(MAP_SPEED_FASTEST);
            DisplayTimedTextToForce(
              GetPlayersAll()!,
              8,
              "                              Set game speed to: |cff00aeefFastest|r",
            );
          }
        }
      }
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_speed: () => void;
}
InitTrig_speed = (): void => {
  gg_trg_speed = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(0)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(1)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(2)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(3)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(4)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(5)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(6)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(7)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(8)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(9)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(10)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(11)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(12)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(13)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(14)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(15)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(16)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(17)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(18)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(19)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(20)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(21)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(22)!, "-speed", false);
  TriggerRegisterPlayerChatEvent(gg_trg_speed, Player(23)!, "-speed", false);
  TriggerAddCondition(gg_trg_speed, Condition(Trig_speed_Conditions));
  TriggerAddAction(gg_trg_speed, Trig_speed_Actions);
};
