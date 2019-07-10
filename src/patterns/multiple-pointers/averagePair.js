/**
 * @summary Write a function called averagePair. given a sorted array of values and a target average,
 * determine if there is a pair where the average of the pair equals to the target average.
 * [1,3,3,5,6,7,10,12,19], 8
 */
export function averagePair (sortedArray, targetAverage) {
  if (!sortedArray || !sortedArray.length) return false;
  if (!targetAverage || Number.isNaN(Number.parseFloat(targetAverage))) return false;

  // 1 pointer to the start
  // 1 pointer to the end
  // if sum/2 > target, move back the end
  // if sum/2 < target, move forward the start
  let start = 0;
  let end = sortedArray.length - 1;

  while (end > start) {
    const result = (sortedArray[start] + sortedArray[end]) / 2;
    if (result === targetAverage) return true;
    if (result > targetAverage) {
      end--;
    }
    if (result < targetAverage) {
      start++;
    }
  }
  return false;
}
