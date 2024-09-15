//===========================================================================
// Trigger: MultiKillCheck
//===========================================================================
const Trig_MultiKillCheck_Conditions = () => {
  if (GetUnitTypeId(GetDyingUnit()!) !== sheepType) return false;
  if (IsUnitIllusion(GetDyingUnit()!)) return false;
  if (udg_switchOn) return false;
  return true;
};

const Trig_MultiKillCheck_Func006Func001Func001Func001Func001Func002C = () => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
    ] === 5))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006Func001Func001Func001Func001C = () => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
    ] >= 4))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006Func001Func001Func001C = () => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
    ] === 3))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006Func001Func001C = () => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
    ] === 2))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006Func001C = () => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
    ] === 1))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006C = () => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
    ] === 0))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Actions = () => {
  TimerStart(
    udg_multiKillTimer[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
    ],
    12.01,
    false,
    null,
  );
  if ((Trig_MultiKillCheck_Func006C())) {
    udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
    ] = 1;
  } else {
    if ((Trig_MultiKillCheck_Func006Func001C())) {
      udg_multiKillNum[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
      ] = 2;
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        ("                              " +
          udg_colorString[
            GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
          ]) +
          (GetPlayerName(GetOwningPlayer(GetKillingUnit()!)) +
            "|r |CFF00AEEFDouble Kill!|r"),
      );
      PlaySoundBJ(gg_snd_DoubleKill);
    } else {
      if ((Trig_MultiKillCheck_Func006Func001Func001C())) {
        udg_multiKillNum[
          GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
        ] = 3;
        DisplayTimedTextToForce(
          GetPlayersAll()!,
          5,
          ("                              " +
            udg_colorString[
              GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
            ]) +
            (GetPlayerName(GetOwningPlayer(GetKillingUnit()!)) +
              "|r |CFF00AEEFTriple Kill!|r"),
        );
        PlaySoundBJ(gg_snd_TripleKill);
      } else {
        if ((Trig_MultiKillCheck_Func006Func001Func001Func001C())) {
          udg_multiKillNum[
            GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
          ] = 4;
          DisplayTimedTextToForce(
            GetPlayersAll()!,
            5,
            ("                              " +
              udg_colorString[
                GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
              ]) +
              (GetPlayerName(GetOwningPlayer(GetKillingUnit()!)) +
                "|r |CFF00AEEFOverkill!|r"),
          );
          PlaySoundBJ(gg_snd_Overkill);
        } else {
          if ((Trig_MultiKillCheck_Func006Func001Func001Func001Func001C())) {
            udg_multiKillNum[
              GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
            ] = udg_multiKillNum[
              GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
            ] + 1;
            if (
              (Trig_MultiKillCheck_Func006Func001Func001Func001Func001Func002C())
            ) {
              DisplayTimedTextToForce(
                GetPlayersAll()!,
                5,
                ("                              " +
                  udg_colorString[
                    GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
                  ]) +
                  (GetPlayerName(GetOwningPlayer(GetKillingUnit()!)) +
                    "|r |CFF00AEEFKILLIONAIRE!!!|r"),
              );
            } else {
              DisplayTimedTextToForce(
                GetPlayersAll()!,
                5,
                ("                              " +
                  udg_colorString[
                    GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))
                  ]) +
                  (GetPlayerName(GetOwningPlayer(GetKillingUnit()!)) +
                    ("|r |CFF00AEEFKILLIONAIRE!!!|r |CFFED1C24x" +
                      I2S(
                        udg_multiKillNum[
                          GetConvertedPlayerId(
                            GetOwningPlayer(GetKillingUnit()!),
                          )
                        ] - 4,
                      ))),
              );
            }
            PlaySoundBJ(gg_snd_Killionaire);
          }
        }
      }
    }
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_MultiKillCheck: () => void;
}
InitTrig_MultiKillCheck = () => {
  gg_trg_MultiKillCheck = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_MultiKillCheck, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_MultiKillCheck,
    Condition(Trig_MultiKillCheck_Conditions),
  );
  TriggerAddAction(gg_trg_MultiKillCheck, Trig_MultiKillCheck_Actions);
};
