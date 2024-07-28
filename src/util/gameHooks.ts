const roundInitHooks: (() => void)[] = [];
export const onRoundInit = (fn: () => void) => {
  roundInitHooks.push(fn);
};
export const triggerRoundInitHooks = () => {
  for (const hook of roundInitHooks) hook();
};
