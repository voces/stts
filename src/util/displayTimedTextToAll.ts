export const displayTimedTextToAll = (message: string, duration = 10) =>
  DisplayTimedTextToForce(GetPlayersAll()!, duration, message);
