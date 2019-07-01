import { sameButSquared } from "./sameButSquared";

describe("sameButSquared", () => {
  test("should return false if not enough input is provided", () => {
    expect(sameButSquared()).toBe(false);
  });

  test("should return false if the 2 arrays have different length", () => {
    expect(sameButSquared([1, 2, 3], [1, 9])).toBe(false);
  });

  test("should return false if values are not matching", () => {
    expect(sameButSquared([1, 2, 3], [1, 4, 10])).toBe(false);
  });

  test("shhould check that 2 arrays are one the squares of the other (any order)", () => {
    expect(sameButSquared([1, 2, 3], [9, 1, 4])).toBe(true);
  });
})
