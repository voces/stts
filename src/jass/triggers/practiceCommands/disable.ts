//===========================================================================
// Trigger: disable
//===========================================================================

const Trig_disable_Actions = () => {
  const pid = GetConvertedPlayerId(GetTriggerPlayer()!);
  if (udg_disable[pid]) {
    udg_disable[pid] = false;
    UnitAddAbility(udg_unit[pid], FourCC("A00U"));
    DisplayTimedTextToPlayer(
      GetLocalPlayer(),
      0,
      0,
      10,
      "|CFFFFCC00D|restroy All Farms |CFF00AEEFEnabled|r",
    );
  } else {
    udg_disable[pid] = true;
    UnitRemoveAbility(udg_unit[pid], FourCC("A00U"));
    DisplayTimedTextToPlayer(
      GetLocalPlayer(),
      0,
      0,
      10,
      "|CFFFFCC00D|restroy All Farms |CFFED1C24Disabled|r",
    );
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_disable: () => void;
}
InitTrig_disable = () => {
  gg_trg_disable = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_disable, "-disable", true);
  TriggerAddAction(gg_trg_disable, Trig_disable_Actions);
};
