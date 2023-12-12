import { addScriptHook, Trigger, W3TS_HOOK } from "w3ts";

addScriptHook(W3TS_HOOK.MAIN_AFTER, () => {
  const t = Trigger.create();

  const timers = [
    udg_redHideTimer,
    udg_blueHideTimer,
    udg_tealHideTimer,
    udg_purpleHideTimer,
    udg_yellowHideTimer,
    udg_orangeHideTimer,
    udg_greenHideTimer,
    udg_pinkHideTimer,
    udg_greyHideTimer,
    udg_lbHideTimer,
    udg_dgHideTimer,
    udg_brownHideTimer,
    udg_maroonHideTimer,
    udg_navyHideTimer,
    udg_turquoiseHideTimer,
    udg_violetHideTimer,
    udg_wheatHideTimer,
    udg_peachHideTimer,
    udg_mintHideTimer,
    udg_lavenderHideTimer,
    udg_coalHideTimer,
    udg_snowHideTimer,
    udg_emeraldHideTimer,
    udg_peanutHideTimer,
  ];
  for (let i = 0; i < timers.length; i++) {
    t.registerTimerExpireEvent(timers[i]);
  }

  t.addAction(() => udg_hideEsc[timers.indexOf(GetExpiredTimer()!) + 1] = false);
});
