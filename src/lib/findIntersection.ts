/**
 * Finds the intersection of two arrays
 * @param array1
 * @param array2
 */
export function findListIntersection<T = any>(array1: T[], array2: T[]): T[] {
  const intersection = array1.filter((value) => array2.includes(value));
  return intersection;
}

/**
 * Returns the intersections between two arrays of objects
 * @param obj1
 * @param obj2
 * @returns An array of the intersections
 */
export function getObjectIntersections(
  obj1: { type: string; value: string }[],
  obj2: { type: string; value: string }[]
) {
  const intersections = [];
  const r = obj1.filter((k) =>
    obj2.map(({ type, value }, i) => {
      const doesIntersect = k.type === type && k.value === value;
      if (doesIntersect) {
        intersections.push(obj2[i]);
      }
    })
  );
  return intersections;
}
