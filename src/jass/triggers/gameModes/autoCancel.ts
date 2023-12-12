export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_autoCancel: () => void;
}
InitTrig_autoCancel = () => {
  gg_trg_autoCancel = CreateTrigger();
  TriggerRegisterPlayerChatEventAll(gg_trg_autoCancel, "-autocancel", false);

  TriggerAddCondition(
    gg_trg_autoCancel,
    Condition(() => GetTriggerPlayer() === udg_Custom),
  );

  TriggerAddAction(gg_trg_autoCancel, () => {
    autoCancelEnabled = !autoCancelEnabled;

    DisplayTimedTextToForce(
      GetPlayersAll()!,
      10,
      `                              |CFF00AEEFAutocancel |CFFED1C24${autoCancelEnabled ? "enabled" : "disabled"}|r`,
    );
  });
};
