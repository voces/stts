const addErrorLogging = (native: keyof typeof globalThis) => {
  const old = globalThis[native as unknown as keyof typeof globalThis] as unknown as (...args: unknown[]) => void;
  // @ts-expect-error Replacing with logging variant
  globalThis[native] = (...args: unknown[]) =>
    old(...args.map((a) =>
      typeof a === "function"
        ? (...args2: unknown[]) => {
          try {
            return a(...args2);
          } catch (err) {
            BJDebugMsg(`${err}`);
            throw err;
          }
        }
        : a
    ));
};

addErrorLogging("TriggerAddAction");
addErrorLogging("Condition");
addErrorLogging("TimerStart");
addErrorLogging("ForForce");
addErrorLogging("ForGroup");
addErrorLogging("EnumDestructablesInRect");
addErrorLogging("EnumItemsInRect");
addErrorLogging("Filter");
