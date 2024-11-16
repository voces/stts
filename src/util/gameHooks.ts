const roundInitHooks = new Set<() => void>();
export const onRoundInit = (fn: () => void) => {
  roundInitHooks.add(fn);
  return () => roundInitHooks.delete(fn);
};
export const triggerRoundInitHooks = () => {
  for (const hook of roundInitHooks) hook();
};
