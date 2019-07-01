import { areThereDuplicates } from "./areThereDuplicates";

describe("areThereDuplicates", () => {
  test("should return false if no input is provided", () => {
    expect(areThereDuplicates()).toBe(false);
  });

  test("should return false if no duplicates are found", () => {
    expect(areThereDuplicates(1)).toBe(false);
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
  });

  test("should return true if duplicates are found", () => {
    expect(areThereDuplicates(1, 2, 1)).toBe(true);
  });
});
