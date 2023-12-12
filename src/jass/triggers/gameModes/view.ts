//===========================================================================
// Trigger: view
//===========================================================================
const Trig_view_Conditions = () => {
  if ((!(GetTriggerPlayer()! === udg_Custom))) {
    return false;
  }
  return true;
};

const Trig_view_Func001C = () => {
  if ((!(udg_viewOn === true))) {
    return false;
  }
  return true;
};

const Trig_view_Actions = () => {
  if ((Trig_view_Func001C())) {
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      DestroyFogModifier(udg_view[GetForLoopIndexA()]);
      udg_view[bj_forLoopAIndex] = null as unknown as fogmodifier;
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
    udg_viewOn = false;
  } else {
    udg_viewOn = true;
    bj_forLoopAIndex = 1;
    bj_forLoopAIndexEnd = 24;
    while (true) {
      if (bj_forLoopAIndex > bj_forLoopAIndexEnd) break;
      CreateFogModifierRectBJ(
        true,
        ConvertedPlayer(GetForLoopIndexA())!,
        FOG_OF_WAR_VISIBLE,
        GetPlayableMapRect()!,
      );
      udg_view[GetForLoopIndexA()] = GetLastCreatedFogModifier()!;
      bj_forLoopAIndex = bj_forLoopAIndex + 1;
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_view: () => void;
}
InitTrig_view = () => {
  gg_trg_view = CreateTrigger();
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(0)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(1)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(2)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(3)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(4)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(5)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(6)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(7)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(8)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(9)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(10)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(11)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(12)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(13)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(14)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(15)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(16)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(17)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(18)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(19)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(20)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(21)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(22)!, "-view", true);
  TriggerRegisterPlayerChatEvent(gg_trg_view, Player(23)!, "-view", true);
  TriggerAddCondition(gg_trg_view, Condition(Trig_view_Conditions));
  TriggerAddAction(gg_trg_view, Trig_view_Actions);
};
