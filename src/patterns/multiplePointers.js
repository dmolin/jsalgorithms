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


export function areThereDuplicates(...inputs) {
  if (!inputs || !inputs.length) return false;

  const frequency = {};
  for (let idx in inputs) {
    const v = inputs[idx];
    frequency[v] = (frequency[v] || 0) + 1;
    if (frequency[v] > 1) return true;
  }
  return false;
}

/**
 * @summary Taken from: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].

This is an example using multiple pointers.
It all starts with 2 pointers in the same position (index -1).
 */
export function binaryGap (num) {
  if (!num || isNaN(num)) return 0;
  // convert number to binary using right shift to coherce to unsigned integer and then Numer.toString(2)
  const binaryStr = (parseInt(num, 10) >>> 0).toString(2);

  // set the 2 pointers to a neutral position (-1)
  let start = -1;
  let end = -1;
  let maxGap = 0;

  // start looping (O(n) time)
  binaryStr.split("").forEach((v, idx) => {
    const value = parseInt(v, 10);

    if (value === 0 && end >= 0) {
      // if ZERO, move end forward only if the 2 pointers are NOT in neutral position
      end = idx;
    }

    if (value === 1) {
      // if ONE, save distance in temp variable (O(1) space) and reset pointers together in new position
      if (start >= 0 && end >= 0) {
        maxGap = Math.max(maxGap, end - start);
      }
      start = idx;
      end = idx;
    }
  });
  return maxGap;
}
