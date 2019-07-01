export function countUniqueValues(sortedArr) {
  if (!sortedArr || !sortedArr.length) return 0;

  // multiple pointers?
  // if the array is sorted, that means that multiple occurrences will always be adjacent for a value.
  // can I use the "distance" between the 2 pointers as a clue?
  let start = 0;
  let end = 0;
  sortedArr.forEach((v, idx) => {
    // note: end moves immediately forward at the first element (we've at least 1 unique value already)
    if (idx === 0 || v > sortedArr[idx - 1]) end++;
  });
  return end - start;
}
