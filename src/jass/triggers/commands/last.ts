//===========================================================================
// Trigger: last
//===========================================================================

const Trig_last_Actions = () => {
  if (udg_timeString === "") {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              No rounds have been played yet.",
    );
  } else {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              Last: " + fullTimeString + ".",
    );
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_last: () => void;
}
InitTrig_last = () => {
  gg_trg_last = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_last, "-last", true);
  TriggerRegisterPlayerChatEventAll(gg_trg_last, "-l", true);
  TriggerAddAction(gg_trg_last, Trig_last_Actions);
};
