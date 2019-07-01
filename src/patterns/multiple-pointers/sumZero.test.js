import { sumZero } from "./sumZero";

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
