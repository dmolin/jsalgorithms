import { countUniqueValues } from "./countUniqueValues";

describe("countUniqueValues", () => {
  test("should return zero if empty or no input is provided", () => {
    expect(countUniqueValues()).toEqual(0);
    expect(countUniqueValues([])).toEqual(0);
  });

  test("should return the correct count", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1])).toEqual(1);
    expect(countUniqueValues([0, 1, 1, 2, 2, 3, 3])).toEqual(4);
    expect(countUniqueValues([-2, -1, -1, -1, 0, 2, 3])).toEqual(5);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
  });
});
