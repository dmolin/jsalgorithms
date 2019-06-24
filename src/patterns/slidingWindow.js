/**
 * In the sliding window pattern we create a data "window" that we move around looking for our optimal solution.
 * A sliding window is a way to avoid O(n^2) performances.
 */

export function maxSubarraySum (arr, num) {
  if (!arr || !arr.length) return 0;
  if (num > arr.length) return 0;

  let maxSum = 0;
  let sum = 0;

  // first, create the window over the first chunk of data
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  sum = maxSum;
  // now, iterate over the array, check for the sums and move the window forward
  for (let j = num; j < arr.length; j++) {
    sum = sum + arr[j] - arr[j - num];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
