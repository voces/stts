import { registerAnyPlayerChatEvent } from "util/registerAnyPlayerChatEvent";
import { addScriptHook, File, W3TS_HOOK } from "w3ts";

const TEAM_RESOURCES_DEFAULT = 0;
const TEAM_RESOURCES_TWINED = 1;
const TEAM_RESOURCES_HIDDEN = 2;

let teamResources: number = TEAM_RESOURCES_DEFAULT;

export const enforceTeamResourceMultiboard = () => {
  if (
    teamResources === TEAM_RESOURCES_HIDDEN ||
    (teamResources === TEAM_RESOURCES_TWINED &&
      !(IsLeaderboardDisplayed(PlayerGetLeaderboard(GetLocalPlayer())!)))
  ) MultiboardSuppressDisplay(true);
  else MultiboardSuppressDisplay(false);
};

const Trig_teamResources_Actions = () => {
  if (
    GetLocalPlayer() !== GetTriggerPlayer()! ||
    StringCase(GetEventPlayerChatString()!, false) !== "-teamresources"
  ) {
    return;
  }

  teamResources = ModuloInteger(teamResources + 1, 3);
  File.write("revo/teamResources.txt", I2S(teamResources)!);
  if (teamResources === TEAM_RESOURCES_DEFAULT) {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFShared resources shown",
    );
  } else if (teamResources === TEAM_RESOURCES_TWINED) {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFShared resources twinned",
    );
  } else {
    DisplayTimedTextToPlayer(
      GetTriggerPlayer()!,
      0,
      0,
      15,
      "                              |CFF00AEEFShared resources hidden",
    );
  }

  enforceTeamResourceMultiboard();
};

const Trig_teamResources_load = () => {
  teamResources = S2I(File.read("revo/teamResources.txt") ?? "");
  enforceTeamResourceMultiboard();
};

//===========================================================================
addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  let t = CreateTrigger();
  registerAnyPlayerChatEvent(t, "-teamresources");
  TriggerAddAction(t, Trig_teamResources_Actions);

  t = CreateTrigger();
  TriggerRegisterTimerEventSingle(t, 0.01);
  TriggerAddAction(t, Trig_teamResources_load);
});
