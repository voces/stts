//===========================================================================
// Trigger: switch

import { president } from "../../../modes/president";

//===========================================================================
const Trig_switch_Conditions = () => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_switch_Func002C = () => {
  if ((!(StringLength(udg_atempstring) === 1))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func010Func001Func003C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 9)!) === 0))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func010Func001C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 9)!) >= 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 9)!) <= 5))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func010Func002Func003C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!) === 0))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func010Func002C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!) >= 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!) <= 10))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func010Func003C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 14)!) >= 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 14)!) <= 5))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func010Func004C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 15, 17)!) >= 0))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 15, 17)!) <= 10))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func010C = () => {
  if ((!(udg_atempstring === "-switch"))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func011C = () => {
  if ((!(udg_positionOn === true))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003Func015C = () => {
  if ((!(udg_positionOn === true))) {
    return false;
  }
  return true;
};

const Trig_switch_Func003C = () => {
  if ((!(udg_switchOn === true))) {
    return false;
  }
  if ((!(GetEventPlayerChatString()! === "-switch"))) {
    return false;
  }
  return true;
};

const Trig_switch_Actions = () => {
  udg_atempstring = I2S(R2I(ModuloReal(udg_time, 60)))!;
  if ((Trig_switch_Func002C())) {
    udg_atempstring = "0" + udg_atempstring;
  }
  if ((Trig_switch_Func003C())) {
    EnableTrigger(gg_trg_sheepDies);
    EnableTrigger(gg_trg_spiritDies);
    DisableTrigger(gg_trg_sheepSwitch);
    udg_switchOn = false;
    udg_dummyWisps = 0;
    udg_wispPoints = 0;
    if ((Trig_switch_Func003Func015C())) {
      LeaderboardSetPlayerItemLabelBJ(
        Player(PLAYER_NEUTRAL_PASSIVE)!,
        GetLastCreatedLeaderboard()!,
        "|CFFED1C24Next: " +
          (I2S(R2I(udg_time / 60)) + ((":" + udg_atempstring) + " pos")),
      );
    } else {
      LeaderboardSetPlayerItemLabelBJ(
        Player(PLAYER_NEUTRAL_PASSIVE)!,
        GetLastCreatedLeaderboard()!,
        "|CFFED1C24Next: " +
          (I2S(R2I(udg_time / 60)) + (":" + udg_atempstring)),
      );
    }
  } else {
    DisableTrigger(gg_trg_sheepDies);
    DisableTrigger(gg_trg_spiritDies);
    DisableTrigger(gg_trg_sheepVamp);
    EnableTrigger(gg_trg_sheepSwitch);
    vampOn = false;
    president.enabled = false;
    udg_switchOn = true;
    if ((Trig_switch_Func003Func010C())) {
      udg_dummyWisps = 0;
      udg_wispPoints = 0;
      udg_sheepInvul = 5;
      udg_wolfSpawn = 10;
    } else {
      if ((Trig_switch_Func003Func010Func001C())) {
        if ((Trig_switch_Func003Func010Func001Func003C())) {
          udg_sheepInvul = 0.01;
        } else {
          udg_sheepInvul = I2R(
            S2I(SubStringBJ(GetEventPlayerChatString()!, 9, 9)!),
          );
        }
      } else {
        udg_sheepInvul = 5;
      }
      if ((Trig_switch_Func003Func010Func002C())) {
        if ((Trig_switch_Func003Func010Func002Func003C())) {
          udg_wolfSpawn = 0.01;
        } else {
          udg_wolfSpawn = I2R(
            S2I(SubStringBJ(GetEventPlayerChatString()!, 11, 12)!),
          );
        }
      } else {
        udg_wolfSpawn = 10;
      }
      if ((Trig_switch_Func003Func010Func003C())) {
        udg_dummyWisps = S2I(SubStringBJ(GetEventPlayerChatString()!, 13, 14)!);
      } else {
        udg_dummyWisps = 0;
      }
      if ((Trig_switch_Func003Func010Func004C())) {
        udg_wispPoints = S2I(SubStringBJ(GetEventPlayerChatString()!, 15, 17)!);
      } else {
        udg_wispPoints = 0;
      }
    }
    if ((Trig_switch_Func003Func011C())) {
      LeaderboardSetPlayerItemLabelBJ(
        Player(PLAYER_NEUTRAL_PASSIVE)!,
        GetLastCreatedLeaderboard()!,
        "|CFFED1C24Next: " +
          (I2S(R2I(udg_time / 60)) + ((":" + udg_atempstring) + " switch/pos")),
      );
    } else {
      LeaderboardSetPlayerItemLabelBJ(
        Player(PLAYER_NEUTRAL_PASSIVE)!,
        GetLastCreatedLeaderboard()!,
        "|CFFED1C24Next: " +
          (I2S(R2I(udg_time / 60)) + ((":" + udg_atempstring) + " switch")),
      );
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_switch: () => void;
}
InitTrig_switch = () => {
  gg_trg_switch = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(0)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(1)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(2)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(3)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(4)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(5)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(6)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(7)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(8)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(9)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(10)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(11)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(12)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(13)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(14)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(15)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(16)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(17)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(18)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(19)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(20)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(21)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(22)!, "-switch", false);
  TriggerRegisterPlayerChatEvent(gg_trg_switch, Player(23)!, "-switch", false);
  TriggerAddCondition(gg_trg_switch, Condition(Trig_switch_Conditions));
  TriggerAddAction(gg_trg_switch, Trig_switch_Actions);
};
