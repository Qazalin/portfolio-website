/**
 * Finds the intersection of two arrays
 * @param array1
 * @param array2
 */
export function findListIntersection<T = any>(array1: T[], array2: T[]): T[] {
  const intersection = array1.filter((value) => array2.includes(value));
  return intersection;
}

// Generic helper function that can be used for the three operations:
const operation = (list1: array, list2, isUnion = false) =>
  list1.filter(
    (
      (set) => (a) =>
        isUnion === set.has(a.userId)
    )(new Set(list2.map((b) => b.userId)))
  );

export function findObjectIntersection<T = any>(
  array1: T[],
  array2: T[],
  isUnion = false
): T[] {
  const result = array1.filter(
    (
      (set) => (a) =>
        isUnion === set.has(a.userId)
    )(new Set(array2.map((b) => b.userId)))
  );
  return result;
}

// Following functions are to be used:
const inBoth = (list1, list2) => operation(list1, list2, true),
  inFirstOnly = operation,
  inSecondOnly = (list1, list2) => inFirstOnly(list2, list1);
