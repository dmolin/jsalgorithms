import { sameFrequency } from "./sameFrequency";

describe("sameFrequency", () => {
  test("should return false if the 2 numbers have no equal frequency", () => {
    expect(sameFrequency(123, 332)).toBe(false);
  });

  test("should return true if the 2 numbers have the same frequency", () => {
    expect(sameFrequency(123, 231)).toBe(true);
  });
});
