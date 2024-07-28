export type Point = { x: number; y: number };

type Rectangle = { minX: number; maxX: number; minY: number; maxY: number };

const findRayRectangleIntersection = (point: Point, rect: Rectangle, directionRadians: number) => {
  const dirX = Math.cos(directionRadians);
  const dirY = -Math.sin(directionRadians); // Negate since positive radians go upwards on the plane

  // Initialize to hold potential intersection points
  let t = Infinity;
  let intersection: Point | undefined;

  // Check intersection with left and right bounds
  if (dirX !== 0) {
    let tMinX = (rect.minX - point.x) / dirX;
    let yMinX = point.y + tMinX * dirY;
    if (tMinX >= 0 && yMinX >= rect.minY && yMinX <= rect.maxY && tMinX < t) {
      t = tMinX;
      intersection = { x: rect.minX, y: yMinX };
    }

    let tMaxX = (rect.maxX - point.x) / dirX;
    let yMaxX = point.y + tMaxX * dirY;
    if (tMaxX >= 0 && yMaxX >= rect.minY && yMaxX <= rect.maxY && tMaxX < t) {
      t = tMaxX;
      intersection = { x: rect.maxX, y: yMaxX };
    }
  }

  // Check intersection with bottom and top bounds
  if (dirY !== 0) {
    let tMinY = (rect.minY - point.y) / dirY;
    let xMinY = point.x + tMinY * dirX;
    if (tMinY >= 0 && xMinY >= rect.minX && xMinY <= rect.maxX && tMinY < t) {
      t = tMinY;
      intersection = { x: xMinY, y: rect.minY };
    }

    let tMaxY = (rect.maxY - point.y) / dirY;
    let xMaxY = point.x + tMaxY * dirX;
    if (tMaxY >= 0 && xMaxY >= rect.minX && xMaxY <= rect.maxX && tMaxY < t) {
      t = tMaxY;
      intersection = { x: xMaxY, y: rect.maxY };
    }
  }

  return intersection;
};

const direction = Math.random() * Math.PI * 2;
console.log(
  findRayRectangleIntersection({ x: 0, y: 0 }, { minX: -1, maxX: 1, minY: -1, maxY: 1 }, direction),
  findRayRectangleIntersection({ x: 0, y: 0 }, { minX: -1, maxX: 1, minY: -1, maxY: 1 }, direction + Math.PI),
);
