export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_antishareruin: () => void;
}
InitTrig_antishareruin = () => {
  const t = CreateTrigger();

  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    TriggerRegisterPlayerUnitEvent(
      t,
      Player(i)!,
      EVENT_PLAYER_UNIT_SELECTED,
      Filter(() => {
        const owner = GetOwningPlayer(GetFilterUnit()!);
        return owner !== GetTriggerPlayer()! &&
          GetPlayerAlliance(owner, GetTriggerPlayer()!, ALLIANCE_SHARED_CONTROL) &&
          GetUnitTypeId(GetFilterUnit()!) === sheepType &&
          GetPlayerController(owner) !== MAP_CONTROL_COMPUTER;
      }),
    );
  }

  TriggerAddAction(t, () => {
    if (GetTriggerPlayer() === GetLocalPlayer()) SelectUnit(GetTriggerUnit()!, false);
  });
};
