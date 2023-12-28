import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";

const Trig_Say_Q_Death_Func001Func001C = () => {
  if (
    (!(Number.isFinite(udg_QDeathTime[S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!)])))
  ) {
    return false;
  }
  return true;
};

const Trig_Say_Q_Death_Func001C = () => {
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!) >= 1))) {
    return false;
  }
  if ((!(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!) <= 24))) {
    return false;
  }
  if (
    (!(GetPlayerSlotState(
      ConvertedPlayer(S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!))!,
    ) === PLAYER_SLOT_STATE_PLAYING))
  ) {
    return false;
  }
  return true;
};

const Trig_Say_Q_Death_Actions = () => {
  if ((Trig_Say_Q_Death_Func001C())) {
    if ((Trig_Say_Q_Death_Func001Func001C())) {
      udg_Force = GetForceOfPlayer(GetTriggerPlayer()!)!;
      DisplayTextToForce(
        udg_Force,
        ("The quickest death for " +
          (udg_colorString[
            S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!)
          ] +
            GetPlayerName(
              ConvertedPlayer(
                S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!),
              )!,
            ))) +
          ("|r is a time of " +
            R2S(
              udg_QDeathTime[
                S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!)
              ],
            )),
      );
      DestroyForce(udg_Force);
    } else {
      DisplayTextToForce(
        udg_Force,
        ("The quickest death for " +
          (udg_colorString[
            S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!)
          ] +
            GetPlayerName(
              ConvertedPlayer(
                S2I(SubStringBJ(GetEventPlayerChatString()!, 4, 6)!),
              )!,
            ))) + "|r is N/A",
      );
    }
  }
};

declare global {
  // deno-lint-ignore prefer-const
  let InitTrig_Say_Q_Death: () => void;
}
InitTrig_Say_Q_Death = () => {
  gg_trg_Say_Q_Death = CreateTrigger();
  registerAnyPlayerChatEvent(gg_trg_Say_Q_Death, "-qd ", false);
  TriggerAddAction(gg_trg_Say_Q_Death, Trig_Say_Q_Death_Actions);
};
