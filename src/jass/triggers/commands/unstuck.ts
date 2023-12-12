//===========================================================================
// Trigger: unstuck
//===========================================================================
const Trig_unstuck_Actions = () => {
  const p = GetTriggerPlayer()!;
  let u: unit | undefined = CreateUnit(p, unstuckType, 0, 0, 270)!;
  const g = GetUnitsSelectedAll(p)!;
  SelectUnitForPlayerSingle(u, p);
  ForceUICancelBJ(p);
  RemoveUnit(u);
  u = FirstOfGroup(g);
  while (true) {
    if (u == null) break;
    SelectUnitAddForPlayer(u, p);
    GroupRemoveUnit(g, u);
    u = FirstOfGroup(g);
  }
  DestroyGroup(g);
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_unstuck: () => void;
}
InitTrig_unstuck = () => {
  let i = 0;
  gg_trg_unstuck = CreateTrigger();
  while (true) {
    TriggerRegisterPlayerChatEvent(gg_trg_unstuck, Player(i)!, "-u", false);
    i = i + 1;
    if (i === bj_MAX_PLAYERS) break;
  }
  TriggerAddAction(gg_trg_unstuck, Trig_unstuck_Actions);
};
