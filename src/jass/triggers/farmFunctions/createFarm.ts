//===========================================================================
// Trigger: createFarm
//===========================================================================
const translocateBuilder = (): void => {
  const l__farm = GetConstructingStructure()!;
  const l__sheep = udg_unit[GetPlayerId(GetOwningPlayer(l__farm)) + 1];
  const dx = GetUnitX(l__farm) - GetUnitX(l__sheep);
  const dy = GetUnitY(l__farm) - GetUnitY(l__sheep);
  const e1 = AddSpecialEffect(
    "Abilities\\Spells\\Human\\Polymorph\\PolyMorphTarget.mdl",
    GetUnitX(l__sheep),
    GetUnitY(l__sheep),
  )!;
  const scale = 104 / RMaxBJ(RAbsBJ(dx), RAbsBJ(dy));

  SetUnitX(l__sheep, GetUnitX(l__farm) + dx * scale);
  SetUnitY(l__sheep, GetUnitY(l__farm) + dy * scale);

  TriggerSleepAction(0);

  UnitSetConstructionProgress(l__farm, 100);
  const e2 = AddSpecialEffect(
    "Abilities\\Spells\\Human\\Polymorph\\PolyMorphTarget.mdl",
    GetUnitX(l__sheep),
    GetUnitY(l__sheep),
  )!;

  TriggerSleepAction(1);

  DestroyEffect(e1);
  DestroyEffect(e2);
};

const Trig_createFarm_Actions = (): void => {
  const playerId = GetConvertedPlayerId(
    GetOwningPlayer(GetConstructingStructure()!),
  );
  let i = 1;

  if (IsUnitIllusion(GetTriggerUnit()!)) {
    return;
  }

  udg_farmCount[playerId] = udg_farmCount[playerId] + 1;
  udg_totalFarmsBuilt[playerId] = udg_totalFarmsBuilt[playerId] + 1;
  SetUnitManaBJ(
    udg_unit[playerId],
    I2R(
      GetPlayerState(
        GetOwningPlayer(GetConstructingStructure()!),
        PLAYER_STATE_RESOURCE_GOLD,
      ),
    ),
  );
  SetPlayerStateBJ(
    ConvertedPlayer(playerId)!,
    PLAYER_STATE_RESOURCE_LUMBER,
    udg_farmCount[playerId],
  );

  while (true) {
    if (i > bj_MAX_PLAYERS) break;

    if (udg_dummyWisps > 0) {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(playerId)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!,
        udg_saves[playerId],
      );
    } else {
      LeaderboardSetPlayerItemValueBJ(
        ConvertedPlayer(playerId)!,
        PlayerGetLeaderboardBJ(ConvertedPlayer(i)!)!,
        udg_farmCount[playerId],
      );
    }

    i = i + 1;
  }

  if (GetUnitTypeId(GetConstructingStructure()!) === translocationFarm) {
    translocateBuilder();
  }
};

//===========================================================================
export {};
declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_createFarm: () => void;
}
InitTrig_createFarm = (): void => {
  gg_trg_createFarm = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(
    gg_trg_createFarm,
    EVENT_PLAYER_UNIT_CONSTRUCT_START,
  );
  TriggerAddAction(gg_trg_createFarm, Trig_createFarm_Actions);
};
