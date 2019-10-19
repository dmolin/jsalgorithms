/**
 * Write a function which accept 2 parameters: an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than
 * or equal to the integer passed to the function. If there isn't one, return 0 instead.
 *
 * Examples:
 * minSubArrayLen([2,3,1,2,4,3], 7) => 2 (because [4.3] is the smallest subarray)
 * minSubArrayLen([2,1,6,5,4], 9) => 2 => (bcause [5,4] is the smallest subarray)
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) => 1 ([62])
 * minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) => 3
 * minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) => 5
 * minSubArrayLen([4,3,3,8,1,2,3], 11) => 2
 * minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) => 0
 *
 * Expected time complexity: O(n)
 * Expected space complexity: O(1)
 */

export function minSubArrayLen (arr, threshold) {
  if (!arr || !arr.length) return 0;
  // if no threshold is provided, ANY value in the array
  // will automatically represent a solution to the problem
  if (!threshold) return 1;

  // build the smallest window (1 slot)
  // at each step of the iteration over the array, increase the window and check if the current total is >= than the threshold value
  // if we get to the end of the array, we return 0 (not found) if our sum is < than the threshold.
  // if at any point our sum is > than the threshold, we start reducing the window from the
}
