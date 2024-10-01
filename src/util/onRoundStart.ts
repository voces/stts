const listeners = new Set<() => void>();

export const onRoundStart = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const triggerOnRoundStart = () => {
  for (const fn of listeners) {
    try {
      fn();
    } catch {}
  }
};
