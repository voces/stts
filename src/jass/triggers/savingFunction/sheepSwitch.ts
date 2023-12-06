//===========================================================================
// Trigger: sheepSwitch
//===========================================================================
const Trig_sheepSwitch_Conditions = (): boolean => {
  if ((!(GetUnitTypeId(GetTriggerUnit()!) === FourCC("uC04")))) {
    return false;
  }
  if ((!(IsUnitIllusionBJ(GetDyingUnit()!) === false))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func003C = (): boolean => {
  if (
    (!(udg_sheepZoom[
      GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
    ] > 0))
  ) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func004C = (): boolean => {
  if (
    (!(udg_wolfZoom[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))] >
      0))
  ) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func015002 = (): void => {
  RemoveUnit(GetEnumUnit()!);
};

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(23)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(22)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(21)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(20)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(19)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(18)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(17)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(16)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(15)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(14)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(13)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(12)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(11)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(10)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(9)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(8)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(7)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(6)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(5)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func031Func001Func001Func001Func001C = (): boolean => {
  if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(4)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func031Func001Func001Func001C = (): boolean => {
  if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(3)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func031Func001Func001C = (): boolean => {
  if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(2)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func031Func001C = (): boolean => {
  if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(1)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func031C = (): boolean => {
  if ((!(GetOwningPlayer(GetKillingUnitBJ()!) === Player(0)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func035002 = (): void => {
  RemoveUnit(GetEnumUnit()!);
};

const Trig_sheepSwitch_Func045A = (): void => {
  SetPlayerAllianceStateBJ(
    GetEnumPlayer()!,
    GetOwningPlayer(GetKillingUnitBJ()!),
    bj_ALLIANCE_UNALLIED,
  );
  SetPlayerAllianceStateBJ(
    GetEnumPlayer()!,
    GetOwningPlayer(GetKillingUnitBJ()!),
    bj_ALLIANCE_ALLIED_VISION,
  );
  SetPlayerAllianceStateBJ(
    GetOwningPlayer(GetKillingUnitBJ()!),
    GetEnumPlayer()!,
    bj_ALLIANCE_UNALLIED,
  );
  SetPlayerAllianceStateBJ(
    GetOwningPlayer(GetKillingUnitBJ()!),
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
  SetPlayerAllianceStateBJ(
    GetOwningPlayer(GetTriggerUnit()!),
    GetEnumPlayer()!,
    bj_ALLIANCE_UNALLIED,
  );
  SetPlayerAllianceStateBJ(
    GetEnumPlayer()!,
    GetOwningPlayer(GetTriggerUnit()!),
    bj_ALLIANCE_UNALLIED,
  );
};

const Trig_sheepSwitch_Func046A = (): void => {
  SetPlayerAllianceStateBJ(
    GetEnumPlayer()!,
    GetOwningPlayer(GetTriggerUnit()!),
    bj_ALLIANCE_UNALLIED,
  );
  SetPlayerAllianceStateBJ(
    GetEnumPlayer()!,
    GetOwningPlayer(GetTriggerUnit()!),
    bj_ALLIANCE_ALLIED_VISION,
  );
  SetPlayerAllianceStateBJ(
    GetOwningPlayer(GetTriggerUnit()!),
    GetEnumPlayer()!,
    bj_ALLIANCE_UNALLIED,
  );
  SetPlayerAllianceStateBJ(
    GetOwningPlayer(GetTriggerUnit()!),
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_VISION,
  );
  SetPlayerAllianceStateBJ(
    GetOwningPlayer(GetKillingUnitBJ()!),
    GetEnumPlayer()!,
    bj_ALLIANCE_UNALLIED,
  );
  SetPlayerAllianceStateBJ(
    GetEnumPlayer()!,
    GetOwningPlayer(GetKillingUnitBJ()!),
    bj_ALLIANCE_UNALLIED,
  );
};

const Trig_sheepSwitch_Func051Func001A = (): void => {
  SetPlayerAllianceStateBJ(
    GetOwningPlayer(GetKillingUnitBJ()!),
    GetEnumPlayer()!,
    bj_ALLIANCE_ALLIED_ADVUNITS,
  );
};

const Trig_sheepSwitch_Func051C = (): boolean => {
  if (
    (!(udg_AFK[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))] ===
      4))
  ) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(23)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(22)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(21)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(20)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(19)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(18)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(17)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(16)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(15)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(14)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(13)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(12)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(11)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(10)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(9)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(8)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(7)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(6)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001C =
  (): boolean => {
    if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(5)!))) {
      return false;
    }
    return true;
  };

const Trig_sheepSwitch_Func053Func001Func001Func001Func001C = (): boolean => {
  if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(4)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func053Func001Func001Func001C = (): boolean => {
  if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(3)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func053Func001Func001C = (): boolean => {
  if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(2)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func053Func001C = (): boolean => {
  if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(1)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Func053C = (): boolean => {
  if ((!(GetOwningPlayer(GetTriggerUnit()!) === Player(0)!))) {
    return false;
  }
  return true;
};

const Trig_sheepSwitch_Actions = (): void => {
  udg_hideEsc[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = true;
  udg_hideEsc[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))] =
    true;
  if ((Trig_sheepSwitch_Func003C())) {
    SetCameraFieldForPlayer(
      GetOwningPlayer(GetKillingUnitBJ()!),
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_sheepZoom[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))],
      0,
    );
  }
  if ((Trig_sheepSwitch_Func004C())) {
    SetCameraFieldForPlayer(
      GetOwningPlayer(GetDyingUnit()!),
      CAMERA_FIELD_TARGET_DISTANCE,
      udg_wolfZoom[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))],
      0,
    );
  }
  SetPlayerStateBJ(
    GetOwningPlayer(GetTriggerUnit()!),
    PLAYER_STATE_RESOURCE_LUMBER,
    0,
  );
  SetPlayerStateBJ(
    GetOwningPlayer(GetKillingUnitBJ()!),
    PLAYER_STATE_RESOURCE_LUMBER,
    0,
  );
  SetPlayerStateBJ(
    GetOwningPlayer(GetKillingUnitBJ()!),
    PLAYER_STATE_RESOURCE_GOLD,
    udg_sheepGold,
  );
  SetPlayerStateBJ(
    GetOwningPlayer(GetDyingUnit()!),
    PLAYER_STATE_RESOURCE_GOLD,
    udg_wolfGold,
  );
  udg_kills[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))] =
    udg_kills[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))] + 1;
  udg_farmCount[GetConvertedPlayerId(GetOwningPlayer(GetDyingUnit()!))] = 0;
  ForceRemovePlayerSimple(GetOwningPlayer(GetKillingUnitBJ()!), udg_Wolf);
  ForceAddPlayerSimple(GetOwningPlayer(GetKillingUnitBJ()!), udg_Sheep);
  udg_atempgroup = GetUnitsOfPlayerAll(GetOwningPlayer(GetKillingUnitBJ()!))!;
  ForGroupBJ(udg_atempgroup, Trig_sheepSwitch_Func015002);
  DestroyGroup(udg_atempgroup);
  bj_lastCreatedUnit = CreateUnit(
    GetOwningPlayer(GetKillingUnit()!),
    unstuck,
    RandomX(gg_rct_unstuckZone),
    RandomY(gg_rct_unstuckZone),
    0,
  );
  SelectUnitForPlayerSingle(
    GetLastCreatedUnit()!,
    GetOwningPlayer(GetKillingUnitBJ()!),
  );
  ForceUICancelBJ(GetOwningPlayer(GetKillingUnitBJ()!));
  RemoveUnit(GetLastCreatedUnit()!);
  bj_lastCreatedUnit = CreateUnit(
    GetOwningPlayer(GetKillingUnit()!),
    sheep,
    GetUnitX(GetTriggerUnit()!),
    GetUnitY(GetTriggerUnit()!),
    270,
  );
  udg_unit[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))] =
    GetLastCreatedUnit()!;
  UnitRemoveAbilityBJ(FourCC("A00D"), GetLastCreatedUnit()!);
  UnitAddAbilityBJ(FourCC("A00U"), GetLastCreatedUnit()!);
  SetPlayerUnitAvailableBJ(
    FourCC("n002"),
    true,
    GetOwningPlayer(GetLastCreatedUnit()!),
  );
  SelectUnitForPlayerSingle(
    GetLastCreatedUnit()!,
    GetOwningPlayer(GetKillingUnitBJ()!),
  );
  SetUnitInvulnerable(GetLastCreatedUnit()!, true);
  AddSpecialEffectTargetUnitBJ(
    "origin",
    GetLastCreatedUnit()!,
    "Abilities\\Spells\\Human\\DivineShield\\DivineShieldTarget.mdl",
  );
  udg_switchEffect[
    GetConvertedPlayerId(GetOwningPlayer(GetLastCreatedUnit()!))
  ] = GetLastCreatedEffectBJ()!;
  udg_atempint = GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!));
  if ((Trig_sheepSwitch_Func031C())) {
    StartTimerBJ(udg_redTimer, false, udg_sheepInvul);
    StartTimerBJ(udg_redHideTimer, false, 5);
    SetUnitVertexColorBJ(
      GetLastCreatedUnit()!,
      udg_SheepColorR[udg_atempint],
      udg_SheepColorG[udg_atempint],
      udg_SheepColorB[udg_atempint],
      0,
    );
  } else {
    if ((Trig_sheepSwitch_Func031Func001C())) {
      StartTimerBJ(udg_blueTimer, false, udg_sheepInvul);
      StartTimerBJ(udg_blueHideTimer, false, 5);
      SetUnitVertexColorBJ(
        GetLastCreatedUnit()!,
        udg_SheepColorR[udg_atempint],
        udg_SheepColorG[udg_atempint],
        udg_SheepColorB[udg_atempint],
        0,
      );
    } else {
      if ((Trig_sheepSwitch_Func031Func001Func001C())) {
        StartTimerBJ(udg_tealTimer, false, udg_sheepInvul);
        StartTimerBJ(udg_tealHideTimer, false, 5);
        SetUnitVertexColorBJ(
          GetLastCreatedUnit()!,
          udg_SheepColorR[udg_atempint],
          udg_SheepColorG[udg_atempint],
          udg_SheepColorB[udg_atempint],
          0,
        );
      } else {
        if ((Trig_sheepSwitch_Func031Func001Func001Func001C())) {
          StartTimerBJ(udg_purpleTimer, false, udg_sheepInvul);
          StartTimerBJ(udg_purpleHideTimer, false, 5);
          SetUnitVertexColorBJ(
            GetLastCreatedUnit()!,
            udg_SheepColorR[udg_atempint],
            udg_SheepColorG[udg_atempint],
            udg_SheepColorB[udg_atempint],
            0,
          );
        } else {
          if ((Trig_sheepSwitch_Func031Func001Func001Func001Func001C())) {
            StartTimerBJ(udg_yellowTimer, false, udg_sheepInvul);
            StartTimerBJ(udg_yellowHideTimer, false, 5);
            SetUnitVertexColorBJ(
              GetLastCreatedUnit()!,
              udg_SheepColorR[udg_atempint],
              udg_SheepColorG[udg_atempint],
              udg_SheepColorB[udg_atempint],
              0,
            );
          } else {
            if (
              (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001C())
            ) {
              StartTimerBJ(udg_orangeTimer, false, udg_sheepInvul);
              StartTimerBJ(udg_orangeHideTimer, false, 5);
              SetUnitVertexColorBJ(
                GetLastCreatedUnit()!,
                udg_SheepColorR[udg_atempint],
                udg_SheepColorG[udg_atempint],
                udg_SheepColorB[udg_atempint],
                0,
              );
            } else {
              if (
                (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001C())
              ) {
                StartTimerBJ(udg_greenTimer, false, udg_sheepInvul);
                StartTimerBJ(udg_greenHideTimer, false, 5);
                SetUnitVertexColorBJ(
                  GetLastCreatedUnit()!,
                  udg_SheepColorR[udg_atempint],
                  udg_SheepColorG[udg_atempint],
                  udg_SheepColorB[udg_atempint],
                  0,
                );
              } else {
                if (
                  (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001C())
                ) {
                  StartTimerBJ(udg_pinkTimer, false, udg_sheepInvul);
                  StartTimerBJ(udg_pinkHideTimer, false, 5);
                  SetUnitVertexColorBJ(
                    GetLastCreatedUnit()!,
                    udg_SheepColorR[udg_atempint],
                    udg_SheepColorG[udg_atempint],
                    udg_SheepColorB[udg_atempint],
                    0,
                  );
                } else {
                  if (
                    (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001C())
                  ) {
                    StartTimerBJ(udg_greyTimer, false, udg_sheepInvul);
                    StartTimerBJ(udg_greyHideTimer, false, 5);
                    SetUnitVertexColorBJ(
                      GetLastCreatedUnit()!,
                      udg_SheepColorR[udg_atempint],
                      udg_SheepColorG[udg_atempint],
                      udg_SheepColorB[udg_atempint],
                      0,
                    );
                  } else {
                    if (
                      (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                    ) {
                      StartTimerBJ(udg_lbTimer, false, udg_sheepInvul);
                      StartTimerBJ(udg_lbHideTimer, false, 5);
                      SetUnitVertexColorBJ(
                        GetLastCreatedUnit()!,
                        udg_SheepColorR[udg_atempint],
                        udg_SheepColorG[udg_atempint],
                        udg_SheepColorB[udg_atempint],
                        0,
                      );
                    } else {
                      if (
                        (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                      ) {
                        StartTimerBJ(udg_dgTimer, false, udg_sheepInvul);
                        StartTimerBJ(udg_dgHideTimer, false, 5);
                        SetUnitVertexColorBJ(
                          GetLastCreatedUnit()!,
                          udg_SheepColorR[udg_atempint],
                          udg_SheepColorG[udg_atempint],
                          udg_SheepColorB[udg_atempint],
                          0,
                        );
                      } else {
                        if (
                          (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                        ) {
                          StartTimerBJ(udg_brownTimer, false, udg_sheepInvul);
                          StartTimerBJ(udg_brownHideTimer, false, 5);
                          SetUnitVertexColorBJ(
                            GetLastCreatedUnit()!,
                            udg_SheepColorR[udg_atempint],
                            udg_SheepColorG[udg_atempint],
                            udg_SheepColorB[udg_atempint],
                            0,
                          );
                        } else {
                          if (
                            (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                          ) {
                            StartTimerBJ(
                              udg_maroonTimer,
                              false,
                              udg_sheepInvul,
                            );
                            StartTimerBJ(udg_maroonHideTimer, false, 5);
                            SetUnitVertexColorBJ(
                              GetLastCreatedUnit()!,
                              udg_SheepColorR[udg_atempint],
                              udg_SheepColorG[udg_atempint],
                              udg_SheepColorB[udg_atempint],
                              0,
                            );
                          } else {
                            if (
                              (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                            ) {
                              StartTimerBJ(
                                udg_navyTimer,
                                false,
                                udg_sheepInvul,
                              );
                              StartTimerBJ(udg_navyHideTimer, false, 5);
                              SetUnitVertexColorBJ(
                                GetLastCreatedUnit()!,
                                udg_SheepColorR[udg_atempint],
                                udg_SheepColorG[udg_atempint],
                                udg_SheepColorB[udg_atempint],
                                0,
                              );
                            } else {
                              if (
                                (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                              ) {
                                StartTimerBJ(
                                  udg_turquoiseTimer,
                                  false,
                                  udg_sheepInvul,
                                );
                                StartTimerBJ(udg_turquoiseHideTimer, false, 5);
                                SetUnitVertexColorBJ(
                                  GetLastCreatedUnit()!,
                                  udg_SheepColorR[udg_atempint],
                                  udg_SheepColorG[udg_atempint],
                                  udg_SheepColorB[udg_atempint],
                                  0,
                                );
                              } else {
                                if (
                                  (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                ) {
                                  StartTimerBJ(
                                    udg_violetTimer,
                                    false,
                                    udg_sheepInvul,
                                  );
                                  StartTimerBJ(udg_violetHideTimer, false, 5);
                                  SetUnitVertexColorBJ(
                                    GetLastCreatedUnit()!,
                                    udg_SheepColorR[udg_atempint],
                                    udg_SheepColorG[udg_atempint],
                                    udg_SheepColorB[udg_atempint],
                                    0,
                                  );
                                } else {
                                  if (
                                    (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                  ) {
                                    StartTimerBJ(
                                      udg_wheatTimer,
                                      false,
                                      udg_sheepInvul,
                                    );
                                    StartTimerBJ(udg_wheatHideTimer, false, 5);
                                    SetUnitVertexColorBJ(
                                      GetLastCreatedUnit()!,
                                      udg_SheepColorR[udg_atempint],
                                      udg_SheepColorG[udg_atempint],
                                      udg_SheepColorB[udg_atempint],
                                      0,
                                    );
                                  } else {
                                    if (
                                      (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                    ) {
                                      StartTimerBJ(
                                        udg_peachTimer,
                                        false,
                                        udg_sheepInvul,
                                      );
                                      StartTimerBJ(
                                        udg_peachHideTimer,
                                        false,
                                        5,
                                      );
                                      SetUnitVertexColorBJ(
                                        GetLastCreatedUnit()!,
                                        udg_SheepColorR[udg_atempint],
                                        udg_SheepColorG[udg_atempint],
                                        udg_SheepColorB[udg_atempint],
                                        0,
                                      );
                                    } else {
                                      if (
                                        (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                      ) {
                                        StartTimerBJ(
                                          udg_mintTimer,
                                          false,
                                          udg_sheepInvul,
                                        );
                                        StartTimerBJ(
                                          udg_mintHideTimer,
                                          false,
                                          5,
                                        );
                                        SetUnitVertexColorBJ(
                                          GetLastCreatedUnit()!,
                                          udg_SheepColorR[udg_atempint],
                                          udg_SheepColorG[udg_atempint],
                                          udg_SheepColorB[udg_atempint],
                                          0,
                                        );
                                      } else {
                                        if (
                                          (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                        ) {
                                          StartTimerBJ(
                                            udg_lavenderTimer,
                                            false,
                                            udg_sheepInvul,
                                          );
                                          StartTimerBJ(
                                            udg_lavenderHideTimer,
                                            false,
                                            5,
                                          );
                                          SetUnitVertexColorBJ(
                                            GetLastCreatedUnit()!,
                                            udg_SheepColorR[udg_atempint],
                                            udg_SheepColorG[udg_atempint],
                                            udg_SheepColorB[udg_atempint],
                                            0,
                                          );
                                        } else {
                                          if (
                                            (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                          ) {
                                            StartTimerBJ(
                                              udg_coalTimer,
                                              false,
                                              udg_sheepInvul,
                                            );
                                            StartTimerBJ(
                                              udg_coalHideTimer,
                                              false,
                                              5,
                                            );
                                            SetUnitVertexColorBJ(
                                              GetLastCreatedUnit()!,
                                              udg_SheepColorR[udg_atempint],
                                              udg_SheepColorG[udg_atempint],
                                              udg_SheepColorB[udg_atempint],
                                              0,
                                            );
                                          } else {
                                            if (
                                              (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                            ) {
                                              StartTimerBJ(
                                                udg_snowTimer,
                                                false,
                                                udg_sheepInvul,
                                              );
                                              StartTimerBJ(
                                                udg_snowHideTimer,
                                                false,
                                                5,
                                              );
                                              SetUnitVertexColorBJ(
                                                GetLastCreatedUnit()!,
                                                udg_SheepColorR[udg_atempint],
                                                udg_SheepColorG[udg_atempint],
                                                udg_SheepColorB[udg_atempint],
                                                0,
                                              );
                                            } else {
                                              if (
                                                (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                              ) {
                                                StartTimerBJ(
                                                  udg_emeraldTimer,
                                                  false,
                                                  udg_sheepInvul,
                                                );
                                                StartTimerBJ(
                                                  udg_emeraldHideTimer,
                                                  false,
                                                  5,
                                                );
                                                SetUnitVertexColorBJ(
                                                  GetLastCreatedUnit()!,
                                                  udg_SheepColorR[udg_atempint],
                                                  udg_SheepColorG[udg_atempint],
                                                  udg_SheepColorB[udg_atempint],
                                                  0,
                                                );
                                              } else {
                                                if (
                                                  (Trig_sheepSwitch_Func031Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                                ) {
                                                  StartTimerBJ(
                                                    udg_peanutTimer,
                                                    false,
                                                    udg_sheepInvul,
                                                  );
                                                  StartTimerBJ(
                                                    udg_peanutHideTimer,
                                                    false,
                                                    5,
                                                  );
                                                  SetUnitVertexColorBJ(
                                                    GetLastCreatedUnit()!,
                                                    udg_SheepColorR[
                                                      udg_atempint
                                                    ],
                                                    udg_SheepColorG[
                                                      udg_atempint
                                                    ],
                                                    udg_SheepColorB[
                                                      udg_atempint
                                                    ],
                                                    0,
                                                  );
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  udg_switch[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))] = 2;
  PanCameraToTimedForPlayer(
    GetOwningPlayer(GetTriggerUnit()!),
    GetUnitX(GetTriggerUnit()!),
    GetUnitY(GetTriggerUnit()!),
    0,
  );
  udg_atempgroup = GetUnitsOfPlayerAll(GetOwningPlayer(GetTriggerUnit()!))!;
  ForGroupBJ(udg_atempgroup, Trig_sheepSwitch_Func035002);
  DestroyGroup(udg_atempgroup);
  bj_lastCreatedUnit = CreateUnit(
    GetOwningPlayer(GetTriggerUnit()!),
    unstuck,
    RandomX(gg_rct_unstuckZone),
    RandomY(gg_rct_unstuckZone),
    0,
  );
  SelectUnitForPlayerSingle(
    GetLastCreatedUnit()!,
    GetOwningPlayer(GetTriggerUnit()!),
  );
  ForceUICancelBJ(GetOwningPlayer(GetTriggerUnit()!));
  RemoveUnit(GetLastCreatedUnit()!);
  ForceRemovePlayerSimple(GetOwningPlayer(GetTriggerUnit()!), udg_Sheep);
  ForceAddPlayerSimple(GetOwningPlayer(GetTriggerUnit()!), udg_Wolf);
  SetPlayerAllianceStateBJ(
    Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    GetOwningPlayer(GetKillingUnitBJ()!),
    bj_ALLIANCE_NEUTRAL_VISION,
  );
  SetPlayerAllianceStateBJ(
    Player(bj_PLAYER_NEUTRAL_VICTIM)!,
    GetOwningPlayer(GetDyingUnit()!),
    bj_ALLIANCE_NEUTRAL,
  );
  ForForce(udg_Sheep, Trig_sheepSwitch_Func045A);
  ForForce(udg_Wolf, Trig_sheepSwitch_Func046A);
  udg_switch[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!))] = 1;
  udg_sheepLastGame[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!))] =
    false;
  udg_sheepLastGame[
    GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
  ] = true;
  TriggerExecute(gg_trg_setupLeaderboard);
  if ((Trig_sheepSwitch_Func051C())) {
    ForForce(udg_Sheep, Trig_sheepSwitch_Func051Func001A);
  }
  if ((CountPlayersInForceBJ(udg_Sheep) === 0)) {
    TriggerExecute(gg_trg_wolvesWin);
  } else {
    DoNothing();
  }
  if ((Trig_sheepSwitch_Func053C())) {
    StartTimerBJ(udg_redTimer, false, udg_wolfSpawn);
    StartTimerBJ(udg_redHideTimer, false, 5);
  } else {
    if ((Trig_sheepSwitch_Func053Func001C())) {
      StartTimerBJ(udg_blueTimer, false, udg_wolfSpawn);
      StartTimerBJ(udg_blueHideTimer, false, 5);
    } else {
      if ((Trig_sheepSwitch_Func053Func001Func001C())) {
        StartTimerBJ(udg_tealTimer, false, udg_wolfSpawn);
        StartTimerBJ(udg_tealHideTimer, false, 5);
      } else {
        if ((Trig_sheepSwitch_Func053Func001Func001Func001C())) {
          StartTimerBJ(udg_purpleTimer, false, udg_wolfSpawn);
          StartTimerBJ(udg_purpleHideTimer, false, 5);
        } else {
          if ((Trig_sheepSwitch_Func053Func001Func001Func001Func001C())) {
            StartTimerBJ(udg_yellowTimer, false, udg_wolfSpawn);
            StartTimerBJ(udg_yellowHideTimer, false, 5);
          } else {
            if (
              (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001C())
            ) {
              StartTimerBJ(udg_orangeTimer, false, udg_wolfSpawn);
              StartTimerBJ(udg_orangeHideTimer, false, 5);
            } else {
              if (
                (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001C())
              ) {
                StartTimerBJ(udg_greenTimer, false, udg_wolfSpawn);
                StartTimerBJ(udg_greenHideTimer, false, 5);
              } else {
                if (
                  (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001C())
                ) {
                  StartTimerBJ(udg_pinkTimer, false, udg_wolfSpawn);
                  StartTimerBJ(udg_pinkHideTimer, false, 5);
                } else {
                  if (
                    (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001C())
                  ) {
                    StartTimerBJ(udg_greyTimer, false, udg_wolfSpawn);
                    StartTimerBJ(udg_greyHideTimer, false, 5);
                  } else {
                    if (
                      (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                    ) {
                      StartTimerBJ(udg_lbTimer, false, udg_wolfSpawn);
                      StartTimerBJ(udg_lbHideTimer, false, 5);
                    } else {
                      if (
                        (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                      ) {
                        StartTimerBJ(udg_dgTimer, false, udg_wolfSpawn);
                        StartTimerBJ(udg_dgHideTimer, false, 5);
                      } else {
                        if (
                          (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                        ) {
                          StartTimerBJ(udg_brownTimer, false, udg_wolfSpawn);
                          StartTimerBJ(udg_brownHideTimer, false, 5);
                        } else {
                          if (
                            (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                          ) {
                            StartTimerBJ(udg_maroonTimer, false, udg_wolfSpawn);
                            StartTimerBJ(udg_maroonHideTimer, false, 5);
                          } else {
                            if (
                              (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                            ) {
                              StartTimerBJ(udg_navyTimer, false, udg_wolfSpawn);
                              StartTimerBJ(udg_navyHideTimer, false, 5);
                            } else {
                              if (
                                (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                              ) {
                                StartTimerBJ(
                                  udg_turquoiseTimer,
                                  false,
                                  udg_wolfSpawn,
                                );
                                StartTimerBJ(udg_turquoiseHideTimer, false, 5);
                              } else {
                                if (
                                  (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                ) {
                                  StartTimerBJ(
                                    udg_violetTimer,
                                    false,
                                    udg_wolfSpawn,
                                  );
                                  StartTimerBJ(udg_violetHideTimer, false, 5);
                                } else {
                                  if (
                                    (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                  ) {
                                    StartTimerBJ(
                                      udg_wheatTimer,
                                      false,
                                      udg_wolfSpawn,
                                    );
                                    StartTimerBJ(udg_wheatHideTimer, false, 5);
                                  } else {
                                    if (
                                      (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                    ) {
                                      StartTimerBJ(
                                        udg_peachTimer,
                                        false,
                                        udg_wolfSpawn,
                                      );
                                      StartTimerBJ(
                                        udg_peachHideTimer,
                                        false,
                                        5,
                                      );
                                    } else {
                                      if (
                                        (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                      ) {
                                        StartTimerBJ(
                                          udg_mintTimer,
                                          false,
                                          udg_wolfSpawn,
                                        );
                                        StartTimerBJ(
                                          udg_mintHideTimer,
                                          false,
                                          5,
                                        );
                                      } else {
                                        if (
                                          (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                        ) {
                                          StartTimerBJ(
                                            udg_lavenderTimer,
                                            false,
                                            udg_wolfSpawn,
                                          );
                                          StartTimerBJ(
                                            udg_lavenderHideTimer,
                                            false,
                                            5,
                                          );
                                        } else {
                                          if (
                                            (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                          ) {
                                            StartTimerBJ(
                                              udg_coalTimer,
                                              false,
                                              udg_wolfSpawn,
                                            );
                                            StartTimerBJ(
                                              udg_coalHideTimer,
                                              false,
                                              5,
                                            );
                                          } else {
                                            if (
                                              (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                            ) {
                                              StartTimerBJ(
                                                udg_snowTimer,
                                                false,
                                                udg_wolfSpawn,
                                              );
                                              StartTimerBJ(
                                                udg_snowHideTimer,
                                                false,
                                                5,
                                              );
                                            } else {
                                              if (
                                                (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                              ) {
                                                StartTimerBJ(
                                                  udg_emeraldTimer,
                                                  false,
                                                  udg_wolfSpawn,
                                                );
                                                StartTimerBJ(
                                                  udg_emeraldHideTimer,
                                                  false,
                                                  5,
                                                );
                                              } else {
                                                if (
                                                  (Trig_sheepSwitch_Func053Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C())
                                                ) {
                                                  StartTimerBJ(
                                                    udg_peanutTimer,
                                                    false,
                                                    udg_wolfSpawn,
                                                  );
                                                  StartTimerBJ(
                                                    udg_peanutHideTimer,
                                                    false,
                                                    5,
                                                  );
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  DisplayTimedTextToForce(
    GetPlayersAll()!,
    5,
    ("                              " +
      udg_colorString[
        GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()!))
      ]) +
      (GetPlayerName(GetOwningPlayer(GetTriggerUnit()!)) +
        (" (sheep)|r switched with " +
          ((udg_colorString[
            GetConvertedPlayerId(GetOwningPlayer(GetKillingUnitBJ()!))
          ] + GetPlayerName(GetOwningPlayer(GetKillingUnitBJ()!))) +
            " (wolf)|r."))),
  );
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_sheepSwitch: () => void;
}
InitTrig_sheepSwitch = (): void => {
  gg_trg_sheepSwitch = CreateTrigger();
  DisableTrigger(gg_trg_sheepSwitch);
  TriggerRegisterAnyUnitEventBJ(gg_trg_sheepSwitch, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_sheepSwitch,
    Condition(Trig_sheepSwitch_Conditions),
  );
  TriggerAddAction(gg_trg_sheepSwitch, Trig_sheepSwitch_Actions);
};
