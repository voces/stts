import { FrameEx } from "handles/FrameEx";

export const frames: {
  intermissionFrames: FrameEx[];
  settings: {
    container: FrameEx;
    modeLabel: FrameEx;
    mode: FrameEx;
    president: {
      container: FrameEx;
      handicapLabel: FrameEx;
      handicap: FrameEx;
    };
    switch: {
      container: FrameEx;
      invul: FrameEx;
      wolf: FrameEx;
      spirits: FrameEx;
      saves: FrameEx;
      timeLabel: FrameEx;
      time: FrameEx;
    };
    terrain: {
      label: FrameEx;
      select: FrameEx;
      options: FrameEx;
    };
    shrink: FrameEx;
    expand: FrameEx;
    sheepGold: FrameEx;
    wolfGold: FrameEx;
    sheepIncome: FrameEx;
    wolfIncome: FrameEx;
    moneyFarmIncome: FrameEx;
    time: FrameEx;
    spawn: FrameEx;
    view: FrameEx;
    farmVision: FrameEx;
    autoCancel: FrameEx;
    allowShareControl: FrameEx;
    desiredSheep: FrameEx;
  };
  players: {
    container: FrameEx;
    backdrop: FrameEx;
    team: FrameEx;
    teamBackdrop: FrameEx;
    sheepCount: FrameEx;
    handicap: FrameEx;
    average: FrameEx;
    deathOrder: FrameEx;
  }[];
  endConfirmation: FrameEx;
} = { intermissionFrames: [], settings: { president: {}, switch: {}, terrain: {} }, players: [] } as any;
