import { UnitEx } from "handles/UnitEx";
import { withDummy } from "util/withDummy";

const off = true;

export const rejectedEmbrace = (target: unit | UnitEx) => {
  if (off) return;
  const t = target instanceof UnitEx ? target : UnitEx.fromHandle(target);
  withDummy(
    (dummy) => {
      dummy.addAbility(FourCC("A02F"));
      dummy.issueTargetOrder("cripple", t);
    },
    t.x,
    t.y,
  );
};

export const loveBite = (target: unit | UnitEx) => {
  if (off) return;
  const t = target instanceof UnitEx ? target : UnitEx.fromHandle(target);
  withDummy(
    (dummy) => {
      dummy.addAbility(FourCC("A02G"));
      dummy.issueTargetOrder("cripple", t);
    },
    t.x,
    t.y,
  );
};
