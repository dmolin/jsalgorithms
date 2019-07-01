/**
 * @summary This problem is also solved with the "multiple pointers" approach, in O(1) space
 * @param {} sortedArr
 */
export function countUniqueValues(sortedArr) {
  if (!sortedArr) return 0;

  const counter = sortedArr.reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(counter).length;
}
