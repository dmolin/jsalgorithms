import { maxSubarraySum } from "./maxSubarraySum";

describe("slidingWindow", () => {
  test("should return 0 if no array is provided", () => {
    expect(maxSubarraySum()).toEqual(0);
  });

  test("should return 0 if num > array length", () => {
    expect(maxSubarraySum([1,2,3], 4)).toEqual(0);
    expect(maxSubarraySum([2, 3], 3)).toEqual(0);
  });

  test("should returns the max sum of n contiguous values in the array", () => {
    expect(maxSubarraySum([3,2,4,1,5,8,1], 3)).toEqual(14);
    expect(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)).toEqual(39);
    expect(maxSubarraySum([100,200,300,400], 2)).toEqual(700);
    expect(maxSubarraySum([-3,4,0,-2,6,-1], 2)).toEqual(5);
  })
});
