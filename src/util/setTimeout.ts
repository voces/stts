import { Timer } from "w3ts";

export type Timeout = { timer: Timer; cancel: () => void };

const timers: Timer[] = [];
export const setTimeout = (timeout: number, fn: () => void, periodic = false): Timeout => {
  const timer = timers.length > 0 ? timers.pop()! : Timer.create();
  timer.start(
    timeout,
    periodic,
    periodic ? fn : () => {
      timers.push(timer);
      fn();
    },
  );
  return {
    timer,
    cancel: () => {
      timer.pause();
      timers.push(timer);
    },
  };
};
