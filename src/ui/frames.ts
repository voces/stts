import { FrameEx } from "handles/FrameEx";

type Checkbox = { checked: boolean; enabled: boolean };

export const frames: {
  preferences: FrameEx;
  intermissionFrames: FrameEx[];
  settings: {
    container: FrameEx;
    roundTab: FrameEx;
    goldTab: FrameEx;
    otherTab: FrameEx;
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
    shrink: Checkbox;
    expand: Checkbox;
    sheepGold: FrameEx;
    wolfGold: FrameEx;
    sheepIncome: FrameEx;
    wolfIncome: FrameEx;
    moneyFarmIncome: FrameEx;
    time: FrameEx;
    spawn: FrameEx;
    view: Checkbox;
    farmVision: FrameEx;
    autoCancel: Checkbox;
    allowShareControl: Checkbox;
    desiredSheep: FrameEx;
  };
  playerLabel: FrameEx;
  playerHeaders: {
    average: FrameEx;
    deathOrder: FrameEx;
    points: FrameEx;
    pointsTooltip: FrameEx;
    scores: FrameEx;
    scoresTooltip: FrameEx;
    leaks: FrameEx;
  };
  players: {
    container: FrameEx;
    backdrop: FrameEx;
    team: FrameEx;
    teamBackdrop: FrameEx;
    disabledTeamBackdrop: FrameEx;
    crown: FrameEx;
    name: FrameEx;
    sheepCount: FrameEx;
    handicap: FrameEx;
    pubMark: FrameEx;
    average: FrameEx;
    deathOrder: FrameEx;
    points: FrameEx;
    score: FrameEx;
    leaks: FrameEx;
  }[];
  versus: FrameEx;
  start: FrameEx;
  smart: FrameEx;
  practice: FrameEx;
  end: {
    button: FrameEx;
    confirm: FrameEx;
    title: FrameEx;
    confirmEnd: FrameEx;
    confirmCancel: FrameEx;
  };
} = {
  intermissionFrames: [],
  settings: { president: {}, switch: {}, terrain: {} },
  playerHeaders: {},
  players: [],
  end: {},
} as any;
