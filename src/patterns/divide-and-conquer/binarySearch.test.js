import { binarySearch } from "./binarySearch";

describe("binarySearch", () => {
  test("should return -1 if no array is provided", () => {
    expect(binarySearch()).toEqual(-1);
  });

  test("should return -1 if an empty array is provided", () => {
    expect(binarySearch([], 5)).toEqual(-1);
  });

  test("should find the element if present", () => {
    expect(binarySearch([1,3,4,5,23,44], 5)).toEqual(3);
    expect(binarySearch([1, 3, 4, 5, 23, 44, 55], 44)).toEqual(5);
    expect(binarySearch([1, 3, 4, 5, 23, 44, 55], 3)).toEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
    expect(binarySearch([1, 3, 4, 5, 23, 44, 55], 22)).toEqual(-1);
    expect(binarySearch([1, 3, 4, 5, 23, 44, 55, 66], 22)).toEqual(-1);
  });
});
