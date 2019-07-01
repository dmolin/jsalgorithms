/**
 * Divide and conquer involves dividing a data set into smaller chunks and then repeating the process with  a subset of the data.
 */


/**
 * Application of Divide and conquer: binary search.
 * @summary find a vlaue in a sorted array
 */
export function binarySearch (sortedArray, value) {
  if (!sortedArray || !sortedArray.length) return -1;

  let start = 0;
  let end = sortedArray.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((end - start) / 2) + start;

    if (sortedArray[middle] === value) return middle;

    // we've narroed the search to the minimum, without finding any value
    if (start === middle) break;

    // check position of middle in relation to the value we're looking for
    if (sortedArray[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
