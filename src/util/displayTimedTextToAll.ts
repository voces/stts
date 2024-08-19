export const displayTimedTextToAll = (message: string, duration = 10) =>
  DisplayTimedTextToForce(GetPlayersAll()!, duration, message);

export const displayToVerit = (message: string) => {
  for (let i = 0; i < bj_MAX_PLAYERS; i++) {
    if (GetPlayerName(Player(i)!)?.startsWith("verit")) DisplayTimedTextToPlayer(Player(i)!, 0, 0, 5, message);
  }
};
