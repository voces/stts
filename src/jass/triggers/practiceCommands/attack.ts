//===========================================================================
// Trigger: attack
//===========================================================================
const Trig_isVictim = (): boolean => {
  if (
    (!(GetOwningPlayer(udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)]) ===
      Player(bj_PLAYER_NEUTRAL_VICTIM)!))
  ) {
    return false;
  }
  return true;
};

const Trig_attack_Actions = (): void => {
  if ((Trig_isVictim())) {
    SetUnitOwner(
      udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
      Player(PLAYER_NEUTRAL_AGGRESSIVE)!,
      false,
    );
  }

  IssueTargetOrderBJ(
    udg_unit2[GetConvertedPlayerId(GetTriggerPlayer()!)],
    "attack",
    udg_unit[GetConvertedPlayerId(GetTriggerPlayer()!)],
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_attack: () => void;
}
InitTrig_attack = (): void => {
  gg_trg_attack = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_attack, "-a", true);
  TriggerAddAction(gg_trg_attack, Trig_attack_Actions);
};
