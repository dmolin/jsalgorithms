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
