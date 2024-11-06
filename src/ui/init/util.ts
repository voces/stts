import { FrameEx } from "handles/FrameEx";
import { MapPlayerEx } from "handles/MapPlayerEx";
import { frames } from "ui/frames";
import { setTimeout, Timeout } from "util/setTimeout";

export const getFrames = <T extends string[]>(...names: T) =>
  names.map((name) => FrameEx.fromName(name)) as { [K in keyof T]: FrameEx };

export const setupSlider = (
  name: string,
  { format = (v) => v.toFixed(0), onChange }: { format?: (v: number) => string; onChange?: (v: number) => void } = {},
) => {
  const slider = FrameEx.fromName(name);
  const display = FrameEx.fromName(`${name}Value`);

  display.clearPoints();
  display.setPoint(FRAMEPOINT_BOTTOM, slider.getChild(2), FRAMEPOINT_TOP, 0, 0);
  setTimeout(0.25, () =>
    slider.onSliderChange(({ value }) => {
      display.text = format(value);
      onChange?.(value);
    }, true));

  return slider;
};

export const editBoxDelayedOnChange = (
  editBox: FrameEx,
  { onChange, delay = 2.5 }: {
    onChange?: (frames: { value: string }) => void;
    delay?: number;
  },
) => {
  let timer: Timeout | undefined;
  setTimeout(0.25, () => {
    editBox.onChange(({ value }) => {
      timer?.cancel();
      timer = setTimeout(delay, () => onChange?.({ ...frames, value }));
    }, true);
  });
};

export const setupEditableText = (
  name: string,
  { context = 0, onFocus, onBlur }: {
    context?: number;
    /** @async only runs for local player */
    onFocus?: (frames: { label: FrameEx; editBox: FrameEx }) => void;
    /** @sync runs for all players */
    onBlur?: (frames: { label: FrameEx; editBox: FrameEx; modified: boolean; value?: string }) => void;
  },
) => {
  const label = FrameEx.fromName(name, context);
  const editBox = FrameEx.fromName(`${name}EditBox`, context);
  const frames = { label, editBox };
  editBox.visible = false;
  let timer: Timeout | undefined;
  let justClicked = false;
  setTimeout(0.25, () =>
    editBox.onChange(({ value }) => {
      if (justClicked) return justClicked = false;
      timer?.cancel();
      timer = setTimeout(1, () => {
        label.visible = true;
        editBox.setFocus(false).setVisible(false);
        onBlur?.({ ...frames, modified: true, value });
      });
    }, true));
  label.onClick(({ player }) => {
    if (!player.isHost) return;
    justClicked = true;
    if (player.isLocal()) {
      label.visible = false;
      editBox.setVisible(true).setFocus(true);
      onFocus?.(frames);
    }
    timer = setTimeout(2.5, () => {
      if (player.isLocal()) {
        label.visible = true;
        editBox.setFocus(false).setVisible(false);
      }
      onBlur?.({ ...frames, modified: false });
    });
  });
  return frames;
};

export class Checkbox {
  private box: FrameEx;
  private check: FrameEx;

  constructor(checkbox: FrameEx, { createContext = 0, onClick, checked = false }: {
    checked?: boolean;
    createContext?: number;
    onClick?: (value: boolean) => void;
  } = {}) {
    checkbox.visible = false;
    this.box = FrameEx.create("CheckboxButtonTemplate", checkbox.parent, 0, createContext);
    this.box.setAllPoints(checkbox);
    this.check = FrameEx.fromName("CheckboxButtonCheckedTemplate", createContext);
    this.check.visible = checked;
    this.box.onClick(() => {
      const checked = this.check.visible = !this.check.visible;
      setTimeout(0.01, () => this.box.enabled = MapPlayerEx.fromLocal().isHost);
      onClick?.(checked);
    });
  }

  set checked(value: boolean) {
    this.check.visible = value;
    setTimeout(0.01, () => this.box.enabled = MapPlayerEx.fromLocal().isHost);
  }

  get checked() {
    return this.check.visible;
  }

  set enabled(value: boolean) {
    this.box.enabled = value;
  }

  get enabled() {
    return this.box.enabled;
  }
}
