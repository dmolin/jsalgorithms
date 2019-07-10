import { averagePair } from "./averagePair";

describe("averagePair", () => {
  test("should return false if no input is provided", () => {
    expect(averagePair()).toBe(false);
    expect(averagePair([])).toBe(false);
  });

  test("should return false if the target is not a number", () => {
    expect(averagePair([1,2,3], "aa")).toBe(false);
  });

  test("should return false if no match is found", () => {
    expect(averagePair([1,2,3], 4)).toBe(false);
  });

  test("should return true if the target average is found (moving start)", () => {
    expect(averagePair([1, 2, 4, 7, 8, 10], 6)).toBe(true);
    expect(averagePair([1, 2, 4, 7, 8, 10], 7)).toBe(true);
  });

  test("should return true if the target average is found (moving end)", () => {
    expect(averagePair([1, 2, 3, 4, 5, 6], 5)).toBe(true);
    expect(averagePair([2, 4, 7, 8, 10, 20], 5)).toBe(true);
    expect(averagePair([1, 2, 4, 7, 8, 10, 20], 5)).toBe(true);
  });

  test("should return true if the target average is found (meet in the middle)", () => {
    expect(averagePair([1, 2, 3, 4, 5, 6], 3.5)).toBe(true);
    expect(averagePair([2, 4, 7, 8, 10, 20, 30, 35], 9)).toBe(true);
    expect(averagePair([2, 4, 6, 8, 10, 12, 30, 35], 8)).toBe(true);
  });

});
