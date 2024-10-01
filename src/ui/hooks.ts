const terrainUpdatedViaCommandListeners: (() => void)[] = [];
export const onTerrainUpdatedViaCommand = (fn: () => void) => {
  terrainUpdatedViaCommandListeners.push(fn);
};
export const terrainUpdatedViaCommand = () => {
  for (const fn of terrainUpdatedViaCommandListeners) fn();
};

const updateIntermissionListeners: (() => void)[] = [];
export const onUpdateIntermission = (fn: () => void) => {
  updateIntermissionListeners.push(fn);
};
export const triggerIntermissionUpdate = () => {
  for (const fn of updateIntermissionListeners) fn();
};
