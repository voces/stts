//===========================================================================
// Trigger: antishareruin
//===========================================================================
const Trig_antishareruin_Filter = (): boolean => {
  const owner = GetOwningPlayer(GetFilterUnit()!);
  return owner !== GetTriggerPlayer()! &&
    GetPlayerAlliance(owner, GetTriggerPlayer()!, ALLIANCE_SHARED_CONTROL) &&
    GetUnitTypeId(GetFilterUnit()!) === FourCC("uC04") &&
    GetPlayerController(owner) !== MAP_CONTROL_COMPUTER;
};

const Trig_antishareruin_Actions = (): void => {
  if (GetTriggerPlayer()! === GetLocalPlayer()) {
    SelectUnit(GetTriggerUnit()!, false);
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_antishareruin: () => void;
}
InitTrig_antishareruin = (): void => {
  let i = 0;
  gg_trg_antishareruin = CreateTrigger();
  while (true) {
    if (i === bj_MAX_PLAYERS) break;
    TriggerRegisterPlayerUnitEvent(
      gg_trg_antishareruin,
      Player(i)!,
      EVENT_PLAYER_UNIT_SELECTED,
      Filter(Trig_antishareruin_Filter),
    );
    i = i + 1;
  }
  TriggerAddAction(gg_trg_antishareruin, Trig_antishareruin_Actions);
};
