
export type Point = {
  x1: number
  y1: number
  x2: number
  y2: number
}
const hasIntersection = (a: Point, b: Point) => {
  // has horizontal gap
  if (a.x1 > b.x2 || b.x1 > a.x2) return false;
  // has vertical gap
  if (a.y1 > b.y2 || b.y1 > a.y2) return false;
  return true;
}

export default hasIntersection;