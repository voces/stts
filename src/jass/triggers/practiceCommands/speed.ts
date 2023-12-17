import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_speed_Conditions = () => {
  if ((!(GetTriggerPlayer() === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002Func001Func002Func002Func002C = () => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "5"))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002Func001Func002Func002C = () => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "4"))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002Func001Func002C = () => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "3"))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002Func001C = () => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "2"))) {
    return false;
  }
  return true;
};

const Trig_speed_Func002C = () => {
  if ((!(SubStringBJ(GetEventPlayerChatString()!, 8, 8) === "1"))) {
    return false;
  }
  return true;
};

const Trig_speed_Actions = () => {
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

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_speed: () => void;
}
InitTrig_speed = () => {
  gg_trg_speed = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_speed, "-speed", false);
  TriggerAddCondition(gg_trg_speed, Condition(Trig_speed_Conditions));
  TriggerAddAction(gg_trg_speed, Trig_speed_Actions);
};
