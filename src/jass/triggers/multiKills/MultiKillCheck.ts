//===========================================================================
// Trigger: MultiKillCheck
//===========================================================================
const Trig_MultiKillCheck_Conditions = (): boolean => {
  if ((!(GetUnitTypeId(GetDyingUnit()!) === FourCC("uC04")))) {
    return false;
  }
  if ((!(IsUnitIllusionBJ(GetDyingUnit()!) === false))) {
    return false;
  }
  if ((!(udg_switchOn === false))) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006Func001Func001Func001Func001Func002C =
  (): boolean => {
    if (
      (!(udg_multiKillNum[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
      ] === 5))
    ) {
      return false;
    }
    return true;
  };

const Trig_MultiKillCheck_Func006Func001Func001Func001Func001C =
  (): boolean => {
    if (
      (!(udg_multiKillNum[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
      ] >= 4))
    ) {
      return false;
    }
    return true;
  };

const Trig_MultiKillCheck_Func006Func001Func001Func001C = (): boolean => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
    ] === 3))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006Func001Func001C = (): boolean => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
    ] === 2))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006Func001C = (): boolean => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
    ] === 1))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Func006C = (): boolean => {
  if (
    (!(udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
    ] === 0))
  ) {
    return false;
  }
  return true;
};

const Trig_MultiKillCheck_Actions = (): void => {
  StartTimerBJ(
    udg_multiKillTimer[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
    ],
    false,
    12.01,
  );
  if ((Trig_MultiKillCheck_Func006C())) {
    udg_multiKillNum[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
    ] = 1;
  } else {
    if ((Trig_MultiKillCheck_Func006Func001C())) {
      udg_multiKillNum[
        GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
      ] = 2;
      DisplayTimedTextToForce(
        GetPlayersAll()!,
        5,
        ("                              " +
          udg_colorString[
            GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
          ]) +
          (GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!)) +
            "|r |CFF00AEEFDouble Kill!|r"),
      );
      PlaySoundBJ(gg_snd_DoubleKill);
    } else {
      if ((Trig_MultiKillCheck_Func006Func001Func001C())) {
        udg_multiKillNum[
          GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
        ] = 3;
        DisplayTimedTextToForce(
          GetPlayersAll()!,
          5,
          ("                              " +
            udg_colorString[
              GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
            ]) +
            (GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!)) +
              "|r |CFF00AEEFTriple Kill!|r"),
        );
        PlaySoundBJ(gg_snd_TripleKill);
      } else {
        if ((Trig_MultiKillCheck_Func006Func001Func001Func001C())) {
          udg_multiKillNum[
            GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
          ] = 4;
          DisplayTimedTextToForce(
            GetPlayersAll()!,
            5,
            ("                              " +
              udg_colorString[
                GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
              ]) +
              (GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!)) +
                "|r |CFF00AEEFOverkill!|r"),
          );
          PlaySoundBJ(gg_snd_Overkill);
        } else {
          if ((Trig_MultiKillCheck_Func006Func001Func001Func001Func001C())) {
            udg_multiKillNum[
              GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
            ] = udg_multiKillNum[
              GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
            ] + 1;
            if (
              (Trig_MultiKillCheck_Func006Func001Func001Func001Func001Func002C())
            ) {
              DisplayTimedTextToForce(
                GetPlayersAll()!,
                5,
                ("                              " +
                  udg_colorString[
                    GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
                  ]) +
                  (GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!)) +
                    "|r |CFF00AEEFKILLIONAIRE!!!|r"),
              );
            } else {
              DisplayTimedTextToForce(
                GetPlayersAll()!,
                5,
                ("                              " +
                  udg_colorString[
                    GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
                  ]) +
                  (GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!)) +
                    ("|r |CFF00AEEFKILLIONAIRE!!!|r |CFFED1C24x" +
                      I2S(
                        udg_multiKillNum[
                          GetConvertedPlayerId(
                            GetOwningPlayer(GetKillingUnitBJ()!),
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
InitTrig_MultiKillCheck = (): void => {
  gg_trg_MultiKillCheck = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_MultiKillCheck, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_MultiKillCheck,
    Condition(Trig_MultiKillCheck_Conditions),
  );
  TriggerAddAction(gg_trg_MultiKillCheck, Trig_MultiKillCheck_Actions);
};
