const oldTriggerAddAction = TriggerAddAction;
// @ts-expect-error Replacing with logging variant
TriggerAddAction = (whichTrigger: trigger, action: () => void): triggeraction => {
  return oldTriggerAddAction(whichTrigger, () => {
    try {
      action();
    } catch (err) {
      print(err);
      throw err;
    }
  });
};

const oldCondition = Condition;
// @ts-expect-error Replacing with logging variant
Condition = (func: () => void) =>
  oldCondition(() => {
    try {
      return func();
    } catch (err) {
      print(err);
      throw err;
    }
  });
