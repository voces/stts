import { Rectangle, Unit } from "w3ts";

export const isUnitInRect = (unit: unit | Unit, rect: rect | Rectangle) => {
  const wUnit = unit instanceof Unit ? unit : Unit.fromHandle(unit)!;
  const wRect = rect instanceof Rectangle ? rect : Rectangle.fromHandle(rect)!;
  const { x, y } = wUnit;
  return x < wRect.maxX && x >= wRect.minX && y < wRect.maxY && y >= wRect.minY;
};
