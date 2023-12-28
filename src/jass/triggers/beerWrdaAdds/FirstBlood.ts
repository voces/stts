import { UnitEx } from "handles/UnitEx";
import { displayTimedTextToAll } from "util/displayTimedTextToAll";

const Trig_First_Blood_Actions = () => {
  const p = GetOwningPlayer(GetDyingUnit()!);
  const cid = GetConvertedPlayerId(p);
  udg_firstBlood = true;
  udg_firstbloodDeathCounter[cid]++;
  udg_firstbloodKillCounter[GetConvertedPlayerId(GetOwningPlayer(GetKillingUnit()!))]++;
  displayTimedTextToAll(
    `                              ${UnitEx.fromKilling()?.owner} scored firstblood on ${UnitEx.fromDying()?.owner}`,
    5,
  );
  const time = TimerGetElapsed(udg_Timer);
  const prevTime = udg_QDeathTime[cid];
  if (time < prevTime) {
    udg_QDeathTime[cid] = time;
    if (time < udg_qDeath) {
      udg_qDeath = time;
      udg_qDeathString = udg_colorString[cid] + GetPlayerName(p);
    }
  }

  PlaySoundBJ(gg_snd_firstblood);
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_First_Blood: () => void;
}
InitTrig_First_Blood = () => {
  gg_trg_First_Blood = CreateTrigger();
  TriggerRegisterAnyUnitEventBJ(gg_trg_First_Blood, EVENT_PLAYER_UNIT_DEATH);
  TriggerAddCondition(
    gg_trg_First_Blood,
    Condition(() =>
      !udg_firstBlood && GetUnitTypeId(GetDyingUnit()!) === sheepType && !IsUnitIllusion(GetDyingUnit()!)
    ),
  );
  TriggerAddAction(gg_trg_First_Blood, Trig_First_Blood_Actions);
};
