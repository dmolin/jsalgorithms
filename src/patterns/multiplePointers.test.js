import { sumZero, countUniqueValues } from "./multiplePointers";

describe("sumZero", () => {
  test("shoult fail if no array if provided", () => {
    expect(sumZero()).toBe(undefined);
  });

  test("should fail if an empty array is provided", () => {
    expect(sumZero([])).toBe(undefined);
  });

  test("should fail if the array starts with a zero or positive value", () => {
    expect(sumZero([0,2,3,6])).toBe(undefined);
    expect(sumZero([1, 2, 3, 6])).toBe(undefined);
  })

  test("should fail if no match is found", () => {
    expect(sumZero([-4,-1,2,5])).toBe(undefined);
  });

  test("should work with the correct input", () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3,3]);
    expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6])).toEqual([-3, 3]);
    expect(sumZero([-3, -2, -1, 1, 4, 6])).toEqual([-1, 1]);
  });
});

describe("countUniqueValues", () => {
  test("should return zero if empty or no input is provided", () => {
    expect(countUniqueValues()).toEqual(0);
    expect(countUniqueValues([])).toEqual(0);
  });

  test("should return the correct count", () => {
    expect(countUniqueValues([1,1,1,1,1])).toEqual(1);
    expect(countUniqueValues([0,1,1,2,2,3,3])).toEqual(4);
    expect(countUniqueValues([-2,-1,-1,-1,0,2,3])).toEqual(5);
    expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toEqual(7);
  });
});
