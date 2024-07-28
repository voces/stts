export type Point = { x: number; y: number };

const isLeft = (a: Point, b: Point, x: number, y: number) => (b.x - a.x) * (y - a.y) - (x - a.x) * (b.y - a.y);

export const isPointInPolygon = (x: number, y: number, polygon: Point[]): boolean => {
  let wn = 0;

  for (let i = 0; i < polygon.length; i++) {
    const a = polygon[i];
    const b = polygon[(i + 1) % polygon.length];

    if (a.y <= y) {
      if (b.y > y && isLeft(a, b, x, y) > 0) wn = wn + 1;
    } else if (b.y <= y && isLeft(a, b, x, y) < 0) wn = wn - 1;
  }

  return wn !== 0;
};

export const isPointInRect = (x: number, y: number, rect: rect) =>
  !(x < GetRectMinX(rect) || x > GetRectMaxX(rect) || y < GetRectMinY(rect) || y > GetRectMaxY(rect));

export const findRayRectangleIntersection = (point: Point, rect: rect, directionRadians: number) => {
  const minX = GetRectMinX(rect);
  const minY = GetRectMinY(rect);
  const maxY = GetRectMaxY(rect);
  const maxX = GetRectMaxX(rect);
  const dirX = Math.cos(directionRadians);
  const dirY = Math.sin(directionRadians); // Negate since positive radians go upwards on the plane

  // Initialize to hold potential intersection points
  let t = Infinity;
  let intersection: Point | undefined;

  // Check intersection with left and right bounds
  if (dirX !== 0) {
    let tMinX = (minX - point.x) / dirX;
    let yMinX = point.y + tMinX * dirY;
    if (tMinX >= 0 && yMinX >= minY && yMinX <= maxY && tMinX < t) {
      t = tMinX;
      intersection = { x: minX, y: yMinX };
    }

    let tMaxX = (maxX - point.x) / dirX;
    let yMaxX = point.y + tMaxX * dirY;
    if (tMaxX >= 0 && yMaxX >= minY && yMaxX <= maxY && tMaxX < t) {
      t = tMaxX;
      intersection = { x: maxX, y: yMaxX };
    }
  }

  // Check intersection with bottom and top bounds
  if (dirY !== 0) {
    let tMinY = (minY - point.y) / dirY;
    let xMinY = point.x + tMinY * dirX;
    if (tMinY >= 0 && xMinY >= minX && xMinY <= maxX && tMinY < t) {
      t = tMinY;
      intersection = { x: xMinY, y: minY };
    }

    let tMaxY = (maxY - point.y) / dirY;
    let xMaxY = point.x + tMaxY * dirX;
    if (tMaxY >= 0 && xMaxY >= minX && xMaxY <= maxX && tMaxY < t) {
      t = tMaxY;
      intersection = { x: xMaxY, y: maxY };
    }
  }

  return intersection;
};

export const distanceBetweenPoints = (a: Point, b: Point) => ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5;

export const angleBetweenPoints = (a: Point, b: Point) => Math.atan2(b.y - a.y, b.x - a.x);
