/**
 * This pattern is used when moving through list of elements maintaning certain distances between 2 separate pointers to the data.
 */

export function sumZero (arr) {
  if (!arr || !arr.length) return;
  // no way we can sum to zero if we start positive
  if (arr[0] >= 0) return;

  let idxStart = 0;
  let idxEnd = arr.length - 1;

  while (idxStart < idxEnd) {
    const valStart = arr[idxStart];
    const valEnd = arr[idxEnd];
    const sum = valStart + valEnd;

    if (sum === 0) return [valStart, valEnd];

    if (sum < 0) {
      // move the first forward
      idxStart++;
    } else {
      idxEnd--;
    }
  }
}

export function countUniqueValues (sortedArr) {
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
